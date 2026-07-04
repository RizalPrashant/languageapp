import type { Lang } from '../types'
import { todayStr } from './storage'
import { getLang } from './bank'

/* World-mode progress, kept PER LANGUAGE. The learned-set IS the game state. */
export interface WorldProgress {
  dayNumber: number
  streak: number
  lastDone: string | null
  daysDone: number
  learnedIds: number[]
}

export interface QuestState {
  wordId: number
  done: boolean
  cooldownUntil: number
  progress: number
  spec?: import('../data/wordbank').QuestSpec
  stage?: number
}

export interface WorldToday {
  date: string
  dayNumber: number
  wordIds: number[]
  quests: QuestState[]
  phase: 'learn' | 'explore' | 'done' | 'failed'
  epTitle?: string
  story?: string
  night?: boolean
  timerSec?: number
  startedAt?: number | null
  penaltySec?: number
  flavor?: { intro: import('../types').Seg[]; npcLines: Record<string, import('../types').Seg[][]> }
}

export const ALL_LANGS: Lang[] = ['ja', 'zh', 'de']
const keyProg = (lang: Lang) => `kq2_${lang}_progress`
const keyToday = (lang: Lang) => `kq2_${lang}_today`

const DEFAULT_PROG: WorldProgress = { dayNumber: 1, streak: 0, lastDone: null, daysDone: 0, learnedIds: [] }

export function getWorldProgFor(lang: Lang): WorldProgress {
  try {
    let raw = JSON.parse(localStorage.getItem(keyProg(lang)) || 'null')
    if (!raw && lang === 'ja') {
      // migrate pre-multilanguage progress once
      raw = JSON.parse(localStorage.getItem('kq2_progress') || 'null')
      if (raw) localStorage.setItem(keyProg('ja'), JSON.stringify(raw))
    }
    return Object.assign({ ...DEFAULT_PROG, learnedIds: [] }, raw || {})
  } catch {
    return { ...DEFAULT_PROG, learnedIds: [] }
  }
}

export function getWorldProg(): WorldProgress {
  return getWorldProgFor(getLang())
}

export function saveWorldProg(p: WorldProgress): void {
  localStorage.setItem(keyProg(getLang()), JSON.stringify(p))
}

export function saveWorldToday(t: WorldToday): void {
  localStorage.setItem(keyToday(getLang()), JSON.stringify(t))
}

export function loadWorldToday(): WorldToday | null {
  try {
    let t = JSON.parse(localStorage.getItem(keyToday(getLang())) || 'null') as WorldToday | null
    if (!t && getLang() === 'ja') {
      t = JSON.parse(localStorage.getItem('kq2_today') || 'null') as WorldToday | null
    }
    if (t && t.date === todayStr() && Array.isArray(t.wordIds) && t.wordIds.length) return t
  } catch { /* treat as absent */ }
  return null
}

export function clearWorldProgress(): void {
  for (const lang of ALL_LANGS) {
    localStorage.removeItem(keyProg(lang))
    localStorage.removeItem(keyToday(lang))
  }
  localStorage.removeItem('kq2_progress')
  localStorage.removeItem('kq2_today')
}
