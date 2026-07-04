import { useState } from 'react'
import type { Lang } from '../types'
import { EPISODES } from '../data/episodes'
import { Overlay } from './overlays'

/* Dev/test tool: jump to any season · any episode in any language.
   Jumping simulates a save that has cleared every previous episode
   (their words learned, day counter set), so the diglot weave and
   day-gated world (NPCs, warps, sakura…) look exactly as they would
   for a real player arriving at that day. */

const SEASON_NAMES: Record<number, string> = {
  1: 'Season 1 — The Town',
  2: 'Season 2 — Family',
  3: 'Season 3 — The Engagement',
  4: 'Season 4 — The Wedding',
  5: 'Season 5 — The Hard Season',
  6: 'Season 6 — Spring',
}

const LANGS: Array<{ lang: Lang; label: string }> = [
  { lang: 'ja', label: '日本語' },
  { lang: 'zh', label: '中文' },
  { lang: 'de', label: 'Deutsch' },
]

function englishTitle(t: string): string {
  const i = t.lastIndexOf('—')
  return i >= 0 ? t.slice(i + 1).trim() : t
}

export default function EpisodeSelect({ onClose, onJump }: {
  onClose: () => void
  onJump: (lang: Lang, ep: number) => void
}) {
  const [lang, setLang] = useState<Lang>('ja')
  const seasons = new Map<number, typeof EPISODES>()
  for (const e of EPISODES) {
    const s = Math.ceil(e.ep / 10)
    if (!seasons.has(s)) seasons.set(s, [])
    seasons.get(s)!.push(e)
  }
  const seasonNums = [...seasons.keys()].sort((a, b) => a - b)
  const [open, setOpen] = useState<number>(seasonNums[seasonNums.length - 1] || 1)

  return (
    <Overlay fixed>
      <div className="panel" style={{ maxWidth: 560 }}>
        <div className="corner-seal">試</div>
        <h2>🎬 Episode Select <span style={{ fontSize: 12, color: 'var(--gold)' }}>TEST MODE</span></h2>
        <div style={{ fontSize: 12, opacity: 0.75, margin: '4px 0 10px' }}>
          Jumping simulates having cleared every previous episode — earlier words render
          in the target language, day-gated characters and places are exactly as a real
          player would find them. Your current save for that language is overwritten.
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          {LANGS.map(l => (
            <button
              key={l.lang}
              className={'btn small' + (lang === l.lang ? '' : ' ghost')}
              style={lang === l.lang ? { outline: '2px solid var(--gold)' } : { opacity: 0.6 }}
              onClick={() => setLang(l.lang)}
            >{l.label}</button>
          ))}
        </div>

        <div style={{ maxHeight: '52vh', overflowY: 'auto', paddingRight: 4 }}>
          {seasonNums.map(s => (
            <div key={s} style={{ marginBottom: 8 }}>
              <button
                className="btn small"
                style={{ width: '100%', textAlign: 'left', fontWeight: 700 }}
                onClick={() => setOpen(open === s ? -1 : s)}
              >
                {open === s ? '▾' : '▸'} {SEASON_NAMES[s] || `Season ${s}`}
                <span style={{ opacity: 0.6, fontWeight: 400 }}> · ep {(s - 1) * 10 + 1}–{(s - 1) * 10 + seasons.get(s)!.length}</span>
              </button>
              {open === s && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, padding: '8px 2px' }}>
                  {seasons.get(s)!.map(e => (
                    <button
                      key={e.ep}
                      className="btn small"
                      style={{ textAlign: 'left', lineHeight: 1.3 }}
                      onClick={() => onJump(lang, e.ep)}
                      title={e.words.join(' · ')}
                    >
                      <b>{e.ep}</b>{e.night ? ' 🌙' : ''} {englishTitle(e.title)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="btnrow" style={{ marginTop: 12 }}>
          <button className="btn" onClick={onClose}>Close 閉じる</button>
        </div>
      </div>
    </Overlay>
  )
}
