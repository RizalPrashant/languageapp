import type { Episode } from './episodes'

/* =====================================================================
   SEASON 2 (episodes 11-20)
   Arc: everyday life deepens — Grandma moves in (ep16), the Hill opens
   (ep19), and the season finale is THE PROPOSAL (ep20).
   Fish-Thief is now a real townsperson (fromDay 5). All text trilingual
   via {concept} markers.
   ===================================================================== */

export const SEASON2: Episode[] = [

/* ============================== EP 11 ============================== */
{
  ep: 11,
  title: '第11話 「大掃除」 — The Great Cleaning',
  words: ['cleaning', 'room', 'box', 'dirty', 'under', 'find', 'help', 'wash'],
  story:
    `Mom's got THE LOOK. The one that means the whole house is about to get turned upside down. "Spring {cleaning}!" ` +
    `she announces, and dads and sisters scatter like startled pigeons. Your {room}'s first. Nobody's seen {under} the ` +
    `table since the pudding incident, bud. And somewhere up on a high shelf sits a dusty {box} nobody remembers packin'...`,
  timerSec: 300,
  quests: [
    { word: 'cleaning', type: 'talk', npc: 'mom', stage: 0,
      ask: `Spring {cleaning}! Today, the WHOLE house. Even under things. ESPECIALLY under things. No mercy.` },
    { word: 'room', type: 'inspect', obj: 'bed', stage: 1,
      ask: `Your {room} first, bud. The futon's grown its own ecosystem. Might've grown its own laws, too.` },
    { word: 'box', type: 'inspect', obj: 'bookshelf', stage: 2,
      ask: `A dusty {box} up on the top shelf... old photos! A young woman winnin'... a race? Hang on. Is that GRANDMA?!` },
    { word: 'dirty', type: 'inspect', obj: 'stove', stage: 3,
      ask: `The {dirty} pot from curry night. Been "soakin'" for nine days now. It's alive back there. Probably. Don't poke it.` },
    { word: 'under', type: 'inspect', obj: 'table', stage: 4,
      ask: `{under} the table: three coins, one sock, and a pudding cup. ...SISTER.` },
    { word: 'find', type: 'talk', npc: 'cat', stage: 5,
      ask: `Fish-Thief can {find} anything, bud. Found the fish, didn't he? Point him at the chaos and stand back.` },
    { word: 'help', type: 'talk', npc: 'dad', stage: 6,
      ask: `Dad offers to {help}. By supervisin'. From the sofa. Horizontal. With his eyes shut. Real hands-on, that one.` },
    { word: 'wash', type: 'buy', item: 'a mega wash bundle', stage: 7,
      ask: `Out of soap! One mega-{wash} bundle, please. It's a WAR ZONE back there, I'm not exaggeratin'.` }
  ],
  stageToasts: {
    1: `🧹 Mom's assigned zones. Yours: your own disaster. Start with the bed, bud.`,
    2: `📦 Somethin' dusty up on the bookshelf... reach for it...`,
    3: `📸 Old photos?! A race? A MEDAL? File that mystery away — mom's hollerin' about the kitchen.`,
    4: `🍮 Now the legendary under-the-table zone. Brace yourself.`,
    5: `🐾 Ya need a professional finder. Ya need... the cat.`,
    6: `🛋️ Dad's been suspiciously quiet. Investigate the sofa.`,
    7: `🧼 Final boss: the soap ran out. To the store!`
  },
  npcLines: {
    trinity: [
      `I organized my side in twenty minutes, bud. Your side's a museum of mysteries.`,
      `If ya {find} my missin' earring in there, I'll forgive the pudding cup. That's the deal.`
    ],
    mom: [
      `The house does not clean itself. I checked. For twenty years I checked.`,
      `Whoever owns that pudding cup has 'til sundown to confess. The clock's runnin'.`
    ],
    dad: [
      `I'm not nappin'. I'm pressure-testin' the sofa. Somebody's gotta do it, bud.`,
      `In my day we cleaned with VIGOR. ...I'll demonstrate right after this little rest.`
    ],
    sister: [
      `I know nothin' about any pudding cup. Prove it. Ya can't. Nobody can.`,
      `My {room}'s technically an art installation, bud. You wouldn't get it.`
    ],
    friend: [
      `Cleanin' day?! Blink twice and I'll fake an emergency to bust ya outta there.`,
      `I found a sandwich under MY bed one time. We don't talk about how old it was. We just don't.`
    ],
    shopkeeper: [
      `Cleanin' day at your place? Yeah, I know — your mom bought ALL my sponges at dawn. Cleaned me right out.`,
      `The mega-{wash} bundle comes with a free prayer. You're gonna need the both of 'em.`
    ],
    trainer: [
      `Scrubbin' is squats for the SOUL, bud. Feel the burn in your standards!`,
      `I clean the gym mirrors every day. Clear mirror, clear mind, clear flex. It's all connected.`
    ],
    boss: [
      `Cleanin' day, huh? My desk's got strata. Geologists asked to study it once. I said no.`,
      `Take the day. A clean house is worth two productive Mondays. Don't you quote me on that.`
    ],
    coworker: [
      `I cleaned my desk one time. Found three staplers. None of 'em mine. No further questions, bud.`,
      `Gerald the plant judges dust levels. He rates your house "concerning". His words, not mine.`
    ],
    oldman: [
      `Spring {cleaning}... the pigeons do it too, ya know. They just move over to a different statue.`,
      `Check every old {box} twice, bud. The past likes to hide down in 'em.`
    ],
    cat: [
      `Fish-Thief bats a dust ball clear across the floor. He's helpin'. That's what he's callin' it.`,
      `Mrrp. (He's located the missin' sock. He's now sittin' on it. It's his now.)`
    ]
  }
},

/* ============================== EP 12 ============================== */
{
  ep: 12,
  title: '第12話 「妹の試験」 — Sister\'s Big Test',
  words: ['little sister', 'school', 'teacher', 'study', 'exam', 'pencil', 'head', 'difficult'],
  story:
    `A scream from the kitchen — not a fire, worse: your {little sister} just remembered the {exam}. Tomorrow. The big ` +
    `one. "I know NOTHIN'," she wails, face-down in her textbook. Tonight the whole family mobilizes — operation {study} ` +
    `is a go, bud. Snacks are strategic. Phones get confiscated. And somebody's gotta go acquire the legendary lucky {pencil}...`,
  timerSec: 300,
  quests: [
    { word: 'little sister', type: 'talk', npc: 'sister', stage: 0,
      ask: `Your {little sister}'s gone pale. "The exam. TOMORROW. I've got the knowledge of a soup spoon, bud. A SPOON."` },
    { word: 'school', type: 'talk', npc: 'friend', stage: 1,
      ask: `Remember {school}? I peaked there, your friend says, real proud. ...Wait. That's deeply sad, bud. Anyway — go help her!` },
    { word: 'teacher', type: 'talk', npc: 'trainer', stage: 2,
      ask: `The coach is ALSO a {teacher}?! "Mathematics of GAINS." Somehow... it checks out. He offers a study plan. It involves lunges.` },
    { word: 'study', type: 'talk', npc: 'sister', stage: 3,
      ask: `Operation {study}: snacks deployed, phone confiscated, despair contained. She glares at ya. Then she begins.` },
    { word: 'pencil', type: 'buy', item: 'the lucky pencil', stage: 4,
      ask: `One lucky {pencil}, please! The LUCKIEST one ya got. This is a matter of family honor, bud, don't skimp.` },
    { word: 'exam', type: 'inspect', obj: 'clock', stage: 5,
      ask: `The {exam}'s in fourteen hours. The clock ticks. Loud. Menacing. Judgin' ya, honestly.` },
    { word: 'head', type: 'talk', npc: 'mom', stage: 6,
      ask: `Mom taps her {head}: "It's all in there. It just needs SLEEP to stick." Science-mom has spoken. Don't argue with science-mom.` },
    { word: 'difficult', type: 'talk', npc: 'boss', stage: 7,
      ask: `The boss nods, real sage: "Exams are {difficult}. But she's got your stubbornness." ...Was that a compliment? It was. Take it and run.` }
  ],
  stageToasts: {
    1: `📚 She needs backup. Rally the town — start with your definitely-wise friend.`,
    2: `💪 Wait — the coach TEACHES? Investigate this immediately, bud.`,
    3: `✏️ Time to set up study camp at home. Snacks are load-bearing.`,
    4: `🍀 She demands the lucky pencil. The store. GO. Luck waits for nobody.`,
    5: `⏰ How much time's actually left? ...Don't look at the clock. Ya looked at the clock.`,
    6: `🧠 Mom's got opinions about brains and sleep. Mom's always right.`,
    7: `🏢 One more pep talk from an unexpected source...`
  },
  npcLines: {
    trinity: [
      `I made her a study playlist. 40% focus music, 60% victory songs. For after, ya know.`,
      `If she passes, we celebrate. If not, we ALSO celebrate, but quiet, with pudding.`
    ],
    mom: [
      `I raised two students, bud. One studied. Guess which one's panickin' today.`,
      `Brain food's incomin': fish, rice, and absolutely no {difficult} conversations at dinner. None.`
    ],
    dad: [
      `I passed an {exam} on three hours of sleep one time. Also wrote my own name wrong. It all balances out, bud.`,
      `Tell her: pencils down means HANDS DOWN. I learned that one the hard way. Don't ask.`
    ],
    sister: [
      `WHY did they go and invent history?! It ALREADY HAPPENED! Let it GO, bud!`,
      `Okay. OKAY. I know two things now. That's two more than this mornin'. That's GROWTH.`
    ],
    friend: [
      `I believe in her! I once guessed my way to a 71! The system can be BEATEN, bud!`,
      `Tell her rule one of {school}: the answer's C. When in doubt: C. Trust me on this.`
    ],
    shopkeeper: [
      `The lucky {pencil} shelf. Passed down through generations. Well — restocked Tuesdays. Same thing, really.`,
      `Her mother bought a lucky pencil here too, once. Passed with flyin' colors. TRUE story, bud.`
    ],
    trainer: [
      `The mind's a muscle!! REPS! Vocabulary REPS! FLASHCARD SUPERSETS! Let's GO!`,
      `Before the exam: breathe in for four, out for four. Works for lifts, works for life, bud.`
    ],
    boss: [
      `Exams end. Spreadsheets are forever. Tell her there's comfort in that. Somewhere. There's gotta be.`,
      `I still dream about one exam from thirty years back. In the dream I'm also not wearin' shoes. Don't know why.`
    ],
    coworker: [
      `The trick's writin' SOMETHIN' for every question. Confidence. Volume. Prayer. That's the order.`,
      `I studied with Gerald one time. The plant passed. I did not. We don't discuss it.`
    ],
    oldman: [
      `Tell the young one: the {exam}'s one day. The learnin's forever. Also: answer C. Always C.`,
      `I never took exams, bud. The bread judged ya instantly. Much more honest, that.`
    ],
    cat: [
      `Fish-Thief sits square on the textbook. This is either support or sabotage. Possibly the both of 'em.`
    ]
  }
},

/* ============================== EP 13 ============================== */
{
  ep: 13,
  title: '第13話 「トリニティの風邪」 — Trinity\'s Cold',
  words: ['sick', 'fever', 'doctor', 'medicine', 'warm', 'tea', 'sleep', 'early'],
  story:
    `Trinity's {sick}. "I ab fide," she says, nose glowin' red. She is not fide, bud. She's got a {fever}, a blanket ` +
    `fortress, and a to-do list she keeps tryin' to escape the futon to finish. Today YOU're the responsible one — soup, ` +
    `{medicine}, {tea}, and keepin' one very stubborn patient in bed. May fortune favor ya. She bites.`,
  timerSec: 300,
  quests: [
    { word: 'sick', type: 'talk', npc: 'trinity', stage: 0,
      ask: `Trinity's {sick}. "I ab fide. I hab a MEEDING." Ya gently push her back into the blankets. There's hissin'.` },
    { word: 'fever', type: 'inspect', obj: 'bed', stage: 1,
      ask: `A {fever}! The futon's become a fortress of blankets. She's now a very warm, very grumpy burrito, bud.` },
    { word: 'doctor', type: 'talk', npc: 'boss', stage: 2,
      ask: `The boss waves ya off work: "GO. Call the {doctor} on Fourth Street — tell him Kenji sent ya." ...Who in the hell is Kenji?!` },
    { word: 'medicine', type: 'buy', item: 'the works', stage: 3,
      ask: `The {medicine} aisle. Shopkeeper's already got a bag packed. "I heard. Towns talk. Tissues are on me, bud."` },
    { word: 'warm', type: 'inspect', obj: 'stove', stage: 4,
      ask: `Soup duty. Keep it {warm}, stir it slow — mom's recipe demands EXACTLY seventeen stirs. Not sixteen. Seventeen.` },
    { word: 'tea', type: 'talk', npc: 'mom', stage: 5,
      ask: `Mom presses {tea} into your hands: "Ginger. Honey. No arguments." The mug's the size of a small bathtub.` },
    { word: 'sleep', type: 'talk', npc: 'cat', stage: 6,
      ask: `Fish-Thief curls up beside her. Official {sleep} supervisor, reportin' for duty. The purr's medicinal. It's SCIENCE, bud.` },
    { word: 'early', type: 'talk', npc: 'trinity', stage: 7,
      ask: `She finally smiles, all drowsy: "Wake me {early}? Don't wanna miss tomorrow." Ya won't wake her early. Ya both know it.` }
  ],
  stageToasts: {
    1: `🤒 She tried to leave for a meetin'. THROUGH THE WINDOW. Contain the patient!`,
    2: `📞 Work needs to know you're out today. The boss'll understand. Probably.`,
    3: `💊 Supply run! Medicine, tissues, and those little jellies she likes.`,
    4: `🍲 Soup protocol: mom's recipe. Seventeen stirs. The number's not up for debate.`,
    5: `🍵 Mom's intercepted ya with tea. Resistance is pointless, bud.`,
    6: `😴 The patient refuses to nap. Deploy the secret weapon. Deploy the cat.`,
    7: `🌙 She's finally settlin'. One last check-in...`
  },
  npcLines: {
    trinity: [
      `I ab nod dying, I ab simbly INCONVENIENCED, bud.`,
      `@6 ...okay the cat's very warm and I'm very sleeby. You win this round.`
    ],
    mom: [
      `Feed a cold, feed a {fever}, feed everything. Feedin's the answer, bud. This is medicine.`,
      `When YOU were sick as a little one, ya cried unless somebody held your hand. Anyway. Tell Trinity.`
    ],
    dad: [
      `When I'm {sick}, I simply decide not to be. ...Your mother says that's not medicine. We disagree.`,
      `Bring her the good blanket. The GOOD one. Yeah, my blanket. I know. Go on.`
    ],
    sister: [
      `I made her a get-well card. Says GET WELL OR ELSE. It's motivational, bud.`,
      `Is she contagious? Askin' 'cause I got an exam I could catastrophically miss.`
    ],
    friend: [
      `I brought seven kinds of jelly! Nobody knows which kind sick people like! COVERAGE, bud!`,
      `Tell her the street misses her. Mostly me. Got scolded by nobody all day. Real weird feelin'.`
    ],
    shopkeeper: [
      `Ginger, honey, tissues, jellies — the Sick Day Special. I oughta make it a combo, honestly.`,
      `Your {grandma}? Not sick a day in her life, that one. The germs are scared of her. Verified.`
    ],
    trainer: [
      `Rest IS trainin', bud. Recovery reps! Tell her the coach said so. Doctor's orders. Coach's orders.`,
      `When the body says {sleep}, ya SLEEP. This is the one lift ya must not skip.`
    ],
    boss: [
      `Family first. The reports'll still be here tomorrow. Sadly. They're always here.`,
      `Kenji's the {doctor}. We go way back. The printer incident of 2019... he set my finger. No more questions.`
    ],
    coworker: [
      `Coverin' your desk today. Your plant-waterin' technique's flawed, by the way. Gerald agrees.`,
      `Soup tip: the secret ingredient's more soup. Works every time. ...I eat alone a lot, bud.`
    ],
    oldman: [
      `Warm {tea}, a warm cat, and somebody who stays. That's the whole {medicine}, young one.`,
      `The koi never catch colds. Enviable. Insufferable, honestly.`
    ],
    cat: [
      `Fish-Thief hasn't left her side in three hours. He accepts payment in chin scratches.`
    ]
  }
},

/* ============================== EP 14 ============================== */
{
  ep: 14,
  title: '第14話 「父の料理」 — Dad Cooks',
  words: ['cooking', 'kitchen', 'egg', 'salt', 'spicy', 'taste', 'sweet', 'plate'],
  story:
    `Mom's takin' a FULL day off — first one in years. Which means the {kitchen} now belongs to... dad. He's got an apron ` +
    `(backwards), confidence (misplaced), and a plan (none). "Today WE do the {cooking}!" he announces. "How hard can it ` +
    `be?" Somewhere, twelve {egg}s tremble. The rice'll be {spicy}. Nobody knows how, bud. Not even the rice.`,
  timerSec: 300,
  quests: [
    { word: 'cooking', type: 'talk', npc: 'dad', stage: 0,
      ask: `Dad, apron backwards, ladle raised: "Today WE do the {cooking}! How hard can it be?" Famous. Last. Words.` },
    { word: 'kitchen', type: 'inspect', obj: 'stove', stage: 1,
      ask: `The {kitchen}'s a laboratory now. Steam. Sparks? WHY sparks. There should not be sparks in soup, bud.` },
    { word: 'egg', type: 'buy', item: 'another dozen eggs', stage: 2,
      ask: `More {egg}s, please. Don't ask what happened to the first twelve. DO NOT ASK.` },
    { word: 'salt', type: 'inspect', obj: 'table', stage: 3,
      ask: `The {salt}... or was it sugar? Dad used "some of each, for balance." That's not how balance works, dad.` },
    { word: 'spicy', type: 'talk', npc: 'sister', stage: 4,
      ask: `Sister, tears streamin', thumbs up: "It's SO {spicy}. WHY is the RICE spicy?! HOW is the rice spicy, bud?!"` },
    { word: 'taste', type: 'talk', npc: 'cat', stage: 5,
      ask: `Fish-Thief sniffs the pot ONCE and resigns from the {taste}-testin' committee. Effective immediately. In writin'.` },
    { word: 'sweet', type: 'talk', npc: 'shopkeeper', stage: 6,
      ask: `EMERGENCY. Somethin' {sweet} to defuse a spicy disaster — the shopkeeper hands ya honey without a single question. A professional.` },
    { word: 'plate', type: 'buy', item: 'paper plates', stage: 7,
      ask: `Paper {plate}s. We surrender, bud. The sink's won. The sink took prisoners.` }
  ],
  stageToasts: {
    1: `👨‍🍳 Sounds from the kitchen. Concerning sounds. Investigate.`,
    2: `🥚 The egg situation is... total. Store run, quick!`,
    3: `🧂 Somethin's wrong with the flavor. Somethin' FUNDAMENTAL. Check the table.`,
    4: `🌶️ Your sister's taken one bite. Her soul briefly left her body. Go check on her.`,
    5: `🐟 Get an unbiased opinion. Get the professional. Get the cat.`,
    6: `🍯 Fix it with sweetness — the shopkeeper'll know what to do.`,
    7: `🍽️ Final stage of grief: paper plates. Buy the surrender.`
  },
  npcLines: {
    trinity: [
      `I ate a bite to be polite. Been drinkin' milk for ten minutes since. Send more milk, bud.`,
      `Your dad's havin' the TIME OF HIS LIFE in there. Don't you dare take this away from him.`
    ],
    mom: [
      `I'm on my day off. I see nothin'. I smell nothin'. I'm at PEACE. ...Is that smoke?`,
      `He cooked for me once, when we were young. It's why we ate out for three years straight.`
    ],
    dad: [
      `The secret ingredient's COURAGE, bud. And apparently too much of somethin' else.`,
      `Chefs on TV never measure! They FEEL it! I FELT it! I felt... somethin' burnin'.`
    ],
    sister: [
      `My tongue's transcended. I can hear colors now. The rice... the rice was a WEAPON, bud.`,
      `I'm orderin' backup noodles. This isn't betrayal. This is SURVIVAL.`
    ],
    friend: [
      `Your dad's cookin'?! I'll be there in five minutes. This is HISTORY, bud. I'm bringin' a camera.`,
      `One time my dad grilled a whole fish into a new element. Dads and heat, man. Dads and heat.`
    ],
    shopkeeper: [
      `Third visit today from your household. I've started a bettin' pool on dinner's survival, bud.`,
      `Honey fixes {spicy}. Milk fixes worse. Prayer fixes the rest. Aisle three, all of it.`
    ],
    trainer: [
      `A {spicy} meal's CARDIO for the mouth! Your dad's basically a personal trainer now.`,
      `Tell him: even failed reps build muscle, bud. Even failed rice builds... character? Somethin'?`
    ],
    boss: [
      `My own father cooked exactly once. We still call it The Incident. Cherish this day.`,
      `If he made too much, I accept donations. My standards died in the printer war, bud.`
    ],
    coworker: [
      `Spicy rice is impossible. I checked with Gerald. Even the plant's confused.`,
      `Paper plates are civilization's greatest honesty. Respect the surrender.`
    ],
    oldman: [
      `A man who cooks with his whole heart burns with his whole heart. Beautiful. Tragic. Delicious? No.`,
      `In 1964 I cooked for four hundred people, bud. The bread, yes. The soup... we do not speak of the soup.`
    ],
    cat: [
      `Fish-Thief's eatin' his regular food with LOUD, pointed enthusiasm. It's a statement.`
    ]
  }
},

/* ============================== EP 15 ============================== */
{
  ep: 15,
  title: '第15話 「猫はどこへ？」 — Where Does the Cat Go?',
  words: ['outside', 'listen', 'voice', 'see', 'worry', 'come', 'friend', 'happy'],
  story:
    `Every night, the same mystery: Fish-Thief slips {outside} after dinner. Every mornin': back on the futon, smug, ` +
    `faintly smellin' of pond. Where does he GO, bud? Tonight, the family demands answers. Operation Follow-That-Cat is ` +
    `live. {listen} for the bell, move quiet, and get ready for a secret absolutely nobody saw comin'.`,
  timerSec: 300,
  quests: [
    { word: 'outside', type: 'talk', npc: 'sister', stage: 0,
      ask: `Every night he goes {outside}! ALONE! Where?! I checked his bandana for receipts. NOTHIN', bud.` },
    { word: 'listen', type: 'talk', npc: 'trinity', stage: 1,
      ask: `{listen} tonight, okay? whispers Trinity. Tiny bell. Tiny footsteps. BIG secrets. I can feel it in my bones.` },
    { word: 'voice', type: 'inspect', obj: 'window', stage: 2,
      ask: `Through the window — a tiny {voice}! Meowin'! But hang on... that's TWO meows. TWO?!` },
    { word: 'see', type: 'do', loc: 'street', verb: 'walk', amount: 500, stage: 3,
      ask: `Follow him! Try to {see} where he turns — he's shockin'ly fast for a snack enthusiast.` },
    { word: 'worry', type: 'talk', npc: 'mom', stage: 4,
      ask: `Mom laughs at your {worry}: "He's a cat, not a salaryman." Then quietly hands ya cat snacks. For the road. Just in case.` },
    { word: 'come', type: 'talk', npc: 'oldman', stage: 5,
      ask: `The old man nods, real slow: "He {come}s every night. Sits by the pond. Watches the koi. We talk." ...THEY TALK?!` },
    { word: 'friend', type: 'talk', npc: 'friend', stage: 6,
      ask: `Turns out your cat's best {friend} is... THE KOI. All of 'em. There's meetings, bud. There's an attendance record.` },
    { word: 'happy', type: 'talk', npc: 'cat', stage: 7,
      ask: `Back home, Fish-Thief looks deeply {happy} and slightly damp. His secret's safe with you. And the koi. And the pigeons, obviously.` }
  ],
  stageToasts: {
    1: `🕵️ The family assembles. Tonight, we follow the cat.`,
    2: `🔔 Hear that? The bell! He's on the move — to the window!`,
    3: `👀 TWO meows?! Follow him down the street — quiet now! QUIET!`,
    4: `🥡 Mom seems suspiciously calm about all this. Consult her.`,
    5: `🌙 The trail leads to the park. Somebody there knows somethin'. Somebody always does.`,
    6: `🐟 The old man said WHAT. Confirm this with a witness immediately.`,
    7: `🏠 Mystery solved. Go home and confront your damp, smug cat.`
  },
  npcLines: {
    trinity: [
      `A cat with a night life richer than ours. I'm not even mad, bud. I'm IMPRESSED.`,
      `@6 Koi meetings. KOI MEETINGS. We're gettin' him a tiny briefcase. It's decided.`
    ],
    mom: [
      `All my kids sneak out eventually. He's just the furriest one.`,
      `He always comes home. That's the whole secret of family, really, bud.`
    ],
    dad: [
      `A cat needs his mystery. A man needs his sofa. We understand each other, that cat and me.`,
      `@6 The fish are his FRIENDS?! He STOLE a fish to MEET the fish?! Diabolical. ...Respect, though.`
    ],
    sister: [
      `If he's got a secret family I'll actually cry. He's MY secret family.`,
      `@6 I'm makin' the koi friendship bracelets. Tiny ones. For their fins. Don't stop me, bud.`
    ],
    friend: [
      `A STAKEOUT?! I got binoculars and three sandwiches. I was BORN for tonight.`,
      `One meow means hello. Two means trouble. Three means snacks. I speak fluent cat. Mostly, bud.`
    ],
    shopkeeper: [
      `The little criminal passes my shop every night at nine sharp. Punctual as taxes.`,
      `@6 Him and the koi?! Ohh, the pond drama I've MISSED. Tell me everything. Slow now.`
    ],
    trainer: [
      `A nightly walk to the pond? That cat's got better trainin' discipline than most humans, bud.`,
      `The koi are excellent swimmers. 'Course he studies 'em. He's cross-trainin'.`
    ],
    boss: [
      `Even the cat's got an evenin' routine. Meanwhile I'm answerin' emails at midnight. Enviable.`,
      `Follow-That-Cat sounds better than most of our quarterly initiatives, honestly.`
    ],
    coworker: [
      `Your cat networks at night. YOUR CAT NETWORKS. Gerald and me are re-evaluatin' everything.`,
      `Two meows at the window's either a friend or a scheme. With him? Both. Always both, bud.`
    ],
    oldman: [
      `He's good company. Better listener than most people. The koi vouch for him.`,
      `Everyone needs a pond to visit at night. Yours might be a person. Think on it, bud.`
    ],
    cat: [
      `Fish-Thief grooms a paw with the calm of somebody whose alibi's airtight.`
    ]
  }
},

/* ============================== EP 16 ============================== */
{
  ep: 16,
  title: '第16話 「おばあちゃん登場」 — Grandma Arrives',
  words: ['letter', 'family', 'meet', 'arrive', 'bag', 'souvenir', 'stay', 'grandma'],
  story:
    `A {letter} drops through the door: "Arrivin' today. Make room. Bring muscles. — Grandma." The house detonates into ` +
    `panic — the good towels! The best chair! Mom's SPRINTIN'. But when ya finally go to {meet} her out at the street... ` +
    `she's already here, bud. In the best chair. Drinkin' tea. "The letter was slow," she says. HOW. That photo from the ` +
    `dusty box suddenly makes a whole lot more sense.`,
  timerSec: 330,
  quests: [
    { word: 'letter', type: 'inspect', obj: 'door', stage: 0,
      ask: `A {letter} in the door: "Arrivin' today. Make room. Bring muscles. — Grandma." It's dated YESTERDAY.` },
    { word: 'family', type: 'talk', npc: 'mom', stage: 1,
      ask: `{family}'s comin'!! Mom sprints past with towels. "THE GOOD ONES! WHERE ARE THE GOOD ONES?!"` },
    { word: 'meet', type: 'talk', npc: 'grandma', stage: 2,
      ask: `Ya go to {meet} her and— she's ALREADY HERE. Best chair. Tea. "The letter was slow," she says. HOW, bud?!` },
    { word: 'arrive', type: 'talk', npc: 'trinity', stage: 3,
      ask: `Trinity whispers: "WHEN did she {arrive}?! I checked that chair five minutes ago!" Nobody knows. Nobody'll EVER know.` },
    { word: 'bag', type: 'talk', npc: 'dad', stage: 4,
      ask: `Dad hauls the {bag} upstairs, wheezin': "What's IN this?! BRICKS?!" Grandma: "Preserves." It's bricks of preserves.` },
    { word: 'souvenir', type: 'talk', npc: 'grandma', stage: 5,
      ask: `A {souvenir} for everyone! Pickles for mom, socks for dad, CASH for sister (unfair), and for you... a tiny cat charm. She knows things.` },
    { word: 'stay', type: 'talk', npc: 'trinity', stage: 6,
      ask: `She's gonna {stay} two whole weeks! Trinity's DELIGHTED. Grandma already calls her "my girl". You're officially outnumbered, bud.` },
    { word: 'grandma', type: 'talk', npc: 'grandma', stage: 7,
      ask: `Your {grandma} settles in like a returnin' queen. "Now," she says, crackin' her knuckles, "who wants to lose at cards?"` }
  ],
  stageToasts: {
    1: `💌 That letter's thrown the house into DEFCON GRANDMA. Find mom.`,
    2: `🏃 To the street to meet her— wait. Wait, do ya hear tea bein' poured?`,
    3: `🍵 SHE'S ALREADY INSIDE. Physics has questions. Trinity's got more.`,
    4: `🧳 The legendary bag's arrived separately. Dad's losin' to it.`,
    5: `🎁 Souvenir ceremony! Line up! Sister's somehow first! Typical!`,
    6: `📅 Two weeks. TWO WEEKS. Discuss the new world order with Trinity.`,
    7: `👑 The queen's settled. Pay your respects. Prepare to lose at cards.`
  },
  npcLines: {
    trinity: [
      `Your grandma just told me I've got "good bones and better sense". I'd DIE for her, bud.`,
      `She beat me at cards in four minutes. FOUR. She shuffled like a casino dealer.`
    ],
    mom: [
      `That's MY mother. Now ya understand everything about me. EVERYTHING.`,
      `She reorganized my {kitchen} in an hour. It's... better. I hate that it's better.`
    ],
    dad: [
      `Your grandmother beat me at arm wrestlin' once. I was thirty. I let her win. (I did not.)`,
      `The preserves bricks are actually delicious. Don't tell her I doubted the {bag}, bud.`
    ],
    sister: [
      `Grandma gave me CASH and called me her favorite. This is the best {day} of my life.`,
      `She knew about the pudding cup. SHE WASN'T EVEN HERE. HOW DID SHE KNOW.`
    ],
    friend: [
      `Your grandma waved at me from the window and I stood up straighter. Pure INSTINCT, bud.`,
      `Is it true she got here before her own letter? The street's BUZZIN'.`
    ],
    shopkeeper: [
      `Ohh, SHE's back in town. Lock up your card tables. I say that with love and with fear.`,
      `She bought rice, vinegar, and "the good secrets". We talked an hour. I said maybe six words.`
    ],
    trainer: [
      `That grip when she shook my hand... decades of kneadin'? Farm work? RESPECT, bud.`,
      `She asked my max squat, nodded, and said "not bad". I'll treasure it forever.`
    ],
    boss: [
      `Grandmothers are upper management of the family. Don't be fooled by the knittin'.`,
      `Mine could silence a room with one eyebrow. Still use her technique in meetings.`
    ],
    coworker: [
      `A relative who arrives before her own letter? That's logistics genius. Hire her.`,
      `Gerald perked up when she walked past the window. Even the PLANT knows, bud.`
    ],
    oldman: [
      `So... she's returned. We were young here once, your grandmother and me. Ask her about 1971 sometime.`,
      `The pigeons remember her. They've formed an honor guard. Look up.`
    ],
    cat: [
      `Fish-Thief took one look at Grandma and rolled clean over. Instant allegiance. Traitor.`
    ]
  }
},

/* ============================== EP 17 ============================== */
{
  ep: 17,
  title: '第17話 「フリーマーケット」 — The Flea Market',
  words: ['thing', 'sell', 'clock', 'picture', 'man', 'half', 'interesting', 'best'],
  story:
    `Flea market day! The whole street turns into one long bazaar of dusty treasures and questionable pricin'. Sister's ` +
    `got a stall to sell "vintage collectibles" (it's your stuff — it's LITERALLY your stuff from cleanin' day). Grandma ` +
    `came to haggle, and the vendors are already scared. Somewhere between the old clock and a childhood picture, this ` +
    `day's about to get interesting, bud.`,
  timerSec: 300,
  quests: [
    { word: 'thing', type: 'talk', npc: 'shopkeeper', stage: 0,
      ask: `Flea market day!! "Sell your old {thing}s, buy new old things — the great circle of STUFF!" She's radiant. This is her Olympics, bud.` },
    { word: 'sell', type: 'talk', npc: 'sister', stage: 1,
      ask: `Sister's stall's gonna {sell} "vintage collectibles"... wait. That's your stuff. That's LITERALLY your stuff from cleanin' day!` },
    { word: 'clock', type: 'inspect', obj: 'clock', stage: 2,
      ask: `Somebody offers big money for the old {clock}. Grandma materializes: "THAT stays." It stays. It'll always stay.` },
    { word: 'picture', type: 'inspect', obj: 'bookshelf', stage: 3,
      ask: `Sister's childhood {picture}, age six: "My Family". Stick figures. One's clearly the cat. Somebody offers 50 yen. NOT. FOR. SALE.` },
    { word: 'man', type: 'talk', npc: 'friend', stage: 4,
      ask: `A {man} in a suit asked if the CAT's for sale!! Your friend's vibratin' with outrage. "NOBODY's for sale. Except the collectibles."` },
    { word: 'half', type: 'talk', npc: 'shopkeeper', stage: 5,
      ask: `End of day: everything {half} price! The shopkeeper wipes a tear. "Commerce is emotional." A moment of silence for the margins.` },
    { word: 'interesting', type: 'talk', npc: 'grandma', stage: 6,
      ask: `Grandma examines a vase, says only "...{interesting} price," and the vendor lowers it TWICE outta pure instinct. A master at work, bud.` },
    { word: 'best', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Trinity beams over her find: a tiny velvet ring box. Empty. "{best} fifty yen I ever spent!" ...Your heart stops. Does she know? SHE CANNOT KNOW.` }
  ],
  stageToasts: {
    1: `🏷️ Stalls everywhere! Wait — why's that one stall look so familiar...`,
    2: `⏰ A buyer's circlin' the old clock. Grandma's entered attack posture.`,
    3: `🖼️ Sister's quietly hidin' one item from her own stall. Investigate.`,
    4: `🕴️ Commotion! A suspicious suit's makin' a suspicious offer!`,
    5: `💸 The half-price hour arrives. Chaos, but organized.`,
    6: `🏺 Grandma's begun hagglin'. Vendors are experiencin' weather.`,
    7: `💍 Trinity found somethin'. She's very pleased. You're very pale.`
  },
  npcLines: {
    trinity: [
      `I love markets. Every object's a little story with a price tag on it.`,
      `I put the little box on the shelf at home. For "someday". What? It's CUTE, bud.`
    ],
    mom: [
      `I sold your father's "exercise machine". He noticed nothin'. He'll never notice.`,
      `Grandma's been circlin' the pickle stall for an hour. The vendor looks pale. Pray for him.`
    ],
    dad: [
      `Anyone seen my exercise machine? ...Anyway, look at this AMAZIN' lamp shaped like a fish!`,
      `The rule of markets, bud: ya come for nothin', ya leave with a fish lamp. It's the law.`
    ],
    sister: [
      `Everything must go! Especially things that were free to acquire! Business is BOOMIN'!`,
      `The family picture's not for sale. Never was for sale. Stop askin'. I will bite.`
    ],
    friend: [
      `I bought a mystery box! Could be ANYTHIN'! ...It's rocks. It's a box of rocks. WORTH IT, bud.`,
      `That suit guy's still lurkin'. I'm watchin' him. Haven't blinked less in my whole life.`
    ],
    shopkeeper: [
      `Today, EVERYONE's a shopkeeper. And now they all understand my pain. GLORIOUS.`,
      `That old {clock} of yours? Worth more than my whole shelf. Grandma's right to guard it.`
    ],
    trainer: [
      `I'm sellin' old dumbbells! "Pre-loved iron"! Marketing's just liftin' with words, bud!`,
      `Bought a jump rope for {half} price. The economy of GAINS is thrivin'.`
    ],
    boss: [
      `I collect old clocks, actually. But I'd never dare bid against your grandmother. I like bein' alive.`,
      `The office should do a flea market. I could finally sell the printer. Legally? Unclear.`
    ],
    coworker: [
      `I sold three staplers. None of 'em mine to sell. The circle completes itself, bud.`,
      `Gerald got a new pot. Vintage ceramic. He's never looked more distinguished.`
    ],
    oldman: [
      `I traded a trophy for rice at a market like this once. Best deal of my life. The rice fed forty people.`,
      `Every old {thing} here outlived its first owner's attention, bud. Be kind to the old things.`
    ],
    cat: [
      `Fish-Thief sat on the "SOLD" sign all day. Nothin' under him was for sale. He knew.`
    ]
  }
},

/* ============================== EP 18 ============================== */
{
  ep: 18,
  title: '第18話 「停電の夜」 — The Blackout',
  words: ['electricity', 'dark', 'scary', 'quiet', 'speak', 'game', 'snacks', 'bright'],
  story:
    `The TV dies mid-drama — right before the confession scene, bud. The {electricity}'s out. The WHOLE street. Even the ` +
    `vendin' machines are asleep. The house goes {dark}, the town goes {quiet}, and somehow... it turns into the best ` +
    `night of the month. Candles, ghost stories, board {game}s by flashlight — and Grandma, who's INEXPLICABLY prepared ` +
    `for all of this.`,
  timerSec: 300,
  night: true,
  quests: [
    { word: 'electricity', type: 'inspect', obj: 'tv', stage: 0,
      ask: `The TV dies mid-CONFESSION. The {electricity}'s out everywhere. The drama gods are cruel tonight, bud.` },
    { word: 'dark', type: 'inspect', obj: 'lamp', stage: 1,
      ask: `So {dark}... the little lamp's useless. Wait. Grandma's ALREADY holdin' lit candles. Already. HOW.` },
    { word: 'scary', type: 'talk', npc: 'sister', stage: 2,
      ask: `Sister: "I'm not {scary}-scared, I'm ambiance-concerned." A floorboard creaks. She teleports behind mom.` },
    { word: 'quiet', type: 'inspect', obj: 'window', stage: 3,
      ask: `So {quiet} without the hum of everything... ya can hear the whole town breathin'. And the pigeons gossipin'.` },
    { word: 'speak', type: 'talk', npc: 'grandma', stage: 4,
      ask: `Ghost story time. Grandma {speak}s in a low voice that makes DAD hide behind mom. "The girl in the rice field was never seen again..."` },
    { word: 'game', type: 'talk', npc: 'friend', stage: 5,
      ask: `Your friend bursts in with flashlights and board {game}s: "BLACKOUT PARTY! I've trained for this my WHOLE LIFE, bud!"` },
    { word: 'snacks', type: 'buy', item: 'emergency rations', stage: 6,
      ask: `The store's runnin' on candlelight and exact change tonight. ALL the {snacks}, please. Official party rations!` },
    { word: 'bright', type: 'talk', npc: 'trinity', stage: 7,
      ask: `The lights BURST back on. Everyone groans — too {bright}! Grandma wins the last hand by candlelight anyway. ...Suspiciously.` }
  ],
  stageToasts: {
    1: `🕯️ Total darkness. Find a light source — any light source!`,
    2: `👻 A creak in the dark. Your sister's got opinions about it.`,
    3: `🌙 Step to the window. The whole town's gone still...`,
    4: `🐉 Grandma clears her throat. Story time. Attendance mandatory.`,
    5: `🎲 A knock at the door?! Who wanders in a blackout— oh. 'Course it's him.`,
    6: `🍿 A party needs provisions. The store's runnin' on candles — go!`,
    7: `💡 Somethin' flickers... is it comin' back?`
  },
  npcLines: {
    trinity: [
      `The drama was JUST gettin' to the confession. The universe owes me an endin', bud.`,
      `Candlelight suits this family. Everyone looks 20% more mysterious. 'Specially the cat.`
    ],
    mom: [
      `No {electricity} means no chores. I've been freed. FREED, bud.`,
      `We used to do this every summer storm when I was small. Grandma always had candles then too.`
    ],
    dad: [
      `I'm not scared of the story. I'm strategically positioned behind your mother. Tactics.`,
      `A blackout's just the world sayin': talk to each other. ...Or nap. I hear both, bud.`
    ],
    sister: [
      `Okay the rice field story ENDED me. I live behind mom now. Forward my mail.`,
      `Flashlight under the chin makes everything 300% scarier. Grandma didn't need it. NOTED.`
    ],
    friend: [
      `I got SEVENTEEN flashlights, bud. My time is NOW.`,
      `Blackout rule one: whoever holds the light makes the rules. I AM THE LIGHT KEEPER.`
    ],
    shopkeeper: [
      `Sellin' by candlelight! Very romantic! Very hard to count change! Round numbers only tonight!`,
      `The {snacks} shelf's never emptied faster. Blackouts are excellent for business. Don't tell the power company.`
    ],
    trainer: [
      `No lights at the gym. I did squats in the dark, bud. The BURN doesn't need to SEE.`,
      `Night trainin' builds the senses! Also I walked into the mirror. Twice.`
    ],
    boss: [
      `No power means no email. This is the freest I've felt in a decade.`,
      `The office in a blackout's just a very expensive dark room. Sent everyone home to their families. Where they belong.`
    ],
    coworker: [
      `The printer's OFF. Truly off. Tonight it cannot hurt anyone. Sleep well, town.`,
      `I brought Gerald home before dark. Plants fear nothin', but I fear FOR him, bud.`
    ],
    oldman: [
      `When the lights go out, the stars come back to town. Look up. They missed ya.`,
      `The {quiet} isn't empty, young one. It's full. Listen a little longer.`
    ],
    cat: [
      `Fish-Thief's eyes glow in the candlelight. He's never felt more powerful.`
    ]
  }
},

/* ============================== EP 19 ============================== */
{
  ep: 19,
  title: '第19話 「マラソン大会」 — The Town Marathon',
  words: ['practice', 'socks', 'together', 'face', 'do your best', 'last', 'win', 'lose'],
  story:
    `Banners over the street: THE TOWN MARATHON IS SUNDAY. The coach has waited ALL YEAR for this. There's matchin' ` +
    `headbands. There's a trainin' montage planned. There's no escape, bud. Today ya {practice} on the newly opened Hill ` +
    `trail — everyone walks the {last} stretch and everyone lies about it. Grandma, disturbin'ly, mentions she "won this ` +
    `thing in 1971." WHAT.`,
  timerSec: 330,
  quests: [
    { word: 'practice', type: 'talk', npc: 'trainer', stage: 0,
      ask: `THE MARATHON'S SUNDAY!! Today we {practice}! The coach reveals matchin' headbands. There's no escape. There never was, bud.` },
    { word: 'socks', type: 'buy', item: 'the lucky flamingo socks', stage: 1,
      ask: `The coach INSISTS: lucky {socks}. "The 1998 champion wore this exact pattern." The pattern's flamingos. Aggressive flamingos.` },
    { word: 'together', type: 'talk', npc: 'friend', stage: 2,
      ask: `We run {together} or not at all!! ...Okay, revised plan: YOU run, I'll emotionally support from the snack table. TEAMWORK, bud.` },
    { word: 'face', type: 'inspect', obj: 'mirror', stage: 3,
      ask: `Practice your marathon {face} in the mirror. Determined. Fierce. Slightly constipated. "PERFECT," yells the coach.` },
    { word: 'do your best', type: 'talk', npc: 'grandma', stage: 4,
      ask: `Grandma pats your arm: "{do your best}. I won this race in 1971." ...The photo. The dusty box. THE MEDAL WAS HERS?!` },
    { word: 'last', type: 'do', loc: 'hill', verb: 'walk', amount: 700, stage: 5,
      ask: `The {last} stretch is the Hill. Everyone walks it. Everyone lies about walkin' it. Tradition since forever, bud.` },
    { word: 'win', type: 'talk', npc: 'boss', stage: 6,
      ask: `The boss, in FULL racin' gear: "I don't need to {win}. I need to beat ONE man: the printer guy from Branch Two." His eyes are fire.` },
    { word: 'lose', type: 'talk', npc: 'trainer', stage: 7,
      ask: `Ya didn't {lose}!! Second-to-last's a PODIUM OF THE HEART!! The coach is openly weepin'. A haiku's imminent. Brace, bud.` }
  ],
  stageToasts: {
    1: `🏃 Trainin' day! But first, the coach says, EQUIPMENT. To the store!`,
    2: `🦩 Flamingo socks acquired. Now rally your trainin' partner. Ha.`,
    3: `🪞 The coach demands ya develop a "race face". Gym mirror. Now.`,
    4: `🏅 Wait... Grandma just said somethin' IMPOSSIBLE. Follow up. IMMEDIATELY.`,
    5: `⛰️ The new Hill trail's open! Time for the famous last stretch.`,
    6: `🔥 The boss is stretchin' in the office in full spandex. Ya gotta know why.`,
    7: `🎽 Race day verdict's in. Find the coach. Bring tissues.`
  },
  npcLines: {
    trinity: [
      `I made ya a sign! Says RUN LIKE THE BREAD VAN IS LEAVIN'. Motivation's personal, bud.`,
      `@4 1971?! Your grandma?! The BOX! The PHOTO! Your family's full of SECRET LEGENDS!`
    ],
    mom: [
      `Hydrate. Stretch. And if the coach starts a chant, just go along with it. Trust me.`,
      `@4 Oh, mother's race? She never mentions it. She just polishes the medal every Sunday. Never mentions it.`
    ],
    dad: [
      `I ran it in 2009. Walked it in 2010. Perfected the snack-table strategy by 2011. Evolution, bud.`,
      `The trick to the Hill's simple: lie about it like everyone else. Family tradition.`
    ],
    sister: [
      `I'm sellin' homemade sports drinks at the finish line. "Sister's Lightning". Legally distinct from actual brands.`,
      `Grandma outran a HORSE?! That's the version I heard and I REFUSE to fact-check it.`
    ],
    friend: [
      `Snack table strategy meetin' at six! This is ALSO trainin'! CARBO-LOADIN' IS A SPORT, bud!`,
      `I believe in ya SO hard. From this chair. Right here. With this melon bread.`
    ],
    shopkeeper: [
      `Marathon week! I sell water, bananas, and regret-prevention (also bananas).`,
      `The flamingo {socks}? Third pair today. The coach's been... persuasive.`
    ],
    trainer: [
      `THE HILL IS NOT YOUR ENEMY. THE HILL IS YOUR TEACHER. A very steep teacher, bud.`,
      `My marathon haiku's ready. Seventeen syllables of PURE CARDIO. You will weep.`
    ],
    boss: [
      `Branch Two mocked our office relay in 2019. Sunday, we answer. SUNDAY, WE ANSWER.`,
      `I trained by takin' the stairs. All three of 'em. Every day. Champions are built, not born.`
    ],
    coworker: [
      `I entered the marathon as "emotional support staff". It's a real category if ya say it confidently.`,
      `Gerald's comin' to spectate. Made him a tiny flag. He seems thrilled. Hard to tell, honestly.`
    ],
    oldman: [
      `@4 So ya found out about 1971. She was LIGHTNING, your grandmother. The whole town chased her dust.`,
      `The pigeons run their own race that day. Shorter. More snack-focused. Wiser, honestly.`
    ],
    cat: [
      `Fish-Thief'll nap at the halfway point. For morale. His sacrifice is noted.`
    ]
  }
},

/* ============================== EP 20 ============================== */
{
  ep: 20,
  title: '第20話 「丘の上のプロポーズ」 — The Proposal on the Hill',
  words: ['ring', 'heart', 'say', 'precious', 'promise', 'laugh', 'cry', 'marriage'],
  story:
    `Three weeks. The {ring}'s been hidin' in your sock drawer for three weeks, and tonight's finally the night, bud. ` +
    `The fireworks festival lights up at nine. The Hill'll be glowin'. The whole town's somehow in on it — mom's pre-cryin', ` +
    `your friend's got cue cards, and one small cat's about to carry the most {precious} cargo of his criminal career. ` +
    `Breathe. BREATHE.`,
  timerSec: 330,
  night: true,
  quests: [
    { word: 'ring', type: 'inspect', obj: 'desk_bedroom', stage: 0,
      ask: `The {ring}. Three weeks in the sock drawer and ya didn't crack ONCE. Tonight. TONIGHT. Okay. Breathe.` },
    { word: 'heart', type: 'talk', npc: 'mom', stage: 1,
      ask: `Mom holds your face in both hands: "Your {heart} knew before you did." Then she starts cryin'. Backup cake's already in the oven. Guaranteed.` },
    { word: 'say', type: 'talk', npc: 'friend', stage: 2,
      ask: `Practice what to {say}! Your friend plays Trinity. He's TERRIBLE at it. Now he's cryin' too. This town runs on tears today.` },
    { word: 'precious', type: 'talk', npc: 'oldman', stage: 3,
      ask: `The old man, by the pond: "I asked my question right here, {long ago}. Make the moment {precious}... and remember to breathe, boy."` },
    { word: 'promise', type: 'talk', npc: 'cat', stage: 4,
      ask: `Ya tie the tiny box to Fish-Thief's bandana. "Guard this {promise}, little knight." He's never looked more serious in his whole life.` },
    { word: 'laugh', type: 'inspect', obj: 'flower_hill', stage: 5,
      ask: `She {laugh}s at your nervous face the whole way up the Hill. She knows somethin's happenin'. She always knows. She lets ya have it anyway.` },
    { word: 'cry', type: 'talk', npc: 'trinity', stage: 6,
      ask: `The first firework blooms. Ya kneel. Fish-Thief trots forward, delivers. Trinity starts to {cry} before ya even finish the sentence—` },
    { word: 'marriage', type: 'talk', npc: 'trinity', stage: 7,
      ask: `"—YES!!" The trees ERUPT — the whole town was hidin' behind 'em. {marriage}!!! They all knew. Even the pigeons. ESPECIALLY the pigeons.` }
  ],
  stageToasts: {
    1: `💍 The ring's real. This is happenin'. Go see mom — ya need her before ya need anyone.`,
    2: `🗣️ Ya can't just say "so, marriage?" — get some practice in. Your friend volunteered. Loudly.`,
    3: `🌊 One more blessin' to collect. The wisest one. Ya know where he sits.`,
    4: `🐾 The ring bearer awaits. He's been briefed. He demands one (1) snack.`,
    5: `⛰️ She's ready for the "festival walk". Up the Hill. Heart rate: astronomical.`,
    6: `🎆 The sky's startin'. It's time. It's actually time.`,
    7: `💐 ...She's sayin' somethin' through the tears. Listen. LISTEN.`
  },
  npcLines: {
    trinity: [
      `Everyone's bein' SO weird today. Your mom hugged me twice before breakfast. TWICE.`,
      `The fireworks tonight are supposed to be the best in years. I got a good feelin' about tonight, bud.`
    ],
    mom: [
      `@1 I'm not cryin', I'm pre-cryin'. There's a DIFFERENCE and it's called PACING.`,
      `@1 I've loved her since she yelled at ya for forgettin' the candles. That's when I knew.`
    ],
    dad: [
      `@1 Son. The singin' card's ready. Been ready for a YEAR. Say the word.`,
      `@1 When I proposed to your mother I dropped the box in a river. Whatever happens tonight: you're already doin' better, bud.`
    ],
    sister: [
      `@1 I've been ready to call her my sister since the umbrella incident. She GETS this family.`,
      `@1 I'm in charge of the hidin'-behind-trees formation. We've DRILLED this. We are SO bad at it.`
    ],
    friend: [
      `@1 I got cue cards, backup cue cards, and a tissue supply chain. I was BORN to be best man. WAIT. AM I BEST MAN?!`,
      `@1 The whole street's pretendin' to be casual tonight. We are SO bad at casual, bud. Hurry.`
    ],
    shopkeeper: [
      `@1 The ribbon on that little box? MY finest ribbon. My masterpiece. Now GO GET HER.`,
      `@1 I've known since ya stared at ring boxes for an hour and bought a cabbage instead. Three weeks ago. We ALL knew.`
    ],
    trainer: [
      `@1 Heart rate management, remember: in for four, out for four. This is the BIG lift, champion.`,
      `@1 I wrote a haiku for tonight. I will NOT perform it 'til she says yes. Discipline, bud.`
    ],
    boss: [
      `@1 Take tomorrow off. Take two. Some quarterly results matter more than others.`,
      `@1 Thirty years ago I spilled soup on my wife on our first date. Tonight beats every meetin' I've ever led. Go.`
    ],
    coworker: [
      `@1 Gerald's wearin' his tiny flag again. He doesn't know why. None of us truly do. It felt right.`,
      `@1 Statistically, she says yes. Emotionally, she says yes. Botanically — Gerald votes yes.`
    ],
    oldman: [
      `@1 The pond's calm tonight. Good omen. The koi are matchmakers from way back, ya know.`,
      `@1 Your grandmother and me made a bet on this night in 1971. Tell her she finally wins.`
    ],
    grandma: [
      `@1 I packed my good scarf for EXACTLY this occasion. Grandmothers know. We always know, bud.`,
      `@1 She's a keeper, that girl. Beat me at cards fair and square on the second try. NOBODY does that.`
    ],
    cat: [
      `Fish-Thief sits at attention, tiny box gleamin' on his bandana. The most important delivery of his nine lives.`
    ]
  }
}
]