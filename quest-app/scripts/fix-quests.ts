/* Repair pass: regenerate quests that fell back to templates
   (chunks that hit the token cap and failed JSON parsing in gen-quests).
   Smaller chunks + higher max_tokens + parse retries. Prints exact spend.
   Run: npx tsx scripts/fix-quests.ts */
import Anthropic from '@anthropic-ai/sdk'
import { readFileSync, writeFileSync } from 'fs'
import { NPCS, WORLD } from '../src/data/world'

const MODEL = 'claude-haiku-4-5'
const CHUNK = 25
const CONCURRENCY = 5
const IN_PRICE = 1 / 1e6, OUT_PRICE = 5 / 1e6

function findKey(): string {
  for (const [file, name] of [['.env.local', 'VITE_ANTHROPIC_KEY'], ['../.env', 'ANTHROPIC_KEY']] as const) {
    try {
      const m = readFileSync(file, 'utf8').match(new RegExp(`^${name}\\s*=\\s*(.+)$`, 'm'))
      if (m) return m[1].trim().replace(/^["']|["']$/g, '')
    } catch { /* try next */ }
  }
  throw new Error('no API key')
}
const client = new Anthropic({ apiKey: findKey() })

interface VocabRow { id: number; ja: string; reading: string; romaji: string; en: string; level: number }
type Seg = { t: string } | { w: number }
interface Entry { id: number; pos: string; quest: Record<string, unknown> }

const vocab: VocabRow[] = JSON.parse(readFileSync('public/vocab-ja.json', 'utf8'))
const vocabById = new Map(vocab.map(v => [v.id, v]))
const quests: Entry[] = JSON.parse(readFileSync('public/quests-ja.json', 'utf8'))

/* identify template fallbacks */
function isFallback(e: Entry): boolean {
  const q = e.quest as { type?: string; ask?: Array<{ t?: string }>; }
  const first = q.ask?.[0]?.t || ''
  return q.type === 'talk' && (first.startsWith('Tell me about') || first.startsWith('These days I just want'))
}
const targets = quests.filter(isFallback).map(e => vocabById.get(e.id)!).filter(Boolean)
console.log(`${targets.length} template quests to regenerate`)

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
{"type":"talk","npc":"<npc id>","ask":[segs]}
{"type":"buy","item":"<english item>","ask":[segs]}
{"type":"inspect","obj":"<object id>","ask":[segs]}
{"type":"do","loc":"park|street|gym","verb":"walk|run","amount":700,"desc":[segs]}

segs = array of {"t":"english text"} and exactly one {"w":<this word's id>}. Max 9 words of text total.
The {"w"} slot renders as the ENGLISH gloss before learning and the JAPANESE word after — the line must be a natural, grammatical sentence BOTH ways. Example for id 42 (fish): [{"t":"Fresh "},{"w":42},{"t":" for dinner tonight?"}]

Rules:
- pos: infer from the gloss ("to X" = verb; descriptive = adjective; else noun).
- Concrete things -> inspect/buy at a fitting object; people/social/abstract/advanced words -> talk with the NPC whose persona fits (work -> boss/coworker, fitness/body -> trainer, food/home -> mom/shopkeeper, nature/time/age -> oldman, fun/slang -> sister/friend).
- NEVER write "Tell me about". Write specific, everyday, personality-true lines. Vary sentence shapes across the batch.
- ASCII text only in "t", no quotes inside text.
Return ONLY a minified JSON array, one entry per input word, same order.`

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
  for (let i = 0; i < out.length; i++) {
    if (!('w' in out[i])) continue
    const prev = out[i - 1]
    if (prev && 't' in prev && prev.t && !/[\s"'(‘“—-]$/.test(prev.t)) prev.t += ' '
    const next = out[i + 1]
    if (next && 't' in next && /^[A-Za-z0-9]/.test(next.t)) next.t = ' ' + next.t
  }
  return out
}

function validateOne(e: Record<string, unknown>, word: VocabRow): Entry | null {
  const pos = ['noun', 'verb', 'adjective'].includes(e.pos as string)
    ? (e.pos as string) : (word.en.startsWith('to ') ? 'verb' : 'noun')
  const q = e.quest as Record<string, unknown> | undefined
  if (!q) return null
  if (q.type === 'talk' && NPC_IDS.has(q.npc as string)) {
    const ask = validSegs(q.ask, word.id)
    if (ask && !(ask[0] && 't' in ask[0] && ask[0].t.startsWith('Tell me about'))) {
      return { id: word.id, pos, quest: { type: 'talk', npc: q.npc, ask } }
    }
  } else if (q.type === 'buy' && typeof q.item === 'string') {
    const ask = validSegs(q.ask, word.id)
    if (ask) return { id: word.id, pos, quest: { type: 'buy', item: (q.item as string).slice(0, 30), ask } }
  } else if (q.type === 'inspect' && objByLoc[q.obj as string]) {
    const ask = validSegs(q.ask, word.id)
    if (ask) return { id: word.id, pos, quest: { type: 'inspect', obj: q.obj, loc: objByLoc[q.obj as string], ask } }
  } else if (q.type === 'do' && DO_LOCS.has(q.loc as string) && (q.verb === 'walk' || q.verb === 'run')) {
    const desc = validSegs(q.desc, word.id)
    const amount = Math.max(400, Math.min(1200, Number(q.amount) || 700))
    if (desc) return { id: word.id, pos, quest: { type: 'do', loc: q.loc, verb: q.verb, amount, desc } }
  }
  return null
}

let inTok = 0, outTok = 0, fixedCount = 0
const fixed = new Map<number, Entry>()

const chunks: VocabRow[][] = []
for (let i = 0; i < targets.length; i += CHUNK) chunks.push(targets.slice(i, i + CHUNK))

async function runChunk(ci: number): Promise<void> {
  const words = chunks[ci]
  const user = 'Words:\n' + words.map(w => `${w.id}|${w.ja}|${w.reading}|${w.en}`).join('\n')
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const resp = await client.messages.create({
        model: MODEL, max_tokens: 4000, system: SYSTEM,
        messages: [{ role: 'user', content: user }]
      })
      inTok += resp.usage.input_tokens
      outTok += resp.usage.output_tokens
      const text = resp.content.filter(b => b.type === 'text').map(b => (b as { text: string }).text).join('')
      const cleaned = text.replace(/```json|```/g, '').trim()
      const raw = JSON.parse(cleaned.slice(cleaned.indexOf('['), cleaned.lastIndexOf(']') + 1)) as Array<Record<string, unknown>>
      const byId = new Map(words.map(w => [w.id, w]))
      for (const e of raw) {
        const word = byId.get(e?.id as number)
        if (!word) continue
        const v = validateOne(e, word)
        if (v) { fixed.set(word.id, v); fixedCount++ }
      }
      return
    } catch {
      await new Promise(r => setTimeout(r, 1500 * (attempt + 1)))
    }
  }
  console.warn(`chunk ${ci} failed after retries — keeping templates for those words`)
}

async function main() {
  const queue = chunks.map((_, i) => i)
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const ci = queue.shift()
      if (ci === undefined) break
      await runChunk(ci)
      if ((chunks.length - queue.length) % 10 === 0) {
        console.log(`${chunks.length - queue.length}/${chunks.length} chunks · $${(inTok * IN_PRICE + outTok * OUT_PRICE).toFixed(3)}`)
      }
    }
  })
  await Promise.all(workers)

  const merged = quests.map(e => fixed.get(e.id) || e)
  writeFileSync('public/quests-ja.json', JSON.stringify(merged))
  const remaining = merged.filter(isFallback).length
  console.log(`\nfixed ${fixedCount}/${targets.length} · templates remaining: ${remaining}`)
  console.log(`TOKENS in=${inTok} out=${outTok} · COST $${(inTok * IN_PRICE + outTok * OUT_PRICE).toFixed(3)}`)
}

main().catch(e => { console.error(e); process.exit(1) })
