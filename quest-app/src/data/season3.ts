import type { Episode } from './episodes'

/* =====================================================================
   SEASON 3 (episodes 21-30) — "The Engagement Season"
   Arc: the town digests THE PROPOSAL. Trinity's parents arrive (ep22),
   Dr. Kenji opens the clinic (ep23, new location), Grandma vs the Coach
   rematch (ep24), the suit man's secret (ep25), wedding planning war
   (ep26), and the season finale is the ENGAGEMENT PARTY on the hill.
   All text trilingual via {concept} markers.
   ===================================================================== */

export const SEASON3: Episode[] = [

/* ============================== EP 21 ============================== */
{
  ep: 21,
  title: '第21話 「町中が知っている」 — The Whole Town Knows',
  words: ['news', 'noisy', 'happiness', 'question', 'secret', 'boss', 'coworker', 'tell'],
  story:
    `Mornin'. The ring catches the sunlight and Trinity can't stop lookin' at it. The plan: keep it {secret} 'til ya can ` +
    `{tell} everyone proper, one by one. There's exactly one problem with that plan, bud: the entire town was hidin' ` +
    `behind the trees last night. Everybody already knows. And everybody's decided to act SURPRISED anyway. Badly.`,
  timerSec: 300,
  quests: [
    { word: 'news', type: 'talk', npc: 'trinity', stage: 0,
      ask: `The {news} is officially out! Or... is it? Operation Tell-Everyone-Proper starts now. Trinity's assignin' routes. There's a map, bud.` },
    { word: 'noisy', type: 'talk', npc: 'sister', stage: 1,
      ask: `Your sister's bein' VERY {noisy} about the ring. Three blocks away, the pigeons have relocated in protest.` },
    { word: 'happiness', type: 'talk', npc: 'mom', stage: 2,
      ask: `Mom keeps cryin' into the miso. "It's {happiness}," she says. "Also onions. But mostly happiness."` },
    { word: 'question', type: 'talk', npc: 'friend', stage: 3,
      ask: `Your friend's got ONE {question}. Just the one. He's vibratin'. "CAN I PLAN THE PARTY." It wasn't really a question, bud.` },
    { word: 'secret', type: 'talk', npc: 'grandma', stage: 4,
      ask: `Grandma swears she kept the {secret}. Grandma told four strangers, a bus driver, and possibly the koi.` },
    { word: 'boss', type: 'talk', npc: 'boss', stage: 5,
      ask: `Your {boss} deserves to hear it in person. He pretends to be stunned. He was behind the third tree. He tears up anyway.` },
    { word: 'coworker', type: 'talk', npc: 'coworker', stage: 6,
      ask: `Your {coworker} claims Gerald predicted the whole thing. Gerald's a plant. Gerald was ALSO behind the trees, apparently.` },
    { word: 'tell', type: 'talk', npc: 'oldman', stage: 7,
      ask: `One more person to {tell}: the old man. He nods, real slow. "The koi informed me at dawn," he says. "Congratulations."` }
  ],
  stageToasts: {
    1: `💍 First stop: your sister heard a rumor. The whole street heard your sister.`,
    2: `🍲 The kitchen. Mom's "not cryin'". Go hug your not-cryin' mother.`,
    3: `⚡ Your friend's been outside the door for forty minutes. Let him in before he combusts.`,
    4: `🍵 Grandma's lookin' extremely innocent. Suspiciously innocent. Investigate.`,
    5: `🏢 The office awaits. Two more "surprised" faces to collect.`,
    6: `🪴 Gerald knew?! Get the full story from your coworker.`,
    7: `🌳 Last one. The park. The old man. The koi already know, but manners matter.`
  },
  npcLines: {
    trinity: [
      `I've looked at the ring forty times today. The number's accurate. I counted.`,
      `Everyone keeps gaspin' when we tell 'em. They were BEHIND THE TREES. I saw shoes, bud.`
    ],
    mom: [
      `I'm fine. I'm FINE. *sniff* Who wants seconds? Everyone gets seconds. My child is ENGAGED.`,
      `I called your aunt. She screamed. The neighbors called to ask about the screamin'. So I told them too.`
    ],
    dad: [
      `Welcome to the married world, almost. Rule one: her side of the closet expands. Accept it, bud.`,
      `I practiced my "surprised face" all mornin'. Was it good? Be honest. Your mother says I looked constipated.`
    ],
    sister: [
      `I'm tellin' EVERYONE. It's my {news} now. I found out fourth and that's a personal injustice.`,
      `Can I be in charge of the flowers? Or the music? Or EVERYTHING? Blink if yes.`
    ],
    friend: [
      `THE PARTY. I got three concepts. One involves fireworks. One involves MORE fireworks.`,
      `I was behind the second tree and I filmed the whole thing. Vertically. Sorry, bud. I was emotional.`
    ],
    shopkeeper: [
      `Congratulations! Everything on the celebration shelf: ten percent off. The shelf didn't exist yesterday. I built it at dawn.`,
      `A {secret}, in THIS town? Bold. The bread line knew before the bread was outta the oven.`
    ],
    trainer: [
      `ENGAGED! Ya know what that means: WEDDING TRAINING ARC. We start with cardio. Love's a marathon, bud!`,
      `I cried last night behind the tree. Tears of PROTEIN. Don't print that.`
    ],
    boss: [
      `@6 Married life's like management: listen more than ya talk, and never touch the thermostat without a meetin'.`,
      `Take Friday off. Both of ya. That's not a suggestion, it's a gift. There's a difference. Barely.`
    ],
    coworker: [
      `Gerald leaned toward the window three days ago. East. Toward the hill. We knew. WE KNEW.`,
      `I've already started a spreadsheet for your seatin' chart. Tab four's "people who feud". It's not empty, bud.`
    ],
    oldman: [
      `@7 In 1964 I baked bread the mornin' after my own engagement. It rose perfectly. Bread knows.`,
      `The pigeons voted. They approve. The one with the crooked wing abstained. He abstains from everything.`
    ],
    cat: [
      `Fish-Thief accepts congratulations on your behalf. He carried the ring. He considers the marriage partly his.`
    ],
    grandma: [
      `I knew before HE knew, dear. Grandmas get this information through the air.`,
      `@5 Four strangers and a bus driver is NOT the whole town. The koi don't count. They can't speak.`
    ]
  }
},

/* ============================== EP 22 ============================== */
{
  ep: 22,
  title: '第22話 「ご両親、来る」 — Meet the Parents',
  words: ['parents', 'clothes', 'nervous', 'greeting', 'fruit', 'shop clerk', 'same', 'different'],
  story:
    `Trinity's {parents} arrive at noon. You've never met 'em. Trinity says "they'll love you" in the exact voice folks ` +
    `use when boardin' a rollercoaster. There's a plan: proper {clothes}, a perfect {greeting}, and gift fruit — the round, ` +
    `shiny, expensive kind. Grandma's appointed herself your coach. There'll be drills, bud.`,
  timerSec: 315,
  quests: [
    { word: 'parents', type: 'talk', npc: 'trinity', stage: 0,
      ask: `Her {parents} land at noon. "Don't panic," Trinity says, panickin' gently. "They're lovely. Dad WILL crush your hand. It means he likes ya."` },
    { word: 'clothes', type: 'inspect', obj: 'bed', stage: 1,
      ask: `{clothes} on the bed: the lucky shirt or the serious shirt? ...Both. Layers. Layers say "responsible, yet fun".` },
    { word: 'nervous', type: 'talk', npc: 'friend', stage: 2,
      ask: `Ya look {nervous}. Your friend rates your calm at two outta ten. "Fixable," he says. "Probably. Stop doin' that with your hands, bud."` },
    { word: 'greeting', type: 'talk', npc: 'grandma', stage: 3,
      ask: `Back straight. Warm eyes. Grandma drills the {greeting} eleven times. Number eleven's PERFECT. "Again," she says anyway.` },
    { word: 'fruit', type: 'buy', item: 'a box of perfect gift fruit', stage: 4,
      ask: `Gift {fruit}! The round, shiny, expensive kind. No — the whole box. In-law fruit's gotta GLEAM.` },
    { word: 'shop clerk', type: 'talk', npc: 'shopkeeper', stage: 5,
      ask: `The {shop clerk} gift-wraps the fruit and slips in a good-luck charm. "For the in-laws," he winks. "Worked for me twice."` },
    { word: 'same', type: 'talk', npc: 'tmother', stage: 6,
      ask: `Her mom studies ya for one long moment... then smiles. "You've got the {same} kind eyes Trinity wrote about." Ya survive.` },
    { word: 'different', type: 'talk', npc: 'tfather', stage: 7,
      ask: `"Every family's {different}," her dad booms, crushin' your hand warmly. "Ours just cries more. You'll see. Welcome, son."` }
  ],
  stageToasts: {
    1: `👔 Noon's comin'. Operation First Impression: wardrobe phase.`,
    2: `😰 Your hands are doin' the thing. Get coached. Your friend's (worryingly) the expert.`,
    3: `🙇 Grandma's cleared the livin' room for greetin' drills. Attend or be fetched.`,
    4: `🍎 Nobody meets in-laws empty-handed. To the store — the SHINY fruit.`,
    5: `🎁 Wrappin' matters. Presentation matters. The shopkeeper's got opinions.`,
    6: `🌸 They're HERE. At the park. Breathe in. Breathe out. Apples forward. GO.`,
    7: `🤝 One parent down. Now the handshake. May your bones be brave.`
  },
  npcLines: {
    trinity: [
      `My mom notices everything. EVERYTHING. She once spotted a lie by the way I held a teacup.`,
      `@6 See? Told ya. My dad's already plannin' a fishin' trip with ya. You're IN, bud.`
    ],
    mom: [
      `Her parents raised the person who makes ya happy. That makes 'em family already. Also I baked six things. SIX.`,
      `If her mother asks who taught ya manners, the answer's ME. Rehearse it.`
    ],
    dad: [
      `Father-in-law tip: laugh at his jokes, but not TOO fast. They can smell fear, bud.`,
      `I met YOUR grandmother holdin' a melon so expensive my hands shook. It works. Fruit works.`
    ],
    sister: [
      `I'll be watchin' from the bushes and ratin' the greetin'. Current odds are not in your favor.`,
      `If it goes bad, my emergency plan's releasin' the cat as a distraction. He's agreed. For snacks.`
    ],
    friend: [
      `Confidence tip: they're just people. Terrifyin', judgin' people who control your future. You got this, bud!`,
      `@7 A HANDSHAKE CRUSH ON THE FIRST MEETIN'? That's the highest honor. I read about this.`
    ],
    shopkeeper: [
      `In-law fruit's my finest department. These apples've been polished TWICE.`,
      `The charm's real, by the way. Blessed at the shrine. Well. Waved in its general direction.`
    ],
    trainer: [
      `First meetings are like heavy lifts: breathe, plant your feet, COMMIT. Don't lock your knees.`,
      `I met my hero once and fainted. This isn't advice, bud. This is a warnin'.`
    ],
    boss: [
      `Meetin' the in-laws is a performance review ya can't reschedule. You'll do fine. Probably.`,
      `I still call my father-in-law "sir". It's been thirty years. Know your battles.`
    ],
    coworker: [
      `Gerald suggests leadin' with the apples. Gerald's fruit-motivated, but the logic's sound.`,
      `Statistically, ninety percent of in-law meetings go fine. I made that up. But it FEELS true. Go get 'em, bud.`
    ],
    oldman: [
      `The pigeons meet new pigeons every day. They puff up, they circle, then somebody shares bread. You'll be fine.`,
      `@6 Her mother's got clever eyes. Clever eyes like honest answers. You've got those. Use 'em.`
    ],
    cat: [
      `Fish-Thief's groomed himself for the occasion. Unprompted. Even the CAT understands the stakes.`
    ],
    grandma: [
      `Eleven greetin' drills is standard, dear. For the weddin' it'll be twenty. Build your base now.`,
      `@7 Hmph. Her father seems solid. Good crush on the handshake. I checked with binoculars.`
    ],
    tmother: [
      `@6 Trinity wrote about ya in every letter. The apples were a lovely touch. The tremblin' was also noted. Endearing.`,
      `@6 I've got a list of questions. Alphabetized. We'll begin at dinner. Bring your appetite and your alibis.`
    ],
    tfather: [
      `@7 GOOD handshake! Solid! Firm! I like this one, Trinity! I LIKE THIS ONE!`,
      `@7 Don't tell my wife I already like ya. Negotiations continue through Sunday. It's theater. Enjoy it, son.`
    ]
  }
},

/* ============================== EP 23 ============================== */
{
  ep: 23,
  title: '第23話 「町のお医者さん」 — The Town Doctor',
  words: ['painful', 'hospital', 'appointment', 'arm', 'year', 'save', 'relief', 'okay'],
  story:
    `Dad tries to carry ALL the groceries in one trip to impress Trinity's father. "The one-trip rule," he grunts, "is ` +
    `sacred." Somethin' in his shoulder disagrees, loudly. Good timin', sort of: the little clinic by the street's finally ` +
    `opened its doors. The doctor inside is calm, precise, and — wait. The boss knows him?! From THE {year}?! The printer ` +
    `incident's got a SURVIVOR?`,
  timerSec: 300,
  quests: [
    { word: 'painful', type: 'talk', npc: 'dad', stage: 0,
      ask: `Dad insists nothin's {painful}. Dad's standin' at a forty-degree angle and callin' it "a stretch".` },
    { word: 'hospital', type: 'talk', npc: 'mom', stage: 1,
      ask: `Mom points at the door. "{hospital}. Now. And no, walkin' it off is not medicine, and no, neither is beer."` },
    { word: 'appointment', type: 'talk', npc: 'kenji', stage: 2,
      ask: `Dr. Kenji opens his book. "You're in luck — I got a cancellation at... all of 'em. {appointment} booked. Bring the patient and his pride."` },
    { word: 'arm', type: 'inspect', obj: 'bed_clinic', stage: 3,
      ask: `Dad's installed on the exam bed. The {arm}: sprained. Diagnosis delivered calm as anything. Dad requests a second opinion. From the cat.` },
    { word: 'year', type: 'talk', npc: 'boss', stage: 4,
      ask: `"KENJI?!" your boss cries. "THE {year}! 2019! The printer! We agreed never to speak of it!" They speak of it for an hour.` },
    { word: 'save', type: 'inspect', obj: 'chest_clinic', stage: 5,
      ask: `The medicine cabinet. "The right shelf can {save} a life," says Dr. Kenji. "The left shelf's snacks. Also important."` },
    { word: 'relief', type: 'talk', npc: 'trinity', stage: 6,
      ask: `Trinity exhales all the way down to her shoes. "{relief}. When your mom called, I pictured a full-body cast." Dad, offended: "NEXT TIME."` },
    { word: 'okay', type: 'talk', npc: 'dad', stage: 7,
      ask: `"I'm {okay}," dad announces, arm in a sling, strikin' a pose. Dr. Kenji, without lookin' up: "He's okay. The pose is not."` }
  ],
  stageToasts: {
    1: `🛒 Fourteen bags. One trip. Zero regrets, one shoulder. Mom's entered the chat.`,
    2: `🏥 The clinic on the east street's OPEN. New doctor. Smells like lemons and competence.`,
    3: `🩺 Get dad onto the exam bed. He's negotiatin'. He's losin'.`,
    4: `👔 Your boss just walked in for a checkup and went WHITE. These two know each other...`,
    5: `💊 Dr. Kenji's restockin'. Sneak a look at the famous cabinet.`,
    6: `💜 Trinity sprinted here from work. Update her before she diagnoses everyone herself.`,
    7: `😤 Final check: the patient claims total victory. Verify.`
  },
  npcLines: {
    trinity: [
      `Your dad tried the one-trip rule with MY dad watchin'?! The bravery. The absolutely pointless bravery.`,
      `@6 The new doctor's so calm. I asked if dad was dyin' and he said "only of embarrassment". I like him.`
    ],
    mom: [
      `Twenty years I've watched that man carry groceries like it's the Olympics. The medal finally came.`,
      `@3 Sprained! Only sprained. Good. Now I can go back to bein' angry about the eggs he crushed.`
    ],
    dad: [
      `The bags made it inside. ALL of 'em. Whatever the doctor says, the record stands, bud.`,
      `@7 The sling's temporary. The GLORY's forever. Fourteen bags. Tell your children.`
    ],
    sister: [
      `Dad made a sound like a kettle. I recorded it. It's my ringtone now.`,
      `The new clinic's got a jar of tiny dinosaurs for brave patients. I wasn't a patient. I've got three dinosaurs.`
    ],
    friend: [
      `A DOCTOR in town! Finally! I got a list of questions I've been savin'. Item one: is cereal soup?`,
      `@4 The printer incident of 2019?! I need the FULL story, bud. Somebody lost a fingernail. That's all anyone knows.`
    ],
    shopkeeper: [
      `Your dad bought bag number fourteen here. I offered a cart. He looked at me like I insulted his ancestors.`,
      `Dr. Kenji, is it? He came in Tuesday. Bought green tea and exactly one apple. A man of discipline.`
    ],
    trainer: [
      `A sprain?! I told him: LIFT WITH THE LEGS. The legs! Groceries are just deadlifts with snacks inside!`,
      `@2 New doctor, huh? I'll introduce myself. Professionals of the BODY oughta know each other.`
    ],
    boss: [
      `@4 Kenji set my finger in 2019 with two pencils and pure calm while the printer was still... no. We do not speak of it.`,
      `@4 He's the best doctor I know. He's the ONLY doctor I know. Both statements are true and unrelated.`
    ],
    coworker: [
      `The printer that got the boss in 2019 is the same one we've got NOW? I'm askin' for a friend. The friend is me. I'm scared.`,
      `Gerald's come to the clinic for moral support. Also the waitin' room gets excellent light. Win-win.`
    ],
    oldman: [
      `A doctor in town at last. The pigeons are draftin' their complaints. Mostly about bread portions.`,
      `In my day the medicine was a hot towel and stubbornness. Don't tell the doctor I said it fondly.`
    ],
    cat: [
      `Fish-Thief examined the patient, sat on his chest, and prescribed warmth. Honestly? Same treatment plan as the doctor.`
    ],
    grandma: [
      `A sprain! In MY day we called that "Tuesday". ...Fine, FINE, the sling's sensible. The doctor seems sturdy.`,
      `@2 I checked the new doctor's handshake through the window. Firm but kind. He may stay.`
    ],
    tmother: [
      `Your father attempted fourteen bags to impress my husband. My husband once attempted SIXTEEN. They're the same species.`,
      `The clinic's charming. I've already recommended it to three people. They were strangers. Details.`
    ],
    tfather: [
      `@0 FOURTEEN bags?! In ONE trip?! ...Don't tell anyone I said this, but: legend.`,
      `@7 A sling worn with dignity. Your family's got spirit, son. My hand's still recoverin' from OUR handshake and I respect it.`
    ],
    kenji: [
      `@2 First patient in my new clinic. I'd frame the paperwork, but that seems unprofessional. ...I'll frame it a little.`,
      `@4 Yes, the 2019 printer incident. No, I can't discuss it. Doctor-patient-printer confidentiality.`
    ]
  }
},

/* ============================== EP 24 ============================== */
{
  ep: 24,
  title: '第24話 「おばあちゃん対コーチ」 — Grandma vs. The Coach',
  words: ['match', 'power', 'noon', 'vegetables', 'hot', 'cheer', 'sound', 'day'],
  story:
    `The coach hasn't slept proper since the marathon. Beaten — BEATEN — by a grandmother in flamingo socks. This mornin' ` +
    `he shows up at your door holdin' a hand-painted poster: "REMATCH. One lap around the pond. High {noon}." Grandma sips ` +
    `her tea, sets down the cup, and says four words that chill the whole room: "Bring your good shoes."`,
  timerSec: 300,
  quests: [
    { word: 'match', type: 'talk', npc: 'trainer', stage: 0,
      ask: `The coach, eyes blazin': "A {match}. Her. Me. The pond. High noon. Deliver the challenge." He's made posters. Seventeen posters.` },
    { word: 'power', type: 'talk', npc: 'grandma', stage: 1,
      ask: `Grandma sets down her tea. "{power} isn't muscles, dear. It's breakfast, patience, and knowin' where the finish line REALLY is." She accepts.` },
    { word: 'noon', type: 'talk', npc: 'mom', stage: 2,
      ask: `"{noon}? In this heat?" Mom sighs the sigh of a woman raisin' everyone in town. "Fine. But BOTH of 'em nap afterward. Enforced."` },
    { word: 'vegetables', type: 'buy', item: 'champion-grade vegetables', stage: 3,
      ask: `Grandma's race-day request: {vegetables}. "Fuel of champions since 1971." The shopkeeper doesn't dare to upsell her.` },
    { word: 'hot', type: 'talk', npc: 'dad', stage: 4,
      ask: `"It's TOO {hot} for this," announces dad, fannin' himself on the only shady bench, which he claimed two hours ago with a towel.` },
    { word: 'cheer', type: 'talk', npc: 'friend', stage: 5,
      ask: `Your friend built a {cheer} squad: himself, your sister, and the cat in a tiny headband. The pigeons formed a rival section.` },
    { word: 'sound', type: 'do', loc: 'park', verb: 'walk', amount: 500, stage: 6,
      ask: `Walk the course with the racers! At the {sound} of the whistle — GO! (The whistle's your sister screamin'. It's very effective.)` },
    { word: 'day', type: 'talk', npc: 'oldman', stage: 7,
      ask: `The old man calls it before the finish: "What a {day}. They'll cross the line together." They do. On purpose? Nobody dares to ask.` }
  ],
  stageToasts: {
    1: `🔥 Challenge accepted. The kitchen temperature dropped five degrees. Tell mom before the town does.`,
    2: `📋 Mom's sanctioned the match. There are CONDITIONS. There are always conditions.`,
    3: `🥬 The champion requires fuel. To the store — and let HER negotiate.`,
    4: `☀️ High noon approaches. The spectators are assemblin'. Dad got the good bench. 'Course he did.`,
    5: `📣 Ya can't race without noise. Inspect the cheer squad. Mind the tiny headband.`,
    6: `🏁 RACERS READY. Walk the pond course — the whole town's watchin'!`,
    7: `🏅 The finish line! The old man's smilin' like he knows somethin'. He always knows somethin'.`
  },
  npcLines: {
    trinity: [
      `The coach trained six weeks for this. Grandma prepared by finishin' her tea slightly faster than usual. I fear for him, bud.`,
      `@7 Together across the line. That woman coulda won by a street. Your grandmother's a DIPLOMAT.`
    ],
    mom: [
      `My mother's seventy-nine and racin' a fitness coach at noon. No, I'm not worried. I'm sellin' refreshments.`,
      `@7 Both of 'em nappin' in the shade like toddlers. THIS is my finish-line photo.`
    ],
    dad: [
      `I've trained for TODAY my whole life: bench acquisition, shade management, snack logistics. Elite spectatin', bud.`,
      `@6 GO GO GO— okay I stood up too fast. Cheerin's also cardio. Respect the cheer.`
    ],
    sister: [
      `I'm the official whistle. I've been practicin' my scream. The neighbors know. Everyone knows.`,
      `@7 They tied?! I screamed for NOTHIN'?! ...It was a beautiful nothin'. I'd scream again.`
    ],
    friend: [
      `The cheer squad's got choreography now. The cat learned it FASTER than your sister. We don't discuss this.`,
      `@6 LOOK AT 'EM GO. The coach is sprintin'. Grandma's... strollin'? WHY IS THE GAP NOT GROWIN'?!`
    ],
    shopkeeper: [
      `@3 She looked at my prices, said "1971 prices were friendlier," and somehow I APOLOGIZED. Champion energy.`,
      `I've sold forty drinks since sunrise. This match is the best economy this street's ever seen.`
    ],
    trainer: [
      `Six weeks. Hill sprints. Ice baths. I visualized VICTORY... and she just smiled at me over her tea. WHY IS THAT SCARY?`,
      `@7 A draw. She let it be a draw. I've never been so honored and so destroyed at the same time. ...Sensei?`
    ],
    boss: [
      `The office is closed for the match. I posted "gone racin'". Nobody questioned it. This town's got its priorities right.`,
      `My money was on grandma. My money's ALWAYS on grandma. This is called risk management.`
    ],
    coworker: [
      `Gerald's watchin' from the office window with the good binoculars. He picked grandma. Plants know things.`,
      `@7 A photo finish where both people finish TOGETHER on purpose. This town doesn't produce losers. Only content.`
    ],
    oldman: [
      `In 1971 she passed three runners on the last bridge. I saw it. Today the coach learns what I learned: pace yourself around legends.`,
      `@7 They crossed together. That was her gift to him. Champions collect people, not trophies.`
    ],
    cat: [
      `Fish-Thief in the tiny cheer headband's already been photographed sixty times. He tolerates fame with dignity.`
    ],
    grandma: [
      `Racin's simple, dear. Everyone else runs their race. I run MINE. Mine just happens to be faster.`,
      `@7 A tie's the correct result. He needed his fire back, not his ashes. ...Also I was savin' my knees for the weddin'.`
    ],
    tmother: [
      `I've watched many sportin' events. None had this much drama. Trinity, we're movin' here. I've decided.`,
      `@7 The grandmother let him tie. Magnificent. I'm takin' notes for my book club feuds.`
    ],
    tfather: [
      `@5 I joined the cheer squad. I don't fully understand the choreography, but I cry when they do the wave.`,
      `@7 BOTH OF 'EM! TOGETHER! *loud unashamed sobbin'* This TOWN!`
    ],
    kenji: [
      `I'm attendin' in a medical capacity. Blood pressure checks before, water after. ...Also I made a small sign. "Go both."`,
      `@7 Pulse checks complete: the coach's heart is racin'. The grandmother's is at RESTING RATE. I've got questions for science.`
    ]
  }
},

/* ============================== EP 25 ============================== */
{
  ep: 25,
  title: '第25話 「スーツの男の正体」 — The Suit Man\'s Secret',
  words: ['famous', 'company', 'appear', 'preparation', 'battery', 'speech', 'film', 'camera'],
  story:
    `He's back. The man in the suit — the one who tried to buy Fish-Thief at the flea market and vanished into the crowd. ` +
    `Today he stands in the middle of the street, bows real deep, and presents a business card with two tremblin' hands. ` +
    `He's from Maruneko Pet Foods. A real {company}. And he's got one request: he wants Fish-Thief to {appear}... in a commercial.`,
  timerSec: 315,
  quests: [
    { word: 'famous', type: 'talk', npc: 'friend', stage: 0,
      ask: `Your friend sprints up, wheezin': "The suit man's BACK. And he says the cat could be {famous}. FAMOUS famous. Like, poster famous."` },
    { word: 'company', type: 'talk', npc: 'trinity', stage: 1,
      ask: `Trinity reads the card twice. "Maruneko Pet Foods. A real {company}. Well." She looks at the cat. "He DOES have a face for snacks."` },
    { word: 'appear', type: 'talk', npc: 'cat', stage: 2,
      ask: `Will Fish-Thief {appear} in the commercial? He stares at the contract... then slow-blinks at it. That's a yes. And a power move.` },
    { word: 'preparation', type: 'talk', npc: 'mom', stage: 3,
      ask: `{preparation}: mom bathes the cat. The cat ALLOWS it. The town observes a moment of silence for mom's sleeves — unscratched. He's ready.` },
    { word: 'battery', type: 'buy', item: 'every camera battery in stock', stage: 4,
      ask: `The film crew forgot their spares?! Buy every {battery} in the store. The shopkeeper: "For HIS shoot? Half price. He's family."` },
    { word: 'speech', type: 'talk', npc: 'sister', stage: 5,
      ask: `Your sister wrote the cat an acceptance {speech} for awards he hasn't won yet. It's one word long: "Mrrrp." She's very proud of the endin'.` },
    { word: 'film', type: 'do', loc: 'street', verb: 'walk', amount: 400, stage: 6,
      ask: `They {film} the hero shot: Fish-Thief strollin' the street like he holds the deed to it. One take. ONE. The director whispers "legend".` },
    { word: 'camera', type: 'inspect', obj: 'tv', stage: 7,
      ask: `The crew replays it on your TV: the {camera} LOVES him. The director's cryin'. Dad's also cryin'. Gerald was added in post.` }
  ],
  stageToasts: {
    1: `🕴️ The suit man BOWED. Business card. Two hands. Tremblin'. Show Trinity.`,
    2: `📜 The contract's on the floor in front of the cat. The town holds its breath.`,
    3: `🛁 HE SIGNED (stepped on it, which counts). Now: the bath. Pray for mom.`,
    4: `🔋 Crew emergency! No batteries! The store! RUN — showbiz waits for no one!`,
    5: `🎤 Your sister's got "materials" prepared. Brace yourself. Support her anyway.`,
    6: `🎬 QUIET ON SET! Walk the street route — Fish-Thief films his hero shot!`,
    7: `📺 Wrap! The crew's huddled around your TV. Go see the playback.`
  },
  npcLines: {
    trinity: [
      `The suit man practiced that bow. Ya can tell. Weeks of practice. For a CAT. I respect the whole situation, bud.`,
      `@6 He walks like the street OWES him money. The camera crew keeps whisperin'. My fiancé's cat, the icon.`
    ],
    mom: [
      `@3 The bath went fine. FINE. We've got an understandin' now, that cat and me. Forged in water. Sealed in treats.`,
      `If the commercial pays in cat food, we're storin' it in YOUR room. The star can share his winnings.`
    ],
    dad: [
      `Our cat. On television. I've already told everyone at the hardware store. Twice. They've asked me to stop. I will not.`,
      `@7 I'm not cryin'. There's cat shampoo in the air. It's VERY movin' shampoo.`
    ],
    sister: [
      `I'm his manager now. I got a clipboard. Manager rule one: NO green sparkly water in his bowl. Only regular. He's humble.`,
      `@6 THAT'S MY CLIENT. THAT'S MY CLIENT EVERYONE. *fills out imaginary paperwork emotionally*`
    ],
    friend: [
      `I offered to be his stunt double. They said cats do their own stunts. Dreams: adjusted. I'm now "vibe security".`,
      `@7 When this airs we're throwin' a WATCH PARTY. I've already designed the invitations. There's two fireworks concepts.`
    ],
    shopkeeper: [
      `That cat stole a fish from me in his youth, and today I sold batteries for his film shoot at half price. Character arcs are real.`,
      `@6 I watched the take from my doorway. One take! My nephew needed nine takes to say "fresh eggs" for the market video.`
    ],
    trainer: [
      `The cat's got a commercial before I do?! ...No, no. I'm happy for him. I'm ALSO available, Maruneko. For protein campaigns.`,
      `@6 Look at that WALK. Core engaged, shoulders loose. That cat trains. Nobody trains like that by accident, bud.`
    ],
    boss: [
      `A company man bowin' in the street to a cat. And people say business's got no poetry left.`,
      `@1 Maruneko Pet Foods. Solid firm. Good quarterly reports. Yes, I checked before lettin' our cat sign anything. OUR cat.`
    ],
    coworker: [
      `Gerald auditioned by leanin' photogenically. They said they'd "keep him on file". He's devastated. Water him gently.`,
      `@7 Added in post?! GERALD MADE THE CUT?! Retract the devastation! GERALD IS IN THE COMMERCIAL!`
    ],
    oldman: [
      `The suit man sat by my pond yesterday, rehearsin' his bow to the koi. They gave notes. Harsh ones. It improved.`,
      `@6 Fame's a fish, young one. Delicious, but slippery. That cat's caught both. He'll be fine.`
    ],
    cat: [
      `@6 Fish-Thief rests between takes in a tiny director's chair the crew brought. He was born for this. He knows it. Everyone knows it.`
    ],
    grandma: [
      `A commercial! In MY day, the famous animal was a rooster who could count to three. This town's upgraded considerably.`,
      `@3 I supervised the bath from the doorway. That cat looked at me the whole time. We're equals now.`
    ],
    tmother: [
      `I once appeared in a regional yogurt advertisement. We don't discuss it. But if the cat needs coachin': my rates are reasonable.`,
      `@7 One take, natural lightin', emotional depth. That cat's got more screen presence than my yogurt director ever did.`
    ],
    tfather: [
      `I cry at commercials and this one isn't even FINISHED yet. I'm in danger.`,
      `@7 The playback got me. It GOT me. He looks at the camera like he forgives ya. WHO WRITES HIS MATERIAL?!`
    ],
    kenji: [
      `I certified the star fit for filmin'. Heart rate: serene. Reflexes: perfect. Ego: elevated but stable. Cleared for stardom.`,
      `@6 Medically fascinatin'. Under those lights, his blink rate SLOWED. Ice in his veins. The suit man chose well.`
    ]
  }
},

/* ============================== EP 26 ============================== */
{
  ep: 26,
  title: '第26話 「式の計画」 — The Planning Begins',
  words: ['place', 'spring', 'autumn', 'choose', 'old man', 'invitation', 'dress', 'decide'],
  story:
    `Two mothers. Two binders. One weddin'. Your mom's binder's got seventeen color-coded tabs. Trinity's mom's binder's ` +
    `got NINETEEN, and one of 'em's just fabric samples. Today the council convenes to answer the two great questions: ` +
    `WHERE, and WHEN. {spring} or {autumn}? The park, the garden, the gym (one guess who proposed the gym)? May fortune ` +
    `favor the calm, bud.`,
  timerSec: 315,
  quests: [
    { word: 'place', type: 'talk', npc: 'mom', stage: 0,
      ask: `Binder One opens with a *thump*. "First: the {place}." Mom's got seventeen tabs. Trinity's mom reveals nineteen. Dad quietly leaves to make tea for everyone. Wise.` },
    { word: 'spring', type: 'talk', npc: 'tmother', stage: 1,
      ask: `Trinity's mom presents: "{spring}. Blossoms. Beginnings. Poetry." Her slideshow's got TRANSITIONS. The room is moved. Grandma is unmoved.` },
    { word: 'autumn', type: 'talk', npc: 'grandma', stage: 2,
      ask: `Grandma, quietly: "{autumn}. Golden light. No mosquitoes. And it was good enough for 1971." She sips her tea. The debate's functionally over.` },
    { word: 'choose', type: 'talk', npc: 'trainer', stage: 3,
      ask: `The coach lobbies ya to {choose} the GYM. "Vows between the dumbbells! POWERFUL symbolism!" He's made posters again. He always makes posters.` },
    { word: 'old man', type: 'talk', npc: 'oldman', stage: 4,
      ask: `The {old man} raises a shy hand: "My pond garden... the koi would behave. Mostly." The entire war room goes soft at once.` },
    { word: 'invitation', type: 'buy', item: 'sample invitations', stage: 5,
      ask: `Sample {invitation} papers! The shopkeeper stocks forty kinds. Ya touch every one. So does the cat. Paw prints: now a design option.` },
    { word: 'dress', type: 'talk', npc: 'trinity', stage: 6,
      ask: `Trinity's been "just lookin'" at one {dress} magazine for three hours. "THIS one. No — THIS one. Stop lookin' at me like that. THIS one."` },
    { word: 'decide', type: 'talk', npc: 'tfather', stage: 7,
      ask: `Both binders close. "We {decide} together," Trinity announces: "autumn. On the hill. Where he asked." Her dad's already cryin'. Yours joins in. Solidarity.` }
  ],
  stageToasts: {
    1: `📒 The binders are OUT. The mothers've taken opposite ends of the table. Diplomacy begins.`,
    2: `🍵 Grandma's been silent for eleven minutes. She's about to end the season debate in one sentence.`,
    3: `💪 The coach's entered the war room uninvited, carryin' visual aids. Hear him out. Briefly.`,
    4: `🌳 A shy hand rises from the corner. The old man's got an offer. Listen close.`,
    5: `💌 Paper reconnaissance! To the store — the invitation samples arrived this mornin'.`,
    6: `👰 Trinity's barricaded herself with one magazine and infinite opinions. Approach gently.`,
    7: `🍂 The hill. Autumn. It was always gonna be the hill. Witness the decision.`
  },
  npcLines: {
    trinity: [
      `My mother brought a laser pointer to the venue discussion. YOUR mother brought a backup laser pointer. They're becomin' friends. I'm terrified.`,
      `@7 Autumn on the hill. Where you asked me. It was never actually a debate, ya know. I just liked watchin' the binders fight.`
    ],
    mom: [
      `Her binder's got nineteen tabs. NINETEEN. ...I've ordered a third binder. This isn't a competition. (It is. I love her.)`,
      `@7 The hill. *closes binder softly* Seventeen tabs and the answer was the place we already loved. That's weddings for ya.`
    ],
    dad: [
      `I've made eleven pots of tea and agreed with everyone. This is called survival, bud. Your father's a survivor.`,
      `@7 I started cryin' 'cause HE started cryin'. We shook hands mid-cry. Firmest, wettest handshake of my life.`
    ],
    sister: [
      `I've submitted my formal proposal for a confetti cannon. And my backup proposal for TWO confetti cannons.`,
      `@6 I helped pick the dress shortlist. My method: scream at the good ones. It's a strong method. We found three screamers.`
    ],
    friend: [
      `Party planner update: the engagement party and the weddin' are DIFFERENT events, which means — hear me out — TWO parties.`,
      `@5 Get the paw-print invitations. I'm not jokin', bud. The cat's famous now. That's a collectible.`
    ],
    shopkeeper: [
      `@5 Forty papers, and the cat chose the most expensive one by sittin' on it. That animal's got impeccable taste and no budget.`,
      `Weddin' season at my store! I've already ordered ribbon in "autumn gold". Don't ask how I knew. The bread line talks.`
    ],
    trainer: [
      `The gym proposal was REJECTED?! The dumbbells symbolize commitment through resistance! ...Fine. FINE. I call the after-party workout.`,
      `@7 The hill. Where champions raced and love won. ...Okay yes, it's better than the gym. Don't tell the dumbbells.`
    ],
    boss: [
      `Two project managers, one project, competin' binders. I'd pay real money to watch these negotiations. ...I'm watchin' 'em for free.`,
      `@7 Decision made in one afternoon with all stakeholders aligned. Those mothers should run a company. Possibly mine.`
    ],
    coworker: [
      `Gerald's requested to be a plant at the ceremony. Not A plant. THE plant. There's a difference and he feels it strongly.`,
      `@5 Spreadsheet update: paw-print invitations tested well with one hundred percent of surveyed pigeons. Small sample. Strong signal.`
    ],
    oldman: [
      `@4 They said the pond garden was a beautiful offer. They chose the hill, and they're right. But the koi and me... we were honored to be asked.`,
      `@7 Autumn on the hill. The light'll come in low and gold, and everyone'll look like a memory bein' made. Good choice. Great choice.`
    ],
    cat: [
      `@5 Fish-Thief's approved the invitation paper by sleepin' on the entire stack. The design committee accepts his verdict.`
    ],
    grandma: [
      `@2 Autumn. I said it once. I didn't need to say it twice. This is the way of grandmothers and generals.`,
      `@7 The hill in autumn light, like 1971 but with better shoes. Your grandmother approves. Now — dress fittings. ELEVEN of 'em.`
    ],
    tmother: [
      `@1 My spring presentation had transitions and a scent component. I lost to a grandmother with one sentence. I must study her.`,
      `@7 The hill is... correct. *closes binder with dignity* I shall redirect my nineteen tabs toward the reception. Prepare yourselves.`
    ],
    tfather: [
      `I was asked my opinion on venues. I said "wherever they smile the most". Both binder women wrote it down. My best day.`,
      `@7 THE HILL WHERE HE PROPOSED. *instant tears* Every time I stop, someone says "the hill" again and I START AGAIN.`
    ],
    kenji: [
      `I've been asked to attend the weddin' "in a medical capacity". I've also been asked to bring my famous lemon tea. I accept both roles.`,
      `@2 Blood pressure readings durin' the binder summit: everyone elevated except the grandmother. Textbook apex calm. Fascinatin'.`
    ]
  }
},

/* ============================== EP 27 ============================== */
{
  ep: 27,
  title: '第27話 「父たちの釣り」 — The Dads Go Fishing',
  words: ['go fishing', 'sky', 'long', 'short', 'stone', 'chilly', 'nap', 'bridge'],
  story:
    `Dawn. A knock. Dad's standin' there in a fishin' vest, holdin' three identical hats. Behind him: Trinity's father, ` +
    `also in a vest, grinnin' like a schoolboy. "Today," dad whispers, "we {go fishing}." It's a sacred ritual, bud: two ` +
    `fathers, one future son-in-law, one pond, and the old man as spiritual advisor. Total words spoken in the first hour: ` +
    `nine. It's perfect.`,
  timerSec: 300,
  quests: [
    { word: 'go fishing', type: 'talk', npc: 'dad', stage: 0,
      ask: `Dad, whisperin', rod in hand: "Today we {go fishing}. Man time. Quiet time." He made matchin' hats. There's only three. The cat is furious.` },
    { word: 'sky', type: 'talk', npc: 'tfather', stage: 1,
      ask: `Trinity's dad watches the {sky} turn pink over the pond. "This," he says. That's the whole sentence. Somehow, it's enough.` },
    { word: 'long', type: 'talk', npc: 'oldman', stage: 2,
      ask: `The old man: "Fishin's one {long} conversation with the water. Today the water's not talkin'. Sit anyway. Sittin's the point."` },
    { word: 'short', type: 'inspect', obj: 'pond', stage: 3,
      ask: `A tug on the line!! It's the world's most {short} fish. Ya release it. It seemed relieved. Possibly smug. The koi laugh in ripples.` },
    { word: 'stone', type: 'do', loc: 'park', verb: 'walk', amount: 400, stage: 4,
      ask: `No bites in an hour. New official activity: skippin' {stone}s. Trinity's dad gets NINE skips. The koi file a formal complaint.` },
    { word: 'chilly', type: 'talk', npc: 'cat', stage: 5,
      ask: `The wind turns {chilly}. Fish-Thief (who followed ya, hatless and bitter) installs himself on your lap as emergency heatin'. All is forgiven.` },
    { word: 'nap', type: 'inspect', obj: 'bench', stage: 6,
      ask: `Both dads. One bench. Synchronized {nap}. The old man tips their hats over their eyes without a word. "Tradition," he explains.` },
    { word: 'bridge', type: 'talk', npc: 'grandma', stage: 7,
      ask: `Grandma arrives with lunch via the old {bridge}, casts once "to check the water still works" — and catches THE fish. The legend grows. The dads sleep through it.` }
  ],
  stageToasts: {
    1: `🌅 The pond at dawn. Vests on. Hats on. Voices off. Begin the sacred silence.`,
    2: `🎣 One hour in. Zero fish. Morale: mysteriously excellent. Consult the sage.`,
    3: `❗ THE ROD MOVED. THE ROD MOVED. (Quietly. QUIETLY.)`,
    4: `🪨 The fish have unionized against ya. Time-honored plan B: rocks.`,
    5: `🌬️ Wind shift. Somethin' small and furry's threadin' between your ankles with intent.`,
    6: `💤 It's gone very quiet on the bench. Investigate. Bring no camera. (Bring a camera.)`,
    7: `🍱 Lunch approaches over the bridge — and grandma's eyein' the spare rod...`
  },
  npcLines: {
    trinity: [
      `Three vests, three hats, zero fish. My dad texted me a photo of the SKY with no caption. They're havin' the best day of their lives.`,
      `@7 Grandma caught it in ONE cast?! While holdin' a lunch basket?! 'Course she did. 'Course.`
    ],
    mom: [
      `The house is so QUIET. All the loud ones are at the pond. I've had three uninterrupted teas. Is this what peace is?`,
      `@6 A photo of 'em nappin' on the bench arrived from the old man. It's already framed. It's already on the wall.`
    ],
    dad: [
      `Rule of the pond: ya don't need to catch fish. Ya need to LOOK like men who could. We're excellin', bud.`,
      `@6 I wasn't nappin'. I was listenin' to the water with my eyes closed. ...Fine. Best nap of my life. The hat helped.`
    ],
    sister: [
      `They wouldn't give ME a hat. "Man time," they said. So I taught the cat to follow 'em. Enjoy your man time. He bites hats.`,
      `@7 GRANDMA CAUGHT THE FISH?! I'm makin' her a trophy. The dads get participation ribbons. Tiny ones.`
    ],
    friend: [
      `Fishin's just campin' for your arms, and I respect it deeply. Save me a spot next time. I'll bring the snacks and the noise.`,
      `@4 Nine skips?! NINE?! The record at that pond was six. Held by ME. ...Tell no one it was six.`
    ],
    shopkeeper: [
      `Three men bought bait, sun cream, and emergency chocolate at six in the mornin'. The chocolate tells ya everything about their confidence.`,
      `@7 Grandma bought NOTHIN' this mornin'. She said the pond would provide. THE POND PROVIDED. I need to sit down.`
    ],
    trainer: [
      `Fishin'?! Hours of sittin'?! ...The old man made me try it once. I've never been so relaxed and so confused about it. Core was engaged though.`,
      `@6 The synchronized nap's real?! Athletes call that "recovery". Those dads are trainin'. Unknowingly. Beautifully.`
    ],
    boss: [
      `Fathers bondin' over silence at a pond. Some meetings need no agenda. Most meetings need no agenda. I've learned somethin' today.`,
      `My father took me fishin' once. We caught nothin' and spoke twice. It's one of my favorite memories. Go figure.`
    ],
    coworker: [
      `Gerald spent the day facin' the window toward the pond. Photosynthesizin' in solidarity. He's a pond plant at heart.`,
      `@3 Catch-and-release of an extremely small fish, logged 10:42. The fish's smugness: noted in the record. We keep honest records.`
    ],
    oldman: [
      `@2 The pond gives fish some days and silence on the others. Both are catches, young one. Today it gave ya fathers. Rare catch.`,
      `@7 One cast. I've watched this pond for fifty years, and I've never — SHE FED THE KOI FIRST. That cunnin', brilliant woman. She BRIBED 'em.`
    ],
    cat: [
      `@5 Fish-Thief, professional fish expert, was denied a hat, followed ya anyway, and is now the warmest member of the expedition. He wins every timeline.`
    ],
    grandma: [
      `@7 The secret, dear? Respect the water, grease the koi, and never fish hungry — it makes ya desperate, and fish smell desperate.`,
      `@7 Yes, I fed the koi first. That's not cheatin'. That's DIPLOMACY. 1971 taught me many things.`
    ],
    tmother: [
      `My husband's sent me eleven photos: one fish (small), one sky (pink), nine of your father nappin'. He captioned the last one "brother".`,
      `While the men fish, Trinity's mother and yours've been tastin' reception menus. The wedding plannin' continues WITHOUT the binders. ...Faster, honestly.`
    ],
    tfather: [
      `@1 The pink sky over the water... don't tell my wife I cried before seven in the mornin'. She's got a chart of my cryin'. It's extensive.`,
      `@6 Your father and I fell asleep mid-sentence AT THE SAME TIME. We're bonded now. It's deeper than words. It's nap-deep.`
    ],
    kenji: [
      `Two men napped four hours in fresh air by water. As their doctor: outstandin'. As their friend: I want an invitation and a hat.`,
      `@3 They released the small fish. Compassionate anglin'. Also the fish filed no injuries with my clinic. Clean day all around.`
    ]
  }
},

/* ============================== EP 28 ============================== */
{
  ep: 28,
  title: '第28話 「台風の夜」 — The Typhoon',
  night: true,
  words: ['typhoon', 'window', 'close', 'dangerous', 'fly', 'guest', 'gather', 'open'],
  story:
    `The radio crackles at breakfast: a {typhoon}'s comin' tonight. The whole town shifts into motion at once — shutters, ` +
    `tape, candles, and mom transformin' into a four-star general before your eyes. By evenin' the wind's howlin' like it's ` +
    `got opinions. But here's the thing about storms in this town, bud: everybody ends up in somebody's kitchen, and the ` +
    `kitchen always wins.`,
  timerSec: 315,
  quests: [
    { word: 'typhoon', type: 'talk', npc: 'mom', stage: 0,
      ask: `The radio crackles: {typhoon} tonight. Mom stands. "Positions, everyone. Ya know the drill." NOBODY knows the drill. Doesn't matter. She does.` },
    { word: 'window', type: 'inspect', obj: 'window', stage: 1,
      ask: `Check every {window} in the house. The bedroom one rattles like it's got somethin' urgent to say. Tape it. It can gossip after the storm.` },
    { word: 'close', type: 'talk', npc: 'sister', stage: 2,
      ask: `"{close} the shutters!" your sister commands, dramatically, from under a blanket where she's "coordinatin' operations". Somebody's gotta lead.` },
    { word: 'dangerous', type: 'talk', npc: 'trainer', stage: 3,
      ask: `The coach jogs past with sandbags under each arm: "Runnin' tonight? {dangerous}. Even for me. EVEN FOR ME." He seems shaken by his own admission.` },
    { word: 'fly', type: 'do', loc: 'street', verb: 'walk', amount: 400, stage: 4,
      ask: `Sweep the street! Anything that can {fly}, WILL: buckets, posters, one profoundly astonished pigeon travellin' sideways past the store.` },
    { word: 'guest', type: 'talk', npc: 'coworker', stage: 5,
      ask: `"We evacuated," says your coworker at the door, soaked, holdin' Gerald. Your first {guest} of the storm — well, two. Mom's already got three towels ready.` },
    { word: 'gather', type: 'talk', npc: 'grandma', stage: 6,
      ask: `Everyone {gather}s in the kitchen: candles, cards, and grandma dealin' like a casino boss. Outside, the typhoon howls. Inside, the kitchen laughs harder.` },
    { word: 'open', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Mornin'. "{open} everything!" Trinity throws the shutters wide: washed sky, drippin' trees, one indignant pigeon re-walkin' his route. The town held.` }
  ],
  stageToasts: {
    1: `📻 Landfall tonight. The general's spoken. Windows first — move!`,
    2: `🪟 Bedroom window: secured. The blanket-commander downstairs demands a status report.`,
    3: `🏋️ Someone's STILL outside doin' laps with sandbags. 'Course he is. Check on him.`,
    4: `🌬️ The wind's pickin' up — the street needs one last sweep before lockdown!`,
    5: `🚪 A knock over the wind?! Someone's at the door. With foliage.`,
    6: `🕯️ All secured. All inside. The kitchen glows. This is the good part of a storm.`,
    7: `🌤️ Silence. Birdsong. Mornin' light through the shutter slats. Go see what the sky did.`
  },
  npcLines: {
    trinity: [
      `My parents rode out the storm at the inn playin' cards with the innkeeper. Mom won his umbrella. She's framin' it as a "cultural exchange".`,
      `@6 Candlelight card games with your whole family while the sky yells. I understand your childhood so much better now, bud.`
    ],
    mom: [
      `I've run typhoon protocol nineteen times in this house. The house is undefeated. Nineteen and zero. We don't break streaks.`,
      `@5 Guests in a storm! *visible joy* I've been WAITIN' for a chance to use the emergency futons. They're excellent futons.`
    ],
    dad: [
      `My typhoon role's "morale officer". This means snacks. I take it serious. Tonight's rankings: crackers, then the seaweed ones.`,
      `@6 Grandma's won six hands in a row. Either she's cheatin' or the storm's helpin' her. Both possibilities frighten me.`
    ],
    sister: [
      `The blanket's my COMMAND CENTER. Great generals don't stand in drafts. Read a history book.`,
      `@6 I've renamed our card team "The Typhoons". We're unstoppable. (We're two for six. The rebrand'll fix it.)`
    ],
    friend: [
      `I taped my windows in a cool pattern and now I'm kinda hopin' the — no. No, I'm not. Safety first. (The pattern's VERY cool though.)`,
      `@6 I rode out the storm at grandma school — I mean your kitchen. I lost four hands and learned eleven life lessons. Fair trade.`
    ],
    shopkeeper: [
      `Sold out: tape, candles, batteries, and every single pudding cup. Storms reveal what this town truly runs on. It's pudding.`,
      `@7 The store stands! The awnin's now three streets away, but the STORE stands. Priorities intact.`
    ],
    trainer: [
      `@3 Final laps done. Sandbags placed. The gym's sealed like a fortress. The dumbbells are safe. THE DUMBBELLS ARE SAFE.`,
      `@7 Mornin' inspection run complete! Damage report: one flag, my hat, and my pride when the wind took my hat. The town? STRONG.`
    ],
    boss: [
      `Office closed, servers off, Gerald evacuated to your house per the emergency plan. Yes, the plan's got a Gerald section. I wrote it myself.`,
      `@7 Everyone accounted for, nothin' serious broken. In management terms: a flawless incident response. In town terms: Tuesday.`
    ],
    coworker: [
      `@5 Gerald and me can't thank ya enough. He was rattlin' against the office window. He doesn't do well with wind. It's a leaf thing.`,
      `@6 Gerald sat in the middle of the card table like a centerpiece all night. He's never felt so included. Ten outta ten storm.`
    ],
    oldman: [
      `The pigeons sheltered under the shrine eave, in a row, like little judges. The koi went deep. The pond knows how to wait. So do I.`,
      `@7 After every storm I check the pond first. Still there. Still calm. Fifty years, every storm: still there. That's the whole lesson.`
    ],
    cat: [
      `@6 Fish-Thief spent the typhoon in the exact center of the kitchen table, purrin' at the wind. Some believe he was tauntin' it. He won regardless.`
    ],
    grandma: [
      `@6 Deal. Cut. Deal. In MY day, storm nights meant one candle and six liars around a card table. Tonight we got three candles. Luxury.`,
      `@6 Six hands in a row, dear. And no, I don't cheat. The cards simply respect their elders.`
    ],
    tmother: [
      `We're quite safe at the inn. I've won an umbrella, two teacups, and the innkeeper's undyin' respect. A productive storm.`,
      `@7 The mornin' sky here's remarkable after rain. I've decided to forgive the typhoon. It may go now.`
    ],
    tfather: [
      `I helped the innkeeper carry in his plants before the wind. He called me "brother". That's two brothers in one week. Best town.`,
      `@7 Everyone safe, everything washed clean. I looked at the mornin' sky and — ya know what I did. The chart grows.`
    ],
    kenji: [
      `Clinic status: open all night, per doctor tradition. Injuries treated: one splinter, one bruised toe, one man who "taped himself to test the tape".`,
      `@7 Storm-night total: three patients, zero serious. Prescription for the whole town: the mornin' air. Take liberally.`
    ]
  }
},

/* ============================== EP 29 ============================== */
{
  ep: 29,
  title: '第29話 「四十年ぶりのパン」 — Bread, Again',
  words: ['bake', 'flour', 'memory', 'smell', 'line up', 'soft', 'special', 'tears'],
  story:
    `Somethin' changed in the old man after the storm. Maybe it was the pond holdin' steady for the fiftieth year. Maybe it ` +
    `was grandma's one-cast fish, or the coach callin' him "sensei" now. Whatever it was — this mornin', for the first time ` +
    `in forty years, there's {flour} on his hands and an apron around his neck. The 1964 champion's gonna {bake}. One batch. ` +
    `Today only.`,
  timerSec: 300,
  quests: [
    { word: 'bake', type: 'talk', npc: 'oldman', stage: 0,
      ask: `The old man, apron dusted white: "Today... I {bake}. One last batch. Well — first-last. We shall see." His hands are already movin' like it's 1964.` },
    { word: 'flour', type: 'buy', item: 'the good flour, all of it', stage: 1,
      ask: `Emergency! He needs more {flour} — the GOOD kind. The shopkeeper carries it out like treasure. "For HIM? No charge." The old man pays anyway. Twice.` },
    { word: 'memory', type: 'talk', npc: 'grandma', stage: 2,
      ask: `Grandma closes her eyes over the first warm tray. "That's not bread, dear. That's a {memory} with a crust." The kitchen goes quiet.` },
    { word: 'smell', type: 'do', loc: 'park', verb: 'walk', amount: 400, stage: 3,
      ask: `The {smell} rolls across the entire park. Follow it. Everyone's followin' it. The pigeons have achieved total enlightenment.` },
    { word: 'line up', type: 'talk', npc: 'friend', stage: 4,
      ask: `The line! Your friend saved ya a spot. People {line up} past the pond and around the bench. The koi watch the queue like it's television. It is.` },
    { word: 'soft', type: 'talk', npc: 'sister', stage: 5,
      ask: `First bite. Your sister goes silent for eleven entire seconds — a world record. "...It's SO {soft}," she whispers. "I'm ANGRY about how soft it is."` },
    { word: 'special', type: 'talk', npc: 'tmother', stage: 6,
      ask: `Trinity's mom, precise: "I've dined at fine tables on three coasts. THIS is {special}." The old man bows. His ears turn pink. The koi splash.` },
    { word: 'tears', type: 'talk', npc: 'dad', stage: 7,
      ask: `Dad and Trinity's dad share the last loaf, both in {tears}. "It's the crust," they insist, in perfect unison. It's not the crust.` }
  ],
  stageToasts: {
    1: `🥖 He needs supplies and his hands are covered in dough. You're the flour runner. GO.`,
    2: `🍞 The first tray's OUT. Grandma got the first piece. Naturally. Watch her face.`,
    3: `👃 The whole park smells like 1964. Follow your nose with the rest of the town.`,
    4: `🚶 A queue! In THIS town! Find your friend before he "accidentally" eats your share.`,
    5: `🤫 Your sister's gone quiet. YOUR SISTER. HAS GONE QUIET. Document this.`,
    6: `🎩 The toughest critic in three prefectures approaches the stall. Hold your breath.`,
    7: `🥲 One loaf left. Two dads. Zero chance of dry eyes. Go witness it.`
  },
  npcLines: {
    trinity: [
      `He baked the mornin' after his own engagement in 1964, ya told me. And now, the season we plan ours — he bakes again. This town writes itself.`,
      `@5 Your sister said eleven whole words of silence. The bread should be studied. Or protected. Federally.`
    ],
    mom: [
      `I tried the crust technique through the window with binoculars. He saw me. He held the loaf up at an ANGLE so I could see better. A saint.`,
      `@7 Both fathers cryin' over bread ends. I've taken four photos and one video. Weddin' slideshow: secured.`
    ],
    dad: [
      `I was seventh in line. SEVENTH. I've never been prouder of a queuein' achievement, and I once queued overnight for a rice cooker.`,
      `@7 It's the crust. It's DEFINITELY the crust. The crust just happens to taste like bein' eight years old. THAT PART'S THE CRUST TOO.`
    ],
    sister: [
      `I'm buyin' two: one to eat and one to keep as evidence that this day happened. ...Okay, two to eat. History can be retold. Bread cannot.`,
      `@5 Eleven seconds. The bread beat my personal record of never bein' quiet. Respect. RESPECT. I'm still angry about how soft it was.`
    ],
    friend: [
      `@4 I've held this spot forty minutes with strategic snackin' and pure willpower. Ya owe me the corner piece, bud. The CORNER piece.`,
      `The watch party for the cat commercial'll now serve THIS bread. The two greatest events in town history: merged. I peaked as a planner today.`
    ],
    shopkeeper: [
      `@1 Forty years I stocked the good flour and quietly hoped. Some mornings ya find out why ya kept hopin'. No charge. NO CHARGE, old friend.`,
      `My own bread sales today: zero. Happiest sales day of my life. Some victories cost ya money. Worth it.`
    ],
    trainer: [
      `CARBS. Normally we negotiate. Today? Today carbs WIN. Sensei bread transcends the meal plan. I bought three. THREE.`,
      `@3 I followed the smell mid-workout. Mid-SET, actually. I regret nothin'. My muscles'll understand. They were there.`
    ],
    boss: [
      `I closed the office early for "supply chain research". The research is bread. The supply chain's the line. The findings are delicious.`,
      `@6 Even Trinity's mother approved. That woman rated the INN. Out loud. With decimal points. And the bread got a bow. A BOW.`
    ],
    coworker: [
      `Gerald came to smell the park air. Plants can't eat bread, but he leaned toward the stall for one full hour. Emotional photosynthesis.`,
      `@4 Queue analytics: forty-one humans, six pigeons, one cat who doesn't queue but was served anyway. The data respects him. So do I.`
    ],
    oldman: [
      `@0 Forty years I said "the oven and me are strangers now". The storm reminded me: the pond waited fifty years and stayed itself. So could I.`,
      `@7 In 1964 I baked for a trophy. Today I baked for a town. The bread rose better today. Bread knows. It always knows.`
    ],
    cat: [
      `@4 Fish-Thief didn't queue. Fish-Thief was carried past the queue by public demand and served first. The town's got a king and he's furry.`
    ],
    grandma: [
      `@2 I had this bread in 1964, dear. A stall by the race route, a boy with flour on his ears. ...Yes, THAT boy. No, I'm not cryin'. It's the flour.`,
      `@2 Some things wait forty years and come back exactly right. Remember that, you two. Weddings, bread, and people. Same recipe: patience.`
    ],
    tmother: [
      `@6 I gave it a bow instead of a score. Scores are for things that can be improved. ...Write that down before I deny sayin' it.`,
      `I've asked the old gentleman to bake for the weddin'. He said "the hill deserves fresh bread". I nearly lost my composure. NEARLY.`
    ],
    tfather: [
      `@7 We split the last loaf end to end, your father and me. Brothers share the crust. That's in the rules now. I wrote it on a napkin.`,
      `@3 I smelled it from the BRIDGE. I jogged. I haven't jogged since 2011. For this bread I'd jog again. Tomorrow, even.`
    ],
    kenji: [
      `Medical opinion: bread this good, once every forty years, isn't a dietary risk. It's a public health TRIUMPH. I prescribed seconds. To myself.`,
      `@6 I examined the old baker's hands last month — steady as stone. Today I learned what they were steady FOR. Some prescriptions write themselves.`
    ]
  }
},

/* ============================== EP 30 ============================== */
{
  ep: 30,
  title: '第30話 「婚約パーティー」 — The Engagement Party',
  night: true,
  words: ['celebrate', 'cheers', 'words', 'love', 'dream', 'future', 'begin', 'two of us'],
  story:
    `The hill, at dusk. Paper lanterns swing between the trees where the whole town once hid — badly — behind the trunks. ` +
    `Tonight nobody's hidin'. Tonight there's fresh bread from a 1964 champion, a famous cat in a ceremonial bandana, two ` +
    `mothers with one UNIFIED binder, and every person ya love standin' in the golden light. Tonight, the town gathers to ` +
    `{celebrate} the {two of us}.`,
  timerSec: 330,
  quests: [
    { word: 'celebrate', type: 'talk', npc: 'friend', stage: 0,
      ask: `Party captain, reportin': "Tonight we {celebrate}! Lanterns: UP. Playlist: legendary. Snacks: guarded from the cat. Mostly. Partially. He's fast."` },
    { word: 'cheers', type: 'buy', item: 'the fancy sparkling cider', stage: 1,
      ask: `The toast needs bubbles! {cheers}-grade cider, the fancy bottles with the gold foil. The shopkeeper adds one extra: "From me. For the hill."` },
    { word: 'words', type: 'talk', npc: 'boss', stage: 2,
      ask: `Your boss clears his throat: "I'm not good at {words}..." — then delivers the most beautiful toast in town history. Your coworker takes notes for Gerald.` },
    { word: 'love', type: 'talk', npc: 'grandma', stage: 3,
      ask: `Grandma takes both your hands under the lanterns. "Listen. {love} isn't fireworks, dear. It's someone who saves ya the last dumpling. Every time."` },
    { word: 'dream', type: 'talk', npc: 'tfather', stage: 4,
      ask: `Trinity's dad, misty-eyed: "I had a {dream} she'd find someone kind. The firm handshake was a bonus." He crushes your hand. Warmly. Forever.` },
    { word: 'future', type: 'talk', npc: 'kenji', stage: 5,
      ask: `Dr. Kenji raises his glass: "To the {future}. Medically speakin', it looks excellent. Emotionally speakin' — off all of my charts."` },
    { word: 'begin', type: 'talk', npc: 'cat', stage: 6,
      ask: `Where did it all {begin}? Fish-Thief, in his ceremonial bandana, leads ya to the exact spot on the hill. He remembers. He was carryin' the ring.` },
    { word: 'two of us', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Trinity, under the lanterns, the whole town glowin' below: "Whatever comes next — it's the {two of us}. Deal?" Deal. Forever deal.` }
  ],
  stageToasts: {
    1: `🏮 The lanterns are lit. The hill's glowin'. One errand first: the toast needs its bubbles!`,
    2: `🥂 Bottles delivered. Someone's tappin' a glass — the speeches are beginnin'!`,
    3: `👵 Grandma's waitin' by the lantern line. She's got somethin' to say. Grandmas always save the best words.`,
    4: `🤝 A very large, very misty man's lookin' for ya. Bring your strongest hand.`,
    5: `🩺 The doctor's raised his glass. The town quiets. Even the pigeons.`,
    6: `🐾 A small ceremonial figure's tuggin' your trouser leg. Follow him. He knows the way.`,
    7: `💜 The music softens. The lanterns sway. She's waitin' at the top of the hill.`
  },
  npcLines: {
    trinity: [
      `A year ago I didn't know this town existed. Now look — every single person on this hill hid behind a tree for us. BADLY. I love 'em all.`,
      `@7 Autumn weddin', on this hill, bread by a champion, ring by a cat. Nobody'll believe our story, bud. Good. It's ours.`
    ],
    mom: [
      `Both binders've merged into one MEGA binder. Her mother and me are co-commanders now. The weddin' doesn't stand a chance.`,
      `@2 That toast! I cried onto the bread. The bread survived. It's champion bread. Tonight, everything's champion everything.`
    ],
    dad: [
      `My speech is four words: "Be like your mother." That's the whole speech. Twenty-six years of research went into it.`,
      `@7 Look at 'em up there. ...Okay. OKAY. Trinity's dad and me are cryin' in SHIFTS now. It's a system. It's workin'.`
    ],
    sister: [
      `The confetti cannon was APPROVED. Aunt-to-be privileges. That's right — I counted, and bein' a sister-in-law makes me basically an aunt. Don't check my math.`,
      `@6 The cat gets a lantern with his FACE on it and I get "please stop firin' the cannon"? ...Fair, actually. His face is very good.`
    ],
    friend: [
      `Two fireworks concepts were submitted. BOTH were approved. Tonight, the sky gets what the sky deserves. I've peaked, bud. Tell my story.`,
      `@7 Look, I planned the lanterns, the playlist, the fireworks — but the two of ya up there? Best thing on this hill. By a mile. Now GO DANCE.`
    ],
    shopkeeper: [
      `@1 The extra bottle's for the two of ya to open on the weddin' mornin'. Shopkeeper tradition. I invented it today. It's already sacred.`,
      `I closed the store early and left a sign: "Gone to the hill. Everything worth sellin' is up there anyway."`
    ],
    trainer: [
      `I lifted the ENTIRE drinks table up the hill alone. One trip. Your father nodded at me. THE one-trip rule. I understand it now. I UNDERSTAND.`,
      `@7 Love's the only marathon where finishin' together's the whole point. ...Sensei taught me that. I put it on a poster. OBVIOUSLY.`
    ],
    boss: [
      `@2 Thirty years of quarterly reports and the best thing I ever presented was two minutes about you two. Career highlight. Don't tell the shareholders.`,
      `Monday's cancelled for the whole office. Some things a manager just KNOWS. Gerald co-signed the decision. It's bindin'.`
    ],
    coworker: [
      `Gerald's wearin' a tiny bow. He's the plant of honor. He's waited his whole leaf life for this. Don't touch the bow.`,
      `@2 I transcribed the boss's toast word for word. It goes in the wedding archive. Tab one. There's already eleven tabs. I regret nothin'.`
    ],
    oldman: [
      `Fresh bread for a hill full of happy people. In 1964 I couldn't have dreamed the second batch would matter more than the first. It does.`,
      `@6 The cat showed ya the spot, did he? Good. Someone should always remember exactly where a happiness started. Tonight, we all do.`
    ],
    cat: [
      `@6 Fish-Thief sits at the exact spot where the ring changed hands, acceptin' tributes. Tonight he allows ALL chin scratches. A once-in-nine-lifetimes offer.`
    ],
    grandma: [
      `@3 I've seen 1971 from the front of a race and tonight from the top of a hill. The view tonight's better. Don't tell my medal.`,
      `@7 Save each other the last dumpling. That's the whole secret, dears. Fifty years of marriage in one sentence. You're welcome.`
    ],
    tmother: [
      `The unified binder's COMPLETE. Nineteen tabs, seventeen tabs — thirty-six tabs of pure love. The weddin' will be flawless. I've decided, so it's settled.`,
      `@7 Look at my daughter's face. ...I approve, ya know. I approved at the apples. The rest was theater. I do excellent theater.`
    ],
    tfather: [
      `@4 A whole town on a hill for my little girl. I'm not cryin' in shifts. I'm cryin' CONTINUOUSLY. The chart needed a new page.`,
      `@7 Firm handshake, kind eyes, and my daughter laughin' all the time. My {dream} came true and it lives ten minutes from a good pond. PERFECT.`
    ],
    kenji: [
      `@5 Tonight I prescribe: one toast, two dances minimum, and no checkin' the time. Doctor's orders. I'll be enforcin' the dances personally.`,
      `The lemon tea's on the table by the lanterns. Yes, THE lemon tea. It only appears on important nights. Tonight qualifies twice.`
    ]
  }
}
]