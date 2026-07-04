import type { Companion, Day, Lang, ThemeName } from '../types'
import { SPRITES, THEMES } from '../data/sprites'
import { todayStr } from './storage'

/* One small text call per day: Haiku designs the lesson (words, story,
   hints, sprite mapping). All pixel art is local — no image generation. */
export async function generateDay(
  lang: Lang,
  apiKey: string,
  knownWords: string[],
  visitors: Companion[]
): Promise<Day> {
  const langName = lang === 'ja' ? 'Japanese (JLPT N5 level)' : 'Mandarin Chinese (HSK 1 level)'
  const readingName = lang === 'ja' ? 'hiragana reading' : 'pinyin with tone marks'
  const known = knownWords.slice(-120)
  const spriteList = Object.keys(SPRITES).join(', ')

  const sys = `You are a playful expert language teacher designing one day of a pixel-art vocabulary game.
The player explores a single cozy room and inspects objects; each object teaches one target word.

Return ONLY raw JSON (no markdown fences, no commentary) with EXACTLY this shape:
{
 "title": "short evocative title, native script + english, e.g. 雨の日の部屋 — The Rainy Day Room",
 "theme": "one of: tatami, wood, night, garden, stone",
 "story": "an English story of 4-6 sentences that naturally weaves in ALL 8 target words written in native script, each wrapped in curly braces like {猫}. The story must describe ONE room where all 8 objects plausibly coexist.",
 "words": [ exactly 8 items:
   {
     "word": "the word in native script",
     "reading": "${readingName}",
     "romaji": "romanization",
     "meaning": "concise English meaning, 1-3 words",
     "type": "noun|verb|adjective",
     "sprite": "one of: ${spriteList} — pick the best visual match; all 8 must be DIFFERENT sprites",
     "sentence": "one English sentence about the room scene with the target word embedded in native script wrapped in curly braces, e.g. 'A {猫} sleeps by the window.'",
     "hint": "a playful hint that nudges toward the meaning without stating it",
     "mnemonic": "a short vivid mnemonic linking the word's SOUND to its meaning",
     "distractors": ["3 plausible but clearly wrong English meanings"]
   }
 ]
}
Constraints:
- Vocabulary must be genuinely common ${langName} words a beginner should learn early.
- Mix of types: at least 5 nouns (so they map to objects), 2-3 verbs/adjectives (map them to a related object, e.g. "to sleep"->bed, "hot"->stove, "to drink"->teapot or cup).
- Do NOT use any of these already-learned words: ${known.join(', ') || '(none yet)'}
- distractors must not equal the meaning; keep every English string short.
- The story should be charming and slightly whimsical — it is the player's treasure map.`

  const compBrief = visitors.length
    ? `\n\nReturning companions the player already knows and loves (do NOT count them among the 8 words, do NOT re-teach their words, but DO weave one warm sentence about each returning into the story, keeping their word in curly braces): ` +
      visitors.map(v => `${v.name} the ${v.meaning} ({${v.word}}), met ${v.timesMet || 1} time(s) before`).join('; ') + '.'
    : ''

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5',
      max_tokens: 4000,
      system: sys,
      messages: [{
        role: 'user',
        content: `Design today's ${langName} quest. Date seed: ${todayStr()}-${Math.floor(Math.random() * 9999)}${compBrief}`
      }]
    })
  })

  if (!resp.ok) {
    const errBody = await resp.text()
    throw new Error(`API ${resp.status}: ${errBody.slice(0, 200)}`)
  }

  const data = await resp.json() as { content?: Array<{ type: string; text: string }> }
  const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n')
  const cleaned = text.replace(/```json|```/g, '').trim()
  const day = JSON.parse(cleaned.slice(cleaned.indexOf('{'), cleaned.lastIndexOf('}') + 1)) as Day
  validateDay(day)
  return day
}

function validateDay(d: Day): void {
  if (!d || !Array.isArray(d.words) || d.words.length !== 8) throw new Error('bad word count')
  if (!THEMES[d.theme as ThemeName]) d.theme = 'tatami'
  d.words.forEach(w => {
    if (!w.word || !w.meaning) throw new Error('bad word entry')
    w.reading = w.reading || ''
    w.romaji = w.romaji || ''
    w.hint = w.hint || 'Trust the story!'
    w.mnemonic = w.mnemonic || ''
    w.sentence = w.sentence || ('{' + w.word + '}')
    if (!Array.isArray(w.distractors)) w.distractors = ['thing', 'place', 'feeling']
    w.distractors = w.distractors
      .filter(x => x && x.toLowerCase() !== w.meaning.toLowerCase())
      .slice(0, 3)
    const fillers = ['object', 'action', 'idea']
    while (w.distractors.length < 3) w.distractors.push(fillers[w.distractors.length])
  })
}
