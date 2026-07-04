let audioCtx: AudioContext | null = null

export function playTone(freqs: number[], dur: number): void {
  try {
    audioCtx = audioCtx || new AudioContext()
    freqs.forEach((f, i) => {
      const o = audioCtx!.createOscillator()
      const g = audioCtx!.createGain()
      o.type = 'square'
      o.frequency.value = f
      g.gain.value = 0.06
      o.connect(g)
      g.connect(audioCtx!.destination)
      const t = audioCtx!.currentTime + i * (dur / 1000)
      o.start(t)
      g.gain.setValueAtTime(0.06, t)
      g.gain.exponentialRampToValueAtTime(0.001, t + dur / 1000)
      o.stop(t + dur / 1000 + 0.02)
    })
  } catch { /* audio is decorative — never break the game over it */ }
}

export const SFX = {
  correct: () => playTone([523, 659, 784], 90),
  reunion: () => playTone([659, 784, 988], 90),
  wrong: () => playTone([196, 147], 160),
  fanfare: () => playTone([523, 659, 784, 1047], 110)
}
