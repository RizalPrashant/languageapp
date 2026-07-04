/* Phase 2 — one-time ambient dialog pools for every NPC.
   ~14 personality lines each, in segment format referencing bank words.
   Ships as src/data/ambientGen.ts — static asset, shared by all users.
   Run: npx tsx scripts/gen-ambient.ts */
import Anthropic from '@anthropic-ai/sdk'
import { readFileSync, writeFileSync } from 'fs'
import { NPCS } from '../src/data/world'

const MODEL = 'claude-haiku-4-5'
const IN_PRICE = 1 / 1e6, OUT_PRICE = 5 / 1e6

function findKey(): string {
  for (const [file, name] of [['.env.local', 'VITE_ANTHROPIC_KEY'], ['../.env', 'ANTHROPIC_KEY']] as const) {
    try {
      const m = readFileSync(file, 'utf8').match(new RegExp(`^${name}\\s*=\\s*(.+)$`, 'm'))
      if (m) return m[1].trim().replace(/^["']|["']$/g, '')
    } catch { /* try next */ }
  }
  throw new Error('no API key found')
}
const client = new Anthropic({ apiKey: findKey() })

interface VocabRow { id: number; ja: string; en: string; level: number }
const vocab: VocabRow[] = JSON.parse(readFileSync('public/vocab-ja.json', 'utf8'))
const MAX_ID = vocab.length

/* sample ~260 words spread across the whole difficulty range for reference */
const sample = vocab.filter((_, i) => i % 23 === 0)

type Seg = { t: string } | { w: number }
function normalize(raw: unknown): Seg[] | null {
  if (!Array.isArray(raw) || !raw.length) return null
  const out: Seg[] = []
  for (const s of raw) {
    if (s && typeof s === 'object' && 't' in s && typeof (s as { t: unknown }).t === 'string') {
      const t = (s as { t: string }).t
      if (t !== '') out.push({ t })
    } else if (s && typeof s === 'object' && 'w' in s && typeof (s as { w: unknown }).w === 'number') {
      const w = (s as { w: number }).w
      if (w < 1 || w > MAX_ID) return null
      out.push({ w })
    } else return null
  }
  for (let i = 0; i < out.length; i++) {
    if (!('w' in out[i])) continue
    const prev = out[i - 1]
    if (prev && 't' in prev && prev.t && !/[\s"'(‘“—-]$/.test(prev.t)) prev.t += ' '
    const next = out[i + 1]
    if (next && 't' in next && /^[A-Za-z0-9]/.test(next.t)) next.t = ' ' + next.t
  }
  return out
}

const SYSTEM = `You write ambient small-talk lines for one NPC of a Japanese-learning pixel-art life-sim (cozy Ghibli small-town energy).

Text is stored as segments: {"t":"english text"} or {"w":<word id>}. A {"w"} slot renders as the ENGLISH gloss until the player learns that word, then as JAPANESE forever — every line must read naturally BOTH ways. Include spaces in "t" so segments join cleanly. ASCII only in "t". No quotes or apostrophes inside text.

Return ONLY a minified JSON array of exactly 14 lines: [[segs],[segs],...]
- each line 6-18 words, strongly in this NPC's persona, funny or warm
- weave 1-2 {"w"} references into most lines (a few plain lines are fine), chosen from the provided word list where they fit this NPC's life
- vary topics: their quirks, gossip about the other townsfolk by role, weather, small daily events`

const wordList = sample.map(w => `${w.id}=${w.en}(${w.ja})`).join(', ')
let inTok = 0, outTok = 0

async function genFor(npcId: string, persona: string, loc: string): Promise<Seg[][]> {
  const user = `NPC: ${npcId} — ${persona} (hangs out at: ${loc})\nOther townsfolk: ${NPCS.filter(n => n.id !== npcId).map(n => n.id).join(', ')}\n\nWord list (id=english(japanese)):\n${wordList}`
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const resp = await client.messages.create({
        model: MODEL,
        max_tokens: 2500,
        system: SYSTEM,
        messages: [{ role: 'user', content: user }]
      })
      inTok += resp.usage.input_tokens
      outTok += resp.usage.output_tokens
      const text = resp.content.filter(b => b.type === 'text').map(b => (b as { text: string }).text).join('')
      const cleaned = text.replace(/```json|```/g, '').trim()
      const raw = JSON.parse(cleaned.slice(cleaned.indexOf('['), cleaned.lastIndexOf(']') + 1)) as unknown[]
      const good = raw.map(normalize).filter((x): x is Seg[] => !!x)
      if (good.length >= 8) return good
    } catch { /* retry */ }
    await new Promise(r => setTimeout(r, 1500))
  }
  console.warn(`warning: ${npcId} generation failed — keeping baseline lines only`)
  return []
}

async function main() {
  const out: Record<string, Seg[][]> = {}
  let total = 0
  for (const npc of NPCS) {
    out[npc.id] = await genFor(npc.id, npc.persona, npc.loc)
    total += out[npc.id].length
    console.log(`${npc.id}: ${out[npc.id].length} lines`)
  }
  const cost = inTok * IN_PRICE + outTok * OUT_PRICE

  const ts = `import type { Seg } from '../types'

/* Generated ambient dialog pools (phase 2 one-time Haiku pass).
   Overwritten by scripts/gen-ambient.ts — do not edit by hand.
   Merged after each NPC's hand-authored baseline lines. */
export const AMBIENT_GEN: Record<string, Seg[][]> = ${JSON.stringify(out)}
`
  writeFileSync('src/data/ambientGen.ts', ts)
  console.log(`ambient pools: ${total} lines across ${NPCS.length} NPCs -> src/data/ambientGen.ts`)
  console.log(`TOKENS in=${inTok} out=${outTok} · COST $${cost.toFixed(4)}`)
}

main().catch(e => { console.error(e); process.exit(1) })
