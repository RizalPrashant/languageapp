import type { ThemeName } from '../types'

/* =====================================================================
   THE TOWN SQUARE — the whole game happens on this one lovely screen.
   A fountain at the heart, shrine up top, bell tower to the right,
   tea house and bakery on the left, shop and the cat alley on the
   right, and the town gate at the bottom — the way home, still shut.
   Tile chars: '.' grass  '#' border  '~' fountain water  '=' path
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

export const WORLD: Record<string, WorldLocation> = {
  square: {
    id: 'square', label: 'The Town 町', theme: 'garden', outdoor: true,
    tiles: [
      B,
      '#......==......#',
      '#......==......#',
      '#......==......#',
      '#...========...#',
      '#...===~~===...#',
      '#...===~~===...#',
      '#...========...#',
      '#......==......#',
      '#......==......#',
      '#......==......#',
      B
    ],
    objects: [
      /* shrine, top center */
      { id: 'torii', sprite: 'torii', x: 7, y: 1 },
      { id: 'shrine_flowers', sprite: 'flower', x: 8, y: 1 },
      { id: 'flower_a', sprite: 'flower', x: 5, y: 1, deco: true },
      /* tea house, top left */
      { id: 'tea_table', sprite: 'table', x: 2, y: 2 },
      { id: 'rice_bowl', sprite: 'rice', x: 3, y: 2 },
      /* bell tower, top right */
      { id: 'bell', sprite: 'bell', x: 12, y: 2 },
      { id: 'tree_a', sprite: 'tree', x: 14, y: 1 },
      /* bakery, mid left */
      { id: 'bread_stand', sprite: 'stand', x: 2, y: 6 },
      /* shop, mid right */
      { id: 'shop_counter', sprite: 'counter', x: 13, y: 4 },
      { id: 'shoes_rack', sprite: 'shoes', x: 13, y: 5 },
      /* cat alley, low right — the cat hides behind the tree */
      { id: 'tree_b', sprite: 'tree', x: 13, y: 8 },
      /* the gate home, bottom center — closed until you are decent */
      { id: 'gate_l', sprite: 'gate', x: 7, y: 10 },
      { id: 'gate_r', sprite: 'gate', x: 8, y: 10 },
      /* greenery */
      { id: 'tree_c', sprite: 'tree', x: 2, y: 9 },
      { id: 'flower_b', sprite: 'flower', x: 4, y: 3, deco: true },
      { id: 'flower_c', sprite: 'flower', x: 11, y: 3, deco: true },
      { id: 'flower_d', sprite: 'flower', x: 4, y: 8, deco: true },
      { id: 'flower_e', sprite: 'flower', x: 11, y: 7, deco: true },
    ],
    warps: []
  },
}

/* The eight locals (+ one cat, who answers to no one). Positions match CAST. */
export const NPCS: WorldNpc[] = [
  { id: 'grandma',    name: 'Grandma',     persona: 'tea house grandma', loc: 'square', x: 2,  y: 3, ambient: ['…'] },
  { id: 'baker',      name: 'Baker',       persona: 'the baker',         loc: 'square', x: 2,  y: 7, ambient: ['…'] },
  { id: 'shopkeeper', name: 'Shopkeeper',  persona: 'the shopkeeper',    loc: 'square', x: 12, y: 5, ambient: ['…'] },
  { id: 'catlady',    name: 'Cat Lady',    persona: 'the cat lady',      loc: 'square', x: 11, y: 8, ambient: ['…'] },
  { id: 'flowergirl', name: 'Flower Girl', persona: 'the flower girl',   loc: 'square', x: 6,  y: 2, ambient: ['…'] },
  { id: 'oldman',     name: 'Old Man',     persona: 'old man, fountain', loc: 'square', x: 5,  y: 5, ambient: ['…'] },
  { id: 'monk',       name: 'Monk',        persona: 'the monk',          loc: 'square', x: 12, y: 3, ambient: ['…'] },
  { id: 'kid',        name: 'Little Kid',  persona: 'kid at the gate',   loc: 'square', x: 8,  y: 9, ambient: ['…'] },
  { id: 'cat',        name: '???',         persona: 'the missing cat',   loc: 'square', x: 13, y: 9, sprite: 'cat', ambient: ['…'] },
]

export const NPCS_BY_ID: Record<string, WorldNpc> = Object.fromEntries(NPCS.map(n => [n.id, n]))
export const START_LOC = 'square'
export const START_POS = { x: 8, y: 8 }
