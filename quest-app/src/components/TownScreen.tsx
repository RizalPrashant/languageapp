import { useEffect, useRef, useState } from 'react'
import type { PlayerState, Sparkle } from '../types'
import { START_LOC, START_POS, WORLD, type WorldNpc } from '../data/world'
import { COLS, ROWS, TILE, blockedAtWorld, nearestTarget, setActiveDay, warpAt, type Target } from '../game/worldEngine'
import { drawWorld } from '../game/worldRender'
import { CAST, MISSION_DONE, PREMISE, PREMISE_TITLE, SENTENCES } from '../data/saygoodbye'
import {
  FINAL_DAY, TIMER_SEC, WRONG_PENALTY, getProg, getSayLang, keyForDay, keyOf, learnedCount,
  loadToday, newToday, quizOptions, saveProg, saveToday, sentenceComplete, todayStr, type SayToday
} from '../lib/sayState'
import { SFX } from '../lib/audio'
import { setHurry } from '../lib/music'
import TouchControls from './TouchControls'
import { Overlay } from './overlays'

type TDialog =
  | { kind: 'talk'; spk: string }
  | { kind: 'quiz'; spk: string; options: Array<{ label: string; correct: boolean }>; picked?: number }
  | { kind: 'reveal'; spk: string }
  | { kind: 'cat' }

interface Props {
  onHome: () => void
  onStories: () => void
  showToast: (m: string) => void
  musicOn: boolean
  onToggleMusic: () => void
}

/* mixed-language sentence with ruby text: script on the main line,
   reading (romaji / pinyin) small above. Learned chunks flip to gold
   English but keep their tiny native script overhead; tap to peek. */
function Sentence({ spk, learned, onHint }: { spk: string; learned: Set<string>; onHint: (m: string) => void }) {
  const lang = getSayLang()
  const sl = SENTENCES[lang][spk]

  /* fully learned: both languages in their OWN word order — the native
     sentence up top, clean natural English in gold below. Tap to peek. */
  if (sentenceComplete(spk, learned)) {
    const cjk = lang === 'ja' || lang === 'zh'
    let native = ''
    for (const c of sl.chunks) {
      const piece = c.t !== undefined ? c.t : (c.s || c.n || '')
      if (!cjk && native && !/\s$/.test(native) && !/^[\s,.!?;:…、。！？」』)]/.test(piece)) native += ' '
      native += piece
    }
    const reading = cjk ? sl.chunks.filter(c => c.t === undefined).map(c => c.n).join(' ') : ''
    const en = CAST.find(c => c.id === spk)!.sentenceEn
    return (
      <span className="ruby-final" onPointerDown={e => { e.preventDefault(); onHint(reading ? `${native}（${reading}）` : native) }}>
        <span className="rf-native">{native}</span>
        <span className="rf-en">{en}</span>
      </span>
    )
  }

  return (
    <span className="rubyline">
      {sl.chunks.map((c, i) => {
        if (c.t !== undefined) return (
          <span key={i} className="chunk glue"><span className="rd">{'\u00A0'}</span><span className="sc">{c.t}</span></span>
        )
        const k = sl.keys.find(k => k.d === c.d)!
        const isL = learned.has(keyOf(spk, c.d!))
        if (!isL) return (
          <span key={i} className="chunk">
            <span className="rd">{c.s ? c.n : '\u00A0'}</span>
            <span className="sc">{c.s || c.n}</span>
          </span>
        )
        return (
          <span key={i} className="chunk gold"
            onPointerDown={e => { e.preventDefault(); onHint(`${c.e || k.en} = ${c.n}${c.s ? `（${c.s}）` : ''}`) }}>
            <span className="rd">{c.s || '\u00A0'}</span>
            <span className="sc">{c.e || k.en}</span>
          </span>
        )
      })}
    </span>
  )
}

