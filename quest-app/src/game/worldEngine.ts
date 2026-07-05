import type { Seg } from '../types'
import { BANK, DEAL_ORDER, conceptToId, lineSegs, wordById } from '../lib/bank'
import type { BankWord, QuestSpec } from '../data/wordbank'
import { WORLD, NPCS, type WorldLocation, type WorldNpc } from '../data/world'
import { episodeFor, type EpisodeQuest } from '../data/episodes'
import { todayStr } from '../lib/storage'
import { getWorldProg, type QuestState, type WorldToday } from '../lib/worldStorage'

export const TILE = 16
export const COLS = 16
export const ROWS = 12
export const QUEST_COOLDOWN_MS = 15000     // fallback (untimed) days only
export const WRONG_TIME_PENALTY = 20       // seconds burned per wrong answer on timed days
export const DEFAULT_TIMER_SEC = 300
export const RETRY_GRACE_DAYS = 3          // days 1..3: instant retry after a fail

/* characters can debut mid-series (fromDay); the screen sets this each frame */
export let ACTIVE_DAY = 1
export function setActiveDay(d: number): void { ACTIVE_DAY = d }
export function activeObjects(loc: WorldLocation): typeof loc.objects {
  return loc.objects.filter(o =>
    (!o.fromDay || o.fromDay <= ACTIVE_DAY) && (!o.untilDay || ACTIVE_DAY <= o.untilDay))
}

export function activeWarps(loc: WorldLocation): typeof loc.warps {
  return loc.warps.filter(w =>
    (!w.fromDay || w.fromDay <= ACTIVE_DAY) && (!w.untilDay || ACTIVE_DAY <= w.untilDay))
}

/* an NPC's effective placement today (hospital stays, trips…) */
export function npcNow(n: WorldNpc): WorldNpc {
  const mv = n.moves?.find(m => m.fromDay <= ACTIVE_DAY && ACTIVE_DAY <= m.untilDay)
  return mv ? { ...n, loc: mv.loc, x: mv.x, y: mv.y } : n
}

export function activeNpcs(locId: string): WorldNpc[] {
  return NPCS.map(npcNow).filter(n => n.loc === locId && (!n.fromDay || n.fromDay <= ACTIVE_DAY))
}

/* ---------------- day dealing ---------------- */

/* Resolve an authored episode quest into the engine's QuestSpec */
function resolveEpQuest(eq: EpisodeQuest, wordId: number): QuestSpec | undefined {
  const ask: Seg[] = eq.ask ? lineSegs(eq.ask) : [{ w: wordId }]
  if (eq.type === 'talk' && eq.npc && NPCS.some(n => n.id === eq.npc)) {
    return { type: 'talk', npc: eq.npc, ask }
  }
  if (eq.type === 'buy' && eq.item) {
    return { type: 'buy', item: eq.item, ask }
  }
  if (eq.type === 'inspect' && eq.obj) {
    for (const loc of Object.values(WORLD)) {
      if (activeObjects(loc).some(o => o.id === eq.obj)) return { type: 'inspect', obj: eq.obj, loc: loc.id, ask }
    }
  }
  if (eq.type === 'do' && eq.loc && WORLD[eq.loc]) {
    return { type: 'do', loc: eq.loc, verb: eq.verb || 'walk', amount: eq.amount || 600, desc: ask }
  }
  return undefined
}

export function dealToday(): WorldToday {
  const prog = getWorldProg()
  const learned = new Set(prog.learnedIds)
  const order = DEAL_ORDER.length ? DEAL_ORDER : BANK.map(w => w.id)
  const due = order.filter(id => !learned.has(id))

  const ep = episodeFor(prog.dayNumber)
  if (ep) {
    // resolve authored words against the live bank; swap in due words for any misses
    const wordIds: number[] = []
    const quests: QuestState[] = []
    const fillQueue = due.filter(id => !ep.words.some(w => conceptToId(w) === id))
    for (const w of ep.words) {
      let id = conceptToId(w)
      // learned words stay in the episode as REVIEW (seasons 8+ reuse words
      // on purpose — spaced repetition); only true misses get substituted
      if (id === undefined || wordIds.includes(id)) {
        id = fillQueue.shift()
        if (id === undefined) continue
        wordIds.push(id)
        quests.push({ wordId: id, done: false, cooldownUntil: 0, progress: 0 })  // bank quest
        continue
      }
      wordIds.push(id)
      const eq = ep.quests.find(q => q.word === w)
      const spec = eq ? resolveEpQuest(eq, id) : undefined
      quests.push({
        wordId: id, done: false, cooldownUntil: 0, progress: 0,
        ...(spec ? { spec } : {}), ...(eq?.stage ? { stage: eq.stage } : {})
      })
    }
    return {
      date: todayStr(), dayNumber: prog.dayNumber, wordIds, quests, phase: 'learn',
      epTitle: ep.title, story: ep.story, night: ep.night,
      timerSec: ep.timerSec ?? DEFAULT_TIMER_SEC, startedAt: null, penaltySec: 0
    }
  }

  // fallback: auto-quests from the bank, untimed
  const wordIds = due.slice(0, 8)
  return {
    date: todayStr(),
    dayNumber: prog.dayNumber,
    wordIds,
    quests: wordIds.map(wordId => ({ wordId, done: false, cooldownUntil: 0, progress: 0 })),
    phase: 'learn'
  }
}

export function questWord(q: QuestState): BankWord {
  return wordById(q.wordId)!
}

/* Episode override wins over the bank's auto-generated quest */
export function questSpec(q: QuestState): QuestSpec {
  return q.spec || questWord(q).quest
}

