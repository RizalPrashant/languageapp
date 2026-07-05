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

/* Sunnyside 16px tileset (user-licensed pack) — outdoor terrain + trees.
   Loaded from public/tiles/sunnyside16.png; missing file = procedural look. */
let tilesImg: HTMLImageElement | null = null
let tilesTried = false
function tilesReady(): boolean {
  if (!tilesTried) {
    tilesTried = true
    const img = new Image()
    img.onload = () => { tilesImg = img }
    img.src = `${import.meta.env.BASE_URL}tiles/sunnyside16.png`
  }
  return !!tilesImg
}
/* atlas tile coords (tx,ty in 16px units) */
const AT_GRASS: Array<[number, number]> = [[1, 1], [1, 1], [1, 1], [1, 1], [1, 2], [2, 2]]
const AT_DIRT: Array<[number, number]> = [[20, 7], [21, 7], [20, 8], [21, 8]]
const AT_WATER: [number, number] = [13, 20]
const AT_PLANKS: Array<[number, number]> = [[10, 30], [12, 30], [11, 30], [11, 29]]
/* larger objects cut straight from the atlas (px rect + draw size) */
const ATLAS_OBJS: Record<string, { sx: number; sy: number; w: number; h: number }> = {
  tree: { sx: 818, sy: 90, w: 32, h: 52 },
  tree_b: { sx: 818, sy: 90, w: 32, h: 52 },
  tree_c: { sx: 818, sy: 90, w: 32, h: 52 },
  tree_hill: { sx: 818, sy: 90, w: 32, h: 52 },
  tree_hill_b: { sx: 818, sy: 90, w: 32, h: 52 },
  tree_street1: { sx: 818, sy: 90, w: 32, h: 52 },
  tree_street2: { sx: 818, sy: 90, w: 32, h: 52 },
  rug_red: { sx: 646, sy: 568, w: 32, h: 32 },
  bed_pack: { sx: 624, sy: 528, w: 24, h: 32 },
  cabinet_pack: { sx: 656, sy: 526, w: 20, h: 26 },
  cabinet_pack_b: { sx: 676, sy: 526, w: 20, h: 26 },
  nightstand_pack: { sx: 744, sy: 524, w: 20, h: 28 },
  rug_gold: { sx: 688, sy: 560, w: 36, h: 38 },
  rug_small: { sx: 744, sy: 558, w: 24, h: 24 },
  window_pack: { sx: 256, sy: 176, w: 16, h: 16 },

  /* Sunnyside pack: quest-area landmarks. Each themed "quest room" gets one
     hero structure so it reads at a glance from across the screen. */
  well: { sx: 576, sy: 304, w: 48, h: 48 },
  tower_blue: { sx: 512, sy: 144, w: 48, h: 80 },
  tower_green: { sx: 512, sy: 272, w: 48, h: 80 },
  tower_orange: { sx: 512, sy: 400, w: 48, h: 80 },
  tower_red: { sx: 512, sy: 528, w: 48, h: 80 },
  tower_purple: { sx: 512, sy: 656, w: 48, h: 80 },

  /* market clutter */
  crate: { sx: 528, sy: 144, w: 16, h: 16 },
  crate2: { sx: 560, sy: 144, w: 16, h: 16 },
  barrel: { sx: 672, sy: 160, w: 16, h: 16 },
  barrel_red: { sx: 704, sy: 192, w: 16, h: 16 },
  chest_orange: { sx: 576, sy: 480, w: 16, h: 16 },
  bench_wood: { sx: 720, sy: 608, w: 16, h: 16 },
  rug_shop: { sx: 704, sy: 560, w: 48, h: 32 },
  sign_board: { sx: 704, sy: 160, w: 32, h: 16 },
  fence_gate: { sx: 608, sy: 80, w: 16, h: 32 },
  ladder: { sx: 672, sy: 192, w: 16, h: 16 },
  bush: { sx: 784, sy: 16, w: 16, h: 16 },
}

let sceneC: HTMLCanvasElement | null = null

