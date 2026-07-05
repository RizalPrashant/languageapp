import type { ThemeName } from '../types'

/* =====================================================================
   THE TOWN — a hub-and-spoke map. The Town Square sits in the middle;
   each of the eight courtesies (breakfast, bread, shoes, the cat, the
   flower, washing up, the bell, goodbye) now happens in its own small
   dedicated area, reached by walking off the edge of the square. Every
   area is sized to fit the screen exactly — there's no camera/scroll,
   so each room is its own self-contained 16x12 postcard.

   Landmarks are built from the Sunnyside World tileset (well, market
   towers, crates, barrels, a bench) — the pack is a Western/rustic set
   with no Japanese-specific pieces, so the torii, the gate and a
   handful of small hand-drawn props stay as the local, load-bearing
   exceptions.

   Tile chars: '.' grass  '#' border  '~' water  '=' path
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

const B = '################'

/* every quest room shares the same "front door": a gap at the bottom
   center (8,11) that warps back to the square, landing just inside its
   matching gap on the other side. */
const ROOM_BASE = [
  B,
  '#..............#',
  '#..............#',
  '#..............#',
  '#..............#',
  '#..............#',
  '#..............#',
  '#.......=......#',
  '#.......=......#',
  '#.......=......#',
  '#.......=......#',
  '########=#######',
]

function backToSquare(tx: number, ty: number): Warp {
  return { x: 8, y: 11, to: 'square', tx, ty, label: 'Town Square' }
}