/* ---------------- quest chains (staged episodes) ---------------- */
export function currentStage(quests: QuestState[]): number {
  let min = Infinity
  for (const q of quests) if (!q.done) min = Math.min(min, q.stage || 0)
  return min
}
export function questActive(q: QuestState, quests: QuestState[]): boolean {
  return !q.done && (q.stage || 0) <= currentStage(quests)
}

/* NPC nameplate as segments: joins the diglot weave via a live bank lookup */
export function npcNameSegs(npc: WorldNpc): Seg[] {
  const id = npc.nameWord ? conceptToId(npc.nameWord) : undefined
  return id !== undefined ? [{ w: id }] : [{ t: npc.name }]
}

/* Human-readable quest description as segments (joins the diglot weave) */
export function questDesc(q: QuestState): Seg[] {
  const w = questWord(q)
  const spec = questSpec(q)
  switch (spec.type) {
    case 'talk': {
      const found = NPCS.find(n => n.id === spec.npc)
      const npc = found ? npcNow(found) : undefined
      return [
        { t: 'Talk to ' },
        ...(npc ? npcNameSegs(npc) : [{ t: spec.npc } as Seg]),
        { t: ` — ${WORLD[npc?.loc || 'street']?.label || ''}` }
      ]
    }
    case 'buy':
      return [{ t: 'Buy ' }, { w: w.id }, { t: ' at the store' }]
    case 'inspect':
      return [{ t: 'Find the ' }, { w: w.id }, { t: ` — ${WORLD[spec.loc]?.label || spec.loc}` }]
    case 'do':
      return spec.desc
  }
}

/* Where does this quest happen? (for the tracker) */
export function questLoc(q: QuestState): string {
  const spec = questSpec(q)
  switch (spec.type) {
    case 'talk': { const n = NPCS.find(x => x.id === spec.npc); return (n ? npcNow(n) : undefined)?.loc || 'street' }
    case 'buy': return 'store'
    case 'inspect': return spec.loc
    case 'do': return spec.loc
  }
}

/* MCQ options: correct reading + 3 distractor readings (prefer same POS) */
export interface McqOption { label: string; correct: boolean }

export function buildOptions(w: BankWord, todayIds: number[]): McqOption[] {
  const pool = BANK.filter(x => x.id !== w.id)
  const near = (x: BankWord) => Math.abs(x.id - w.id) <= 200   // similar difficulty
  const sameDay = pool.filter(x => todayIds.includes(x.id) && x.pos === w.pos)
  const samePosNear = pool.filter(x => x.pos === w.pos && near(x) && !todayIds.includes(x.id))
  const samePos = pool.filter(x => x.pos === w.pos && !near(x) && !todayIds.includes(x.id))
  const rest = pool.filter(x => x.pos !== w.pos)
  const picks: BankWord[] = []
  for (const src of [sameDay, samePosNear, samePos, rest]) {
    const shuffled = src.slice().sort(() => Math.random() - 0.5)
    for (const c of shuffled) {
      if (picks.length >= 3) break
      if (!picks.some(p => p.reading === c.reading) && c.reading !== w.reading) picks.push(c)
    }
    if (picks.length >= 3) break
  }
  const opts = [
    { label: optLabel(w), correct: true },
    ...picks.map(p => ({ label: optLabel(p), correct: false }))
  ]
  return opts.sort(() => Math.random() - 0.5)
}

function optLabel(w: BankWord): string {
  return w.reading === w.romaji ? w.reading : `${w.reading} (${w.romaji})`
}

/* ---------------- collision & warps ---------------- */

export function tileAt(loc: WorldLocation, tx: number, ty: number): string {
  if (ty < 0 || ty >= ROWS || tx < 0 || tx >= COLS) return '#'
  return loc.tiles[ty]?.[tx] || '#'
}

export function blockedAtWorld(loc: WorldLocation, px: number, py: number): boolean {
  const tx = Math.floor(px / TILE)
  const ty = Math.floor(py / TILE)
  const t = tileAt(loc, tx, ty)
  if (t === '#' || t === '~') return true
  // objects block their tile (wall-mounted ones don't — they're on the wall)
  for (const o of activeObjects(loc)) {
    if (!o.wall && !o.deco && o.x === tx && o.y === ty) return true
  }
  // NPCs block their tile
  for (const n of activeNpcs(loc.id)) {
    if (n.x === tx && n.y === ty) return true
  }
  return false
}

export function warpAt(loc: WorldLocation, px: number, py: number) {
  const tx = Math.floor(px / TILE)
  const ty = Math.floor(py / TILE)
  return activeWarps(loc).find(w => w.x === tx && w.y === ty) || null
}

/* ---------------- proximity targets ---------------- */

export type Target =
  | { kind: 'npc'; npc: WorldNpc; cx: number; cy: number }
  | { kind: 'obj'; obj: { id: string; sprite: string; x: number; y: number; wall?: boolean }; cx: number; cy: number }

export function nearestTarget(loc: WorldLocation, px: number, py: number): Target | null {
  let best: Target | null = null
  let bestD = 26
  for (const n of activeNpcs(loc.id)) {
    const cx = n.x * TILE + 8, cy = n.y * TILE + 8
    const d = Math.hypot(px - cx, py + 4 - cy)
    if (d < bestD) { bestD = d; best = { kind: 'npc', npc: n, cx, cy } }
  }
  for (const o of activeObjects(loc)) {
    if (o.deco) continue
    const cx = o.x * TILE + 8
    const cy = o.wall ? 24 : o.y * TILE + 8
    const d = Math.hypot(px - cx, py + 4 - cy)
    if (d < bestD) { bestD = d; best = { kind: 'obj', obj: o, cx, cy } }
  }
  return best
}
