import type { Lang, Seg } from '../types'
import { BANK as STARTER, type BankWord, type QuestSpec } from '../data/wordbank'
import { LEX, LEX_KEYS } from '../data/lexicon'
import { NPCS } from '../data/world'

/* =====================================================================
   THE LIVE WORD BANK — multi-language.
   NOTE: BankWord.ja holds the target-language SCRIPT for whichever
   language is active (kanji/kana for ja, hanzi for zh, the word for de).
   - ja: 6000-word JLPT bank (public/vocab-ja.json + quests-ja.json)
   - zh/de: built from the trilingual lexicon (episode-first product)
   Episodes reference CONCEPTS ({mom}); conceptToId resolves them against
   the active language.
   ===================================================================== */

export let LANG: Lang = 'ja'
export let BANK: BankWord[] = STARTER
export let BANK_BY_ID: Record<number, BankWord> = {}
export let DEAL_ORDER: number[] = []

let WORD_TO_ID: Record<string, number> = {}
let CONCEPT_TO_ID: Record<string, number> = {}
let jaFullBank: BankWord[] | null = null

export function getLang(): Lang { return LANG }
export function wordById(id: number): BankWord | undefined { return BANK_BY_ID[id] }
export function idOf(word: string): number | undefined { return WORD_TO_ID[word] }
export function conceptToId(key: string): number | undefined { return CONCEPT_TO_ID[key] }

/* deterministic PRNG so every player's deal order is identical & stable */
function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6D2B79F5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const rnd = mulberry32(seed)
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function fallbackQuest(id: number): QuestSpec {
  const npc = NPCS[id % NPCS.length].id
  const ask: Seg[] = [{ t: 'The word on my mind today: ' }, { w: id }, { t: '.' }]
  return { type: 'talk', npc, ask }
}

/* zh/de banks come straight from the lexicon, in episode order */
function lexBank(lang: 'zh' | 'de'): BankWord[] {
  return LEX_KEYS.map((key, i) => {
    const [, , , zhWord, zhPinyin, deWord, pos] = LEX[key]
    const id = i + 1
    if (lang === 'zh') {
      return { id, ja: zhWord, reading: zhPinyin, romaji: zhPinyin, en: key, pos, quest: fallbackQuest(id) }
    }
    return { id, ja: deWord, reading: deWord, romaji: deWord, en: key, pos, quest: fallbackQuest(id) }
  })
}

function reindex(): void {
  BANK_BY_ID = Object.fromEntries(BANK.map(w => [w.id, w]))
  WORD_TO_ID = {}
  for (const w of BANK) if (WORD_TO_ID[w.ja] === undefined) WORD_TO_ID[w.ja] = w.id
  // concepts resolve via the lexicon's word for the active language
  CONCEPT_TO_ID = {}
  for (const key of LEX_KEYS) {
    const row = LEX[key]
    const word = LANG === 'ja' ? row[0] : LANG === 'zh' ? row[3] : row[5]
    const id = WORD_TO_ID[word]
    if (id !== undefined) CONCEPT_TO_ID[key] = id
  }
  // deal order: ja keeps the level curve with in-level shuffle; zh/de use lexicon order
  if (LANG !== 'ja') {
    DEAL_ORDER = BANK.map(w => w.id)
    return
  }
  const byLevel = new Map<number, number[]>()
  for (const w of BANK) {
    const lv = w.level ?? 0
    if (!byLevel.has(lv)) byLevel.set(lv, [])
    byLevel.get(lv)!.push(w.id)
  }
  if (byLevel.size <= 1) {
    DEAL_ORDER = BANK.map(w => w.id)
  } else {
    DEAL_ORDER = []
    for (const lv of [...byLevel.keys()].sort((a, b) => b - a)) {
      DEAL_ORDER.push(...seededShuffle(byLevel.get(lv)!, 1000 + lv))
    }
  }
}
reindex()

export function setLang(lang: Lang): void {
  LANG = lang
  if (lang === 'ja') BANK = jaFullBank || STARTER
  else BANK = lexBank(lang)
  reindex()
}

/* Parse a template line into segments.
   "{mom} is watching" -> [{w:<id of mom in active language>},{t:" is watching"}]
   Legacy "{母|mom}" also works: tries 母-as-concept, then mom-as-concept.
   Unresolvable -> plain English text (the fallback / key itself). */
export function lineSegs(template: string): Seg[] {
  const parts = template.split(/(\{[^}]+\})/g)
  const out: Seg[] = []
  for (const p of parts) {
    if (!p) continue
    if (p.startsWith('{') && p.endsWith('}')) {
      const [a, b] = p.slice(1, -1).split('|')
      const id = conceptToId(a) ?? (b ? conceptToId(b) : undefined)
      if (id !== undefined) out.push({ w: id })
      else out.push({ t: b || a })
    } else {
      out.push({ t: p })
    }
  }
  return out
}

/* ---------------- ja 6000-word bank loading ---------------- */
interface VocabRow { id: number; ja: string; reading: string; romaji: string; en: string; level: number }
interface QuestRow { id: number; pos: BankWord['pos']; quest: QuestSpec }

let jaLoaded = false
export async function loadBank(): Promise<boolean> {
  if (jaLoaded) return true
  try {
    const [vRes, qRes] = await Promise.all([
      fetch(`${import.meta.env.BASE_URL}vocab-ja.json`),
      fetch(`${import.meta.env.BASE_URL}quests-ja.json`)
    ])
    if (!vRes.ok || !qRes.ok) throw new Error(`fetch ${vRes.status}/${qRes.status}`)
    const vocab = await vRes.json() as VocabRow[]
    const quests = await qRes.json() as QuestRow[]
    const qById = new Map(quests.map(q => [q.id, q]))
    jaFullBank = vocab.map(v => {
      const q = qById.get(v.id)
      return {
        id: v.id, ja: v.ja, reading: v.reading, romaji: v.romaji, en: v.en,
        pos: q?.pos || 'noun',
        quest: q?.quest || fallbackQuest(v.id),
        level: v.level
      }
    })
    jaLoaded = true
    if (LANG === 'ja') { BANK = jaFullBank; reindex() }
    return true
  } catch (e) {
    console.warn('Word bank load failed — running on the starter bank.', e)
    return false
  }
}
