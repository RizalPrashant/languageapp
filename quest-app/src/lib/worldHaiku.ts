import type { Seg } from '../types'
import { NPCS } from '../data/world'
import { wordById } from './bank'
import { getApiKey } from './storage'

/* Daily flavor — the only runtime LLM use left, and it's optional garnish:
   a one-line day intro + a couple of fresh NPC lines about today's quests.
   ~0.5¢ per day. The game is fully playable without it. */
export interface DayFlavor {
  intro: Seg[]
  npcLines: Record<string, Seg[][]>
}

function normalizeSegs(raw: unknown): Seg[] | null {
  if (!Array.isArray(raw) || !raw.length) return null
  const out: Seg[] = []
  for (const s of raw) {
    if (s && typeof s === 'object' && 't' in s && typeof (s as { t: unknown }).t === 'string') {
      const t = (s as { t: string }).t
      if (t !== '') out.push({ t })
    } else if (s && typeof s === 'object' && 'w' in s && typeof (s as { w: unknown }).w === 'number') {
      if (!wordById((s as { w: number }).w)) return null
      out.push({ w: (s as { w: number }).w })
    } else return null
  }
  for (let i = 0; i < out.length; i++) {
    if (!('w' in out[i])) continue
    const prev = out[i - 1]
    if (prev && 't' in prev && prev.t && !/[\s"'(‘“—-]$/.test(prev.t)) prev.t += ' '
    const next = out[i + 1]
    if (next && 't' in next && /^[A-Za-z0-9]/.test(next.t)) next.t = ' ' + next.t
  }
  return out
}

export async function generateDayFlavor(dayNumber: number, wordIds: number[], npcIds: string[]): Promise<DayFlavor | null> {
  const key = getApiKey()
  if (!key) return null
  const words = wordIds.map(id => wordById(id)!).filter(Boolean)
  const cast = NPCS.filter(n => npcIds.includes(n.id))
  if (!words.length || !cast.length) return null

  const sys = `You write tiny daily flavor for a Japanese-learning life-sim. Text is stored as segments: {"t":"english text"} or {"w":<word id>} — the {"w"} slot renders as the ENGLISH gloss before the player learns it and JAPANESE after, so lines must read naturally both ways. ASCII only in "t", include spaces so segments join cleanly.

Return ONLY minified JSON:
{"intro":[segs],"npcLines":{"<npcId>":[[segs],[segs]], ...}}
- intro: 1-2 warm sentences setting up the day, naturally weaving in 2-3 of today's word ids.
- npcLines: for EACH listed NPC, exactly 2 short in-persona lines (max 16 words) that nod at today's words or quests. No quotes inside text.`

  const user = `Day ${dayNumber}.
Today's words: ${words.map(w => `${w.id}=${w.en}(${w.ja})`).join(', ')}
NPCs: ${cast.map(n => `${n.id}: ${n.persona}`).join(' | ')}`

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5',
      max_tokens: 1200,
      system: sys,
      messages: [{ role: 'user', content: user }]
    })
  })
  if (!resp.ok) throw new Error(`flavor API ${resp.status}`)
  const data = await resp.json() as { content?: Array<{ type: string; text: string }> }
  const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('')
  const cleaned = text.replace(/```json|```/g, '').trim()
  const raw = JSON.parse(cleaned.slice(cleaned.indexOf('{'), cleaned.lastIndexOf('}') + 1)) as {
    intro?: unknown; npcLines?: Record<string, unknown[]>
  }

  const intro = normalizeSegs(raw.intro) || []
  const npcLines: Record<string, Seg[][]> = {}
  for (const [id, lines] of Object.entries(raw.npcLines || {})) {
    if (!NPCS.some(n => n.id === id) || !Array.isArray(lines)) continue
    const good = lines.map(normalizeSegs).filter((x): x is Seg[] => !!x)
    if (good.length) npcLines[id] = good
  }
  return { intro, npcLines }
}
