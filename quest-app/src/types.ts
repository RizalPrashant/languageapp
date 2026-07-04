export type Lang = 'ja' | 'zh'
export type ThemeName = 'tatami' | 'wood' | 'night' | 'garden' | 'stone'
export type Mount = 'floor' | 'wall'
export type Dir = 'up' | 'down' | 'left' | 'right'

export interface Word {
  word: string
  reading: string
  romaji: string
  meaning: string
  type: 'noun' | 'verb' | 'adjective'
  sprite: string
  sentence: string
  hint: string
  mnemonic: string
  distractors: string[]
}

export interface Day {
  title: string
  theme: ThemeName
  story: string
  words: Word[]
}

export interface Companion {
  name: string
  sprite: string
  word: string
  meaning: string
  reading: string
  romaji: string
  mnemonic: string
  distractors: string[]
  timesMet: number
  affection: number
  firstMet: string
  lastMet: string
}

export interface RoomObject {
  idx: number | null      // index into day.words, null for companions
  sprite: string
  mount: Mount
  tx: number
  ty: number
  companion?: Companion
  word?: string           // companion's word
  greeted?: boolean
}

export interface Session {
  lang: Lang
  day: Day
  objects: RoomObject[]
  learned: Record<number, boolean>
  compDone: Record<string, boolean>
  wrongAt: Record<string, number>
  misses: Record<number, number>
  date: string
}

export interface VocabEntry {
  meaning: string
  reading: string
  romaji: string
  mnemonic: string
  learnedOn: string
  misses: number
}

export interface Progress {
  streak: number
  lastDone: string | null
  daysDone: number
  known: Record<Lang, string[]>
  vocab: Record<Lang, Record<string, VocabEntry>>
  companions: Record<Lang, Record<string, Companion>>
}

export interface PlayerState {
  x: number
  y: number
  dir: Dir
  frame: number
  ftick: number
  moving: boolean
}

export interface Sparkle {
  x: number
  y: number
  t: number
}
