import { NPCS, type WorldLocation, type WorldNpc } from '../data/world'

/* Slim spatial engine: tiles, collision, day-gated visibility, targets.
   All learning/quest logic lives in lib/sayState + TownScreen now. */

export const TILE = 16
export const COLS = 16
export const ROWS = 12

export function tileAt(loc: WorldLocation, tx: number, ty: number): string {
  if (tx < 0 || ty < 0 || ty >= loc.tiles.length || tx >= loc.tiles[0].length) return '#'
  return loc.tiles[ty][tx]
}

/* collision editor: rewrite one tile in place; returns true if it changed */
export function setTileChar(loc: WorldLocation, tx: number, ty: number, ch: string): boolean {
  if (tx < 0 || ty < 0 || ty >= loc.tiles.length || tx >= loc.tiles[0].length) return false
  const row = loc.tiles[ty]
  if (row[tx] === ch) return false
  loc.tiles[ty] = row.slice(0, tx) + ch + row.slice(tx + 1)
  return true
}

/* characters/objects can be day-gated; the screen sets this each frame */
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

export function npcNow(n: WorldNpc): WorldNpc {
  const mv = n.moves?.find(m => m.fromDay <= ACTIVE_DAY && ACTIVE_DAY <= m.untilDay)
  return mv ? { ...n, loc: mv.loc, x: mv.x, y: mv.y } : n
}

export function activeNpcs(locId: string): WorldNpc[] {
  return NPCS.map(npcNow).filter(n => n.loc === locId && (!n.fromDay || n.fromDay <= ACTIVE_DAY))
}

export function blockedAtWorld(loc: WorldLocation, px: number, py: number): boolean {
  const tx = Math.floor(px / TILE)
  const ty = Math.floor(py / TILE)
  const t = tileAt(loc, tx, ty)
  if (t === '#' || t === '~') return true
  for (const o of activeObjects(loc)) {
    if (!o.wall && !o.deco && o.x === tx && o.y === ty) return true
  }
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
