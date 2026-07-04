import { useCallback, useRef, useState } from 'react'
import type { Lang, Session } from './types'
import { bakedDayWithVisitors, buildSession, pickVisitors } from './game/engine'
import { generateDay } from './lib/haiku'
import { clearAllProgress, getApiKey, getProg, loadToday, saveToday } from './lib/storage'
import HomeScreen from './components/HomeScreen'
import GameScreen from './components/GameScreen'
import { LoadingOverlay, SettingsOverlay, VocabOverlay } from './components/overlays'

export default function App() {
  const [screen, setScreen] = useState<'home' | 'game'>('home')
  const [session, setSession] = useState<Session | null>(null)
  const [genId, setGenId] = useState(0)          // remounts GameScreen per new session
  const [loading, setLoading] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [vocabOpen, setVocabOpen] = useState(false)
  const [toast, setToast] = useState<{ msg: string; id: number } | null>(null)
  const toastTimer = useRef<number | undefined>(undefined)

  const showToast = useCallback((msg: string) => {
    setToast({ msg, id: Date.now() })
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 3600)
  }, [])

  function adopt(s: Session) {
    setSession(s)
    setGenId(id => id + 1)
    setScreen('game')
  }

  async function generate(lang: Lang) {
    const key = getApiKey()!
    const prog = getProg()
    const visitors = pickVisitors(lang, prog)
    setLoading(true)
    try {
      const day = await generateDay(lang, key, prog.known[lang] || [], visitors)
      const s = buildSession(lang, day, visitors)
      saveToday(s)
      adopt(s)
    } catch (e) {
      console.error('Generation failed:', e)
      const s = buildSession(lang, bakedDayWithVisitors(lang, visitors), visitors)
      saveToday(s)
      adopt(s)
      showToast(`Haiku couldn't reach the brush (${String((e as Error).message || e).slice(0, 60)}) — playing the starter quest.`)
    } finally {
      setLoading(false)
    }
  }

  function startLang(lang: Lang) {
    const saved = loadToday(lang)
    if (saved) { adopt(saved); return }
    if (getApiKey()) { void generate(lang); return }
    const visitors = pickVisitors(lang, getProg())
    const s = buildSession(lang, bakedDayWithVisitors(lang, visitors), visitors)
    saveToday(s)
    adopt(s)
    showToast('No API key set — playing the built-in starter quest. Add a key in ⚙ Settings for endless days!')
  }

  function newDay() {
    if (!session) return
    if (!getApiKey()) {
      setSettingsOpen(true)
      showToast('Add your Anthropic API key first — then Haiku writes a fresh story every time.')
      return
    }
    void generate(session.lang)
  }

  function resetAll() {
    if (!confirm("Start over from day 1?\n\nThis wipes your streak, learned words, companions and today's quest. Your API key is kept.")) return
    clearAllProgress()
    setSession(null)
    setSettingsOpen(false)
    setScreen('home')
    showToast('A fresh start — day 1 awaits. 初めから！')
  }

  return (
    <div className="app-frame">
      {screen === 'home' || !session ? (
        <HomeScreen
          prog={getProg()}
          onStart={startLang}
          onOpenVocab={() => setVocabOpen(true)}
          onOpenSettings={() => setSettingsOpen(true)}
          onReset={resetAll}
        />
      ) : (
        <GameScreen
          key={genId}
          session={session}
          paused={loading || settingsOpen || vocabOpen}
          hasKey={!!getApiKey()}
          onHome={() => setScreen('home')}
          onNewDay={newDay}
          showToast={showToast}
        />
      )}

      {loading && <LoadingOverlay />}
      {settingsOpen && (
        <SettingsOverlay onClose={() => setSettingsOpen(false)} onReset={resetAll} showToast={showToast} />
      )}
      {vocabOpen && <VocabOverlay prog={getProg()} onClose={() => setVocabOpen(false)} />}

      <div className={'toast' + (toast ? ' show' : '')}>{toast?.msg}</div>
    </div>
  )
}
