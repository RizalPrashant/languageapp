import type { Lang, Progress } from '../types'

interface Props {
  prog: Progress
  onStart: (lang: Lang) => void
  onOpenVocab: () => void
  onOpenSettings: () => void
  onReset: () => void
}

export default function HomeScreen({ prog, onStart, onOpenVocab, onOpenSettings, onReset }: Props) {
  const wordsLearned = prog.known.ja.length + prog.known.zh.length
  return (
    <div className="home">
      <h1>言葉クエスト <span style={{ fontSize: 14, color: 'var(--gold)' }}>WORD QUEST</span></h1>
      <div className="subtitle">Eight words. One story. One room to explore. — 毎日八つの言葉、一つの物語。</div>

      <div className="home-cards">
        <div className="lang-card" onClick={() => onStart('ja')}>
          <div className="seal">日</div>
          <div className="big">日本語</div>
          <div className="name">Japanese</div>
          <div className="lvl">JLPT N5 →</div>
        </div>
        <div className="lang-card" onClick={() => onStart('zh')}>
          <div className="seal">中</div>
          <div className="big">中文</div>
          <div className="name">Mandarin Chinese</div>
          <div className="lvl">HSK 1 →</div>
        </div>
      </div>

      <div className="home-stats">
        <div><b>{prog.streak}</b>day streak 連続</div>
        <div><b>{wordsLearned}</b>words learned 習得</div>
        <div><b>{prog.daysDone}</b>quests cleared 完了</div>
      </div>

      <div className="gearline">
        <button className="btn small" onClick={onOpenVocab}>📖 Collection · 図鑑</button>
        <button className="btn small" onClick={onOpenSettings}>⚙ Settings · API key</button>
        <button className="btn small danger" onClick={onReset}>🔄 Start over · 初めから</button>
      </div>

      <div className="home-foot">
        Companion game: <a href="../kotoba-kassen-v2.html">言葉合戦 Kotoba Kassen (card battler)</a>
      </div>
    </div>
  )
}
