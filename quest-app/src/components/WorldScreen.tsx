import { useEffect, useRef, useState } from 'react'
import type { PlayerState, Seg, Sparkle } from '../types'
import { BANK, getLang, wordById } from '../lib/bank'
import { NPCS_BY_ID, START_LOC, START_POS, WORLD, type WorldNpc } from '../data/world'
import {
  COLS, ROWS, TILE, QUEST_COOLDOWN_MS, RETRY_GRACE_DAYS, WRONG_TIME_PENALTY,
  blockedAtWorld, buildOptions, currentStage, dealToday, nearestTarget, npcNameSegs, questActive, questDesc, questLoc, questSpec, questWord, setActiveDay, warpAt,
  type McqOption, type Target
} from '../game/worldEngine'
import { episodeFor } from '../data/episodes'
import { lineSegs } from '../lib/bank'
import { drawWorld } from '../game/worldRender'
import {
  getWorldProg, loadWorldToday, saveWorldProg, saveWorldToday,
  type WorldToday
} from '../lib/worldStorage'
import { todayStr } from '../lib/storage'
import { SFX } from '../lib/audio'
import { setHurry } from '../lib/music'
import { generateDayFlavor } from '../lib/worldHaiku'
import { AMBIENT_GEN } from '../data/ambientGen'
import TouchControls from './TouchControls'
import SegText from './SegText'
import { Overlay } from './overlays'

type WDialog =
  | { kind: 'ambient'; npc: WorldNpc; segs: Seg[] }
  | { kind: 'mcq'; questIdx: number; speaker: Seg[] | null; prompt: Seg[]; options: McqOption[]; picked?: number }
  | { kind: 'reveal'; wordId: number; reunion?: boolean }

interface Props {
  onHome: () => void
  showToast: (m: string) => void
  musicOn: boolean
  onToggleMusic: () => void
}

