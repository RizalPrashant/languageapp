/* Phase 3b — one-time quest generation for every bank word.
   Emits public/quests-ja.json: [{id, pos, quest}] in the engine's QuestSpec schema.
   Shared static asset: generated once, shipped to every user. Prints exact API spend.
   Run: npx tsx scripts/gen-quests.ts */
import Anthropic from '@anthropic-ai/sdk'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { NPCS, WORLD } from '../src/data/world'

/* ---------- config ---------- */
const MODEL = 'claude-haiku-4-5'
const CHUNK = 50
const CONCURRENCY = 5
const SPEND_ABORT_USD = 3.0        // hard safety brake
const PROGRESS_FILE = 'scripts/.quests-progress.json'
const IN_PRICE = 1 / 1e6, OUT_PRICE = 5 / 1e6

/* ---------- key ---------- */
function findKey(): string {
  for (const [file, name] of [['.env.local', 'VITE_ANTHROPIC_KEY'], ['../.env', 'ANTHROPIC_KEY']] as const) {
    try {
      const m = readFileSync(file, 'utf8').match(new RegExp(`^${name}\\s*=\\s*(.+)$`, 'm'))
      if (m) return m[1].trim().replace(/^["']|["']$/g, '')
    } catch { /* try next */ }
  }
  throw new Error('no API key found in .env.local or ../.env')
}
const client = new Anthropic({ apiKey: findKey() })

/* ---------- registry ---------- */
interface VocabRow { id: number; ja: string; reading: string; romaji: string; en: string; level: number }
const vocab: VocabRow[] = JSON.parse(readFileSync('public/vocab-ja.json', 'utf8'))

const npcList = NPCS.map(n => `${n.id} (${n.persona}; at ${n.loc})`).join('\n')
const objByLoc: Record<string, string> = {}
const objList: string[] = []
for (const loc of Object.values(WORLD)) {
  for (const o of loc.objects) { objByLoc[o.id] = loc.id; objList.push(`${o.id}@${loc.id}`) }
}
const NPC_IDS = new Set(NPCS.map(n => n.id))
const DO_LOCS = new Set(['park', 'street', 'gym'])

const SYSTEM = `You assign quests for a Japanese-learning pixel-art life-sim. The player learns one word per quest.

World registry:
NPCs:
${npcList}
Objects (id@location): ${objList.join(', ')}
"do" locations: park, street, gym (verb: walk or run)

For EACH input word return one entry:
{"id":<word id>,"pos":"noun|verb|adjective","quest":Q}
Q is ONE of:
{"type":"talk","npc":"<npc id>","ask":[segs]}          — a line said to/about that NPC
{"type":"buy","item":"<english item>","ask":[segs]}     — asking the shopkeeper for it (only for purchasable things)
{"type":"inspect","obj":"<object id>","ask":[segs]}     — examining that object (pick a thematically fitting object)
{"type":"do","loc":"park|street|gym","verb":"walk|run","amount":700,"desc":[segs]}  — only for motion verbs

segs = array of {"t":"english text"} and exactly one {"w":<this word's id>}. Max 9 words of text total.
The {"w"} slot renders as the ENGLISH gloss before learning and as the JAPANESE word after — the line must read naturally BOTH ways. Example for id 42 (fish): [{"t":"Fresh "},{"w":42},{"t":" for dinner tonight?"}]

Rules:
- pos: infer from the gloss ("to X" = verb; feels-like-adjective = adjective; else noun).
- Concrete household/food/nature things -> inspect or buy at a fitting object; people/roles/social/abstract words -> talk with a fitting NPC (match their persona/location: work words -> boss/coworker, fitness -> trainer, food -> mom/shopkeeper, nature/age/time -> oldman, slang/fun -> sister/friend).
- Vary quest types and NPCs across the batch. Abstract or advanced words are ALWAYS "talk".
- Keep lines charming, everyday, personality-true. No quotes inside text. ASCII text only in "t".
Return ONLY a JSON array, minified, one entry per input word, same order.`

/* ---------- validation ---------- */
type Seg = { t: string } | { w: number }
interface Entry { id: number; pos: string; quest: Record<string, unknown> }

function validSegs(segs: unknown, wordId: number): Seg[] | null {
  if (!Array.isArray(segs) || !segs.length) return null
  let hasW = false
  const out: Seg[] = []
  for (const s of segs) {
    if (s && typeof s === 'object' && 't' in s && typeof (s as { t: unknown }).t === 'string') {
      const t = (s as { t: string }).t
      if (t !== '') out.push({ t })
    } else if (s && typeof s === 'object' && 'w' in s && typeof (s as { w: unknown }).w === 'number') {
      const w = (s as { w: number }).w
      if (w === wordId) hasW = true
      if (w >= 1 && w <= vocab.length) out.push({ w })
      else return null
    } else return null
  }
  if (!hasW) return null
  // normalize spacing around word slots so segments concatenate cleanly
  for (let i = 0; i < out.length; i++) {
    if (!('w' in out[i])) continue
    const prev = out[i - 1]
    if (prev && 't' in prev && prev.t && !/[\s"'(‘“—-]$/.test(prev.t)) prev.t += ' '
    const next = out[i + 1]
    if (next && 't' in next && /^[A-Za-z0-9]/.test(next.t)) next.t = ' ' + next.t
  }
  return out
}

function fallback(word: VocabRow): Entry {
  const pos = word.en.startsWith('to ') ? 'verb' : 'noun'
  const npc = NPCS[word.id % NPCS.length].id
  const ask: Seg[] = pos === 'verb'
    ? [{ t: 'These days I just want ' }, { w: word.id }, { t: '.' }]
    : [{ t: 'Tell me about ' }, { w: word.id }, { t: '.' }]
  return { id: word.id, pos, quest: { type: 'talk', npc, ask } }
}

function validate(raw: unknown, words: VocabRow[]): Entry[] {
  const byId = new Map(words.map(w => [w.id, w]))
  const out = new Map<number, Entry>()
  if (Array.isArray(raw)) {
    for (const e of raw as Array<Record<string, unknown>>) {
      const word = byId.get(e?.id as number)
      if (!word || out.has(word.id)) continue
      const pos = ['noun', 'verb', 'adjective'].includes(e.pos as string) ? (e.pos as string) : (word.en.startsWith('to ') ? 'verb' : 'noun')
      const q = e.quest as Record<string, unknown> | undefined
      if (!q) continue
      let quest: Record<string, unknown> | null = null
      if (q.type === 'talk' && NPC_IDS.has(q.npc as string)) {
        const ask = validSegs(q.ask, word.id)
        if (ask) quest = { type: 'talk', npc: q.npc, ask }
      } else if (q.type === 'buy' && typeof q.item === 'string') {
        const ask = validSegs(q.ask, word.id)
        if (ask) quest = { type: 'buy', item: (q.item as string).slice(0, 30), ask }
      } else if (q.type === 'inspect' && objByLoc[q.obj as string]) {
        const ask = validSegs(q.ask, word.id)
        if (ask) quest = { type: 'inspect', obj: q.obj, loc: objByLoc[q.obj as string], ask }
      } else if (q.type === 'do' && DO_LOCS.has(q.loc as string) && (q.verb === 'walk' || q.verb === 'run')) {
        const desc = validSegs(q.desc, word.id)
        const amount = Math.max(400, Math.min(1200, Number(q.amount) || 700))
        if (desc) quest = { type: 'do', loc: q.loc, verb: q.verb, amount, desc }
      }
      if (quest) out.set(word.id, { id: word.id, pos, quest })
    }
  }
  return words.map(w => out.get(w.id) || fallback(w))
}

/* ---------- run ---------- */
interface Progress { chunks: Record<number, Entry[]>; inTok: number; outTok: number; fallbacks: number }
const progress: Progress = existsSync(PROGRESS_FILE)
  ? JSON.parse(readFileSync(PROGRESS_FILE, 'utf8'))
  : { chunks: {}, inTok: 0, outTok: 0, fallbacks: 0 }

let chunks: VocabRow[][] = []
for (let i = 0; i < vocab.length; i += CHUNK) chunks.push(vocab.slice(i, i + CHUNK))
const LIMIT = Number(process.env.LIMIT || 0)
if (LIMIT) chunks = chunks.slice(0, LIMIT)   // smoke-test mode

let done = Object.keys(progress.chunks).length
const cost = () => progress.inTok * IN_PRICE + progress.outTok * OUT_PRICE

async function runChunk(ci: number): Promise<void> {
  if (progress.chunks[ci]) return
  const words = chunks[ci]
  const userMsg = 'Words:\n' + words.map(w => `${w.id}|${w.ja}|${w.reading}|${w.en}`).join('\n')
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const resp = await client.messages.create({
        model: MODEL,
        max_tokens: 4500,
        system: SYSTEM,
        messages: [{ role: 'user', content: userMsg }]
      })
      progress.inTok += resp.usage.input_tokens
      progress.outTok += resp.usage.output_tokens
      const text = resp.content.filter(b => b.type === 'text').map(b => (b as { text: string }).text).join('')
      const cleaned = text.replace(/```json|```/g, '').trim()
      let raw: unknown = null
      try { raw = JSON.parse(cleaned.slice(cleaned.indexOf('['), cleaned.lastIndexOf(']') + 1)) } catch { /* validate() falls back */ }
      const entries = validate(raw, words)
      progress.fallbacks += entries.filter((e, i) => {
        const r = Array.isArray(raw) ? (raw as Array<{ id?: number }>).find(x => x?.id === words[i].id) : null
        return !r
      }).length
      progress.chunks[ci] = entries
      done++
      if (done % 10 === 0 || done === chunks.length) {
        writeFileSync(PROGRESS_FILE, JSON.stringify(progress))
        console.log(`chunk ${done}/${chunks.length} · in=${progress.inTok} out=${progress.outTok} · $${cost().toFixed(3)}`)
      }
      if (cost() > SPEND_ABORT_USD) { writeFileSync(PROGRESS_FILE, JSON.stringify(progress)); throw new Error('SPEND BRAKE HIT') }
      return
    } catch (e) {
      if ((e as Error).message === 'SPEND BRAKE HIT') throw e
      if (attempt === 2) { progress.chunks[ci] = words.map(fallback); done++; return }
      await new Promise(r => setTimeout(r, 2000 * (attempt + 1)))
    }
  }
}

async function main() {
  const queue = chunks.map((_, i) => i).filter(i => !progress.chunks[i])
  console.log(`${chunks.length} chunks total, ${queue.length} to do`)
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const ci = queue.shift()
      if (ci === undefined) break
      await runChunk(ci)
    }
  })
  await Promise.all(workers)
  writeFileSync(PROGRESS_FILE, JSON.stringify(progress))

  const all: Entry[] = []
  for (let i = 0; i < chunks.length; i++) all.push(...(progress.chunks[i] || chunks[i].map(fallback)))
  all.sort((a, b) => a.id - b.id)
  writeFileSync('public/quests-ja.json', JSON.stringify(all))

  const types = all.reduce<Record<string, number>>((a, e) => { const t = (e.quest as { type: string }).type; a[t] = (a[t] || 0) + 1; return a }, {})
  console.log(`\nDONE: ${all.length} quests -> public/quests-ja.json`)
  console.log('quest types:', JSON.stringify(types))
  console.log(`fallback templates used: ${progress.fallbacks}`)
  console.log(`TOKENS in=${progress.inTok} out=${progress.outTok}`)
  console.log(`TOTAL COST: $${cost().toFixed(3)}`)
}

main().catch(e => { console.error(e); process.exit(1) })
