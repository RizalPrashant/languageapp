import { SAY_LANGS } from '../data/saygoodbye'
import type { SayLang } from '../data/saygoodbye'
import { getProgFor } from '../lib/sayState'

interface Props {
  onStart: (lang: SayLang) => void
  onOpenDays: () => void
  onOpenSettings: () => void
  musicOn: boolean
  onToggleMusic: () => void
}

export default function HomeScreen({ onStart, onOpenDays, onOpenSettings, musicOn, onToggleMusic }: Props) {
  const progs = SAY_LANGS.map(l => getProgFor(l.lang))
  const seasons = progs.reduce((a, p) => a + p.seasons, 0)
  const words = progs.reduce((a, p) => a + p.learned.length, 0)
  const bestStreak = Math.max(...progs.map(p => p.streak))

  return (
    <div className="home">
      <h1>Choose a language you want to learn</h1>
      <div className="subtitle">
        This game is a <b>reverse diglot weave</b>: every story begins fully in the language
        you're learning, and each day the words you master turn into English before your eyes —
        until the whole town makes sense and you can finish your mission.
      </div>

      <div className="home-cards">
        {SAY_LANGS.map((l, i) => (
          <div className="lang-card" key={l.lang} onClick={() => onStart(l.lang)}>
            <div className="seal">{l.big}</div>
            <div className="big" style={{ fontSize: 26 }}>{l.label.split(' ')[0]}</div>
            <div className="name">{l.label.split(' ').slice(1).join(' ')}</div>
            <div className="lvl">{progs[i].learned.length ? `${progs[i].learned.length} words woven` : 'Start fresh'}</div>
          </div>
        ))}
      </div>

      <div className="home-stats">
        <div><b>{bestStreak}</b>best streak</div>
        <div><b>{words}</b>words learned</div>
        <div><b>{seasons}</b>stories finished</div>
      </div>

      <div className="gearline">
        <button className="btn small" onClick={onToggleMusic}>{musicOn ? '🎵 Music on' : '🔇 Music off'}</button>
        <button className="btn small" onClick={onOpenDays}>🎬 Days</button>
        <button className="btn small" onClick={onOpenSettings}>⚙ Settings</button>
      </div>

      <div className="home-foot">
        The same little town, in every language you pick. Be nice. Say goodbye.
      </div>
    </div>
  )
}
