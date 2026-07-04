import type { Dir, PlayerState, RoomObject, Session, Sparkle } from '../types'
import { CHAR, PAL, SPRITES, THEMES } from '../data/sprites'
import { COLS, ROWS, TILE, WALL_H } from './engine'

/* ---------- sprite pre-render caches ---------- */
const spriteCache: Record<string, HTMLCanvasElement> = {}
const charCache: Record<string, HTMLCanvasElement> = {}

function renderPx(px: string[]): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = 16; c.height = 16
  const x = c.getContext('2d')!
  for (let r = 0; r < 16; r++) {
    const row = px[r] || ''
    for (let col = 0; col < 16; col++) {
      const ch = row[col]
      if (ch && ch !== '.' && PAL[ch]) {
        x.fillStyle = PAL[ch]
        x.fillRect(col, r, 1, 1)
      }
    }
  }
  return c
}

function spriteCanvas(name: string): HTMLCanvasElement {
  if (!spriteCache[name]) spriteCache[name] = renderPx(SPRITES[name].px)
  return spriteCache[name]
}

function charCanvas(dir: 'down' | 'up' | 'side', frame: number, flip: boolean): HTMLCanvasElement {
  const k = dir + frame + (flip ? 'f' : '')
  if (!charCache[k]) {
    const base = renderPx(CHAR[dir][frame])
    if (!flip) {
      charCache[k] = base
    } else {
      const c = document.createElement('canvas')
      c.width = 16; c.height = 16
      const x = c.getContext('2d')!
      x.translate(16, 0); x.scale(-1, 1)
      x.drawImage(base, 0, 0)
      charCache[k] = c
    }
  }
  return charCache[k]
}

/* ---------- frame draw ---------- */
export interface FrameState {
  session: Session
  player: PlayerState
  sparkles: Sparkle[]
  near: RoomObject | null
  overlayOpen: boolean
}

export function drawFrame(ctx: CanvasRenderingContext2D, st: FrameState): void {
  const { session: S, player } = st
  const th = THEMES[S.day.theme] || THEMES.tatami

  // back wall
  ctx.fillStyle = th.wallDk
  ctx.fillRect(0, 0, COLS * TILE, WALL_H * TILE)
  ctx.fillStyle = th.wall
  ctx.fillRect(0, 3, COLS * TILE, WALL_H * TILE - 6)
  for (let i = 0; i < COLS; i += 2) {
    ctx.fillStyle = th.panel
    ctx.fillRect(i * TILE + 3, 7, TILE * 2 - 8, WALL_H * TILE - 14)
  }
  ctx.fillStyle = PAL.k
  ctx.fillRect(0, WALL_H * TILE - 2, COLS * TILE, 2)

  // floor
  for (let ty = WALL_H; ty < ROWS; ty++) {
    for (let tx = 0; tx < COLS; tx++) {
      ctx.fillStyle = ((tx + ty) % 2 === 0) ? th.floorA : th.floorB
      ctx.fillRect(tx * TILE, ty * TILE, TILE, TILE)
      ctx.fillStyle = th.seam
      ctx.fillRect(tx * TILE, ty * TILE, TILE, 1)
      ctx.fillRect(tx * TILE, ty * TILE, 1, TILE)
    }
  }
  // border beams
  ctx.fillStyle = th.wallDk
  ctx.fillRect(0, WALL_H * TILE, 6, ROWS * TILE)
  ctx.fillRect(COLS * TILE - 6, WALL_H * TILE, 6, ROWS * TILE)
  ctx.fillRect(0, ROWS * TILE - 6, COLS * TILE, 6)
  ctx.fillStyle = PAL.k
  ctx.fillRect(0, 0, 1, ROWS * TILE)
  ctx.fillRect(COLS * TILE - 1, 0, 1, ROWS * TILE)
  ctx.fillRect(0, ROWS * TILE - 1, COLS * TILE, 1)

  // objects: wall first, then floor objects and player y-sorted
  const drawables: Array<{ y: number; fn: () => void }> = []
  for (const o of S.objects) {
    const learned = o.companion ? !!S.compDone[o.word!] : !!S.learned[o.idx!]
    if (o.mount === 'wall') {
      drawObj(ctx, o, o.tx * TILE, 4, learned)
    } else {
      drawables.push({ y: o.ty * TILE, fn: () => drawObj(ctx, o, o.tx * TILE, o.ty * TILE - 6, learned) })
    }
  }
  drawables.push({ y: player.y, fn: () => drawPlayer(ctx, player) })
  drawables.sort((a, b) => a.y - b.y).forEach(d => d.fn())

  // sparkles
  for (const s of st.sparkles) {
    ctx.fillStyle = s.t % 8 < 4 ? PAL.g : PAL.y
    ctx.fillRect(s.x + Math.sin(s.t * 0.4) * 3, s.y, 2, 2)
  }

  // interaction bubble
  if (st.near && !st.overlayOpen) {
    const o = st.near
    const bx = o.tx * TILE + 8
    const by = o.mount === 'wall' ? 2 : o.ty * TILE - 14
    ctx.fillStyle = PAL.w
    ctx.fillRect(bx - 6, by, 13, 11)
    ctx.fillStyle = PAL.k
    ctx.fillRect(bx - 6, by, 13, 1); ctx.fillRect(bx - 6, by + 10, 13, 1)
    ctx.fillRect(bx - 6, by, 1, 11); ctx.fillRect(bx + 6, by, 1, 11)
    ctx.fillRect(bx - 1, by + 11, 2, 2)
    ctx.fillStyle = o.companion ? PAL.p : (S.learned[o.idx!] ? PAL.m : PAL.r)
    ctx.font = 'bold 8px monospace'
    ctx.textAlign = 'left'
    ctx.fillText('E', bx - 2, by + 8)
  }
}