export function drawWorld(out: CanvasRenderingContext2D, f: WorldFrame): void {
  if (!sceneC) { sceneC = document.createElement('canvas'); sceneC.width = COLS * TILE; sceneC.height = ROWS * TILE }
  const ctx = sceneC.getContext('2d')!
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
      if (loc.outdoor && tilesReady() && tilesImg) {
        const hash = (tx * 7 + ty * 13 + ((tx * ty) | 0)) % AT_GRASS.length
        const [gx, gy] = AT_GRASS[hash]
        ctx.drawImage(tilesImg, gx * 16, gy * 16, 16, 16, tx * TILE, ty * TILE, TILE, TILE)
        if (t === '#') {
          // pack-toned bush border over grass
          ctx.fillStyle = '#2C5E38'
          ctx.fillRect(tx * TILE, ty * TILE, TILE, TILE)
          ctx.fillStyle = '#417B4C'
          ctx.fillRect(tx * TILE + 1, ty * TILE + 1, TILE - 2, TILE - 2)
          ctx.fillStyle = '#356B41'
          ctx.fillRect(tx * TILE + 3, ty * TILE + 4, 4, 3)
          ctx.fillRect(tx * TILE + 9, ty * TILE + 9, 4, 3)
        } else if (t === '~') {
          ctx.drawImage(tilesImg, AT_WATER[0] * 16, AT_WATER[1] * 16, 16, 16, tx * TILE, ty * TILE, TILE, TILE)
          ctx.fillStyle = '#9AB8D0'
          const ripple = Math.floor(Date.now() / 400 + tx + ty) % 3
          ctx.fillRect(tx * TILE + 3 + ripple, ty * TILE + 5, 4, 1)
          ctx.fillRect(tx * TILE + 8, ty * TILE + 10 + (ripple % 2), 3, 1)
        } else if (t === '=') {
          const [dx, dy] = AT_DIRT[(tx + ty * 2) % 4]
          ctx.drawImage(tilesImg, dx * 16, dy * 16, 16, 16, tx * TILE, ty * TILE, TILE, TILE)
        }
        continue
      }
      if (!loc.outdoor && (loc.theme === 'wood' || loc.theme === 'tatami') && t !== '#' && tilesReady() && tilesImg) {
        const hash = (tx * 5 + ty * 11 + ((tx * ty) | 0)) % AT_PLANKS.length
        const [pxx, pyy] = AT_PLANKS[hash]
        ctx.drawImage(tilesImg, pxx * 16, pyy * 16, 16, 16, tx * TILE, ty * TILE, TILE, TILE)
        continue
      }
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

  // flat floor decor (rugs, slippers…) — under everything that moves
  for (const o of activeObjects(loc)) {
    if (!o.deco) continue
    const at = ATLAS_OBJS[o.sprite]
    if (at) {
      if (tilesImg) ctx.drawImage(tilesImg, at.sx, at.sy, at.w, at.h,
        o.x * TILE - (at.w - 16) / 2, o.y * TILE - (at.h - 16) / 2, at.w, at.h)
      // atlas not loaded yet: skip this frame rather than crash
    } else if (SPRITES[o.sprite]) {
      ctx.drawImage(spriteC(o.sprite), o.x * TILE, o.y * TILE)
    }
  }

  // soft shadow where the floor meets the back wall (indoor depth)
  if (!loc.outdoor) {
    const ao = ctx.createLinearGradient(0, 2 * TILE, 0, 2 * TILE + 5)
    ao.addColorStop(0, 'rgba(20,16,12,0.30)')
    ao.addColorStop(1, 'rgba(20,16,12,0)')
    ctx.fillStyle = ao
    ctx.fillRect(TILE, 2 * TILE, (COLS - 2) * TILE, 5)
  }

  // warp markers (suppressed when floor decor — a doormat — marks the exit)
  for (const wp of activeWarps(loc)) {
    if (activeObjects(loc).some(o => o.deco && o.x === wp.x && o.y === wp.y)) continue
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
    if (o.deco) continue   // floor decor already drawn beneath everything
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

  /* ---------- in-scene light ---------- */
  if (!f.night && !loc.outdoor) {
    // sunbeam falling from any wall window onto the floor
    for (const o of activeObjects(loc)) {
      if (!o.wall || (o.sprite !== 'window' && o.sprite !== 'window_big' && o.sprite !== 'window_pack')) continue
      const wx = o.x * TILE + 8
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      const beam = ctx.createLinearGradient(0, 16, 0, 122)
      beam.addColorStop(0, 'rgba(255,214,150,0.20)')
      beam.addColorStop(1, 'rgba(255,214,150,0)')
      ctx.fillStyle = beam
      ctx.beginPath()
      ctx.moveTo(wx - 8, 16); ctx.lineTo(wx + 8, 16)
      ctx.lineTo(wx + 26, 122); ctx.lineTo(wx - 26, 122)
      ctx.closePath(); ctx.fill()
      const pool = ctx.createRadialGradient(wx, 116, 2, wx, 116, 30)
      pool.addColorStop(0, 'rgba(255,214,150,0.14)')
      pool.addColorStop(1, 'rgba(255,214,150,0)')
      ctx.fillStyle = pool
      ctx.fillRect(wx - 32, 100, 64, 32)
      ctx.restore()
    }
  }
  if (f.night) {
    // lamps cut warm pools through the night tint
    for (const o of activeObjects(loc)) {
      if (o.sprite !== 'lamp') continue
      const lx = o.x * TILE + 8, ly = o.y * TILE + 4
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      const g = ctx.createRadialGradient(lx, ly, 2, lx, ly, 26)
      g.addColorStop(0, 'rgba(255,200,120,0.45)')
      g.addColorStop(1, 'rgba(255,200,120,0)')
      ctx.fillStyle = g
      ctx.fillRect(lx - 28, ly - 28, 56, 56)
      ctx.restore()
    }
  }

  /* ---------- diorama composite (tilt-shift, grade, vignette) ---------- */
  const W = out.canvas.width, H = out.canvas.height
  const sc = H / (ROWS * TILE)
  out.imageSmoothingEnabled = false
  out.drawImage(sceneC!, 0, 0, W, H)

  // tilt-shift: soft focus falloff at the top and bottom of the diorama
  out.save()
  out.imageSmoothingEnabled = true
  const bands: Array<[number, number, number, number]> = [
    [0, 18, 2.4, 0.5], [18, 12, 1.2, 0.28],
    [162, 12, 1.2, 0.28], [174, 18, 2.4, 0.5]
  ]
  for (const [sy, sh, blur, alpha] of bands) {
    out.filter = `blur(${(blur * sc).toFixed(1)}px)`
    out.globalAlpha = alpha
    out.drawImage(sceneC!, 0, sy, COLS * TILE, sh, 0, sy * sc, W, sh * sc)
  }
  out.filter = 'none'
  out.globalAlpha = 1

  // color grade
  out.globalCompositeOperation = 'soft-light'
  out.fillStyle = f.night ? 'rgba(80,100,170,0.16)' : 'rgba(255,196,130,0.14)'
  out.fillRect(0, 0, W, H)
  out.globalCompositeOperation = 'source-over'

  // vignette
  const v = out.createRadialGradient(W / 2, H * 0.44, H * 0.42, W / 2, H * 0.44, H * 0.85)
  v.addColorStop(0, 'rgba(15,12,24,0)')
  v.addColorStop(1, 'rgba(15,12,24,0.32)')
  out.fillStyle = v
  out.fillRect(0, 0, W, H)
  out.restore()
}

function drawObjSprite(ctx: CanvasRenderingContext2D, sprite: string, x: number, y: number, quest: boolean): void {
  const at = ATLAS_OBJS[sprite]
  if (at && tilesImg) {
    const dx = x - (at.w - 16) / 2
    const dy = y + 16 - at.h
    if (quest) {
      const pulse = 2 + Math.sin(Date.now() / 300) * 1.5
      ctx.fillStyle = 'rgba(193,68,14,0.22)'
      ctx.fillRect(dx - pulse, dy - pulse, at.w + pulse * 2, at.h + pulse * 2)
    }
    ctx.drawImage(tilesImg, at.sx, at.sy, at.w, at.h, dx, dy, at.w, at.h)
    if (quest) drawExclaim(ctx, x + 6, dy - 8)
    return
  }
  if (at && !tilesImg) return   // atlas-only piece, image still loading
  if (!SPRITES[sprite]) return  // unknown sprite: never crash the frame
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
