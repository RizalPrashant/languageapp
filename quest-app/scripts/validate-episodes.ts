/* Static episode validator (multi-language): npx tsx scripts/validate-episodes.ts */
import { readFileSync } from 'fs'
import { EPISODES } from '../src/data/episodes'
import { NPCS, WORLD } from '../src/data/world'
import { LEX } from '../src/data/lexicon'

const vocab = JSON.parse(readFileSync('public/vocab-ja.json', 'utf8')) as Array<{ id: number; ja: string }>
const bankJa = new Set(vocab.map(v => v.ja))
const npcIds = new Set(NPCS.map(n => n.id))
const objIds = new Set<string>()
for (const loc of Object.values(WORLD)) for (const o of loc.objects) objIds.add(o.id)

let errors = 0
const seen = new Map<string, number>()
const err = (m: string) => { errors++; console.log('✗', m) }

for (const ep of EPISODES) {
  if (ep.words.length !== 8) err(`ep${ep.ep}: ${ep.words.length} words (need 8)`)
  for (const c of ep.words) {
    const row = LEX[c]
    if (!row) { err(`ep${ep.ep}: concept "${c}" missing from lexicon`); continue }
    if (!bankJa.has(row[0])) err(`ep${ep.ep}: ja word ${row[0]} (${c}) not in ja bank`)
    if (!row[3] || !row[4]) err(`ep${ep.ep}: zh missing for "${c}"`)
    if (!row[5]) err(`ep${ep.ep}: de missing for "${c}"`)
    // reuse across episodes is allowed from season 8 on (review words)
    if (seen.has(c) && ep.ep <= 70) err(`ep${ep.ep}: "${c}" already used in ep${seen.get(c)}`)
    else seen.set(c, ep.ep)
  }
  const questWords = new Set(ep.quests.map(q => q.word))
  for (const c of ep.words) if (!questWords.has(c)) err(`ep${ep.ep}: "${c}" has no quest`)
  for (const q of ep.quests) {
    if (!ep.words.includes(q.word)) err(`ep${ep.ep}: quest word "${q.word}" not in words[]`)
    if (q.type === 'talk' && (!q.npc || !npcIds.has(q.npc))) err(`ep${ep.ep}/${q.word}: bad npc ${q.npc}`)
    if (q.type === 'inspect' && (!q.obj || !objIds.has(q.obj))) err(`ep${ep.ep}/${q.word}: bad obj ${q.obj}`)
    if (q.type === 'do' && (!q.loc || !WORLD[q.loc])) err(`ep${ep.ep}/${q.word}: bad loc ${q.loc}`)
    if (q.type === 'buy' && !q.item) err(`ep${ep.ep}/${q.word}: buy without item`)
    if (!q.ask?.includes(`{${q.word}}`)) err(`ep${ep.ep}/${q.word}: ask missing {${q.word}} marker`)
  }
  const texts = [ep.story, ...ep.quests.map(q => q.ask || ''), ...Object.values(ep.npcLines).flat(), ...Object.values(ep.stageToasts || {})]
  for (const t of texts) {
    for (const m of t.matchAll(/\{([^}|]+)(\|[^}]*)?\}/g)) {
      if (!LEX[m[1]] && !m[2]) err(`ep${ep.ep}: marker {${m[1]}} not a lexicon concept and no |fallback`)
    }
  }
  for (const id of Object.keys(ep.npcLines)) if (!npcIds.has(id)) err(`ep${ep.ep}: npcLines for unknown npc ${id}`)
}
// nameplate concepts must exist too
for (const n of NPCS) if (n.nameWord && !LEX[n.nameWord]) err(`npc ${n.id}: nameWord "${n.nameWord}" not in lexicon`)

console.log(errors ? `\n${errors} error(s)` : `all ${EPISODES.length} episodes valid across ja/zh/de ✓`)
process.exit(errors ? 1 : 0)
