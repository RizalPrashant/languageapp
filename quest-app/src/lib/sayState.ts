import { CAST, SENTENCES, type SayLang, type SpeakerLang } from '../data/saygoodbye'

/* =====================================================================
   Game state for 「さようなら」 — per-language progress + today's run.
   Days 1-8: one key per speaker per day (8 quizzes).
   Day 9: all sentences fully English; do the 8 courtesies.
   Timer: 4:00 per day, wrong answer −20s, fail = redo the day.
   ===================================================================== */

export const TIMER_SEC = 240
export const WRONG_PENALTY = 20
export const FINAL_DAY = 9

let LANG: SayLang = 'ja'
export function getSayLang(): SayLang { return LANG }
export function setSayLang(l: SayLang): void { LANG = l }

export function keyOf(spk: string, day: number): string { return `${spk}:${day}` }

export interface SayProgress {
  day: number              // 1..9 (current day of the season)
  learned: string[]        // keyOf entries, permanent per language
  seasons: number          // seasons completed
  streak: number
  lastDone: string | null
}

export interface SayToday {
  date: string
  day: number
  done: string[]           // speaker ids finished today (quizzed / acted)
  gained: string[]         // keys learned during THIS run (un-learned on fail)
  startedAt: number | null
  penaltySec: number
  phase: 'brief' | 'run' | 'done' | 'failed' | 'season'
}

export function todayStr(): string { return new Date().toISOString().slice(0, 10) }

const DEF_PROG: SayProgress = { day: 1, learned: [], seasons: 0, streak: 0, lastDone: null }

const kProg = (l: SayLang) => `sg_${l}_prog`
const kToday = (l: SayLang) => `sg_${l}_today`

export function getProgFor(lang: SayLang): SayProgress {
  try {
    const raw = JSON.parse(localStorage.getItem(kProg(lang)) || 'null')
    return Object.assign({ ...DEF_PROG, learned: [] }, raw || {})
  } catch { return { ...DEF_PROG, learned: [] } }
}
export function getProg(): SayProgress { return getProgFor(LANG) }
export function saveProg(p: SayProgress): void { localStorage.setItem(kProg(LANG), JSON.stringify(p)) }

export function newToday(day: number): SayToday {
  return { date: todayStr(), day, done: [], gained: [], startedAt: null, penaltySec: 0, phase: 'brief' }
}

export function loadToday(): SayToday | null {
  try {
    const t = JSON.parse(localStorage.getItem(kToday(LANG)) || 'null') as SayToday | null
    if (t && t.date === todayStr() && t.day === getProg().day) return t
  } catch { /* absent */ }
  return null
}
export function saveToday(t: SayToday): void { localStorage.setItem(kToday(LANG), JSON.stringify(t)) }

export function resetAllSay(): void {
  for (const l of ['ja', 'zh', 'de', 'es', 'fr'] as SayLang[]) {
    localStorage.removeItem(kProg(l))
    localStorage.removeItem(kToday(l))
  }
}

/* --------------- content helpers --------------- */

export function speakerLang(spk: string, lang: SayLang = LANG): SpeakerLang {
  return SENTENCES[lang][spk]
}

export function keyForDay(spk: string, day: number, lang: SayLang = LANG) {
  return speakerLang(spk, lang).keys.find(k => k.d === day)!
}

export function learnedCount(spk: string, learned: Set<string>): number {
  let n = 0
  for (let d = 1; d <= 8; d++) if (learned.has(keyOf(spk, d))) n++
  return n
}

export function sentenceComplete(spk: string, learned: Set<string>): boolean {
  return learnedCount(spk, learned) >= 8
}

/* 4 English options for a quiz: the right one + this day's other keys */
export function quizOptions(spk: string, day: number, lang: SayLang = LANG): Array<{ label: string; correct: boolean }> {
  const correct = keyForDay(spk, day, lang).en
  const pool = CAST.filter(c => c.id !== spk)
    .map(c => keyForDay(c.id, day, lang).en)
    .filter((en, i, a) => en !== correct && a.indexOf(en) === i)
  // shuffle pool, take 3
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]
  }
  const opts = [{ label: correct, correct: true }, ...pool.slice(0, 3).map(label => ({ label, correct: false }))]
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); [opts[i], opts[j]] = [opts[j], opts[i]]
  }
  return opts
}

/* per-language quiz prompt line */
export function quizPrompt(q: string, lang: SayLang = LANG): string {
  const name = { ja: 'Japanese', zh: 'Chinese', de: 'German', es: 'Spanish', fr: 'French' }[lang]
  return `What does the ${name} 「${q}」 mean?`
}
