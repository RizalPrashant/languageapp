import type { Episode } from './episodes'

/* =====================================================================
   SEASON 5 (episodes 41-50) — "The Hard Season"
   Arc: real life arrives. Trinity gets sick (eps 42-47: ward location,
   Trinity relocates via WorldNpc.moves), the main guy struggles — work,
   money, fear, exhaustion — and the town does what this town does:
   stays completely, lovingly ridiculous around him. The comedy is the
   support system. Trough at ep46 (surgery), climb from 47, finale ep50
   is small and warm on purpose.
   TONE RULES: Trinity keeps her humor even sick. Nobody else gets sad
   on camera except in single gated lines. The player's struggle lives
   in the quest/story text, never in self-pity.
   ===================================================================== */

export const SEASON5: Episode[] = [

/* ============================== EP 41 ============================== */
{
  ep: 41,
  title: '第41話 「新しい毎日」 — The New Normal',
  words: ['daily life', 'every day', 'laundry', 'holiday', 'working', 'side', 'song', 'tired'],
  story:
    `Married life, week one. The thank-you notes are a mountain, the closet negotiations have hit round three, and ya've ` +
    `learned that Trinity sings while she cooks — badly, wonderfully, at full volume. This is {daily life} now, bud: ` +
    `ordinary, noisy, yours. Ya wouldn't trade one minute of it. (Round three of the closet talks notwithstandin'.)`,
  timerSec: 300,
  quests: [
    { word: 'daily life', type: 'talk', npc: 'trinity', stage: 0,
      ask: `"So THIS is {daily life}," Trinity grins over breakfast, gesturin' at the thank-you-note mountain. "Married paperwork. Nobody warns ya. I LOVE it."` },
    { word: 'every day', type: 'talk', npc: 'mom', stage: 1,
      ask: `Mom, misty, deliverin' leftovers: "You'll eat proper {every day}, yes? Married doesn't mean fed. Your father survived on toast 'til I intervened."` },
    { word: 'laundry', type: 'inspect', obj: 'table', stage: 2,
      ask: `The {laundry} summit, at the kitchen table: her system (colors, by feelin') versus your system (none). A treaty's drafted. The socks remain lawless.` },
    { word: 'working', type: 'talk', npc: 'boss', stage: 3,
      ask: `Back to {working} life. Your boss looks up: "The married glow lasts about a month. The good coffee's in my drawer when it fades. Welcome back."` },
    { word: 'song', type: 'talk', npc: 'sister', stage: 4,
      ask: `Your sister, wide-eyed, visitin': "There's a {song} comin' from your kitchen. It's never once been in tune. It's my new favorite thing on this earth."` },
    { word: 'holiday', type: 'talk', npc: 'friend', stage: 5,
      ask: `First shared {holiday} plans! Your friend's got a list of day-trip ideas. All of 'em involve fireworks somehow. Even the aquarium. ESPECIALLY the aquarium.` },
    { word: 'side', type: 'inspect', obj: 'bed', stage: 6,
      ask: `Her {side} of the bed's claimed sixty percent of the territory and one hundred percent of the good pillow. The cat holds the demilitarized zone. Ya sleep happy anyway.` },
    { word: 'tired', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Evenin'. Trinity yawns mid-sentence — third time today. "Just {tired}," she smiles. "Big month, right?" Right. Big month. Ya tuck the thought away. It doesn't stay tucked.` }
  ],
  stageToasts: {
    1: `📝 Forty-one thank-you notes to go. Mom's at the door with reinforcement soup.`,
    2: `🧺 The laundry situation requires diplomacy. The table's been booked for talks.`,
    3: `💼 Real life resumes: the office awaits its newly-wed employee.`,
    4: `🎶 Do ya hear that? The kitchen's singin'. Your sister certainly hears it.`,
    5: `🗓️ A day off, together, soon — the best man's got OPINIONS on how to spend it.`,
    6: `🛏️ Territory report from the bedroom: negotiations haven't gone your way.`,
    7: `🌙 She's yawnin' again. Probably nothin'. Probably just a big month.`
  },
  npcLines: {
    trinity: [
      `I alphabetized your bookshelf while ya were out. It needed me. YOU need me. Everything here needed me, it's deeply satisfyin'.`,
      `@7 Stop lookin' at me like that, I'm FINE. Married people yawn. It's in the vows. The fine print. I checked.`
    ],
    mom: [
      `I walked past your house twice yesterday just to hear the kitchen noise. A full house sounds different. It sounds RIGHT.`,
      `The leftover deliveries'll continue until further notice. This isn't negotiable. This is grandmotherin' practice.`
    ],
    dad: [
      `Marriage tip number one: lose the closet war early. Lose it gracefully. I got two shelves and my dignity, and honestly? Fair.`,
      `The toast years were REAL, son. Whatever she cooks, ya say thank you and mean it. That's eighty percent of the whole institution.`
    ],
    sister: [
      `I visit daily now 'cause your house has better snacks AND live music. The singin' at seven, the cat at eight. Excellent programmin'.`,
      `I told my class my sister-in-law sings like a happy fire alarm and my teacher said "how lovely" with her whole face confused. Accurate, though.`
    ],
    friend: [
      `Married one week and ya already got inside jokes I'm not in. As best man I legally get thirty percent of all jokes. Check the contract.`,
      `@5 The aquarium DOES do a fireworks night. I checked. Everything can be a fireworks thing if ya believe. That's my whole philosophy.`
    ],
    shopkeeper: [
      `Two toothbrush holders, one rice paddle, matching cups. Newlywed shopping lists are my favorite poetry.`,
      `Your wife negotiated my price on the laundry basket like her grandmother-in-law taught her. I never stood a chance. The dynasty continues.`
    ],
    trainer: [
      `MARRIED CARDIO! It's called carryin' groceries together and it counts! Everything together counts DOUBLE! That's just science I made up but FEEL it!`,
      `The couples class has a waitlist since your weddin'. This town saw one good dip and now everyone wants the dip. I TEACH THE DIP NOW.`
    ],
    boss: [
      `Your reports are on time and your head's somewhere on a hill. Correct priorities. The reports can be early NEXT quarter.`,
      `@3 The drawer coffee offer stands. Marriage advice also in the drawer. Both are stronger than they look.`
    ],
    coworker: [
      `Gerald missed ya. He leaned toward your desk for a week. I rotated him for fairness but his heart knows true north. Your stapler, specifically.`,
      `Married-life data request: does the laundry treaty have a socks clause? Askin' for the archive. And for my own failed system.`
    ],
    oldman: [
      `A new household in the town, young one. The pigeons've already mapped your kitchen window. The singin' one, they call it. High praise.`,
      `Married mornings feel long and the years feel short. Waste neither. That's all the wisdom there is. The rest is bread.`
    ],
    cat: [
      `Fish-Thief has completed his inspection of the married household and claimed the exact center of everything. The DMZ pillow, the sunny chair, both laps. Kingdom secured.`
    ],
    grandma: [
      `I taught her three of my market moves before the weddin'. The shopkeeper reports she used 'em ALL. My legacy's in excellent hands, dear.`,
      `@7 ...She yawned four times at dinner Sunday. Probably the big month. Probably. Your grandmother notices things, that's all. Eat your soup.`
    ],
    tmother: [
      `The thank-you note to OUR side scored a nine point eight. Highest marks ever awarded. My son-in-law's penmanship has entered the binder.`,
      `I call twice a week and she sounds happy for two people. That's the correct amount. Carry on, dear.`
    ],
    tfather: [
      `A married man now! How's the closet war? ...Two shelves? THAT IS WHAT I GOT. It's tradition, son. We're shelf brothers.`,
      `I drove past — a four-hour drive, don't tell my wife — just to see the lights on in your windows. Worth it. EVERY kilometer.`
    ],
    kenji: [
      `Newlywed checkup reminder: happiness is not a substitute for vegetables. Close, accordin' to my grandmother. But not complete.`,
      `The clinic's quiet lately. Good. Quiet clinics mean loud kitchens. That's town health, properly measured.`
    ]
  }
},

/* ============================== EP 42 ============================== */
{
  ep: 42,
  title: '第42話 「様子がおかしい」 — Something\'s Off',
  words: ['condition', 'laughter', 'close by', 'test', 'collapse', 'result', 'weak', 'anxiety'],
  story:
    `It happens on an ordinary Tuesday, at the 1964 Stand, between one joke and the next. Trinity reaches for a tray, and ` +
    `then the tray's on the ground and so is she, and the whole park goes very quiet very fast. She's awake again in ` +
    `seconds — laughin', embarrassed, "I skipped breakfast, everyone RELAX" — but Kenji's already there, and his calm's ` +
    `got a new edge to it. Some days split your life into before and after. This is one. Ya just don't know it yet.`,
  timerSec: 300,
  quests: [
    { word: 'collapse', type: 'inspect', obj: 'stand_1964', stage: 0,
      ask: `The dropped tray, the scattered rolls, the {collapse} replayin' behind your eyes. Grandma already swept it up. "Look at me, dear. Breathe. Now go to her."` },
    { word: 'laughter', type: 'talk', npc: 'trinity', stage: 1,
      ask: `She greets ya with {laughter}, 'course: "I fainted at a BAKERY. Of all my performances, the least dignified." Her hand's cold in yours. She squeezes first.` },
    { word: 'condition', type: 'talk', npc: 'kenji', stage: 2,
      ask: `Kenji, quiet: "Her {condition} needs a proper look. Today. Not next week." He's already dialin' the city hospital. Ya've never seen him dial fast before.` },
    { word: 'test', type: 'talk', npc: 'trinity', stage: 3,
      ask: `One {test} becomes four. Trinity narrates each machine like a game-show host to keep ya breathin': "And BEHIND door two: MORE beepin'!"` },
    { word: 'close by', type: 'talk', npc: 'mom', stage: 4,
      ask: `Mom arrives with soup for the whole waitin' room. "We stay {close by}," she says simply, and sits, and takes your hand. The town starts arrivin' in shifts.` },
    { word: 'weak', type: 'talk', npc: 'grandma', stage: 5,
      ask: `"Her grip was {weak} this mornin'," grandma tells Kenji, precise as a field report. "Three days now. I noticed Sunday." She never misses. Ya wish, just once, she had.` },
    { word: 'result', type: 'talk', npc: 'kenji', stage: 6,
      ask: `The {result}: a small shadow, near the heart. Fixable — Kenji says that word first and firmest — but it means surgery, and it means soon. The floor tilts. His voice doesn't.` },
    { word: 'anxiety', type: 'talk', npc: 'dad', stage: 7,
      ask: `Outside, the {anxiety} finally catches ya. Dad appears — 'course — and says nothin' at all. Just stands there, shoulder to shoulder, 'til ya can breathe again. Dads know things.` }
  ],
  stageToasts: {
    1: `🥐 She's awake and crackin' jokes. Go — she's askin' for ya. She's ALWAYS askin' for ya.`,
    2: `🩺 Kenji wants a word. His calm voice has a careful edge today.`,
    3: `📋 Tests, plural. She's decided to make 'em funny. Let her. Help her.`,
    4: `🍲 Ya've been in this hallway for two hours. Someone's noticed. Someones.`,
    5: `👵 Grandma's got field intelligence for the doctor. Listen. It matters.`,
    6: `🚪 Kenji's at the door with the results. Deep breath. The real kind.`,
    7: `🌙 Ya made it through the tellin'. Ya haven't made it through the feelin'. Someone's waitin' outside.`
  },
  npcLines: {
    trinity: [
      `@1 If I had to faint somewhere, at least it smelled like fresh bread. Five-star faintin' venue. Would recommend. Will NOT be returnin'.`,
      `@6 Hey. Look at me. Kenji said FIXABLE. I plan to be insufferable about how well I fix. Ya should start preparin' now, honestly.`
    ],
    mom: [
      `@4 The soup rotation's organized: me, her mother, then grandma. This family fights fear with broth. It's never once lost.`,
      `@6 Fixable, the doctor said. In this family, when somethin's fixable, it gets FIXED. Overly. With casseroles. Brace yourself, my love.`
    ],
    dad: [
      `@7 I'm not good with words at times like this. So I brought presence. And gum. Presence and gum, son. It got me through 1998.`,
      `Your mother's already reorganized their kitchen for recovery logistics. The woman plans hope like a military campaign. Always has.`
    ],
    sister: [
      `I looked up the shadow thing at school and then closed the laptop 'cause Kenji said fixable and KENJI DOES NOT LIE. That's my whole medical opinion. It's correct.`,
      `@3 She made the beepin' machine into a game show?! Even sick she's the funniest person in this family. I'm takin' NOTES. For when she's back. She IS comin' back.`
    ],
    friend: [
      `I don't have a joke today. I got a car, a phone that's always on, and both fireworks concepts on standby for when she's through this. That's the whole list. Use all of it.`,
      `@6 Fixable. FIXABLE. I've decided that word's my favorite word and I'm puttin' it on a shirt. Two shirts. Ya get one.`
    ],
    shopkeeper: [
      `The store's runnin' a tab for your household. It's got no upper limit and no due date. Don't argue with me in my own store. I'll win.`,
      `@4 Waitin'-room supply run, on the house: tea, crackers, the soft tissues. The GOOD ones. I know what hallways are like. I stocked accordingly.`
    ],
    trainer: [
      `When my mother was sick I ran every mornin' 'til I could breathe again. Worry laps, I call 'em. My track's your track, ANY hour. I'll run beside ya and say NOTHIN'. I can do quiet. I CAN.`,
      `@6 Fixable means trainin' plan. Recovery is reps. She starts with one, then two. I've coached comebacks before. This town SPECIALIZES in 'em.`
    ],
    boss: [
      `Whatever the calendar says this week, it's wrong. Family first. The office'll still be standin'. It survived the printer incident; it can survive your absence.`,
      `@6 My door, my drawer coffee, and my complete lack of questions are available around the clock. Managers manage. Friends show up. I'm attemptin' both.`
    ],
    coworker: [
      `Gerald's been moved to the clinic waitin' room. Studies show plants help. Gerald ORDERED the transfer, technically. He leaned at the door 'til I got the message.`,
      `@4 I've started a meal-and-visit spreadsheet for the town. Tab one: who, when, what soup. It fills itself faster than I can format it. This town, my friend.`
    ],
    oldman: [
      `The koi went still today when the ambulance passed. The whole pond held its breath. Then it breathed again. Take the pond's advice, young one. Keep breathin'.`,
      `@6 Sixty years teaches ya which words to trust. "Fixable", from a careful man who never overpromises — that word ya can build a week on. Build on it.`
    ],
    cat: [
      `Fish-Thief walked the whole way to the clinic behind the family, tail low, and stationed himself under her window. Security detail. Permanent post. No further comment.`
    ],
    grandma: [
      `@5 I noticed Sunday and said nothin' and I'll carry that, dear. So now we do it MY way: eyes open, soup hot, hope LOUD. Nobody in this family fights quiet. Not on my watch.`,
      `@6 A shadow's a small dark thing, dear. This family has outlasted larger. Ask the war, ask 1964, ask anyone. Shadows lose here.`
    ],
    tmother: [
      `I'm on the first train tomorrow with three binders: recovery meals, hospital logistics, and one that's simply labeled MORALE. We don't do helpless in this family. We do TABS.`,
      `@6 My daughter said "fixable" on the phone and then made a joke about the hospital socks. That girl came outta me laughin' at storms. The storm should worry.`
    ],
    tfather: [
      `I'm already in the car. My wife says to tell ya the drive's four hours and I'll make it in four hours, LEGALLY, mostly. Hold the fort, son. The cavalry's family.`,
      `@7 When ya can't breathe, borrow mine. That's what fathers-in-law are FOR. I got big lungs and both towels and I'm NOT cryin' this time, I'm STEADY. ...Mostly steady. Steady ENOUGH.`
    ],
    kenji: [
      `@2 I'll say to ya what my teacher said to me: worry's allowed, panic's not useful, and the plan's good. The plan's GOOD. Now eat somethin'. Doctor's orders.`,
      `@6 The city specialist, Dr. Mori, is the best pair of hands I've ever assisted. I trained under her. I'd trust her with my own family. In a sense — I'm about to.`
    ]
  }
},

/* ============================== EP 43 ============================== */
{
  ep: 43,
  title: '第43話 「病室」 — The Ward',
  words: ['hospital stay', 'bed', 'door', 'vase', 'hospital visit', 'boring', 'a little', 'corridor'],
  story:
    `The hospital ward's up the road past the clinic — a small quiet room with a window that gets the afternoon sun. Today ` +
    `ya learn its geography by heart: the squeak in the {door}, the chair that'll be yours, the exact number of steps from ` +
    `the entrance (forty-one). Trinity's installed by noon and bored by 12:15, which everyone privately agrees is the best ` +
    `possible sign. The surgery's in three days. The town's already built a visitin' schedule. With shifts.`,
  timerSec: 300,
  quests: [
    { word: 'hospital stay', type: 'talk', npc: 'trinity', stage: 0,
      ask: `"A {hospital stay}," Trinity announces from the doorway, assessin' the room like a hotel critic. "Three stars. The view's nice. The socks are a crime." She's gonna be okay. She has to be.` },
    { word: 'bed', type: 'inspect', obj: 'bed_ward', stage: 1,
      ask: `The {bed} goes up, the bed goes down. Trinity's located the remote and is now operatin' it like a fairground ride. The nurse pretends not to see. Everyone pretends not to see.` },
    { word: 'door', type: 'talk', npc: 'kenji', stage: 2,
      ask: `Kenji oils the squeaky {door} himself, first thing. "Patients sleep better without announcements," he says. He does this for every patient. You're only now findin' out.` },
    { word: 'vase', type: 'inspect', obj: 'vase_ward', stage: 3,
      ask: `The {vase} situation's outta control by 2 PM: sunflowers from the office, roses from the store, one suspiciously familiar flower that's DEFINITELY from the hill. The room smells like the whole town.` },
    { word: 'hospital visit', type: 'talk', npc: 'sister', stage: 4,
      ask: `First official {hospital visit}: your sister, with a homemade card, a comic she drew, and the fierce expression of someone who's decided to be brave for two. The card says "GET UP SOON, LAZY". Trinity weeps laughin'.` },
    { word: 'boring', type: 'talk', npc: 'trinity', stage: 5,
      ask: `"I'm SO {boring}— BORED," Trinity corrects, by hour three. "Bored. I'm never borin'." The best sign yet, says Kenji. Bored patients heal outta spite.` },
    { word: 'a little', type: 'talk', npc: 'mom', stage: 6,
      ask: `"Eat {a little} more," mom coaxes, unpackin' course four of six. The nurse looks at the spread. Mom offers her a plate too. The nurse pulls up a chair. Resistance was always futile.` },
    { word: 'corridor', type: 'talk', npc: 'cat', stage: 7,
      ask: `Lights-out. In the {corridor}, exactly where the rules say no cats can be, sits a cat. Kenji steps over him without lookin' down. "I see nothin'," says the doctor. "Goodnight, nothin'." The cat stays.` }
  ],
  stageToasts: {
    1: `🛏️ She's found the bed remote. May the ward have mercy.`,
    2: `🚪 The doctor's here early — with an oil can? Watch this.`,
    3: `💐 Flower delivery number six has arrived. The vases require management.`,
    4: `🎨 A small brave visitor's at the door with homemade materials.`,
    5: `⏰ Hour three. The patient's goin' stir-crazy. Officially a good sign.`,
    6: `🍱 Course four of six is bein' served. The nurse never stood a chance.`,
    7: `🌙 Visitin' hours are over. But someone furry's got other plans.`
  },
  npcLines: {
    trinity: [
      `@5 I've read the ceiling. Both tiles. I've ranked the beeps by melody. Day ONE. Tell the town I need better material or I start reorganizin' the supply closet.`,
      `Forty-one steps from the entrance. Ya counted, didn't ya. I know ya counted. Come here, counter. Sit in your chair. It IS your chair now, ya know.`
    ],
    mom: [
      `The visitin' schedule's got shifts, understudies, and a soup calendar. Her mother and me built it in forty minutes. NASA should call us.`,
      `@6 The nurse had seconds AND took the recipe. The ward's ours now. Peacefully annexed. By broth.`
    ],
    dad: [
      `I fixed the wobbly visitor chair. Nobody asked. That's the POINT of dads in hospitals, son. We find the wobble. We end the wobble.`,
      `Room 4 gets the afternoon sun and the sound of the gym bell at five. Good room. I checked it like a house. It passed.`
    ],
    sister: [
      `@4 I'm drawin' her one comic per day 'til she's out. Today's hero: NURSE CAT, defender of the ward. Tomorrow he gets a cape. It writes itself.`,
      `Bein' brave for two is easy actually. Ya just do double. I learned that from mom, who's currently bein' brave for like nine people. Family math.`
    ],
    friend: [
      `Visitin' shift secured: Thursdays and any day startin' with S. I bring the bad magazines and the GOOD gossip. It's medicine, emotional category.`,
      `I tested the hallway vendin' machine so ya don't have to. B4's a trap. C2's elite. This is love, expressed through buttons.`
    ],
    shopkeeper: [
      `The store now stocks her favorite pudding in bulk. It's labeled MEDICAL SUPPLIES. My store, my labels, no further questions.`,
      `@3 The roses are from my hothouse shelf. Don't tell her they're the expensive ones. Tell her they were on sale. Sick people worry about prices. She would.`
    ],
    trainer: [
      `Worry laps update: your husband ran with me at six a.m. and said four words the whole time. Perfect form though. Grief runs clean, oddly. We go again tomorrow, friend.`,
      `@5 Bored already?! EXCELLENT. Boredom's the body sayin' it's got spare energy. Spare energy is PRE-STRENGTH. She's basically trainin'. Tell her I said so.`
    ],
    boss: [
      `Your desk is covered. Your projects are covered. Your salary is EXTREMELY covered. The only thing not covered's that chair beside her. Go cover it.`,
      `I visited Tuesday with a fruit basket and she critiqued my tie for ten minutes. I wore a worse one Thursday on purpose. Morale, soldier. We all serve somehow.`
    ],
    coworker: [
      `Gerald's been stationed in the ward window, per his own transfer request. Studies show plants speed recovery eleven percent. Gerald intends to beat the average. He's never failed a metric.`,
      `The visit spreadsheet's at capacity through next week. I've started a waitlist. There's a WAITLIST to sit in a hallway for this family. I'm archivin' everything. Future generations should know.`
    ],
    oldman: [
      `@3 The flower from the hill — the koi suggested it. By which I mean I sat by the pond 'til I knew which one to bring. Same thing. It's from all of us. The water too.`,
      `Hospitals are just harbors, young one. Ships rest there. Then they sail. I've watched it my whole long life. That one sails. Anyone can see it.`
    ],
    cat: [
      `@7 Fish-Thief has established a nightly post in the corridor, third tile from her door, facin' out. Guardin'. The night nurse leaves a saucer now. The system works. Nobody discusses it.`
    ],
    grandma: [
      `I inspected the kitchen, corrected two soup errors, and taught the night nurse gin rummy. The ward runs properly now. You're welcome, dear.`,
      `@5 Bored means the spirit's pacin', dear. Pacin' spirits heal fast — they've got somewhere to BE. I've seen it before. 1962. Long story. Good endin'.`
    ],
    tmother: [
      `The MORALE binder's deployed: photo wall Tuesday, playlist Wednesday, the good blanket from home TODAY. Wars are won with logistics, dear. So are recoveries.`,
      `@4 The child's card made my daughter laugh so hard the monitor beeped. Best medical result of the day. I'm commissionin' more cards. The artist's been retained. Payment: pudding.`
    ],
    tfather: [
      `I drove up with the good blanket and her childhood pillow and I'm NOT explainin' the third box, it's the stuffed rabbit, fine, I explained it. She sleeps better with the rabbit. WE ALL KNOW IT.`,
      `Four-hour drive, both ways, twice a week. My wife asks if it's too much. Son — I'd drive it DAILY. I got snacks and a playlist and a daughter to visit. That's a full life.`
    ],
    kenji: [
      `@2 The door oil, the warm stethoscope, the six-word explanations. Small things. My teacher said hospitals are frightenin' in inverse proportion to how many small things the staff still bothers doin'. We bother. Always.`,
      `Dr. Mori arrives Thursday to meet her before the surgery. She read the chart twice and said "straightforward". Mori-sensei uses that word the way other people use "promise".`
    ]
  }
},

/* ============================== EP 44 ============================== */
{
  ep: 44,
  title: '第44話 「仕事は続く」 — Work Doesn\'t Stop',
  words: ['be late', 'meeting', 'documents', 'hurry', 'apologize', 'rely on', 'support', 'time'],
  story:
    `The world, rudely, keeps turnin'. Rent exists. Deadlines exist. So now your {daily life} is a triangle: office, ward, ` +
    `home to sleep — {hurry} at every corner of it. Today ya {be late} to the mornin' {meeting}, wrong about the ` +
    `{documents}, and short with the one person who least deserves it. Real life doesn't schedule around hard weeks. ` +
    `But it turns out a whole town has quietly scheduled itself around yours.`,
  timerSec: 315,
  quests: [
    { word: 'be late', type: 'talk', npc: 'boss', stage: 0,
      ask: `Ya {be late} — twenty minutes, hair wild, apology half outta your mouth. The boss slides a coffee across the desk: "You're exactly on time for the meeting I moved. Sit."` },
    { word: 'meeting', type: 'talk', npc: 'coworker', stage: 1,
      ask: `In the {meeting}, your mind's forty-one steps from a hospital entrance. Your coworker covers your gap so smooth nobody notices. Gerald's pot has your notes taped behind it. ALL of 'em.` },
    { word: 'documents', type: 'inspect', obj: 'desk', stage: 2,
      ask: `The {documents} ya filed yesterday: wrong quarter, wrong client, wrong everything. Ya stare at the pile. It stares back. Deep breath. One page at a time. That's the only way piles die.` },
    { word: 'hurry', type: 'do', loc: 'street', verb: 'run', amount: 500, stage: 3,
      ask: `Lunch break: {hurry} to the ward and back — twelve minutes there, ten with her, twelve back. Ya got the route down to the second now. The pigeons've started pacin' ya. Solidarity, probably.` },
    { word: 'apologize', type: 'talk', npc: 'friend', stage: 4,
      ask: `Your friend asks how ya are — the real kind of askin' — and ya snap at him. Hard. The silence after's awful. Ya find him at the park to {apologize}. He hands ya a canned coffee: "Already forgotten. Bench?"` },
    { word: 'rely on', type: 'talk', npc: 'dad', stage: 5,
      ask: `"Ya were raised to work hard," dad says, "and somehow we forgot to teach ya to {rely on} people. My fault. Watch: son, I need help movin' the dresser Saturday. See? Nobody died. Your turn."` },
    { word: 'support', type: 'talk', npc: 'tmother', stage: 6,
      ask: `Trinity's mom appears at your door with dinner in a three-tier box. "{support} isn't a favor ya owe back, dear. It's a current. Right now it flows toward ya. One day it'll flow from ya. Eat."` },
    { word: 'time', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Evenin' visit. Trinity studies your face: "Ya look worse than I do, and I'm the one in the fashion socks." She pats the bed edge. "Sit. Give me ten minutes of your {time} where you're just mine. Not the schedule's." Ten minutes. The best ones all week.` }
  ],
  stageToasts: {
    1: `☕ Ya burst in late — and the meeting somehow moved itself. Suspicious. Kind. Suspiciously kind.`,
    2: `📄 Yesterday's filin's been located. It's... creative. Fix what ya can.`,
    3: `🏃 Twelve minutes to the ward if ya run. Lunch is for sprintin' now.`,
    4: `💥 That silence after ya snapped — it's followin' ya around. Ya know what to do.`,
    5: `🪑 Your dad's "in the neighborhood" again. Third time this week. Go hear the man out.`,
    6: `🍱 Someone elegant's at your door holdin' a three-tier dinner box and a life lesson.`,
    7: `🌙 End of the day. The ward window's still lit. Ten minutes. Go get 'em.`
  },
  npcLines: {
    trinity: [
      `@7 I heard ya snapped at him and apologized within the hour. Good. You're allowed to crack, love. You're not allowed to think ya gotta be a wall. Walls are borin'. Marry a wall next time.`,
      `The nurses've started givin' ME updates about YOU. "He ran here again at lunch." I'm in the hospital and I'm STILL the town's main source of gossip about my own husband. Impressive, honestly.`
    ],
    mom: [
      `Your fridge is full, your laundry's folded, and I'm not sayin' it was me, but the foldin' technique'll identify the culprit immediately. It was me.`,
      `You're doin' the thing your father did in 1998: survivin' on toast and stubbornness. The soup drops continue 'til morale improves. MY definition of morale.`
    ],
    dad: [
      `@5 The dresser doesn't actually need movin', son. But Saturday ya'll come, and we'll move it anyway, and you'll talk or not talk. Both work. The dresser's a decoy. Dads have decoys.`,
      `Hard weeks don't make ya less of a man. Refusin' every hand that reaches for ya — THAT would just make ya a fool. Ya weren't raised a fool. Mostly my doin'. Your mother helped.`
    ],
    sister: [
      `I made ya a comic too. It's called CAPTAIN TIRED AND THE SOUP BRIGADE. You're Captain Tired. The likeness is unflatterin' and accurate. Trinity laughed for a full minute.`,
      `Even I can see you're runnin' on empty, and I once missed dad bein' on FIRE (small fire). Sleep, dummy. That's my whole medical opinion. It's also correct.`
    ],
    friend: [
      `@4 Ya snapped. I've known ya since we were nine. I've seen ya snap TWICE, and both times the world was sittin' on ya. The coffee's paid for. The bench is warm. We're fine. We were always gonna be fine.`,
      `New standing order: Tuesday nights you're AT MY PLACE for terrible movies. Non-negotiable. Worry can't follow ya through a movie that bad. It refuses. It's got standards.`
    ],
    shopkeeper: [
      `Your usuals are bagged and behind the counter every evenin' now. Grab and go. Some weeks the errands shouldn't cost ya thinkin'. This is one. I've had mine. I remember.`,
      `A man bought flowers here every three days in 1989. My father served him without one word of small talk for two months. That man was my father's best friend by spring. We know how to be quiet WITH ya, is my point.`
    ],
    trainer: [
      `Six a.m. worry laps, day nine. He talks a little more each mornin'. Yesterday: two whole sentences. Progress is progress. The track keeps every secret told on it. Track rules.`,
      `Listen: strength that never rests is not strength, it's INVENTORY WAITIN' TO BREAK. Rest day. Saturday. After the dresser. Yes, I know about the dresser. The whole town knows about the dresser.`
    ],
    boss: [
      `@0 I've moved four meetings this month and will move forty more. The company's finest work this quarter is keepin' one employee upright. I consider it our flagship project.`,
      `When my wife was ill in 2003, my manager pretended not to notice my errors for a month. Best management I ever saw. I've waited twenty years to pay it forward. Don't rob me of it.`
    ],
    coworker: [
      `@1 Your reports have contained three errors this month. They've been repaired at 7 a.m. by an anonymous colleague and one plant. The anonymous colleague accepts payment in eventual good news.`,
      `Gerald splits his week now: office Monday-Wednesday, ward window Thursday-Friday. He invented commutin'. For love. He's a better man than most men, and he's a fern-adjacent entity.`
    ],
    oldman: [
      `@4 Ya snapped at a friend and it's eatin' ya. Good — it should, a little. Then let it finish eatin' and be done. Guilt's a meal, young one, not a residence.`,
      `The pigeons pace ya on the lunch run now. Do ya know how rare that is? They don't exert themselves for just anyone. You're town family. Town family doesn't fall. No room. Too many hands.`
    ],
    cat: [
      `Fish-Thief has doubled his patrol: her corridor by night, your doorstep by dawn. He sleeps in transit, on the warm vendin' machine. A guardian's schedule. He wouldn't have it any other way.`
    ],
    grandma: [
      `Ya look like your grandfather in the hard winter of '71, dear. He made it. So will you. He did it with soup and stubbornness and lettin' me be right. I recommend all three. Especially the third.`,
      `@5 Your father asked ya for help with a dresser that hasn't moved since 1999. That man has his moments, dear. Not many. But real ones. Go Saturday.`
    ],
    tmother: [
      `@6 The three-tier box rotates: mine, your mother's, grandma's. We compete, of course — fiercely — but the current agreement is that ya eat, so all three of us win. Especially you. That's the design.`,
      `My daughter asked me to look after ya. Direct quote, from a hospital bed: "he forgets himself when he loves people." I've never been given a clearer assignment, nor accepted one faster.`
    ],
    tfather: [
      `Every visit I bring two of everything now. Two coffees, two pastries. One's for whoever in that family looks worst that day. Son, ya've won the pastry four visits runnin'. It's not a prize. EAT.`,
      `@5 Your father and his dresser. My father used a broken fence. MY dresser'll be the garden shed, when my day comes. It's the great chain of dads, son. Decoys all the way down. It's how we say the thing we can't say.`
    ],
    kenji: [
      `I'm her doctor, so hear this as a doctor: she's stable, she's strong, and the plan holds. And hear THIS as your friend: you're the patient I'm currently most worried about. Sleep is not optional this week. It's treatment.`,
      `@7 The ten-minutes rule the two of ya invented — where you're just hers, not the schedule's? I've started prescribin' it to other families. It works better than half my pharmacy. Don't tell the pharmacy.`
    ]
  }
},

/* ============================== EP 45 ============================== */
{
  ep: 45,
  title: '第45話 「お金の計算」 — The Math',
  words: ['math', 'savings', 'bank', 'salary', 'pay', 'be enough', 'lend', 'envelope'],
  story:
    `The surgery has a number. It arrived in a crisp white envelope, politely, the way avalanches do. Tonight ya sit at ` +
    `the kitchen table long after midnight doin' the {math} again, as if the numbers might blink first. {savings}, {salary}, ` +
    `the gap. Ya tell no one. Ya should know better by now — in this town, the bread line hears the pen scratchin'. ` +
    `By Thursday, the town's organized. Not with pity. Never with pity. With INVOICES, of all things.`,
  timerSec: 315,
  quests: [
    { word: 'math', type: 'inspect', obj: 'table', stage: 0,
      ask: `Midnight. The kitchen table. The {math}, fourth pass, same answer. The cat sits on the worst column of numbers, which doesn't fix it, but does improve it.` },
    { word: 'savings', type: 'talk', npc: 'trinity', stage: 1,
      ask: `"Show me the {savings} book," Trinity says — she's got a sense for when ya carry things alone. Ya show her. She whistles. "Okay. We're a team with a math problem. Teams like us EAT math problems."` },
    { word: 'bank', type: 'talk', npc: 'boss', stage: 2,
      ask: `At the {bank}— no. Before the bank: the boss catches ya at the office door. "Payroll found unclaimed overtime from the printer-incident era. Substantial. Processin' today." The printer incident was five years ago. Ya weren't there. "Payroll's thorough," he says, darin' ya to argue.` },
    { word: 'salary', type: 'talk', npc: 'coworker', stage: 3,
      ask: `"My {salary} splits fine this month," your coworker shrugs, pushin' a folded note at ya. It's not a loan offer. It's an INVOICE: "Consulting fee owed for teaching Gerald to lean, 5 years, back-dated." Ya laugh for the first time in days. Which was the entire point.` },
    { word: 'pay', type: 'talk', npc: 'shopkeeper', stage: 4,
      ask: `Ya go to {pay} the grocery tab. The register "finds" a billin' error in your favor goin' back to 2019. "Terrible bookkeepin'," the shopkeeper says solemn, slidin' the refund across. His bookkeepin's been perfect for forty years and every soul in town knows it.` },
    { word: 'lend', type: 'talk', npc: 'tfather', stage: 5,
      ask: `"I will not {lend} ya money," Trinity's dad says firm, "because family doesn't lend. Family INVESTS." He slides a paper over: one share of "the marriage", valued at one yen, dividends: "all future Sunday dinners." His signature takes up half the page.` },
    { word: 'be enough', type: 'talk', npc: 'oldman', stage: 6,
      ask: `"Will it {be enough}?" ya finally say out loud, at the pond, to the one person who never repeats things. The old man feeds the koi. "In 1964 I asked the same about seven years of flour. It was enough. It's always nearly enough, and then somehow enough. Watch."` },
    { word: 'envelope', type: 'talk', npc: 'grandma', stage: 7,
      ask: `Grandma hands ya an {envelope}. Stand profits, all of it. "Sixty years I waited to learn what money's FOR, dear. It's for THIS." Ya break in the storeroom, quietly, among the flour sacks. She pats your back and pretends the flour dust caused it. So do you.` }
  ],
  stageToasts: {
    1: `🌙 The pen's been scratchin' for hours. Someone in fashion socks has noticed everything.`,
    2: `🏦 Ya got a bank appointment — but someone's blockin' the office door with a coffee and a "discovery".`,
    3: `📎 Your coworker's approachin' with a folded piece of paper and a suspiciously formal expression.`,
    4: `🧾 Just a normal grocery tab payment. Surely. Nothin' ever happens at this store.`,
    5: `📜 Trinity's father's drawn up "paperwork". There's a wax seal. He bought a wax seal for this.`,
    6: `🌊 The pond, at dusk. The question ya haven't said out loud yet is ready to come out.`,
    7: `🥖 Grandma wants ya in the stand's storeroom. Bring your heart. All of it.`
  },
  npcLines: {
    trinity: [
      `@1 Ya did four passes of the math alone before I caught ya. New rule, and I'm writin' it on the wall: we're POOR together, we're FINE together, we're EVERYTHING together. No solo columns.`,
      `@7 Grandma gave ya the envelope?! ...I cried on a nurse. A movin' one. She had to stop walkin'. We're all a mess and I've never loved this family more.`
    ],
    mom: [
      `I sold my good kimono— I'm JOKIN', look at your face! But I would have, and ya know it, and that's why you'll accept the casserole schedule without commentary. Sit. Eat.`,
      `@7 My mother handed over sixty years of waitin' in one envelope. When she decides a thing, mountains file for relocation permits. Ya may as well breathe and say thank you.`
    ],
    dad: [
      `The dresser fund. Yes, there's a dresser fund, from decoy dresser jobs across many years. It's yours. Don't ask how much is in it. It's embarrassin'. In BOTH directions, somehow.`,
      `@4 The shopkeeper's "billin' error"? Son, that man once chased me two streets to return three yen. THREE YEN. Take the kindness the way it was thrown: perfectly aimed.`
    ],
    sister: [
      `I emptied my allowance jar into an envelope and grandma made me take it back and said my JOB is drawin' the daily comics. Best salary negotiation of my life. I kept two coins in for luck though. Don't audit me.`,
      `@3 An invoice for teachin' Gerald to lean?! I'm invoicin' YOU for morale services, back-dated to birth. Payment due: piggyback rides, whenever I want, forever. My lawyer's the cat.`
    ],
    friend: [
      `Tuesday movie night's now ALSO free-dinner night. It always was, secretly. Now it's official. My couch, my curry, my honor as a best man. Bring nothin' but yourself, and possibly the cat.`,
      `@5 A SHARE in the marriage with a wax SEAL?! That man's a legend and I'm commissionin' one for myself. What does the marriage share trade at now? 'Cause I want IN.`
    ],
    shopkeeper: [
      `@4 In 1989, when my own white envelope came, this town "found" errors in MY favor at four different stores. I've waited thirty-six years for my books to fail someone properly. Finest error I ever made.`,
      `The tab system predates me, ya know. My father ran it. His father invented it. Nobody in this town has ever fallen. The books don't allow it. The books have OPINIONS.`
    ],
    trainer: [
      `The gym's "equipment fund" made a donation to the stand today, which — through GRANDMA ECONOMICS — flows where flows are needed. Don't follow the money. Follow the love. Same route, honestly.`,
      `Money stress is the worst cardio, friend. It raises the heart rate and goes NOWHERE. Six a.m. tomorrow. We run it outta ya. The track accepts all currencies.`
    ],
    boss: [
      `@2 The overtime's real, the paperwork's signed, and if ya attempt to investigate payroll's methods I'll transfer ya to the department of ACCEPTING THINGS GRACEFULLY. It's got one employee. It could use two.`,
      `A company's just a town with worse lightin'. This one learned its manners from THIS one. The printer incident fund exists. Kenji's technically a beneficiary too. It's a very flexible fund.`
    ],
    coworker: [
      `@3 The invoice is legally sound. Gerald leans BEAUTIFULLY, that skill took years, and expert instruction was clearly involved. My rates are fair. My rates are whatever the gap in your math was. Coincidences abound.`,
      `The town fundin' spreadsheet's COLOR-CODED now: teal for "found errors", gold for "sudden overtime", green for "investments with wax seals". I've never formatted anything more beautiful. It looks like a stained-glass window.`
    ],
    oldman: [
      `@6 Nearly enough, then somehow enough. That's the arithmetic of this town, young one. It's never once balanced on paper and never once failed a family. Some ledgers are kept elsewhere.`,
      `@7 She gave ya the stand money. Between us: the stand was FOR this before it was for anything. She told me so on openin' day. "We're bakin' a safety net," she said. I thought it was about the bread. It's never about the bread.`
    ],
    cat: [
      `Fish-Thief sat on the worst column of the midnight math, then delivered one (1) dead moth to the envelope as his contribution. Every economy's got its own currency. His is devotion. And moths.`
    ],
    grandma: [
      `@7 Sixty years, three trophies, one stand, and finally a use for all of it worth the wait. Don't thank me again, dear, or I'll start chargin' for hugs. The first invoice's already been drafted. FINAL.`,
      `Your grandfather and I were poor as sparrows in 1965 and rich in exactly the ways that mattered. You're already rich that way, dear. The envelope just buys the paperwork time to catch up.`
    ],
    tmother: [
      `The MORALE binder gained a finance tab this week, and here's its only rule: my daughter never hears a number. She hears menus, comics, and gossip. Numbers are OUR department. We're extremely good at our department.`,
      `@5 My husband bought a wax seal for the "share certificate". He practiced the stamp NINE times on scrap paper. There are nine perfect wax circles on my kitchen table. I'm framin' the best one. Don't tell him.`
    ],
    tfather: [
      `@5 One share, one yen, dividends in Sunday dinners — the finest investment of my career, and I once bought a boat. Don't tell my wife about the boat. She knows about the boat. The boat's why she checks my paperwork.`,
      `Son, listen: the share certificate's a joke, but the ink is not. What's ours is yours, top to bottom, now and always. That part I stamped with my whole chest.`
    ],
    kenji: [
      `The surgical billin' office received seventeen calls this week from residents "checkin' on payment plans" for a patient none of 'em are related to. Legally. The billin' office is CONFUSED. I am not. This is simply how the town does insurance.`,
      `@6 Dr. Mori waived her travel fee. She said, quote: "any town that queues for bread and guards its patients with a cat has already paid me." She's lookin' forward to meetin' everyone. I told her that's a two-day activity minimum.`
    ]
  }
},

/* ============================== EP 46 ============================== */
{
  ep: 46,
  title: '第46話 「手術の日」 — Surgery Day',
  words: ['surgery', 'believe', 'hold tight', 'fall asleep', 'important', 'update', 'safe and sound', 'the end'],
  story:
    `The {surgery}'s at nine. You're at the ward by six, 'cause sleep declined to attend. Trinity is — impossibly, ` +
    `perfectly — herself: she's RANKED the operating team by sock quality and demanded Kenji relay the standings. At 8:55 ` +
    `she holds your hand and doesn't make a joke, which is how ya know, and then she DOES make a joke, which is how ya ` +
    `survive. The doors close at nine sharp. And then the town does the thing you'll never forget as long as ya live: ` +
    `one by one, all day long, they just... show up.`,
  timerSec: 330,
  quests: [
    { word: 'surgery', type: 'talk', npc: 'kenji', stage: 0,
      ask: `Kenji, scrubbed in, at the door at 8:50: "The {surgery}'s four hours if it's borin'. Pray for borin'. Mori-sensei and I intend to have the dullest mornin' of our careers." His hands are perfectly still. Ya memorize that.` },
    { word: 'hold tight', type: 'talk', npc: 'trinity', stage: 1,
      ask: `8:55. She takes your hand and ya {hold tight}. "Hey. I plan to be VERY smug about survivin' this. Prepare to be married to a legend." The doors take her at 9:00. You're still holdin' the shape of her hand at 9:04.` },
    { word: 'believe', type: 'talk', npc: 'grandma', stage: 2,
      ask: `Grandma sets up in the waitin' room like a garrison commander. "Now we {believe}, dear. Loudly. It's not passive, believin'. It's WORK. Sit. Work with me." She deals the cards. Your hands need somewhere to be. She knew.` },
    { word: 'important', type: 'talk', npc: 'sister', stage: 3,
      ask: `Your sister arrives with today's comic: NURSE CAT vs THE SHADOW, in which the shadow's small, cowardly, and loses. "This is the {important} document," she says fierce, tapin' it to the ward door. "So it knows how the story goes."` },
    { word: 'fall asleep', type: 'do', loc: 'street', verb: 'walk', amount: 600, stage: 4,
      ask: `Hour two. Dad walks ya around the block 'cause sittin's become impossible. "Your mother could never sit either. In '98 we walked to the next TOWN." Ya could {fall asleep} standin'. Ya walk instead. He matches your pace exactly.` },
    { word: 'update', type: 'talk', npc: 'coworker', stage: 5,
      ask: `Hour three. Your coworker runs the {update} relay: nurse to hallway, hallway to waitin' room, waitin' room to the seventeen people who've "coincidentally" gathered outside. Current report: "Borin'. Beautifully, wonderfully BORIN'." The crowd cheers for borin'.` },
    { word: 'the end', type: 'talk', npc: 'mom', stage: 6,
      ask: `Hour four. The longest one. Mom takes your face in both hands, the way she did before every exam ya ever sat: "Whatever you're imaginin' — stop. This isn't {the end} of anything, my love. This family only writes beginnings. Ask anyone. Ask the WALL of photos."` },
    { word: 'safe and sound', type: 'talk', npc: 'kenji', stage: 7,
      ask: `1:47 PM. The doors. Kenji, mask down, and before any words come his thumb's already up: "{safe and sound}. Textbook. BORIN'." The waitin' room ERUPTS. Someone's huggin' the coach. The coach is huggin' everyone. Ya sit down right there on the floor, and the floor holds ya, and the town holds everything else.` }
  ],
  stageToasts: {
    1: `⏰ 8:55. Five minutes. She's askin' for your hand. Both of yours, actually.`,
    2: `🃏 The garrison commander's occupied the waitin' room. Cards are bein' dealt. Ya've been drafted.`,
    3: `🎨 A small artist's arrived with the day's most important document.`,
    4: `🚶 Hour two. Your legs need somewhere to go. Someone tall's already holdin' the door.`,
    5: `📣 Hour three. There's a crowd outside now?! When did— 'course there is. Get the update.`,
    6: `🕐 Hour four. The long one. Someone who's known your face since before ya had words wants a moment.`,
    7: `🚪 1:47 PM. Movement at the doors. THE DOORS.`
  },
  npcLines: {
    trinity: [
      `@1 Sock rankings, final: the anesthesiologist wins, flamingos, EXCELLENT choice. Tell the coach his legacy's spread to city medicine. Okay. Nine o'clock. See ya on the smug side, husband.`,
      `@7 ...I'm told I gave a thumbs up WHILE STILL ASLEEP in recovery. Even unconscious I got comic timin'. Legend confirmed. Now come here and don't say anything for a minute. Minute starts now.`
    ],
    mom: [
      `@6 Exam mornings, drivin' test, weddin' day, today. Same face-hold, same words, same result every time: my children come through doors. It's the family superpower. Borin' old reliable magic.`,
      `@7 I've cried into four different shoulders today, one of 'em a stranger's, one of 'em the COACH'S, which was like cryin' into a warm wall. This town, my love. This impossible town.`
    ],
    dad: [
      `@4 In '98 your mother and me walked eleven kilometers while YOU were behind those doors havin' your appendix out. Ya were fine. She was fine at kilometer nine. The legs know things the head can't hold, son. Walk.`,
      `@7 When the thumb went up I made a sound I haven't made since the '94 championship. The old man recorded it?? Since when's he got a PHONE. Delete it. ...Send it to me first. Then delete it.`
    ],
    sister: [
      `@3 The shadow in my comic's got tiny scared eyes and drops its briefcase when Nurse Cat shows up. Shadows are BUREAUCRATS. They lose to family every time. This is medically accurate. Ask Kenji. He co-signed page four.`,
      `@7 SHE IS OKAY SHE IS OKAY SHE IS OKAY. I'm gonna draw one hundred comics. The next arc's called RECOVERY QUEEN and it's gonna be SO smug. She's requested creative approval. GRANTED.`
    ],
    friend: [
      `I closed my shop— I don't have a shop. I closed my LIFE for today. Whatever this waitin' room needs: runs for coffee, bad jokes, a shoulder, vendin' machine intel. C2. Trust C2. I'm HERE, brother.`,
      `@7 The moment the thumb went up I texted both fireworks guys. WHEN she walks outta this hospital — not today, but THE day — the sky over this town's gonna lose its MIND. Concept C. I made a new one. For her.`
    ],
    shopkeeper: [
      `The store's shut with a sign: "Closed for family reasons. All of ya know exactly which family. See ya at the hospital." The bread line RELOCATED to the hospital garden. The pigeons came too. It's a whole campus now.`,
      `@7 When the news came outta the doors, it traveled the crowd in eight seconds and someone rang the shrine bell. Nobody knows who. The bell knew what it was for. Bells always do.`
    ],
    trainer: [
      `I brought the whole mornin' class. We did stretches in the hospital garden. Quiet ones! RESPECTFUL lunges! The nurses joined on their break! Movement's how some of us pray, friend. The garden understood.`,
      `@7 SOMEONE HUGGED ME AND I HUGGED THE ENTIRE WAITIN' ROOM AND I AM NOT ASHAMED. Today the strongest thing in this hospital was that woman and the second strongest was this TOWN and I've NEVER been prouder to hold third.`
    ],
    boss: [
      `The office is closed. The sign says "inventory". The inventory's one family's worry, and the whole staff's here countin' it down together. Finest use of company time in our history.`,
      `@7 Borin', the doctor said. In thirty years of reports I've never heard a more beautiful executive summary. I'm framin' the word. Just the word. BORIN'. Gold frame.`
    ],
    coworker: [
      `@5 Relay protocol: nurse Ayako nods to me at the window, I flash the count to the hallway, the hallway telephones the garden. Latency: nine seconds. Gerald holds the window post. He hasn't leaned once. He is LOCKED IN.`,
      `@7 Final relay of the day, and I got to be the one who carried "safe and sound" down two corridors at a dead sprint. Fastest data transfer of my career. I'll never top it. I'm DONE. Retired. Champion.`
    ],
    oldman: [
      `The koi surfaced at nine and stayed up all mornin'. All of 'em. They've never done that. The pond keeps vigil in its own way, young one. So does every old thing that loves this town: the bell, the bread ovens, me.`,
      `@7 I recorded your father's sound. On the phone my grandson— on the phone SOMEBODY set up for me. It's the sound a heart makes when it gets to keep everything. I'm keepin' the recordin'. Evidence of a good day.`
    ],
    cat: [
      `Fish-Thief sat facin' the operating wing doors from 8:59 to 1:47 without movin'. Nurses stepped around him. A doctor saluted him. When the thumb went up, he stood, stretched ONCE, and went to her recovery window. Shift complete. No notes.`
    ],
    grandma: [
      `@2 Believin' is work, dear, and this family clocked a full shift today: cards, soup, comics, laps, relays, lunges. Not one idle hand. That's how ya hold a roof up from the ground floor. Proud of every last one of ya.`,
      `@7 When the doors opened I did not cry. I nodded. The nod contained the cryin'. At my age ya learn compression, dear. ...Fine. In the stairwell. Two minutes. FINAL, and unrecorded, unlike SOME fathers.`
    ],
    tmother: [
      `The MORALE binder ran the waitin' room today: seat rotations, tea schedule, tissue depots at four coordinates. Nobody waited alone for one single minute across five hours. THAT was the mission. Binder: flawless.`,
      `@7 When Kenji's thumb went up, my husband lifted me off the ground like a trophy and I ALLOWED IT. In public. There's a photograph. I'm in it, airborne, undignified, and absolutely radiant. It goes in EVERY album.`
    ],
    tfather: [
      `Five hours, four coffees, two towels, one heart doin' its absolute best out here while hers got fixed in there. Toughest shift of my life, son. And I once carried a boat. Don't ask about the boat today. TODAY WE HOPE.`,
      `@7 SAFE AND SOUND. SAFE AND SOUND. I lifted my wife, I lifted your father, I attempted to lift GRANDMA and was refused with one eyebrow. Happiest day since the weddin'. The chart's burst into flame. GOOD RIDDANCE.`
    ],
    kenji: [
      `@0 Mori-sensei's last words before we scrubbed in: "Nice town. Loud garden." I told her the garden was doin' respectful lunges for us. She said, and I quote: "Then we cannot possibly fail." We did not.`,
      `@7 Four hours, eleven minutes, zero surprises. The dullest mornin' of my career, exactly as ordered. My teacher once told me the best days in medicine feel like nothin' happened. She was right. Nothin' happened today. Absolutely beautiful nothin'.`
    ]
  }
},

/* ============================== EP 47 ============================== */
{
  ep: 47,
  title: '第47話 「ゆっくりの日々」 — The Slow Days',
  words: ['heal', 'mood', 'stroll', 'exercise', 'bench', 'sunset', 'surprised', 'bloom'],
  story:
    `Nobody tells ya that after the scary part comes the borin' part, and that the borin' part's its own kind of hard. ` +
    `To {heal} is slow. Trinity — a woman who reorganized your entire bookshelf outta restlessness — must now do nothin', ` +
    `gently, for days, and she's TERRIBLE at it. Some days her {mood}'s sunshine. Some days it rains indoors. Ya learn to ` +
    `carry an umbrella either way. And down in the courtyard, right on schedule, the flowers do the thing flowers do.`,
  timerSec: 300,
  quests: [
    { word: 'heal', type: 'talk', npc: 'kenji', stage: 0,
      ask: `"She'll {heal} completely," says Kenji, "on one condition: slowly. I've prescribed boredom, naps, and pudding." He pauses. "She's appealed the boredom. The appeal's denied. Daily."` },
    { word: 'mood', type: 'talk', npc: 'trinity', stage: 1,
      ask: `Today's {mood}: thunderclouds. "I hate this bed, I hate these socks, I hate bein' helped to the WINDOW—" She stops. Breathes. "...Stay anyway?" Always. That was never in question. The umbrella opens: ya just sit with the weather.` },
    { word: 'stroll', type: 'talk', npc: 'trainer', stage: 2,
      ask: `First sanctioned {stroll}: ten meters of corridor, coach appointed as "recovery trainer" by unanimous town vote. He walks beside her wheelchair-turned-walker pace like it's the Olympics: "BEAUTIFUL first meter. THE FORM. THE HEART."` },
    { word: 'exercise', type: 'do', loc: 'ward', verb: 'walk', amount: 300, stage: 3,
      ask: `Daily {exercise}: the corridor, end to end, twice. Her record. She names each floor tile as she conquers it. Tile nine's called Gerald. Tile ten's called Steve, "because he looks like a Steve". The nurses now also call it Steve.` },
    { word: 'surprised', type: 'talk', npc: 'kenji', stage: 4,
      ask: `Kenji reviews the chart, {surprised}, which for Kenji means one raised eyebrow at four percent power: "Ahead of schedule. Notably." Trinity, from the bed: "SMUG. Write 'patient is smug' in the chart." He writes it in the chart.` },
    { word: 'bench', type: 'inspect', obj: 'cushion_ward', stage: 5,
      ask: `Ya've basically moved into the visitor corner — cushion, blanket, book. The nurses call it "the {bench}". As in: "her husband's at the bench." Ya got a POSITION now. Ya play it well.` },
    { word: 'sunset', type: 'talk', npc: 'tmother', stage: 6,
      ask: `The courtyard at {sunset}, first time outside: Trinity in a wheelchair, her mother steerin' with binder-grade precision. Nobody talks. The sky does that thing it does over this town. Her mom whispers: "Log this one, dear. Page one of the recovery album."` },
    { word: 'bloom', type: 'talk', npc: 'oldman', stage: 7,
      ask: `By the courtyard wall, the first flowers {bloom} — the ones the old man planted the week she was admitted, sayin' nothin' to anyone. "Timed 'em," he admits, waterin'. "Bulbs are honest workers. I wanted the wall to say somethin' when she came outside. It says it."` }
  ],
  stageToasts: {
    1: `🌧️ Indoor weather today. Bring the metaphorical umbrella. Bring pudding too.`,
    2: `🚶 The recovery trainer's arrived, whistle POLITELY muted. First stroll is GO.`,
    3: `🏁 She wants the full corridor today. Both ends. Walk with her — Steve awaits.`,
    4: `📋 Kenji's lookin' at the chart with his eyebrow doin' somethin' unprecedented.`,
    5: `🪑 Your corner of the room's become official infrastructure. Inspect your post.`,
    6: `🌇 First courtyard clearance! Golden hour's in twenty minutes. Places, everyone.`,
    7: `🌼 Somethin' by the courtyard wall's openin'. Someone planted it weeks ago. Go see.`
  },
  npcLines: {
    trinity: [
      `@1 The rain-mood days aren't about you, husband. Ya know that, right? You're the only part of this room I'd keep. You and Steve. Steve's a good tile.`,
      `@7 He planted 'em WHEN I WENT IN?! That silent, flour-dusted, koi-whisperin' old SWEETHEART. I get outta here soon and the first thing I'm doin' is huggin' that man 'til he critiques my form.`
    ],
    mom: [
      `The rain-mood days are when I bring the SMALL soup. Big soup says celebration. Small soup says: I know, my love. Just eat what ya can. Mothers've got a whole soup language. You're all fluent and never noticed.`,
      `@6 I watched the courtyard sunset from the window upstairs and cried into the curtain. It's the good cryin' now. The body has to finish the other kind somehow. Curtains understand.`
    ],
    dad: [
      `I re-fixed the visitor chair. It had learned to wobble again. Everything wobbles eventually, son. The trick's somebody keeps showin' up with a screwdriver. That's the whole secret of families, actually.`,
      `@3 She named a tile STEVE and now the NURSES call it Steve?! That woman could start a religion from a hospital bed. Note: if she does, we're all joinin'. Obviously.`
    ],
    sister: [
      `RECOVERY QUEEN issue four: the Queen defeats the Corridor of Doom and knights a floor tile. I can't keep up with reality anymore. Reality's writin' better comics than me. UNFAIR.`,
      `@2 The coach narrated her first ten meters like a World Cup final and I recorded ALL of it. "THE FORM. THE HEART." I've set it as my alarm. I wake up SO motivated now.`
    ],
    friend: [
      `Tuesday movie night's relocated to the ward, with permission, volume low, films TERRIBLE. She rated last night's movie zero stars and enjoyed every minute. The system works. The system is friendship.`,
      `@7 Flowers timed to bloom for her courtyard debut. The BULBS were in on it. This town recruits VEGETATION into its love schemes. I need to raise my game. The fireworks are gettin' a flower theme.`
    ],
    shopkeeper: [
      `The pudding shelf — pardon, the MEDICAL SUPPLIES shelf — now has a hand-drawn sign by a certain small artist. Sales've tripled. All proceeds mysteriously flow toward flowers for a certain courtyard. My store's never been prouder.`,
      `@4 Ahead of schedule, ya say? 'Course she is. She married into THAT family and was born from HERS. The schedule should apologize for underestimatin' her.`
    ],
    trainer: [
      `@2 TEN METERS. Some athletes never understand: the ten hardest meters of a life are worth more than every marathon. I've coached champions. TODAY I coached a CHAMPION. All caps. Forever.`,
      `Her recovery plan's pinned in the gym now: WEEK ONE: EXIST MAGNIFICENTLY. WEEK TWO: EXIST MAGNIFICENTLY, FARTHER. Members keep askin' whose plan it is. I say: the town's. We're ALL on it.`
    ],
    boss: [
      `I visit Thursdays with terrible ties, per the standing morale arrangement. This week's was described as "a crime against fabric". Her recovery voice gets stronger weekly. The ties'll continue to worsen. I have DEPTHS.`,
      `@4 Ahead of schedule. In business we'd call that beatin' guidance. In this family it's apparently just called Tuesday. I'm revisin' all my forecasts about all of ya upward. Permanently.`
    ],
    coworker: [
      `Gerald's been at the ward window nineteen days. He's grown TOWARD her bed at a measurable angle. I sent the data to a botany journal. They asked if this was a joke. Sir, this plant has never joked in his LIFE.`,
      `@3 Corridor telemetry: two lengths, forty-six tiles, two tiles named, zero rests. Recovery velocity: exceptional. Steve's morale: reportedly high. The archive grows more beautiful and more absurd daily. As does this town.`
    ],
    oldman: [
      `@7 Bulbs, young one. Ya put 'em in the dark, ya cover 'em completely, and ya trust the calendar more than your eyes. Then one day — this day — the wall speaks. Gardens are just patience ya can look at.`,
      `She waves at me from the window durin' my mornin' waterin'. I wave the trowel. We've got a whole language now. The koi are jealous. They've applied for a window.`
    ],
    cat: [
      `Fish-Thief has adjusted to recovery protocols: daytime post at the courtyard door, evenin' rounds past Steve (he approves of Steve), night watch below her window. He was BUILT for this era. He's never been more employed.`
    ],
    grandma: [
      `The rain-mood days, dear? Those are the healin' workin' out loud. Nobody mends silently — not roofs, not brides, not anyone. Bring pudding, sit close, let it rain. It always clears by the sea. I mean by evenin'. Same thing.`,
      `@7 The old man timed FLOWERS. I found out and had to sit down, dear, and I do not sit down. Sixty years that man's been quietly better than everyone at sayin' things without words. ...Don't tell him I sat down. FINAL.`
    ],
    tmother: [
      `@6 The recovery album's real: page one, courtyard sunset. My daughter's face in gold light, alive and cross about her socks. I've photographed queens. None composed themselves better.`,
      `Wheelchair steerin' earns ya a license in my binder: three-point turns, curb protocols, golden-hour positionin'. I scored a ninety-eight. The missin' two points were for one (1) enthusiastic corner. Worth it.`
    ],
    tfather: [
      `I visit and mostly just hold the door and carry things and breathe better than I did last month. A father recalibrates, son. Last month I feared everything. This month I fear only her BOREDOM. Rightly.`,
      `@7 The flowers by the wall got me. The BULBS got me. A man plants silent flowers on a schedule for my daughter's first sunset and I'm supposed to remain COMPOSED?! New towel. NEW TOWEL.`
    ],
    kenji: [
      `@0 The boredom appeal was denied for the ninth consecutive day. Her legal arguments are improvin'. Yesterday she cited "cruel and unusual pudding rationin'". I've increased the pudding. The law is the law.`,
      `@4 Between us: "notably ahead of schedule" is the phrase I write when I don't want to write "remarkable" and jinx it. Mori-sensei called to check the chart and said one word: "Ha." From her, that's a standing ovation.`
    ]
  }
},

/* ============================== EP 48 ============================== */
{
  ep: 48,
  title: '第48話 「おかえり」 — Coming Home',
  words: ['leave hospital', 'give back', 'entrance', 'decorate', 'welcome', 'futon', 'be moved', 'normal'],
  story:
    `Eighteen days. That's how long the ward was the center of the map. Today the discharge papers are signed, the vases ` +
    `are distributed to other rooms ("spread the town around," Trinity insists), and one small ceremonial cat's waitin' at ` +
    `the exit doors like he received a memo. The town's had four days' notice, which — for this town — is enough time to ` +
    `plan a festival. Ya talked 'em down to "a normal welcome". They heard "a NEARLY normal welcome". It's the best deal ya were ever gonna get.`,
  timerSec: 315,
  quests: [
    { word: 'leave hospital', type: 'talk', npc: 'trinity', stage: 0,
      ask: `To {leave hospital}: sign here, initial there, promise Kenji three follow-ups and infinite naps. Trinity signs with a flourish: "Discharged. UNDEFEATED." The nurses formed a line to say goodbye. Half of 'em are cryin'. She critiques their socks one last time, with love.` },
    { word: 'give back', type: 'talk', npc: 'kenji', stage: 1,
      ask: `Ya {give back} the room key— there's no room key. You're simply standin' in the doorway not leavin'. Kenji, gentle: "The ward'll be here. The trick's to stop needin' it. Go home. Doctor's orders. BOTH of ya."` },
    { word: 'entrance', type: 'talk', npc: 'sister', stage: 2,
      ask: `The home {entrance} has been... enhanced. Paper flowers, a hand-painted banner, and one confetti cannon "on safety". Your sister salutes: "I was told NORMAL welcome. This IS my normal." Nobody can argue with that. Nobody tries.` },
    { word: 'decorate', type: 'talk', npc: 'mom', stage: 3,
      ask: `The two moms had four days to {decorate} and used every hour: her favorite blanket sunned daily, the kitchen stocked to siege standards, flowers in rooms flowers've never been in. "It's not too much," mom pre-empts. "It's EXACTLY enough. We measured."` },
    { word: 'welcome', type: 'talk', npc: 'tfather', stage: 4,
      ask: `The {welcome} committee overflows the garden. Trinity's dad holds the gate and — for once in his life — says only two words: "Welcome home." Then he's DONE, gone, face in towel, and somehow that's the speech that gets everyone else goin' too.` },
    { word: 'futon', type: 'inspect', obj: 'bed', stage: 5,
      ask: `Her own {futon}. She lies down on it at three in the afternoon like a queen reclaimin' a throne, sighs from her toes, and says: "The ward bed had SETTINGS and it was never once this good." The cat assumes his coronation position at her feet. Court's in session.` },
    { word: 'be moved', type: 'talk', npc: 'coworker', stage: 6,
      ask: `Even the coworker's spreadsheet can't survive today: he tries to log the homecomin' and just... stops typin'. To {be moved} is off-format. "Gerald and I request permission to simply stand here feelin' things." Granted. The archive stays blank on purpose. The blank says the most.` },
    { word: 'normal', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Evenin'. Dishes done, guests gone, cat asleep, house hummin' its ordinary hum. Trinity leans on your shoulder in the kitchen doorway: "THIS. This borin', {normal}, nothin'-happenin' evenin'. This is what I fought for." The most beautiful normal afternoon of your entire life, goin' down as barely worth mentionin'. Except forever.` }
  ],
  stageToasts: {
    1: `📋 Discharge paperwork time. She's signin' like it's an autograph session. It kinda is.`,
    2: `🚪 You're still standin' in the ward doorway. The doctor's noticed. Everyone's noticed.`,
    3: `🎊 Home. And the entrance's been... your sister happened to it. Go behold.`,
    4: `🏠 Two mothers, four days, one mission. Witness the interior.`,
    5: `🥹 The gate. The big man. The two words. Brace your heart.`,
    6: `🛏️ She's gone quiet upstairs. The good kind of quiet. Peek in.`,
    7: `📊 The archivist's at the door, experiencin' an unformattable emotion.`
  },
  npcLines: {
    trinity: [
      `@5 Don't tell the ward, but I named OUR floor tiles on the way to the bathroom. Ours are all called home. Every single one. It's not creative. I don't care. It's accurate.`,
      `@7 Tomorrow I want to do nothin', together, all day. Aggressive nothin'. Champion-level nothin'. We've EARNED the nothin', husband. Book the nothin'.`
    ],
    mom: [
      `@3 We measured, we truly did: one flower arrangement per room she loves, her tea where her hand falls, the blanket at eleven-o'clock sun. Love's mostly logistics, my dear. The rest's just knowin' where hands fall.`,
      `@7 I walked home tonight and heard the kitchen singin' again through the window. Off-key. Full volume. I stood in the street like a fool and listened to the whole song. Best concert of my life.`
    ],
    dad: [
      `I fixed the gate hinge this mornin' so it wouldn't squeak durin' the welcome. Then HER father held it open the whole time anyway. Between the two of us, that gate's never been safer. Dads: redundant systems. On purpose.`,
      `@4 Two words and then straight into the towel. That man gave the greatest speech I ever heard. I've been takin' notes from the wrong speakers my whole life.`
    ],
    sister: [
      `@2 The cannon stayed on safety per the treaty, BUT the paper flowers are load-bearing and the banner took two days and YES that's Nurse Cat painted on the corner. He earned the credit. He did nineteen nights, people.`,
      `@7 RECOVERY QUEEN, final issue: the Queen comes home, and the last panel's just the kitchen light on at night, from outside. My art teacher cried. I got an A-plus-plus. That's not a real grade. She INVENTED a grade.`
    ],
    friend: [
      `The fireworks are NOT tonight — calm down — she needs quiet. The fireworks are SATURDAY, cleared with Kenji, Concept C: the flower one. Tonight I contributed one lasagna and my absence by 8 PM. Growth. GROWTH.`,
      `@4 When her dad did the two words I grabbed the coach's arm and the coach grabbed the SHOPKEEPER'S arm and it went all the way down the garden like a chain of extremely emotional dominoes. Nobody was spared. It was BEAUTIFUL.`
    ],
    shopkeeper: [
      `The siege-standard kitchen stockin' was my honor: her exact tea, the good rice, pudding at strategic depths. The invoice was mysteriously eaten. By whom? The store cat. I don't have a store cat. The case remains open. Forever.`,
      `@7 The tab system officially records this family as "settled in full, always". My grandfather wrote that phrase in his ledger exactly twice. I've now written it once. It's the highest entry the books allow.`
    ],
    trainer: [
      `Recovery trainin' relocates to home turf Monday: gentle laps to the park bench, grandma pace — which, to be clear, is FASTER than it sounds, we've all been humbled by grandma pace. The champion continues. THE FORM. THE HEART.`,
      `@4 The two-word speech destroyed me. I hugged the gate. THE GATE. It was load-bearin' in more ways than one today, and so was I. We held. We both held.`
    ],
    boss: [
      `Your desk expects ya Monday — afternoons only, first two weeks. Pre-arranged, non-negotiable, and the paperwork calls it "strategic capacity planning". I'm gettin' spectacular at fake paperwork. It may be my true callin'.`,
      `@7 A borin', normal evenin' as the trophy of a whole season. Somewhere in every quarterly report I've ever written, this lesson was hidin'. It took your family to publish it properly.`
    ],
    coworker: [
      `@6 The blank cell in the archive's got a footnote now, the only one: "Some data is feelings. Logged elsewhere." Gerald approved the wordin' by leanin' on the enter key. Co-authorship. Official.`,
      `Gerald came home from ward duty today too. Nineteen days of window service. He gets the sunny corner of the office and a new pot — ceremonial, engraved. Well. I wrote on it with marker. It says WARD VETERAN. He stands PROUD.`
    ],
    oldman: [
      `The courtyard flowers'll keep bloomin' another month — bulbs are thorough workers. The nurses asked to keep 'em. 'Course. Ya never uproot a thing that's learned to say welcome. Ya take cuttings. I took cuttings. They're by your gate.`,
      `@7 A normal evenin', hard-won: that's the town's whole recipe, young one. We only ever made one thing here, all these years. Ordinary days, over and over, defended like treasure. Tonight the recipe worked again.`
    ],
    cat: [
      `@5 Fish-Thief has completed nineteen nights of corridor duty and one triumphant escort home, and has now assumed the foot-of-futon throne with the deep sigh of a soldier demobilized into luxury. He's asleep in four seconds. He's earned four YEARS.`
    ],
    grandma: [
      `@3 I supervised the deceratin'— the DECORATIN' from the doorway with tea, which is to say I commanded it. One correction only: the blanket goes at the ELEVEN o'clock sun, not ten. Everything else those two mothers did was perfect. I said so OUT LOUD. Mark the calendar.`,
      `@7 Eighteen days, dear, and this family never once set the worry down careless. Passed it hand to hand like hot soup, nobody spilled, nobody burned. Now it's done, and the house sings off-key again. That's a family workin' properly. FINAL.`
    ],
    tmother: [
      `The recovery album, page nine: her own doorway, her own ridiculous banner, her own crowd. I'm havin' it bound in cloth. The MORALE binder retires undefeated and goes into the archive of finished things. The best binders end.`,
      `@4 My husband rehearsed a four-paragraph speech in the car for two hours. At the gate he managed two words and dissolved. It was, and I say this with binder-grade precision, the correct edit. I married the right man. He knows what to cut.`
    ],
    tfather: [
      `@4 Two words was ALL I HAD, son. The rest of the speech lives in the towel now. The towel knows everything. The towel's heard my whole heart. We're considerin' publishin'.`,
      `@7 Tonight I drove the four hours home, and my wife slept in the passenger seat the whole way, smilin', and I didn't play ANY radio. Best drive of my life. Even countin' the boat delivery. ESPECIALLY countin' the boat delivery.`
    ],
    kenji: [
      `@1 Standin' in doorways not leavin' is a recognized medical phenomenon. It affects the healed and their families equally. The treatment's goin' home. It takes exactly one evenin' to work. Yours is waitin'. Go.`,
      `@7 House call scheduled Thursday — the FUN kind now: tea, vitals, and losin' to her at cards, which is apparently also part of the recovery plan. Her chart's final ward entry reads: "Patient discharged. Town intact. Prognosis: joyful." Mori-sensei countersigned with "Ha." Highest possible marks.`
    ]
  }
},

/* ============================== EP 49 ============================== */
{
  ep: 49,
  title: '第49話 「普通の一日」 — An Ordinary Day',
  words: ['protect', 'entrust', 'carefree', 'early evening', 'one day', 'peace', 'hold hands', 'always'],
  story:
    `Here's the thing nobody warned ya about: the fear doesn't leave when the danger does. It lingers, wearin' your face, ` +
    `hoverin' behind her at stairs, flinchin' at every yawn. Today Trinity does somethin' about it. Not gently, either — ` +
    `this is the woman who fainted at a bakery and made it FUNNY within the hour. Today's got stairs, a market run, ` +
    `grandma-pace laps, and one sentence at the park bench that takes the weight off your shoulders and sets it down, at ` +
    `last, where it belongs: behind ya both.`,
  timerSec: 300,
  quests: [
    { word: 'protect', type: 'talk', npc: 'trinity', stage: 0,
      ask: `Ya hover at the stairs. Again. Trinity turns: "Husband. I love ya. Ya've tried to {protect} me from a STAIRCASE four times today. It's eleven steps. I've beaten SURGERY. Stand down, soldier." ...Ya stand down. Halfway down. Progress.` },
    { word: 'entrust', type: 'talk', npc: 'grandma', stage: 1,
      ask: `"Ya must {entrust} her to herself, dear," grandma says, dealin' the mornin' cards. "I watched your grandfather hover after my '71 knee. I banned him from the kitchen for a month. Don't make me arrange the same for you. I know people."` },
    { word: 'carefree', type: 'talk', npc: 'friend', stage: 2,
      ask: `Your friend drags ya out for one {carefree} hour: terrible arcade games, worse milkshakes. "Best man post-crisis protocol. Ya forgot how to have fun. It's like a muscle. We REBUILD it." Ya lose eight races. Ya feel fifty kilos lighter.` },
    { word: 'one day', type: 'talk', npc: 'oldman', stage: 3,
      ask: `"Take it {one day} at a time" — everyone says it. The old man says it different, feedin' the koi: "One day at a time isn't slow, young one. It's the only speed there ever was. The rest was always pretend. The pond knows. Ask the pond."` },
    { word: 'peace', type: 'talk', npc: 'mom', stage: 4,
      ask: `Ya find mom in her kitchen and finally say it: the fear, the hoverin', all of it. She stirs the pot. "That's not weakness, my love. That's {peace} learnin' to trust the house again. It takes as long as it takes. Meanwhile: taste this. More miso? Be honest."` },
    { word: 'early evening', type: 'do', loc: 'park', verb: 'walk', amount: 400, stage: 5,
      ask: `The {early evening} lap, grandma pace, all three of ya: Trinity settin' the speed, grandma callin' the cadence, you — finally, FINALLY — just walkin'. Not guardin'. Walkin'. The pigeons flank the formation. Even they've stopped worryin'.` },
    { word: 'hold hands', type: 'talk', npc: 'trinity', stage: 6,
      ask: `At the park bench she stops and takes both of yours: ya {hold hands} like the night on the hill. "I need a husband, not a guard. I need the man who laughs at my jokes, not the one who counts my breaths. He's still in there. I've SEEN him. Send him back out." The weight lifts. It actually, physically lifts.` },
    { word: 'always', type: 'talk', npc: 'kenji', stage: 7,
      ask: `Last checkup of the week. "Will she {always} be okay?" ya ask, before ya can stop the question. Kenji considers it with full seriousness: "No one gets always. What she's got is NOW, excellent margins, and a town. Between us — that's better than always. Always is a rumor. This is Tuesday. Tuesdays are real."` }
  ],
  stageToasts: {
    1: `🃏 The mornin' cards are dealt. Grandma's got an agenda today, and it's YOU.`,
    2: `🕹️ Ya've been kidnapped for mandatory fun. Don't resist. Resistance extends the session.`,
    3: `🌊 The pond, mid-mornin'. The koi are assembled. Wisdom hours are open.`,
    4: `🍲 Your mother's kitchen. The pot's on. The talk ya've been avoidin' is ready when ya are.`,
    5: `🚶 Evenin' lap: three generations, grandma pace. Formation up!`,
    6: `💜 She's stopped at the bench. She's got that look. The important one. Go.`,
    7: `🩺 One last question's sittin' in your chest. The clinic light's on. Ask it.`
  },
  npcLines: {
    trinity: [
      `@6 For the record: the guard was very handsome and I understood the impulse completely. But the husband? The husband's the love of my life. Good trade. Best trade. FINAL, as grandma says.`,
      `@0 Four times at ONE staircase. Yesterday it was the kettle. The KETTLE, husband. What was the kettle gonna do to me. Say it out loud. Exactly. Ya hear it now.`
    ],
    mom: [
      `@4 More miso, ya said. GOOD. You're healin' too, ya know — honesty about soup is always the first symptom. The rest follows. It always follows. Come taste things more often.`,
      `Your father hovered over ME in 1998, ya know. Two months. I finally handed him a list titled THINGS TO FIX INSTEAD. The garden gate got magnificent. Channel it, my love. Our fence could use ya.`
    ],
    dad: [
      `Heard ya got benched by your own wife. Welcome to the club, son. Membership: every man in this family, goin' back four generations. We meet at the hardware store. We fix things. It helps. It genuinely helps.`,
      `@6 The bench talk. Every marriage that lasts has one — the talk where somebody hands the fear back and asks for the person instead. Your mother gave me mine over a garden gate. Best scoldin' of my life.`
    ],
    sister: [
      `Ya hovered at breakfast SO HARD that Trinity drew a comic about it. She's taken over my job. HOVERMAN: he means well, he's EVERYWHERE. It's devastatin' and the likeness is PERFECT. She got the eyebrows.`,
      `@5 Three generations at grandma pace and the pigeons in formation?! I ran home for my sketchbook. FULL SPREAD. This one goes in the town archive. The coworker's already requested first printin' rights.`
    ],
    friend: [
      `@2 Eight straight losses at the racing game! EIGHT! There he is! THERE's the guy who's bad at video games and great at bein' alive! Welcome back, buddy. The milkshakes were medicinal. The victory was mine. Both facts stand.`,
      `Saturday: Concept C fireworks, the flower one, in her honor, cleared by every relevant authority includin' the cat. You're required to gasp. Practice your gasp. THE SKY IS GONNA DO THINGS.`
    ],
    shopkeeper: [
      `She did the market run SOLO today — argued my plum price down like her grandmother-in-law, twice as fast. I lost money and applauded. Some defeats are pure joy. The dynasty's fully operational again.`,
      `And YOU bought groceries without checkin' your phone once. I notice things. The register notices things. We're all recoverin' nicely, is the register's professional opinion.`
    ],
    trainer: [
      `@5 GRANDMA PACE, day one: completed. Grandma pace, I remind everyone, has finished MARATHONS. The recovery arc enters phase two: JOY LAPS. Same laps. Better name. Names matter. THE FORM. THE HEART.`,
      `You, my friend, ran worry laps for six weeks. Next week we trial somethin' new: NO-REASON LAPS. Just runnin' because legs are good and mornings are good. The advanced class. You're ready. I've SEEN it.`
    ],
    boss: [
      `Afternoons-only ends when YOU say, not the calendar. And when ya do come back full-time, your first assignment's teachin' this office what ya learned. I mean it. I'm schedulin' a seminar. Title: "Tuesdays Are Real." Attendance: mandatory. Speaker: you.`,
      `@7 Kenji told ya always is a rumor? Write that down. Thirty years of five-year plans and the doctor renders 'em all obsolete over a stethoscope. This town's clinic outperforms my entire business library.`
    ],
    coworker: [
      `The archive's got a new final tab for the season: HOVERMAN, by two artists (sister-in-law collaboration, historic first). Filed between "safe and sound" and the blank cell of feelings. The season reads BEAUTIFULLY, my friend. Ya should borrow it sometime.`,
      `Gerald, ward veteran, was carried on today's park lap in his ceremonial pot, at grandma pace. He's now participated in recovery at every stage. When the botany journal writes back, they're gettin' a SAGA.`
    ],
    oldman: [
      `@3 The koi have watched every generation of this family walk that path — courtin', marryin', mournin', mendin'. They tell me the walkin' always comes back. And here you all are. Walkin'. The pond keeps excellent books.`,
      `@6 She handed ya the fear back at the bench, did she? Good. Now do as I do with the trowel and the bulbs: put it in the ground, young one. Fear composts. Everything in this town eventually grows somethin'.`
    ],
    cat: [
      `Fish-Thief has formally stood down from high-alert duty. The corridor posts are closed, the window vigils complete. He's returned to his foundin' role: lyin' in the exact center of whatever matters most. Currently: the space between your two cushions at dinner. Precisely centered. Always.`
    ],
    grandma: [
      `@1 Your grandfather, the kitchen ban of '71 — he built the porch that month, dear, the one we all sat on for forty years. Hoverin', aimed PROPERLY, becomes somethin' the whole family stands on. Aim yours. The fence, perhaps. Your mother mentioned the fence.`,
      `@5 Grandma pace isn't slow, dear, it's SUSTAINABLE. I've outlasted every sprinter I ever met. So will she. So will ya both, now that you're walkin' instead of bracin'. Much better view at this speed. FINAL.`
    ],
    tmother: [
      `I called today and she talked for forty minutes about paint colors and plum prices and NOT ONCE about her heart. Do ya understand what a victory that is? The binder-in-retirement logged it anyway. Some habits are love.`,
      `@6 She told ya the bench sentence. She practiced it on me on Tuesday, ya know — "too harsh? too soft?" I told her: say it exactly like that. My daughter edits like her mother. One draft, then the truth.`
    ],
    tfather: [
      `This week I only drove up ONCE, son. Progress for me too. My wife says the passenger seat misses her— that I— we miss the drives. BUT it's the good kind of missin' now. The kind where everyone's fine at both ends of the road.`,
      `@6 A wife who hands back the fear and asks for the man. Son, ya married what I married. There's no luckier thing walkin' this earth. Sunday dinners resume this week. The share certificate DID promise dividends. PAY UP.`
    ],
    kenji: [
      `@7 For what it's worth: I asked my teacher your exact question once, about a patient I— about someone who mattered. She said what I said to you, minus the Tuesday part. The Tuesday part I added myself, over the years. It's the truest part. See ya Thursday. Bring her. Bring the cards. I've been practicin'.`,
      `Chart note, this week: "Patient thrivin'. Spouse: finally also a patient, in the good sense — restin', laughin', losin' at cards. Family: intact. Town: smug about it. Case approachin' its happy endin'." Mori-sensei's reply: "Ha. Ha." TWO has. Unprecedented.`
    ]
  }
},

/* ============================== EP 50 ============================== */
{
  ep: 50,
  title: '第50話 「小さな集まり」 — The Small Gathering',
  night: true,
  words: ['gathering', 'thank you', 'town', 'live', 'adore', 'every night', 'now', 'hope'],
  story:
    `Trinity's been plottin' for a week — whisperin' with your sister, tradin' envelopes with the shopkeeper, holdin' ` +
    `binder summits with two mothers. Tonight ya find out what: a small {gathering} at the park pond, lanterns in the ` +
    `trees, the 1964 Stand servin' sweet rolls, every person who carried this family through the hard season standin' in ` +
    `the warm light. This time SHE's the host. "They held us up for two months," she says, tyin' the last lantern. "Tonight ` +
    `we hold the light for THEM." And at the end of the night, by the water, the old man's got an announcement. Sort of. The town does most of the announcin' for him.`,
  timerSec: 330,
  quests: [
    { word: 'gathering', type: 'talk', npc: 'trinity', stage: 0,
      ask: `"A {gathering}," Trinity declares, hands on hips, surveyin' her lanterns. "Small. Warm. OURS. No cannons—" (a distant, disappointed "AWW" from your sister) "—ONE cannon. On safety. FINE." The hostess has returned to full power.` },
    { word: 'thank you', type: 'talk', npc: 'mom', stage: 1,
      ask: `Trinity opens the evenin' with two words to the crowd — "{thank you}" — and then can't finish the sentence, and doesn't need to. Mom starts the applause. It goes on for a very, very long time. The pigeons join from the trees. Even they carried soup, emotionally speakin'.` },
    { word: 'town', type: 'talk', npc: 'boss', stage: 2,
      ask: `"To this {town}," the boss toasts, raisin' his cup to the lantern light, "which taught a business man that every ledger worth keepin' is written in soup, invoices of love, and one immaculate cat." The immaculate cat accepts the toast from the best cushion.` },
    { word: 'live', type: 'talk', npc: 'oldman', stage: 3,
      ask: `"To {live}," the old man says simply, by the water. "Not survive — that part's done, and well done. To LIVE. Sixty years I confused the two, young ones. Don't take my scenic route." He feeds the koi one ceremonial roll. They accept it with gravity.` },
    { word: 'every night', type: 'talk', npc: 'grandma', stage: 4,
      ask: `Then it happens: the old man clears his throat, goes red, and manages: "She's agreed to walk with me. By the pond. {every night}, from now on." The town ERUPTS. Grandma, serene: "It is a WALKING arrangement." Nobody believes her. She's smilin' too hard. FINAL, indeed.` },
    { word: 'adore', type: 'talk', npc: 'sister', stage: 5,
      ask: `Your sister presents the season's final comic, bound, to the whole crowd: THE HARD SEASON, by two artists. Last page: the town, tiny and bright, holdin' one house up with many hands. "I {adore} every dumb one of ya," she announces, "and I am NOT cryin', the lanterns are smoky." The lanterns are not smoky.` },
    { word: 'now', type: 'talk', npc: 'kenji', stage: 6,
      ask: `Kenji finds ya at the edge of the light. "A year ago I was new here. {now} I got a clinic, a card rivalry, a lemon tea waiting list, and this." He nods at the whole glowin' scene. "My teacher asked if I regret leavin' the city hospital." He sips his tea. "I laughed for a full minute."` },
    { word: 'hope', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Last lantern. The crowd thins, the pond settles, and Trinity leans into ya, watchin' two elderly silhouettes begin their first {every night} walk. "Grandma told me somethin' in the hospital," she says. "{hope} is a muscle. The town's the gym." She takes your hand. "Same time next season, husband?" Same time. Every season. All of 'em.` }
  ],
  stageToasts: {
    1: `🏮 The lanterns are lit, the stand's servin', the hostess is BACK. Find her before the crowd does.`,
    2: `👏 Two words was the whole speech, and it leveled the entire park. Steady yourself.`,
    3: `🥂 The boss has risen, cup in hand. His toasts have a PERFECT record. Attend.`,
    4: `🌊 The old man's walkin' to the water. He's got that look. The sixty-year look.`,
    5: `💥 AN ANNOUNCEMENT HAS OCCURRED. The town's beside itself. Locate grandma. Study her face.`,
    6: `📖 The final comic's bein' presented to the whole town. Tissues are circulatin' in bulk.`,
    7: `🌙 The edge of the lantern light. The last conversations. The best ones. Make 'em count.`
  },
  npcLines: {
    trinity: [
      `@7 Look at 'em walkin'. Sixty years late and RIGHT on time. That's this town all over, husband. Nothin' arrives when it should. Everything arrives when it matters.`,
      `@0 Hostin' again feels like breathin' again. Also I hid a second dessert table behind the big tree. Hostess secret. Ya get first access. Marriage perk. Go before the coach finds it — he WILL find it.`
    ],
    mom: [
      `@1 She said thank you and the whole park said it back without words. I've been to weddings, festivals, and one commercial premiere in this park, and tonight was the loudest quiet I ever heard.`,
      `@4 MY MOTHER. WALKING ARRANGEMENTS. AT THE POND. I need to sit down, I need more tea, I need to knit that man a scarf IMMEDIATELY. Winter's comin' and he walks SLOWLY.`
    ],
    dad: [
      `@4 The old man asked ME how to do the announcement, this mornin', at the hardware store. I said "two words did it for her dad at the gate". He used fourteen. For him? That's PRACTICALLY two. Proud of him.`,
      `@2 The boss toasted soup ledgers and love invoices, and the accountant in me wept openly. The husband in me too. All departments cryin' tonight. Full company shutdown.`
    ],
    sister: [
      `@5 THE HARD SEASON is dedicated to Nurse Cat, obviously, who attended the readin' and fell asleep durin' his OWN dedication. Icon behavior to the very end. The second printin's got his paw print. Don't ask how long that took.`,
      `@4 GRANDMA AND THE OLD MAN. I KNEW IT. I've drawn eleven speculative comics about this SINCE THE BREAD EPISODE. The archive'll show I called it FIRST. Coworker! TIMESTAMP MY VINDICATION!`
    ],
    friend: [
      `@7 Okay, small confession: Concept C launches in ten minutes from behind the gym. Flower fireworks, in her honor, and the finale spells— no. No spoilers. Just... when the sky goes gold, that one's for the whole season, buddy. For all of us.`,
      `@4 The old man announced pond walks and the town cheered louder than at the WEDDIN'. We're a town that knows a season finale when we see one. NOBODY does finales like us. NOBODY.`
    ],
    shopkeeper: [
      `@0 She ordered the lantern candles from me a week ago and paid FULL PRICE, first customer to manage it in two months. I nearly refused, then saw her face. The hostess needed to pay her own way tonight. Some purchases are declarations.`,
      `@4 SIXTY years of sellin' that man flour, and tonight he finally— the ledger's closed, friends! The 1964 account SETTLES! Drinks on the store! I've waited my whole CAREER to comp this round!`
    ],
    trainer: [
      `@3 TO LIVE! The old man gets it! Livin's just trainin' with better lightin'! Tonight counts as cardio, joy counts as protein, and this town's in the best shape of its LIFE! ALL CAPS FOREVER!`,
      `@4 Every-night pond walks at their age is ELITE programming. Low impact, high romance, unlimited seasons. I offered to design their warmup. Grandma said "we have been warmin' up for sixty years, dear." I RETIRED ON THE SPOT. Coachin' complete. Nothin' left to teach. SHE teaches ME now.`
    ],
    boss: [
      `@2 The toast was two months in the draftin', if I'm honest. Every version was worse than the truth, so I finally just read the truth off the ledger. Soup. Invoices of love. One cat. Complete records. Audit passed.`,
      `@6 I watched the doctor laugh at the edge of the light and thought: best hire this town ever made, and none of us hired him. Towns recruit different. Slower. Permanent. No exit interviews.`
    ],
    coworker: [
      `@5 Vindication timestamped for the small artist: eleven speculative comics, first dated the BREAD EPISODE. The archive confirms her scoop. Journalism prize: one sweet roll, awarded, consumed, immortal.`,
      `@7 Season's final entry, filed tonight under lantern light: "Everyone made it. The blank cell of feelings has been full the whole time." Gerald leaned on the period key. Entry closed. Best season the archive ever held, my friend. See ya in the next one.`
    ],
    oldman: [
      `@4 Fourteen words and my whole chest behind 'em. Sixty years of practice, young one, and the speech still shook. Good. A thing worth sayin' SHOULD shake a little. She said yes before I finished. She always was faster than me.`,
      `@7 Look after the season's lesson, you two, the way I look after bulbs: to live, not just survive, and to say the shakin' things out loud. The pond and I'll handle the rest. We've got a schedule now. EVERY night. ...I've got a schedule. At MY age. Magnificent.`
    ],
    cat: [
      `@5 Fish-Thief, dedicatee of THE HARD SEASON, slept through his dedication, woke for the sweet rolls, and has now positioned himself precisely between the two elderly walkers' route and the dessert table — the exact center, as ever, of everything that matters. The season closes. The cat remains. The cat ALWAYS remains.`
    ],
    grandma: [
      `@4 A walking arrangement, dear, with a man who times flowers and holds bread like a newborn. Call it whatever the town likes. I've buried a husband, raised a family, won three trophies, and waited out sixty years of maybe. I'm DONE waitin' on the good things. Every night. FINAL.`,
      `@7 Hope's a muscle, dear — I told her that in the hard week, and look at her tonight, hostin' the whole town on it. This family trains properly. Now go home, the pair of ya. The pond's BOOKED this evenin'. *the wink to end all winks*`
    ],
    tmother: [
      `@1 She thanked the town in two words and finished the sentence with her face. I taught her public speakin' for years — the final lesson was always gonna be hers to teach me. The retired binder came outta retirement for ONE page tonight. It says: "Standing ovation. Family: complete."`,
      `@4 A sixty-year courtship resolvin' at a pond, twenty meters from where my daughter beat a shadow. This town doesn't have real estate, dear. It's got CHAPTERS. I'm instructin' my husband to buy the plot next to the inn. We're not missin' the next volume.`
    ],
    tfather: [
      `@4 The old man announced his pond walks and I hugged the SHOPKEEPER, who hugged the COACH, and the chain reached the dessert table in four seconds. Fastest emotional domino run this town's ever recorded. I anchored it. PROUDLY. Both towels DEPLOYED.`,
      `@7 Same time next season, she said. Son — count this family in for every season you two ever run. All of 'em. The whole series. We brought the tissues, we bought the plot— we're LOOKIN' at the plot. WE ARE IN.`
    ],
    kenji: [
      `@6 The lemon tea waiting list's real, by the way. Eleven names. My grandmother's recipe's got a fan club in a town I'd never heard of two years ago. If this is what leavin' the city costs, I should've paid it a decade sooner.`,
      `@7 Final chart note of the season, unofficial: "Diagnosis: town. Prognosis: excellent. Treatment plan: remain." Mori-sensei has asked to visit in spring — she wants to meet the koi, the cat, and "the grandmother with the resting pulse". I told her: get in line. It's a wonderful line. Longest in town.`
    ]
  }
}
]