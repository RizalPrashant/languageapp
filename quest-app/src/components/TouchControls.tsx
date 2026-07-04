import { useRef, useState } from 'react'

interface Props {
  joyRef: React.MutableRefObject<{ dx: number; dy: number }>
  nearActive: boolean
  onInteract: () => void
}

const RADIUS = 38 // max knob travel in px

/* Virtual joystick (left) + interact button (right).
   Only rendered visible on coarse-pointer devices via CSS. */
export default function TouchControls({ joyRef, nearActive, onInteract }: Props) {
  const baseRef = useRef<HTMLDivElement>(null)
  const [knob, setKnob] = useState({ x: 0, y: 0 })
  const activePointer = useRef<number | null>(null)

  const updateFromEvent = (e: React.PointerEvent) => {
    const base = baseRef.current
    if (!base) return
    const rect = base.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    let dx = e.clientX - cx
    let dy = e.clientY - cy
    const len = Math.hypot(dx, dy)
    if (len > RADIUS) { dx = (dx / len) * RADIUS; dy = (dy / len) * RADIUS }
    setKnob({ x: dx, y: dy })
    joyRef.current.dx = dx / RADIUS
    joyRef.current.dy = dy / RADIUS
  }

  const release = () => {
    activePointer.current = null
    setKnob({ x: 0, y: 0 })
    joyRef.current.dx = 0
    joyRef.current.dy = 0
  }

  return (
    <div className="touch-controls">
      <div
        ref={baseRef}
        className="joy-base"
        onPointerDown={e => {
          activePointer.current = e.pointerId
          ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
          updateFromEvent(e)
        }}
        onPointerMove={e => {
          if (activePointer.current === e.pointerId) updateFromEvent(e)
        }}
        onPointerUp={release}
        onPointerCancel={release}
      >
        <div
          className="joy-knob"
          style={{ transform: `translate(calc(-50% + ${knob.x}px), calc(-50% + ${knob.y}px))` }}
        />
      </div>
      <button
        className={'act-btn' + (nearActive ? ' near' : '')}
        onPointerDown={e => { e.preventDefault(); onInteract() }}
      >
        調べる
      </button>
    </div>
  )
}
