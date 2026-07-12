import type { ThemeName } from '../types'
import SQUARE_TILES from './maps/square.json'

/* =====================================================================
   THE TOWN — one painted world map.

   The whole town is a single hand-painted illustration
   (public/bg/square.png, 1600×903) stretched over a 50×28 tile grid.
   The camera (worldRender) follows the player and shows a 16×12 window,
   so you only ever see a zoomed-in slice of the painting and walk
   through it. Nothing on the map is a sprite except the player, the
   eight locals and the cat — every house, tree, car and passer-by is
   part of the painting, made solid by invisible collision tiles below.

   Tile chars: '.' walkable  '#' blocked (buildings/trees/cars/train)
               '~' water (blocked + animated ripple overlay: the onsen)

   TUNING COLLISION — press G in-game (dev): the grid overlay becomes
   an editor. Click/drag paints blocked tiles, click again to clear,
   shift-click paints water. "Save map" writes the grid back to
   src/data/maps/square.json through the dev server, so what you edit
   is what ships. scripts/trace-town.py still exists for bulk
   re-tracing when a brand-new painting comes in.
   ===================================================================== */

export interface Warp { x: number; y: number; to: string; tx: number; ty: number; label: string; fromDay?: number; untilDay?: number }
export interface PlacedObj { id: string; sprite: string; x: number; y: number; wall?: boolean; fromDay?: number; untilDay?: number; deco?: boolean }
export interface WorldNpc {
  id: string
  name: string
  persona: string
  sprite?: string
  fromDay?: number
  loc: string
  x: number
  y: number
  moves?: Array<{ fromDay: number; untilDay: number; loc: string; x: number; y: number }>
  ambient: string[]
}

export interface WorldLocation {
  id: string
  label: string
  theme: ThemeName
  outdoor: boolean
  tiles: string[]
  objects: PlacedObj[]
  warps: Warp[]
}

export const WORLD: Record<string, WorldLocation> = {
  square: {
    id: 'square', label: 'The Town 町', theme: 'garden', outdoor: true,
    /* 50×28 — the full painting; the camera follows you through it.
       Lives in maps/square.json so the in-game editor can save it. */
    tiles: SQUARE_TILES,
    /* the painting IS the scenery — no sprite objects on the map */
    objects: [],
    warps: []
  },
}

/* The eight locals (+ one cat, who answers to no one), each standing at
   their painted landmark: café terrace, market stall, Lawson, the cat
   yard, the avenue sakura, the onsen steps, the hill-garden stairs and
   the station platform. The cat sits exactly on the painted cat. */
export const NPCS: WorldNpc[] = [
  { id: 'grandma',    name: 'Grandma',     persona: 'tea house grandma', loc: 'square', x: 21, y: 14, ambient: ['…'] },
  { id: 'baker',      name: 'Baker',       persona: 'the baker',         loc: 'square', x: 28, y: 11, ambient: ['…'] },
  { id: 'shopkeeper', name: 'Shopkeeper',  persona: 'the shopkeeper',    loc: 'square', x: 12, y: 24, ambient: ['…'] },
  { id: 'catlady',    name: 'Cat Lady',    persona: 'the cat lady',      loc: 'square', x: 19, y: 15, ambient: ['…'] },
  { id: 'flowergirl', name: 'Flower Girl', persona: 'the flower girl',   loc: 'square', x: 20, y: 4,  ambient: ['…'] },
  { id: 'oldman',     name: 'Old Man',     persona: 'old man, onsen',    loc: 'square', x: 31, y: 11, ambient: ['…'] },
  { id: 'monk',       name: 'Monk',        persona: 'the monk',          loc: 'square', x: 23, y: 9,  ambient: ['…'] },
  { id: 'kid',        name: 'Little Kid',  persona: 'kid at the station', loc: 'square', x: 31, y: 21, ambient: ['…'] },
  { id: 'cat',        name: '???',         persona: 'the missing cat',   loc: 'square', x: 16, y: 16, sprite: 'cat', ambient: ['…'] },
]

export const NPCS_BY_ID: Record<string, WorldNpc> = Object.fromEntries(NPCS.map(n => [n.id, n]))
export const START_LOC = 'square'
export const START_POS = { x: 22, y: 16 }
