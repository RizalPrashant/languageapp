import type { Seg } from '../types'

/* =====================================================================
   WORD BANK — production schema.
   The full 6000-word asset (phase 3) uses exactly this shape; this file
   ships the first slice so days 1-6 are playable end to end.
   Order matters: the app deals the next 8 unlearned words per day.
   ===================================================================== */

export type QuestSpec =
  | { type: 'talk'; npc: string; ask: Seg[] }                    // greet/say the word to an NPC
  | { type: 'buy'; item: string; ask: Seg[] }                    // ask the shopkeeper for it
  | { type: 'inspect'; obj: string; loc: string; ask: Seg[] }    // find the object, name it
  | { type: 'do'; loc: string; verb: 'walk' | 'run'; amount: number; desc: Seg[] } // physically perform it

export interface BankWord {
  id: number
  ja: string
  reading: string
  romaji: string
  en: string
  pos: 'noun' | 'verb' | 'adjective' | 'adverb'
  quest: QuestSpec
  level?: number            // JLPT level (5 = N5 … 1 = N1)
}

/* Day 1: 1-8 · Day 2: 9-16 · Day 3: 17-24 · Day 4: 25-32 · Day 5: 33-40 · Day 6: 41-48 */
export const BANK: BankWord[] = [
  /* ---- Day 1: the family, the house, first steps ---- */
  { id: 1, ja: '母', reading: 'はは', romaji: 'haha', en: 'mom', pos: 'noun',
    quest: { type: 'talk', npc: 'mom', ask: [{ t: 'Good morning, ' }, { w: 1 }, { t: '!' }] } },
  { id: 2, ja: '父', reading: 'ちち', romaji: 'chichi', en: 'dad', pos: 'noun',
    quest: { type: 'talk', npc: 'dad', ask: [{ t: 'Morning, ' }, { w: 2 }, { t: '. Sleep well?' }] } },
  { id: 3, ja: '妹', reading: 'いもうと', romaji: 'imouto', en: 'little sister', pos: 'noun',
    quest: { type: 'talk', npc: 'sister', ask: [{ t: 'Hey ' }, { w: 3 }, { t: ', stop stealing my snacks.' }] } },
  { id: 4, ja: '本', reading: 'ほん', romaji: 'hon', en: 'book', pos: 'noun',
    quest: { type: 'inspect', obj: 'book', loc: 'bedroom', ask: [{ t: 'The ' }, { w: 4 }, { t: ' you fell asleep reading.' }] } },
  { id: 5, ja: 'りんご', reading: 'りんご', romaji: 'ringo', en: 'apple', pos: 'noun',
    quest: { type: 'buy', item: 'apple', ask: [{ t: 'One ' }, { w: 5 }, { t: ', please!' }] } },
  { id: 6, ja: '歩く', reading: 'あるく', romaji: 'aruku', en: 'walk', pos: 'verb',
    quest: { type: 'do', loc: 'park', verb: 'walk', amount: 700, desc: [{ w: 6 }, { t: ' around the park' }] } },
  { id: 7, ja: '熱い', reading: 'あつい', romaji: 'atsui', en: 'hot', pos: 'adjective',
    quest: { type: 'inspect', obj: 'stove', loc: 'house', ask: [{ t: 'Careful — the pot is ' }, { w: 7 }, { t: '!' }] } },
  { id: 8, ja: '窓', reading: 'まど', romaji: 'mado', en: 'window', pos: 'noun',
    quest: { type: 'inspect', obj: 'window', loc: 'bedroom', ask: [{ t: 'Rain streaks down the ' }, { w: 8 }, { t: '.' }] } },

  /* ---- Day 2: neighbourhood people, food ---- */
  { id: 9, ja: '友達', reading: 'ともだち', romaji: 'tomodachi', en: 'friend', pos: 'noun',
    quest: { type: 'talk', npc: 'friend', ask: [{ t: 'Yo! My best ' }, { w: 9 }, { t: '!' }] } },
  { id: 10, ja: '店員', reading: 'てんいん', romaji: "ten'in", en: 'shop clerk', pos: 'noun',
    quest: { type: 'talk', npc: 'shopkeeper', ask: [{ t: 'The friendly ' }, { w: 10 }, { t: ' waves at you.' }] } },
  { id: 11, ja: 'パン', reading: 'パン', romaji: 'pan', en: 'bread', pos: 'noun',
    quest: { type: 'buy', item: 'bread', ask: [{ t: 'Some fresh ' }, { w: 11 }, { t: ', please.' }] } },
  { id: 12, ja: '牛乳', reading: 'ぎゅうにゅう', romaji: 'gyuunyuu', en: 'milk', pos: 'noun',
    quest: { type: 'buy', item: 'milk', ask: [{ t: 'A bottle of ' }, { w: 12 }, { t: ' too.' }] } },
  { id: 13, ja: '時計', reading: 'とけい', romaji: 'tokei', en: 'clock', pos: 'noun',
    quest: { type: 'inspect', obj: 'clock', loc: 'house', ask: [{ t: 'The ' }, { w: 13 }, { t: ' says you are late.' }] } },
  { id: 14, ja: 'テレビ', reading: 'テレビ', romaji: 'terebi', en: 'TV', pos: 'noun',
    quest: { type: 'inspect', obj: 'tv', loc: 'house', ask: [{ t: 'The ' }, { w: 14 }, { t: ' is playing the news.' }] } },
  { id: 15, ja: '走る', reading: 'はしる', romaji: 'hashiru', en: 'run', pos: 'verb',
    quest: { type: 'do', loc: 'park', verb: 'run', amount: 1000, desc: [{ w: 15 }, { t: ' laps in the park' }] } },
  { id: 16, ja: '木', reading: 'き', romaji: 'ki', en: 'tree', pos: 'noun',
    quest: { type: 'inspect', obj: 'tree', loc: 'park', ask: [{ t: 'A huge old ' }, { w: 16 }, { t: ' shades the path.' }] } },

  /* ---- Day 3: work, the gym ---- */
  { id: 17, ja: '上司', reading: 'じょうし', romaji: 'joushi', en: 'boss', pos: 'noun',
    quest: { type: 'talk', npc: 'boss', ask: [{ t: 'Good morning, ' }, { w: 17 }, { t: '. About that deadline…' }] } },
  { id: 18, ja: '先生', reading: 'せんせい', romaji: 'sensei', en: 'teacher / coach', pos: 'noun',
    quest: { type: 'talk', npc: 'trainer', ask: [{ t: 'Ready for training, ' }, { w: 18 }, { t: '!' }] } },
  { id: 19, ja: '机', reading: 'つくえ', romaji: 'tsukue', en: 'desk', pos: 'noun',
    quest: { type: 'inspect', obj: 'desk', loc: 'office', ask: [{ t: 'Your ' }, { w: 19 }, { t: ', buried in papers.' }] } },
  { id: 20, ja: '卵', reading: 'たまご', romaji: 'tamago', en: 'egg', pos: 'noun',
    quest: { type: 'buy', item: 'egg', ask: [{ t: 'Six ' }, { w: 20 }, { t: 's, please.' }] } },
  { id: 21, ja: '水', reading: 'みず', romaji: 'mizu', en: 'water', pos: 'noun',
    quest: { type: 'buy', item: 'water', ask: [{ t: 'Just some ' }, { w: 21 }, { t: ' — training day.' }] } },
  { id: 22, ja: 'ブロッコリー', reading: 'ブロッコリー', romaji: 'burokkorii', en: 'broccoli', pos: 'noun',
    quest: { type: 'buy', item: 'broccoli', ask: [{ t: 'Can I get a ' }, { w: 22 }, { t: '?' }] } },
  { id: 23, ja: '花', reading: 'はな', romaji: 'hana', en: 'flower', pos: 'noun',
    quest: { type: 'inspect', obj: 'flower', loc: 'park', ask: [{ t: 'A single ' }, { w: 23 }, { t: ' blooms by the bench.' }] } },
  { id: 24, ja: '座る', reading: 'すわる', romaji: 'suwaru', en: 'sit', pos: 'verb',
    quest: { type: 'inspect', obj: 'bench', loc: 'park', ask: [{ t: 'A quiet place to ' }, { w: 24 }, { t: ' for a while.' }] } },

  /* ---- Day 4: house life verbs ---- */
  { id: 25, ja: '食べる', reading: 'たべる', romaji: 'taberu', en: 'eat', pos: 'verb',
    quest: { type: 'talk', npc: 'mom', ask: [{ t: "What's to " }, { w: 25 }, { t: ' today?' }] } },
  { id: 26, ja: '飲む', reading: 'のむ', romaji: 'nomu', en: 'drink', pos: 'verb',
    quest: { type: 'buy', item: 'tea', ask: [{ t: 'Something warm to ' }, { w: 26 }, { t: '…' }] } },
  { id: 27, ja: '寝る', reading: 'ねる', romaji: 'neru', en: 'sleep', pos: 'verb',
    quest: { type: 'inspect', obj: 'bed', loc: 'bedroom', ask: [{ t: 'Five more minutes to ' }, { w: 27 }, { t: '…' }] } },
  { id: 28, ja: '読む', reading: 'よむ', romaji: 'yomu', en: 'read', pos: 'verb',
    quest: { type: 'inspect', obj: 'bookshelf', loc: 'bedroom', ask: [{ t: 'So many books to ' }, { w: 28 }, { t: '.' }] } },
  { id: 29, ja: '見る', reading: 'みる', romaji: 'miru', en: 'watch', pos: 'verb',
    quest: { type: 'inspect', obj: 'tv', loc: 'house', ask: [{ t: 'Anything good to ' }, { w: 29 }, { t: ' tonight?' }] } },
  { id: 30, ja: '買う', reading: 'かう', romaji: 'kau', en: 'buy', pos: 'verb',
    quest: { type: 'talk', npc: 'shopkeeper', ask: [{ t: 'I need to ' }, { w: 30 }, { t: ' a few things.' }] } },
  { id: 31, ja: 'お茶', reading: 'おちゃ', romaji: 'ocha', en: 'tea', pos: 'noun',
    quest: { type: 'buy', item: 'tea', ask: [{ t: 'Green ' }, { w: 31 }, { t: ', the good kind.' }] } },
  { id: 32, ja: '魚', reading: 'さかな', romaji: 'sakana', en: 'fish', pos: 'noun',
    quest: { type: 'buy', item: 'fish', ask: [{ t: 'Fresh ' }, { w: 32 }, { t: ' for dinner.' }] } },

  /* ---- Day 5: sizes and opposites ---- */
  { id: 33, ja: '大きい', reading: 'おおきい', romaji: 'ookii', en: 'big', pos: 'adjective',
    quest: { type: 'inspect', obj: 'tree', loc: 'park', ask: [{ t: 'This tree is really ' }, { w: 33 }, { t: '.' }] } },
  { id: 34, ja: '小さい', reading: 'ちいさい', romaji: 'chiisai', en: 'small', pos: 'adjective',
    quest: { type: 'inspect', obj: 'flower', loc: 'park', ask: [{ t: 'A ' }, { w: 34 }, { t: ' flower, easy to miss.' }] } },
  { id: 35, ja: '寒い', reading: 'さむい', romaji: 'samui', en: 'cold', pos: 'adjective',
    quest: { type: 'inspect', obj: 'window', loc: 'bedroom', ask: [{ t: 'Looks ' }, { w: 35 }, { t: ' out there today.' }] } },
  { id: 36, ja: '新しい', reading: 'あたらしい', romaji: 'atarashii', en: 'new', pos: 'adjective',
    quest: { type: 'inspect', obj: 'dumbbell', loc: 'gym', ask: [{ t: 'The gym got ' }, { w: 36 }, { t: ' equipment!' }] } },
  { id: 37, ja: '古い', reading: 'ふるい', romaji: 'furui', en: 'old', pos: 'adjective',
    quest: { type: 'inspect', obj: 'clock', loc: 'house', ask: [{ t: 'That ' }, { w: 37 }, { t: ' clock was grandpa’s.' }] } },
  { id: 38, ja: '高い', reading: 'たかい', romaji: 'takai', en: 'expensive', pos: 'adjective',
    quest: { type: 'talk', npc: 'shopkeeper', ask: [{ t: 'Whoa, that’s ' }, { w: 38 }, { t: '!' }] } },
  { id: 39, ja: '安い', reading: 'やすい', romaji: 'yasui', en: 'cheap', pos: 'adjective',
    quest: { type: 'buy', item: 'apple', ask: [{ t: 'These are so ' }, { w: 39 }, { t: ' today!' }] } },
  { id: 40, ja: '会う', reading: 'あう', romaji: 'au', en: 'meet', pos: 'verb',
    quest: { type: 'talk', npc: 'oldman', ask: [{ t: 'Nice to ' }, { w: 40 }, { t: ' you, sir.' }] } },

  /* ---- Day 6: more people & places ---- */
  { id: 41, ja: 'おじいさん', reading: 'おじいさん', romaji: 'ojiisan', en: 'old man', pos: 'noun',
    quest: { type: 'talk', npc: 'oldman', ask: [{ t: 'The ' }, { w: 41 }, { t: ' feeds the pigeons daily.' }] } },
  { id: 42, ja: '同僚', reading: 'どうりょう', romaji: 'douryou', en: 'coworker', pos: 'noun',
    quest: { type: 'talk', npc: 'coworker', ask: [{ t: 'Your ' }, { w: 42 }, { t: ' owes you a coffee.' }] } },
  { id: 43, ja: '公園', reading: 'こうえん', romaji: 'kouen', en: 'park', pos: 'noun',
    quest: { type: 'do', loc: 'park', verb: 'walk', amount: 500, desc: [{ t: 'take a stroll in the ' }, { w: 43 }] } },
  { id: 44, ja: '池', reading: 'いけ', romaji: 'ike', en: 'pond', pos: 'noun',
    quest: { type: 'inspect', obj: 'pond', loc: 'park', ask: [{ t: 'Koi ripple the ' }, { w: 44 }, { t: '.' }] } },
  { id: 45, ja: 'ドア', reading: 'ドア', romaji: 'doa', en: 'door', pos: 'noun',
    quest: { type: 'inspect', obj: 'door', loc: 'house', ask: [{ t: 'The front ' }, { w: 45 }, { t: ' sticks a little.' }] } },
  { id: 46, ja: '電話', reading: 'でんわ', romaji: 'denwa', en: 'phone', pos: 'noun',
    quest: { type: 'inspect', obj: 'phone', loc: 'office', ask: [{ t: 'The ' }, { w: 46 }, { t: ' will not stop ringing.' }] } },
  { id: 47, ja: '傘', reading: 'かさ', romaji: 'kasa', en: 'umbrella', pos: 'noun',
    quest: { type: 'inspect', obj: 'umbrella', loc: 'house', ask: [{ t: 'Take the ' }, { w: 47 }, { t: ' — just in case.' }] } },
  { id: 48, ja: '鍵', reading: 'かぎ', romaji: 'kagi', en: 'key', pos: 'noun',
    quest: { type: 'inspect', obj: 'key', loc: 'bedroom', ask: [{ t: 'Don’t forget the ' }, { w: 48 }, { t: ' again.' }] } }
]

export const BANK_BY_ID: Record<number, BankWord> = Object.fromEntries(BANK.map(w => [w.id, w]))

export function wordById(id: number): BankWord | undefined {
  return BANK_BY_ID[id]
}
