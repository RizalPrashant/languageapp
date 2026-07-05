/* =====================================================================
   「さようなら」 — SAY GOODBYE · the whole game's content.

   One season = 8 speakers × 1 sentence × 8 keys, learned over days 1-8.
   Day 9: every sentence is fully English; do all 8 courtesies to pass.

   Chunk model:
     { t }              glue text — punctuation/particles, never translates
     { d, n, e }        a key chunk: day it flips, native display, English
   Sentences render in the TARGET language's word order all season; once
   all 8 keys are learned the natural English sentence is shown instead.

   Keys (quizzes): day k asks key k — { d, q, en, hint? }.
   Merge keys review bigger phrases and may not add a new render chunk.
   ===================================================================== */

export type SayLang = 'ja' | 'zh' | 'de' | 'es' | 'fr'

export const SAY_LANGS: Array<{ lang: SayLang; label: string; big: string }> = [
  { lang: 'ja', label: '日本語 Japanese', big: '日' },
  { lang: 'zh', label: '中文 Chinese', big: '中' },
  { lang: 'de', label: 'Deutsch German', big: 'De' },
  { lang: 'es', label: 'Español Spanish', big: 'Es' },
  { lang: 'fr', label: 'Français French', big: 'Fr' },
]

export interface SayChunk { t?: string; d?: number; n?: string; e?: string; s?: string }
export interface SayKey { d: number; q: string; en: string; hint?: string }
export interface SpeakerLang { chunks: SayChunk[]; keys: SayKey[]; post?: string }

export interface CastMember {
  id: string
  name: string
  role: string
  x: number; y: number
  questLabel: string
  sentenceEn: string
}

export const PREMISE_TITLE = '「さようなら」 — Say Goodbye'
export const PREMISE =
  'You\'re a tourist stranded on a foreign island. Your vacation\'s over, it\'s time to go home, ' +
  'but for some reason this town won\'t let you leave. Nobody will explain why, and you can\'t ' +
  'understand a word they\'re saying. The only way out is through: learn their language one step ' +
  'at a time, figure out what they want from you, and earn your way off the island.'
export const MISSION_DONE =
  'Oh. Okay. So they weren\'t tryin\' to trap you or nothin\', they just wanted you to act like a ' +
  'decent guy for once. Ate some breakfast, paid your damn tab, washed your hands, said thank you. ' +
  'That\'s the whole thing. Anyway you\'re good, you can go home now. Safe trip back, buddy.'

export const CAST: CastMember[] = [
  { id: 'grandma',    name: 'Grandma',     role: 'tea house',  x: 2,  y: 3,  questLabel: 'Eat breakfast',      sentenceEn: 'You sleep till noon and skip breakfast! Eat your rice, then go.' },
  { id: 'baker',      name: 'Baker',       role: 'bakery',     x: 2,  y: 7,  questLabel: 'Take the bread',     sentenceEn: 'Take a warm bread for the road, you always leave hungry.' },
  { id: 'shopkeeper', name: 'Shopkeeper',  role: 'shop',       x: 12, y: 5,  questLabel: 'Pay for the shoes',  sentenceEn: 'You never paid for those shoes! Money first!' },
  { id: 'catlady',    name: 'Cat Lady',    role: 'alley',      x: 11, y: 8,  questLabel: 'Find the cat',       sentenceEn: 'Have you seen my cat? Find my cat, and I\'ll bless your trip.' },
  { id: 'flowergirl', name: 'Flower Girl', role: 'shrine',     x: 6,  y: 2,  questLabel: 'Give a flower',      sentenceEn: 'Put a flower at the shrine. The town likes flowers.' },
  { id: 'oldman',     name: 'Old Man',     role: 'fountain',   x: 5,  y: 5,  questLabel: 'Wash your hands',    sentenceEn: 'Wash your hands! Nobody leaves this town filthy.' },
  { id: 'monk',       name: 'Monk',        role: 'bell tower', x: 12, y: 3,  questLabel: 'Ring the bell',      sentenceEn: 'Ring the bell once. Then the day can end.' },
  { id: 'kid',        name: 'Little Kid',  role: 'town gate',  x: 8,  y: 9,  questLabel: 'Say goodbye',        sentenceEn: 'Bye-bye! …You never say bye-bye. That\'s why you\'re stuck, silly.' },
]

