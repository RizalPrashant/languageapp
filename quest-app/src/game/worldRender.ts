import type { PlayerState, Sparkle } from '../types'
import { CHAR, NPC_SKINS, PAL, SPRITES, THEMES } from '../data/sprites'
import type { WorldLocation, WorldNpc } from '../data/world'
import { activeNpcs, activeObjects, activeWarps } from './worldEngine'
import { COLS, ROWS, TILE, tileAt, type Target } from './worldEngine'

/* ---------- caches ---------- */
const cache: Record<string, HTMLCanvasElement> = {}

/* Optional hand-made background per location: public/bg/{locId}.png
   (256x192 native, or any 4:3 multiple — scaled to fit). If present it
   replaces the procedural ground/walls; objects, NPCs, warp markers and
   the player are still drawn on top. Missing file = procedural fallback. */
const bgCache: Record<string, HTMLImageElement | null> = {}
const bgTried: Record<string, boolean> = {}
function bgFor(locId: string): HTMLImageElement | null {
  if (!bgTried[locId]) {
    bgTried[locId] = true
    bgCache[locId] = null
    const img = new Image()
    img.onload = () => { bgCache[locId] = img }
    img.src = `${import.meta.env.BASE_URL}bg/${locId}.png`
  }
  return bgCache[locId] || null
}

function renderPx(px: string[], remap?: Record<string, string>): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = 16; c.height = 16
  const x = c.getContext('2d')!
  for (let r = 0; r < 16; r++) {
    const row = px[r] || ''
    for (let col = 0; col < 16; col++) {
      const ch = row[col]
      if (!ch || ch === '.') continue
      const color = (remap && remap[ch]) || PAL[ch]
      if (color) { x.fillStyle = color; x.fillRect(col, r, 1, 1) }
    }
  }
  return c
}

function spriteC(name: string): HTMLCanvasElement {
  if (!cache['s:' + name]) cache['s:' + name] = renderPx(SPRITES[name].px)
  return cache['s:' + name]
}

function playerC(dir: 'down' | 'up' | 'side', frame: number, flip: boolean): HTMLCanvasElement {
  const k = `p:${dir}${frame}${flip ? 'f' : ''}`
  if (!cache[k]) {
    const base = renderPx(CHAR[dir][frame])
    cache[k] = flip ? flipC(base) : base
  }
  return cache[k]
}

function npcC(npcId: string, frame: number): HTMLCanvasElement {
  const k = `n:${npcId}${frame}`
  if (!cache[k]) {
    const skin = NPC_SKINS[npcId] || NPC_SKINS.friend
    cache[k] = renderPx(CHAR.down[frame], { b: skin.robe, B: skin.robeLt, K: skin.hair })
  }
  return cache[k]
}

function flipC(base: HTMLCanvasElement): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = 16; c.height = 16
  const x = c.getContext('2d')!
  x.translate(16, 0); x.scale(-1, 1)
  x.drawImage(base, 0, 0)
  return c
}

/* ---------- frame ---------- */
export interface WorldFrame {
  loc: WorldLocation
  player: PlayerState
  sparkles: Sparkle[]
  target: Target | null
  overlayOpen: boolean
  questTargets: Set<string>   // npc ids + object ids with a pending quest
  night?: boolean             // evening episode: cool blue tint over the world
}

