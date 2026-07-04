import type { Episode } from './episodes'

/* =====================================================================
   SEASON 6 (episodes 51-60) — "The Spring Season"
   Arc: sakura bloom over the whole town (world objects, days 51-60),
   and the sixty-year courtship finally happens: grandma × the old man.
   Dr. Mori arrives ep54 (16th resident — she never leaves). The town
   tries desperately not to interfere and fails constantly. Finale ep60:
   THE POND WEDDING — small, petals on the water, koi in attendance.
   Symmetry with S2/S4 everywhere: this time the elders practice, the
   player coaches, the ribbon comes home.
   ===================================================================== */

export const SEASON6: Episode[] = [

/* ============================== EP 51 ============================== */
{
  ep: 51,
  title: '第51話 「春の花火」 — Fireworks and First Blossoms',
  night: true,
  words: ['fireworks', 'cherry blossom', 'color', 'rise', 'vanish', 'can see', 'far', 'near'],
  story:
    `Spring arrives twice in one evenin', bud. First: the {cherry blossom} — overnight, every tree in town's gone pink, ` +
    `and the whole map looks like it's blushin'. Second: tonight's Concept C, the flower {fireworks} your best man's been ` +
    `guardin' like a state secret since the hard season. The whole town gathers on the hill at dusk. Two particular ` +
    `townspeople, ya notice, arrive together. From the pond direction. Everyone notices. Everyone heroically pretends not to.`,
  timerSec: 300,
  quests: [
    { word: 'cherry blossom', type: 'inspect', obj: 'sakura_park', stage: 0,
      ask: `The first {cherry blossom} tree, in the park, fully pink before breakfast. The old man's already beneath it with tea. "Right on schedule," he says. Him and schedules have an understandin' now.` },
    { word: 'fireworks', type: 'talk', npc: 'friend', stage: 1,
      ask: `Concept C briefin': "{fireworks}, flower-shaped, nine minutes, finale withheld even from MYSELF for emotional protection. Hill. Dusk. Bring your wife and your feelings."` },
    { word: 'color', type: 'talk', npc: 'trinity', stage: 2,
      ask: `"Pick a {color}," Trinity demands, holdin' two spring scarves. Ya pick wrong. Ya always pick wrong. She wears your wrong pick anyway, which is how marriage works.` },
    { word: 'rise', type: 'do', loc: 'hill', verb: 'walk', amount: 400, stage: 3,
      ask: `Climb as the lanterns {rise} along the path — the whole town streamin' uphill with blankets and snacks and one cat ridin' a shoulder like an admiral.` },
    { word: 'can see', type: 'talk', npc: 'oldman', stage: 4,
      ask: `"From here ya {can see} the whole town," the old man says to grandma, not to you, definitely not to you, "every place a life happened." Grandma, quiet: "And a few where one's still startin'." Ya walk away VERY fast.` },
    { word: 'far', type: 'talk', npc: 'tmother', stage: 5,
      ask: `"We came so {far} for this view," Trinity's mom says — she and her husband moved into the inn plot THIS WEEK. "Four hours by car, dear. Now: four minutes on foot. The correct distance to a daughter."` },
    { word: 'vanish', type: 'talk', npc: 'sister', stage: 6,
      ask: `The first shell blooms and {vanish}es — a gold peony a hundred meters wide. Your sister forgets to film it. Forgets she HAS a phone. Just points, mouth open. Some things are only for eyes.` },
    { word: 'near', type: 'talk', npc: 'grandma', stage: 7,
      ask: `Durin' the finale — the one that paints the sky like a whole garden — ya notice grandma and the old man standin' very {near}. Nearer than walkin'-arrangement near. Her hand's in his. Nobody says anything. The fireworks say all of it.` }
  ],
  stageToasts: {
    1: `🌸 THE TREES. LOOK AT THE TREES. The whole town went pink overnight!`,
    2: `🎆 The best man requests your presence for the Concept C briefin'. It's got a briefin'.`,
    3: `🧣 Scarf diplomacy's required before departure. Choose bravely. Lose gracefully.`,
    4: `🏮 The hill path's glowin'. The whole town's climbin'. Join the river of blankets.`,
    5: `🌆 Two elders have claimed the best viewpoint and are bein' extremely subtle. They're not subtle.`,
    6: `🏡 New neighbors alert: the inn plot's got OCCUPANTS as of this week.`,
    7: `💥 It begins. Nine minutes of flowers in the sky. Watch everything. Especially the people.`
  },
  npcLines: {
    trinity: [
      `One year ago I didn't know this hill existed. Since then: engaged on it, married on it, and tonight it's covered in my whole family watchin' flowers explode. Hills should all be so lucky.`,
      `@7 I saw the hands too. DON'T look. Don't ruin it. Some things bloom faster if nobody points at 'em. Like me at the bakery. Like THEM.`
    ],
    mom: [
      `I packed picnic blankets for twelve and food for thirty. The math's correct. This town's never once been twelve people at anything.`,
      `@7 My MOTHER's holdin' HANDS on a HILL. I'm lyin' face-down in the blanket. Someone narrate the fireworks to me.`
    ],
    dad: [
      `Optimal blanket position: secured at NOON. Twelve hours early. Your father doesn't play games. Except the waitin' game. At which I am CHAMPION.`,
      `@6 Your sister went silent for the gold one. Carve the date somewhere. Last time she went silent, bread was involved.`
    ],
    sister: [
      `@6 I got footage of everything that's ever happened in this town and NOTHIN' of the best firework ever. And ya know what? Correct. Eyes only. Limited edition.`,
      `The sakura came overnight?! Trees can just DO that?! Silent for months and then BOOM, pink, no warnin'. Trees understand drama better than television.`
    ],
    friend: [
      `@1 Two years I sat on Concept C. TWO YEARS. Through a weddin' — too big. Through the hard season — not yet. Tonight: RIGHT. Best man instincts, buddy.`,
      `@7 The finale was flowers becomin' MORE flowers and at the peak two eighty-year-olds held hands and my fireworks got UPSTAGED and I've never been happier.`
    ],
    shopkeeper: [
      `Blanket sales, thermos sales, and every last daifuku: GONE by four. Spring's the store's favorite customer and it always pays in full.`,
      `@7 From my spot I could see the sky, the pond, and the hands. Sixty years of sellin' that man flour and that woman vegetables. Tonight the inventory finally combined.`
    ],
    trainer: [
      `HILL SPRINT NIGHT! I carried four families' picnic baskets up in relay! Spring cardio disguised as chivalry! The FORM! The HEART! The POTATO SALAD!`,
      `@7 Sensei and the sensei's... sensei-FRIEND watched from the crest with perfect posture. Even their ROMANCE has core stability. I'm takin' notes.`
    ],
    boss: [
      `The office closed early for "atmospheric research". Nine minutes of flower fireworks over a pink town. Conclusion: whatever we pay attention to the rest of the time's overrated.`,
      `@5 The in-laws bought the inn plot. Four-minute walk to their daughter. In business we call that an acquisition with excellent synergies. Here we call it Tuesday.`
    ],
    coworker: [
      `Gerald viewed the fireworks from the office window, havin' declined the hill on grounds of "root stability". He saw every burst doubled in the glass. He chose the better seat. Plants optimize.`,
      `@7 Hand-holdin' observed at 20:41, duration: the entire finale plus four minutes after the sky went dark. The archive notes it in gold ink. We keep gold ink for exactly this.`
    ],
    oldman: [
      `@4 Sixty springs I watched from this hill alone and called it peaceful. It WAS peaceful. But peaceful and complete turn out to be different words, young one. This spring I finally checked.`,
      `@7 She reached first. Let the record show — no. Let the record show nothin'. Some moments aren't for records. Just for keepin'.`
    ],
    cat: [
      `Fish-Thief rode the coach's shoulder up the hill like an admiral reviewin' a fleet, watched precisely one firework, and slept through the other eight and a half minutes. Legends nap where they please.`
    ],
    grandma: [
      `@7 It's called keepin' warm, dear. April evenings are treacherous. ...The fireworks were also warm. And the walk after. Spring's a very warm season, and that's ALL the commentary you're gettin'. FINAL.`,
      `The sakura took sixty years and one night, if ya think about it proper. Trees and I have always understood each other, dear.`
    ],
    tmother: [
      `@5 The inn plot papers signed Tuesday, furniture Friday, and my binder for the NEXT weddin' — whosever it may be, no assumptions — has been at the printer since MONDAY.`,
      `Four minutes from my daughter. I measured the walk myself, twice, once in rain. Correct in all weather. We're home, dear.`
    ],
    tfather: [
      `WE LIVE HERE NOW! Officially! I helped the innkeeper fix his gutter this mornin' as a NEIGHBOR, not a guest! He cried! I cried! The gutter's PERFECT!`,
      `@7 Flower fireworks above, hand-holdin' elders below, my daughter healthy on a blanket. I used zero towels tonight, son. I just let it happen. GROWTH.`
    ],
    kenji: [
      `Spring health advisory: hanami season correlates with a town-wide spike in joy and a small spike in twisted ankles on the hill path. Acceptable exchange rate.`,
      `@7 I observed two elevated pulses at the crest and for once prescribed absolutely nothin'. Some cardiology's none of my business. My teacher arrives in three days.`
    ]
  }
},

/* ============================== EP 52 ============================== */
{
  ep: 52,
  title: '第52話 「デート大作戦」 — Operation First Date',
  words: ['date', 'plan', 'cafe', 'order', 'hide', 'be found', 'joke', 'secrecy'],
  story:
    `Your sister bursts in at breakfast with intelligence: grandma and the old man have a {date}. A REAL one — the {cafe} ` +
    `two streets over, noon, she heard grandma bookin' the good table. Within the hour the town's formed a covert operations ` +
    `committee (against every one of your objections, recorded in the minutes and then ignored). The mission: observe, ` +
    `protect, and above all remain unseen. The town's legendarily, catastrophically bad at remainin' unseen. The elders, ` +
    `it'll turn out, counted on exactly that.`,
  timerSec: 315,
  quests: [
    { word: 'date', type: 'talk', npc: 'sister', stage: 0,
      ask: `"A {date}. A REAL one. Cafe. Noon. GOOD TABLE." Your sister delivers the intel like a war correspondent, vibratin'. "I already alerted everyone. I couldn't stop myself. I didn't TRY to stop myself."` },
    { word: 'plan', type: 'talk', npc: 'friend', stage: 1,
      ask: `Operation HQ (your kitchen) has a {plan} on a whiteboard. Where'd the whiteboard come from. Why's the coach got binoculars. Why's Gerald wearin' camouflage (one leaf, taped on). Nobody answers ya.` },
    { word: 'secrecy', type: 'talk', npc: 'mom', stage: 2,
      ask: `Mom swears everyone to {secrecy} with the gravity of a state ceremony. Fourteen people, hands raised. The fourteen LOUDEST people alive, swearin' to be quiet. Ya already know how this ends.` },
    { word: 'order', type: 'buy', item: 'a decoy shopping basket', stage: 3,
      ask: `Your cover: shoppin'. {order} somethin', anything, look natural. The shopkeeper hands ya a pre-packed decoy basket: "Third one today. I'm sellin' ALIBIS now. Best margin in the store."` },
    { word: 'hide', type: 'do', loc: 'park', verb: 'walk', amount: 450, stage: 4,
      ask: `The route to the cafe passes the park. Fourteen townspeople attempt to {hide} along it: behind trees (too thin), the stand (closed, suspicious), one bench (the coach, horizontal, "bein' a log"). Worst surveillance in history.` },
    { word: 'be found', type: 'talk', npc: 'coworker', stage: 5,
      ask: `Ya {be found} — ALL of ya — in eleven seconds, 'cause Gerald's pot's on the cafe windowsill and grandma recognizes his lean. "The plant," she says through the glass, "has been here since NINE." The operation's blown. By a fern.` },
    { word: 'joke', type: 'talk', npc: 'trinity', stage: 6,
      ask: `Trinity's laughin' too hard to stand: "The {joke}'s on all of ya — they SET THE TIME KNOWIN' sister would hear. Grandma booked the good table LOUDLY. On PURPOSE. Ya were the entertainment." 'Course. OF COURSE.` },
    { word: 'cafe', type: 'talk', npc: 'grandma', stage: 7,
      ask: `The elders emerge from the {cafe} arm in arm, unbothered, radiant. "Lovely {date}," grandma announces to the assembled fourteen. "The show outside was excellent too. The log was my favorite. Same time next week — do bring the plant." FINAL.` }
  ],
  stageToasts: {
    1: `📋 There's a whiteboard in your kitchen and a committee ya never approved. It's got MINUTES.`,
    2: `🤫 The secrecy oath's bein' administered. Loudly. Ominously loudly.`,
    3: `🧺 Ya need a cover story. The store's apparently sellin' 'em pre-packed.`,
    4: `🌳 Deployment! Fourteen amateurs attempt invisibility along the park route.`,
    5: `🪴 The operation's unravelin'. The point of failure is... botanical.`,
    6: `😂 Trinity's connected the dots and is losin' her mind. Go get the truth.`,
    7: `☕ The cafe door's openin'. The elders are comin' out. Stand up straight, everyone.`
  },
  npcLines: {
    trinity: [
      `@6 They played the ENTIRE town like a shamisen. Sixty years of watchin' this place operate and they weaponized it for a laugh on their FIRST date. I aspire. I ASPIRE.`,
      `I was the only one who refused to join the stakeout, and I want that in the town record. ...I watched from our window with tea. That's DIFFERENT. That's ambiance.`
    ],
    mom: [
      `@2 Fourteen people took my secrecy oath and thirteen of 'em broke it within the hour by whisperin' about the oath. I broke it FIRST, tellin' your father, who was already there.`,
      `@7 "The log was my favorite." My mother reviewed our stakeout like a THEATER CRITIC. Never been so proud and so roasted at once.`
    ],
    dad: [
      `My assignment was "casual newspaper man on the corner". Haven't read a physical newspaper in nine years. Held it upside down. AGAIN. I contain no stealth.`,
      `@5 Blown by GERALD. Not the coach-log. Not my newspaper. The PLANT. There's a lesson there and I refuse to learn it.`
    ],
    sister: [
      `@0 I held the intel for FOUR MINUTES before tellin' everyone, which is my personal record for secrecy and honestly belongs in the archive under "growth".`,
      `@7 She invited the PLANT to the next date and not ME?! ...Okay Gerald outperformed me operationally, that's FAIR, but it STINGS.`
    ],
    friend: [
      `@1 The whiteboard's from my garage, the plan's got three phases, and phase three was just "everyone act natural" in red, circled. We never reach phase three. We never reach phase three.`,
      `@7 Fourteen of us, made in eleven seconds, and the elders TIP US for the show. Out-planned by two eighty-year-olds. Framin' the whiteboard.`
    ],
    shopkeeper: [
      `@3 Alibi baskets, forty percent margin, and every buyer thinks they're the only one. Forty years watchin' this town do covert ops. I'm the war economy.`,
      `@7 They came in after and bought daifuku "for the surveillance team". Gave the town discount. Everyone in this story's my favorite customer.`
    ],
    trainer: [
      `@4 I was the log for FIFTY minutes. Full plank hold. Core: destroyed. Cover: PERFECT 'til she saw me immediately. "My favorite." I ACCEPT THE HONOR.`,
      `Surveillance's just posture plus patience! We failed at BOTH except me who failed at only one! The gym adds a stealth class Tuesdays! It'll fail too! ENTHUSIASTICALLY!`
    ],
    boss: [
      `I declined a role on grounds of dignity, then watched the whole thing from the office window with a coffee and, I confess, opera glasses. Middle management: judgin' from a distance since forever.`,
      `@5 Undone by the office plant on a windowsill. In thirty years of corporate espionage stories, the most realistic outcome I've ever witnessed.`
    ],
    coworker: [
      `@5 Gerald was NOT part of the operation. He had a PRIOR ENGAGEMENT — the cafe waters its sill plants Thursdays and he'd arranged a guest spot. His social calendar outpaced our intelligence. So proud. So embarrassed.`,
      `After-action report filed: total mission failure, morale outcome: highest ever recorded. Recommendation: fail exactly like this at every future opportunity.`
    ],
    oldman: [
      `@7 We knew before ya knew, young one. She said, "let 'em come — a town that loves ya loudly should get a good seat." So we gave the fourteen of ya a matinee. The log was outstandin'.`,
      `Sixty years I fed pigeons alone at noon. Today I had coffee with a marathon champion while our whole family hid badly in shrubbery. Growth comes to all of us, at every age.`
    ],
    cat: [
      `Fish-Thief declined all operational roles and simply walked INTO the cafe, sat at the good table's third chair, and was served cream. While fourteen humans hid in bushes. Study him.`
    ],
    grandma: [
      `@7 The good table, dear, is beside the window PRECISELY so one can review the entertainment. The log. The upside-down newspaper. Best first date this town's staged in sixty years.`,
      `A lady announces her cafe reservation at proper volume, dear. How else would the town know when the show starts? Logistics. FINAL.`
    ],
    tmother: [
      `I was invited to join the surveillance and countered with a better offer: I catered it. Fourteen field rations, individually wrapped. A WELL-FED farce.`,
      `@7 She staged her own first date as dinner theater for the family. I've met my match, and she's eighty, and I couldn't be more delighted.`
    ],
    tfather: [
      `My stakeout position was "man admirin' the pond". I DO admire the pond! Only honest cover in the operation! The koi kept my secret! The koi are PROFESSIONALS!`,
      `@7 They walked out arm in arm and thanked us for comin'. I cried into the decoy radishes, son. The radishes knew everything.`
    ],
    kenji: [
      `I was invited and cited doctor-patient boundaries, then "happened" to do a walkin' house call along the park at 11:58. Medical ethics are flexible in matters of town romance.`,
      `@7 Post-date vitals, offered voluntarily by both parties, smugly: excellent. The prescription remains: weekly. The whole arrangement, weekly. Indefinitely.`
    ]
  }
},

/* ============================== EP 53 ============================== */
{
  ep: 53,
  title: '第53話 「お節介会議」 — The Interference Summit',
  words: ['opinion', 'plans', 'consultation', 'looking after', 'in the way', 'be silent', 'kind', 'oneself'],
  story:
    `It was inevitable: the town loves too loud. Within a week of the cafe date there's THREE separate committees ` +
    `"helpin'" the courtship — a schedule of chaperoned walks (mom), a nutrition plan for "romance stamina" (the coach), ` +
    `and a nineteen-tab strategy binder (ya know exactly whose). Today it all collides in one glorious town {consultation} ` +
    `at the office — 'til a small, silver-haired woman walks in, lets everyone finish, and dismantles the whole apparatus ` +
    `with four sentences. The town learns the season's lesson: love needs witnesses, not managers.`,
  timerSec: 300,
  quests: [
    { word: 'opinion', type: 'talk', npc: 'mom', stage: 0,
      ask: `Mom's got an {opinion} on the courtship pace: "Sixty years of waitin' and now WEEKLY? At this rate the weddin's in a decade! Someone must ACCELERATE matters—" Mom. MOM. Breathe.` },
    { word: 'plans', type: 'talk', npc: 'tmother', stage: 1,
      ask: `Trinity's mom unveils her {plans}: nineteen tabs, a courtship roadmap, milestone dates. "Purely advisory," she insists. Tab six is labeled RING LOGISTICS. Tab six has SUB-TABS.` },
    { word: 'consultation', type: 'talk', npc: 'boss', stage: 2,
      ask: `The boss convenes the full town {consultation} in the office. "Agenda item one: are we helpin' or meddlin'. Agenda item two: assumin' meddlin', how to meddle BETTER." At least he's honest about it.` },
    { word: 'looking after', type: 'talk', npc: 'trainer', stage: 3,
      ask: `The coach presents his "{looking after} regimen": couples stretches, romance-optimal hydration, a pamphlet titled LOVE IS A MUSCLE (ya recognize the quote; grandma will NOT be credited). It's laminated. 'Course it's laminated.` },
    { word: 'in the way', type: 'talk', npc: 'sister', stage: 4,
      ask: `Your sister, of all people, sees it first: "Guys. We're {in the way}. They waited sixty years for privacy and we've assigned 'em a HYDRATION SCHEDULE." The room goes quiet. Outta the mouths of babes with clipboards.` },
    { word: 'be silent', type: 'talk', npc: 'grandma', stage: 5,
      ask: `The door opens. Grandma. She lets every committee finish, fully, polite. Then: "Watch me {be silent} about each of YOUR courtships, dears. Every detail I know. And I know EVERYTHING." Fourteen adults inspect the floor. Motion carried.` },
    { word: 'kind', type: 'talk', npc: 'trinity', stage: 6,
      ask: `"They're not wrong to love this hard," Trinity says after, {kind} as ever. "They just forgot the difference between holdin' a lantern for someone and grabbin' the wheel. This town holds lanterns BEST. Someone should remind 'em."` },
    { word: 'oneself', type: 'talk', npc: 'oldman', stage: 7,
      ask: `Ya find the old man at the pond, unbothered by all of it. "Let an old man court as {oneself}, young one — slow, with bread, at pond-pace. We're not behind schedule." He smiles. "We're sixty years of exactly on time."` }
  ],
  stageToasts: {
    1: `📒 A nineteen-tab courtship binder's been sighted. Tab six has sub-tabs. Investigate.`,
    2: `🏢 A full town consultation's been called. About someone else's romance. Naturally.`,
    3: `💪 The coach has laminated somethin'. This is always a warnin' sign.`,
    4: `💡 Wait — the youngest person in the room's makin' the most sense. Listen.`,
    5: `🚪 The door. It's HER. Everyone assume innocence. It won't work.`,
    6: `🏮 Lanterns, not steerin' wheels. Trinity's got the season's thesis. Hear it.`,
    7: `🌊 The pond, at dusk. Ask the man himself how he feels about all the "help".`
  },
  npcLines: {
    trinity: [
      `@6 For the record: when WE were courtin', this town hid behind trees, staged a proposal, and fired a cannon. We turned out great. But we were TWENTY-SOMETHINGS. These two've been ready sixty years. Different recipe. Less cannon.`,
      `My mother relabeled tab six from RING LOGISTICS to RESPECTFUL DISTANCE within an hour of grandma's visit. Fastest binder retreat in recorded history. I'm framin' the old tab.`
    ],
    mom: [
      `@0 I KNOW, I know. She's my mother and I've waited my whole life to watch her be happy and I got... enthusiastic. Chaperoned walks. She chaperoned MY walks. The wheel turns and apparently I grabbed it.`,
      `@5 She knew about the summit before the summit. Let us BUILD the whole meddlin' machine just to dismantle it in person. My mother doesn't stop lessons. She schedules 'em.`
    ],
    dad: [
      `My contribution was one suggestion that the old man might like help fixin' his gate. His gate's PERFECT. He built it. I just wanted to stand near the romance holdin' tools. Guilty.`,
      `@5 Four sentences. FOUR. I've seen her end arguments, races, and a card game with a mayor. But dissolvin' three committees in four sentences is a personal best. We wrote 'em down. For science.`
    ],
    sister: [
      `@4 I noticed 'cause it's EXACTLY what everyone did to me about the school art contest. Scheduled my inspiration. Hydrated my creativity. Cheer loud, steer never. You're all WELCOME.`,
      `Grandma winked at me on her way out. Just me. I've been knighted. Don't know for what yet but I'm KEEPIN' it.`
    ],
    friend: [
      `I was on the walks committee and my only proposal was "leave snacks at intervals along their route like a romance aid station". Which — no. NO. I hear it now. Lantern, not wheel. Learnin'.`,
      `@7 Pond-pace, the man says. Sixty years of exactly on time. Smoothest thing anyone in this town's ever said and I ONCE PLANNED TWO WEDDINGS.`
    ],
    shopkeeper: [
      `All three committees bought supplies from me: clipboard, laminator sheets, binder tabs. I'm not proud. I'm SOLVENT. There's a difference and I know exactly where it is.`,
      `@5 When she finished the four sentences, the whole office bought apology daifuku on the way out. Fourteen boxes. I threw in the fifteenth for the plant. NOBODY's innocent.`
    ],
    trainer: [
      `@3 The hydration schedule was LOVE! Aggressive, laminated love! ...It was also meddlin'. Sensei-friend explained it gentle: "water the garden, dear, not the gardeners." I've laminated THAT instead.`,
      `New pamphlet, corrected: LOVE IS A MUSCLE — AND IT TRAINS ITSELF. Foreword by me. Approval pendin' from both sensei. I have LEARNED.`
    ],
    boss: [
      `@2 In my defense, the consultation had proper minutes, an agenda, and a quorum. In everyone's defense, it was the most lovingly intentioned nonsense this office ever hosted. Dissolved the moment she entered.`,
      `Management lesson forty years in: the best oversight's a warm light and an open door. A grandmother taught the entire org chart in one afternoon, free of charge. HR's updatin' the handbook.`
    ],
    coworker: [
      `Gerald's resigned from the walks committee, citin' conflict of interest: he's PERSONALLY invited to the next cafe date. His loyalty was never to the operation. It was to the windowsill. Respect.`,
      `@5 Minutes of the summit, final line, verbatim: "Meeting dissolved by superior authority." Filed under both GOVERNANCE and GRANDMOTHERS. No higher authority than the second category.`
    ],
    oldman: [
      `@7 Committees, binders, hydration charts. Sixty years alone and now the problem's TOO MUCH family. I complain the way a warm man complains about a heavy blanket. Not seriously. Never seriously.`,
      `She handled the town so I wouldn't have to. That's what she's like. In 1964 she handled a whole race and still had breath to critique my crust. Some people are built with extra hands.`
    ],
    grandma: [
      `@5 Four sentences, dear, and I'll teach 'em to ya for your daughter's courtship someday: "Thank you. We know. We waited longer than your committees have been alive. Sit down." Punctuation does the rest. FINAL.`,
      `They love like a brass band, this family. All I asked is that they play from the AUDIENCE. ...They'll forget by the weddin', of course. Good. A little brass at a weddin' is correct.`
    ],
    tmother: [
      `@1 Tab six is retired, but the ring logistics were IMPECCABLE. When the moment comes — organically, at pond-pace — a certain jeweler's already... no. NO. Respectful distance. I'm practicin'. It's agony. I'm EXCELLENT at it.`,
      `She dissolved my binder with four sentences and then complimented the tab typography on her way out. That woman wins twice in every exchange. I'm keepin' notes like a student.`
    ],
    tfather: [
      `I was not on any committee, son, and I'd like the record to show it's 'cause my wife filled our household's meddlin' quota single-handed— she's readin' this over my shoulder. I was on ZERO committees. HELP.`,
      `@7 Pond-pace. Sixty years of exactly on time. I wrote it on a napkin and put it in my wallet next to the two-word speech. My wallet's becomin' this town's greatest anthology.`
    ],
    kenji: [
      `Medical opinion, submitted in absentia: the only prescription either party requires is privacy, bread, and each other. Refills: unlimited. The committee dissolved before readin' it. Patient outcomes unaffected. Ideal.`,
      `@5 My teacher arrives Monday and I told her this story on the phone. She said "Ha," then — historic first — "save me a seat at the NEXT summit." The town's already corrupted her. She hasn't even arrived.`
    ]
  }
},

/* ============================== EP 54 ============================== */
{
  ep: 54,
  title: '第54話 「森先生、来る」 — Dr. Mori Arrives',
  words: ['train', 'station', 'get off', 'luggage', 'city', 'countryside', 'patient', 'get on'],
  story:
    `The 10:15 {train} from the city carries exactly one legendary surgeon, two suitcases, and zero idea what she's ` +
    `walkin' into. Dr. Mori — the hands that fixed Trinity's heart, the teacher who taught Kenji, the woman whose entire ` +
    `review of this town's so far been the word "Ha" — is comin' to visit "for two days". The town's been preppin' for a ` +
    `week. Kenji's cleaned the clinic four times. The koi, the cat, and the grandmother with the resting pulse are all on ` +
    `her stated itinerary. Two days. The town privately gives her a week before she's lookin' at real estate. The town's ` +
    `wrong. It takes four days.`,
  timerSec: 300,
  quests: [
    { word: 'train', type: 'talk', npc: 'kenji', stage: 0,
      ask: `"Her {train} lands at 10:15," says Kenji, adjustin' the clinic sign for the ninth time. "Twenty years of medicine and my hands are steady. My teacher visits and I've alphabetized the BANDAGES." Twice, actually. He did it twice.` },
    { word: 'station', type: 'do', loc: 'street', verb: 'run', amount: 500, stage: 1,
      ask: `The {station}'s past the east edge of town — RUN, the whole welcome committee's already streamin' that way with a banner your sister made. It says WELCOME DR. MORI and features Nurse Cat prominently. She'll understand within days.` },
    { word: 'get off', type: 'talk', npc: 'mori', stage: 2,
      ask: `She {get off}s the train, surveys the platform — the banner, the fourteen faces, the cat sittin' at attention — and delivers her arrival speech in full: "I {get off} ONE train." A pause. The corner of her mouth moves one millimeter. The town exhales. She likes us.` },
    { word: 'luggage', type: 'talk', npc: 'tfather', stage: 3,
      ask: `Her {luggage}: two large cases. Trinity's dad materializes: "ALLOW ME." Both cases, one trip, the sacred rule upheld. Dr. Mori watches him carry 'em like a man auditionin' for somethin'. "The countryside," she notes, "has better porters than the Grand Hotel."` },
    { word: 'city', type: 'talk', npc: 'mori', stage: 4,
      ask: `"In the {city}," Dr. Mori observes on the walk in, "nobody greets the surgeon. Here I've been greeted by the entire population and assessed by a cat." The cat walks beside her. He's cleared her. Everyone saw him clear her.` },
    { word: 'countryside', type: 'talk', npc: 'oldman', stage: 5,
      ask: `The old man welcomes her at the stand with warm bread: "The {countryside} apologizes for its pace. Everything here takes sixty years." Dr. Mori, chewin', eyes closed: "...I begin to see why ya all wait." He gives her the corner piece. HISTORIC.` },
    { word: 'patient', type: 'talk', npc: 'grandma', stage: 6,
      ask: `The itinerary's main event: grandma. "So. The {patient} with the resting pulse." Dr. Mori takes her wrist, waits, and blinks — actually blinks. "This is the pulse of a sleepin' teenager." Grandma: "I'm EIGHTY-ONE and mid-courtship, dear. Do keep up." Mori writes somethin'. Might be a fan letter.` },
    { word: 'get on', type: 'talk', npc: 'cat', stage: 7,
      ask: `Evenin', at the clinic. Fish-Thief evaluates the visitor one final time — and decides to {get on} her lap. Full weight. Motor runnin'. Dr. Mori goes completely still. "Kenji," she says quiet, "what's the protocol." Kenji: "Congratulations, sensei. That's the highest honor this town confers." She stays very still for one hour. She misses her checkout call. Day one.` }
  ],
  stageToasts: {
    1: `🚂 10:15 arrival! The welcome committee's MOVING. The banner's airborne. RUN.`,
    2: `🛬 She's stepped onto the platform and is surveyin'... all of this. Hold your breath.`,
    3: `💼 Two large suitcases. One very large volunteer. Ya know what happens next.`,
    4: `🚶 The walk into town's begun. She's makin' observations. The town's bein' observed.`,
    5: `🥖 The stand's got fresh bread and sixty years of hospitality ready. Introduce her.`,
    6: `👵 The main event: the legendary pulse. Get close enough to watch history.`,
    7: `🐾 The final assessor approaches the visitor. All evaluations end with him.`
  },
  npcLines: {
    trinity: [
      `The hands that fixed my heart are currently holdin' a bread roll while a cat audits her. I hugged her on the platform for a very long time. She said "Ha" into my shoulder. It meant everything. I speak fluent Mori now.`,
      `@6 She met grandma and BLINKED. Kenji says he's seen her not-blink through nine-hour surgeries. My family broke the unbreakable doctor in one wrist-grab. 'Course we did.`
    ],
    mom: [
      `The woman who saved my daughter-in-law eats at MY table tonight. I've cooked since dawn. Six courses. Seven. EIGHT. Your father's been sent for more plates twice.`,
      `@7 She missed her hotel call 'cause the CAT chose her lap. Two suitcases, two days. We've all seen this episode. Tell the innkeeper to prepare the long-stay room. Gently.`
    ],
    dad: [
      `I shook her hand on the platform and said "thank you for our girl" and couldn't say anything else, and she nodded like I'd given a full speech. Surgeons understand what hands mean. Even shakin' ones.`,
      `@3 Her luggage taken in one trip by the OTHER dad. I carried the BANNER. We each serve, son. The banner had structural issues. It needed a professional.`
    ],
    sister: [
      `The banner took me three days. Nurse Cat's on it TWICE. She looked at it a long moment and said "the cat is anatomically accurate." BEST REVIEW OF MY CAREER.`,
      `@6 Grandma out-pulsed the legend. I got it ON VIDEO this time. The blink's FRAME PERFECT. Gold ink section. OBVIOUSLY.`
    ],
    friend: [
      `I offered her the full best-man town tour: proposal hill, weddin' hill — same hill, efficient town — the pond of destiny, the corridor where the tile named Steve lives. She said "All of it." ALL OF IT. She gets us.`,
      `@7 Cat approval on DAY ONE. Took the suit man THREE VISITS. The town's decided. She just doesn't know she lives here yet.`
    ],
    shopkeeper: [
      `She came in for tea supplies and inspected my shelf organization in complete silence for two full minutes. Then: "logical." Been reviewed by health inspectors and grandmothers. Nothin' ever felt like that "logical".`,
      `@5 The corner piece. He gave her the CORNER PIECE on day one. The bread line'll be discussin' it for a month. No bitterness. She earned it in surgery. The crust economy is just.`
    ],
    trainer: [
      `A CITY LEGEND in our town! I offered a complimentary gym assessment! She looked at my posture and said "you already know you're fine." SHE ASSESSED ME BACK. INSTANTLY. Never respected anyone faster.`,
      `@6 The resting pulse of a sleepin' teenager at eighty-one. The pamphlet's half-written: GRANDMA PACE: THE SCIENCE. Dr. Mori's agreed to peer review it. THE GYM'S GOT A PEER-REVIEWED PAMPHLET NOW.`
    ],
    boss: [
      `I met her at the welcome dinner and thanked her for the finest outcome this town ever received. She said, "your town did half the surgery — I've never operated on a patient that loved before." I required a moment. Several.`,
      `@7 Missed checkout, immobilized by cat. I've watched this openin' move before — Kenji, the in-laws, the original suit man. The town recruits slowly and then all at once. Prepare the paperwork.`
    ],
    coworker: [
      `Gerald was introduced as "ward veteran, window division" and Dr. Mori shook his LEAF. Deliberately. With eye contact. She understood the assignment IMMEDIATELY. City people can be trained.`,
      `@2 "I get off ONE train." Six words, one millimeter of smile, fourteen witnesses. Filed under GREATEST ARRIVALS, displacin' grandma-before-her-own-letter to second. The vote was NOT close.`
    ],
    oldman: [
      `@5 She ate the corner piece the way it deserves — eyes closed, no talkin'. City hands, country manners. She'll do well here. ...I said WILL, not WOULD. The pond and I've already discussed it. She stays. Watch.`,
      `Her hands fixed our girl. This town doesn't have medals — we got bread, benches, and belonging. She'll find all three impossible to pack into two suitcases. That's the plan. It's never once failed.`
    ],
    cat: [
      `@7 Fish-Thief conducted the full assessment: platform observation, walkin' escort, stand-side audit, and the final lap trial. Verdict: STAY. He doesn't explain his rulings. The lap was warm and the surgeon held still. Case closed.`
    ],
    grandma: [
      `@6 A charmin' girl, the doctor. Excellent grip, honest eyes, and she blinked at my pulse which was polite of her. I've invited her to Tuesday cards. I'll win, of course, but EDUCATIONALLY. She strikes me as a fast learner.`,
      `Two suitcases means she packed for possibilities, dear. Nobody brings the second suitcase to a place they intend to leave. Your grandmother reads luggage the way doctors read charts. FINAL.`
    ],
    tmother: [
      `A woman of precision, arrived by rail, immune to nonsense, undone by a cat within nine hours. I've already invited her to the book club. She said — I quote in full — "what do ya read." SHE'S PERFECT.`,
      `@3 My husband carried both cases in one trip and then held the door with his FOOT while gesturin' welcome with both arms. The Grand Hotel comparison was apt. I married a full-service establishment.`
    ],
    tfather: [
      `@3 BOTH CASES. ONE TRIP. She called me a better porter than the Grand Hotel and I've been walkin' taller ALL DAY. My wife says the doorframe disagrees. The doorframe started it.`,
      `The woman who saved our girl, eatin' bread at our stand, adopted by our cat, in OUR town — son, I've needed the towel four times today and it's not even dinner. Spring's a POWERFUL season.`
    ],
    kenji: [
      `@0 Twenty years ago she threw me outta her operatin' room for sloppy sutures and told me to come back when my hands believed what my head knew. Today she inspected my little clinic, touched the doorframe I oil for the patients, and said: "your hands got there." I'm FINE. I'm gonna go be FINE in the supply room.`,
      `@7 She missed the checkout call. Tomorrow she'll "extend a day for the koi". Wednesday the onsen. Thursday grandma's card table. I know exactly how this town works and I'm tellin' no one. Some diagnoses ya just let bloom.`
    ]
  }
},

/* ============================== EP 55 ============================== */
{
  ep: 55,
  title: '第55話 「1964年の手紙」 — The Letter from 1964',
  words: ['drawer', 'page', 'handwriting', 'fold', 'wipe', 'green', 'daytime', 'reach'],
  story:
    `It's been in the {drawer} for sixty years. Every home's got one drawer like it — the one that doesn't open. Today, ` +
    `with spring pushin' through every window and his whole life finally movin' again, the old man opens his. Inside: a ` +
    `single {page}, folded twice, addressed to "the runner with the silver ribbon". Written the night after the 1964 ` +
    `judgin'. Never sent — 'cause where do ya send a letter to a stranger who ran past your stall and into sixty years of ` +
    `your thoughts? Today, at last, it's got an address. It's a four-minute walk away.`,
  timerSec: 300,
  quests: [
    { word: 'drawer', type: 'talk', npc: 'oldman', stage: 0,
      ask: `The old man stands before the {drawer} like a man before a door he built himself. "Sixty years I've oiled every hinge in this house except this one," he says. "Today it opens. Stand by me, young one. Doors like this want witnesses."` },
    { word: 'page', type: 'inspect', obj: 'bookshelf', stage: 1,
      ask: `Inside: one {page}, folded twice, soft as cloth from age. Also inside: the 1964 second-place rosette (he keeps his OWN prizes in the open; only this was hidden), and a bakery receipt for "one roll — paid with a sentence".` },
    { word: 'handwriting', type: 'talk', npc: 'grandma', stage: 2,
      ask: `Ya're sworn to secrecy, but grandma sees your face at the stand and reads it like a chart. "That's the look of old {handwriting}, dear," she says quiet. "I know it. I got one of my own. A race bib I never threw away. Number 7. HIS stall was at kilometer 7." Oh. OH.` },
    { word: 'fold', type: 'talk', npc: 'trinity', stage: 3,
      ask: `Trinity helps him {fold} it back along the original creases — sixty-year-old paper only bends where it always bent. "Don't retype it. Don't fix the smudges," she says, fierce. "She waited sixty years. She gets the REAL one, flour thumbprint and all."` },
    { word: 'wipe', type: 'talk', npc: 'mom', stage: 4,
      ask: `Mom reads no further than the first line — "To the runner with the silver ribbon" — before she has to {wipe} her eyes with a dish towel. "It's the dust," she says. There's no dust. There's never any dust. The dish towel knows its real job.` },
    { word: 'green', type: 'talk', npc: 'sister', stage: 5,
      ask: `Your sister notices what everyone missed: "The ink's {green}! Who writes a love letter in GREEN?" The old man, from the doorway: "A baker whose only pen was the ledger pen. I wrote her between the flour orders. It seemed... honest." GREEN INK, the archive'll record. The color of honest.` },
    { word: 'daytime', type: 'talk', npc: 'kenji', stage: 6,
      ask: `"Deliver it in {daytime}," advises Kenji, unexpectedly firm. "Night letters ask questions. Day letters answer 'em. My grandmother's rule — she ran a post office." Dr. Mori, beside him, nods once: "The post office was correct."` },
    { word: 'reach', type: 'talk', npc: 'oldman', stage: 7,
      ask: `Noon. Honest light. He walks it over himself — no envelope, no stamp, sixty years past due. Ya watch from the stand as it finally {reach}es her hands. She reads it once. Then she takes the silver ribbon from her hair — TODAY of all days she wore it — and ties it around his wrist. Neither says a word for a long time. Kilometer 7 is finally, finally passed.` }
  ],
  stageToasts: {
    1: `🗄️ The drawer that never opens is about to open. He asked for ya specifically. Go.`,
    2: `📜 One page, folded twice, older than your parents. Handle everything gentle today.`,
    3: `👵 She read your FACE. Sixty years of intel work doesn't retire. Hear what she knows.`,
    4: `📄 The paper wants to close along its old creases. There's wisdom in that. Help him.`,
    5: `🍲 Your mother's encountered the first line. Dish towel deployed. Comfort optional but recommended.`,
    6: `🖋️ Green ink?! The small detective's found the day's best detail.`,
    7: `☀️ Noon. He's walkin' it over himself. Take your place at the stand. Witness.`
  },
  npcLines: {
    trinity: [
      `@3 The crease lines still hold after sixty years. That's what waitin' properly looks like — ya keep your shape. I'm gonna go hug your grandmother-in-law for approximately one hour.`,
      `@7 She WORE THE RIBBON TODAY. Before she knew. Don't tell me this town isn't magic. I've STOPPED acceptin' alternative explanations.`
    ],
    mom: [
      `@4 "To the runner with the silver ribbon." Eight words in and I was gone. The rest of ya got further and I'm told it gets WORSE. I'm pacin' myself. Like a marathon. A cryin' marathon.`,
      `@7 My mother tied her ribbon on his wrist. In full view of the noon bread line. Fourteen people pretended to study the menu. The menu's got THREE ITEMS. This town couldn't be more mine.`
    ],
    dad: [
      `A letter in a drawer for sixty years. I can't keep a receipt for sixty DAYS. That man's patience built furniture, bread, and one perfect sentence. I feel inspired and organizationally attacked.`,
      `@5 Green ledger ink. Written between flour orders. Son, even the paperwork in this town's beautiful. I'm gonna write your mother a note in whatever pen's honest for me. It's a hardware-store pencil. She'll understand.`
    ],
    sister: [
      `@5 GREEN INK. The Silver Ribbon comic, special issue, needs a new color and I've already biked for the pen. Biggest lore drop since the medal box and I was PRESENT. Historians will interview me.`,
      `@7 I didn't film the ribbon moment. I'm learnin' when the eyes get exclusive rights. ...I drew it from memory within the hour though. Some things ya archive with your HANDS.`
    ],
    friend: [
      `Sixty years between writin' and sendin'. I once panicked 'cause a text sat on "read" for four hours. This town keeps recalibratin' my whole emotional scale, buddy. I need to lie down. On the grass. Dramatically.`,
      `@7 Kilometer 7. Bib number 7. Stall at kilometer 7. The universe left BREADCRUMBS for sixty years and this town finally ate 'em. Greatest love story I've ever staffed, and I've staffed THREE.`
    ],
    shopkeeper: [
      `He bought one envelope this mornin' and returned it at noon. "No envelope," he said. "She should see it the way it always was." I refunded him and closed for ten minutes to compose myself IN THE STOCKROOM.`,
      `@2 A race bib kept sixty years. A letter kept sixty years. Two drawers, four minutes apart, holdin' matchin' halves of the same day. My store sold 'em BOTH their paper for decades and never knew.`
    ],
    trainer: [
      `Kilometer 7 of a marathon's where the body first asks WHY, friends. And at HER kilometer 7 there was BREAD and a BOY. No wonder she never forgot. Race science and romance science are the SAME science.`,
      `@7 The ribbon went around his wrist like a finisher's band. Sixty years. LONGEST RACE EVER RECORDED. Both medaled. I'm addin' a distance category to the town marathon called THE 1964 and nobody can stop me.`
    ],
    boss: [
      `A deliverable sixty years past deadline, received with full honors. Every project manager should study this town: it's never too late if the content's true. I'm replacin' my office wall quote with the letter's first line. With permission. Sought properly.`,
      `@6 Kenji's grandmother ran a post office and Mori-sensei endorsed its doctrine. This town's institutional knowledge spans MEDICINE and MAIL and it's all somehow about love. The onboardin' never ends.`
    ],
    coworker: [
      `Archive status: the GREEN INK addendum's been added to the Silver Ribbon file, cross-referenced with bib #7 and stall km 7. It's now the thickest file, surpassin' THE HARD SEASON. It's all one story anyway. I've linked 'em.`,
      `@7 Gerald observed the delivery from the stand's windowsill. At the ribbon moment, he dropped one leaf. Second recorded instance. Botany journal notified. They've stopped replyin'. They can't HANDLE this town's data.`
    ],
    oldman: [
      `@0 I wrote it the night after the judgin', read it once at dawn, and understood I'd written the truest thing my hands ever made — truer than the bread. So I hid it. Truth that big frightened a young man. It took an old one sixty years to grow into his own handwritin'.`,
      `@7 She tied the ribbon on my wrist and said, "you're late." I said, "the letter says I would be." ...It does, ya know. Last line. Read it at the weddin', young one. You'll see.`
    ],
    cat: [
      `Fish-Thief escorted the letter across town at the old man's heel, the entire four-minute walk, tail vertical — full ceremonial configuration. He's now guarded rings, wards, and mail. No higher courier service in this world.`
    ],
    grandma: [
      `@2 Bib number 7, dear, kept flat in tissue through eleven house moves. Your grandfather knew — found it once, read the number, put it back without one question. That man understood hearts keep files. He had his own drawer too. We never opened each other's. That's ALSO love.`,
      `@7 The letter's not for the archive, not for the comic, and not for ANY of you, dears. It's mine. Sixty years late and worth every one, 'cause look what grew while we waited: all of you. That's the mathematics of it. FINAL.`
    ],
    tmother: [
      `I've catered galas and commanded binders beyond counting, and today I stood in a bread line at noon and watched a man deliver a letter sixty years late, and I applauded ALONE for three seconds before the line joined me. Worth every second of solitary courage.`,
      `@5 Green ledger ink, "the only pen was honest". I'm writin' that down for my book club. We're abandonin' this month's novel. NOTHING published this year can compete with the noon bread line.`
    ],
    tfather: [
      `@7 The ribbon. The WRIST. The sixty years. Son, I did not cry. I'm SERIOUS this time. Somethin' in my chest just became very large and very quiet, and the towel stayed folded. Some moments are past cryin'. That's new information for me.`,
      `A letter in a drawer, a bib in tissue, four minutes apart for YEARS. My wife and I checked our own drawers tonight. Found nothin' but warranties. We resolved to write each other somethin' worth hidin'. The homework never stops, son.`
    ],
    kenji: [
      `@6 My grandmother sorted this town's mail for forty years and said the day shift existed 'cause "love needs witnesses and night has none". Mori-sensei heard the whole story and said her longest sentence since arrival: "Your grandmother and this town deserved each other."`,
      `@7 For the chart — 'cause everything in my life becomes a chart: two elderly patients, one letter, resting pulses throughout, and the single healthiest event I've witnessed in twenty years of medicine. Prescription: proceed to weddin'. Refills: none needed. This one keeps.`
    ]
  }
},

/* ============================== EP 56 ============================== */
{
  ep: 56,
  title: '第56話 「勇気のレッスン」 — The Courage Lesson',
  words: ['courage', 'repeat', 'convey', 'bad at', 'introduction', 'waver', 'refuse', 'determination'],
  story:
    `The letter changed the air. The ribbon hasn't left his wrist. And so, one quiet mornin' at the stand, the old man ` +
    `takes off his apron, sets it down, and says the sentence the whole town's been waitin' sixty years plus three episodes ` +
    `for: "Young one. I intend to ask her. Properly. And I'll need... help." The symmetry's not lost on ya — four seasons ` +
    `ago this man blessed YOUR proposal by the pond. Today the whole coachin' staff assembles: the friend who drilled ya, ` +
    `the boss who mastered words, the coach who trains hearts, and one koi pond that's heard every important sentence this ` +
    `town ever rehearsed.`,
  timerSec: 315,
  quests: [
    { word: 'courage', type: 'talk', npc: 'oldman', stage: 0,
      ask: `"I got {courage} for ovens, floods, and sixty lonely winters," the old man says, apron folded, hands steady, "and none at all for one small question. Teach me what ya know, young one. I watched ya learn it once. On this exact bench."` },
    { word: 'repeat', type: 'talk', npc: 'friend', stage: 1,
      ask: `The drill sergeant of romance reports for duty — AGAIN. "Same method that worked on you: we {repeat} it 'til the words stop shakin'. Fifty times minimum. I brought the whiteboard. The whiteboard's SEEN things. The whiteboard BELIEVES."` },
    { word: 'convey', type: 'talk', npc: 'boss', stage: 2,
      ask: `Speech consultation with the town's toast master: "You're not tryin' to {convey} sixty years," the boss counsels. "That's the letter's job, and it's done. Ya need only four honest words and somewhere to stand. I know this from weddings, mergers, and one printer eulogy."` },
    { word: 'bad at', type: 'talk', npc: 'trainer', stage: 3,
      ask: `Physical assessment: "He's {bad at} kneelin'," the coach reports grave. "Eighty-year-old knees. So we ADAPT: no kneel. A bow. A DEEP one, held three seconds. Dignified. Devastating. I've drilled it forty times this mornin'. I may use it myself someday. On WHOM is not important."` },
    { word: 'introduction', type: 'talk', npc: 'cat', stage: 4,
      ask: `Full dress rehearsal at the pond: the old man delivers his {introduction} to the koi, as tradition demands. The koi assemble. Fish-Thief presides from the bench. Halfway through, the old fish surface all at once and stay up. "They remember 1964," he whispers. Even the REHEARSAL has witnesses cryin'. (It's you. You're witnesses cryin'.)` },
    { word: 'waver', type: 'talk', npc: 'trinity', stage: 5,
      ask: `And then, at dusk, he starts to {waver}: "She's said yes to walks, to letters — but marriage, at our age, perhaps it's greedy to ask for—" Trinity takes his hands, gentle, ferocious: "She kept the bib SIXTY YEARS. Finish the race, sir. She's already at the finish line, wonderin' what's keepin' you."` },
    { word: 'refuse', type: 'talk', npc: 'dad', stage: 6,
      ask: `"But what if she {refuse}s?" It comes out small. Both dads answer at once — yours: "She won't." Hers: "SHE WON'T." Then dad, quieter: "But if the sky falls and she does — you'll still be the man who asked. That man never loses. I learned that watchin' MY son on a hill." Ya need a moment. Everyone needs a moment.` },
    { word: 'determination', type: 'talk', npc: 'oldman', stage: 7,
      ask: `Night. The stand, closed. He ties his apron back on — for tomorrow's dawn batch — and the {determination} settles over him like the apron always has. "Tomorrow evenin'. The pond. The walk we always take, and then... four honest words." He looks at ya. "Thank you for the lessons, grandson." He said it first. GRANDSON. Tomorrow can barely come fast enough.` }
  ],
  stageToasts: {
    1: `🥖 The apron's OFF and he's askin' for help. Sixty years of patience just stood up. Assemble everyone.`,
    2: `📋 The whiteboard's returned. The drill sergeant of romance is BACK on active duty.`,
    3: `👔 The toast master's in his office, waitin', with the good coffee. Wisdom hours are open.`,
    4: `🏋️ The coach has invented a knee-safe proposal maneuver. Attend the demonstration.`,
    5: `🐟 Full rehearsal at the pond. The koi are gatherin'. This town's traditions are UNDEFEATED.`,
    6: `🌆 He's waverin' at dusk. It's the last wobble before the leap. Bring reinforcements.`,
    7: `⭐ The wobble's passed. Listen — he's set the day.`
  },
  npcLines: {
    trinity: [
      `@5 I got to do for him what this whole town once did for you. Handed the courage back down the line. That's what it was FOR — ya keep it warm and pass it on. This town's just a sixty-year courage relay and I'm HONORED to run a leg.`,
      `He practiced the four words behind the stand and I heard 'em by accident. I'll take 'em to my grave, but know this: they're PERFECT and I've been cryin' on and off since eleven a.m. in a completely dignified manner.`
    ],
    mom: [
      `My mother's about to be proposed to and I'm not allowed to know the day. The whole town knows SOMETHIN's comin' — the bread line's never been quieter or more punctual. It's EERIE. It's WONDERFUL.`,
      `@7 He called ya grandson. Before the weddin'. Before the question, even. That man builds families the way he builds bread — patiently, and then all at once, warm. I had to leave the room. I left it PROUDLY.`
    ],
    dad: [
      `@6 Both of us answered at once, hers and me. "She won't." Fathers can smell a sure thing, son. And this is the surest thing this town's cooked up since — well. Since you on that hill, shakin' like a lantern in a typhoon. Look how that turned out.`,
      `He asked ME about the wobble. ME. I told him about walkin' around the block six times with the ring in my pocket in 1997. Your mother watched all six laps from the window, it turns out. They ALWAYS know, son. The askin's a formality. A beautiful, terrifyin' formality.`
    ],
    sister: [
      `I'm NOT on the coachin' staff 'cause "subtlety is mission-critical". EXCUSE ME. I kept the flea-market ring box secret for THREE DAYS once. ...Okay the record shows I lasted four minutes on the date intel. FINE. Crowd control IS NOBLE.`,
      `@4 The koi ALL SURFACED. The rehearsal got a STANDING OVATION FROM FISH. I've drawn it already: THE COURAGE LESSON, page one. I gave the old fish tiny readin' glasses. Artistic license. They EARNED 'em.`
    ],
    friend: [
      `@1 THE TRILOGY, buddy. I drilled YOU (legendary), best-manned the weddin' (transcendent), and now coach the 1964 finale. When this town writes its history, I'm in the FOOTNOTES and footnotes are FOREVER.`,
      `@6 When he asked "what if she refuses" I had to leave the drill area. Sixty years of waitin' and the man's still humble enough to doubt. That's why she's gonna say yes so fast it breaks the town speed record. CURRENT record: Trinity, 0.4 seconds. It falls TOMORROW.`
    ],
    shopkeeper: [
      `He asked me — quiet, at closin' — whether I still had "paper worthy of a promise". I keep one sheet of 1960s washi in the back, waited decades for a reason to sell it. I didn't sell it. Some inventory was always a GIFT waitin' for its date.`,
      `@7 Tomorrow evenin'. He thinks nobody knows. The ENTIRE town knows and has collectively decided to be busy elsewhere at exactly pond-o'clock. Forty years I've watched this town keep exactly one kind of secret: the kind that protects a beautiful moment. Undefeated.`
    ],
    trainer: [
      `@3 The BOW is ready! Three seconds, forty-five degrees, zero knee involvement, MAXIMUM devastation! Drilled 'til it's muscle memory! Muscle memory's just the body's way of promisin'! THE FORM! THE HEART! THE HISTORY!`,
      `I coached a comeback, a marathon, a recovery, and now a PROPOSAL. My trophy shelf's got no trophy for this so I'm commissionin' one: golden whistle, engraved: FOR THE LONGEST RACE. It goes to the pond. The pond earned it.`
    ],
    boss: [
      `@2 Four honest words and somewhere to stand. It's all any of us ever needed — proposals, resignations, apologies, eulogies. The rest of language is decoration. Sixty years talkin' to bread teaches a man to respect flour AND words: both rise only if ya don't overwork 'em.`,
      `I offered to draft talkin' points as a joke. He looked at me with such polite horror that I laughed 'til the coworker came to check on me. No notes for this one. Some speeches were written decades ago and only need OXYGEN.`
    ],
    coworker: [
      `The archive's pre-opened a file: 1964, PART TWO. It contains one page and the page's blank and dated tomorrow. First time I've ever filed the FUTURE. Gerald supervised. He leaned confidently.`,
      `@4 Koi surfacin' event logged: full assembly, sustained, durin' rehearsal. Cross-referenced against the surgery vigil surfacin' and the ambulance stillness. The pond's got a complete emotional record of this family. The pond IS the archive.`
    ],
    oldman: [
      `@0 Sixty years ago courage failed me by one envelope's width. This spring it won't, 'cause this time I'm not askin' alone — a whole town taught me its tricks. The friend's fifty repetitions. The boss's four words. A bow with no kneel in it. And a grandson at my side. Armored, young one. UTTERLY armored.`,
      `@7 Yes. Grandson. I checked with your grandmother-to-be — we're agreed on the word, whatever tomorrow brings. Some family we choose, some we're given, and the best kind's both at once. Now go home. An old man must proof tomorrow's dough and tomorrow's question, and both need the overnight rest.`
    ],
    cat: [
      `@4 Fish-Thief presided over the koi rehearsal from the bench, motionless, magisterial — then walked to the old man, placed one paw on his shoe, and held it there for three full seconds. The exact length of the bow. He was TIMING it. He APPROVES it. The ceremony's got its marshal.`
    ],
    grandma: [
      `The town's gone quiet and punctual and everyone keeps NOT lookin' at me, dear, which is the loudest thing this family's ever done. Somethin's comin'. I've set my hair, pressed the good cardigan, and told the koi to expect company. One stays match-fit. That's all I'll say. That's PLENTY. FINAL.`,
      `@7 ...He told ya the day, didn't he. Don't answer. Don't TWITCH. Just — tell an old woman one thing, dear: is the ribbon still on his wrist? ...Good. GOOD. That's all the intelligence I require. Sixty years of scoutin', and the last report's the sweetest.`
    ],
    tmother: [
      `The retired binder's successor — SLIM edition, twelve tabs, RESPECTFUL — sits on my shelf, gatherin' readiness. I promised pond-pace and I'll honor it if it kills me, and it MIGHT: I saw washi paper change hands at the store today and had to walk home the LONG way, breathin'.`,
      `@6 Both fathers said "she won't" in unison and I've never been prouder of the species. When my husband proposed to ME he fainted first and asked from the FLOOR, which — he'll tell ya — "still counts and arguably shows commitment". The bar in this family's always been sincerity, not choreography.`
    ],
    tfather: [
      `@6 I said SHE WON'T with my whole chest and I'll bet the boat on it — I still got the boat, son, the boat survived the audit. Sixty years, a letter, a ribbon on the wrist? Refusal's not among the possible weathers. FORECAST: CERTAIN.`,
      `He rehearsed the bow with the coach and I watched through the gym window and wept onto the glass, which I then CLEANED, 'cause I'm a neighbor now, son, not a guest. Even my cryin's got civic responsibilities.`
    ],
    kenji: [
      `Pre-proposal medical clearance, conducted with total confidentiality and one slice of pound cake: heart strong, knees advised against kneelin' (concurrin' with coach — a sentence I never expected to write), blood pressure of a man half his age, ribbon on wrist noted as "therapeutic device, permanent". Cleared for takeoff.`,
      `@5 Mori-sensei watched the koi rehearsal from the clinic window. When the old fish surfaced she said, "in the city I saw a heart transplant standing ovation once. This is better." She's extended her stay a fourth time. Tomorrow she's comin' to the pond "in a medical capacity". She's bringin' a HANDKERCHIEF.`
    ]
  }
},

/* ============================== EP 57 ============================== */
{
  ep: 57,
  title: '第57話 「池のほとりで」 — By the Pond',
  night: true,
  words: ['propose', 'gold', 'moment', 'world', 'whole life', 'reply', 'accept', 'bliss'],
  story:
    `The evenin' walk. The one they take every night — except tonight the whole town's somewhere else, very deliberately, ` +
    `very badly. (The gym's holdin' an emergency "inventory night". The store's "fumigatin'". Fourteen alibis, none of 'em ` +
    `load-bearing.) You alone are permitted at a distance, 'cause a grandson holds the coats. The pond's glass. The sakura ` +
    `lean over the water like they want to watch too. Sixty years, one letter, one ribbon, four honest words. Here we go.`,
  timerSec: 315,
  quests: [
    { word: 'propose', type: 'talk', npc: 'oldman', stage: 0,
      ask: `He checks his pocket for the fourth time. "Tonight I {propose}," he says — out loud, to himself, a man rehearsin' the truth. Then, to you: "Coats, grandson. And if my knees mutiny mid-bow, you're authorized to APPLAUD so nobody looks down." Deal. FOREVER deal.` },
    { word: 'gold', type: 'buy', item: 'nothing — collect the ring he left with the shopkeeper', stage: 1,
      ask: `The ring: his mother's, plain {gold}, resized in secret by the shopkeeper (of course the man does rings; forty years of secret hemmin' was just the warmup). "No charge," the shopkeeper says, then holds the box one extra second before handin' it over. "Sixty years of layaway. Paid in full."` },
    { word: 'moment', type: 'do', loc: 'park', verb: 'walk', amount: 400, stage: 2,
      ask: `Walk the pond path one final time as the advance party — checkin' the light, the bench, the {moment} waitin' in the air. The koi are already assembled. The old fish at the front. Nobody summoned 'em. Nobody ever has to.` },
    { word: 'world', type: 'talk', npc: 'trinity', stage: 3,
      ask: `"Look at this," Trinity whispers from your distance-post under the sakura. "The whole {world} shrunk down to one pond." Behind ya, a rustle: fourteen townspeople who couldn't stay away after all, hidden terribly behind the trees. AGAIN. Tradition's tradition. The trees've been through so much.` },
    { word: 'whole life', type: 'talk', npc: 'kenji', stage: 4,
      ask: `Kenji, at your elbow, "in a medical capacity", watchin' his oldest patient walk to the water: "A {whole life} in this town, and mine only started when I moved here. His is startin' tonight, at eighty-four." Beside him, Dr. Mori — handkerchief already OUT. Pre-emptively. The legend came prepared.` },
    { word: 'reply', type: 'talk', npc: 'grandma', stage: 5,
      ask: `Four honest words. The bow — three seconds, no kneel, DEVASTATING, the coach's spirit soars somewhere unseen. And grandma's {reply}, which the whole town will quote forever: "You're sixty years late, dear man." A pause the length of 1964. "Fortunately... you're also exactly on time. YES." The pond ERUPTS. The trees erupt. The koi—the KOI—` },
    { word: 'accept', type: 'talk', npc: 'mori', stage: 6,
      ask: `Dr. Mori steps forward, utterly composed, handkerchief drenched: "As the attendin' physician I {accept} this outcome." A beat. "In the city we'd call this a miracle." Another beat. The millimeter smile. "Here, I understand, it's a Tuesday." The town ROARS. She's one of us now. The paperwork's a formality.` },
    { word: 'bliss', type: 'talk', npc: 'oldman', stage: 7,
      ask: `Later, ring on her hand, ribbon on his wrist, the two of 'em by the water where it all restarted. Ya bring the coats at last. "Grandson," he says — and stops, 'cause there's no sentence for it. He gestures at everything: her, the pond, the pink trees, the terrible hidden town. "{bliss}," he manages finally. "The word I could never bake. Here it is. Sixty years, and here it IS."` }
  ],
  stageToasts: {
    1: `🧥 Ya've been appointed Coat Bearer and Applause Contingency. The highest offices. Report to the stand.`,
    2: `💍 The shopkeeper's got a small box with sixty years inside it. Collect it with both hands.`,
    3: `🐟 Advance party duty: walk the pond path. Check everything. The koi are already in formation.`,
    4: `🌸 Take your distance-post under the sakura. Ya won't be alone there. Ya were never gonna be.`,
    5: `🩺 The medical observers have arrived. One of 'em brought a handkerchief. Pre-emptively.`,
    6: `🌙 The walk's begun. The pond's glass. Four honest words are approachin' the water. WATCH.`,
    7: `🎆 SHE SAID YES. THE POND SAID YES. THE WHOLE TOWN— just go. Bring the coats. Witness the end of the longest race.`
  },
  npcLines: {
    trinity: [
      `@5 "Fortunately, you're also exactly on time." I'm gettin' it embroidered. On EVERYTHING. Single greatest acceptance in the recorded history of questions and I INCLUDE my own, previous record holder. Records are made to be broken by grandmothers.`,
      `@7 Four seasons ago that man stood behind a tree for YOUR proposal. Tonight ya held his coats. When people ask why we live here, husband, I'm just gonna tell 'em this whole story and watch their faces do the thing. Your face is doin' the thing RIGHT NOW.`
    ],
    mom: [
      `@5 MY MOTHER'S ENGAGED. I'm fifty-two and I get a new father and he BAKES. Been laugh-cryin' into your father's shoulder for one hour and he's been laugh-cryin' into MINE and neither of us can stop.`,
      `@7 She waited 'til we were all grown and safe and happy before she took her own turn. I only understood that tonight. Mothers queue LAST at their own banquet. Well — dinner's finally served, mama. Eat FIRST for once.`
    ],
    dad: [
      `@5 The bow held. Three seconds, forty-five degrees, ZERO knee incidents. Somewhere the coach is weepin' into a stopwatch— he's behind the third tree, I can HEAR him. The whole tactical unit deployed, son. We failed to stay away with FULL honors.`,
      `@7 An eighty-four-year-old just taught every husband in this town the four honest words, and I'm not sharin' 'em with anyone who wasn't behind a tree tonight. Some intel ya EARN with shrubbery, son.`
    ],
    sister: [
      `@5 THE KOI JUMPED. AT THE YES. ALL OF 'EM. AT ONCE. I got it in FULL FRAME 'cause crowd control's got excellent sightlines, WHO'S SUBTLETY-CRITICAL NOW?! The fish CHEERED. I'll testify UNDER OATH.`,
      `@7 Final page of THE SILVER RIBBON, drawn tonight before I even got home, still shakin': two silhouettes, one pond, sixty years, the whole town leakin' out from behind eleven trees. Title: EXACTLY ON TIME. My masterpiece. I peaked at twelve. WORTH IT.`
    ],
    friend: [
      `@5 0.3 SECONDS. She answered in 0.3 seconds — I timed it, it's OFFICIAL, the town record FALLS to an eighty-one-year-old on her first attempt. Trinity held the belt four seasons. Respect to the fallen champion.`,
      `@7 Trilogy complete, buddy. Coached you, married you two, drilled HIM. Tonight I stood behind a tree with fourteen people and a whiteboard I brought FOR NO REASON. This town doesn't have love stories. This town IS one. Signin' off. *fireworks in twenty. obviously.*`
    ],
    shopkeeper: [
      `@1 His mother's ring, in my safe two weeks, resized by these hands at midnight so not one soul would see. Forty years I hemmed in secret; the rings were always the endgame. When he tried to pay I told him the truth: the store owed HIM. Sixty years of mornin' bread smell — THAT was the layaway.`,
      `@7 Tonight I closed early with the fumigation sign and stood behind a tree between a boss and a plant. The store's got an honor system, the town's got a tree system. Both sacred. Neither fools ANYONE. Perfect.`
    ],
    trainer: [
      `@5 THE BOW. HELD. THREE. FULL. SECONDS. Forty drills and it deployed under match conditions FLAWLESSLY — I wept into my stopwatch, the stopwatch is RUINED, I'm framin' the stopwatch. The finish-line photo's a BOW. Coachin' career: COMPLETE. Again.`,
      `@7 For the record books: longest race, 1964–this evenin', two finishers, hand in hand. The golden whistle trophy's engraved and mounted at the stand as of TONIGHT. Cardio counts DOUBLE under fireworks.`
    ],
    boss: [
      `@5 Four honest words, delivered standin', answered in under half a second. Thirty years of negotiations and never seen terms accepted faster or with better cause. The weddin' toast's already writin' itself, and this time I'm not editin'. The truth needs no revisions.`,
      `@7 I was behind a tree between a shopkeeper and a fern, and for the record: best seat of my professional life. The office is closed tomorrow. Reason filed: "town circumstances". The regional office has stopped askin'. They subscribe to the archive now.`
    ],
    coworker: [
      `@5 The 1964 PART TWO file, opened blank yesterday, completed at 19:42: "Four words. 0.3 seconds. Koi: airborne." The thickest saga in the archive now has its endin' — except the archive does TO BE CONTINUEDs. Weddin' file: pre-opened. Gold ink: re-ordered.`,
      `@7 Gerald attended behind the fourth tree and at the YES dropped a leaf — the THIRD instance, all three at this family's milestones. I no longer send data to the botany journal. Some sciences are just this town, and this town can't be peer-reviewed. It can only be LIVED.`
    ],
    oldman: [
      `@7 The last line of the letter, grandson — the one I told ya to save for the weddin'. I'll give it to ya tonight instead, 'cause tonight it came TRUE: "If this ever reaches you, know that I did not lose the race in 1964. I have simply been runnin' it slowly, and I mean to finish at your side." ...She read it before the walk. She was ALWAYS gonna say yes.`,
      `@7 Tomorrow the stand opens at dawn, same as always. Some things don't change with a ring — the bread waits for no man's happiness. But there'll be a new item on the board, one day only, free with every loaf: "1964 — finally, the good year." She named it. She names EVERYTHING now. FINAL, as my fiancée would say.`
    ],
    cat: [
      `@5 Fish-Thief sat at the water's edge through the whole askin', equidistant from the couple, the koi, and the fourteen tree-hiders — the geometric center of every heart present. At the YES he didn't jump like the fish or weep like the humans. He closed his eyes and purred at a volume witnesses describe as "structural". The rings were in excellent paws. They always were.`
    ],
    grandma: [
      `@5 Sixty years, dear, and do ya know what I thought in the half-second before I answered? Not of 1964. Of last Tuesday. Cards with the doctor, bread at the stand, the walk at dusk. Ya don't marry a memory, dear — ya marry the man who shows up EVERY DAY with flour on his ears. FINAL.`,
      `@7 The ring's his mother's and it fits perfectly, which he calls luck and I call the shopkeeper measurin' my finger THROUGH a handshake three weeks ago — don't think I missed it, dear, I miss NOTHING. This whole town conspired beautifully and I let it. That's my last secret of the season: your grandmother SEES the trees. She's always seen the trees. She simply loves what hides behind 'em. *the wink of the century* FINAL. Truly, this time.`
    ],
    tmother: [
      `@5 The SLIM binder deployed at 19:43 — one minute post-yes, a RESPECTFUL minute, pond-pace, I was TIMED and I PASSED. Twelve tabs, no laser pointer, tab one a photograph of tonight captioned "we work for THEM now." My apprenticeship begins immediately.`,
      `@7 My husband didn't use the towel tonight. He handed it to ME. In sixty years of marriage sagas across two towns and one boat, that's the plot twist I never saw comin'. We're BOTH gonna need the anthology wallet expanded, dear.`
    ],
    tfather: [
      `@5 SHE SAID YES AND THE FISH FLEW, SON. THE FISH. FLEW. The POND ITSELF applauded and I handed my towel to my WIFE 'cause a man must know when he's been out-cried. GROWTH. WE BOUGHT THE RIGHT PLOT.`,
      `@7 An eighty-four-year-old baker taught me tonight it's never too late to say the biggest thing out loud. I turned to my wife behind the tree and said it. She said "I know. Since the yogurt commercial." We're all livin' in each other's letters and some of us just get read LATE. Magnificent.`
    ],
    kenji: [
      `@4 Twenty years of medicine and my two favorite charts now read: "Patient, 81: engaged, resting pulse UNCHANGED throughout proposal — verified live." and "Patient, 84: heart rate elevated for the first time on record, cause: joy, treatment: none, prognosis: sixty more years, medically indefensible, writin' it anyway." Mori-sensei countersigned both.`,
      `@6 After her "it's a Tuesday" line, my teacher turned to me behind the tree and said the sentence I've been waitin' for since her train arrived: "Kenji. Ask the innkeeper what a long lease costs." The city loses a legend. The clinic gains a colleague. Nobody warn her about grandma's gin rummy. Doctor's orders.`
    ]
  }
},

/* ============================== EP 58 ============================== */
{
  ep: 58,
  title: '第58話 「二度目の支度」 — Getting Ready, Again',
  words: ['getting ready', 'kimono', 'obi', 'barber', 'figure', 'hair', 'polish', 'hot spring'],
  story:
    `A weddin' in this town's a well-oiled machine by now — third in two years, and the machine's got OPINIONS about how ` +
    `it likes to run. But an elder weddin', it turns out, is its own beautiful animal: no dress hunt but a {kimono} from ` +
    `another era, no dance panic but a barber chair, no montage of firsts but a town-wide {getting ready} where every ` +
    `single task's done by someone who owes one of these two people sixty years of somethin'. Today the whole town pays ` +
    `its debts in steam, silk, and shoe polish. The weddin's in two days. The pond's been informed.`,
  timerSec: 315,
  quests: [
    { word: 'getting ready', type: 'talk', npc: 'tmother', stage: 0,
      ask: `The SLIM binder opens: "{getting ready}, elder edition — twelve tabs, two days, zero laser pointers. I've studied under the master herself and the doctrine's clear: we do LESS, better." She actually says "less". Witnesses confirm. The apprenticeship's goin' magnificently.` },
    { word: 'kimono', type: 'talk', npc: 'shopkeeper', stage: 1,
      ask: `The shopkeeper emerges from the back room carryin' his father's weddin' {kimono}, kept fifty years in paper: "My father was married in this. He and the baker were friends — I've waited my whole stewardship of this store to lend it forward." The old man touches the sleeve and can't speak for a while. The store closes early. For inventory. Of hearts.` },
    { word: 'obi', type: 'buy', item: 'the silver-thread obi', stage: 2,
      ask: `The {obi} for grandma's kimono: silver thread, to match a certain ribbon. Trinity found it in the city catalog; the whole family split the cost in secret; the shopkeeper "misplaced" the invoice, as is now traditional. Sixty years of silver, finally worn on purpose.` },
    { word: 'barber', type: 'talk', npc: 'friend', stage: 3,
      ask: `Operation {barber}: your friend escorts the old man to the chair. Two hours later a STRANGER emerges — trimmed, sharp, ten years younger, deeply embarrassed by the applause (the bread line relocated to watch; the bread line goes where history goes). "I had a NECK this whole time," he marvels. The barber refuses payment. His grandfather. The bread. Ya know how this town works by now.` },
    { word: 'figure', type: 'inspect', obj: 'mirror', stage: 4,
      ask: `Full fittin', gym mirror, THE tradition — third weddin' runnin'. The old man regards his {figure} in the borrowed kimono: barbered, silver-wristed, terrified, magnificent. The coach salutes. The mirror's now dressed three grooms. "STRUCTURAL INTEGRITY," the coach declares, voice crackin' completely, "CONFIRMED."` },
    { word: 'hair', type: 'talk', npc: 'sister', stage: 5,
      ask: `Meanwhile at the house: grandma's {hair}, done by your sister and Trinity's mom together — one silver ribbon woven in by four careful hands. Grandma watches in the hand mirror and says nothin' for a long time. Then: "In 1964 I did it myself in a station bathroom, dears. This is... an upgrade." The room dissolves. NOBODY had authorized weepin'. The binder logs it anyway.` },
    { word: 'polish', type: 'talk', npc: 'dad', stage: 6,
      ask: `The dads' assignment: {polish} every shoe in the weddin' party. Both of 'em, newspaper on the kitchen floor, tins and rags, workin' in silence like it's sacred — 'cause it is. "My father polished mine," dad says. "His polished his. Someone has to send the shoes in shinin'." Tfather holds up a gleamin' toe: "For the POND-FATHER." They've named him. It's already permanent.` },
    { word: 'hot spring', type: 'talk', npc: 'kenji', stage: 7,
      ask: `Final prescription, written on an actual prescription pad: "One {hot spring} afternoon, groom + groomsmen of all generations, doctor's orders." The onsen up the valley: you, the dads, the boss, the coach, the friend, Kenji, and one eighty-four-year-old groom, all steamin' like dumplings. Nobody talks for an hour. Then the old man, eyes closed: "In sixty years of solitude I never once did THIS." A pause. "The water was always warm, grandson. I just never got IN." Every man in the pool suddenly has steam in his eyes. It's the steam. It's DEFINITELY the steam.` }
  ],
  stageToasts: {
    1: `📒 The SLIM binder convenes the readiness council. Attendance: everyone. Laser pointers: zero.`,
    2: `👘 The shopkeeper's gone into the back room for somethin' wrapped in fifty years of paper.`,
    3: `🎀 Silver thread's arrived from the city. The invoice's already "vanished". Collect the obi.`,
    4: `💈 The barber operation's GO. The bread line's relocatin' for the unveilin'.`,
    5: `🪞 Third groom, same mirror. The gym awaits the fittin'. Bring tissues for the coach.`,
    6: `💇 Four hands, one ribbon, one grandmother goin' quiet in the hand mirror. Peek in. Softly.`,
    7: `♨️ A prescription's been issued for steam and brotherhood. The valley onsen awaits ALL groomsmen.`
  },
  npcLines: {
    trinity: [
      `@5 I gave the ribbon back for good today — it lives in her hair now, where it started. It carried me down one aisle; now it carries her. If this town ever runs outta perfect object symmetry I'll personally riot, but honestly? No signs of shortage.`,
      `@7 Ya came home from the onsen pink, silent, and emotionally rearranged. All seven of ya did. Whatever happens in the steam stays in the steam, husband, but the pond-father story leaked within the hour. The bread line's got EARS EVERYWHERE.`
    ],
    mom: [
      `@5 I was banned from the hair room for "excessive preemptive cryin'" and stationed at TEA LOGISTICS, but I saw through the door crack: my mother, my daughter-in-law's mother, and my baby girl, all workin' on one silver ribbon. Three families braided into one hairstyle. I cried into the teapot.`,
      `@6 Two grown men polishin' shoes on my kitchen floor in complete silence for two hours. I've never vacuumed AROUND anything so carefully in my life. Some messes are shrines, my love.`
    ],
    dad: [
      `@6 The pond-father. He teared up when we told him — said no one had ever named him ANYTHING before, then remembered sixty years of "old man" and laughed 'til the polish tin fell over. The town fixes its old bookkeepin' eventually, son. EVERY account gets settled here.`,
      `@7 The onsen. The thing he said about the water. I've thought about it all evenin': how many warm things did I stand beside for years without gettin' in? ...I hugged your mother for four minutes when I got home and she said "the steam got you too, huh." She KNOWS.`
    ],
    sister: [
      `@5 I got to weave the FINAL pass of the ribbon. My hands. HERS. Sixty years of history and they let the twelve-year-old take the anchor leg. When I'm old I'm gonna tell this story so many times my grandchildren BEG me to stop and I will NOT stop, this is the WHOLE POINT of gettin' old!!`,
      `THE HARD SEASON sold out at the store (all nine copies, mom bought four) and the sequel's outlined: THE SPRING SEASON, final page reserved for the pond weddin'. Grandma threatened the FINAL if I drew her cryin'. I'll draw the FISH cryin'. LOOPHOLE.`
    ],
    friend: [
      `@3 Two hours in the barber chair and the man came out lookin' like the LEAD in a samurai drama about a retired baker who's got ONE more weddin' in him. The bread line APPLAUDED. He bowed THE bow — reflexively! The coach's trainin' has permanently altered his nervous system! WE BUILT A GENTLEMAN, buddy!`,
      `@7 Onsen groomsman summit, official report: seven men, one hour of silence, one sentence that broke the entire pool, and a group decision — sealed by steam-oath — that what he said gets carried, not repeated. FOREVER DEAL. ...The pond-father story doesn't count, that leaked BEFORE the oath.`
    ],
    shopkeeper: [
      `@1 Fifty years I kept my father's kimono in paper and turned down four offers to sell it — one from a MUSEUM. I always said the same: it's not stock, it's WAITING. My father traded end-of-day bread for end-of-day vegetables with that baker when they were both young and poor. Two days from now his silk stands at the pond.`,
      `@2 The obi invoice? What invoice. I see no invoice. There's NEVER been an invoice. The auditor of this arrangement's a cat and he's been PAID IN CREAM. Case closed, books balanced, tradition upheld.`
    ],
    trainer: [
      `@4 THREE GROOMS. ONE MIRROR. The gym's no longer a gym, friends, it's a RITE OF PASSAGE with dumbbells in it. I've commissioned a small plaque for the frame: "STRUCTURAL INTEGRITY CONFIRMED — est. three weddings and countin'."`,
      `@7 The onsen counts as recovery trainin' and I logged it as such OFFICIALLY, but between us: when the old man said the thing about the warm water, I performed the single most difficult exercise of my career — cryin' SILENTLY. Total muscular control. It was all for THAT moment. THE FORM. THE HEART. THE STEAM.`
    ],
    boss: [
      `I was invited to the onsen as "a groomsman of the town", which is the only promotion that's ever made my hands shake. Thirty years of titles and the one that lands is bein' SOMEBODY'S guy in a warm pool on a Thursday.`,
      `@7 What he said in the water goes unrepeated, per the steam-oath — but I'll say this much: I've restructured entire divisions with less impact than that one sentence had on seven grown men. The weddin' toast's FINISHED now. It ends with the water.`
    ],
    coworker: [
      `Gerald's been measured for a ceremonial bow (the ribbon kind — he already HAS the bowin' kind, we drilled it, don't laugh, he nailed it) and'll attend the pond weddin' as botanical honor guard EMERITUS, his third tour. His pot's been polished by the dads. The lean's now at competition angle.`,
      `@4 Fittin' metrics, third groom: kimono (borrowed, fifty years), wrist (ribboned, sixty years), neck (newly discovered), overall readiness: total. The archive's weddin'-eve checklist's got one box left, labeled SATURDAY. Gerald and I'll be at the pond at DAWN to supervise the koi's warmup. I gave myself the assignment. The honor is CRUSHING.`
    ],
    oldman: [
      `@1 His father and I built this street's mornings together, young one — his bread cart, my ovens, two young fools rich in nothin' but flour and Tuesdays. Fifty years later the son hands me the father's silk like it was always mine on layaway. This town doesn't lend things. It LONG-DELIVERS them.`,
      `@7 Sixty years beside warm water, never gettin' in. Ya heard it in the steam, grandson, so ya know it's not only about the onsen. Don't wait for your own weddin' eve to learn it. Saturday, when ya stand at the pond, stand IN your life, not beside it. ...Now help an old groom outta this magnificent kimono before I wrinkle fifty years of friendship.`
    ],
    cat: [
      `Fish-Thief attended the barber operation (unimpressed; he grooms himself to a higher standard DAILY), the fittin' (approved; he sat on the kimono's paper wrappin', claimin' it), and the shoe polishin' (SUPERVISED; one paw print in the polish lid, deliberate, a signature — the dads decided it stays forever). The onsen he skipped. Cats know which waters are theirs.`
    ],
    grandma: [
      `@5 Four hands in my hair where once there were two of mine in a station bathroom, dear. I told the girls "an upgrade" 'cause if I'd said what it actually was, we'd all still be on the floor. Some words ya ration at my age. Saturday I'll spend the whole reserve. Consider yourselves WARNED. FINAL.`,
      `@2 Silver thread to match the ribbon — you children think you're so subtle with your vanishin' invoices and secret catalogs. I've known the price of everything in that store for forty years, dears. I let ya pay it. THAT's my weddin' gift to YOU: lettin' this town love me at full volume, no discount. He's teachin' me. The baker. He's very good at receivin'.`
    ],
    tmother: [
      `@0 "We do LESS, better." I said it OUT LOUD and the binder did not burst into flame, dear. Twelve tabs, and tab twelve's simply the word "witness". That's our whole job Saturday. Elder weddings are the black belt of event plannin': everything meaningful, nothin' extra. I may never go back.`,
      `@5 I helped weave the ribbon. Me. The city binder woman, hands in the hair of this town's matriarch beside a twelve-year-old prodigy. My book club asked what we're readin' this month. I told 'em: the room. We're readin' the ROOM. All twelve are comin' to stand at the back of the pond Saturday.`
    ],
    tfather: [
      `@6 POND-FATHER. He liked the name, son. He LIKED it. I've christened a boat and a grandson-in-law and now a POND-FATHER and I'm officially this family's NAMING GUY, which my wife says is generous given the boat was called "Boat". IT WAS A GOOD NAME. IT DESCRIBED THE BOAT.`,
      `@7 In the steam he said the warm-water thing and I made a sound like the gutter I fixed, son — a good sound, a STRUCTURAL sound. Seven men resolved in one hot pool to get into their own lives. The onsen should invoice this town for THERAPY. The invoice would only vanish anyway.`
    ],
    kenji: [
      `@7 The prescription pad's never been used for anything more medically sound: steam, silence, and seven generations of men learnin' one sentence in warm water. Mori-sensei asked how the "groom's clearance" went and I told her the whole thing. She was quiet a long moment. Then: "In the city, we prescribe statins." She signs the innkeeper's long-room lease TOMORROW. The second suitcase's won.`,
      `Weddin'-eve medical status, full party: one groom (magnificent, terrified, cleared), one bride (resting pulse, DANGEROUSLY smug, cleared), one town (elevated heart rate across the board, chronic, beloved, no treatment exists). See everyone at the pond. I'm bringin' my grandmother's teacups. All of 'em. Some prescriptions are just inheritance with steam comin' off it.`
    ]
  }
},

/* ============================== EP 59 ============================== */
{
  ep: 59,
  title: '第59話 「家族が増える」 — The Family Grows',
  words: ['lonely', 'daughter', 'son', 'grandchild', 'relative', 'increase', 'surname', 'grandfather'],
  story:
    `The night before the pond weddin', the family gathers for dinner — and someone sets a place at the head of the table ` +
    `that's never been set before. The old man arrives with bread (of course) and stops in the doorway, countin' chairs, ` +
    `understandin' slowly. Sixty years, no children, no {relative} closer than the koi — a man whose family was a queue, a ` +
    `pond, a town at arm's length. Tonight the arms close. There are words for what everyone at this table's about to ` +
    `become to each other, and this family — bein' this family — is gonna say every single one of 'em out loud, over soup, ` +
    `'til nobody can see their bowl. Bring tissues. Bring EXTRA. The dish towel's already at capacity.`,
  timerSec: 300,
  quests: [
    { word: 'lonely', type: 'talk', npc: 'oldman', stage: 0,
      ask: `He stands in the doorway, bread in hand, countin' chairs. "Sixty years of {lonely} I never once said out loud," he manages, "and you people set me a PLACE." Mom takes the bread from him gentle, the way ya disarm someone. "Head of the table," she says. "Get used to it." He sits down very careful, like the chair might be a dream.` },
    { word: 'daughter', type: 'talk', npc: 'mom', stage: 1,
      ask: `Mom serves him first — eldest's honors — and says, casual, devastatin', over the soup: "Ya may call me {daughter}, ya know. If ya like. I've been auditionin' the word all week and it FITS." The old man looks at his bowl for a long time. "...Daughter," he tries. The table pretends the soup's very interestin'. The soup's never been so interestin'.` },
    { word: 'son', type: 'talk', npc: 'dad', stage: 2,
      ask: `Dad, never outdone in matters of the heart wearin' a cardigan: "And me — {son}. I'm fifty-two years old and I'm gettin' a FATHER-in-law who bakes. Single greatest day of my administrative life. I've already updated the emergency contact forms. BOTH directions." He has. He shows everyone. There's a folder.` },
    { word: 'grandchild', type: 'talk', npc: 'sister', stage: 3,
      ask: `Your sister slides down the bench: "Wait wait wait — if he's grandma's husband, and I'm HER great-{grandchild}, then I'm gettin' a great-GRANDFATHER, which is a PROMOTION, and promotions come with PRIVILEGES." She produces a list. Item one: unlimited bread. Item two: fishin' lessons. Item three: "stories from 1964, uncensored." The old man signs it. SOLEMNLY. It's legally nothin' and emotionally EVERYTHING.` },
    { word: 'relative', type: 'talk', npc: 'trinity', stage: 4,
      ask: `Trinity raises her glass: "To my newest {relative} — the man who blessed OUR proposal by the pond before any of us knew he was rehearsin' his own." She grins. "Welcome to the family, sir. Fair warnin': we're LOUD, we hide behind trees badly, and once you're in, there's NO gettin' out. The cat runs exit interviews and he's never approved one."` },
    { word: 'increase', type: 'talk', npc: 'tfather', stage: 5,
      ask: `Trinity's dad stands, wax seal kit ALREADY out: "The family {increase}s! AMENDMENT TO THE SHARE CERTIFICATE!" He adds one line to the famous document — "1964 division: one baker, fully vested, dividends: bread in perpetuity" — stamps it, and crushes the old man's hand with a welcome previous recipients describe as "load-bearing". The old man returns it AT FULL STRENGTH. Tfather's eyes widen: "...BAKER'S HANDS. Son, we never stood a chance."` },
    { word: 'surname', type: 'talk', npc: 'grandma', stage: 6,
      ask: `The paperwork question comes up, as it must. Grandma waves it away with tea: "At my age, dear, one keeps one's {surname} and shares one's LIFE. The bakery keeps his name, I keep mine, and the weddin' certificate can cope. We're not mergin', dears — we're FEDERATING." The boss, from down the table, whispers: "...flawless governance structure." He's takin' NOTES.` },
    { word: 'grandfather', type: 'talk', npc: 'oldman', stage: 7,
      ask: `The dishes are done. The house is quiet. He finds ya on the porch — where all this family's biggest small moments happen — and stands beside ya a while. "Ya called me grandson before I earned it," ya say. "Tonight I get to return it." Ya say it. "{grandfather}." The word lands somewhere sixty years deep. He doesn't speak for a long time. Then: "Again, please. Once was not enough. Sixty years, grandson. I'd like to hear it... a few more times." Ya say it 'til the porch light comes on. Ya'd have said it all night.` }
  ],
  stageToasts: {
    1: `🍽️ A place has been set that was never set before. He's in the doorway, countin' chairs.`,
    2: `🍲 Mom's servin' him FIRST. Eldest's honors. Somethin's comin' with the soup.`,
    3: `📋 Dad's got a folder. When dad's got a folder, feelings are about to be administrated.`,
    4: `📜 Your sister's produced a formal list of great-grandchild privileges. Witness the signin'.`,
    5: `🥂 A toast's risin' from Trinity's end of the table. Glasses UP.`,
    6: `🕯️ The wax seal kit's appeared. The share certificate's bein' AMENDED. History.`,
    7: `🌙 He's on the porch. The last word of the night's yours to give. Go say it.`
  },
  npcLines: {
    trinity: [
      `@4 He blessed us at the pond four seasons ago and we all thought he was bein' wise for OUR sake. He was practicin', husband. He was practicin' bein' family. Tonight the practice ended and the real thing started, and I got to TOAST it.`,
      `@7 I watched from the kitchen window. You, him, the porch, the word. I'm not gonna tell ya how long you two were out there 'cause you'll be embarrassed, but THREE separate family members checked, teared up, and tiptoed away. The window's got a QUEUE now.`
    ],
    mom: [
      `@1 I auditioned it all week — at the stove, in the bath, to the cat, who kept my secret as he keeps 'em all. "Daughter." Fifty-two years old and the word still had room in it for one more father. Hearts aren't full, my love. They're EXPANDABLE. Write it down.`,
      `@7 The porch light came on automatic and caught the two of ya mid-word. Your father installed that light in 1999 for burglars. It's never once seen a burglar. It exists exclusively to illuminate this family's FEELINGS at dramatic moments, and tonight it achieved its final form.`
    ],
    dad: [
      `@2 The folder, son, contains: updated emergency contacts, a copy of the share certificate amendment, and — new tonight — a hand-drawn family tree with WET INK on one branch. I drew the branch at the table. Everyone watched me draw it. My hand did not shake. That's my whole speech about tonight and it's four words: I DREW THE BRANCH.`,
      `@5 The handshake exchange. THE HANDSHAKE EXCHANGE. Two of the strongest grips in the prefecture met at full power over a wax seal and the TABLE creaked, son. It was like watchin' two nations sign a treaty ARM WRESTLING. Nobody won. EVERYONE won.`
    ],
    sister: [
      `@3 HE SIGNED THE LIST. All three items, no negotiation, then added item FOUR himself: "bread-makin' lessons, startin' summer, apprentice: the artist." I'm gonna LEARN THE 1964 RECIPE. The comic ends with me INSIDE the story, guys. Greatest contract in history and I've seen dad's FOLDER.`,
      `@7 I know what happened on the porch 'cause I was in the tree. NOT hidin' — ARCHIVING. There's a difference and I got a laminated card from the coworker that SAYS so. I heard the word land, all sixty years of it, and drew the panel in the dark by porch light. One page left. Tomorrow. THE POND.`
    ],
    friend: [
      `I was not at family dinner 'cause it was FAMILY dinner and that used to sting a tiny best-man-sized amount. Then tonight your mom sent me a plate — a FULL plate, wrapped, with a note: "there's no such thing as not-family, dear. Eat." I'm framin' the note.`,
      `@5 The share certificate's got THREE amendments and a bread clause now. I've formally requested amendment four: "best man emeritus, all weddings, in perpetuity." Tfather says it requires a wax seal quorum. I'm attendin' the weddin' tomorrow WITH MY OWN SEAL. The trilogy taught me EVERYTHING.`
    ],
    shopkeeper: [
      `He came by at closin' for tomorrow's flour — weddin' mornin' batch, one last solo bake — and told me about the chair at the head of the table. Forty years that man bought single portions, friends. SINGLE. PORTIONS. Tonight I sold him the family-size bag and neither of us said anything about it 'cause we could NOT.`,
      `@6 Federatin', not mergin'. I've already had the phrase engraved on a small plaque for the stand, as my weddin' gift. Two names, one counter, bread in perpetuity. The best businesses in this town were never businesses at all. Don't tell my ledger. My ledger's always known.`
    ],
    trainer: [
      `Family dinner night, so the gym held its OWN observance: I set the mirror plaque straight, did one slow bow — THE bow, the forty-five, in honor — and closed early. Some evenings the correct workout's REVERENCE, friends. Heart day. It's ALWAYS heart day lately.`,
      `@3 The great-grandchild privileges list includes FISHIN' LESSONS, which means the artist joins the pond curriculum, which means the sacred knowledge passes to generation FOUR. The 1964 category at next year's marathon'll have a JUNIOR DIVISION. It's all connectin', friends.`
    ],
    boss: [
      `@6 "We're not mergin', we're federatin'." I've chaired mergers for thirty years and never once heard the structure named so precise. Separate identities, shared everything, bread in perpetuity, governance by tea. When I retire, I'm nominatin' that woman for my board. She'll decline. The decline'll be four sentences. I'll frame it.`,
      `I was not at the dinner but received — as apparently everyone in this town now does — a wrapped plate and a report. The emergency contact folder made me laugh out loud alone in my office, and then, unaccountably, not laugh at all. That man's spent thirty years administratin' his love, and tonight the paperwork finally said it back.`
    ],
    coworker: [
      `Gerald spent family-dinner night at the office rehearsin' his ceremonial position for tomorrow: forty-five degree lean, ribbon bow, pot at high polish. I read him the archive's account of the evenin' as it came in. At the porch scene he shed leaf number four. One leaf per family milestone, a PERFECT record.`,
      `@2 Emergency contact forms updated "both directions" — I've seen the folder, it's REAL, laminated, cross-indexed. An eighty-four-year-old baker's now formally the first call for a hardware-store enthusiast and vice versa. The archive files this under INFRASTRUCTURE, 'cause that's what it is. Love, in this town, has ALWAYS been infrastructure.`
    ],
    oldman: [
      `@0 A set place, young one. You'll laugh — sixty years of feedin' this entire town, and the thing that undid me was four inches of table with my name on it. I've baked ten thousand mornings for other people's chairs. Tonight I learned what the bread TASTES like when ya're sittin' down. ...It tastes like more, grandson. It tastes like sixty more years.`,
      `@7 Grandfather. GRANDFATHER. I walked home sayin' it to the streetlights, to the pond, to the cat — who walked me all the way, my furry solicitor. Tomorrow I marry the runner with the silver ribbon in front of everyone we love, and tonight I already received the whole dowry: a chair, a branch in wet ink, a word on a porch. I'm already the richest baker who ever lived. See ya at dawn. The apprentice starts EARLY.`
    ],
    cat: [
      `Fish-Thief attended the dinner beneath the table at the old man's feet — a station he's never once taken beneath any other chair, and the family noticed, and said nothin', 'cause some appointments announce themselves. He escorted him home after, sat while the man said "grandfather" to a streetlight, and walked on without judgment. Marshals don't judge. Marshals WITNESS. Tomorrow: the third weddin'.`
    ],
    grandma: [
      `@6 Federatin', dear. Sixty years a sovereign nation, and I'm not surrenderin' the constitution for a ring — I'm signin' the sweetest treaty in town history. He understood before I finished the sentence. That's WHY the treaty passes. Write that down for your own marriage, dear: the ones worth signin' never ask ya to stop bein' your own country. FINAL.`,
      `@7 I saw the porch from the garden, dear. Don't look alarmed — I see EVERYTHING, we've established this over six seasons. Ya gave him the word sixty years of queues and koi never gave him. Tomorrow I give him mine. ...No. One never says enough. That's the other lesson. Say it ALL, always, at full volume, over soup. This family taught ME that. Now sleep.`
    ],
    tmother: [
      `I catered nothin' tonight — the master's doctrine held: family dinner, family kitchen, binder CLOSED. I sat at the table as simply a relative, ate my mother-in-law-in-law's soup (we've given up on the titles; "family" covers it), and watched a lonely man's sixty-year ledger get settled over two hours. Tab twelve, dear. WITNESS.`,
      `@5 My husband's share certificate now governs two marriages, one bakery, bread in perpetuity, and — as of tonight — the strongest handshake treaty in the prefecture. A document that began as a JOKE about one yen is now this family's foundin' charter. The book club's studyin' it next month. I'm not jokin'.`
    ],
    tfather: [
      `@5 BAKER'S HANDS, SON. I've crushed hands on four continents— two continents— I've crushed MANY HANDS, and tonight an eighty-four-year-old returned FULL PRESSURE while a wax seal cooled between us. My hand's still tinglin'. It's the tingle of RESPECT. The federation's got a STRONG foundin' member. I KNEW IT AT THE APPLES.`,
      `@7 The porch word. The wet-ink branch. The chair. Son, I moved to this town for my daughter and I stayed for THIS — a family that just keeps ADDING CHAIRS. My wife asked tonight if I miss the city and I laughed so hard the innkeeper knocked. Tomorrow a pond marries two eighty-year-olds and the fish'll probably cry. WE BOUGHT THE RIGHT PLOT, SON.`
    ],
    kenji: [
      `House call, this evenin', unscheduled: I dropped by with a tonic for the groom's pre-weddin' nerves and was pulled into dessert by six hands. Stayed two hours. The tonic remains in my bag. The dessert did the job — mine included. Chart note: "Patient: family of fourteen-and-countin'. Complaint: none. Findings: one new branch, wet ink. Treatment: chairs. Prognosis: perpetual."`,
      `@7 Tomorrow I attend my third weddin' in this town, for the first time as what the boss calls "somebody's guy" — the family doctor, the card rival, the lemon tea man, whatever I am now. My grandmother's teacups are packed. Twenty years ago I couldn't have told ya why a doctor would cry at a patient's weddin'. Tomorrow I won't be able to tell ya why he WOULDN'T. Medicine advances, grandson-of-the-groom.`
    ]
  }
},

/* ============================== EP 60 ============================== */
{
  ep: 60,
  title: '第60話 「池の結婚式」 — The Pond Wedding',
  words: ['clear skies', 'bride', 'roll call', 'scatter', 'the greatest', 'swim', 'congratulations', 'departure'],
  story:
    `Saturday. The pond, at golden hour. No hill this time, no grand arch procession — a small white arch by the water, ` +
    `two chairs' worth of ceremony and a whole town's worth of standin' room, sakura at absolute peak leanin' over the ` +
    `water like guests who arrived early for the good seats. The weddin' bread came outta the oven at dawn (apprentice: ` +
    `one twelve-year-old artist, flour to the ELBOWS, prouder than any general). The koi have been in formation since ` +
    `mornin'. Sixty years, one letter, one ribbon, one town. The longest race in this town's history finishes today, ` +
    `beside the water where it started. And the weather? Please. Grandma ORDERED the weather in the binder war of episode ` +
    `26. It's never once dared disappoint her since.`,
  timerSec: 330,
  quests: [
    { word: 'clear skies', type: 'talk', npc: 'trinity', stage: 0,
      ask: `Dawn check, from your window: {clear skies}, horizon to horizon, not one cloud with the nerve. Trinity, beside ya with tea: "Remember our mornin'? I was SO nervous about rain." She grins. "Nobody's nervous today. The sky knows better. Grandma has PRECEDENT." The forecast, by Kenji-and-koi joint methodology: perfect. Obviously perfect.` },
    { word: 'roll call', type: 'talk', npc: 'friend', stage: 1,
      ask: `Best-man-emeritus {roll call} at the pond, 0900 sharp, clipboard OUT: "Arch: UP. Bread: WARM. Rings: WITH THE MARSHAL. Koi: IN FORMATION — honestly they were here before me, I checked 'em off retroactively. Gerald: at competition lean. Town: ALL PRESENT. Tissues: INSUFFICIENT, they're ALWAYS insufficient, it's TRADITION." He salutes ya with the clipboard. Third weddin'. The machine's BEAUTIFUL.` },
    { word: 'bride', type: 'talk', npc: 'grandma', stage: 2,
      ask: `Ya're granted a pre-ceremony audience with the {bride}: kimono, silver-thread obi, and the ribbon — THE ribbon — woven through silver hair by four lovin' hands. "Well, dear?" She turns once, slow, eighty-one years of patience wearin' sixty years of silver. Ya can't speak. "Good answer," she says. "FINAL." She takes your arm. Ya're walkin' her IN. Ya only found out an hour ago. Ya'll never recover. Ya wouldn't want to.` },
    { word: 'scatter', type: 'inspect', obj: 'arch_pond', stage: 3,
      ask: `At the arch, right on cue, the wind moves through the sakura and the petals {scatter} across the water — a pink carpet laid by the season itself, timed like the bulbs, like the bread, like everything this town's old man has ever planted and waited on. He watches it settle and whispers: "Even the trees queue for her." The officiant — the BOSS, voted unanimously — clears his throat for the ages.` },
    { word: 'swim', type: 'inspect', obj: 'pond', stage: 4,
      ask: `Mid-vows, movement in the water: the koi {swim} a slow circle around the pond, all of 'em, once, unhurried — a lap of honor for the finish of the longest race. The old fish leads. Nobody breathes. Your sister's pencil moves in the silence, catchin' it live. Dr. Mori, in the second row, whispers to no one: "...I'm never goin' back to the city." The innkeeper, beside her, simply hands her the lease.` },
    { word: 'the greatest', type: 'talk', npc: 'boss', stage: 5,
      ask: `The toast. The boss, officiant and orator, raises his glass to the couple and keeps it to four sentences, as is now doctrine: "Sixty years ago, a runner critiqued a baker's crust, and both were too polite to say the truth. The truth got sixty years of interest. Today it pays out in front of everyone they fed, raised, coached, healed, and loved. To the two of 'em — {the greatest} account this town ever kept, settled at last, in full." The pond ERUPTS for the third time this season. It's gettin' GOOD at it.` },
    { word: 'congratulations', type: 'talk', npc: 'mori', stage: 6,
      ask: `Dr. Mori approaches the couple, bows — a REAL one, deep, city-formal, the highest currency she carries — and says: "{congratulations}. In forty years of medicine I've signed ten thousand charts. Today I'd like to sign as witness instead." She does. Both certificates: the weddin', and — she produces it — her OWN residency registration, dated today. "Two signatures," she says. "One pen. It seemed efficient." The town LOSES ITS MIND. Kenji's openly weepin' into a teacup. The teacups came. All of 'em.` },
    { word: 'departure', type: 'talk', npc: 'oldman', stage: 7,
      ask: `Dusk. The lanterns come up, the party softens, and the newlyweds stand at the pond's edge where the whole story started and restarted and finished. "Our {departure}," the old man announces to the town, takin' his wife's hand: "the evenin' walk. Same pond. Same pace. New names — well. Same names. FEDERATED names." Laughter, tears, one cannon (safety off, authorized, GOLD confetti). And they walk — slow, glorious, sixty years and four minutes at a time — into the lantern light, the cat fallin' in behind 'em, the koi keepin' pace in the water, the whole town watchin' the season end the only way it ever could: two silhouettes, one pond, {the greatest} love story any of ya will ever be extras in. Same time next season. All of 'em. Every single one.` }
  ],
  stageToasts: {
    1: `☀️ Not a cloud in the entire sky. It wouldn't DARE. Weddin' day is GO.`,
    2: `📋 The best-man-emeritus is runnin' roll call at the pond. Report in.`,
    3: `👘 The bride requests a pre-ceremony audience. Straighten everything you're wearin'. GO.`,
    4: `🌸 Take your place — the wind's pickin' up and the sakura are leanin' in.`,
    5: `🐟 THE KOI ARE DOING SOMETHING. Watch the water. WATCH THE WATER.`,
    6: `🥂 The officiant raises his glass. Four sentences of doctrine incoming.`,
    7: `🩺 Dr. Mori's approachin' the couple with TWO documents and one pen. History.`,
  },
  npcLines: {
    trinity: [
      `@7 Three weddings, husband. Ours on the hill, loud and young. Tonight's by the pond, slow and sixty years deep. And somewhere out there — the town's ALREADY bettin' — the next one. My money's on the doctors. Do NOT tell Kenji. He'd blush himself into his own clinic.`,
      `@2 Ya walked her in. YOU. She chose the grandson who held the coats, and the whole town watched ya not-cry so hard your ears moved. I married the right man in the right town in the right story. Five stars. Would live again.`
    ],
    mom: [
      `@2 My mother, in silver, on my son-in-law's arm, walkin' past every chair this family ever added. I made it four steps into the processional before your father handed me the LARGE towel — we got a SIZING SYSTEM now — and I used ALL of it. Daughter of the bride, my love. At fifty-two. Life SAVES things for ya.`,
      `@7 They walked into the lanterns and the whole town just... stood there glowin'. Sixty years, my love. She waited sixty years and got ALL of it back with interest. Now — everyone back to ours. The kitchen's ON and I'm feedin' EVERYBODY. Wedding rule one never retires.`
    ],
    dad: [
      `@5 The boss's toast. Four sentences. "Settled at last, in full." Son, I've heard that man present forty budgets and TODAY was the career achievement, and by his face at the arch — he knows it too. The officiant WEPT while officiatin' and simply carried ON. This town's professional standards are UNIQUE.`,
      `@7 The gold confetti was your sister's idea, the cannon her execution, the timing FLAWLESS — right as they turned into the light. My daughter ends the season havin' invented ceremonial ARTILLERY DOCTRINE. The emergency contact folder grows another sheet, son. It ALWAYS does.`
    ],
    sister: [
      `@4 THE LAP OF HONOR. I got it. Pencil, live, mid-vows, from memory-speed sketchin' drills I've been runnin' since ep51 'cause an ARTIST prepares. The final panel of THE SPRING SEASON is FILLED, guys: koi circlin', petals landin', two old hands holdin' at the center. My masterpiece. I'm twelve and COMPLETE.`,
      `@7 Apprentice report: the weddin' bread came out PERFECT, first solo-assisted batch in stand history, flour to my ELBOWS, and when the crowd ate it my great-grandfather-AS-OF-TODAY watched their faces exactly like I watch people read my comics. We're the SAME ARTIST, he and me. Different medium. He said so HIMSELF.`
    ],
    friend: [
      `@1 Third weddin', buddy. The machine ran PERFECTLY: roll call, arch, marshal, koi (self-organizin', as befits professionals). And at sunset the flower fireworks — Concept C, encore edition, ONE shell, a single silver chrysanthemum over the pond 'cause the couple requested "just one, small, like a good sentence." Never been prouder of a smaller thing.`,
      `@7 They walked into the lanterns and I stood next to ya like I have since we were nine, and buddy — from the whiteboard to the pond, what a run. Whatever season comes next, save me the spot behind the second tree. It's MINE. It's ALWAYS been mine. FOREVER DEAL.`
    ],
    shopkeeper: [
      `@3 My father's kimono under the arch. My silver thread in the obi. My flour in the bread. Forty years a shopkeeper, friends, and today the shelves finally showed me what the inventory was FOR. The store's closed 'til Monday. The sign says: "Gone to a weddin' sixty years in the layaway. PAID IN FULL."`,
      `@7 At the reception the bride paid me for the obi. FULL PRICE, into my hand, over my objections, with the whole town watchin': "no discounts on the best day, dear. FINAL." Then she tipped me a five-yen coin — MY five-yen coin, the one from her invitation envelope back at ep32, she KEPT it— I'm gonna be in the stockroom, friends. Indefinitely.`
    ],
    trainer: [
      `@4 THE KOI LAP. A synchronized victory formation, self-organized, ZERO coachin' — I checked, NOBODY coached 'em, they TRAINED THEMSELVES on sixty years of watchin' this family love each other. My pamphlet's finished, friends: GRANDMA PACE: THE SCIENCE, final chapter: "Ya can't coach a pond. Ya can only be worthy of one." PEER. REVIEWED. BY. MORI.`,
      `@7 As the couple departed I performed the bow — THE forty-five, three seconds, taught to a groom, returned by a groom — and the ENTIRE town did it with me. UNREHEARSED. A whole town bowin' at exactly forty-five degrees in the lantern light. I've died, friends. This is the posture AFTERLIFE. THE FORM. THE HEART. THE TOWN.`
    ],
    boss: [
      `@5 They asked me to officiate and I asked why not the doctor, the friend, the mayor of wherever. The old man said: "You taught me four honest words. Bring four more." So I did. Forty years of talkin' for a livin', and my entire legacy's now eight words and a pond. I've never been so completely at peace.`,
      `@6 Mori signed the registry and the residency form with one pen and I watched a town acquire a world-class surgeon the way it acquires everything — slowly, by cat, then all at once, by heart. Note for the regional office, who subscribe to our archive anyway: stop askin' when I'm transferrin' back. Put my file with the plant's. We're PERMANENT.`
    ],
    coworker: [
      `@6 LEAF FIVE. At the double-signature. The collection envelope was READY — I called it at family dinner and the pond PROVIDED. Five leaves, five milestones, one botanically impossible plant with a perfect record. The set goes in a display case, engraved by the shopkeeper: "GERALD: WITNESS." The botany journal sent a final letter. It says only: "We believe you now." FRAMED.`,
      `@7 Season's final archive entry, filed by lantern light with the artist's frame beside me: "Sixty years, four honest words, one lap of honor, two signatures, gold confetti. The town's longest file: CLOSED. The town's longest story: never closes. See next volume." Gerald leaned on the period key, as is now constitutional. Best season yet. They keep BEING the best season yet. I've stopped tryin' to model it.`
    ],
    oldman: [
      `@3 "Even the trees queue for her." I said it as a joke, grandson, and halfway through I heard it was simply TRUE, and had been for sixty years: the whole town, the pigeons, the koi, the seasons — everything that loves her lines up early. I joined the queue late, at kilometer seven, with flour on my ears. This town's greatest secret, which I leave ya now: THE QUEUE IS THE LIFE, grandson. The bread at the end's just the receipt.`,
      `@7 Husband. HUSBAND. Eighty-four years old and the word's brand new in my mouth, warmer than any oven I ever tended. She's on my arm, the ribbon's on my wrist, the cat's at our heels, and the pond — the pond's applaudin', don't let anyone tell ya fish can't applaud, I got EVIDENCE, your sister drew it. Same walk tomorrow, grandson. Sixty more years, and I intend to be early for EVERY ONE of 'em. ...Thank you. All of you. For settin' the place. FINAL — as my WIFE would say.`
    ],
    cat: [
      `@7 Fish-Thief's third weddin': rings delivered at a processional walk (bandana: laundered; gait: state-funeral dignified), vows witnessed from the exact center of the arch's shadow, and the departure escorted at heel-height into the lanterns, precisely between the couple and the town — the mathematical midpoint of everything that matters. At the pond's edge he stopped, sat, and watched 'em go where escorts don't follow: the rest of the walk is THEIRS. Then he returned to the party and claimed the warmest lap in attendance. It was Mori's. 'Course it was Mori's. The next season always starts early, and the marshal is never, ever wrong.`
    ],
    grandma: [
      `@2 Ya walked me in, dear, and your arm did not shake, which is more than I can say for the ENTIRE front row. I chose ya the night ya said "grandfather" on the porch — a woman wants to enter her weddin' on the arm of the future, wearin' the silver of the past. Both fit PERFECTLY. Like the ring. Like the town. EXACTLY on time. That's the last lesson of the season, dear, and it's FINAL.`,
      `@7 Still myself, dear, federated, ribbon-first, surname intact, married at eighty-one beside the water I once ran past too fast to stop. Tonight your sister asked me if the wait was worth it. The truth: NOTHIN's worth sixty years, dear. But everything that GREW in 'em — the daughter, the family, the town, the grandson on my arm — that was worth EVERYTHING. The wait was the cost. YOU were all the interest. Now: my husband's waitin', the pond's waitin', and a bride does not dawdle at her own finish line. SAME TIME NEXT SEASON.`
    ],
    tmother: [
      `@0 Tab twelve, dear: WITNESS. I stood at the back with my entire book club (attendance: twelve of twelve, tissues: pooled, insufficient, TRADITIONAL) and did the hardest thing an event planner can do: NOTHING. It was the finest event of my career. The master's doctrine's complete and so's my apprenticeship. ...The NEXT binder, however — the doctors' — has already been purchased. SLIM edition. I'm only human, dear.`,
      `@7 Four years ago I arrived in this town with nineteen tabs and a laser pointer, to inspect the man my daughter loved. Tonight I stood under paper lanterns while a pond applauded two eighty-year-olds, my husband handed ME the towel AGAIN, and my book club wept as one organism. Final report, one line, binder CLOSED: "Correct town. Correct family. Correct everything." Filed under: HOME.`
    ],
    tfather: [
      `@5 THE TOAST. "SETTLED AT LAST, IN FULL." I made a sound like the BOAT, son — the good sound, the launchin' sound — and the boss just NODDED at me mid-officiatin' 'cause this town's professionals ACKNOWLEDGE each other's craft. Then the koi did the lap and I lifted my wife AGAIN — second airborne incident, ZERO regrets, the photograph's ALREADY at the printer's. POSTER SIZED. The inn wall's got ROOM.`,
      `@7 Son. SON. Gold confetti, lantern light, two silhouettes and a cat, and my wife's hand in mine on a plot of land we bought next to a story we get to live INSIDE of now. Sixty more years, son. The forecast is CERTAIN. The handshake ecosystem is ETERNAL. And somewhere out there next season's already warmin' up — I can HEAR it stretchin'. THIS TOWN, SON. THIS TOWN!!`
    ],
    kenji: [
      `@6 She signed the residency form at a WEDDING, with the registry pen, and the first thing my teacher — my COLLEAGUE — did as a citizen of this town was lose her lap to the cat and her composure to the teacups. My grandmother's teacups, holdin' tea for the woman who taught me sutures and the woman whose pulse defies textbooks. Everything before this town was pre-op. That's the correct chart note.`,
      `@7 Final entry, season six, both doctors signin': "Two patients, combined age one hundred sixty-five, discharged into matrimony at their own pace, sixty years to the day past the initial consultation at kilometer seven. Complications: an entire town, chronic, incurable, essential to recovery. Prognosis: EVERY night, same pond, same pace, indefinitely. Treatment plan, all residents, all seasons: REMAIN." Countersigned: Mori. Annotation: "Ha. Yes. Home." ...Same time next season, grandson-of-the-groom. The lemon tea'll be ready. It's ALWAYS ready now. That's what home means, I'm told. We all are. Goodnight.`
    ]
  }
}
]