export default function WorldScreen({ onHome, showToast, musicOn, onToggleMusic }: Props) {
  const todayRef = useRef<WorldToday>(loadWorldToday() || persistDeal())
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const playerRef = useRef<PlayerState>({ x: START_POS.x * TILE, y: START_POS.y * TILE, dir: 'down', frame: 0, ftick: 0, moving: false })
  const locRef = useRef<string>(START_LOC)
  const keysRef = useRef<Record<string, boolean>>({})
  const joyRef = useRef({ dx: 0, dy: 0 })
  const sparklesRef = useRef<Sparkle[]>([])
  const targetRef = useRef<Target | null>(null)
  const nearActiveRef = useRef(false)
  const overlayRef = useRef(true)
  const ambientIdx = useRef<Record<string, number>>({})

  const [phase, setPhase] = useState<'learn' | 'explore' | 'done' | 'failed'>(todayRef.current.phase)
  const [timeLeft, setTimeLeft] = useState<number>(todayRef.current.timerSec ?? 0)
  const timeLeftRef = useRef(timeLeft)
  const failFired = useRef(todayRef.current.phase === 'failed')
  const spareSec = useRef(0)
  const [flipped, setFlipped] = useState<Set<number>>(new Set())
  const [dialog, setDialog] = useState<WDialog | null>(null)
  const [questsOpen, setQuestsOpen] = useState(false)
  const [locId, setLocId] = useState(START_LOC)
  const [beat, setBeat] = useState<string | null>(null)
  const beatRef = useRef<string | null>(null)
  beatRef.current = beat
  const beatShownAt = useRef(0)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [nearActive, setNearActive] = useState(false)
  const [learned, setLearned] = useState<Set<number>>(() => new Set(getWorldProg().learnedIds))
  const [, setTick] = useState(0)
  const bump = () => setTick(t => t + 1)

  const T = todayRef.current
  overlayRef.current = phase !== 'explore' || !!dialog || questsOpen || !!beat

  function openBeat(msg: string) {
    beatShownAt.current = Date.now()
    setBeat(msg)
  }
  function closeBeat() {
    // reading the story beat costs no clock time
    const t = todayRef.current
    if (t.timerSec && t.startedAt && beatShownAt.current) {
      t.penaltySec = (t.penaltySec || 0) - (Date.now() - beatShownAt.current) / 1000
      save()
    }
    beatShownAt.current = 0
    setBeat(null)
  }
  const closeBeatRef = useRef(closeBeat)
  closeBeatRef.current = closeBeat

  /* size the canvas to fill whatever space the viewport actually offers */
  useEffect(() => {
    const size = () => {
      const wrap = wrapRef.current
      const cv = canvasRef.current
      if (!wrap || !cv) return
      const rect = wrap.getBoundingClientRect()
      const availH = Math.max(200, window.innerHeight - rect.top - 44)
      const availW = wrap.clientWidth
      const w = Math.max(280, Math.min(availW, availH * 4 / 3))
      cv.style.width = `${Math.floor(w)}px`
    }
    size()
    addEventListener('resize', size)
    const id = window.setInterval(size, 500)   // catches HUD wrap/reflow changes
    return () => { removeEventListener('resize', size); window.clearInterval(id) }
  }, [])

  function persistDeal(): WorldToday {
    const t = dealToday()
    saveWorldToday(t)
    return t
  }

  function save() {
    saveWorldToday(todayRef.current)
  }

  /* pending quest lookup for a target */
  function pendingQuestFor(target: Target): number {
    return T.quests.findIndex(q => {
      if (!questActive(q, T.quests)) return false
      const spec = questSpec(q)
      if (target.kind === 'npc') {
        if (spec.type === 'talk') return spec.npc === target.npc.id
        if (spec.type === 'buy') return target.npc.id === 'shopkeeper'
        return false
      }
      return spec.type === 'inspect' && spec.obj === target.obj.id && spec.loc === locRef.current
    })
  }

  function questTargetIds(): Set<string> {
    const ids = new Set<string>()
    for (const q of todayRef.current.quests) {   // read the ref: the RAF loop holds a stale closure
      if (!questActive(q, todayRef.current.quests)) continue
      const spec = questSpec(q)
      if (spec.type === 'talk') ids.add(spec.npc)
      else if (spec.type === 'buy') ids.add('shopkeeper')
      else if (spec.type === 'inspect') ids.add(spec.obj)
    }
    return ids
  }

  function interact() {
    if (overlayRef.current) return
    const target = targetRef.current
    if (!target) return
    const qi = pendingQuestFor(target)
    if (qi >= 0) {
      const q = T.quests[qi]
      if (Date.now() < q.cooldownUntil) {
        const s = Math.ceil((q.cooldownUntil - Date.now()) / 1000)
        showToast(`Think it over… try again in ${s}s. (Check 📜 for a hint!)`)
        return
      }
      const w = questWord(q)
      const spec = questSpec(q)
      const speaker = target.kind === 'npc' ? npcNameSegs(target.npc) : null
      const prompt: Seg[] = spec.type === 'do' ? [] : spec.ask
      setDialog({ kind: 'mcq', questIdx: qi, speaker, prompt, options: buildOptions(w, T.wordIds) })
      return
    }
    if (target.kind === 'npc') {
      // episode days: this episode's lines rule the town; otherwise flavor -> baseline -> generated pool
      const ep = episodeFor(T.dayNumber)
      const epLines = ep?.npcLines[target.npc.id]
      // lines can be stage-gated with an "@N " prefix — no spoiling later beats
      const stageNow = currentStage(T.quests)
      const gated = (epLines || [])
        .map(l => { const m = l.match(/^@(\d+)\s+/); return m ? { min: +m[1], text: l.slice(m[0].length) } : { min: 0, text: l } })
        .filter(l => stageNow >= l.min)
        .map(l => lineSegs(l.text))
      const pool = gated.length
        ? gated                                       // episode days: on-story, stage-appropriate
        : ep || getLang() !== 'ja'
          ? target.npc.ambient.map(lineSegs)          // persona baseline (translates per language)
          : [
              ...(T.flavor?.npcLines?.[target.npc.id] || []),
              ...target.npc.ambient.map(lineSegs),
              ...(AMBIENT_GEN[target.npc.id] || [])   // generated pool is ja-only
            ]
      const i = (ambientIdx.current[target.npc.id] || 0) % pool.length
      ambientIdx.current[target.npc.id] = i + 1
      setDialog({ kind: 'ambient', npc: target.npc, segs: pool[i] })
    } else {
      // already-learned world word? offer a quick review peek
      const bw = BANK.find(x => {
        const s = x.quest
        return s.type === 'inspect' && s.obj === target.obj.id
      })
      if (bw && learned.has(bw.id)) setDialog({ kind: 'reveal', wordId: bw.id, reunion: true })
      else showToast('Nothing new here.')
    }
  }
  const interactRef = useRef(interact)
  interactRef.current = interact

  const lastToastStage = useRef(-1)
  function completeQuest(qi: number) {
    const t = todayRef.current            // ALWAYS the live day — this fn is called from the RAF loop too
    const q = t.quests[qi]
    if (!q || q.done) return
    q.done = true
    const prog = getWorldProg()
    if (!prog.learnedIds.includes(q.wordId)) prog.learnedIds.push(q.wordId)
    saveWorldProg(prog)
    setLearned(new Set(prog.learnedIds))
    save()
    bump()
    if (t.quests.every(x => x.done)) {
      setTimeout(() => finishDayRef.current(), 1200)
      return
    }
    // quest-chain story beat: announce the newly unlocked stage
    const stage = currentStage(t.quests)
    const toastMsg = Number.isFinite(stage) ? episodeFor(t.dayNumber)?.stageToasts?.[stage] : undefined
    if (toastMsg && lastToastStage.current !== stage) {
      lastToastStage.current = stage
      setTimeout(() => openBeat(toastMsg), 1300)
    }
  }
  const completeQuestRef = useRef(completeQuest)
  completeQuestRef.current = completeQuest

  function finishDay() {
    const t0 = todayRef.current
    if (t0.timerSec && t0.startedAt) {
      spareSec.current = Math.max(0, Math.ceil(t0.timerSec - (Date.now() - t0.startedAt) / 1000 - (t0.penaltySec || 0)))
    }
    const prog = getWorldProg()
    const t = todayStr()
    if (prog.lastDone !== t) {
      const y = new Date(); y.setDate(y.getDate() - 1)
      prog.streak = (prog.lastDone === y.toISOString().slice(0, 10)) ? prog.streak + 1 : 1
      prog.lastDone = t
      prog.daysDone++
    }
    prog.dayNumber++
    saveWorldProg(prog)
    todayRef.current.phase = 'done'
    save()
    SFX.fanfare()
    setPhase('done')
  }
  const finishDayRef = useRef(finishDay)
  finishDayRef.current = finishDay

  function failDay() {
    const t = todayRef.current
    if (t.phase === 'failed') return
    // the day is lost: words completed during the failed run are un-learned,
    // so the episode re-deals in full instead of substituting bank quests
    const prog = getWorldProg()
    const todaySet = new Set(t.wordIds)
    const before = prog.learnedIds.length
    prog.learnedIds = prog.learnedIds.filter(id => !todaySet.has(id))
    if (prog.learnedIds.length !== before) {
      saveWorldProg(prog)
      setLearned(new Set(prog.learnedIds))
    }
    t.phase = 'failed'
    save()
    SFX.wrong()
    setDialog(null)
    setQuestsOpen(false)
    setPhase('failed')
  }
  const failDayRef = useRef(failDay)
  failDayRef.current = failDay

  function retryDay() {
    todayRef.current = persistDeal()
    failFired.current = false
    lastToastStage.current = -1
    playerRef.current = { x: START_POS.x * TILE, y: START_POS.y * TILE, dir: 'down', frame: 0, ftick: 0, moving: false }
    locRef.current = START_LOC
    setLocId(START_LOC)
    setFlipped(new Set())
    setDialog(null)
    setTimeLeft(todayRef.current.timerSec ?? 0)
    setPhase('learn')
    bump()
  }

  function pickOption(i: number) {
    const d = dialog
    if (!d || d.kind !== 'mcq' || d.picked !== undefined) return
    const q = T.quests[d.questIdx]
    const w = questWord(q)
    setDialog({ ...d, picked: i })
    if (d.options[i].correct) {
      SFX.correct()
      const tgt = targetRef.current
      if (tgt) sparklesRef.current.push(...Array.from({ length: 7 }, () => ({
        x: tgt.cx - 6 + Math.random() * 12, y: tgt.cy - 8 + Math.random() * 8, t: Math.floor(Math.random() * 10)
      })))
      completeQuest(d.questIdx)
      setTimeout(() => setDialog({ kind: 'reveal', wordId: w.id }), 600)
    } else {
      SFX.wrong()
      const t = todayRef.current
      if (t.timerSec && t.startedAt) {
        // timed episode: burn clock instead of locking the quest
        t.penaltySec = (t.penaltySec || 0) + WRONG_TIME_PENALTY
        save()
        setTimeout(() => {
          setDialog(null)
          showToast(`Not quite — ${WRONG_TIME_PENALTY} seconds lost! ${w.en} = ?`)
        }, 900)
      } else {
        q.cooldownUntil = Date.now() + QUEST_COOLDOWN_MS
        save()
        setTimeout(() => {
          setDialog(null)
          showToast(`Not quite… 15s to think it over. ${w.en} = ?`)
        }, 900)
      }
    }
  }

  /* optional daily flavor: fresh NPC lines + a day intro (needs an API key; fails silent) */
  const flavorBusy = useRef(false)
  function fetchFlavor() {
    if (getLang() !== 'ja') return
    const t = todayRef.current
    if (t.flavor || !t.wordIds.length || flavorBusy.current) return
    const npcIds = new Set<string>()
    for (const q of t.quests) {
      const spec = questSpec(q)
      if (spec.type === 'talk') npcIds.add(spec.npc)
      else if (spec.type === 'buy') npcIds.add('shopkeeper')
    }
    if (!npcIds.size) npcIds.add('mom')
    flavorBusy.current = true
    generateDayFlavor(t.dayNumber, t.wordIds, [...npcIds])
      .then(f => { if (f) { todayRef.current.flavor = f; save(); bump() } })
      .catch(e => console.warn('flavor generation skipped:', e))
      .finally(() => { flavorBusy.current = false })
  }
  useEffect(() => { fetchFlavor() }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  function startNextDay() {
    todayRef.current = persistDeal()
    playerRef.current = { x: START_POS.x * TILE, y: START_POS.y * TILE, dir: 'down', frame: 0, ftick: 0, moving: false }
    locRef.current = START_LOC
    setLocId(START_LOC)
    setFlipped(new Set())
    setDialog(null)
    setPhase(todayRef.current.wordIds.length ? 'learn' : 'done')
    fetchFlavor()
    bump()
  }

  /* ---------------- input ---------------- */
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (beatRef.current) {
        if (k === 'enter' || k === ' ' || k === 'e' || k === 'escape') {
          e.preventDefault()
          closeBeatRef.current()
        }
        return
      }
      if (k === 'escape') { setDialog(null); setQuestsOpen(false); return }
      if (overlayRef.current) return
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) {
        keysRef.current[k] = true
        e.preventDefault()
      }
      if (k === 'e' || k === ' ' || k === 'enter') { e.preventDefault(); interactRef.current() }
      if (k === 'q') { e.preventDefault(); setQuestsOpen(true) }
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
      const loc = WORLD[locRef.current]
      setActiveDay(todayRef.current.dayNumber)

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
          const beforeX = player.x, beforeY = player.y
          if (!feet(nx, player.y).some(([a, b]) => blockedAtWorld(loc, a, b))) player.x = nx
          if (!feet(player.x, ny).some(([a, b]) => blockedAtWorld(loc, a, b))) player.y = ny
          const movedDist = Math.abs(player.x - beforeX) + Math.abs(player.y - beforeY)

          // 'do' quests: distance accumulates in the right location
          if (movedDist > 0) {
            const quests = todayRef.current.quests   // via ref: this closure outlives day 1
            for (let i = 0; i < quests.length; i++) {
              const q = quests[i]
              if (!questActive(q, quests)) continue
              const spec = questSpec(q)
              if (spec.type === 'do' && spec.loc === locRef.current) {
                q.progress += movedDist
                if (q.progress >= spec.amount) {
                  SFX.correct()
                  showToast(`Quest complete! ${questWord(q).ja}（${questWord(q).reading}） = ${questWord(q).en}`)
                  completeQuestRef.current(i)
                }
              }
            }
          }

          player.ftick++
          if (player.ftick > 9) { player.frame = 1 - player.frame; player.ftick = 0 }

          // warp?
          const wp = warpAt(loc, player.x, player.y + 5)
          if (wp) {
            locRef.current = wp.to
            player.x = wp.tx * TILE + 8
            player.y = wp.ty * TILE + 8
            setLocId(wp.to)
          }
        } else {
          player.frame = 0
        }
      } else {
        player.moving = false
      }

      const locNow = WORLD[locRef.current]
      targetRef.current = nearestTarget(locNow, playerRef.current.x, playerRef.current.y)
      const active = !!targetRef.current && !overlayRef.current
      if (active !== nearActiveRef.current) {
        nearActiveRef.current = active
        setNearActive(active)
      }

      sparklesRef.current = sparklesRef.current.filter(s => { s.t++; s.y -= 0.35; return s.t < 40 })

      // episode clock
      const t = todayRef.current
      if (t.timerSec && t.startedAt && t.phase === 'explore') {
        const remaining = t.timerSec - (Date.now() - t.startedAt) / 1000 - (t.penaltySec || 0)
        const shown = Math.max(0, Math.ceil(remaining))
        if (shown !== timeLeftRef.current) { timeLeftRef.current = shown; setTimeLeft(shown) }
        setHurry(remaining > 0 && remaining < 60)
        if (remaining <= 0 && !failFired.current) {
          failFired.current = true
          failDayRef.current()
        }
      }

      drawWorld(ctx, {
        loc: locNow, player: playerRef.current, sparkles: sparklesRef.current,
        target: targetRef.current, overlayOpen: overlayRef.current,
        questTargets: questTargetIds(), night: !!t.night
      })
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => { cancelAnimationFrame(raf); setHurry(false) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ---------------- render ---------------- */
  const prog = getWorldProg()
  const doneCount = T.quests.filter(q => q.done).length
  const todayWords = T.wordIds.map(id => wordById(id)!)

  return (
    <div className="game-col">
      <div className="hud">
        <div className="title-block">
          <div className="day-title">{T.epTitle || `Day ${T.dayNumber} — 言葉クエスト`}</div>
          <div className="day-sub">Day {T.dayNumber} · quests {doneCount}/{T.quests.length}</div>
        </div>
        <div className="word-dots">
          {T.quests.map((q, i) => {
            const w = questWord(q)
            return (
              <div key={i} className={'wdot' + (q.done ? ' done' : '')}
                   style={q.done ? { cursor: 'pointer' } : undefined}
                   title={q.done ? `${w.ja} — ${w.en}` : '???'}
                   onClick={() => { if (q.done) showToast(`${w.ja}（${w.reading}） = ${w.en}`) }}>
                {q.done ? w.ja[0] : '?'}
              </div>
            )
          })}
        </div>
        <div className="hud-btns">
          {T.timerSec != null && phase === 'explore' && (
            <span className={'streak-chip timer' + (timeLeft < 60 ? ' low' : '')}>
              ⏱ {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
            </span>
          )}
          <span className="streak-chip">🔥 {prog.streak}</span>
          <button className="btn small" onClick={onToggleMusic}>{musicOn ? '🎵' : '🔇'}</button>
          <button className="btn small" onClick={() => setQuestsOpen(true)}>📜 Quests</button>
          <button className="btn small" onClick={onHome}>⌂ Home</button>
        </div>
      </div>

      <div className="stage-wrap" ref={wrapRef}>
        <canvas ref={canvasRef} className="stage" width={COLS * TILE} height={ROWS * TILE} />
        <div className="scene-chip">{WORLD[locId].label}</div>

        {/* -------- learn phase: flip cards -------- */}
        {phase === 'learn' && (
          <Overlay>
            <div className="panel wide">
              <div className="corner-seal">学</div>
              <h2>{T.epTitle || `Today's eight words — Day ${T.dayNumber}`}</h2>
              <div className="psub">
                Study the cards, read today's story — the clock only starts when you step outside.
                {T.timerSec ? ` You'll have ${Math.floor(T.timerSec / 60)}:${String(T.timerSec % 60).padStart(2, '0')} to complete all ${T.quests.length} quests.` : ''}
              </div>
              {T.story && (
                <div className="day-intro">
                  <SegText segs={lineSegs(T.story)} learned={learned} onHint={showToast} />
                </div>
              )}
              {!T.story && T.flavor && T.flavor.intro.length > 0 && (
                <div className="day-intro">
                  <SegText segs={T.flavor.intro} learned={learned} onHint={showToast} />
                </div>
              )}
              <div className="cards-grid">
                {todayWords.map(w => {
                  const isF = flipped.has(w.id)
                  return (
                    <div key={w.id} className={'flip-card' + (isF ? ' flipped' : '')}
                         onClick={() => setFlipped(f => { const n = new Set(f); if (n.has(w.id)) n.delete(w.id); else n.add(w.id); return n })}>
                      <div className="flip-inner">
                        <div className="flip-face front">
                          <div className="fc-ja" style={w.ja.length > 7 ? { fontSize: 15 } : undefined}>{w.ja}</div>
                          {w.reading !== w.ja && <div className="fc-reading">{w.reading}</div>}
                        </div>
                        <div className="flip-face back">
                          <div className="fc-en">{w.en}</div>
                          <div className="fc-romaji">{w.romaji !== w.ja ? w.romaji : ''}{w.pos !== 'noun' ? ` · ${w.pos}` : ''}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="panel-actions">
                <button className="btn primary" onClick={() => {
                  T.phase = 'explore'
                  if (T.timerSec && !T.startedAt) T.startedAt = Date.now()
                  save()
                  setPhase('explore')
                }}>
                  {T.timerSec ? `Start the clock — ${Math.floor((T.timerSec) / 60)}:${String(T.timerSec % 60).padStart(2, '0')} ▸` : 'Begin exploring ▸'}
                </button>
              </div>
            </div>
          </Overlay>
        )}

        {/* -------- dialogs -------- */}
        {dialog?.kind === 'ambient' && (
          <Overlay>
            <div className="panel">
              <div className="corner-seal">話</div>
              <div className="npc-name"><SegText segs={npcNameSegs(dialog.npc)} learned={learned} onHint={showToast} /></div>
              <div className="npc-line">
                <SegText segs={dialog.segs} learned={learned} onHint={showToast} />
              </div>
              <div className="panel-actions">
                <button className="btn" onClick={() => setDialog(null)}>Close</button>
              </div>
            </div>
          </Overlay>
        )}

        {dialog?.kind === 'mcq' && (() => {
          const q = T.quests[dialog.questIdx]
          const w = questWord(q)
          return (
            <Overlay>
              <div className={'panel' + (dialog.picked !== undefined && !dialog.options[dialog.picked].correct ? ' shake' : '')}>
                <div className="corner-seal">{w.ja[0]}</div>
                {dialog.speaker && <div className="npc-name"><SegText segs={dialog.speaker} learned={learned} onHint={showToast} /></div>}
                <div className="npc-line">
                  <SegText segs={dialog.prompt} learned={learned} onHint={showToast} />
                </div>
                <div className="quiz-q">
                  Say it in {({ ja: 'Japanese', zh: 'Chinese', de: 'German' } as const)[getLang()]} — “{w.en}” = ?
                </div>
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

        {dialog?.kind === 'reveal' && (() => {
          const w = wordById(dialog.wordId)!
          return (
            <Overlay>
              <div className="panel">
                <div className="corner-seal">{w.ja[0]}</div>
                <div className="result-banner good">{dialog.reunion ? '習得済み · You know this!' : '正解！ Correct!'}</div>
                <div className="word-big" style={w.ja.length > 7 ? { fontSize: 30 } : undefined}>{w.ja}</div>
                {w.reading !== w.ja && <div className="word-reading">{w.reading}</div>}
                {w.romaji !== w.reading && <div className="word-romaji">{w.romaji}</div>}
                <div className="reveal-meaning">
                  {w.en}
                  {w.pos !== 'noun' && <span style={{ fontSize: 12, color: '#999', fontFamily: "'Zen Maru Gothic',sans-serif" }}> · {w.pos}</span>}
                </div>
                {!dialog.reunion && (
                  <div className="note" style={{ textAlign: 'center' }}>
                    From now on, everyone will say <b>{w.ja}</b> — never “{w.en}” again. Tap any gold word for a hint.
                  </div>
                )}
                <div className="panel-actions">
                  <button className="btn" onClick={() => setDialog(null)}>Close</button>
                </div>
              </div>
            </Overlay>
          )
        })()}

        {/* -------- quest log -------- */}
        {questsOpen && (
          <Overlay>
            <div className="panel">
              <div className="corner-seal">録</div>
              <h2>Today's quests 任務</h2>
              <div className="recap-list">
                {T.quests.map((q, i) => {
                  const w = questWord(q)
                  const spec = questSpec(q)
                  const cooling = Date.now() < q.cooldownUntil
                  const locked = !q.done && !questActive(q, T.quests)
                  if (locked) {
                    return (
                      <div className="recap-item quest-row locked" key={i}>
                        <span className="q-status">?</span>
                        <span className="q-desc" style={{ color: '#999', fontStyle: 'italic' }}>
                          ??? — this story has more to tell…
                        </span>
                      </div>
                    )
                  }
                  return (
                    <div className="recap-item quest-row" key={i}>
                      <span className={'q-status' + (q.done ? ' done' : '')}>{q.done ? '✓' : (i + 1)}</span>
                      <span className="q-desc">
                        <SegText segs={questDesc(q)} learned={learned} onHint={showToast} />
                        {spec.type === 'do' && !q.done && (
                          <span className="q-progress">
                            <span className="q-bar"><span style={{ width: `${Math.min(100, (q.progress / spec.amount) * 100)}%` }} /></span>
                          </span>
                        )}
                      </span>
                      <span className="q-loc">{WORLD[questLoc(q)]?.label.split(' ')[0]}</span>
                      {cooling && <span className="rmiss">⏳</span>}
                    </div>
                  )
                })}
              </div>
              <div className="panel-actions">
                <button className="btn" onClick={() => setQuestsOpen(false)}>Back to the world</button>
              </div>
            </div>
          </Overlay>
        )}

        {/* -------- story beat popup -------- */}
        {beat && (
          <Overlay>
            <div className="panel" style={{ cursor: 'pointer', maxWidth: 460 }} onClick={closeBeat}>
              <div className="corner-seal">話</div>
              <div className="beat-text">{beat}</div>
              <div className="panel-actions">
                <button className="btn primary">Continue ▸</button>
              </div>
              <div className="beat-hint">Enter / tap — the clock is paused while you read</div>
            </div>
          </Overlay>
        )}

        {/* -------- day failed -------- */}
        {phase === 'failed' && (
          <Overlay>
            <div className="panel">
              <div className="corner-seal">敗</div>
              <h2>Time's up — day failed 失敗…</h2>
              <div className="psub">
                The words slipped away before the clock ran out.
                {T.dayNumber <= RETRY_GRACE_DAYS
                  ? ' But you are new here — the town will pretend this never happened. Try again right now.'
                  : ' This episode replays tomorrow. Sleep on the words — they will stick better anyway.'}
              </div>
              <div className="recap-list">
                {T.quests.map((q, i) => {
                  const w = questWord(q)
                  return (
                    <div className="recap-item" key={i}>
                      <span className="rw">{w.ja}</span>
                      <span className="rr">{w.reading}</span>
                      <span className="rm">{w.en}</span>
                    </div>
                  )
                })}
              </div>
              <div className="panel-actions">
                {T.dayNumber <= RETRY_GRACE_DAYS && (
                  <button className="btn primary" onClick={retryDay}>Retry now ▸</button>
                )}
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
              {T.wordIds.length ? (
                <>
                  <h2>{T.epTitle ? `${T.epTitle} — cleared!` : `Day ${T.dayNumber} complete! 制覇！`}</h2>
                  {T.timerSec != null && (
                    <div className="psub" style={{ marginBottom: 0 }}>
                      ⏱ Cleared with {Math.floor(spareSec.current / 60)}:{String(spareSec.current % 60).padStart(2, '0')} to spare.
                    </div>
                  )}
                  <div className="psub">
                    Eight more words now live in Japanese, forever. {getWorldProg().learnedIds.length} / {BANK.length} words —
                    the world is {((getWorldProg().learnedIds.length / BANK.length) * 100).toFixed(1)}% translated.
                  </div>
                  <div className="recap-list">
                    {todayWords.map(w => (
                      <div className="recap-item" key={w.id}>
                        <span className="rw">{w.ja}</span>
                        <span className="rr">{w.reading}</span>
                        <span className="rm">{w.en}</span>
                      </div>
                    ))}
                  </div>
                  <div className="panel-actions">
                    <button className="btn" onClick={() => setPhase('explore')}>Wander the world</button>
                    <button className="btn primary" onClick={startNextDay}>Start Day {T.dayNumber + 1} ▸</button>
                  </div>
                </>
              ) : (
                <>
                  <h2>The bank is clear! 全制覇！</h2>
                  <div className="psub">
                    You've learned every word in the current bank ({BANK.length}). The full 6000-word world is the next build phase —
                    for now, wander your fully-Japanese world.
                  </div>
                  <div className="panel-actions">
                    <button className="btn primary" onClick={() => setPhase('explore')}>Wander the world</button>
                  </div>
                </>
              )}
            </div>
          </Overlay>
        )}
      </div>

      <div className="controls-hint">
        <b>W A S D</b> move · <b>E</b> talk/inspect · <b>Q</b> quests · <b>Esc</b> close · step on <span style={{ color: 'var(--vermillion)' }}>◆</span> to travel
      </div>

      <TouchControls joyRef={joyRef} nearActive={nearActive} onInteract={() => interactRef.current()} />
    </div>
  )
}
