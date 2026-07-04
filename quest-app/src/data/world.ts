import type { ThemeName } from '../types'

/* =====================================================================
   THE WORLD — a small society, hand-authored skeleton in the production
   schema. Phase 2's one-time Haiku pass expands NPC personalities and
   ambient pools; the engine below doesn't change.

   Every location is one 16x12 screen. Tile chars:
     '.' floor   '#' blocked (wall/fence)   '~' water   '=' path
   Objects and NPCs are placed on tiles; warps connect locations.
   ===================================================================== */

export interface Warp { x: number; y: number; to: string; tx: number; ty: number; label: string; fromDay?: number; untilDay?: number }
export interface PlacedObj { id: string; sprite: string; x: number; y: number; wall?: boolean; fromDay?: number; untilDay?: number }
export interface WorldNpc {
  id: string
  name: string            // English display name
  nameWord?: string       // lexicon concept key for the nameplate (joins the diglot weave)
  persona: string         // one-line personality, used by the dialog generators
  sprite?: string         // draw this object sprite instead of a human (e.g. the cat)
  fromDay?: number        // character debuts on this day — invisible before (series intros!)
  loc: string
  x: number
  y: number
  /* temporary relocations (hospital stays, trips): active window overrides loc/x/y */
  moves?: Array<{ fromDay: number; untilDay: number; loc: string; x: number; y: number }>
  /* baseline personality lines as templates: "{tree} was small..." —
     resolved against the live bank at render time (lib/bank.lineSegs) */
  ambient: string[]
}

export interface WorldLocation {
  id: string
  label: string
  theme: ThemeName
  outdoor: boolean
  tiles: string[]         // 12 rows x 16 cols
  objects: PlacedObj[]
  warps: Warp[]
}

const B = '################' // full blocked row