export const WORLD: Record<string, WorldLocation> = {
  square: {
    id: 'square', label: 'The Town', theme: 'garden', outdoor: true,
    tiles: [
      '#####=####=#####',
      '#....=....=....#',
      '#....=....=....#',
      '====.=....=.====',
      '#...========...#',
      '#...========...#',
      '#...========...#',
      '#...========...#',
      '====...=...=====',
      '#......=...=...#',
      '#......=...=...#',
      '#######=###=####',
    ],
    objects: [
      { id: 'tree_nw', sprite: 'tree', x: 2, y: 2 },
      { id: 'tree_ne', sprite: 'tree', x: 13, y: 2 },
      { id: 'tree_sw', sprite: 'tree', x: 2, y: 9 },
      { id: 'tree_se', sprite: 'tree', x: 13, y: 9 },
      { id: 'flower_a', sprite: 'flower', x: 5, y: 5, deco: true },
      { id: 'flower_b', sprite: 'flower', x: 10, y: 5, deco: true },
      { id: 'flower_c', sprite: 'flower', x: 5, y: 7, deco: true },
      { id: 'flower_d', sprite: 'flower', x: 10, y: 7, deco: true },
      { id: 'bench_a', sprite: 'bench_wood', x: 6, y: 6 },
      { id: 'bench_b', sprite: 'bench_wood', x: 9, y: 6 },
    ],
    warps: [
      { x: 5, y: 0, to: 'shrine', tx: 8, ty: 10, label: 'Shrine' },
      { x: 10, y: 0, to: 'belltower', tx: 8, ty: 10, label: 'Bell Tower' },
      { x: 0, y: 3, to: 'teahouse', tx: 8, ty: 10, label: 'Tea House' },
      { x: 0, y: 8, to: 'bakery', tx: 8, ty: 10, label: 'Bakery' },
      { x: 15, y: 3, to: 'shop', tx: 8, ty: 10, label: 'Shop' },
      { x: 15, y: 8, to: 'alley', tx: 8, ty: 10, label: 'Cat Alley' },
      { x: 7, y: 11, to: 'gate', tx: 8, ty: 10, label: 'Town Gate' },
      { x: 11, y: 11, to: 'fountain', tx: 8, ty: 10, label: 'Fountain' },
    ]
  },

  teahouse: {
    id: 'teahouse', label: 'The Tea House', theme: 'wood', outdoor: true,
    tiles: ROOM_BASE,
    objects: [
      { id: 'tea_table', sprite: 'table', x: 8, y: 5 },
      { id: 'tea_rice', sprite: 'rice', x: 9, y: 5 },
      { id: 'tea_cushion', sprite: 'cushion', x: 8, y: 4, deco: true },
      { id: 'tea_rug', sprite: 'rug_shop', x: 7, y: 6, deco: true },
      { id: 'tea_bench', sprite: 'bench_wood', x: 11, y: 5 },
      { id: 'tea_tree_l', sprite: 'tree', x: 2, y: 2 },
      { id: 'tea_tree_r', sprite: 'tree', x: 13, y: 2 },
      { id: 'tea_flower_l', sprite: 'flower', x: 2, y: 9, deco: true },
      { id: 'tea_flower_r', sprite: 'flower', x: 13, y: 9, deco: true },
    ],
    warps: [backToSquare(1, 3)]
  },

  bakery: {
    id: 'bakery', label: 'The Bakery', theme: 'wood', outdoor: true,
    tiles: ROOM_BASE,
    objects: [
      { id: 'bake_sign', sprite: 'sign_board', x: 8, y: 3, deco: true },
      { id: 'bake_stand', sprite: 'stand', x: 8, y: 5 },
      { id: 'bake_crate', sprite: 'crate', x: 9, y: 4 },
      { id: 'bake_crate2', sprite: 'crate2', x: 10, y: 4 },
      { id: 'bake_barrel', sprite: 'barrel', x: 9, y: 6 },
      { id: 'bake_bench', sprite: 'bench_wood', x: 11, y: 5 },
      { id: 'bake_tree_l', sprite: 'tree', x: 2, y: 2 },
      { id: 'bake_tree_r', sprite: 'tree', x: 13, y: 2 },
      { id: 'bake_flower_l', sprite: 'flower', x: 2, y: 9, deco: true },
      { id: 'bake_flower_r', sprite: 'flower', x: 13, y: 9, deco: true },
    ],
    warps: [backToSquare(1, 8)]
  },

  shop: {
    id: 'shop', label: 'The Shop', theme: 'stone', outdoor: true,
    tiles: ROOM_BASE,
    objects: [
      { id: 'shop_counter', sprite: 'counter', x: 8, y: 5 },
      { id: 'shop_shoes', sprite: 'shoes', x: 9, y: 5 },
      { id: 'shop_chest', sprite: 'chest_orange', x: 10, y: 6 },
      { id: 'shop_barrel', sprite: 'barrel_red', x: 6, y: 6 },
      { id: 'shop_crate', sprite: 'crate', x: 11, y: 4 },
      { id: 'shop_tree_l', sprite: 'tree', x: 2, y: 2 },
      { id: 'shop_tree_r', sprite: 'tree', x: 13, y: 2 },
      { id: 'shop_flower_l', sprite: 'flower', x: 2, y: 9, deco: true },
      { id: 'shop_flower_r', sprite: 'flower', x: 13, y: 9, deco: true },
    ],
    warps: [backToSquare(14, 3)]
  },

  alley: {
    id: 'alley', label: 'Cat Alley', theme: 'stone', outdoor: true,
    tiles: ROOM_BASE,
    objects: [
      { id: 'alley_crate', sprite: 'crate', x: 8, y: 5 },
      { id: 'alley_crate2', sprite: 'crate2', x: 9, y: 5 },
      { id: 'alley_barrel', sprite: 'barrel', x: 8, y: 6 },
      { id: 'alley_barrel2', sprite: 'barrel_red', x: 9, y: 6 },
      { id: 'alley_bush_l', sprite: 'bush', x: 6, y: 4, deco: true },
      { id: 'alley_bush_r', sprite: 'bush', x: 10, y: 4, deco: true },
      { id: 'alley_tree', sprite: 'tree_b', x: 11, y: 4 },
      { id: 'alley_tree_l', sprite: 'tree', x: 2, y: 2 },
      { id: 'alley_flower_r', sprite: 'flower', x: 13, y: 9, deco: true },
    ],
    warps: [backToSquare(14, 8)]
  },

  shrine: {
    id: 'shrine', label: 'The Shrine', theme: 'garden', outdoor: true,
    tiles: [
      B,
      '#..............#',
      '#.......=......#',
      '#.......=......#',
      '#.......=......#',
      '#.......=......#',
      '#.......=......#',
      '#.......=......#',
      '#.......=......#',
      '#.......=......#',
      '#.......=......#',
      '########=#######',
    ],
    objects: [
      { id: 'torii', sprite: 'torii', x: 7, y: 2 },
      { id: 'shrine_bldg', sprite: 'tower_purple', x: 8, y: 9 },
      { id: 'shrine_flower_l', sprite: 'flower', x: 5, y: 5, deco: true },
      { id: 'shrine_flower_r', sprite: 'flower', x: 10, y: 5, deco: true },
      { id: 'shrine_flower_l2', sprite: 'flower', x: 5, y: 8, deco: true },
      { id: 'shrine_flower_r2', sprite: 'flower', x: 10, y: 8, deco: true },
      { id: 'shrine_tree_l', sprite: 'tree', x: 2, y: 2 },
      { id: 'shrine_tree_r', sprite: 'tree', x: 13, y: 2 },
    ],
    warps: [backToSquare(5, 1)]
  },

  fountain: {
    id: 'fountain', label: 'The Fountain', theme: 'garden', outdoor: true,
    tiles: [
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#......~~~.....#',
      '#......~~~.....#',
      '#..............#',
      '#.......=......#',
      '#.......=......#',
      '#.......=......#',
      '#.......=......#',
      '########=#######',
    ],
    objects: [
      { id: 'well', sprite: 'well', x: 8, y: 6 },
      { id: 'fountain_flower_l', sprite: 'flower', x: 4, y: 4, deco: true },
      { id: 'fountain_flower_r', sprite: 'flower', x: 11, y: 4, deco: true },
      { id: 'fountain_tree_l', sprite: 'tree', x: 2, y: 2 },
      { id: 'fountain_tree_r', sprite: 'tree', x: 13, y: 2 },
      { id: 'fountain_bench', sprite: 'bench_wood', x: 11, y: 8 },
    ],
    warps: [backToSquare(11, 10)]
  },

  belltower: {
    id: 'belltower', label: 'The Bell Tower', theme: 'stone', outdoor: true,
    tiles: [
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#.......=......#',
      '#.......=......#',
      '########=#######',
    ],
    objects: [
      { id: 'belltower_bldg', sprite: 'tower_blue', x: 8, y: 9 },
      { id: 'bell_flower_l', sprite: 'flower', x: 4, y: 8, deco: true },
      { id: 'bell_flower_r', sprite: 'flower', x: 11, y: 8, deco: true },
      { id: 'bell_tree_l', sprite: 'tree', x: 2, y: 2 },
      { id: 'bell_tree_r', sprite: 'tree', x: 13, y: 2 },
    ],
    warps: [backToSquare(10, 1)]
  },

  gate: {
    id: 'gate', label: 'The Town Gate', theme: 'garden', outdoor: true,
    tiles: ROOM_BASE,
    objects: [
      { id: 'gate_l', sprite: 'gate', x: 7, y: 2 },
      { id: 'gate_r', sprite: 'gate', x: 8, y: 2 },
      { id: 'gate_tree_l', sprite: 'tree', x: 2, y: 2 },
      { id: 'gate_tree_r', sprite: 'tree', x: 13, y: 2 },
      { id: 'gate_flower_l', sprite: 'flower', x: 5, y: 8, deco: true },
      { id: 'gate_flower_r', sprite: 'flower', x: 10, y: 8, deco: true },
    ],
    warps: [backToSquare(7, 10)]
  },
}

