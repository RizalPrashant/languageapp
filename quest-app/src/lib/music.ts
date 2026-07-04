/* Procedural background music — a soft, slightly goofy chiptune loop.
   No audio files: composed in code, played via Web Audio.
   Music-box triangle melody + oom-pah sine bass, C major, ~108 BPM.
   setHurry(true) bumps the tempo ~30% (the "timer is judging you" mode). */

const PREF_KEY = 'kq2_music'

/* 64 eighth-note steps (8 bars). 0 = rest. MIDI numbers. */
const MELODY: number[] = [
  72, 0, 76, 0, 79, 0, 76, 0, 81, 79, 0, 76, 0, 72, 0, 0,
  74, 0, 77, 0, 81, 0, 77, 0, 79, 76, 0, 72, 0, 67, 0, 0,
  72, 0, 76, 0, 79, 0, 76, 0, 81, 79, 0, 76, 0, 84, 0, 0,
  83, 84, 83, 79, 77, 79, 76, 74, 72, 0, 0, 0, 67, 0, 72, 0
]
/* bass roots per bar (C, Am, F, G — the eternally cheerful loop) */
const BASS_ROOTS = [48, 45, 53, 55, 48, 45, 55, 55]

const midiHz = (m: number) => 440 * Math.pow(2, (m - 69) / 12)

let ctx: AudioContext | null = null
let master: GainNode | null = null
let timer: number | null = null
let step = 0
let nextTime = 0
let hurry = false
let running = false

export function musicEnabled(): boolean {
  return localStorage.getItem(PREF_KEY) !== 'off'
}

export function setMusicEnabled(on: boolean): void {
  localStorage.setItem(PREF_KEY, on ? 'on' : 'off')
  if (on) startMusic()
  else stopMusic()
}

export function setHurry(on: boolean): void {
  hurry = on
}

function stepDur(): number {
  const bpm = hurry ? 140 : 108
  return 60 / bpm / 2 // eighth note
}

function playNote(freq: number, at: number, dur: number, type: OscillatorType, gain: number): void {
  if (!ctx || !master) return
  const o = ctx.createOscillator()
  const g = ctx.createGain()
  o.type = type
  o.frequency.value = freq
  o.connect(g)
  g.connect(master)
  g.gain.setValueAtTime(0.0001, at)
  g.gain.exponentialRampToValueAtTime(gain, at + 0.015)
  g.gain.exponentialRampToValueAtTime(0.0001, at + dur)
  o.start(at)
  o.stop(at + dur + 0.05)
}

function schedule(): void {
  if (!ctx || !running) return
  const ahead = ctx.currentTime + 0.18
  while (nextTime < ahead) {
    const d = stepDur()
    const m = MELODY[step % MELODY.length]
    if (m) playNote(midiHz(m), nextTime, d * 1.7, 'triangle', 0.055)
    // oom-pah bass: root on the beat, fifth on the off-beat quarters
    if (step % 2 === 0) {
      const bar = Math.floor((step % 64) / 8)
      const quarterInBar = Math.floor((step % 8) / 2)
      const root = BASS_ROOTS[bar]
      const note = quarterInBar % 2 === 0 ? root : root + 7
      playNote(midiHz(note), nextTime, d * 1.5, 'sine', 0.07)
    }
    // soft tick for bounce
    if (step % 4 === 2) playNote(midiHz(96), nextTime, 0.03, 'square', 0.008)
    nextTime += d
    step++
  }
}

export function startMusic(): void {
  if (!musicEnabled() || running) return
  try {
    ctx = ctx || new AudioContext()
    if (ctx.state === 'suspended') void ctx.resume()
    if (!master) {
      master = ctx.createGain()
      master.gain.value = 0.5
      master.connect(ctx.destination)
    }
    running = true
    step = 0
    nextTime = ctx.currentTime + 0.05
    timer = window.setInterval(schedule, 60)
  } catch { /* music is decorative — never break the game over it */ }
}

export function stopMusic(): void {
  running = false
  if (timer !== null) { window.clearInterval(timer); timer = null }
}
