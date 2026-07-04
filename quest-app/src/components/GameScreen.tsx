import { useEffect, useRef, useState } from 'react'
import type { Companion, PlayerState, RoomObject, Session, Sparkle } from '../types'
import { ANIMATE_SPRITES, NAME_POOLS } from '../data/sprites'
import { COLS, ROWS, TILE, WRONG_COOLDOWN_MS, blockedAt, objectCenter, shuffle } from '../game/engine'
import { drawFrame } from '../game/render'
import { getProg, saveProg, saveToday, todayStr } from '../lib/storage'
import { SFX } from '../lib/audio'
import TouchControls from './TouchControls'
import { Overlay, StoryOverlay, StoryText } from './overlays'

type DialogState =
  | { kind: 'word'; idx: number; phase: 'quiz' | 'reveal'; review: boolean; options: string[]; picked?: string; hintShown: boolean }
  | { kind: 'comp'; word: string; phase: 'quiz' | 'reveal'; options: string[]; picked?: string }

interface Props {
  session: Session
  paused: boolean
  hasKey: boolean
  onHome: () => void
  onNewDay: () => void
  onOpenStoryReminder?: () => void
  showToast: (m: string) => void
}

function reunionLine(v: Companion): string {
  const t = [
    `{${v.word}} ${v.name} pads across the room to greet you — it remembered you!`,
    `Your old friend ${v.name} the {${v.word}} is back, clearly pleased to see you.`,
    `${v.name} — the {${v.word}} from a past quest — has been waiting here all along.`
  ]
  return t[(v.timesMet || 1) % t.length]
}

