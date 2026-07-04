import { useState, type ReactNode } from 'react'
import type { Companion, Progress, VocabEntry } from '../types'
import { getStoredKey, hasEnvKey, setApiKey } from '../lib/storage'
import { getWorldProg } from '../lib/worldStorage'
import { BANK, BANK_BY_ID } from '../lib/bank'

/* ---------- shared bits ---------- */

export function Overlay({ children, fixed }: { children: ReactNode; fixed?: boolean }) {
  return <div className={'overlay' + (fixed ? ' fixed' : '')}>{children}</div>
}

/* Render story text, turning {word} into highlighted spans */
export function StoryText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\{[^}]+\})/g)
  return (
    <div className={className}>
      {parts.map((p, i) =>
        p.startsWith('{') && p.endsWith('}')
          ? <span key={i} className="tw">{p.slice(1, -1)}</span>
          : <span key={i}>{p}</span>
      )}
    </div>
  )
}

/* ---------- story intro ---------- */

export function StoryOverlay({ title, story, onClose }: { title: string; story: string; onClose: () => void }) {
  return (
    <Overlay>
      <div className="panel">
        <div className="corner-seal">語</div>
        <h2>{title}</h2>
        <div className="psub">
          Today's tale — the <span style={{ color: 'var(--vermillion)', fontWeight: 700 }}>highlighted words</span> are
          hidden in the room. Find their objects and guess their meanings!
        </div>
        <StoryText text={story} className="story-text" />
        <div className="panel-actions">
          <button className="btn primary" onClick={onClose}>Begin exploring ▸</button>
        </div>
      </div>
    </Overlay>
  )
}

/* ---------- loading ---------- */

export function LoadingOverlay() {
  return (
    <Overlay fixed>
      <div className="panel loading-panel">
        <div className="brush-spinner">筆</div>
        <div className="loading-msg">Haiku is dreaming up today's story…</div>
        <div className="loading-sub">designing the room · choosing eight words · hiding the meanings</div>
      </div>
    </Overlay>
  )
}

/* ---------- settings ---------- */

export function SettingsOverlay({ onClose, onReset, showToast }: {
  onClose: () => void
  onReset: () => void
  showToast: (m: string) => void
}) {
  const [val, setVal] = useState(getStoredKey())
  const placeholder = !getStoredKey() && hasEnvKey()
    ? 'using key from .env.local ✓ (paste here to override)'
    : 'sk-ant-...'
  return (
    <Overlay fixed>
      <div className="panel">
        <div className="corner-seal">鍵</div>
        <h2>Settings 設定</h2>
        <div className="field-row">
          <label>Anthropic API key (for fresh daily stories via claude-haiku-4-5)</label>
          <input
            type="password"
            placeholder={placeholder}
            value={val}
            onChange={e => setVal(e.target.value)}
          />
          <div className="note">
            Stored only in this browser and sent directly to <b>api.anthropic.com</b> — no other
            server ever sees it. Without a key you get the built-in starter quest for each language.
          </div>
        </div>
        <div className="panel-actions">
          <button className="btn danger small" onClick={onReset}>Reset all progress</button>
          <button className="btn primary" onClick={() => {
            setApiKey(val.trim())
            showToast(val.trim() ? 'Key saved. ✨ New day is now powered by Haiku.' : 'Key cleared.')
            onClose()
          }}>Save</button>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </Overlay>
  )
}

/* ---------- world-mode collection (bank + learnedIds) ---------- */

export function WorldVocabOverlay({ onClose }: { onClose: () => void }) {
  const learnedIds = getWorldProg().learnedIds
  const words = learnedIds.map(id => BANK_BY_ID[id]).filter(Boolean)
  return (
    <Overlay fixed>
      <div className="panel">
        <div className="corner-seal">図</div>
        <h2>Word Collection 図鑑</h2>
        <div className="psub">
          {words.length
            ? `${words.length} of ${BANK.length} words conquered — each one now lives in Japanese, everywhere in the world.`
            : 'Every word you conquer will live here.'}
        </div>
        {words.length === 0 && (
          <div className="vocab-empty">Nothing yet — clear your first quests and the words appear here.</div>
        )}
        <div className="recap-list">
          {words.slice().reverse().map(w => (
            <div className="recap-item" key={w.id}>
              <span className="rw">{w.ja}</span>
              <span className="rr">{w.reading}</span>
              <span className="rdate">{w.pos}</span>
              <span className="rm">{w.en}</span>
            </div>
          ))}
        </div>
        <div className="panel-actions">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </Overlay>
  )
}

/* ---------- vocab collection ---------- */

export function VocabOverlay({ prog, onClose }: { prog: Progress; onClose: () => void }) {
  const sections: Array<{ label: string; entries: Array<[string, VocabEntry]> }> = []
  const langs: Array<['ja' | 'zh', string]> = [['ja', '日本語 Japanese'], ['zh', '中文 Chinese']]
  for (const [lg, label] of langs) {
    const entries = Object.entries(prog.vocab[lg] || {})
    if (!entries.length) continue
    entries.sort((a, b) => (b[1].learnedOn || '').localeCompare(a[1].learnedOn || ''))
    sections.push({ label: `${label} — ${entries.length} word${entries.length > 1 ? 's' : ''}`, entries })
  }
  const companions: Companion[] = langs.flatMap(([lg]) => Object.values(prog.companions[lg] || {}))

  return (
    <Overlay fixed>
      <div className="panel">
        <div className="corner-seal">図</div>
        <h2>Word Collection 図鑑</h2>
        <div className="psub">Every word you've conquered, from every day's quest. Kept safe in this browser.</div>
        {sections.length === 0 && companions.length === 0 && (
          <div className="vocab-empty">Nothing yet — clear your first quest and the words will live here forever.</div>
        )}
        {sections.map(sec => (
          <div key={sec.label}>
            <div className="vocab-heading">{sec.label}</div>
            <div className="recap-list">
              {sec.entries.map(([word, v]) => (
                <div className="recap-item" key={word}>
                  <span className="rw">{word}</span>
                  <span className="rr">{v.reading}</span>
                  <span className="rdate">{v.learnedOn}</span>
                  <span className="rm">{v.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {companions.length > 0 && (
          <div>
            <div className="vocab-heading comp">Companions 仲間 — friends who revisit your rooms</div>
            <div className="recap-list">
              {companions.map(v => (
                <div className="recap-item" key={v.word + v.name}>
                  <span className="rw">{v.word}</span>
                  <span className="rr">{v.name}</span>
                  <span className="rdate">met ×{v.timesMet || 1}</span>
                  <span className="rhearts">{'♥'.repeat(Math.min(v.affection || 1, 8))}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="panel-actions">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </Overlay>
  )
}