function drawObj(ctx: CanvasRenderingContext2D, o: RoomObject, x: number, y: number, learned: boolean): void {
  if (learned) {
    const pulse = 2 + Math.sin(Date.now() / 300) * 1.5
    ctx.fillStyle = o.companion ? 'rgba(193,69,122,0.25)' : 'rgba(184,146,58,0.28)'
    ctx.fillRect(x - pulse, y + 2 - pulse, 16 + pulse * 2, 16 + pulse * 2)
  }
  ctx.drawImage(spriteCanvas(o.sprite), x, y)
  if (o.companion) {
    // bobbing heart — an old friend is here
    const hy = Math.round(y - 7 + Math.sin(Date.now() / 250) * 1.5)
    ctx.fillStyle = PAL.p
    ctx.fillRect(x + 5, hy, 2, 2); ctx.fillRect(x + 9, hy, 2, 2)
    ctx.fillRect(x + 5, hy + 1, 6, 2); ctx.fillRect(x + 6, hy + 3, 4, 1); ctx.fillRect(x + 7, hy + 4, 2, 1)
  }
  if (learned && !o.companion) {
    // little gold seal check
    ctx.fillStyle = PAL.g; ctx.fillRect(x + 11, y - 1, 7, 7)
    ctx.fillStyle = PAL.k
    ctx.fillRect(x + 11, y - 1, 7, 1); ctx.fillRect(x + 11, y + 5, 7, 1)
    ctx.fillRect(x + 11, y - 1, 1, 7); ctx.fillRect(x + 17, y - 1, 1, 7)
    ctx.fillStyle = PAL.w
    ctx.fillRect(x + 12, y + 2, 1, 1); ctx.fillRect(x + 13, y + 3, 1, 1)
    ctx.fillRect(x + 14, y + 2, 1, 1); ctx.fillRect(x + 15, y + 1, 1, 1)
  }
}

function drawPlayer(ctx: CanvasRenderingContext2D, player: PlayerState): void {
  const dir: 'down' | 'up' | 'side' =
    player.dir === 'left' || player.dir === 'right' ? 'side' : (player.dir as Dir & ('up' | 'down'))
  const flip = player.dir === 'left'
  ctx.fillStyle = 'rgba(28,27,25,0.25)'
  ctx.fillRect(player.x - 5, player.y + 6, 10, 3)
  ctx.drawImage(charCanvas(dir, player.frame, flip), Math.round(player.x - 8), Math.round(player.y - 9))
}