export const WORLD: Record<string, WorldLocation> = {
  bedroom: {
    id: 'bedroom', label: 'Home · Your Room 自室', theme: 'tatami', outdoor: false,
    tiles: [
      B,
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      B
    ],
    objects: [
      { id: 'bed', sprite: 'bed', x: 2, y: 3 },
      { id: 'desk_bedroom', sprite: 'desk', x: 12, y: 3 },
      { id: 'bookshelf', sprite: 'bookshelf', x: 5, y: 3 },
      { id: 'book', sprite: 'book', x: 10, y: 6 },
      { id: 'key', sprite: 'key', x: 4, y: 8 },
      { id: 'letter', sprite: 'letter', x: 11, y: 4 },
      { id: 'window', sprite: 'window', x: 8, y: 0, wall: true },
      { id: 'lamp', sprite: 'lamp', x: 13, y: 8 }
    ],
    warps: [{ x: 8, y: 10, to: 'house', tx: 8, ty: 3, label: 'to the kitchen' }]
  },

  house: {
    id: 'house', label: 'Home 家', theme: 'wood', outdoor: false,
    tiles: [
      B,
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      B
    ],
    objects: [
      { id: 'stove', sprite: 'stove', x: 2, y: 3 },
      { id: 'table', sprite: 'table', x: 7, y: 6 },
      { id: 'tv', sprite: 'tv', x: 13, y: 4 },
      { id: 'clock', sprite: 'clock', x: 5, y: 0, wall: true },
      { id: 'door', sprite: 'door', x: 11, y: 0, wall: true },
      { id: 'umbrella', sprite: 'umbrella', x: 14, y: 9 },
      { id: 'plant_house', sprite: 'plant', x: 2, y: 9 }
    ],
    warps: [
      { x: 2, y: 10, to: 'bedroom', tx: 8, ty: 8, label: 'to your room' },
      { x: 13, y: 10, to: 'street', tx: 3, ty: 3, label: 'to the street' }
    ]
  },

  street: {
    id: 'street', label: 'Street 通り', theme: 'stone', outdoor: true,
    tiles: [
      B,
      '#....=====.....#',
      '#....=====.....#',
      '#..============#',
      '#..============#',
      '#....==...==...#',
      '#....==...==...#',
      '#..============#',
      '#..============#',
      '#....==...==...#',
      '#....==...==...#',
      B
    ],
    objects: [
      { id: 'tree_street1', sprite: 'tree', x: 1, y: 2 },
      { id: 'tree_street2', sprite: 'tree', x: 14, y: 6 },
      { id: 'flower_street', sprite: 'flower', x: 12, y: 2 },
      { id: 'sakura_street', sprite: 'sakura', x: 12, y: 6, fromDay: 51, untilDay: 60 },
      { id: 'lamp_fest_a', sprite: 'lamp', x: 2, y: 6, fromDay: 70, untilDay: 70 },
      { id: 'lamp_fest_b', sprite: 'lamp', x: 13, y: 2, fromDay: 70, untilDay: 70 }
    ],
    warps: [
      { x: 3, y: 2, to: 'house', tx: 13, ty: 9, label: 'home 家' },
      { x: 14, y: 3, to: 'store', tx: 8, ty: 9, label: 'store 店' },
      { x: 3, y: 8, to: 'gym', tx: 8, ty: 9, label: 'gym ジム' },
      { x: 14, y: 8, to: 'office', tx: 8, ty: 9, label: 'office 会社' },
      { x: 8, y: 10, to: 'park', tx: 8, ty: 2, label: 'park 公園' },
      { x: 1, y: 5, to: 'hill', tx: 8, ty: 9, label: 'hill 丘' },
      { x: 14, y: 5, to: 'clinic', tx: 8, ty: 9, label: 'clinic 病院' },
      { x: 6, y: 9, to: 'ward', tx: 8, ty: 9, label: 'hospital 病室', fromDay: 43, untilDay: 48 },
      { x: 6, y: 9, to: 'cafe', tx: 8, ty: 9, label: 'cafe 火曜日', fromDay: 65 }
    ]
  },

  park: {
    id: 'park', label: 'Park 公園', theme: 'garden', outdoor: true,
    tiles: [
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#.....~~~~.....#',
      '#....~~~~~~....#',
      '#....~~~~~~....#',
      '#.....~~~~.....#',
      '#..............#',
      '#..............#',
      '#..............#',
      B
    ],
    objects: [
      { id: 'tree', sprite: 'tree', x: 2, y: 2 },
      { id: 'tree_b', sprite: 'tree', x: 13, y: 2 },
      { id: 'tree_c', sprite: 'tree', x: 2, y: 8 },
      { id: 'bench', sprite: 'bench', x: 12, y: 8 },
      { id: 'flower', sprite: 'flower', x: 9, y: 9 },
      { id: 'pond', sprite: 'fishbowl', x: 7, y: 5 },
      { id: 'stand_1964', sprite: 'stand', x: 12, y: 5, fromDay: 36 },
      { id: 'sakura_park', sprite: 'sakura', x: 5, y: 2, fromDay: 51, untilDay: 60 },
      { id: 'sakura_park_b', sprite: 'sakura', x: 11, y: 2, fromDay: 51, untilDay: 60 },
      { id: 'arch_pond', sprite: 'arch', x: 7, y: 2, fromDay: 60 },
      { id: 'flower_pond_a', sprite: 'flower', x: 6, y: 2, fromDay: 60 },
      { id: 'flower_pond_b', sprite: 'flower', x: 9, y: 2, fromDay: 60 },
      { id: 'lamp_fest_c', sprite: 'lamp', x: 4, y: 8, fromDay: 70, untilDay: 70 },
      { id: 'lamp_fest_d', sprite: 'lamp', x: 11, y: 2, fromDay: 70, untilDay: 70 }
    ],
    warps: [{ x: 8, y: 1, to: 'street', tx: 8, ty: 9, label: 'to the street' }],
  },

  gym: {
    id: 'gym', label: 'Gym ジム', theme: 'night', outdoor: false,
    tiles: [
      B,
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      B
    ],
    objects: [
      { id: 'dumbbell', sprite: 'dumbbell', x: 3, y: 4 },
      { id: 'dumbbell_b', sprite: 'dumbbell', x: 3, y: 7 },
      { id: 'bench_gym', sprite: 'bench', x: 12, y: 4 },
      { id: 'mirror', sprite: 'mirror', x: 6, y: 0, wall: true },
      { id: 'clock_gym', sprite: 'clock', x: 10, y: 0, wall: true }
    ],
    warps: [{ x: 8, y: 10, to: 'street', tx: 3, ty: 9, label: 'to the street' }]
  },

  office: {
    id: 'office', label: 'Work 会社', theme: 'stone', outdoor: false,
    tiles: [
      B,
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      B
    ],
    objects: [
      { id: 'desk', sprite: 'desk', x: 3, y: 3 },
      { id: 'desk_b', sprite: 'desk', x: 8, y: 3 },
      { id: 'desk_c', sprite: 'desk', x: 3, y: 7 },
      { id: 'phone', sprite: 'phone', x: 12, y: 6 },
      { id: 'clock_office', sprite: 'clock', x: 8, y: 0, wall: true },
      { id: 'plant_office', sprite: 'plant', x: 14, y: 3 }
    ],
    warps: [{ x: 8, y: 10, to: 'street', tx: 14, ty: 9, label: 'to the street' }]
  },

  clinic: {
    id: 'clinic', label: 'Clinic 病院', theme: 'stone', outdoor: false,
    tiles: [
      B,
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      B
    ],
    objects: [
      { id: 'bed_clinic', sprite: 'bed', x: 3, y: 3 },
      { id: 'bed_clinic_b', sprite: 'bed', x: 3, y: 6 },
      { id: 'desk_clinic', sprite: 'desk', x: 11, y: 3 },
      { id: 'shelf_clinic', sprite: 'shelf', x: 14, y: 3 },
      { id: 'chest_clinic', sprite: 'chest', x: 13, y: 8 },
      { id: 'plant_clinic', sprite: 'plant', x: 1, y: 8 },
      { id: 'clock_clinic', sprite: 'clock', x: 5, y: 0, wall: true },
      { id: 'painting_clinic', sprite: 'painting', x: 10, y: 0, wall: true }
    ],
    warps: [{ x: 8, y: 10, to: 'street', tx: 13, ty: 5, label: 'to the street' }]
  },

  cafe: {
    id: 'cafe', label: 'Cafe Tuesday 火曜日', theme: 'wood', outdoor: false,
    tiles: [
      B,
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      B
    ],
    objects: [
      { id: 'counter_cafe', sprite: 'counter', x: 4, y: 3 },
      { id: 'teapot_cafe', sprite: 'teapot', x: 6, y: 3 },
      { id: 'shelf_cafe', sprite: 'shelf', x: 13, y: 3 },
      { id: 'table_cafe', sprite: 'table', x: 5, y: 6 },
      { id: 'table_cafe_b', sprite: 'table', x: 10, y: 6 },
      { id: 'cup_cafe', sprite: 'cup', x: 12, y: 8 },
      { id: 'flower_cafe', sprite: 'flower', x: 2, y: 8 },
      { id: 'clock_cafe', sprite: 'clock', x: 6, y: 0, wall: true },
      { id: 'painting_cafe', sprite: 'painting', x: 10, y: 0, wall: true }
    ],
    warps: [{ x: 8, y: 10, to: 'street', tx: 6, ty: 8, label: 'to the street' }]
  },

  ward: {
    id: 'ward', label: 'Hospital · Ward 病室', theme: 'stone', outdoor: false,
    tiles: [
      B,
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      B
    ],
    objects: [
      { id: 'bed_ward', sprite: 'bed', x: 4, y: 4 },
      { id: 'vase_ward', sprite: 'flower', x: 6, y: 3 },
      { id: 'cushion_ward', sprite: 'cushion', x: 3, y: 6 },
      { id: 'letter_ward', sprite: 'letter', x: 11, y: 6 },
      { id: 'book_ward', sprite: 'book', x: 12, y: 4 },
      { id: 'window_ward', sprite: 'window', x: 8, y: 0, wall: true },
      { id: 'clock_ward', sprite: 'clock', x: 12, y: 0, wall: true }
    ],
    warps: [{ x: 8, y: 10, to: 'street', tx: 6, ty: 8, label: 'to the street' }]
  },

  hill: {
    id: 'hill', label: 'The Hill 丘', theme: 'garden', outdoor: true,
    tiles: [
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#....======....#',
      '#....======....#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      B
    ],
    objects: [
      { id: 'tree_hill', sprite: 'tree', x: 2, y: 2 },
      { id: 'tree_hill_b', sprite: 'tree', x: 13, y: 3 },
      { id: 'bench_hill', sprite: 'bench', x: 8, y: 3 },
      { id: 'flower_hill', sprite: 'flower', x: 5, y: 8 },
      { id: 'flower_hill_b', sprite: 'flower', x: 11, y: 8 },
      { id: 'lamp_hill', sprite: 'lamp', x: 3, y: 5 },
      { id: 'arch', sprite: 'arch', x: 8, y: 1, fromDay: 40 },
      { id: 'flower_wed_a', sprite: 'flower', x: 6, y: 1, fromDay: 40 },
      { id: 'flower_wed_b', sprite: 'flower', x: 10, y: 1, fromDay: 40 },
      { id: 'lamp_wed_a', sprite: 'lamp', x: 4, y: 2, fromDay: 40 },
      { id: 'lamp_wed_b', sprite: 'lamp', x: 12, y: 2, fromDay: 40 },
      { id: 'sakura_hill', sprite: 'sakura', x: 5, y: 3, fromDay: 51, untilDay: 60 },
      { id: 'sakura_hill_b', sprite: 'sakura', x: 10, y: 3, fromDay: 51, untilDay: 60 }
    ],
    warps: [{ x: 8, y: 10, to: 'street', tx: 2, ty: 5, label: 'to the street' }]
  },

  store: {
    id: 'store', label: 'Store 店', theme: 'wood', outdoor: false,
    tiles: [
      B,
      B,
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      B
    ],
    objects: [
      { id: 'counter', sprite: 'counter', x: 7, y: 4 },
      { id: 'shelf', sprite: 'shelf', x: 2, y: 3 },
      { id: 'shelf_b', sprite: 'shelf', x: 12, y: 3 },
      { id: 'shelf_c', sprite: 'shelf', x: 2, y: 7 },
      { id: 'rice', sprite: 'rice', x: 12, y: 7 }
    ],
    warps: [{ x: 8, y: 10, to: 'street', tx: 14, ty: 4, label: 'to the street' }]
  }
}

