import type { Seg } from '../types'
import { wordById } from '../lib/bank'

/* The diglot weave renderer.
   {w} segments render in the target language once learned, English before.
   Learned symbolic-script words show reading-first — haha（母）/ māma（妈妈）—
   so beginners can pronounce them while the symbols stay visible.
   German (no symbols) just shows the word. Tap any learned word for a hint. */
export default function SegText({ segs, learned, className, onHint }: {
  segs: Seg[]
  learned: Set<number>
  className?: string
  onHint?: (msg: string) => void
}) {
  return (
    <span className={className}>
      {segs.map((s, i) => {
        if ('t' in s) return <span key={i}>{s.t}</span>
        const w = wordById(s.w)
        if (!w) return null
        if (learned.has(s.w)) {
          const symbolic = w.romaji !== w.ja
          return (
            <span
              key={i}
              className="jaw"
              role="button"
              title={`${w.en}`}
              onPointerDown={e => {
                e.stopPropagation()
                e.preventDefault()
                onHint?.(symbolic ? `${w.romaji}（${w.ja}） = ${w.en}` : `${w.ja} = ${w.en}`)
              }}
            >
              {symbolic ? <>{w.romaji}<span className="jaw-sym">（{w.ja}）</span></> : w.ja}
            </span>
          )
        }
        return <span key={i} className="enw">{w.en}</span>
      })}
    </span>
  )
}
