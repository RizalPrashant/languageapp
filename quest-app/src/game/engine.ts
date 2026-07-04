import type { Companion, Day, Lang, Progress, RoomObject, Session } from '../types'
import { SPRITES } from '../data/sprites'
import { BAKED } from '../data/baked'
import { todayStr } from '../lib/storage'

export const TILE = 16
export const COLS = 16
export const ROWS = 12
export const WALL_H = 2
export const INTERIOR = { x0: 1, y0: WALL_H, x1: COLS - 2, y1: ROWS - 2 }
export const WRONG_COOLDOWN_MS = 8000

const FLOOR_SLOTS: Array<[number, number]> = [
  [2, 3], [5, 3], [9, 3], [12, 3], [13, 5], [2, 5], [4, 7],
  [7, 7], [10, 7], [13, 8], [2, 9], [6, 9], [11, 9], [9, 5]
]
const WALL_SLOTS: Array<[number, number]> = [
  [2.5, 0.4], [5.5, 0.4], [8.5, 0.4], [11.5, 0.4], [13, 0.4]
]

export function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function buildSession(lang: Lang, day: Day, visitors: Companion[]): Session {
  const floorSlots = shuffle(FLOOR_SLOTS.slice())
  const wallSlots = shuffle(WALL_SLOTS.slice())
  const usedSprites = new Set<string>()
  const objects: RoomObject[] = []

  day.words.forEach((w, i) => {
    let sp = w.sprite
    if (!SPRITES[sp] || usedSprites.has(sp)) {
      sp = Object.keys(SPRITES).find(n => !usedSprites.has(n) && SPRITES[n].mount === 'floor')!
    }
    usedSprites.add(sp)
    const mount = SPRITES[sp].mount
    const pos = (mount === 'wall' && wallSlots.length) ? wallSlots.pop()! : floorSlots.pop()!
    objects.push({
      idx: i, sprite: sp,
      mount: SPRITES[sp].mount === 'wall' && pos[1] < 1 ? 'wall' : 'floor',
      tx: pos[0], ty: pos[1]
    })
  })

  // returning companions wander in (skip if their sprite/word is already in today's quest)
  visitors.forEach(v => {
    if (!SPRITES[v.sprite] || usedSprites.has(v.sprite)) return
    if (day.words.some(w => w.word === v.word)) return
    if (!floorSlots.length) return
    usedSprites.add(v.sprite)
    const pos = floorSlots.pop()!
    objects.push({
      idx: null, companion: v, word: v.word, sprite: v.sprite,
      mount: 'floor', tx: pos[0], ty: pos[1]
    })
  })

  return {
    lang, day, objects,
    learned: {}, compDone: {}, wrongAt: {}, misses: {},
    date: todayStr()
  }
}

/* pick up to 2 old friends to revisit today */
export function pickVisitors(lang: Lang, prog: Progress): Companion[] {
  const reg = prog.companions[lang] || {}
  return shuffle(Object.values(reg).slice()).slice(0, 2)
}

export function bakedDayWithVisitors(lang: Lang, visitors: Companion[]): Day {
  const day: Day = JSON.parse(JSON.stringify(BAKED[lang]))
  visitors.forEach(v => {
    if (!day.words.some(w => w.word === v.word)) {
      day.story += ` And look — {${v.word}} ${v.name} has wandered back in to see you.`
    }
  })
  return day
}

export function blockedAt(session: Session, px: number, py: number): boolean {
  const tx = Math.floor(px / TILE)
  const ty = Math.floor(py / TILE)
  if (tx < INTERIOR.x0 || tx > INTERIOR.x1 || ty < INTERIOR.y0 || ty > INTERIOR.y1) return true
  for (const o of session.objects) {
    if (o.mount === 'wall') continue
    if (tx === o.tx && ty === o.ty) return true
  }
  return false
}

export function objectCenter(o: RoomObject): { x: number; y: number } {
  return { x: o.tx * TILE + 8, y: o.mount === 'wall' ? 24 : o.ty * TILE + 8 }
}
