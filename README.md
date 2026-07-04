# languageapp — 言葉合戦 (Kotoba Kassen)

A Hearthstone-style card battler where **Japanese grammar structure is the game mechanic**. Every game action is a Japanese sentence: Nouns are Objects on the board, Verbs make them act, Adjectives and Emotions modify them, particles (が・を・に) bind them together, and JLPT grammar patterns are playable techniques. The JLPT N5–N1 textbook is meant to read like the game's strategy guide.

## Play it

The game is a single self-contained HTML file — no build step, no dependencies.

- **Locally:** download `kotoba-kassen-v2.html` and open it in any modern browser (Chrome/Edge/Safari/Firefox).
- **Online (free hosting):** enable GitHub Pages on this repo (Settings → Pages → Source: `main`), then open
  `https://ruksangaranaja.github.io/languageapp/kotoba-kassen-v2.html`

The natural-language "Narrate" bar calls the Claude API and needs network access to `api.anthropic.com` to work; everything else runs fully offline.

## Files

| File | What it is |
|---|---|
| `kotoba-kassen-v2.html` | **Current game.** Objects/Verbs/Adjectives/Emotions, particle picker, grammar techniques, 図鑑 guidebook, narration bar. |
| `kotoba-kassen.html` | The original v1 prototype, kept for reference. |
| `kotoba-kassen-design-bible.md` | The living design document: the grammar→mechanic taxonomy and the N5→N1 roadmap. |

## Status

Sandbox build: all mechanics available from the start; the guidebook organizes grammar by JLPT level. N5 patterns are playable; N4+ are designed and documented in the guidebook and design bible, not yet implemented.

## Credits

JLPT grammar pattern lists cross-referenced with [hanabira.org](https://hanabira.org) (CC BY-SA). All game mechanics are original interpretations.

# Vocabulary data
JLPT word lists via open-anki-jlpt-decks (github.com/jamsinclair/open-anki-jlpt-decks), built from Jonathan Waller's JLPT resources (tanos.co.uk, CC BY).
