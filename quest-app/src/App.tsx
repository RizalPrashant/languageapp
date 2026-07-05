import { useCallback, useRef, useState } from 'react'
import HomeScreen from './components/HomeScreen'
import StoryScreen from './components/StoryScreen'
import TownScreen from './components/TownScreen'
import { Overlay, SettingsOverlay } from './components/overlays'
import { CAST, SAY_LANGS, type SayLang } from './data/saygoodbye'
import { FINAL_DAY, getProgFor, keyOf, newToday, resetAllSay, saveProg, saveToday, setSayLang } from './lib/sayState'
import { musicEnabled, setMusicEnabled, startMusic } from './lib/music'

export default function App() {
  const [screen, setScreen] = useState<'home' | 'stories' | 'town'>('home')
  const [lang, setLang] = useState<SayLang>('ja')
  const [townKey, setTownKey] = useState(0)
  const [musicOn, setMusicOn] = useState(musicEnabled())
  const [daysOpen, setDaysOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [toast, setToast] = useState<{ msg: string; id: number } | null>(null)
  const toastTimer = useRef<number | undefined>(undefined)

  const showToast = useCallback((msg: string) => {
    setToast({ msg, id: Date.now() })
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 3600)
  }, [])

  function toggleMusic() {
    const next = !musicOn
    setMusicOn(next)
    setMusicEnabled(next)
    if (next) startMusic()
    showToast(next ? '🎵 Music on' : '🔇 Music off')
  }

  function resetAll() {
    if (!confirm('Start over from Day 1 in every language? This wipes all progress.')) return
    resetAllSay()
    setSettingsOpen(false)
    setScreen('home')
    showToast('A fresh loop. Day 1 awaits.')
  }

  function chooseLang(l: SayLang) {
    setLang(l)
    setSayLang(l)
    setScreen('stories')
  }

  function playStory() {
    setTownKey(k => k + 1)
    setScreen('town')
  }

  /* dev: jump any language to any day, as if all earlier days were cleared */
  function jumpTo(l: SayLang, day: number) {
    setLang(l)
    setSayLang(l)
    const prog = getProgFor(l)
    prog.day = day
    prog.learned = []
    for (const c of CAST) for (let d = 1; d < day && d <= 8; d++) prog.learned.push(keyOf(c.id, d))
    saveProg(prog)
    saveToday(newToday(day))
    setDaysOpen(false)
    setTownKey(k => k + 1)
    setScreen('town')
    showToast(`🎬 Day ${day} — earlier days marked learned`)
  }

  return (
    <div className="app-frame">
      {screen === 'home' && (
        <HomeScreen
          onStart={chooseLang}
          onOpenDays={() => setDaysOpen(true)}
          onOpenSettings={() => setSettingsOpen(true)}
          musicOn={musicOn}
          onToggleMusic={toggleMusic}
        />
      )}
      {screen === 'stories' && (
        <StoryScreen lang={lang} onPlay={playStory} onBack={() => setScreen('home')}
          musicOn={musicOn} onToggleMusic={toggleMusic} />
      )}
      {screen === 'town' && (
        <TownScreen key={townKey} onHome={() => setScreen('home')} onStories={() => setScreen('stories')}
          showToast={showToast} musicOn={musicOn} onToggleMusic={toggleMusic} />
      )}

      {settingsOpen && (
        <SettingsOverlay onClose={() => setSettingsOpen(false)} onReset={resetAll} showToast={showToast} />
      )}

      {daysOpen && (
        <Overlay fixed>
          <div className="panel" style={{ maxWidth: 520 }}>
            <div className="corner-seal">試</div>
            <h2>🎬 Day Select <span style={{ fontSize: 12, color: 'var(--gold)' }}>TEST</span></h2>
            <div style={{ fontSize: 12, opacity: .75, marginBottom: 10 }}>
              Jumps that language to a day as if every earlier day was cleared. Overwrites its save.
            </div>
            {SAY_LANGS.map(l => (
              <div key={l.lang} style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
                <span style={{ width: 84, fontWeight: 700 }}>{l.label.split(' ')[0]}</span>
                {Array.from({ length: FINAL_DAY }, (_, i) => i + 1).map(d => (
                  <button key={d} className="btn small" onClick={() => jumpTo(l.lang, d)}>{d}</button>
                ))}
              </div>
            ))}
            <div className="panel-actions">
              <button className="btn" onClick={() => setDaysOpen(false)}>Close</button>
            </div>
          </div>
        </Overlay>
      )}

      <div className={'toast' + (toast ? ' show' : '')}>{toast?.msg}</div>
    </div>
  )
}
