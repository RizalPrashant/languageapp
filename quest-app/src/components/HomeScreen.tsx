import type { Lang } from '../types'
import { getWorldProgFor } from '../lib/worldStorage'

interface Props {
  onStart: (lang: Lang) => void
  onOpenVocab: () => void
  onOpenSettings: () => void
  onReset: () => void
  onOpenEpisodes: () => void
  musicOn: boolean
  onToggleMusic: () => void
}

const CARDS: Array<{ lang: Lang; seal: string; big: string; name: string }> = [
  { lang: 'ja', seal: '日', big: '日本語', name: 'Japanese' },
  { lang: 'zh', seal: '中', big: '中文', name: 'Mandarin Chinese' },
  { lang: 'de', seal: '独', big: 'Deutsch', name: 'German' }
]

export default function HomeScreen({ onStart, onOpenVocab, onOpenSettings, onReset, onOpenEpisodes, musicOn, onToggleMusic }: Props) {
  const progs = CARDS.map(c => getWorldProgFor(c.lang))
  const totalWords = progs.reduce((a, p) => a + p.learnedIds.length, 0)
  const totalDays = progs.reduce((a, p) => a + p.daysDone, 0)
  const bestStreak = Math.max(...progs.map(p => p.streak))

  return (
    <div className="home">
      <h1>言葉クエスト <span style={{ fontSize: 14, color: 'var(--gold)' }}>WORD QUEST</span></h1>
      <div className="subtitle">
        Eight words a day. One town, three languages, endless little disasters.
      </div>

      <div className="home-cards">
        {CARDS.map((c, i) => (
          <div className="lang-card" key={c.lang} onClick={() => onStart(c.lang)}>
            <div className="seal">{c.seal}</div>
            <div className="big" style={c.lang === 'de' ? { fontSize: 34 } : undefined}>{c.big}</div>
            <div className="name">{c.name}</div>
            <div className="lvl">Day {progs[i].dayNumber} · {progs[i].learnedIds.length} words learned</div>
          </div>
        ))}
      </div>

      <div className="home-stats">
        <div><b>{bestStreak}</b>best streak 連続</div>
        <div><b>{totalWords}</b>words learned 習得</div>
        <div><b>{totalDays}</b>days cleared 完了</div>
      </div>

      <div className="gearline">
        <button className="btn small" onClick={onToggleMusic}>{musicOn ? '🎵 Music on' : '🔇 Music off'}</button>
        <button className="btn small" onClick={onOpenVocab}>📖 Collection · 図鑑</button>
        <button className="btn small" onClick={onOpenSettings}>⚙ Settings</button>
        <button className="btn small" onClick={onOpenEpisodes}>🎬 Episodes</button>
        <button className="btn small danger" onClick={onReset}>🔄 Start over</button>
      </div>

      <div className="home-foot">
        The same ten episodes, the same town — in every language you pick.
      </div>
    </div>
  )
}