/* ------------------------------------------------------------------ */
export const SENTENCES: Record<SayLang, Record<string, SpeakerLang>> = {

ja: {
  grandma: {
    chunks: [
      { d: 1, n: 'anata wa', s: 'あなたは', e: 'you'  }, { d: 2, n: 'hiru made', s: '昼まで', e: 'till noon'  },
      { d: 3, n: 'nete', s: '寝て', e: 'sleep'  }, { t: '、' }, { d: 4, n: 'asagohan o', s: '朝ごはんを', e: 'breakfast'  },
      { d: 5, n: 'nuku', s: '抜く', e: 'skip'  }, { t: '！' }, { d: 6, n: 'gohan o', s: 'ごはんを', e: 'rice'  },
      { d: 7, n: 'tabete', s: '食べて', e: 'eat'  }, { t: '、' }, { d: 8, n: 'sorekara ikinasai', s: 'それから行きなさい', e: 'then go'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'anata wa', hint: 'あなたは', en: 'you' },
      { d: 2, q: 'hiru made', hint: '昼まで', en: 'till noon' },
      { d: 3, q: 'nete', hint: '寝て', en: 'sleep' },
      { d: 4, q: 'asagohan', hint: '朝ごはん', en: 'breakfast' },
      { d: 5, q: 'nuku', hint: '抜く', en: 'skip' },
      { d: 6, q: 'gohan', hint: 'ごはん', en: 'rice' },
      { d: 7, q: 'tabete', hint: '食べて', en: 'eat' },
      { d: 8, q: 'sorekara ikinasai', hint: 'それから行きなさい', en: 'then go' },
    ],
  },
  baker: {
    chunks: [
      { d: 1, n: 'michi no tame ni', s: '道のために', e: 'for the road'  }, { t: '、' },
      { d: 2, n: 'atatakai', s: '温かい', e: 'warm'  }, { d: 3, n: 'pan o', s: 'パンを', e: 'bread'  },
      { d: 4, n: 'totte', s: '取って', e: 'take'  }, { t: '。' }, { d: 5, n: 'itsumo', s: 'いつも', e: 'always'  },
      { d: 6, n: 'onaka o sukasete', s: 'お腹を空かせて', e: 'hungry'  }, { d: 7, n: 'dete iku', s: '出て行く', e: 'leave'  }, { t: 'ね。' },
    ],
    keys: [
      { d: 1, q: 'michi no tame ni', hint: '道のために', en: 'for the road' },
      { d: 2, q: 'atatakai', hint: '温かい', en: 'warm' },
      { d: 3, q: 'pan', hint: 'パン', en: 'bread' },
      { d: 4, q: 'totte', hint: '取って', en: 'take' },
      { d: 5, q: 'itsumo', hint: 'いつも', en: 'always' },
      { d: 6, q: 'onaka o sukasete', hint: 'お腹を空かせて', en: 'hungry' },
      { d: 7, q: 'dete iku', hint: '出て行く', en: 'leave' },
      { d: 8, q: 'atatakai pan', hint: '温かいパン', en: 'a warm bread' },
    ],
  },
  shopkeeper: {
    chunks: [
      { d: 1, n: 'sono', s: 'その', e: 'those'  }, { d: 2, n: 'kutsu no', s: '靴の', e: 'shoes'  },
      { d: 3, n: 'okane o', s: 'お金を', e: 'money'  }, { d: 4, n: 'haratte inai', s: '払っていない', e: 'never paid'  }, { t: '！' },
      { d: 5, n: 'saki ni', s: '先に', e: 'first'  }, { d: 3, n: 'okane', s: 'お金', e: 'money'  }, { t: '！' },
    ],
    keys: [
      { d: 1, q: 'sono', hint: 'その', en: 'those' },
      { d: 2, q: 'kutsu', hint: '靴', en: 'shoes' },
      { d: 3, q: 'okane', hint: 'お金', en: 'money' },
      { d: 4, q: 'haratte inai', hint: '払っていない', en: 'never paid' },
      { d: 5, q: 'saki ni', hint: '先に', en: 'first' },
      { d: 6, q: 'saki ni okane', hint: '先にお金', en: 'money first' },
      { d: 7, q: 'sono kutsu', hint: 'その靴', en: 'those shoes' },
      { d: 8, q: 'okane o harau', hint: 'お金を払う', en: 'pay money' },
    ],
  },
  catlady: {
    chunks: [
      { d: 1, n: 'watashi no', s: '私の', e: 'my'  }, { d: 2, n: 'neko o', s: '猫を', e: 'cat'  },
      { d: 3, n: 'mita？', s: '見た？', e: 'have you seen?'  }, { d: 2, n: 'neko o', s: '猫を', e: 'cat'  },
      { d: 4, n: 'mitsuketara', s: '見つけたら', e: 'if you find'  }, { t: '、' },
      { d: 5, n: 'tabi o', s: '旅を', e: 'trip'  }, { d: 6, n: 'shukufuku suru yo', s: '祝福するよ', e: 'I\'ll bless'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'watashi no', hint: '私の', en: 'my' },
      { d: 2, q: 'neko', hint: '猫', en: 'cat' },
      { d: 3, q: 'mita?', hint: '見た？', en: 'have you seen?' },
      { d: 4, q: 'mitsuketara', hint: '見つけたら', en: 'if you find' },
      { d: 5, q: 'tabi', hint: '旅', en: 'trip' },
      { d: 6, q: 'shukufuku suru', hint: '祝福する', en: 'bless' },
      { d: 7, q: 'watashi no neko', hint: '私の猫', en: 'my cat' },
      { d: 8, q: 'tabi o shukufuku suru', hint: '旅を祝福する', en: 'bless your trip' },
    ],
  },
  flowergirl: {
    chunks: [
      { d: 1, n: 'jinja ni', s: '神社に', e: 'at the shrine'  }, { d: 2, n: 'hana o', s: '花を', e: 'a flower'  },
      { d: 3, n: 'oite', s: '置いて', e: 'put'  }, { t: '。' }, { d: 4, n: 'kono', s: 'この', e: 'this'  },
      { d: 5, n: 'machi wa', s: '町は', e: 'town'  }, { d: 2, n: 'hana ga', s: '花が', e: 'flowers'  },
      { d: 6, n: 'suki', s: '好き', e: 'likes'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'jinja ni', hint: '神社に', en: 'at the shrine' },
      { d: 2, q: 'hana', hint: '花', en: 'flower' },
      { d: 3, q: 'oite', hint: '置いて', en: 'put' },
      { d: 4, q: 'kono', hint: 'この', en: 'this' },
      { d: 5, q: 'machi', hint: '町', en: 'town' },
      { d: 6, q: 'suki', hint: '好き', en: 'likes' },
      { d: 7, q: 'kono machi', hint: 'この町', en: 'this town' },
      { d: 8, q: 'hana ga suki', hint: '花が好き', en: 'likes flowers' },
    ],
  },
  oldman: {
    chunks: [
      { d: 1, n: 'te o', s: '手を', e: 'your hands'  }, { d: 2, n: 'aratte', s: '洗って', e: 'wash'  }, { t: '！' },
      { d: 3, n: 'dare mo', s: '誰も', e: 'nobody'  }, { d: 4, n: 'kitanai mama', s: '汚いまま', e: 'still filthy'  },
      { d: 5, n: 'kono machi o', s: 'この町を', e: 'this town'  }, { d: 6, n: 'derarenai', s: '出られない', e: 'can leave'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'te', hint: '手', en: 'hand' },
      { d: 2, q: 'aratte', hint: '洗って', en: 'wash' },
      { d: 3, q: 'dare mo', hint: '誰も', en: 'nobody' },
      { d: 4, q: 'kitanai mama', hint: '汚いまま', en: 'still filthy' },
      { d: 5, q: 'kono machi o', hint: 'この町を', en: 'this town' },
      { d: 6, q: 'derarenai', hint: '出られない', en: 'can\'t leave' },
      { d: 7, q: 'te o aratte', hint: '手を洗って', en: 'wash your hands' },
      { d: 8, q: 'dare mo derarenai', hint: '誰も出られない', en: 'nobody leaves' },
    ],
  },
  monk: {
    chunks: [
      { d: 1, n: 'kane o', s: '鐘を', e: 'the bell'  }, { d: 2, n: 'ichido', s: '一度', e: 'once'  },
      { d: 3, n: 'narashite', s: '鳴らして', e: 'ring'  }, { t: '。' }, { d: 4, n: 'sou sureba', s: 'そうすれば', e: 'then'  },
      { d: 5, n: 'ichinichi ga', s: '一日が', e: 'the day'  }, { d: 6, n: 'owareru', s: '終われる', e: 'can end'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'kane', hint: '鐘', en: 'bell' },
      { d: 2, q: 'ichido', hint: '一度', en: 'once' },
      { d: 3, q: 'narashite', hint: '鳴らして', en: 'ring' },
      { d: 4, q: 'sou sureba', hint: 'そうすれば', en: 'then' },
      { d: 5, q: 'ichinichi', hint: '一日', en: 'the day' },
      { d: 6, q: 'owareru', hint: '終われる', en: 'can end' },
      { d: 7, q: 'kane o narashite', hint: '鐘を鳴らして', en: 'ring the bell' },
      { d: 8, q: 'ichinichi ga owareru', hint: '一日が終われる', en: 'the day can end' },
    ],
  },
  kid: {
    chunks: [
      { d: 1, n: 'baibai', s: 'バイバイ', e: 'bye-bye'  }, { t: '！…' }, { d: 2, n: 'kimi wa', s: 'きみは', e: 'you'  },
      { d: 1, n: 'baibai o', s: 'バイバイを', e: 'bye-bye'  }, { d: 3, n: 'iwanai', s: '言わない', e: 'never say'  }, { t: '。' },
      { d: 4, n: 'dakara', s: 'だから', e: 'that\'s why'  }, { d: 5, n: 'derarenai n da yo', s: '出られないんだよ', e: 'you\'re stuck'  },
      { t: '、' }, { d: 6, n: 'obakasan', s: 'おばかさん', e: 'silly'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'baibai', hint: 'バイバイ', en: 'bye-bye' },
      { d: 2, q: 'kimi wa', hint: 'きみは', en: 'you' },
      { d: 3, q: 'iwanai', hint: '言わない', en: 'never say' },
      { d: 4, q: 'dakara', hint: 'だから', en: 'that\'s why' },
      { d: 5, q: 'derarenai', hint: '出られない', en: 'stuck' },
      { d: 6, q: 'obakasan', hint: 'おばかさん', en: 'silly' },
      { d: 7, q: 'baibai o iwanai', hint: 'バイバイを言わない', en: 'never say bye-bye' },
      { d: 8, q: 'sayounara', hint: 'さようなら', en: 'goodbye' },
    ],
    post: '…One more, just for you: さようなら (sayounara). The real goodbye. Try it at the gate.',
  },
},

zh: {
  grandma: {
    chunks: [
      { d: 1, n: 'nǐ', s: '你', e: 'you'  }, { d: 3, n: 'shuì', s: '睡', e: 'sleep'  },
      { d: 2, n: 'dào zhōngwǔ', s: '到中午', e: 'till noon'  }, { t: '，' },
      { d: 5, n: 'bù chī', s: '不吃', e: 'skip'  }, { d: 4, n: 'zǎofàn', s: '早饭', e: 'breakfast'  }, { t: '！' },
      { d: 7, n: 'chī', s: '吃', e: 'eat'  }, { d: 6, n: 'mǐfàn', s: '米饭', e: 'rice'  }, { t: '，' },
      { d: 8, n: 'ránhòu zǒu', s: '然后走', e: 'then go'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'nǐ', hint: '你', en: 'you'  }, { d: 2, q: 'dào zhōngwǔ', hint: '到中午', en: 'till noon'  },
      { d: 3, q: 'shuì', hint: '睡', en: 'sleep'  }, { d: 4, q: 'zǎofàn', hint: '早饭', en: 'breakfast'  },
      { d: 5, q: 'bù chī', hint: '不吃', en: 'skip'  }, { d: 6, q: 'mǐfàn', hint: '米饭', en: 'rice'  },
      { d: 7, q: 'chī', hint: '吃', en: 'eat'  }, { d: 8, q: 'ránhòu zǒu', hint: '然后走', en: 'then go'  },
    ],
  },
  baker: {
    chunks: [
      { d: 4, n: 'dài', s: '带', e: 'take'  }, { d: 2, n: 'rè', s: '热', e: 'warm'  },
      { d: 3, n: 'miànbāo', s: '面包', e: 'bread'  }, { d: 1, n: 'shànglù', s: '上路', e: 'for the road'  },
      { t: '吧，' }, { d: 5, n: 'zǒngshì', s: '总是', e: 'always'  },
      { d: 6, n: 'èzhe dùzi', s: '饿着肚子', e: 'hungry'  }, { d: 7, n: 'zǒu', s: '走', e: 'leave'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'shànglù', hint: '上路', en: 'for the road'  }, { d: 2, q: 'rè', hint: '热', en: 'warm'  },
      { d: 3, q: 'miànbāo', hint: '面包', en: 'bread'  }, { d: 4, q: 'dài', hint: '带', en: 'take'  },
      { d: 5, q: 'zǒngshì', hint: '总是', en: 'always'  }, { d: 6, q: 'èzhe dùzi', hint: '饿着肚子', en: 'hungry'  },
      { d: 7, q: 'zǒu', hint: '走', en: 'leave'  }, { d: 8, q: 'rè miànbāo', hint: '热面包', en: 'a warm bread'  },
    ],
  },
  shopkeeper: {
    chunks: [
      { d: 1, n: 'nà shuāng', s: '那双', e: 'those'  }, { d: 2, n: 'xié', s: '鞋', e: 'shoes'  }, { t: '的' },
      { d: 3, n: 'qián', s: '钱', e: 'money'  }, { d: 4, n: 'hái méi fù', s: '还没付', e: 'never paid'  }, { t: '！' },
      { d: 5, n: 'xiān', s: '先', e: 'first'  }, { t: '给' }, { d: 3, n: 'qián', s: '钱', e: 'money'  }, { t: '！' },
    ],
    keys: [
      { d: 1, q: 'nà shuāng', hint: '那双', en: 'those'  }, { d: 2, q: 'xié', hint: '鞋', en: 'shoes'  },
      { d: 3, q: 'qián', hint: '钱', en: 'money'  }, { d: 4, q: 'hái méi fù', hint: '还没付', en: 'never paid'  },
      { d: 5, q: 'xiān', hint: '先', en: 'first'  }, { d: 6, q: 'xiān gěi qián', hint: '先给钱', en: 'money first'  },
      { d: 7, q: 'nà shuāng xié', hint: '那双鞋', en: 'those shoes'  }, { d: 8, q: 'fù qián', hint: '付钱', en: 'pay money'  },
    ],
  },
  catlady: {
    chunks: [
      { d: 3, n: 'jiànguo', s: '见过', e: 'have you seen'  }, { d: 1, n: 'wǒ de', s: '我的', e: 'my'  },
      { d: 2, n: 'māo', s: '猫', e: 'cat'  }, { t: '吗？' }, { d: 4, n: 'zhǎodào', s: '找到', e: 'if you find'  },
      { d: 1, n: 'wǒ de', s: '我的', e: 'my'  }, { d: 2, n: 'māo', s: '猫', e: 'cat'  }, { t: '，我就' },
      { d: 6, n: 'zhùfú', s: '祝福', e: 'bless'  }, { t: '你的' }, { d: 5, n: 'lǚtú', s: '旅途', e: 'trip'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'wǒ de', hint: '我的', en: 'my'  }, { d: 2, q: 'māo', hint: '猫', en: 'cat'  },
      { d: 3, q: 'jiànguo', hint: '见过', en: 'have you seen?'  }, { d: 4, q: 'zhǎodào', hint: '找到', en: 'if you find'  },
      { d: 5, q: 'lǚtú', hint: '旅途', en: 'trip'  }, { d: 6, q: 'zhùfú', hint: '祝福', en: 'bless'  },
      { d: 7, q: 'wǒ de māo', hint: '我的猫', en: 'my cat'  }, { d: 8, q: 'zhùfú nǐ de lǚtú', hint: '祝福你的旅途', en: 'bless your trip'  },
    ],
  },
  flowergirl: {
    chunks: [
      { d: 1, n: 'zài shénshè', s: '在神社', e: 'at the shrine'  }, { d: 3, n: 'fàng', s: '放', e: 'put'  },
      { t: '一朵' }, { d: 2, n: 'huā', s: '花', e: 'flower'  }, { t: '。' },
      { d: 4, n: 'zhège', s: '这个', e: 'this'  }, { d: 5, n: 'zhènzi', s: '镇子', e: 'town'  },
      { d: 6, n: 'xǐhuan', s: '喜欢', e: 'likes'  }, { d: 2, n: 'huā', s: '花', e: 'flowers'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'zài shénshè', hint: '在神社', en: 'at the shrine'  }, { d: 2, q: 'huā', hint: '花', en: 'flower'  },
      { d: 3, q: 'fàng', hint: '放', en: 'put'  }, { d: 4, q: 'zhège', hint: '这个', en: 'this'  },
      { d: 5, q: 'zhènzi', hint: '镇子', en: 'town'  }, { d: 6, q: 'xǐhuan', hint: '喜欢', en: 'likes'  },
      { d: 7, q: 'zhège zhènzi', hint: '这个镇子', en: 'this town'  }, { d: 8, q: 'xǐhuan huā', hint: '喜欢花', en: 'likes flowers'  },
    ],
  },
  oldman: {
    chunks: [
      { d: 2, n: 'xǐ', s: '洗', e: 'wash'  }, { d: 1, n: 'shǒu', s: '手', e: 'your hands'  }, { t: '！' },
      { d: 3, n: 'shéi dōu', s: '谁都', e: 'nobody'  }, { d: 4, n: 'zàngzhe', s: '脏着', e: 'still filthy'  },
      { t: '就' }, { d: 6, n: 'bù néng líkāi', s: '不能离开', e: 'can leave'  },
      { d: 5, n: 'zhège zhènzi', s: '这个镇子', e: 'this town'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'shǒu', hint: '手', en: 'hand'  }, { d: 2, q: 'xǐ', hint: '洗', en: 'wash'  },
      { d: 3, q: 'shéi dōu', hint: '谁都', en: 'nobody'  }, { d: 4, q: 'zàngzhe', hint: '脏着', en: 'still filthy'  },
      { d: 5, q: 'zhège zhènzi', hint: '这个镇子', en: 'this town'  }, { d: 6, q: 'bù néng líkāi', hint: '不能离开', en: 'can\'t leave'  },
      { d: 7, q: 'xǐ shǒu', hint: '洗手', en: 'wash your hands'  }, { d: 8, q: 'shéi dōu bù néng líkāi', hint: '谁都不能离开', en: 'nobody leaves'  },
    ],
  },
  monk: {
    chunks: [
      { d: 3, n: 'qiāo', s: '敲', e: 'ring'  }, { d: 2, n: 'yí cì', s: '一次', e: 'once'  },
      { d: 1, n: 'zhōng', s: '钟', e: 'the bell'  }, { t: '。' }, { d: 4, n: 'ránhòu', s: '然后', e: 'then'  },
      { d: 5, n: 'zhè yì tiān', s: '这一天', e: 'the day'  }, { d: 6, n: 'cái néng jiéshù', s: '才能结束', e: 'can end'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'zhōng', hint: '钟', en: 'bell'  }, { d: 2, q: 'yí cì', hint: '一次', en: 'once'  },
      { d: 3, q: 'qiāo', hint: '敲', en: 'ring'  }, { d: 4, q: 'ránhòu', hint: '然后', en: 'then'  },
      { d: 5, q: 'zhè yì tiān', hint: '这一天', en: 'the day'  }, { d: 6, q: 'cái néng jiéshù', hint: '才能结束', en: 'can end'  },
      { d: 7, q: 'qiāo zhōng', hint: '敲钟', en: 'ring the bell'  }, { d: 8, q: '这一天才能结束', hint: '这一天才能结束', en: 'the day can end'  },
    ],
  },
  kid: {
    chunks: [
      { d: 1, n: 'bāibāi', s: '拜拜', e: 'bye-bye'  }, { t: '！…' }, { d: 2, n: 'nǐ', s: '你', e: 'you'  },
      { d: 3, n: 'cóng bù shuō', s: '从不说', e: 'never say'  }, { d: 1, n: 'bāibāi', s: '拜拜', e: 'bye-bye'  }, { t: '。' },
      { d: 4, n: 'suǒyǐ', s: '所以', e: 'that\'s why'  }, { d: 5, n: 'zǒu bù liǎo', s: '走不了', e: 'you\'re stuck'  },
      { t: '，' }, { d: 6, n: 'xiǎo shǎguā', s: '小傻瓜', e: 'silly'  }, { t: '。' },
    ],
    keys: [
      { d: 1, q: 'bāibāi', hint: '拜拜', en: 'bye-bye'  }, { d: 2, q: 'nǐ', hint: '你', en: 'you'  },
      { d: 3, q: 'cóng bù shuō', hint: '从不说', en: 'never say'  }, { d: 4, q: 'suǒyǐ', hint: '所以', en: 'that\'s why'  },
      { d: 5, q: 'zǒu bù liǎo', hint: '走不了', en: 'stuck'  }, { d: 6, q: 'xiǎo shǎguā', hint: '小傻瓜', en: 'silly'  },
      { d: 7, q: '从不说拜拜', hint: '从不说拜拜', en: 'never say bye-bye'  }, { d: 8, q: 'zàijiàn', hint: '再见', en: 'goodbye'  },
    ],
    post: '…One more, just for you: 再见 (zàijiàn). The real goodbye. Try it at the gate.',
  },
},

de: {
  grandma: {
    chunks: [
      { d: 1, n: 'Du', e: 'You' }, { d: 3, n: 'schläfst', e: 'sleep' },
      { d: 2, n: 'bis mittags', e: 'till noon' }, { t: ' und ' }, { d: 5, n: 'lässt', e: 'skip' },
      { d: 4, n: 'das Frühstück', e: 'breakfast' }, { d: 5, n: 'aus', e: '' }, { t: '! ' },
      { d: 7, n: 'Iss', e: 'Eat' }, { d: 6, n: 'deinen Reis', e: 'your rice' }, { t: ', ' },
      { d: 8, n: 'dann geh', e: 'then go' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'Du', en: 'you' }, { d: 2, q: 'bis mittags', en: 'till noon' },
      { d: 3, q: 'schläfst', en: 'sleep' }, { d: 4, q: 'das Frühstück', en: 'breakfast' },
      { d: 5, q: 'auslassen', en: 'skip' }, { d: 6, q: 'Reis', en: 'rice' },
      { d: 7, q: 'iss', en: 'eat' }, { d: 8, q: 'dann geh', en: 'then go' },
    ],
  },
  baker: {
    chunks: [
      { d: 4, n: 'Nimm', e: 'Take' }, { t: ' ein ' }, { d: 2, n: 'warmes', e: 'warm' },
      { d: 3, n: 'Brot', e: 'bread' }, { d: 1, n: 'für den Weg', e: 'for the road' }, { t: ', du ' },
      { d: 7, n: 'gehst', e: 'leave' }, { d: 5, n: 'immer', e: 'always' },
      { d: 6, n: 'hungrig', e: 'hungry' }, { d: 7, n: 'los', e: '' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'für den Weg', en: 'for the road' }, { d: 2, q: 'warm', en: 'warm' },
      { d: 3, q: 'Brot', en: 'bread' }, { d: 4, q: 'nimm', en: 'take' },
      { d: 5, q: 'immer', en: 'always' }, { d: 6, q: 'hungrig', en: 'hungry' },
      { d: 7, q: 'losgehen', en: 'leave' }, { d: 8, q: 'ein warmes Brot', en: 'a warm bread' },
    ],
  },
  shopkeeper: {
    chunks: [
      { t: 'Du hast ' }, { d: 1, n: 'diese', e: 'those' }, { d: 2, n: 'Schuhe', e: 'shoes' },
      { d: 4, n: 'nie bezahlt', e: 'never paid' }, { t: '! ' }, { d: 5, n: 'Erst', e: 'First' },
      { d: 3, n: 'das Geld', e: 'the money' }, { t: '!' },
    ],
    keys: [
      { d: 1, q: 'diese', en: 'those' }, { d: 2, q: 'Schuhe', en: 'shoes' },
      { d: 3, q: 'das Geld', en: 'money' }, { d: 4, q: 'nie bezahlt', en: 'never paid' },
      { d: 5, q: 'erst', en: 'first' }, { d: 6, q: 'erst das Geld', en: 'money first' },
      { d: 7, q: 'diese Schuhe', en: 'those shoes' }, { d: 8, q: 'Geld bezahlen', en: 'pay money' },
    ],
  },
  catlady: {
    chunks: [
      { d: 3, n: 'Hast du', e: 'Have you' }, { d: 1, n: 'meine', e: 'my' },
      { d: 2, n: 'Katze', e: 'cat' }, { d: 3, n: 'gesehen', e: 'seen' }, { t: '? ' },
      { d: 4, n: 'Find sie', e: 'Find her' }, { t: ', und ich ' }, { d: 6, n: 'segne', e: 'bless' },
      { t: ' deine ' }, { d: 5, n: 'Reise', e: 'trip' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'meine', en: 'my' }, { d: 2, q: 'die Katze', en: 'cat' },
      { d: 3, q: 'hast du gesehen?', en: 'have you seen?' }, { d: 4, q: 'find sie', en: 'if you find' },
      { d: 5, q: 'die Reise', en: 'trip' }, { d: 6, q: 'segnen', en: 'bless' },
      { d: 7, q: 'meine Katze', en: 'my cat' }, { d: 8, q: 'segne deine Reise', en: 'bless your trip' },
    ],
  },
  flowergirl: {
    chunks: [
      { d: 3, n: 'Leg', e: 'Put' }, { t: ' eine ' }, { d: 2, n: 'Blume', e: 'flower' },
      { d: 1, n: 'am Schrein', e: 'at the shrine' }, { d: 3, n: 'ab', e: '' }, { t: '. ' },
      { d: 4, n: 'Diese', e: 'This' }, { d: 5, n: 'Stadt', e: 'town' },
      { d: 6, n: 'mag', e: 'likes' }, { d: 2, n: 'Blumen', e: 'flowers' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'am Schrein', en: 'at the shrine' }, { d: 2, q: 'die Blume', en: 'flower' },
      { d: 3, q: 'ablegen', en: 'put' }, { d: 4, q: 'diese', en: 'this' },
      { d: 5, q: 'die Stadt', en: 'town' }, { d: 6, q: 'mag', en: 'likes' },
      { d: 7, q: 'diese Stadt', en: 'this town' }, { d: 8, q: 'mag Blumen', en: 'likes flowers' },
    ],
  },
  oldman: {
    chunks: [
      { d: 2, n: 'Wasch', e: 'Wash' }, { t: ' deine ' }, { d: 1, n: 'Hände', e: 'hands' }, { t: '! ' },
      { d: 3, n: 'Niemand', e: 'Nobody' }, { d: 6, n: 'verlässt', e: 'leaves' },
      { d: 5, n: 'diese Stadt', e: 'this town' }, { d: 4, n: 'dreckig', e: 'filthy' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'die Hand', en: 'hand' }, { d: 2, q: 'waschen', en: 'wash' },
      { d: 3, q: 'niemand', en: 'nobody' }, { d: 4, q: 'dreckig', en: 'still filthy' },
      { d: 5, q: 'diese Stadt', en: 'this town' }, { d: 6, q: 'verlässt', en: 'leaves' },
      { d: 7, q: 'wasch deine Hände', en: 'wash your hands' }, { d: 8, q: 'niemand verlässt', en: 'nobody leaves' },
    ],
  },
  monk: {
    chunks: [
      { d: 3, n: 'Läute', e: 'Ring' }, { t: ' die ' }, { d: 1, n: 'Glocke', e: 'bell' },
      { d: 2, n: 'einmal', e: 'once' }, { t: '. ' }, { d: 4, n: 'Dann', e: 'Then' },
      { d: 6, n: 'kann', e: 'can' }, { d: 5, n: 'der Tag', e: 'the day' },
      { d: 6, n: 'enden', e: 'end' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'die Glocke', en: 'bell' }, { d: 2, q: 'einmal', en: 'once' },
      { d: 3, q: 'läute', en: 'ring' }, { d: 4, q: 'dann', en: 'then' },
      { d: 5, q: 'der Tag', en: 'the day' }, { d: 6, q: 'kann enden', en: 'can end' },
      { d: 7, q: 'läute die Glocke', en: 'ring the bell' }, { d: 8, q: 'der Tag kann enden', en: 'the day can end' },
    ],
  },
  kid: {
    chunks: [
      { d: 1, n: 'Tschüss', e: 'Bye-bye' }, { t: '! …' }, { d: 2, n: 'Du', e: 'You' },
      { d: 3, n: 'sagst nie', e: 'never say' }, { d: 1, n: 'Tschüss', e: 'bye-bye' }, { t: '. ' },
      { d: 4, n: 'Deshalb', e: 'That\'s why' }, { d: 5, n: 'steckst du fest', e: 'you\'re stuck' },
      { t: ', ' }, { d: 6, n: 'Dummerchen', e: 'silly' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'Tschüss', en: 'bye-bye' }, { d: 2, q: 'du', en: 'you' },
      { d: 3, q: 'sagst nie', en: 'never say' }, { d: 4, q: 'deshalb', en: 'that\'s why' },
      { d: 5, q: 'feststecken', en: 'stuck' }, { d: 6, q: 'Dummerchen', en: 'silly' },
      { d: 7, q: 'sagst nie Tschüss', en: 'never say bye-bye' }, { d: 8, q: 'Auf Wiedersehen', en: 'goodbye' },
    ],
    post: '…One more, just for you: Auf Wiedersehen. The real goodbye. Try it at the gate.',
  },
},

es: {
  grandma: {
    chunks: [
      { d: 1, n: 'Tú', e: 'You' }, { d: 3, n: 'duermes', e: 'sleep' },
      { d: 2, n: 'hasta el mediodía', e: 'till noon' }, { t: ' y ' }, { d: 5, n: 'te saltas', e: 'skip' },
      { d: 4, n: 'el desayuno', e: 'breakfast' }, { t: '. ¡' }, { d: 7, n: 'Come', e: 'Eat' },
      { d: 6, n: 'tu arroz', e: 'your rice' }, { t: ', ' }, { d: 8, n: 'luego vete', e: 'then go' }, { t: '!' },
    ],
    keys: [
      { d: 1, q: 'tú', en: 'you' }, { d: 2, q: 'hasta el mediodía', en: 'till noon' },
      { d: 3, q: 'duermes', en: 'sleep' }, { d: 4, q: 'el desayuno', en: 'breakfast' },
      { d: 5, q: 'te saltas', en: 'skip' }, { d: 6, q: 'el arroz', en: 'rice' },
      { d: 7, q: 'come', en: 'eat' }, { d: 8, q: 'luego vete', en: 'then go' },
    ],
  },
  baker: {
    chunks: [
      { d: 4, n: 'Llévate', e: 'Take' }, { t: ' un ' }, { d: 3, n: 'pan', e: 'bread' },
      { d: 2, n: 'calentito', e: 'warm' }, { d: 1, n: 'para el camino', e: 'for the road' }, { t: ', ' },
      { d: 5, n: 'siempre', e: 'always' }, { d: 7, n: 'te vas', e: 'you leave' },
      { d: 6, n: 'con hambre', e: 'hungry' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'para el camino', en: 'for the road' }, { d: 2, q: 'calentito', en: 'warm' },
      { d: 3, q: 'el pan', en: 'bread' }, { d: 4, q: 'llévate', en: 'take' },
      { d: 5, q: 'siempre', en: 'always' }, { d: 6, q: 'con hambre', en: 'hungry' },
      { d: 7, q: 'te vas', en: 'leave' }, { d: 8, q: 'un pan calentito', en: 'a warm bread' },
    ],
  },
  shopkeeper: {
    chunks: [
      { t: '¡' }, { d: 4, n: 'Nunca pagaste', e: 'You never paid' }, { d: 1, n: 'esos', e: 'those' },
      { d: 2, n: 'zapatos', e: 'shoes' }, { t: '! ¡' }, { d: 5, n: 'Primero', e: 'First' },
      { d: 3, n: 'el dinero', e: 'the money' }, { t: '!' },
    ],
    keys: [
      { d: 1, q: 'esos', en: 'those' }, { d: 2, q: 'los zapatos', en: 'shoes' },
      { d: 3, q: 'el dinero', en: 'money' }, { d: 4, q: 'nunca pagaste', en: 'never paid' },
      { d: 5, q: 'primero', en: 'first' }, { d: 6, q: 'primero el dinero', en: 'money first' },
      { d: 7, q: 'esos zapatos', en: 'those shoes' }, { d: 8, q: 'pagar el dinero', en: 'pay money' },
    ],
  },
  catlady: {
    chunks: [
      { t: '¿' }, { d: 3, n: 'Has visto', e: 'Have you seen' }, { t: ' a ' },
      { d: 1, n: 'mi', e: 'my' }, { d: 2, n: 'gato', e: 'cat' }, { t: '? ' },
      { d: 4, n: 'Encuéntralo', e: 'Find him' }, { t: ' y ' }, { d: 6, n: 'bendeciré', e: 'I\'ll bless' },
      { t: ' tu ' }, { d: 5, n: 'viaje', e: 'trip' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'mi', en: 'my' }, { d: 2, q: 'el gato', en: 'cat' },
      { d: 3, q: '¿has visto?', en: 'have you seen?' }, { d: 4, q: 'encuéntralo', en: 'if you find' },
      { d: 5, q: 'el viaje', en: 'trip' }, { d: 6, q: 'bendecir', en: 'bless' },
      { d: 7, q: 'mi gato', en: 'my cat' }, { d: 8, q: 'bendeciré tu viaje', en: 'bless your trip' },
    ],
  },
  flowergirl: {
    chunks: [
      { d: 3, n: 'Pon', e: 'Put' }, { t: ' una ' }, { d: 2, n: 'flor', e: 'flower' },
      { d: 1, n: 'en el santuario', e: 'at the shrine' }, { t: '. A ' }, { d: 4, n: 'este', e: 'this' },
      { d: 5, n: 'pueblo', e: 'town' }, { d: 6, n: 'le gustan', e: 'likes' },
      { t: ' las ' }, { d: 2, n: 'flores', e: 'flowers' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'en el santuario', en: 'at the shrine' }, { d: 2, q: 'la flor', en: 'flower' },
      { d: 3, q: 'pon', en: 'put' }, { d: 4, q: 'este', en: 'this' },
      { d: 5, q: 'el pueblo', en: 'town' }, { d: 6, q: 'le gustan', en: 'likes' },
      { d: 7, q: 'este pueblo', en: 'this town' }, { d: 8, q: 'le gustan las flores', en: 'likes flowers' },
    ],
  },
  oldman: {
    chunks: [
      { t: '¡' }, { d: 2, n: 'Lávate', e: 'Wash' }, { t: ' las ' }, { d: 1, n: 'manos', e: 'hands' },
      { t: '! ' }, { d: 3, n: 'Nadie', e: 'Nobody' }, { d: 6, n: 'sale', e: 'leaves' },
      { d: 4, n: 'sucio', e: 'filthy' }, { t: ' de ' }, { d: 5, n: 'este pueblo', e: 'this town' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'la mano', en: 'hand' }, { d: 2, q: 'lávate', en: 'wash' },
      { d: 3, q: 'nadie', en: 'nobody' }, { d: 4, q: 'sucio', en: 'still filthy' },
      { d: 5, q: 'este pueblo', en: 'this town' }, { d: 6, q: 'sale', en: 'leaves' },
      { d: 7, q: 'lávate las manos', en: 'wash your hands' }, { d: 8, q: 'nadie sale', en: 'nobody leaves' },
    ],
  },
  monk: {
    chunks: [
      { d: 3, n: 'Toca', e: 'Ring' }, { t: ' la ' }, { d: 1, n: 'campana', e: 'bell' },
      { d: 2, n: 'una vez', e: 'once' }, { t: '. ' }, { d: 4, n: 'Entonces', e: 'Then' },
      { d: 5, n: 'el día', e: 'the day' }, { d: 6, n: 'puede terminar', e: 'can end' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'la campana', en: 'bell' }, { d: 2, q: 'una vez', en: 'once' },
      { d: 3, q: 'toca', en: 'ring' }, { d: 4, q: 'entonces', en: 'then' },
      { d: 5, q: 'el día', en: 'the day' }, { d: 6, q: 'puede terminar', en: 'can end' },
      { d: 7, q: 'toca la campana', en: 'ring the bell' }, { d: 8, q: 'el día puede terminar', en: 'the day can end' },
    ],
  },
  kid: {
    chunks: [
      { t: '¡' }, { d: 1, n: 'Chau chau', e: 'Bye-bye' }, { t: '! …' }, { d: 2, n: 'Tú', e: 'You' },
      { d: 3, n: 'nunca dices', e: 'never say' }, { d: 1, n: 'chau chau', e: 'bye-bye' }, { t: '. ' },
      { d: 4, n: 'Por eso', e: 'That\'s why' }, { d: 5, n: 'estás atrapado', e: 'you\'re stuck' },
      { t: ', ' }, { d: 6, n: 'tontito', e: 'silly' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'chau chau', en: 'bye-bye' }, { d: 2, q: 'tú', en: 'you' },
      { d: 3, q: 'nunca dices', en: 'never say' }, { d: 4, q: 'por eso', en: 'that\'s why' },
      { d: 5, q: 'atrapado', en: 'stuck' }, { d: 6, q: 'tontito', en: 'silly' },
      { d: 7, q: 'nunca dices chau', en: 'never say bye-bye' }, { d: 8, q: 'adiós', en: 'goodbye' },
    ],
    post: '…One more, just for you: adiós. The real goodbye. Try it at the gate.',
  },
},

fr: {
  grandma: {
    chunks: [
      { d: 1, n: 'Tu', e: 'You' }, { d: 3, n: 'dors', e: 'sleep' },
      { d: 2, n: 'jusqu\'à midi', e: 'till noon' }, { t: ' et tu ' }, { d: 5, n: 'sautes', e: 'skip' },
      { d: 4, n: 'le petit-déjeuner', e: 'breakfast' }, { t: ' ! ' }, { d: 7, n: 'Mange', e: 'Eat' },
      { d: 6, n: 'ton riz', e: 'your rice' }, { t: ', ' }, { d: 8, n: 'puis va-t\'en', e: 'then go' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'tu', en: 'you' }, { d: 2, q: 'jusqu\'à midi', en: 'till noon' },
      { d: 3, q: 'dors', en: 'sleep' }, { d: 4, q: 'le petit-déjeuner', en: 'breakfast' },
      { d: 5, q: 'sautes', en: 'skip' }, { d: 6, q: 'le riz', en: 'rice' },
      { d: 7, q: 'mange', en: 'eat' }, { d: 8, q: 'puis va-t\'en', en: 'then go' },
    ],
  },
  baker: {
    chunks: [
      { d: 4, n: 'Prends', e: 'Take' }, { t: ' un ' }, { d: 3, n: 'pain', e: 'bread' },
      { d: 2, n: 'chaud', e: 'warm' }, { d: 1, n: 'pour la route', e: 'for the road' }, { t: ', tu ' },
      { d: 7, n: 'pars', e: 'leave' }, { d: 5, n: 'toujours', e: 'always' },
      { d: 6, n: 'affamé', e: 'hungry' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'pour la route', en: 'for the road' }, { d: 2, q: 'chaud', en: 'warm' },
      { d: 3, q: 'le pain', en: 'bread' }, { d: 4, q: 'prends', en: 'take' },
      { d: 5, q: 'toujours', en: 'always' }, { d: 6, q: 'affamé', en: 'hungry' },
      { d: 7, q: 'pars', en: 'leave' }, { d: 8, q: 'un pain chaud', en: 'a warm bread' },
    ],
  },
  shopkeeper: {
    chunks: [
      { t: 'Tu ' }, { d: 4, n: 'n\'as jamais payé', e: 'never paid' }, { d: 1, n: 'ces', e: 'those' },
      { d: 2, n: 'chaussures', e: 'shoes' }, { t: ' ! ' }, { d: 3, n: 'L\'argent', e: 'The money' },
      { d: 5, n: 'd\'abord', e: 'first' }, { t: ' !' },
    ],
    keys: [
      { d: 1, q: 'ces', en: 'those' }, { d: 2, q: 'les chaussures', en: 'shoes' },
      { d: 3, q: 'l\'argent', en: 'money' }, { d: 4, q: 'n\'as jamais payé', en: 'never paid' },
      { d: 5, q: 'd\'abord', en: 'first' }, { d: 6, q: 'l\'argent d\'abord', en: 'money first' },
      { d: 7, q: 'ces chaussures', en: 'those shoes' }, { d: 8, q: 'payer l\'argent', en: 'pay money' },
    ],
  },
  catlady: {
    chunks: [
      { d: 3, n: 'Tu as vu', e: 'Have you seen' }, { d: 1, n: 'mon', e: 'my' },
      { d: 2, n: 'chat', e: 'cat' }, { t: ' ? ' }, { d: 4, n: 'Trouve-le', e: 'Find him' },
      { t: ', et je ' }, { d: 6, n: 'bénirai', e: 'will bless' }, { t: ' ton ' },
      { d: 5, n: 'voyage', e: 'trip' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'mon', en: 'my' }, { d: 2, q: 'le chat', en: 'cat' },
      { d: 3, q: 'tu as vu ?', en: 'have you seen?' }, { d: 4, q: 'trouve-le', en: 'if you find' },
      { d: 5, q: 'le voyage', en: 'trip' }, { d: 6, q: 'bénir', en: 'bless' },
      { d: 7, q: 'mon chat', en: 'my cat' }, { d: 8, q: 'bénirai ton voyage', en: 'bless your trip' },
    ],
  },
  flowergirl: {
    chunks: [
      { d: 3, n: 'Pose', e: 'Put' }, { t: ' une ' }, { d: 2, n: 'fleur', e: 'flower' },
      { d: 1, n: 'au sanctuaire', e: 'at the shrine' }, { t: '. ' }, { d: 4, n: 'Cette', e: 'This' },
      { d: 5, n: 'ville', e: 'town' }, { d: 6, n: 'aime', e: 'likes' },
      { t: ' les ' }, { d: 2, n: 'fleurs', e: 'flowers' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'au sanctuaire', en: 'at the shrine' }, { d: 2, q: 'la fleur', en: 'flower' },
      { d: 3, q: 'pose', en: 'put' }, { d: 4, q: 'cette', en: 'this' },
      { d: 5, q: 'la ville', en: 'town' }, { d: 6, q: 'aime', en: 'likes' },
      { d: 7, q: 'cette ville', en: 'this town' }, { d: 8, q: 'aime les fleurs', en: 'likes flowers' },
    ],
  },
  oldman: {
    chunks: [
      { d: 2, n: 'Lave-toi', e: 'Wash' }, { t: ' les ' }, { d: 1, n: 'mains', e: 'hands' },
      { t: ' ! ' }, { d: 3, n: 'Personne', e: 'Nobody' }, { d: 6, n: 'ne quitte', e: 'leaves' },
      { d: 5, n: 'cette ville', e: 'this town' }, { d: 4, n: 'tout sale', e: 'filthy' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'la main', en: 'hand' }, { d: 2, q: 'lave-toi', en: 'wash' },
      { d: 3, q: 'personne', en: 'nobody' }, { d: 4, q: 'tout sale', en: 'still filthy' },
      { d: 5, q: 'cette ville', en: 'this town' }, { d: 6, q: 'ne quitte', en: 'leaves' },
      { d: 7, q: 'lave-toi les mains', en: 'wash your hands' }, { d: 8, q: 'personne ne quitte', en: 'nobody leaves' },
    ],
  },
  monk: {
    chunks: [
      { d: 3, n: 'Sonne', e: 'Ring' }, { t: ' la ' }, { d: 1, n: 'cloche', e: 'bell' },
      { d: 2, n: 'une fois', e: 'once' }, { t: '. ' }, { d: 4, n: 'Alors', e: 'Then' },
      { d: 5, n: 'la journée', e: 'the day' }, { d: 6, n: 'peut finir', e: 'can end' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'la cloche', en: 'bell' }, { d: 2, q: 'une fois', en: 'once' },
      { d: 3, q: 'sonne', en: 'ring' }, { d: 4, q: 'alors', en: 'then' },
      { d: 5, q: 'la journée', en: 'the day' }, { d: 6, q: 'peut finir', en: 'can end' },
      { d: 7, q: 'sonne la cloche', en: 'ring the bell' }, { d: 8, q: 'la journée peut finir', en: 'the day can end' },
    ],
  },
  kid: {
    chunks: [
      { d: 1, n: 'Salut salut', e: 'Bye-bye' }, { t: ' ! …' }, { d: 2, n: 'Tu', e: 'You' },
      { d: 3, n: 'ne dis jamais', e: 'never say' }, { d: 1, n: 'salut', e: 'bye-bye' }, { t: '. ' },
      { d: 4, n: 'C\'est pour ça', e: 'That\'s why' }, { d: 5, n: 'tu es coincé', e: 'you\'re stuck' },
      { t: ', ' }, { d: 6, n: 'petit bêta', e: 'silly' }, { t: '.' },
    ],
    keys: [
      { d: 1, q: 'salut salut', en: 'bye-bye' }, { d: 2, q: 'tu', en: 'you' },
      { d: 3, q: 'ne dis jamais', en: 'never say' }, { d: 4, q: 'c\'est pour ça', en: 'that\'s why' },
      { d: 5, q: 'coincé', en: 'stuck' }, { d: 6, q: 'petit bêta', en: 'silly' },
      { d: 7, q: 'ne dis jamais salut', en: 'never say bye-bye' }, { d: 8, q: 'au revoir', en: 'goodbye' },
    ],
    post: '…One more, just for you: au revoir. The real goodbye. Try it at the gate.',
  },
},
}
