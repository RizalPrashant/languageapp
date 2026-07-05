import type { SayLang } from '../data/saygoodbye'
import { STORIES } from '../data/stories'
import { FINAL_DAY, getProgFor } from '../lib/sayState'

interface Props {
  lang: SayLang
  onPlay: () => void
  onBack: () => void
  musicOn: boolean
  onToggleMusic: () => void
}

export default function StoryScreen({ lang, onPlay, onBack, musicOn, onToggleMusic }: Props) {
  const prog = getProgFor(lang)

  return (
    <div className="home">
      <h1>Stories</h1>
      <div className="subtitle">Pick a story. Each one is its own mystery.</div>

      <div className="story-list">
        {STORIES.map(s => (
          s.def ? (
            <div className="story-card" key={s.n} onClick={onPlay}>
              <div className="story-num">{s.n}</div>
              <div className="story-body">
                <div className="story-title">{s.def.title}</div>
                <div className="story-sub">
                  Day {prog.day}/{FINAL_DAY} · {prog.learned.length}/64 words{prog.seasons ? ` · completed ${prog.seasons}×` : ''}
                </div>
              </div>
              <div className="story-go">▸</div>
            </div>
          ) : (
            <div className="story-card locked" key={s.n}>
              <div className="story-num">{s.n}</div>
              <div className="story-body">
                <div className="story-title">Coming soon</div>
                <div className="story-sub">A new town, a new mission.</div>
              </div>
              <div className="story-go">🔒</div>
            </div>
          )
        ))}
      </div>

      <div className="home-foot" style={{ marginTop: 6 }}>More stories coming soon!!</div>

      <div className="gearline">
        <button className="btn small" onClick={onToggleMusic}>{musicOn ? '🎵 Music on' : '🔇 Music off'}</button>
        <button className="btn small" onClick={onBack}>← Languages</button>
      </div>
    </div>
  )
}