export function drawWorld(ctx: CanvasRenderingContext2D, f: WorldFrame): void {
  const { loc, player } = f
  const th = THEMES[loc.theme]

  // custom background image, if one exists for this location
  const bg = bgFor(loc.id)
  if (bg) {
    ctx.drawImage(bg, 0, 0, COLS * TILE, ROWS * TILE)
    // keep the water animated even over a painted pond
    for (let ty = 0; ty < ROWS; ty++) {
      for (let tx = 0; tx < COLS; tx++) {
        if (tileAt(loc, tx, ty) === '~') {
          ctx.fillStyle = 'rgba(154,184,208,0.55)'
          const ripple = Math.floor(Date.now() / 400 + tx + ty) % 3
          ctx.fillRect(tx * TILE + 3 + ripple, ty * TILE + 5, 4, 1)
          ctx.fillRect(tx * TILE + 8, ty * TILE + 10 + (ripple % 2), 3, 1)
        }
      }
    }
  } else {
  // ground
  for (let ty = 0; ty < ROWS; ty++) {
    for (let tx = 0; tx < COLS; tx++) {
      const t = tileAt(loc, tx, ty)
      if (t === '#') {
        if (loc.outdoor) {
          // hedge / fence border
          ctx.fillStyle = th.wallDk
          ctx.fillRect(tx * TILE, ty * TILE, TILE, TILE)
          ctx.fillStyle = th.wall
          ctx.fillRect(tx * TILE + 1, ty * TILE + 1, TILE - 2, TILE - 2)
        } else {
          ctx.fillStyle = ty < 2 ? th.wall : th.wallDk
          ctx.fillRect(tx * TILE, ty * TILE, TILE, TILE)
          if (ty < 2) {
            ctx.fillStyle = th.panel
            ctx.fillRect(tx * TILE + 2, ty * TILE + 4, TILE - 4, TILE - 7)
          }
        }
      } else if (t === '~') {
        ctx.fillStyle = '#42679C'
        ctx.fillRect(tx * TILE, ty * TILE, TILE, TILE)
        ctx.fillStyle = '#9AB8D0'
        const ripple = Math.floor(Date.now() / 400 + tx + ty) % 3
        ctx.fillRect(tx * TILE + 3 + ripple, ty * TILE + 5, 4, 1)
        ctx.fillRect(tx * TILE + 8, ty * TILE + 10 + (ripple % 2), 3, 1)
      } else if (t === '=') {
        ctx.fillStyle = '#D9C7A0'
        ctx.fillRect(tx * TILE, ty * TILE, TILE, TILE)
        ctx.fillStyle = '#B99C6B'
        ctx.fillRect(tx * TILE, ty * TILE, TILE, 1)
        ctx.fillRect(tx * TILE, ty * TILE, 1, TILE)
      } else {
        ctx.fillStyle = ((tx + ty) % 2 === 0) ? th.floorA : th.floorB
        ctx.fillRect(tx * TILE, ty * TILE, TILE, TILE)
        ctx.fillStyle = th.seam
        ctx.fillRect(tx * TILE, ty * TILE, TILE, 1)
        ctx.fillRect(tx * TILE, ty * TILE, 1, TILE)
      }
    }
  }
  }

  // warp markers
  for (const wp of activeWarps(loc)) {
    const wx = wp.x * TILE, wy = wp.y * TILE
    const pulse = Math.floor(Date.now() / 350) % 2
    ctx.fillStyle = pulse ? '#C1440E' : '#D96A38'
    ctx.fillRect(wx + 2, wy + 2, TILE - 4, TILE - 4)
    ctx.fillStyle = PAL.w
    // little arrow
    ctx.fillRect(wx + 7, wy + 4, 2, 6)
    ctx.fillRect(wx + 5, wy + 8, 6, 2)
  }

  // drawables y-sorted: objects, npcs, player
  const drawables: Array<{ y: number; fn: () => void }> = []
  for (const o of activeObjects(loc)) {
    const hasQuest = f.questTargets.has(o.id)
    if (o.wall) {
      drawObjSprite(ctx, o.sprite, o.x * TILE, 4, hasQuest)
    } else {
      drawables.push({ y: o.y * TILE, fn: () => drawObjSprite(ctx, o.sprite, o.x * TILE, o.y * TILE - 6, hasQuest) })
    }
  }
  for (const n of activeNpcs(loc.id)) {
    const frame = Math.floor(Date.now() / 600 + n.x) % 2
    drawables.push({ y: n.y * TILE, fn: () => drawNpc(ctx, n, frame, f.questTargets.has(n.id)) })
  }
  drawables.push({ y: player.y, fn: () => drawPlayer(ctx, player) })
  drawables.sort((a, b) => a.y - b.y).forEach(d => d.fn())

  // sparkles
  for (const s of f.sparkles) {
    ctx.fillStyle = s.t % 8 < 4 ? PAL.g : PAL.y
    ctx.fillRect(s.x + Math.sin(s.t * 0.4) * 3, s.y, 2, 2)
  }

  // night tint
  if (f.night) {
    ctx.fillStyle = 'rgba(24, 32, 72, 0.32)'
    ctx.fillRect(0, 0, COLS * TILE, ROWS * TILE)
  }

  // interaction bubble
  if (f.target && !f.overlayOpen) {
    const bx = f.target.cx
    const by = (f.target.kind === 'obj' && f.target.obj.wall) ? 2 : f.target.cy - 22
    ctx.fillStyle = PAL.w
    ctx.fillRect(bx - 6, by, 13, 11)
    ctx.fillStyle = PAL.k
    ctx.fillRect(bx - 6, by, 13, 1); ctx.fillRect(bx - 6, by + 10, 13, 1)
    ctx.fillRect(bx - 6, by, 1, 11); ctx.fillRect(bx + 6, by, 1, 11)
    ctx.fillRect(bx - 1, by + 11, 2, 2)
    ctx.fillStyle = f.questTargets.has(f.target.kind === 'npc' ? f.target.npc.id : f.target.obj.id) ? PAL.r : PAL.b
    ctx.font = 'bold 8px monospace'
    ctx.textAlign = 'left'
    ctx.fillText('E', bx - 2, by + 8)
  }
}

