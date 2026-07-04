import type { Lang, Progress, Session } from '../types'

const KEYS = { key: 'kq_apikey', prog: 'kq_progress', today: 'kq_today' }

export function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

function defaultProg(): Progress {
  return {
    streak: 0, lastDone: null, daysDone: 0,
    known: { ja: [], zh: [], de: [] },
    vocab: { ja: {}, zh: {}, de: {} },
    companions: { ja: {}, zh: {}, de: {} }
  }
}

export function getProg(): Progress {
  try {
    const raw = JSON.parse(localStorage.getItem(KEYS.prog) || 'null')
    return Object.assign(defaultProg(), raw || {})
  } catch {
    return defaultProg()
  }
}

export function saveProg(p: Progress): void {
  localStorage.setItem(KEYS.prog, JSON.stringify(p))
}

/* API key: pasted in Settings (localStorage) wins, else the Vite env (local dev).
   In production this moves to a Supabase Edge Function proxy. */
export function getApiKey(): string | null {
  return localStorage.getItem(KEYS.key) || import.meta.env.VITE_ANTHROPIC_KEY || null
}
export function hasEnvKey(): boolean {
  return !!import.meta.env.VITE_ANTHROPIC_KEY
}
export function getStoredKey(): string {
  return localStorage.getItem(KEYS.key) || ''
}
export function setApiKey(v: string): void {
  if (v) localStorage.setItem(KEYS.key, v)
  else localStorage.removeItem(KEYS.key)
}

export function saveToday(s: Session): void {
  localStorage.setItem(KEYS.today, JSON.stringify(s))
}

export function loadToday(lang: Lang): Session | null {
  try {
    const t = JSON.parse(localStorage.getItem(KEYS.today) || 'null') as Session | null
    if (t && t.lang === lang && t.date === todayStr() && t.day && t.day.words) {
      t.wrongAt = t.wrongAt || {}
      t.compDone = t.compDone || {}
      return t
    }
  } catch { /* corrupted state — treat as absent */ }
  return null
}

export function clearAllProgress(): void {
  localStorage.removeItem(KEYS.prog)
  localStorage.removeItem(KEYS.today)
}