/* ---------------- the cast ----------------
   nameSeg makes NPC nameplates join the diglot weave: once you learn
   "mom", she is はは everywhere, forever. Ambient pools are the phase-2
   Haiku expansion point — these lines establish each personality. */
export const NPCS: WorldNpc[] = [
  {
    id: 'trinity', moves: [{ fromDay: 43, untilDay: 47, loc: 'ward', x: 5, y: 4 }], name: 'Trinity', persona: 'your wife (ep40!); sunshine with a scary side when forgotten; loves surprises and lists',
    loc: 'house', x: 6, y: 3,
    ambient: [
      'Text me when you get to {work}, okay? Okay.',
      'One day I want to see the sea. Putting it on our list. It is a long list.',
      'You looked very cool today. For about a minute. It was a good minute.'
    ]
  },
  {
    id: 'mom', name: 'Mom', nameWord: 'mom', persona: 'warm but no-nonsense; feeds everyone; secretly proud of you',
    loc: 'house', x: 4, y: 4,
    ambient: [
      'Did you eat? You look pale. Sit down, the soup is {hot}.',
      'Buy {vegetables} on the way home. Yes, again. They are good for you.',
      'Your {dad} hid snacks behind the rice cooker. I know everything.'
    ]
  },
  {
    id: 'dad', name: 'Dad', nameWord: 'dad', persona: 'corny jokes, naps, hides snacks from mom; sentimental underneath',
    loc: 'house', x: 11, y: 7,
    ambient: [
      'The TV remote was in the fridge again. Nobody ask why.',
      'Do not tell your {mom} about the snack drawer.',
      'Back in my day we walked to {school} uphill. Both ways.'
    ]
  },
  {
    id: 'sister', name: 'Little sister', nameWord: 'little sister', persona: 'chaotic teen, always broke, teases you but has your back',
    loc: 'house', x: 9, y: 8,
    ambient: [
      'Lend me {money}? I will absolutely never pay you back.',
      'If {mom} asks, I have been studying all morning.',
      'I did not eat your pudding. A ghost did. A hungry one.'
    ]
  },
  {
    id: 'friend', name: 'Your friend', nameWord: 'friend', persona: 'overexcited golden-retriever energy; food-obsessed; loyal',
    loc: 'street', x: 7, y: 5,
    ambient: [
      'Bro. BRO. The bakery has new {bread}. This changes everything.',
      'Race you to the {park}! ...after I finish this snack.',
      'You look busy. Cool cool cool. Anyway, got twenty minutes?'
    ]
  },
  {
    id: 'shopkeeper', name: 'Shopkeeper', nameWord: 'shop clerk', persona: 'cheerful gossip who knows everyone; always has a deal',
    loc: 'store', x: 10, y: 4,
    ambient: [
      'Welcome, welcome! The {apple} are cheap today. Practically a crime.',
      'Between us, the {fish} came in fresh this morning. The good stuff.',
      'That old man from the park pays in exact change. Every single time.'
    ]
  },
  {
    id: 'trainer', name: 'Gym coach', nameWord: 'teacher', persona: 'loud fitness maniac who secretly writes haiku between sets',
    loc: 'gym', x: 8, y: 5,
    ambient: [
      'FEEL THE BURN! ...sorry, too loud? Feel the burn. Whispered.',
      'Rest days are for {sleep}. Today is not a rest day.',
      'I write haiku between sets. Muscle and meter. Balance.'
    ]
  },
  {
    id: 'boss', name: 'The boss', nameWord: 'boss', persona: 'tired but kind middle manager; runs on coffee and sighs',
    loc: 'office', x: 8, y: 5,
    ambient: [
      'Ah, good, you are here. About those reports... kidding. Unless?',
      'The {phone} has been ringing all day. It is never good news.',
      'My heart says {coffee} time. My calendar disagrees.'
    ]
  },
  {
    id: 'coworker', name: 'Coworker', nameWord: 'coworker', persona: 'deadpan office survivor; lunch is sacred; mildly conspiratorial',
    loc: 'office', x: 4, y: 6,
    ambient: [
      'I labeled my {water} bottle and it still vanished. This office, I swear.',
      'Lunch plan: something that is not from the vending machine. Wild, I know.',
      'If anyone asks, this spreadsheet took me all day.',
      'The {boss} said one more thing before you go. It was four things.',
      'I have {money} riding on whether the printer survives the week.',
      'The {phone} rang once and everyone pretended to be busy. Beautiful teamwork.',
      'My desk plant listens better than anyone in this building.',
      'Meeting at three. It could have been an email. It is always an email.',
      'I hid the good {tea} in the bottom drawer. This stays between us.',
      'The {new} intern alphabetized everything. We are all afraid of them.'
    ]
  },
  {
    id: 'oldman', name: 'Old man', nameWord: 'old man', moves: [{ fromDay: 62, untilDay: 62, loc: 'away', x: 0, y: 0 }], persona: 'slow, poetic park sage; feeds pigeons; full of gentle wisdom',
    loc: 'park', x: 5, y: 8,
    ambient: [
      'This {tree} was small when I was small. Only one of us kept growing.',
      'The koi in the {pond} know me. I have a reputation.',
      'Sit. Watch the water. It is the best part of the day.'
    ]
  },
  {
    id: 'cat', name: 'Fish-Thief', nameWord: 'cat', sprite: 'cat', fromDay: 5,
    persona: 'the town cat; reformed criminal; communicates in stares and slow blinks',
    loc: 'house', x: 5, y: 8,
    ambient: [
      'Mrrrp.',
      '...The cat stares at you. The cat knows everything.',
      'It slow-blinks. In cat, that is a love letter.'
    ]
  },
  {
    id: 'grandma', name: 'Grandma', nameWord: 'grandma', fromDay: 16, moves: [{ fromDay: 62, untilDay: 62, loc: 'away', x: 0, y: 0 }],
    persona: 'mom\'s mom; tiny, unstoppable; spoils everyone; suspiciously good at every game',
    loc: 'house', x: 12, y: 8,
    ambient: [
      'Come here. You are too thin. Everyone is too thin. Sit.',
      'In my {village|village}? No — in MY day, we had one {game|game} and it was chores.',
      'Your {grandma} hears everything in this house. EVERYTHING. Now, snacks?'
    ]
  },
  {
    id: 'mori', name: 'Dr. Mori', fromDay: 54,
    persona: 'legendary city surgeon, Kenji\'s teacher; speaks in single devastating sentences; secretly delighted by absolutely everything here',
    loc: 'clinic', x: 10, y: 5,
    ambient: [
      'In the {city|city}, nobody queues for bread. I begin to see the problem with the city.',
      '"Ha." — that is my full review of this town. It is the highest score I give.',
      'I came for two days. I have now seen four seasons of your lives. I appear to still be here.'
    ]
  },
  {
    id: 'kenji', name: 'Dr. Kenji', nameWord: 'doctor', fromDay: 23,
    persona: 'town doctor; terminally calm; diagnoses everything, including feelings; boss\'s old friend from the 2019 printer incident',
    loc: 'clinic', x: 8, y: 4,
    ambient: [
      'Deep breath in... and out. That is free. Everything else needs an {appointment|appointment}.',
      'The {doctor} is in. The {doctor} is always in. The {doctor} may live here.',
      'Drink {water|water}. Sleep {early|early}. Ninety percent of my job is saying that.'
    ]
  },
  {
    id: 'tmother', name: "Trinity's Mom", fromDay: 22,
    persona: 'Trinity\'s mother; elegant, terrifyingly perceptive, secretly loves bad puns',
    loc: 'park', x: 10, y: 2,
    ambient: [
      'So YOU are the famous one. Interesting. Very interesting.',
      'This town is lovely. Small. Easy to keep an eye on people. Lovely.',
      'Trinity wrote about you in every {letter|letter}. Every. Single. One.'
    ]
  },
  {
    id: 'tfather', name: "Trinity's Dad", fromDay: 22,
    persona: 'Trinity\'s father; enormous softie; cries at commercials; firm-handshake enthusiast',
    loc: 'park', x: 11, y: 3,
    ambient: [
      'Firm handshake. That is all I ask of a person. You pass.',
      'Do not tell anyone I cried at the {bread|bread} shop. It was the {smell|smell}. It got me.',
      'A good {park|park}. A good {pond|pond}. A good town for my little girl.'
    ]
  }
]

export const NPCS_BY_ID: Record<string, WorldNpc> = Object.fromEntries(NPCS.map(n => [n.id, n]))
export const START_LOC = 'bedroom'
export const START_POS = { x: 8, y: 8 }
