import { useCallback, useEffect, useRef, useState } from 'react'
import type { Lang } from './types'
import HomeScreen from './components/HomeScreen'
import WorldScreen from './components/WorldScreen'
import { SettingsOverlay, WorldVocabOverlay } from './components/overlays'
import { clearWorldProgress } from './lib/worldStorage'
import { conceptToId, loadBank, setLang } from './lib/bank'
import { EPISODES } from './data/episodes'
import EpisodeSelect from './components/EpisodeSelect'
import { musicEnabled, setMusicEnabled, startMusic } from './lib/music'

export default function App() {
  const [screen, setScreen] = useState<'home' | 'world'>('home')
  const [worldKey, setWorldKey] = useState(0)
  const [bankReady, setBankReady] = useState(false)

  useEffect(() => {
    loadBank().then(ok => {
      setBankReady(true)
      setWorldKey(k => k + 1)   // re-render stats with the full bank
      if (!ok) console.warn('running on starter bank')
    })
    // browsers require a user gesture before audio: arm a one-time starter
    const arm = () => { startMusic(); removeEventListener('pointerdown', arm); removeEventListener('keydown', arm) }
    addEventListener('pointerdown', arm)
    addEventListener('keydown', arm)
    return () => { removeEventListener('pointerdown', arm); removeEventListener('keydown', arm) }
  }, [])

  const [musicOn, setMusicOn] = useState(musicEnabled())
  function toggleMusic() {
    const next = !musicOn
    setMusicOn(next)
    setMusicEnabled(next)
    showToast(next ? '🎵 Music on' : '🔇 Music off')
  }
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [epSelectOpen, setEpSelectOpen] = useState(false)
  const [vocabOpen, setVocabOpen] = useState(false)
  const [toast, setToast] = useState<{ msg: string; id: number } | null>(null)
  const toastTimer = useRef<number | undefined>(undefined)

  const showToast = useCallback((msg: string) => {
    setToast({ msg, id: Date.now() })
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 3600)
  }, [])

  function startLang(lang: Lang) {
    if (lang === 'ja' && !bankReady) {
      showToast('Loading the word bank… one second.')
      return
    }
    setLang(lang)
    setWorldKey(k => k + 1)
    setScreen('world')
  }

  /* TEST MODE: jump to any episode as if every previous one was cleared. */
  function jumpToEpisode(lang: Lang, ep: number) {
    if (lang === 'ja' && !bankReady) {
      showToast('Loading the word bank… one second.')
      return
    }
    setLang(lang)
    const learnedIds: number[] = []
    for (const e of EPISODES) {
      if (e.ep >= ep) continue
      for (const w of e.words) {
        const id = conceptToId(w)
        if (id !== undefined && !learnedIds.includes(id)) learnedIds.push(id)
      }
    }
    const prog = { dayNumber: ep, streak: ep - 1, lastDone: null, daysDone: ep - 1, learnedIds }
    localStorage.setItem(`kq2_${lang}_progress`, JSON.stringify(prog))
    localStorage.removeItem(`kq2_${lang}_today`)
    if (lang === 'ja') { localStorage.removeItem('kq2_today'); localStorage.removeItem('kq2_progress') }
    setEpSelectOpen(false)
    setWorldKey(k => k + 1)
    setScreen('world')
    showToast(`🎬 Episode ${ep} — ${learnedIds.length} earlier words marked learned`)
  }

  function resetAll() {
    if (!confirm("Start over from Day 1?\n\nThis wipes your streak, every learned word and today's quests. Your API key is kept.")) return
    clearWorldProgress()
    setSettingsOpen(false)
    setScreen('home')
    setWorldKey(k => k + 1)
    showToast('A fresh start — Day 1 awaits. 初めから！')
  }

  return (
    <div className="app-frame">
      {screen === 'home' ? (
        <HomeScreen
          onStart={startLang}
          onOpenVocab={() => setVocabOpen(true)}
          onOpenSettings={() => setSettingsOpen(true)}
          onReset={resetAll}
          onOpenEpisodes={() => setEpSelectOpen(true)}
          musicOn={musicOn}
          onToggleMusic={toggleMusic}
        />
      ) : (
        <WorldScreen key={worldKey} onHome={() => setScreen('home')} showToast={showToast}
          musicOn={musicOn} onToggleMusic={toggleMusic} />
      )}

      {settingsOpen && (
        <SettingsOverlay onClose={() => setSettingsOpen(false)} onReset={resetAll} showToast={showToast} />
      )}
      {vocabOpen && <WorldVocabOverlay onClose={() => setVocabOpen(false)} />}
      {epSelectOpen && <EpisodeSelect onClose={() => setEpSelectOpen(false)} onJump={jumpToEpisode} />}

      <div className={'toast' + (toast ? ' show' : '')}>{toast?.msg}</div>
    </div>
  )
}