export default function TownScreen({ onHome, onStories, showToast, musicOn, onToggleMusic }: Props) {
  const todayRef = useRef<SayToday>(loadToday() || freshToday())
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const playerRef = useRef<PlayerState>({ x: START_POS.x * TILE, y: START_POS.y * TILE, dir: 'up', frame: 0, ftick: 0, moving: false })
  const keysRef = useRef<Record<string, boolean>>({})
  const joyRef = useRef({ dx: 0, dy: 0 })
  const sparklesRef = useRef<Sparkle[]>([])
  const targetRef = useRef<Target | null>(null)
  const nearActiveRef = useRef(false)
  const overlayRef = useRef(true)
  const wrapRef = useRef<HTMLDivElement>(null)
  const failFired = useRef(false)

  const [phase, setPhase] = useState<SayToday['phase']>(todayRef.current.phase)
  const [timeLeft, setTimeLeft] = useState<number>(TIMER_SEC)
  const timeLeftRef = useRef(timeLeft)
  const [dialog, setDialog] = useState<TDialog | null>(null)
  const [nearActive, setNearActive] = useState(false)
  const [learned, setLearned] = useState<Set<string>>(() => new Set(getProg().learned))
  const [flipped, setFlipped] = useState<Set<string>>(new Set())
  const [, setTick] = useState(0)
  const bump = () => setTick(t => t + 1)

  const T = todayRef.current
  const day = T.day
  overlayRef.current = phase !== 'run' || !!dialog

  function freshToday(): SayToday {
    const t = newToday(getProg().day)
    saveToday(t)
    return t
  }
  function save() { saveToday(todayRef.current) }

  /* canvas sizing (fills the viewport, 4:3) */
  useEffect(() => {
    const size = () => {
      const wrap = wrapRef.current, cv = canvasRef.current
      if (!wrap || !cv) return
      const rect = wrap.getBoundingClientRect()
      const availH = Math.max(200, window.innerHeight - rect.top - 44)
      const w = Math.max(280, Math.min(wrap.clientWidth, availH * 4 / 3))
      cv.style.width = `${Math.floor(w)}px`
    }
    size()
    addEventListener('resize', size)
    const id = window.setInterval(size, 500)
    return () => { removeEventListener('resize', size); window.clearInterval(id) }
  }, [])

  /* ---------------- interactions ---------------- */
  function interact() {
    if (overlayRef.current) return
    const target = targetRef.current
    if (!target || target.kind !== 'npc') return
    const id = target.npc.id
    if (id === 'cat') { setDialog({ kind: 'cat' }); return }
    if (!CAST.some(c => c.id === id)) return
    setDialog({ kind: 'talk', spk: id })
  }
  const interactRef = useRef(interact)
  interactRef.current = interact

  function startQuiz(spk: string) {
    setDialog({ kind: 'quiz', spk, options: quizOptions(spk, day) })
  }

  function pickOption(i: number) {
    const d = dialog
    if (!d || d.kind !== 'quiz' || d.picked !== undefined) return
    setDialog({ ...d, picked: i })
    const t = todayRef.current
    if (d.options[i].correct) {
      SFX.correct()
      const k = keyOf(d.spk, day)
      const prog = getProg()
      if (!prog.learned.includes(k)) prog.learned.push(k)
      saveProg(prog)
      setLearned(new Set(prog.learned))
      t.gained.push(k)
      t.done.push(d.spk)
      save()
      const tgt = targetRef.current
      if (tgt) sparklesRef.current.push(...Array.from({ length: 7 }, () => ({
        x: tgt.cx - 6 + Math.random() * 12, y: tgt.cy - 8 + Math.random() * 8, t: Math.floor(Math.random() * 10)
      })))
      setTimeout(() => {
        setDialog({ kind: 'reveal', spk: d.spk })
        if (t.done.length >= CAST.length) setTimeout(() => finishDay(), 900)
      }, 600)
    } else {
      SFX.wrong()
      t.penaltySec += WRONG_PENALTY
      save()
      const k = keyForDay(d.spk, day)
      setTimeout(() => {
        setDialog(null)
        showToast(`Not quite — ${WRONG_PENALTY} seconds lost! 「${k.q}」= ?`)
      }, 900)
    }
  }

  function doQuest(spk: string) {
    const t = todayRef.current
    if (t.done.includes(spk)) return
    SFX.correct()
    t.done.push(spk)
    save()
    bump()
    const tgt = targetRef.current
    if (tgt) sparklesRef.current.push(...Array.from({ length: 9 }, () => ({
      x: tgt.cx - 6 + Math.random() * 12, y: tgt.cy - 8 + Math.random() * 8, t: Math.floor(Math.random() * 10)
    })))
    setDialog(null)
    const c = CAST.find(c => c.id === spk)!
    showToast(`✓ ${c.questLabel} — quest complete!`)
    if (t.done.length >= CAST.length) setTimeout(() => finishSeason(), 900)
  }

  function finishDay() {
    const prog = getProg()
    const ts = todayStr()
    if (prog.lastDone !== ts) {
      const y = new Date(); y.setDate(y.getDate() - 1)
      prog.streak = (prog.lastDone === y.toISOString().slice(0, 10)) ? prog.streak + 1 : 1
      prog.lastDone = ts
    }
    prog.day = Math.min(FINAL_DAY, prog.day + 1)
    saveProg(prog)
    todayRef.current.phase = 'done'
    save()
    SFX.fanfare()
    setPhase('done')
  }
  const finishDayRef = useRef(finishDay)
  finishDayRef.current = finishDay

  function finishSeason() {
    const prog = getProg()
    prog.seasons += 1
    prog.day = 1
    prog.learned = []          // a fresh loop: the town forgets, politely
    saveProg(prog)
    todayRef.current.phase = 'season'
    save()
    SFX.fanfare()
    setPhase('season')
  }

  function failDay() {
    const t = todayRef.current
    if (t.phase === 'failed') return
    const prog = getProg()
    prog.learned = prog.learned.filter(k => !t.gained.includes(k))
    saveProg(prog)
    setLearned(new Set(prog.learned))
    t.phase = 'failed'
    save()
    SFX.wrong()
    setDialog(null)
    setPhase('failed')
  }
  const failDayRef = useRef(failDay)
  failDayRef.current = failDay

  function retryDay() {
    setFlipped(new Set())
    todayRef.current = freshToday()
    failFired.current = false
    playerRef.current = { x: START_POS.x * TILE, y: START_POS.y * TILE, dir: 'up', frame: 0, ftick: 0, moving: false }
    setDialog(null)
    setTimeLeft(TIMER_SEC)
    setPhase('brief')
    bump()
  }

  function startNextDay() {
    setFlipped(new Set())
    todayRef.current = freshToday()
    failFired.current = false
    playerRef.current = { x: START_POS.x * TILE, y: START_POS.y * TILE, dir: 'up', frame: 0, ftick: 0, moving: false }
    setDialog(null)
    setTimeLeft(TIMER_SEC)
    setPhase('brief')
    bump()
  }

  /* ---------------- input ---------------- */
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (k === 'escape') { setDialog(null); return }
      if (overlayRef.current) return
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) {
        keysRef.current[k] = true
        e.preventDefault()
      }
      if (k === 'e' || k === ' ' || k === 'enter') { e.preventDefault(); interactRef.current() }
    }
    const up = (e: KeyboardEvent) => { keysRef.current[e.key.toLowerCase()] = false }
    addEventListener('keydown', down)
    addEventListener('keyup', up)
    return () => { removeEventListener('keydown', down); removeEventListener('keyup', up) }
  }, [])

  /* ---------------- game loop ---------------- */
  useEffect(() => {
    const ctx = canvasRef.current!.getContext('2d')!
    ctx.imageSmoothingEnabled = false
    let raf = 0

    const step = () => {
      const player = playerRef.current
      const loc = WORLD[START_LOC]
      setActiveDay(todayRef.current.day)

      if (!overlayRef.current) {
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
          if (!feet(nx, player.y).some(([a, b]) => blockedAtWorld(loc, a, b))) player.x = nx
          if (!feet(player.x, ny).some(([a, b]) => blockedAtWorld(loc, a, b))) player.y = ny
          player.ftick++
          if (player.ftick > 9) { player.frame = 1 - player.frame; player.ftick = 0 }
          warpAt(loc, player.x, player.y + 5)  // single-screen town: no warps, kept for future
        } else {
          player.frame = 0
        }
      } else {
        player.moving = false
      }

      targetRef.current = nearestTarget(loc, playerRef.current.x, playerRef.current.y)
      const active = !!targetRef.current && !overlayRef.current
      if (active !== nearActiveRef.current) {
        nearActiveRef.current = active
        setNearActive(active)
      }

      sparklesRef.current = sparklesRef.current.filter(s => { s.t++; s.y -= 0.35; return s.t < 40 })

      // the day clock
      const t = todayRef.current
      if (t.phase === 'run' && t.startedAt) {
        const remaining = TIMER_SEC - (Date.now() - t.startedAt) / 1000 - t.penaltySec
        const shown = Math.max(0, Math.ceil(remaining))
        if (shown !== timeLeftRef.current) { timeLeftRef.current = shown; setTimeLeft(shown) }
        setHurry(remaining > 0 && remaining < 60)
        if (remaining <= 0 && !failFired.current) {
          failFired.current = true
          failDayRef.current()
        }
      }

      // ! markers over speakers still waiting today
      const pending = new Set<string>()
      for (const c of CAST) if (!t.done.includes(c.id)) pending.add(c.id)

      drawWorld(ctx, {
        loc, player: playerRef.current, sparkles: sparklesRef.current,
        target: targetRef.current, overlayOpen: overlayRef.current,
        questTargets: pending, night: false
      })
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => { cancelAnimationFrame(raf); setHurry(false) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ---------------- render ---------------- */
  const prog = getProg()
  const doneCount = T.done.length

  return (
    <div className="game-col">
      <div className="hud">
        <div className="title-block">
          <div className="day-title">{PREMISE_TITLE}</div>
          <div className="day-sub">Day {day} / {FINAL_DAY} · {day < FINAL_DAY ? `words ${doneCount}/8` : `quests ${doneCount}/8`} · season {prog.seasons + 1}</div>
        </div>
        <div className="word-dots">
          {CAST.map(c => {
            const n = learnedCount(c.id, learned)
            const doneToday = T.done.includes(c.id)
            const full = sentenceComplete(c.id, learned)
            return (
              <div key={c.id} className={'wdot' + (doneToday ? ' done' : '')}
                title={`${c.name} — ${day < FINAL_DAY ? `${n}/8 words` : c.questLabel}`}
                onClick={() => showToast(`${c.name}: ${day < FINAL_DAY ? `${n}/8 words learned` : (doneToday ? `✓ ${c.questLabel}` : c.questLabel)}`)}>
                {day >= FINAL_DAY ? (doneToday ? '✓' : '!') : (full ? '✓' : n)}
              </div>
            )
          })}
        </div>
        <div className="hud-btns">
          {phase === 'run' && (
            <span className={'streak-chip timer' + (timeLeft < 60 ? ' low' : '')}>
              ⏱ {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
            </span>
          )}
          <span className="streak-chip">🔥 {prog.streak}</span>
          <button className="btn small" onClick={onToggleMusic}>{musicOn ? '🎵' : '🔇'}</button>
          <button className="btn small" onClick={onHome}>⌂ Home</button>
        </div>
      </div>

      <div className="stage-wrap" ref={wrapRef}>
        <canvas ref={canvasRef} className="stage" width={COLS * TILE * 4} height={ROWS * TILE * 4} />
        <div className="scene-chip">{WORLD[START_LOC].label}</div>

        {/* -------- day brief -------- */}
        {phase === 'brief' && (
          <Overlay>
            <div className="panel wide">
              <div className="corner-seal">{day >= FINAL_DAY ? '門' : '学'}</div>
              <h2>{day === 1 ? PREMISE_TITLE : day >= FINAL_DAY ? `Day ${FINAL_DAY} — the last loop` : `Day ${day}`}</h2>
              {day === 1 && <div className="day-intro">{PREMISE}</div>}
              <div className="psub">
                {day < FINAL_DAY
                  ? 'Study these few words to prepare yourself before you start the day.'
                  : 'Every sentence is in English now. Do all 8 courtesies — then the gate opens.'}
              </div>
              {day < FINAL_DAY && (
                <div className="cards-grid">
                  {CAST.map(c => {
                    const k = keyForDay(c.id, day)
                    const face = k.hint || k.q
                    const isF = flipped.has(c.id)
                    return (
                      <div key={c.id} className={'flip-card' + (isF ? ' flipped' : '')}
                        onClick={() => setFlipped(f => { const n = new Set(f); if (n.has(c.id)) n.delete(c.id); else n.add(c.id); return n })}>
                        <div className="flip-inner">
                          <div className="flip-face front">
                            <div className="fc-ja" style={face.length > 7 ? { fontSize: 14 } : undefined}>{face}</div>
                            {k.hint && <div className="fc-reading">{k.q}</div>}
                          </div>
                          <div className="flip-face back">
                            <div className="fc-en">{k.en}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
              <div className="panel-actions">
                <button className="btn primary" onClick={() => {
                  T.phase = 'run'
                  if (!T.startedAt) T.startedAt = Date.now()
                  save()
                  setPhase('run')
                }}>Start the day — {Math.floor(TIMER_SEC / 60)}:{String(TIMER_SEC % 60).padStart(2, '0')} ▸</button>
              </div>
            </div>
          </Overlay>
        )}

        {/* -------- talk -------- */}
        {dialog?.kind === 'talk' && (() => {
          const c = CAST.find(x => x.id === dialog.spk)!
          const sl = SENTENCES[getSayLang()][c.id]
          const doneToday = T.done.includes(c.id)
          const full = sentenceComplete(c.id, learned)
          return (
            <Overlay>
              <div className="panel">
                <div className="corner-seal">話</div>
                <div className="npc-name">{c.name} <span style={{ opacity: .6, fontSize: 12 }}>· {c.role}</span></div>
                <div className="npc-line">
                  <Sentence spk={c.id} learned={learned} onHint={showToast} />
                </div>
                {full && sl.post && <div className="note">{sl.post}</div>}
                <div className="panel-actions">
                  {day < FINAL_DAY && !doneToday && (
                    <button className="btn primary" onClick={() => startQuiz(c.id)}>
                      Today's word: 「{keyForDay(c.id, day).hint || keyForDay(c.id, day).q}」 ▸
                    </button>
                  )}
                  {day >= FINAL_DAY && !doneToday && (
                    c.id === 'kid' && T.done.length < CAST.length - 1 ? (
                      <button className="btn" disabled>Say bye-bye to everyone else first…</button>
                    ) : (
                      <button className="btn primary" onClick={() => doQuest(c.id)}>{c.questLabel} ▸</button>
                    )
                  )}
                  <button className="btn" onClick={() => setDialog(null)}>Close</button>
                </div>
              </div>
            </Overlay>
          )
        })()}

        {/* -------- quiz -------- */}
        {dialog?.kind === 'quiz' && (() => {
          const k = keyForDay(dialog.spk, day)
          return (
            <Overlay>
              <div className={'panel' + (dialog.picked !== undefined && !dialog.options[dialog.picked].correct ? ' shake' : '')}>
                <div className="corner-seal">問</div>
                <div className="quiz-q">What does this mean in English?</div>
                <div className="word-big" style={{ fontSize: (k.hint || k.q).length > 9 ? 22 : 30 }}>{k.hint || k.q}</div>
                {k.hint && <div className="word-reading">{k.q}</div>}
                <div className="opts">
                  {dialog.options.map((o, i) => {
                    let cls = 'opt'
                    if (dialog.picked === i) cls += o.correct ? ' correct' : ' wrong'
                    return (
                      <button key={i} className={cls} disabled={dialog.picked !== undefined} onClick={() => pickOption(i)}>
                        {o.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </Overlay>
          )
        })()}

        {/* -------- reveal -------- */}
        {dialog?.kind === 'reveal' && (() => {
          const k = keyForDay(dialog.spk, day)
          return (
            <Overlay>
              <div className="panel">
                <div className="corner-seal">正</div>
                <div className="result-banner good">Correct!</div>
                <div className="word-big" style={{ fontSize: (k.hint || k.q).length > 9 ? 22 : 30 }}>{k.hint || k.q}</div>
                {k.hint && <div className="word-reading">{k.q}</div>}
                <div className="reveal-meaning">{k.en}</div>
                <div className="note" style={{ textAlign: 'center' }}>
                  From now on this shows in English everywhere. Tap any gold words to peek back.
                </div>
                <div className="panel-actions">
                  <button className="btn" onClick={() => setDialog(null)}>Close</button>
                </div>
              </div>
            </Overlay>
          )
        })()}

        {/* -------- the cat -------- */}
        {dialog?.kind === 'cat' && (
          <Overlay>
            <div className="panel">
              <div className="corner-seal">猫</div>
              <div className="npc-name">???</div>
              <div className="npc-line">…mrrp. (It looks extremely findable. The Cat Lady would love to know.)</div>
              <div className="panel-actions">
                <button className="btn" onClick={() => setDialog(null)}>Leave it be</button>
              </div>
            </div>
          </Overlay>
        )}

        {/* -------- day failed -------- */}
        {phase === 'failed' && (
          <Overlay>
            <div className="panel">
              <div className="corner-seal">敗</div>
              <h2>Time's up — the loop resets…</h2>
              <div className="psub">
                The town sighs kindly. Today's words slipped away — the same day starts over, same words, fresh clock.
              </div>
              <div className="panel-actions">
                <button className="btn primary" onClick={retryDay}>Wake up again ▸</button>
                <button className="btn" onClick={onHome}>⌂ Home</button>
              </div>
            </div>
          </Overlay>
        )}

        {/* -------- day complete -------- */}
        {phase === 'done' && (
          <Overlay>
            <div className="panel">
              <div className="corner-seal">完</div>
              <h2>Day {day} complete!</h2>
              <div className="psub">
                {day < 8
                  ? `Eight more pieces of the town make sense now. ${8 - day} learning day${8 - day > 1 ? 's' : ''} to go, then the courtesies.`
                  : 'Every sentence is fully English now. Tomorrow: do all 8 courtesies, and the gate opens.'}
              </div>
              <div className="recap-list">
                {CAST.map(c => {
                  const k = keyForDay(c.id, day)
                  return (
                    <div className="recap-item" key={c.id}>
                      <span className="rw" style={{ fontSize: (k.hint || k.q).length > 8 ? 12 : 15 }}>{k.hint || k.q}</span>
                      <span className="rr">{k.hint ? k.q : ''}</span>
                      <span className="rm">{k.en}</span>
                    </div>
                  )
                })}
              </div>
              <div className="panel-actions">
                <button className="btn" onClick={() => { T.phase = 'run'; save(); setPhase('run') }}>Wander a little</button>
                <button className="btn primary" onClick={startNextDay}>Start Day {Math.min(FINAL_DAY, day + 1)} ▸</button>
              </div>
            </div>
          </Overlay>
        )}

        {/* -------- season complete -------- */}
        {phase === 'season' && (
          <Overlay>
            <div className="panel">
              <div className="corner-seal">門</div>
              <h2>The gate opens. 「さようなら！」</h2>
              <div className="psub">{MISSION_DONE}</div>
              <div className="psub">Seasons completed: <b>{getProg().seasons}</b> · 64 words, one decent tourist.</div>
              <div className="panel-actions">
                <button className="btn primary" onClick={onStories}>Go to Story Page ▸</button>
                <button className="btn" onClick={onHome}>⌂ Home</button>
              </div>
            </div>
          </Overlay>
        )}
      </div>

      <div className="controls-hint">
        <b>W A S D</b> move · <b>E</b> talk · <b>Esc</b> close — the townsfolk with <span style={{ color: 'var(--vermillion)' }}>!</span> are waiting
      </div>

      <TouchControls joyRef={joyRef} nearActive={nearActive} onInteract={() => interactRef.current()} />
    </div>
  )
}
