# 言葉合戦 — Design Bible
## A card battler where the JLPT textbook is the game guide

---

## 1. Core Thesis

Every action in the game is a Japanese sentence. Playing well and speaking well are the same skill.

A turn is not "play cards, attack" — a turn is *saying things that happen*. The board is a sentence under construction: Subjects act, particles bind, verbs resolve, conjugations transform. The game guide teaches 「猫が犬を食べる」 the way a textbook does, because in this game that sentence *is* the move.

**Design law:** every mechanic must be derivable from real grammar, and every grammar point taught must be playable. If a mechanic can't be explained by quoting the textbook, cut it. If a grammar point can't become a mechanic, it doesn't enter the game (yet).

---

## 2. The Grammar → Mechanic Taxonomy

Five stable mapping rules. Every future grammar point slots into exactly one.

| Grammar category | Becomes | Example |
|---|---|---|
| **Nouns (名詞)** | Objects — persistent pieces on the board | 猫 is a 1/1 body |
| **Particles (助詞)** | Targeting & relationships — who acts on what, how | を = acts on enemy Object; に = directed at hero |
| **Verbs (動詞) & conjugations** | Actions & action *transformations* | 食べる acts; 食べて chains; 食べられる redirects |
| **Adjectives/Adverbs (形容詞・副詞)** | Modifiers on Objects and on Verbs | 強い buffs; 早く makes it act first |
| **Sentence patterns (文型)** | Techniques — turn-level plays, conditions, states | 〜たら = trap; 〜ている = ongoing state |

Emotions (感情) fold into this cleanly: they are predicates whose subject is the **hero** — 「私は嬉しい」. No special type needed; the hero is just another possible subject/topic. (This streamlines the current build.)

---

## 3. Chapters = JLPT Levels

The campaign is the textbook's table of contents. Each chapter's mechanics are locked until reached, and each chapter's "boss" cannot be beaten without using that chapter's grammar.

### Chapter 1 — N5: The Sentence (mostly built already)
The base rulebook. You learn that sentences have subjects, objects, and direction.