/* the eight locals (+ one cat, who answers to no one), one per quest room */
export const NPCS: WorldNpc[] = [
  { id: 'grandma',    name: 'Grandma',     persona: 'tea house grandma', loc: 'teahouse',  x: 7,  y: 5, ambient: ['...'] },
  { id: 'baker',      name: 'Baker',       persona: 'the baker',         loc: 'bakery',    x: 7,  y: 5, ambient: ['...'] },
  { id: 'shopkeeper', name: 'Shopkeeper',  persona: 'the shopkeeper',    loc: 'shop',      x: 7,  y: 5, ambient: ['...'] },
  { id: 'catlady',    name: 'Cat Lady',    persona: 'the cat lady',      loc: 'alley',     x: 6,  y: 6, ambient: ['...'] },
  { id: 'flowergirl', name: 'Flower Girl', persona: 'the flower girl',   loc: 'shrine',    x: 7,  y: 10, ambient: ['...'] },
  { id: 'oldman',     name: 'Old Man',     persona: 'old man, fountain', loc: 'fountain',  x: 6,  y: 7, ambient: ['...'] },
  { id: 'monk',       name: 'Monk',        persona: 'the monk',          loc: 'belltower', x: 6,  y: 9, ambient: ['...'] },
  { id: 'kid',        name: 'Little Kid',  persona: 'kid at the gate',   loc: 'gate',      x: 7,  y: 4, ambient: ['...'] },
  { id: 'cat',        name: '???',         persona: 'the missing cat',   loc: 'alley',     x: 11, y: 5, sprite: 'cat', ambient: ['...'] },
]

export const NPCS_BY_ID: Record<string, WorldNpc> = Object.fromEntries(NPCS.map(n => [n.id, n]))
export const START_LOC = 'square'
export const START_POS = { x: 8, y: 6 }