function drawObjSprite(ctx: CanvasRenderingContext2D, sprite: string, x: number, y: number, quest: boolean): void {
  if (quest) {
    const pulse = 2 + Math.sin(Date.now() / 300) * 1.5
    ctx.fillStyle = 'rgba(193,68,14,0.22)'
    ctx.fillRect(x - pulse, y + 2 - pulse, 16 + pulse * 2, 16 + pulse * 2)
  }
  ctx.drawImage(spriteC(sprite), x, y)
  if (quest) drawExclaim(ctx, x + 6, y - 8)
}

function drawNpc(ctx: CanvasRenderingContext2D, n: WorldNpc, frame: number, quest: boolean): void {
  const x = n.x * TILE, y = n.y * TILE
  ctx.fillStyle = 'rgba(28,27,25,0.25)'
  ctx.fillRect(x + 3, y + 12, 10, 3)
  if (n.sprite) {
    // animal / object characters (Fish-Thief!) — draw their sprite, gentle bob
    const bob = frame ? -1 : 0
    ctx.drawImage(spriteC(n.sprite), x, y - 2 + bob)
  } else {
    ctx.drawImage(npcC(n.id, frame), x, y - 4)
  }
  if (quest) drawExclaim(ctx, x + 6, y - 13)
}

function drawExclaim(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const bob = Math.round(Math.sin(Date.now() / 250) * 1.5)
  ctx.fillStyle = PAL.r
  ctx.fillRect(x, y + bob, 3, 5)
  ctx.fillRect(x, y + bob + 6, 3, 2)
}

function drawPlayer(ctx: CanvasRenderingContext2D, player: PlayerState): void {
  const dir: 'down' | 'up' | 'side' =
    player.dir === 'left' || player.dir === 'right' ? 'side' : player.dir
  const flip = player.dir === 'left'
  ctx.fillStyle = 'rgba(28,27,25,0.25)'
  ctx.fillRect(player.x - 5, player.y + 6, 10, 3)
  ctx.drawImage(playerC(dir, player.frame, flip), Math.round(player.x - 8), Math.round(player.y - 9))
}