| Grammar | Mechanic | Status |
|---|---|---|
| が (subject) | Choose which Object performs a verb | ✅ built |
| を (direct object) | Verb acts on chosen enemy Object | ✅ built |
| に (target/direction) | Redirect action at the enemy hero | ✅ built |
| で (means) | Use a 2nd Object as a tool: its stats amplify the verb | 🔲 designed, stubbed in picker |
| と (with) | Two Objects perform the verb together (combined ATK) | 🔲 designed, stubbed in picker |
| い/な adjectives | Stat & verb modifiers | ✅ built |
| 〜たいです (want to) | Tutor a Verb from deck | ✅ built |
| 〜ています (progressive) | Object gains +1/+1 every turn (ongoing state) | ✅ built |
| 〜ことができます (can) | Extra attack use | ✅ built |
| AはBより (comparison) | ATK rises to surpass target | ✅ built |
| 〜になります (become) | Transform into next-tier Object | ✅ built |
| 〜があります/います (existence) | *Proposed:* reveal/summon — peek top 3 deck cards, take a Noun | 🔲 |
| 〜ないでください (please don't) | *Proposed:* soft lock — enemy Object can't use its keyword next turn | 🔲 |

### Chapter 2 — N4: Flow and Consequence
The chapter where sentences connect. This is where the game becomes deep.

| Grammar | Mechanic |
|---|---|
| **て-form chaining** (食べて、走って…) | **Combo system.** Play multiple verbs in one flowing sentence; each chained verb costs 1 less but the whole chain fizzles if any link's target dies mid-chain. Risk/reward. |
| **〜たら / 〜ば / 〜と (conditionals)** | **Trap cards.** Set a hidden condition: "敵が攻撃したら…" (if the enemy attacks → retaliate). Opponent sees a face-down 条件 marker. |
| **受身 れる/られる (passive)** | **Redirect.** 「猫は犬に食べられた」— force the enemy's next verb/attack onto a target of your choice. |
| **使役 させる (causative)** | **Control.** Make an enemy Object perform one of *your* verbs. Expensive, dramatic. |
| **〜ながら (while)** | An Object attacks *and* performs a verb in the same turn. |
| **〜たことがあります (experience)** | **Graveyard recursion.** Replay the effect of a verb you used earlier this game. |
| **〜すぎる (too much)** | Overload: double a verb's effect, but the subject takes 2 damage (excess is harmful). |
| **可能形 (potential form)** | Grant an Object a persistent ability from a verb (食べられる猫 = cat with a permanent "eat" activated ability). |

### Chapter 3 — N3: Time and Nuance
Timing windows, gradual change, tendency.

| Grammar | Mechanic |
|---|---|
| 〜ようになる (come to be able) | Delayed transformation: choose now, upgrade lands in 2 turns, bigger payoff than になる |
| 〜うちに (while/before state ends) | Timing window: bonus effect only if played while a condition holds (e.g. while you have a frozen enemy) |
| 〜ばかり (just did / nothing but) | Echo: repeat your most recent verb at half effect |
| 〜はずです (should be) | Prediction: declare the card type the opponent draws next; if right, draw 2 |
| 〜てしまう (completely/regrettably) | Finisher: destroy effect, but exiles the card from your game (no recursion) |
| 〜たり〜たり (things like) | Choose 2 verbs from a revealed 4; play both at reduced power |

### Chapter 4 — N2: Rhetoric
Formal, contrastive, concessive patterns → board-wide and rule-bending effects.

| Grammar | Mechanic (sketch) |
|---|---|
| 〜にもかかわらず (despite) | Ignore a negative condition this turn (frozen Objects act anyway) |
| 〜ばかりか (not only… but also) | Your next effect also applies to an additional target |
| 〜ざるを得ない (can't help but) | Force the opponent's hero into a declared action next turn |
| 〜つつある (in the process of) | Board-wide slow transformation |

### Chapter 5 — N1: The Legendary Tier
Rare, literary, archaic patterns → one-per-deck "legendary techniques" with game-warping effects. (〜んがために, 〜まじき, 〜を禁じ得ない…) Each is a boss reward. Sketched later — by design, N1 content should feel earned, both for the player and for us.

---

## 4. Streamlining the Current Build (v2 → v3)

What we keep, merge, or cut to serve the thesis:

1. **Combat becomes a sentence.** Attacking is no longer a separate click-system: it is the verb 攻撃する (or 戦う), free once per Object per turn, following the same subject→particle→target flow. One interaction model for everything. *This is the single biggest streamline.*
2. **Emotions merge into the main system** as hero-subject predicates (「私は嬉しい」). Same cards, no fourth rulebox.
3. **Grammar techniques bar stays** but becomes the *chapter unlock tray* — techniques appear as their chapter is reached.
4. **Narration bar stays** as the "fluency mode" — the expert path that can express anything the buttons can. Long-term: narration in Japanese for bonus effects (say it in Japanese, get +1 power — production practice as a gameplay incentive).
5. **The Guidebook (図鑑) becomes a first-class screen:** every grammar point's page shows textbook explanation + example sentence + its mechanic, side by side. This IS the textbook-as-game-guide. Cards link to their pages.

---

## 5. Open Design Questions (deciding together)

1. **Progression model:** full campaign (chapters unlock via bosses) vs. sandbox (all mechanics available, guidebook organizes them by level)? Campaign is more game; sandbox is more study tool.
2. **Combat-as-verb:** commit to it? It's elegant but changes the feel — attacking gains one extra step (particle flow) unless we default 攻撃 to を automatically.
3. **Deck identity per chapter:** do decks grow as chapters unlock (RPG-ish), or does each chapter have a self-contained deck teaching its grammar (lesson-ish)?
4. **Sentence log as story:** end-of-match, the log of every sentence played is replayed as the "story of the battle." Cheap to build, huge for the storytelling identity. Include in v3?

---

*Pattern lists cross-referenced with hanabira.org's JLPT grammar database (CC BY-SA). All game mechanics are original interpretations.*