export default function GameScreen({ session, paused, hasKey, onHome, onNewDay, showToast }: Props) {
  const sessRef = useRef<Session>(session)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const playerRef = useRef<PlayerState>({ x: 7.5 * TILE, y: 9.5 * TILE, dir: 'down', frame: 0, ftick: 0, moving: false })
  const keysRef = useRef<Record<string, boolean>>({})
  const joyRef = useRef({ dx: 0, dy: 0 })
  const sparklesRef = useRef<Sparkle[]>([])
  const nearRef = useRef<RoomObject | null>(null)
  const nearActiveRef = useRef(false)
  const overlayRef = useRef(true)

  const [nearActive, setNearActive] = useState(false)
  const [storyOpen, setStoryOpen] = useState(true)
  const [doneOpen, setDoneOpen] = useState(false)
  const [dialog, setDialog] = useState<DialogState | null>(null)
  const [streak, setStreak] = useState(() => getProg().streak)
  const [, setTick] = useState(0)
  const bump = () => setTick(t => t + 1)

  const S = sessRef.current
  overlayRef.current = paused || storyOpen || doneOpen || !!dialog

  /* ---------------- interaction ---------------- */

  function spawnSparkle(o: RoomObject) {
    const ox = o.tx * TILE + 8
    const oy = o.mount === 'wall' ? 12 : o.ty * TILE
    for (let i = 0; i < 7; i++) {
      sparklesRef.current.push({ x: ox - 6 + Math.random() * 12, y: oy + Math.random() * 8, t: Math.floor(Math.random() * 10) })
    }
  }

  function openObj(o: RoomObject) {
    const S = sessRef.current
    if (o.companion) {
      const v = o.companion
      const done = !!S.compDone[v.word]
      const lock = S.wrongAt['c:' + v.word] || 0
      if (!done && Date.now() < lock) {
        showToast(`${v.name} looks a little hurt… give it ${Math.ceil((lock - Date.now()) / 1000)}s.`)
        return
      }
      if (!o.greeted) {
        o.greeted = true
        const p = getProg()
        const reg = p.companions[S.lang]
        if (reg[v.word]) {
          reg[v.word].timesMet = (reg[v.word].timesMet || 1) + 1
          reg[v.word].lastMet = todayStr()
          v.timesMet = reg[v.word].timesMet
          saveProg(p)
        }
        saveToday(S)
      }
      if (done) {
        setDialog({ kind: 'comp', word: v.word, phase: 'reveal', options: [] })
      } else {
        setDialog({
          kind: 'comp', word: v.word, phase: 'quiz',
          options: shuffle([v.meaning, ...(v.distractors || ['thing', 'place', 'action']).slice(0, 3)])
        })
      }
      return
    }
    const idx = o.idx!
    const w = S.day.words[idx]
    const learned = !!S.learned[idx]
    const lock = S.wrongAt[String(idx)] || 0
    if (!learned && Date.now() < lock) {
      showToast(`「${w.word}」 is sulking… explore elsewhere and come back in ${Math.ceil((lock - Date.now()) / 1000)}s.`)
      return
    }
    if (learned) {
      setDialog({ kind: 'word', idx, phase: 'reveal', review: true, options: [], hintShown: false })
    } else {
      setDialog({
        kind: 'word', idx, phase: 'quiz', review: false, hintShown: false,
        options: shuffle([w.meaning, ...w.distractors.slice(0, 3)])
      })
    }
  }

  const interact = () => {
    if (overlayRef.current) {
      if (storyOpen) setStoryOpen(false)
      return
    }
    const o = nearRef.current
    if (o) openObj(o)
  }
  const interactRef = useRef(interact)
  interactRef.current = interact

  /* ---------------- answers ---------------- */

  function doFinishDay() {
    const S = sessRef.current
    const p = getProg()
    const t = todayStr()
    if (p.lastDone !== t) {
      const y = new Date(); y.setDate(y.getDate() - 1)
      const yStr = y.toISOString().slice(0, 10)
      p.streak = (p.lastDone === yStr) ? p.streak + 1 : 1
      p.lastDone = t
      p.daysDone++
    }
    S.day.words.forEach(w => {
      const list = p.known[S.lang]
      if (!list.includes(w.word)) list.push(w.word)
    })
    saveProg(p)
    setStreak(p.streak)
    SFX.fanfare()
    setDoneOpen(true)
  }

  function pickWordOption(opt: string) {
    const d = dialog
    if (!d || d.kind !== 'word' || d.phase !== 'quiz' || d.picked) return
    const S = sessRef.current
    const w = S.day.words[d.idx]
    const correct = opt === w.meaning
    setDialog({ ...d, picked: opt })
    if (correct) {
      SFX.correct()
      S.learned[d.idx] = true
      delete S.wrongAt[String(d.idx)]
      // archive the word permanently
      const p = getProg()
      const list = p.known[S.lang]
      if (!list.includes(w.word)) list.push(w.word)
      const vocab = p.vocab[S.lang]
      if (!vocab[w.word]) {
        vocab[w.word] = {
          meaning: w.meaning, reading: w.reading, romaji: w.romaji || '',
          mnemonic: w.mnemonic || '', learnedOn: todayStr(), misses: S.misses[d.idx] || 0
        }
      }
      // animate objects become named companions who revisit future rooms
      const obj = S.objects.find(o => o.idx === d.idx)
      if (obj && ANIMATE_SPRITES.includes(obj.sprite)) {
        const comps = p.companions[S.lang]
        if (!comps[w.word]) {
          const names = NAME_POOLS[S.lang] || NAME_POOLS.ja
          const name = names[Object.keys(comps).length % names.length]
          comps[w.word] = {
            name, sprite: obj.sprite, word: w.word, meaning: w.meaning,
            reading: w.reading, romaji: w.romaji || '', mnemonic: w.mnemonic || '',
            distractors: (w.distractors || []).slice(0, 3),
            timesMet: 1, affection: 1, firstMet: todayStr(), lastMet: todayStr()
          }
          setTimeout(() => showToast(`${name} the ${w.meaning} has taken a liking to you… you may meet again. ♥`), 1500)
        }
      }
      saveProg(p)
      saveToday(S)
      if (obj) spawnSparkle(obj)
      bump()
      const allLearned = Object.keys(S.learned).length >= S.day.words.length
      setTimeout(() => {
        setDialog({ kind: 'word', idx: d.idx, phase: 'reveal', review: false, options: [], hintShown: false })
        if (allLearned) setTimeout(doFinishDay, 900)
      }, 550)
    } else {
      SFX.wrong()
      S.misses[d.idx] = (S.misses[d.idx] || 0) + 1
      S.wrongAt[String(d.idx)] = Date.now() + WRONG_COOLDOWN_MS
      saveToday(S)
      setTimeout(() => {
        setDialog(null)
        showToast(`Not quite… 「${w.word}」 will ask again. Re-read the story! 📜`)
      }, 850)
    }
  }

  function pickCompOption(opt: string) {
    const d = dialog
    if (!d || d.kind !== 'comp' || d.phase !== 'quiz' || d.picked) return
    const S = sessRef.current
    const obj = S.objects.find(o => o.companion && o.word === d.word)
    if (!obj || !obj.companion) return
    const v = obj.companion
    const correct = opt === v.meaning
    setDialog({ ...d, picked: opt })
    if (correct) {
      SFX.reunion()
      S.compDone[v.word] = true
      const p = getProg()
      const reg = p.companions[S.lang]
      if (reg[v.word]) {
        reg[v.word].affection = (reg[v.word].affection || 1) + 1
        v.affection = reg[v.word].affection
        saveProg(p)
      }
      saveToday(S)
      spawnSparkle(obj)
      bump()
      setTimeout(() => setDialog({ kind: 'comp', word: d.word, phase: 'reveal', options: [] }), 550)
    } else {
      SFX.wrong()
      S.wrongAt['c:' + v.word] = Date.now() + WRONG_COOLDOWN_MS
      saveToday(S)
      setTimeout(() => {
        setDialog(null)
        showToast(`${v.name} tilts its head… you've forgotten? Come back and try again.`)
      }, 850)
    }
  }

  /* ---------------- input & loop ---------------- */

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (k === 'escape') { setDialog(null); setStoryOpen(false); return }
      if (overlayRef.current) {
        if ((k === 'e' || k === ' ' || k === 'enter') && !paused) {
          e.preventDefault()
          interactRef.current()
        }
        return
      }
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) {
        keysRef.current[k] = true
        e.preventDefault()
      }
      if (k === 'e' || k === ' ' || k === 'enter') {
        e.preventDefault()
        interactRef.current()
      }
    }
    const up = (e: KeyboardEvent) => { keysRef.current[e.key.toLowerCase()] = false }
    addEventListener('keydown', down)
    addEventListener('keyup', up)
    return () => { removeEventListener('keydown', down); removeEventListener('keyup', up) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    ctx.imageSmoothingEnabled = false
    let raf = 0

    const step = () => {
      const S = sessRef.current
      const player = playerRef.current

      if (overlayRef.current) {
        player.moving = false
      } else {
        const keys = keysRef.current
        const joy = joyRef.current
        let dx = ((keys['d'] || keys['arrowright']) ? 1 : 0) - ((keys['a'] || keys['arrowleft']) ? 1 : 0) + joy.dx
        let dy = ((keys['s'] || keys['arrowdown']) ? 1 : 0) - ((keys['w'] || keys['arrowup']) ? 1 : 0) + joy.dy
        const len = Math.hypot(dx, dy)
        if (len > 1) { dx /= len; dy /= len }
        player.moving = len > 0.15
        if (player.moving) {
          if (Math.abs(dx) > Math.abs(dy)) player.dir = dx > 0 ? 'right' : 'left'
          else player.dir = dy > 0 ? 'down' : 'up'
          const sp = 1.4
          const nx = player.x + dx * sp
          const ny = player.y + dy * sp
          const feet = (x: number, y: number): Array<[number, number]> =>
            [[x - 4, y + 3], [x + 4, y + 3], [x - 4, y + 7], [x + 4, y + 7]]
          if (!feet(nx, player.y).some(([a, b]) => blockedAt(S, a, b))) player.x = nx
          if (!feet(player.x, ny).some(([a, b]) => blockedAt(S, a, b))) player.y = ny
          player.ftick++
          if (player.ftick > 9) { player.frame = 1 - player.frame; player.ftick = 0 }
        } else {
          player.frame = 0
        }
      }

      // nearest interactable
      let near: RoomObject | null = null
      let best = 26
      for (const o of S.objects) {
        const c = objectCenter(o)
        const d = Math.hypot(player.x - c.x, player.y + 4 - c.y)
        if (d < best) { best = d; near = o }
      }
      nearRef.current = near
      const active = !!near && !overlayRef.current
      if (active !== nearActiveRef.current) {
        nearActiveRef.current = active
        setNearActive(active)
      }

      sparklesRef.current = sparklesRef.current.filter(s => { s.t++; s.y -= 0.35; return s.t < 40 })

      drawFrame(ctx, {
        session: S, player, sparkles: sparklesRef.current,
        near: nearRef.current, overlayOpen: overlayRef.current
      })
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ---------------- derived UI data ---------------- */

  const learnedCount = Object.keys(S.learned).length
  const missTotal = Object.values(S.misses).reduce((a, b) => a + b, 0)

  /* ---------------- render ---------------- */

  return (
    <div>
      <div className="hud">
        <div className="title-block">
          <div className="day-title">{S.day.title}</div>
          <div className="day-sub">
            {S.lang === 'ja' ? 'Japanese · JLPT N5' : 'Chinese · HSK 1'} — find all 8 words
          </div>
        </div>
        <div className="word-dots">
          {S.day.words.map((w, i) => (
            <div key={i} className={'wdot' + (S.learned[i] ? ' done' : '')}
                 title={S.learned[i] ? `${w.word} — ${w.meaning}` : '???'}>
              {S.learned[i] ? w.word[0] : '?'}
            </div>
          ))}
        </div>
        <div className="hud-btns">
          <span className="streak-chip">🔥 {streak}</span>
          <button className="btn small" onClick={() => setStoryOpen(true)}>📜 Story</button>
          <button className="btn small" onClick={onNewDay}>✨ New day</button>
          <button className="btn small" onClick={onHome}>⌂ Home</button>
        </div>
      </div>

      <div className="stage-wrap">
        <canvas ref={canvasRef} className="stage" width={COLS * TILE} height={ROWS * TILE} />

        {storyOpen && (
          <StoryOverlay title={S.day.title} story={S.day.story} onClose={() => setStoryOpen(false)} />
        )}

        {dialog && <WordDialog S={S} d={dialog}
          onHint={() => { if (dialog.kind === 'word') setDialog({ ...dialog, hintShown: true }) }}
          onPick={dialog.kind === 'word' ? pickWordOption : pickCompOption}
          onClose={() => setDialog(null)} />}

        {doneOpen && (
          <Overlay>
            <div className="panel">
              <div className="corner-seal">完</div>
              <h2>Quest complete! 制覇！</h2>
              <div className="psub">
                {missTotal === 0
                  ? 'A perfect run — no misses. 完璧！'
                  : `All eight found · ${missTotal} miss${missTotal > 1 ? 'es' : ''} along the way — those words will return in future quests.`}
              </div>
              <div className="recap-list">
                {S.day.words.map((w, i) => (
                  <div className="recap-item" key={i}>
                    <span className="rw">{w.word}</span>
                    <span className="rr">{w.reading}</span>
                    {S.misses[i] ? <span className="rmiss">×{S.misses[i]}</span> : null}
                    <span className="rm">{w.meaning}</span>
                  </div>
                ))}
              </div>
              <div className="panel-actions">
                <button className="btn" onClick={() => setDoneOpen(false)}>Wander the room</button>
                {hasKey && <button className="btn primary" onClick={onNewDay}>✨ Next story</button>}
              </div>
            </div>
          </Overlay>
        )}
      </div>

      <div className="controls-hint">
        <b>W A S D</b> / arrows to move · <b>E</b> or <b>Space</b> to inspect · <b>Esc</b> to close
      </div>

      <TouchControls joyRef={joyRef} nearActive={nearActive} onInteract={() => interactRef.current()} />

      <span style={{ display: 'none' }}>{learnedCount}</span>
    </div>
  )
}

/* ---------------- word / companion dialog ---------------- */

function WordDialog({ S, d, onPick, onHint, onClose }: {
  S: Session
  d: DialogState
  onPick: (opt: string) => void
  onHint: () => void
  onClose: () => void
}) {
  let seal: string, big: string, reading: string, romaji: string, sentence: string
  let meaning: string, mnemonic: string, hint: string, banner: string
  let correctOpt: string

  if (d.kind === 'word') {
    const w = S.day.words[d.idx]
    seal = w.word[0]; big = w.word; reading = w.reading; romaji = w.romaji || ''
    sentence = w.sentence; meaning = w.meaning; mnemonic = w.mnemonic || ''
    hint = w.hint; correctOpt = w.meaning
    banner = d.review ? '習得済み · Learned!' : '正解！ Correct!'
  } else {
    const obj = S.objects.find(o => o.companion && o.word === d.word)
    const v = obj!.companion!
    seal = '♥'; big = v.name; reading = `${v.word}（${v.reading}）`
    romaji = `companion · together since ${v.firstMet || '?'} · met ×${v.timesMet || 1}`
    sentence = reunionLine(v); meaning = v.meaning; mnemonic = v.mnemonic || ''
    hint = ''; correctOpt = v.meaning
    banner = `It remembers you! Bond ${'♥'.repeat(Math.min(v.affection || 1, 8))}`
  }

  const wrongPicked = d.phase === 'quiz' && d.picked && d.picked !== correctOpt

  return (
    <Overlay>
      <div className={'panel' + (wrongPicked ? ' shake' : '')}>
        <div className="corner-seal">{seal}</div>
        <div className="word-big">{big}</div>
        <div className="word-reading">{reading}</div>
        <div className="word-romaji">{romaji}</div>
        <StoryText text={sentence} className="word-sentence" />

        {d.phase === 'quiz' ? (
          <div>
            <div className="quiz-q">What does it mean? 意味は？</div>
            <div className="opts">
              {d.options.map(o => {
                let cls = 'opt'
                if (d.picked && o === d.picked) cls += o === correctOpt ? ' correct' : ' wrong'
                return (
                  <button key={o} className={cls} disabled={!!d.picked} onClick={() => onPick(o)}>
                    {o}
                  </button>
                )
              })}
            </div>
            {d.kind === 'word' && (
              <div className="hint-row">
                <button className="btn small" onClick={onHint}>💡 Hint</button>
                {d.hintShown && <div className="hint-text">💡 {hint}</div>}
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="result-banner good">{banner}</div>
            <div className="reveal-meaning">{meaning}</div>
            <StoryText text={sentence} className="word-sentence" />
            <div className="sentence-gloss" style={{ textAlign: 'center' }}>
              {big !== reading ? `${d.kind === 'word' ? big : reading} = ` : ''}<b>{meaning}</b>
            </div>
            {mnemonic && <div className="mnemonic-box"><b>Remember it:</b> {mnemonic}</div>}
          </div>
        )}

        <div className="panel-actions">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </Overlay>
  )
}
