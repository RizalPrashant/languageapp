import { useState, type ReactNode } from 'react'
import { getStoredKey, hasEnvKey, setApiKey } from '../lib/storage'

export function Overlay({ children, fixed }: { children: ReactNode; fixed?: boolean }) {
  return <div className={'overlay' + (fixed ? ' fixed' : '')}>{children}</div>
}

export function SettingsOverlay({ onClose, onReset, showToast }: {
  onClose: () => void
  onReset: () => void
  showToast: (m: string) => void
}) {
  const [val, setVal] = useState(getStoredKey())
  const placeholder = !getStoredKey() && hasEnvKey()
    ? 'using key from .env.local (optional)'
    : 'sk-ant-... (optional, unused offline)'
  return (
    <Overlay fixed>
      <div className="panel">
        <div className="corner-seal">鍵</div>
        <h2>Settings 設定</h2>
        <div className="psub">The game runs fully offline. The API key is optional and only kept for future features.</div>
        <input className="key-input" value={val} placeholder={placeholder}
          onChange={e => setVal(e.target.value)} />
        <div className="panel-actions">
          <button className="btn" onClick={() => { setApiKey(val.trim()); showToast('Saved.'); onClose() }}>Save</button>
          <button className="btn danger" onClick={onReset}>🔄 Start over (all languages)</button>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </Overlay>
  )
}
