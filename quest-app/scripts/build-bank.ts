/* Phase 3a — build public/vocab-ja.json (6000 words, N5 -> N1)
   from the open-anki-jlpt-decks CSVs (CC-BY, Jonathan Waller's JLPT lists).
   Run: npx tsx scripts/build-bank.ts <dir-with-n5..n1.csv> */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const srcDir = process.argv[2]
if (!srcDir) { console.error('usage: tsx scripts/build-bank.ts <csv dir>'); process.exit(1) }

/* ---------- tiny CSV parser (handles quoted fields) ---------- */
function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = [], field = '', inQ = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQ) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++ } else inQ = false }
      else field += c
    } else if (c === '"') inQ = true
    else if (c === ',') { row.push(field); field = '' }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = '' }
    else if (c !== '\r') field += c
  }
  if (field || row.length) { row.push(field); rows.push(row) }
  return rows
}

/* ---------- kana -> romaji (hepburn-ish) ---------- */
const DI: Record<string, string> = {
  'きゃ':'kya','きゅ':'kyu','きょ':'kyo','しゃ':'sha','しゅ':'shu','しょ':'sho',
  'ちゃ':'cha','ちゅ':'chu','ちょ':'cho','にゃ':'nya','にゅ':'nyu','にょ':'nyo',
  'ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo','みゃ':'mya','みゅ':'myu','みょ':'myo',
  'りゃ':'rya','りゅ':'ryu','りょ':'ryo','ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo',
  'じゃ':'ja','じゅ':'ju','じょ':'jo','びゃ':'bya','びゅ':'byu','びょ':'byo',
  'ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo','ぢゃ':'ja','ぢゅ':'ju','ぢょ':'jo',
  'ふぁ':'fa','ふぃ':'fi','ふぇ':'fe','ふぉ':'fo','うぃ':'wi','うぇ':'we',
  'ゔぁ':'va','ゔぃ':'vi','ゔぇ':'ve','ゔぉ':'vo','てぃ':'ti','でぃ':'di'
}
const MONO: Record<string, string> = {
  'あ':'a','い':'i','う':'u','え':'e','お':'o','か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko',
  'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so','た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to',
  'な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no','は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
  'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo','や':'ya','ゆ':'yu','よ':'yo',
  'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro','わ':'wa','を':'o','ん':'n',
  'が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go','ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo',
  'だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do','ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo',
  'ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po','ゔ':'vu',
  'ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o','ゎ':'wa','っ':'', 'ゐ':'i','ゑ':'e'
}
function kataToHira(s: string): string {
  return s.replace(/[ァ-ヶ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60))
}
function kanaToRomaji(kana: string): string {
  const s = kataToHira(kana)
  let out = ''
  let smallTsu = false
  for (let i = 0; i < s.length; i++) {
    const two = s.slice(i, i + 2)
    let piece = ''
    if (DI[two]) { piece = DI[two]; i++ }
    else if (s[i] === 'っ') { smallTsu = true; continue }
    else if (s[i] === 'ー') { piece = out.match(/[aeiou]$/) ? out.slice(-1) : '' }
    else if (MONO[s[i]] !== undefined) piece = MONO[s[i]]
    else continue // kanji or punctuation slipped through
    if (smallTsu && piece) { out += piece[0]; smallTsu = false }
    out += piece
  }
  return out
}

/* ---------- cleaning ---------- */
function cleanExpr(s: string): string {
  return s.replace(/[（(][^）)]*[）)]/g, '').replace(/[〜～\s]/g, '').trim()
}
function cleanMeaning(s: string): string {
  let m = s.split(/[;،]/)[0].split(',')[0]
  m = m.replace(/[（(][^）)]*[）)]/g, '').trim()
  if (m.length > 34) m = m.slice(0, 34).trim()
  return m
}
const isKana = (s: string) => /^[぀-ヿー]+$/.test(s)

/* ---------- build ---------- */
interface Row { ja: string; reading: string; en: string; level: number }
const LEVELS: Array<[string, number]> = [['n5', 5], ['n4', 4], ['n3', 3], ['n2', 2], ['n1', 1]]
const seen = new Set<string>()
const words: Row[] = []
let skipped = 0

for (const [file, level] of LEVELS) {
  const rows = parseCsv(readFileSync(join(srcDir, `${file}.csv`), 'utf8'))
  for (const r of rows.slice(1)) {
    if (r.length < 3) continue
    const ja = cleanExpr(r[0])
    const reading = cleanExpr(r[1]) || ja
    const en = cleanMeaning(r[2])
    if (!ja || !en || ja.length > 8 || !isKana(reading) || seen.has(ja)) { skipped++; continue }
    seen.add(ja)
    words.push({ ja, reading, en, level })
  }
}

const TARGET = 6000
const sliced = words.slice(0, TARGET)
const out = sliced.map((w, i) => ({
  id: i + 1,
  ja: w.ja,
  reading: w.reading,
  romaji: kanaToRomaji(w.reading),
  en: w.en,
  level: w.level
}))

mkdirSync('public', { recursive: true })
writeFileSync('public/vocab-ja.json', JSON.stringify(out))
const byLevel = out.reduce<Record<number, number>>((a, w) => { a[w.level] = (a[w.level] || 0) + 1; return a }, {})
console.log(`bank: ${out.length} words (skipped ${skipped} unclean/dupes)`)
console.log('per level:', JSON.stringify(byLevel))
console.log('first 8:', out.slice(0, 8).map(w => `${w.ja}=${w.en}`).join(' | '))
console.log('sample romaji:', out.slice(0, 5).map(w => `${w.reading}->${w.romaji}`).join('  '))
