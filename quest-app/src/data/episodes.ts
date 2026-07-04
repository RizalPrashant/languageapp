/* =====================================================================
   EPISODES — the show, day by day. Season 1: days 1-10.

   AUTHORING FORMAT:
   - words: 8 Japanese words (looked up in the live bank).
   - Text is template strings: {concept} marks a learnable word (see
     lexicon.ts) — English before the player learns it, then the target
     language forever after, in every language the app ships.
   - quests: one per word; `stage` chains them (later stages hidden as ???).
   - stageToasts: story beat shown when a stage unlocks.
   - npcLines: on episode days, NPCs speak ONLY these (2-3 each, on-story).
   - timerSec: quest-phase clock. night: evening tint.
   ===================================================================== */

export interface EpisodeQuest {
  word: string
  type: 'talk' | 'buy' | 'inspect' | 'do'
  npc?: string
  obj?: string
  item?: string
  loc?: string
  verb?: 'walk' | 'run'
  amount?: number
  ask?: string
  stage?: number
}

export interface Episode {
  ep: number
  title: string
  words: string[]
  story: string
  timerSec?: number
  night?: boolean
  quests: EpisodeQuest[]
  npcLines: Record<string, string[]>
  stageToasts?: Record<number, string>
}

export const EPISODES: Episode[] = [

/* ============================== EP 1 ============================== */
{
  ep: 1,
  title: '第1話 「初めての朝」 — First Morning',
  words: ['morning', 'mom', 'dad', 'bread', 'eat', 'key', 'work', 'fast'],
  story:
    `Rain's comin' down on the window, tickety-tickety, and today's your first day at the new {work} — 'course ` +
    `you slept in so hard that Trinity's over there pokin' your face like you owe her money. Your {mom}'s standin' ` +
    `guard over the fresh {bread} downstairs, your {dad} ironed your shirt at six in the mornin' and'll take that ` +
    `secret to his grave, and your {key} is... somewhere. It's always somewhere. Get movin', {fast} — bosses ` +
    `remember day one, bud.`,
  timerSec: 300,
  quests: [
    { word: 'morning', type: 'talk', npc: 'trinity', stage: 0,
      ask: `Good {morning}, ya greasy sleeper! First day of the rest of your life and you're STILL horizontal like a bag of laundry! Up! Up!` },
    { word: 'key', type: 'inspect', obj: 'key', stage: 1,
      ask: `The {key}! Under the futon. It's ALWAYS under the futon, bud. You knew that. Everybody knew that.` },
    { word: 'mom', type: 'talk', npc: 'mom', stage: 2,
      ask: `Your {mom}'s blockin' the kitchen door like a bouncer. "Sit. Thirty seconds. Even big-shot heroes gotta chew."` },
    { word: 'bread', type: 'inspect', obj: 'table', stage: 2,
      ask: `One {bread}, still warm off the pan. Mom's watchin'. Take exactly one — she counts 'em. She always counts 'em.` },
    { word: 'dad', type: 'talk', npc: 'dad', stage: 3,
      ask: `Your {dad} gives ya a salute from behind the newspaper. Newspaper's upside down. He knows. He's not gonna say nothin'.` },
    { word: 'eat', type: 'buy', item: 'emergency onigiri', stage: 4,
      ask: `No time to {eat} like a civilized man — gimme one emergency onigiri. And yeah, it's a REAL emergency, don't give me that look.` },
    { word: 'fast', type: 'do', loc: 'street', verb: 'run', amount: 550, stage: 5,
      ask: `Go {fast}!! The clock's beatin' ya and the little bastard KNOWS it!` },
    { word: 'work', type: 'talk', npc: 'boss', stage: 6,
      ask: `First day of {work}, and you're nine minutes late. Office record's forty-three. Honestly? Kinda respect the restraint.` }
  ],
  stageToasts: {
    1: `🔑 Hang on. Keys. KEYS. Where in the hell are the keys?!`,
    2: `🍞 Got 'em! Now survive the kitchen — mom's got real strong opinions about breakfast.`,
    3: `📰 Say bye to dad. He's pretendin' he didn't iron your shirt. Let him have it.`,
    4: `🏪 Still starvin'. Store's on the way. Well. Technically on the way.`,
    5: `🏃 RUN. Run like the employed man you're ABOUT to be.`,
    6: `🏢 There's the office. Big breath. You smell like onigiri and pure destiny.`
  },
  npcLines: {
    trinity: [
      `I set ya three alarms, bud. You beat all three. That's almost impressive, in a real sad way.`,
      `Text me after {work}, okay? First days are stories and I want the whole story, not the two-word version.`
    ],
    mom: [
      `Don't you run off on an empty stomach. At least take the {bread}, for the love of— just take it!`,
      `First days are scary, I know. You'll be fine. Now GO. No — bread first. THEN go.`
    ],
    dad: [
      `Big day, bud. Firm handshake, no nappin' before lunch, and don't get two birds stoned at once. That's all the wisdom I got.`,
      `I'm not cryin'. It's the onions. At seven in the {morning}. ...Yeah. Onions.`
    ],
    sister: [
      `YOU? Employed? Frig, the economy must be havin' a real rough go of it.`,
      `Bring me somethin' from the store after {work}. I take snacks or cash. Dealer's choice, I'm not fussy.`
    ],
    friend: [
      `FIRST DAY!! Text me EVERYTHING at lunch, bud, and I mean everything, decimals included!`,
      `I already told the whole street. Pigeon guy wants a full report too, and ya don't wanna let the pigeon guy down.`
    ],
    shopkeeper: [
      `First day of {work}? Everybody panic-shops in here when they sleep in. You're in good company, kid.`,
      `Take an extra napkin. Nerves get messy. Trust the {shop clerk}, I've seen it all.`
    ],
    trainer: [
      `New job? Fine, fine. But don't let some desk go and steal your gains, buddy.`,
      `Big breath. In through the nose. Out through the AMBITION. There ya go.`
    ],
    boss: [
      `Nervous? Good. Means ya give a damn. Coffee's in the corner. Fair warnin', it's terrible.`
    ],
    coworker: [
      `One piece of advice: never learn how the printer works, or congratulations, it's your {work} now, forever.`,
      `The good {water}'s on the second shelf. You didn't hear that from me. I was never here.`
    ],
    oldman: [
      `A first {morning} like this one... I remember mine. 1962. Rained just like this. The pigeons knew.`,
      `Rain on your first day's good luck. I decided that just now, on the spot. It's law now. Congratulations.`
    ]
  }
},

/* ============================== EP 2 ============================== */
{
  ep: 2,
  title: '第2話 「誕生日を忘れないで」 — Don\'t Forget My Birthday',
  words: ['birthday', 'cake', 'forget', 'years old', 'candle', 'call', 'party', 'cut'],
  story:
    `Trinity's been hummin' all week and leavin' calendars open in every damn room. It's her {birthday} — and you, ` +
    `the reignin' champ of forgettin' things, have got... absolutely nothin' ready. There's still time, though: a ` +
    `{cake} from the store, a {candle} or two, some folks for the {party}... how hard can it be? (You're gonna ` +
    `{forget} at least three things. That's just who ya are, bud, and we love ya anyway.)`,
  timerSec: 330,
  quests: [
    { word: 'birthday', type: 'talk', npc: 'trinity', stage: 0,
      ask: `So... you know what today is, right? Right? It's my {birthday}! You remembered! ...You DID remember?` },
    { word: 'cake', type: 'buy', item: 'birthday cake', stage: 1,
      ask: `One birthday {cake}, please — the fanciest one ya got. It's an emergency, don't ask, just the fancy one.` },
    { word: 'forget', type: 'talk', npc: 'trinity', stage: 2,
      ask: `The cake's beautiful!! But... did you {forget} somethin'? ...The candles. Bud. The CANDLES.` },
    { word: 'years old', type: 'inspect', obj: 'desk_bedroom', stage: 3,
      ask: `Her ID's in the drawer. 23 {years old}. She's turnin' 23. Whatever ya do, never admit ya had to check.` },
    { word: 'candle', type: 'buy', item: 'number candles', stage: 4,
      ask: `Number {candle}s — gimme a two and a three. She's 23. I'm sure. I'm... pretty sure. Mostly sure.` },
    { word: 'call', type: 'talk', npc: 'friend', stage: 5,
      ask: `Emergency!! I forgot to {call} literally one single person. Trinity's birthday, my place, right now — you in, bud?` },
    { word: 'party', type: 'talk', npc: 'oldman', stage: 5,
      ask: `Sir! There's a birthday {party} tonight — please come. And yeah, bring the pigeon stories, people love those.` },
    { word: 'cut', type: 'talk', npc: 'trinity', stage: 6,
      ask: `Everybody's here, candles are glowin' — time to {cut} the cake! Happy birthday, Trinity!!` }
  ],
  stageToasts: {
    1: `📋 A cake. THE cake. Leg it to the store — the fancy one, don't be cheap.`,
    2: `🏠 Back home, cake in hand. Show Trinity... hang on, why's she squintin' at it like that?`,
    3: `😱 Candles need a NUMBER, ya donkey. How old's she turnin'?! Her ID — bedroom desk — go go go!`,
    4: `🔢 23! Back to the store — a two and a three!`,
    5: `🎂 Cake ✓ candles ✓ ... guests?? YOU NEVER INVITED A SOUL. Go round up some people!`,
    6: `✨ Everybody came. Candles are lit. One thing left to do, bud...`
  },
  npcLines: {
    trinity: [
      `No peekin' at the presents. I know all your tricks. Every last one of 'em.`,
      `My {mom} already called twice about tonight. This is turnin' into a whole production.`
    ],
    mom: [
      `I baked a backup {cake}. Don't you dare tell Trinity. This is called insurance, bud.`,
      `@4 Twenty-three! I remember when you two met. You tripped clean over a chair. Real smooth.`
    ],
    dad: [
      `I got her a card. It sings. Brace yourself emotionally, 'cause I sure didn't.`,
      `Birthdays were invented so a man can eat cake with no shame. Respect the system, bud, it's not rocket appliances.`
    ],
    sister: [
      `Already taste-tested the frosting. Quality control. You're welcome, don't mention it.`,
      `If you {forget} her birthday next year, I'm tellin' her about the laundry incident. All of it.`
    ],
    friend: [
      `@5 A {party}?! Bud, I've been emotionally ready for this since TUESDAY.`,
      `@5 I'm bringin' snacks. And backup snacks. And emergency snacks. Three separate categories, all essential.`
    ],
    shopkeeper: [
      `@4 Twice in one day? Lemme guess — ya forgot the {candle}s. Ohh, classic. Happens to the best of 'em.`,
      `Birthday supplies, aisle three. No panic-shopper discount, sorry, I don't make the rules. I do, actually. Still no.`
    ],
    trainer: [
      `Cake's a cheat meal. Birthdays are a legal cheat day. That's science, bud, look it up.`,
      `Tell Trinity happy birthday. And that a good set of squats is a real gift to oneself.`
    ],
    boss: [
      `You left early for a birthday? ...Good. Some things matter more than reports. Not many. But some.`,
      `Buy the good wrappin' paper. Trust me on this one. They always know. They ALWAYS know.`
    ],
    coworker: [
      `Bring me one slice tomorrow and I'll cover for ya clear through to retirement.`,
      `A {party} on a weeknight. Bold move. I respect it. From a safe distance, in my sweatpants.`
    ],
    oldman: [
      `@4 Twenty-three... I remember twenty-three. Had all my own teeth back then. Every one.`,
      `A birthday's just the {year} sayin' hello to ya again. Eat the cake slow, bud. It goes fast otherwise.`
    ]
  }
},

/* ============================== EP 3 ============================== */
{
  ep: 3,
  title: '第3話 「筋肉と俳句」 — Muscles and Haiku',
  words: ['energetic', 'body', 'heavy', 'strong', 'water', 'run', 'all', 'rest'],
  story:
    `The gym coach found out you ate cake yesterday. Nobody knows how. Nobody ever knows how. There's a note stuck ` +
    `on your door: "TRAINING. SUNRISE. BRING YOUR {body}." Word is, if ya live through his whole program, he reads ` +
    `ya one of his secret haiku. That's the reward. That's the entire reward, bud.`,
  timerSec: 300,
  quests: [
    { word: 'energetic', type: 'talk', npc: 'trainer', stage: 0,
      ask: `"There he is! Look at ya, all {energetic}!" You're not. "Okay, you're not, but we're gonna FIX that! Warm-up! Let's go, let's go!"` },
    { word: 'body', type: 'inspect', obj: 'mirror', stage: 1,
      ask: `"Look in the mirror," the coach says. "That's your {body}. Don't you apologize to it. We're gonna upgrade the whole unit."` },
    { word: 'heavy', type: 'inspect', obj: 'dumbbell', stage: 2,
      ask: `Okay, this thing's real {heavy}. It is not leavin' the floor. It's just not happenin' today, bud.` },
    { word: 'strong', type: 'talk', npc: 'trainer', stage: 3,
      ask: `"Ya wanna know the secret to gettin' {strong}? Showin' up. And ya showed up! That's half the battle! The other half, unfortunately, is the actual liftin'."` },
    { word: 'water', type: 'buy', item: 'cold water', stage: 4,
      ask: `Cold {water}, please, the big one. Coach says hydration's half the battle. With this guy EVERYTHING's half the battle. There's like nine halves.` },
    { word: 'run', type: 'do', loc: 'park', verb: 'run', amount: 800, stage: 5,
      ask: `Now {run} the park loop. He's timin' ya. With a sundial. Don't ask questions, bud, just run.` },
    { word: 'all', type: 'inspect', obj: 'dumbbell_b', stage: 6,
      ask: `"Now the rest of 'em," he says. What, {all} of 'em? "All of 'em." These dumbbells are gonna be the end of ya.` },
    { word: 'rest', type: 'inspect', obj: 'bench', stage: 7,
      ask: `"And now the most important exercise," the coach says. "{rest}. Sit on that bench and don't ya move a muscle." Finally. FINALLY.` }
  ],
  stageToasts: {
    1: `💪 Warm-up survived. He wants ya at the mirror now.`,
    2: `🏋️ Dumbbell time. They look real heavy from clear over here.`,
    3: `🔥 Coach has somethin' to tell ya. Mid-flex, naturally.`,
    4: `💧 Water break. Store. Your legs are pure jelly now.`,
    5: `🏃 Park loop. He's got a sundial. Just go, don't think about it.`,
    6: `😤 Back to the gym. He said "all of 'em." And he MEANS it.`,
    7: `🍃 Ya made it, bud. The bench. Go sit down. You earned it.`
  },
  npcLines: {
    trinity: [
      `You? At the gym? On PURPOSE? Hang on, hang on, I need a {photo} of this for the records.`,
      `If ya die in there, I'm keepin' the cat we haven't even adopted yet. That's the deal.`
    ],
    mom: [
      `Exercise is good for ya! Here, I packed three lunches. For balance. Don't argue with me.`,
      `That coach carried our fridge up the stairs one time. By himself. Hummin' a little tune the whole way.`
    ],
    dad: [
      `I did a push-up back in '98. Your mother STILL brings it up at parties. A legend, basically.`,
      `If ya find my dignity at that gym, bring it on home, bud. I lost it there in the spring and I miss it.`
    ],
    sister: [
      `Lift with your legs! Or don't! Either way it's fantastic content, honestly.`,
      `I told the coach ya called cake a food group. So really, this whole mess is your own doin'.`
    ],
    friend: [
      `I signed us both up, and then I remembered I got a thing. A forever thing. I'm real sorry, bud.`,
      `@5 Wait, you can {run}?! Since WHEN?! This changes everything I thought I knew about ya!`
    ],
    shopkeeper: [
      `Gym day, huh? Cold {water}'s in the back. Athletes drink free. You, though, you're payin'.`,
      `The coach buys forty eggs at a time. Forty. I stopped askin' questions about it years ago.`
    ],
    trainer: [
      `FEEL THE BURN! ...Sorry, too loud. Feel the burn. That was the indoor-voice version.`,
      `Haiku and barbells are the exact same thing, bud. Form, balance, breathin'. Also, both can flatten ya.`
    ],
    boss: [
      `Ya joined the gym? Good. Strong employees carry more deadlines. That's a joke. That's half a joke.`,
      `I did yoga one time and the printer broke that very same day. Not sayin' it's connected. Not sayin' it isn't.`
    ],
    coworker: [
      `Sore muscles are just your body filin' a complaint. There's no HR for the skeleton. I checked. Twice.`,
      `I run too. Out of {money}. Every single month, right on schedule.`
    ],
    oldman: [
      `The coach trains bodies, the pond trains minds. Either way ya end up soaked, so pick your poison.`,
      `In my day the gym was a field and the dumbbell was a cow. And we were plenty {strong}, thank you.`
    ]
  }
},

/* ============================== EP 4 ============================== */
{
  ep: 4,
  title: '第4話 「傘泥棒」 — The Umbrella Thief',
  words: ['weather', 'rain', 'umbrella', 'wind', 'wait', 'cold', 'house', 'go home'],
  story:
    `One look out the window and ya just know: rain's comin', and the serious kind, too. No problem — you own a good ` +
    `umbrella. Except the umbrella stand's empty, your little sister slipped outta the house suspiciously early this ` +
    `mornin', and now it's startin' to pour. Somebody's gonna answer for this, bud.`,
  timerSec: 300,
  quests: [
    { word: 'weather', type: 'inspect', obj: 'window', stage: 0,
      ask: `Check the {weather} out the window. Gray. Real gray. That sky is not messin' around today.` },
    { word: 'rain', type: 'talk', npc: 'mom', stage: 1,
      ask: `"Here comes the {rain}!" mom hollers. "Where's your umbrella? Don't you tell me ya lost the umbrella."` },
    { word: 'umbrella', type: 'inspect', obj: 'umbrella', stage: 2,
      ask: `The {umbrella} stand: dad's umbrella, mom's umbrella, and one sad empty spot where yours oughta be.` },
    { word: 'wind', type: 'do', loc: 'street', verb: 'walk', amount: 500, stage: 3,
      ask: `Get out there and push through the {wind}. Straight in your face, too. 'Course it is. Wouldn't be any other way.` },
    { word: 'wait', type: 'talk', npc: 'friend', stage: 4,
      ask: `"{wait}, hold on — you seen my sister? Little, quick, carryin' an umbrella that is definitely not hers?"` },
    { word: 'cold', type: 'talk', npc: 'shopkeeper', stage: 5,
      ask: `Ya burst in drippin' everywhere. "It's so {cold} out there. Did a small girl with an umbrella come through here? Be straight with me."` },
    { word: 'house', type: 'talk', npc: 'sister', stage: 6,
      ask: `Back at the {house}, and there she is. Bone dry. "This one's MINE. Yours is behind the door. Been there the whole time, ya genius."` },
    { word: 'go home', type: 'inspect', obj: 'door', stage: 7,
      ask: `So ya {go home} soaked right through, and yep — there's your umbrella, behind the door. The whole entire time.` }
  ],
  stageToasts: {
    1: `☁️ That sky looks bad, bud. Ask mom. She's never once been wrong about rain.`,
    2: `🌂 Check the umbrella stand... ohh no.`,
    3: `💨 She headed for the street. Go get her.`,
    4: `🔍 Ask around. Somebody saw somethin', they always do.`,
    5: `🥶 The shopkeeper sees everything. Ask him. And quit drippin' on his floor.`,
    6: `🏠 She went HOME? Back ya go, then.`,
    7: `🚪 Hang on. Behind the door...? No. No way.`
  },
  npcLines: {
    trinity: [
      `Ya look like a sad wet cat, bud. Towel first, THEN you can come in. House rules.`,
      `I texted ya a little cloud emoji this mornin'. That was a warnin'. You ignored a documented WARNING.`
    ],
    mom: [
      `I got a spare rain poncho. It's bright pink. Your call, hero. No judgment. Little judgment.`,
      `Your sister left real {fast} this mornin'. Suspiciously fast, now that I'm thinkin' about it.`
    ],
    dad: [
      `I lost an umbrella one time and caught a cold lookin' for it. Learn from my mistakes, bud, that's free.`,
      `The {wind} took my hat clean off in 2019. We don't talk about the hat. Ever.`
    ],
    sister: [
      `@6 What? It's a nice umbrella. Finders keepers. That's legally bindin', look it up.`,
      `@6 Okay, fine. But in my defense, yours has got a duck on the handle. A DUCK. I couldn't.`
    ],
    friend: [
      `@4 Little quick girl with an umbrella? Yeah, bud, she went right by. Waved at me. It was kinda menacing, honestly.`,
      `This {rain}'s wild! I love it! My socks, though — my socks do NOT.`
    ],
    shopkeeper: [
      `Rainy days are great for business. Umbrella sales up, gossip quality WAY up. Best {weather} there is.`,
      `@5 She bought candy with exact change and smiled like a tiny little villain. Lovely girl, though. Real polite.`
    ],
    trainer: [
      `Trainin' in the rain builds character! And colds. Mostly character, though. Some colds.`,
      `Even I {wait} for wet stairs, bud. You respect the stairs or the stairs disrespect you.`
    ],
    boss: [
      `I keep four umbrellas at the office. I trust no forecast, none of 'em. Live like me, you'll stay dry.`,
      `If ya come in {cold} and wet, there's tea. The good tea, mind you, not the meetin' tea.`
    ],
    coworker: [
      `My umbrella flipped inside out in front of everybody one time. People clapped. I've moved past it. Mostly. Not really.`,
      `Weather small talk is office meditation. The {rain} brings us all together, bud.`
    ],
    oldman: [
      `The pigeons hid a full hour before it started. They always know. Nobody ever thinks to ask the pigeons.`,
      `I don't use umbrellas. Me and the {rain}, we got an arrangement. Old one.`
    ]
  }
},

/* ============================== EP 5 ============================== */
{
  ep: 5,
  title: '第5話 「魚どろぼう」 — The Fish Thief',
  words: ['fish', 'search', 'cat', 'small', 'milk', 'like', 'name', 'park'],
  story:
    `There's hollerin' comin' from the store. The shopkeeper's prize {fish} — the good one he bragged about all week ` +
    `straight — is gone. Witnesses saw somethin' {small}, four legs, whiskers, and zero remorse whatsoever. And ` +
    `somehow you got put in charge of findin' it. You were just standin' there, bud. That's the whole crime ya committed.`,
  timerSec: 300,
  quests: [
    { word: 'fish', type: 'talk', npc: 'shopkeeper', stage: 0,
      ask: `"My {fish}! The GOOD one! Gone! Four legs, whiskers, no remorse! Go find 'em. You're the deputy now. Congratulations, don't let me down."` },
    { word: 'search', type: 'do', loc: 'park', verb: 'walk', amount: 600, stage: 1,
      ask: `{search} the park. Follow the little wet footprints. This is real police work now, bud, take it serious.` },
    { word: 'cat', type: 'inspect', obj: 'tree', stage: 2,
      ask: `There. Up the tree. A {cat}. With the fish. Chewin'. Lookin' ya dead in the eye. Unbelievable. The nerve.` },
    { word: 'small', type: 'talk', npc: 'oldman', stage: 3,
      ask: `"Such a {small} thief," the old man chuckles. "I've seen bigger. 1974. A heron took my lunch AND my hat. Different world back then."` },
    { word: 'milk', type: 'buy', item: 'negotiation milk', stage: 4,
      ask: `One {milk}, please. It's for the negotiation. This is official town business, put it on the tab.` },
    { word: 'like', type: 'talk', npc: 'trinity', stage: 5,
      ask: `"You {like} the cat already, don't ya. I can see it right on your face. We're keepin' it, aren't we, bud."` },
    { word: 'name', type: 'talk', npc: 'sister', stage: 6,
      ask: `"It needs a {name}! I vote Fish-Thief. All in favor? Motion passed. That right there was democracy."` },
    { word: 'park', type: 'inspect', obj: 'bench', stage: 7,
      ask: `The {park} bench. One human, one cat, one empty little milk saucer. Case closed, deputy.` }
  ],
  stageToasts: {
    1: `🐾 Little wet footprints, headin' straight for the park.`,
    2: `🌳 Somethin's movin' in the big tree. Somethin' smug.`,
    3: `👴 The old man sees everything at this pond. Ask him.`,
    4: `🥛 No cat alive can say no to milk. To the store.`,
    5: `😻 The suspect's purrin' on your shoulder. Trinity's spotted ya.`,
    6: `📝 It needs a name. Your sister's got opinions. Strong ones.`,
    7: `🐟 One last patrol. With the criminal. Ridin' on your shoulder.`
  },
  npcLines: {
    trinity: [
      `@5 If that cat sleeps on my side of the bed, bud, you and me are gonna have words. Real words.`,
      `@5 I already bought it a little bowl. Got a fish pattern on it. I'm hilarious. I know I'm hilarious.`
    ],
    mom: [
      `@2 A cat! Good. A house needs a cat. Keeps everybody honest, cats do.`,
      `@6 No, it is NOT eatin' table scraps. It eats better than your father now. That's decided. Final.`
    ],
    dad: [
      `@5 A cat. Finally, somebody in this house who respects a man's naps.`,
      `@2 In my day, cats named themselves, bud. Usually somethin' like "No" or "Get Down From There".`
    ],
    sister: [
      `@6 Fish-Thief's a great name. Sounds tough. The committee has spoken, and the committee is me, so.`,
      `@6 I'm teachin' it to high-five. So far it's taught ME two things. Not real sure how that happened.`
    ],
    friend: [
      `A CAT CHASE? And nobody CALLED me?? I own a NET, bud! An actual net!`,
      `@2 Does it do the little tongue thing? The blep? Rate the blep for me, out of ten, be honest.`
    ],
    shopkeeper: [
      `@2 That {fish} was for a special customer! ...Fine. FINE. The cat's got good taste. I respect it, damn it.`,
      `@2 Tell the little criminal it's got store credit now. I'm weak. I know I'm weak, don't say it.`
    ],
    trainer: [
      `@2 A cat does forty perfect stretches a day. FORTY. Study that animal, bud, it's a professional.`,
      `I tried to {run} with a cat one time. We don't train together anymore. Left it at that.`
    ],
    boss: [
      `@2 A cat, ya say. The office could use one. That printer needs supervisin'.`,
      `@4 Expense the milk. File it under town security. I'll sign off on it, don't worry.`
    ],
    coworker: [
      `@2 Bring it by the office. If it sits on the boss's keyboard, meetings end early. Just... think about it.`,
      `A {name} matters, bud. I named my plant Gerald and now we're real close. Closest thing I got.`
    ],
    oldman: [
      `The koi are furious about this fish business. Solidarity, apparently. Fish politics run deep.`,
      `@2 Every town needs a cat. It's like a {small} mayor nobody voted for and nobody can fire.`
    ]
  }
},

/* ============================== EP 6 ============================== */
{
  ep: 6,
  title: '第6話 「給料日！」 — Payday!',
  words: ['money', 'wallet', 'shoes', 'store', 'expensive', 'cheap', 'buy', 'new'],
  story:
    `It finally happened. Real {money}, earned by you, sittin' right there in your {wallet}. And ya know exactly ` +
    `what ya want: the {shoes} with the lightnin' stripes in the store window. You've walked past 'em eleven times, ` +
    `bud. Eleven. Today ya walk IN. Just don't let your sister smell the payday. ...Too late. She already knows.`,
  timerSec: 300,
  quests: [
    { word: 'money', type: 'talk', npc: 'boss', stage: 0,
      ask: `"Payday. Real {money}," the boss says, handin' it over. "Don't ya spend it all on—" and he's already walkin' off. Smart man, that one.` },
    { word: 'wallet', type: 'inspect', obj: 'desk', stage: 1,
      ask: `Your {wallet}, sittin' on the desk, fat for once in its sad little life. Today it fears nothin'. It probably should fear a couple things.` },
    { word: 'shoes', type: 'talk', npc: 'friend', stage: 2,
      ask: `"THE {shoes}? The lightnin' ones? TODAY?! I'm comin' with— no wait, I got a thing. GO. Go for the both of us, bud."` },
    { word: 'store', type: 'do', loc: 'street', verb: 'walk', amount: 450, stage: 3,
      ask: `Walk to the {store}. Walk like a man with an income now. Little swagger's earned.` },
    { word: 'expensive', type: 'inspect', obj: 'shelf', stage: 4,
      ask: `There they are. Wow. Also — WOW, look at that price tag. These are real {expensive}, bud. Your wallet's startin' to sweat.` },
    { word: 'cheap', type: 'talk', npc: 'shopkeeper', stage: 5,
      ask: `"Psst. Same {shoes}, last season's color, way {cheap}er. Back shelf. That stays between us, deputy."` },
    { word: 'buy', type: 'buy', item: 'lightning shoes', stage: 6,
      ask: `Okay. Time to {buy}. Lightnin' stripes, last season's color, who even cares. "No, don't wrap 'em. I'm wearin' 'em outta here."` },
    { word: 'new', type: 'talk', npc: 'sister', stage: 7,
      ask: `"Ooooh, {new} shoes! Congratulations!! Sooo... about that little loan we talked about. We didn't talk about it? Huh. Well. Now's good."` }
  ],
  stageToasts: {
    1: `💰 Payday. Go grab your wallet, bud.`,
    2: `👟 Tell your friend. He's been waitin' on this day right alongside ya.`,
    3: `🏪 To the store. Walk with purpose.`,
    4: `💸 Price check. Brace yourself.`,
    5: `🤫 The shopkeeper's doin' his secret-deal face. Lean in close.`,
    6: `⚡ This is it. Buy the shoes.`,
    7: `🏠 Victory lap. Wait — your sister's already outside. She KNOWS. She always knows.`
  },
  npcLines: {
    trinity: [
      `Buy the shoes. Ya earned the shoes. This is your girlfriend speakin', officially, on the record.`,
      `But if that {money}'s gone by Friday, bud, we're havin' the budget talk. And there'll be charts. I'll make charts.`
    ],
    mom: [
      `Your first paycheck! I framed mine, ya know. Then the fridge broke that week. That's life, that is.`,
      `Put a little away. Just a little! Squirrels save, and they got itty-bitty little brains.`
    ],
    dad: [
      `Lightnin' stripes don't make ya faster. That's what I said before I saw 'em. And then — WOW.`,
      `My first paycheck bought this here chair. Thirty years back. Respect the long game, bud. It's not rocket appliances.`
    ],
    sister: [
      `A loan. A small one. Teeny. Sister rates: zero interest, infinite gratitude. Can't beat it.`,
      `Honestly? Those {shoes} would look better on someone shorter. Just puttin' that out there.`
    ],
    friend: [
      `@6 Pics. I need pics of the shoes immediately, bud, or it flat-out didn't happen.`,
      `@6 With those you could finally {run} faster than me. In theory. IN THEORY, bud. Don't get cocky.`
    ],
    shopkeeper: [
      `Payday crowd today! Best day of the whole month. Everybody's glowin', the wallets are cryin'.`,
      `@5 The back-shelf deal stays between us, yeah? I got a reputation to keep as an {expensive} man.`
    ],
    trainer: [
      `@6 New shoes?! TEST 'EM! Park! Three laps! The stripes DEMAND it, bud!`,
      `Money buys shoes. Squats are free. It all balances out in the end, trust me.`
    ],
    boss: [
      `Spend a little, save a little, and never lend money to family. I said what I said. Learned it hard.`,
      `Ya earned it, honestly. Your printer report was actually readable. Round here, that's high praise.`
    ],
    coworker: [
      `The payday ritual: look at your {wallet}, feel rich, buy lunch, feel poor. The circle of life, bud.`,
      `Lightnin' stripes. Bold. The office dress code fears ya now. As it should.`
    ],
    oldman: [
      `I bought one good coat in 1970 and I'm wearin' it right now, this very minute. The {new} thing isn't always the thing.`,
      `...But those stripes ARE excellent. Even the pigeons stared. Buy the shoes, young one. Buy 'em.`
    ]
  }
},

/* ============================== EP 7 ============================== */
{
  ep: 7,
  title: '第7話 「星の夜」 — Night of Stars',
  words: ['present', 'flower', 'movie', 'fun', 'evening', 'star', 'hand', 'pretty'],
  story:
    `Tonight's date night, and for once ya actually planned ahead: a {present} hid in your desk since last week, ` +
    `{flower}s to pick up, a {movie} all picked out, and if the sky behaves itself, stars over the pond. Trinity ` +
    `says she suspects nothin'. Trinity has already got her jacket picked out. She always suspects somethin', bud.`,
  timerSec: 330,
  night: true,
  quests: [
    { word: 'present', type: 'inspect', obj: 'desk_bedroom', stage: 0,
      ask: `The {present}! Hid in your desk a whole week and ya didn't crack once. Look at ya. That's growth, bud, real growth.` },
    { word: 'flower', type: 'buy', item: 'a small bouquet', stage: 1,
      ask: `One {flower} bouquet, please. The kind that says "I planned this all along and did NOT panic even a little."` },
    { word: 'movie', type: 'talk', npc: 'trinity', stage: 2,
      ask: `"A {movie}? Flowers? An actual plan?? Who are ya and what've ya done with—" Okay, okay, she's gettin' her jacket. She's in.` },
    { word: 'fun', type: 'talk', npc: 'friend', stage: 3,
      ask: `"Have {fun} tonight!! I want ZERO details! ...Okay, some details. Okay fine, all of 'em. Tomorrow. Lunch. Deal, bud?"` },
    { word: 'evening', type: 'do', loc: 'park', verb: 'walk', amount: 500, stage: 4,
      ask: `The {evening} walk through the park. The classic move, bud. Go slow — tonight, the slow IS the whole point.` },
    { word: 'star', type: 'inspect', obj: 'pond', stage: 5,
      ask: `The {star}s are sittin' right there on the pond. Trinity's gone quiet. And it's the good kind of quiet.` },
    { word: 'hand', type: 'talk', npc: 'trinity', stage: 6,
      ask: `She takes your {hand}. Your palm's sweaty. Do NOT mention the palm. Whatever ya do, do not mention the palm, bud.` },
    { word: 'pretty', type: 'inspect', obj: 'flower', stage: 7,
      ask: `"{pretty}," she says, real quiet. She means the flowers. Probably the flowers. (It's not the flowers.)` }
  ],
  stageToasts: {
    1: `🎁 Present secured. Now the flowers — store closes soon, hustle!`,
    2: `💐 Ya got the bouquet. Go get Trinity.`,
    3: `😆 Your friend spotted the flowers from a block off. Brace for volume.`,
    4: `🌙 Out into the night, the two of ya. To the park. Slow now.`,
    5: `⭐ She's lookin' at the water. Look at the water too, bud.`,
    6: `🫱 Somethin's happenin'. Stay calm. STAY CALM.`,
    7: `🌸 One more moment before home. Make it count.`
  },
  npcLines: {
    trinity: [
      `You're bein' suspiciously smooth tonight. I'm keepin' a running list of the clues.`,
      `@7 The {star}s were a nice touch. The sweaty {hand} was... honest. Liked it more, actually. Suited ya.`
    ],
    mom: [
      `Date night?? Wear the nice shirt. THE nice one. Not the one YOU think is nice. The actual nice one.`,
      `We won't wait up. (We'll absolutely wait up. There'll be tea and there'll be questions.)`
    ],
    dad: [
      `Flowers, movie, walk. The triple play. I invented that back in 1989. Don't go checkin' with anybody on it.`,
      `Take my scarf. The {evening} gets cold, and heroes catch colds same as anybody. Bundle up.`
    ],
    sister: [
      `EW. Romance. ...What movie? What flowers? Tell me everything. Ew. Go on, then.`,
      `Fish-Thief and me'll guard the house. By eatin' snacks. Guard duty's real demandin' work.`
    ],
    friend: [
      `The date's TONIGHT?! Why am I nervous? I'm not even goin'! Frig!`,
      `Remember, bud: compliment the jacket. She picked it out three days ago. Trust me. TRUST me.`
    ],
    shopkeeper: [
      `@2 Bouquet boy!! Ohh, the whole town's gonna know by mornin'. I'll see to that personally, no charge.`,
      `Take the {pretty} ribbon, on the house. Some things are bigger than business, kid.`
    ],
    trainer: [
      `Date night's cardio. Nervous heart rate, elevated for hours straight. Counts as trainin', bud.`,
      `Holdin' {hand}s burns four calories an hour. Romance is a lifestyle sport. Commit to it.`
    ],
    boss: [
      `Leavin' on time for a date? Good. The deadlines'll still be right here tomorrow, don't you worry.`,
      `First date with my wife, I spilled soup on the both of us. Married thirty years now. Spill bravely, bud.`
    ],
    coworker: [
      `A planned date. With a hidden present. Who ARE ya? Teach me your ways, seriously.`,
      `I brought a spreadsheet to a date one time. There's a reason I eat lunch with Gerald the plant now.`
    ],
    oldman: [
      `The pond does its best reflections in the {evening}. I told it about tonight. It's ready for ya.`,
      `I proposed by that water, long time ago. The koi were witnesses. Never told a soul, those fish.`
    ]
  }
},

/* ============================== EP 8 ============================== */
{
  ep: 8,
  title: '第8話 「プリンター戦争」 — The Printer War',
  words: ['busy', 'coffee', 'paper', 'write', 'read', 'phone', 'slow', 'sit'],
  story:
    `Big client's comin' at noon, the whole office is {busy}, and the printer — your oldest enemy in this world — ` +
    `picked TODAY to eat the report. All of it. The only copy left is up in your head. First step: {coffee}. ` +
    `There's no plan without coffee, bud. There's never been a plan without coffee.`,
  timerSec: 300,
  quests: [
    { word: 'busy', type: 'talk', npc: 'boss', stage: 0,
      ask: `"Big client at noon! Everybody's {busy}! Look alive! Look caffeinated! Look EMPLOYED, people!"` },
    { word: 'coffee', type: 'buy', item: 'survival coffee', stage: 1,
      ask: `Emergency {coffee}. The strong stuff. The "client at noon" stuff. Actually — ya know what, just leave the whole pot.` },
    { word: 'paper', type: 'inspect', obj: 'desk_b', stage: 2,
      ask: `The printer ate the {paper}. All of it. And now it's makin' a noise that sounds an awful lot like laughin'.` },
    { word: 'write', type: 'inspect', obj: 'desk_c', stage: 3,
      ask: `New plan: {write} the whole report out by hand. Like the old days. Back when printers couldn't hurt a soul.` },
    { word: 'read', type: 'talk', npc: 'coworker', stage: 4,
      ask: `"Be straight with me. Can ya {read} my handwritin'?" ..."It's like a doctor's," he says. Good enough. Keep goin'.` },
    { word: 'phone', type: 'inspect', obj: 'phone', stage: 5,
      ask: `The {phone}! It's the client! They're EARLY! Answer it answer it answer it— "...Moshi moshi?"` },
    { word: 'slow', type: 'talk', npc: 'boss', stage: 6,
      ask: `"NOW the printer decides to work?!" Too {slow}, machine. The handwritten one already won. The boss can't stop laughin'.` },
    { word: 'sit', type: 'inspect', obj: 'desk', stage: 7,
      ask: `Ya finally get to {sit} down. Client loved the "handmade report." Gerald the plant saw the whole thing and'll say nothin'.` }
  ],
  stageToasts: {
    1: `☕ Nothin' works before coffee. Nothin'. Store. Now.`,
    2: `🖨️ Back at the office... what in the hell is that crunchin' sound?`,
    3: `✍️ The printer's declared war. Fine. You go analog, bud.`,
    4: `🤝 Get a second opinion on the handwritin'. Be brave.`,
    5: `📞 RING. RING. Ohh no. Oh no oh no.`,
    6: `🖨️ ...Is the printer seriously startin' up NOW?`,
    7: `🪑 It's over. Ya survived. Go sit down, bud.`
  },
  npcLines: {
    trinity: [
      `@2 Ya texted me "THE PRINTER HAS CHOSEN VIOLENCE" and then nothin' else. I need context. I need it now.`,
      `@2 Win the printer war and I'll make dinner. Lose, and I'll STILL make dinner, but with commentary.`
    ],
    mom: [
      `Busy day? Ya eat anyway. Wars are lost on empty stomachs, bud. Take the rice balls, all of 'em.`,
      `Your father fought a fax machine one time. He lost. The scars are emotional, mostly.`
    ],
    dad: [
      `Printers can smell fear. And deadlines. Mostly fear, though. It's like a sixth sense for 'em.`,
      `Handwritten! HA! Everything old wins out eventually, bud. Everything except my knees.`
    ],
    sister: [
      `Your sworn mortal enemy is a printer. This family is amazin', honestly. Just amazin'.`,
      `Fish-Thief stamped a little paw print right on your report draft. Adds character. You're welcome.`
    ],
    friend: [
      `Office war?? Ya need backup, bud? I got a stapler and absolutely no fear!`,
      `Blink twice if the {coffee} stopped workin'. I'll bring the BIG cup. The emergency cup.`
    ],
    shopkeeper: [
      `@1 Triple-shot day, huh. Your whole office bought coffee today. I could retire off that printer alone.`,
      `The client stopped in earlier for water. Nice person. Complimented my shelves. Real good taste, that one.`
    ],
    trainer: [
      `Deadlines are just mental deadlifts, bud. Breathe. Lift. Submit the report. Done.`,
      `On a hard day I do ten push-ups. When a printer's involved: twenty. Non-negotiable.`
    ],
    boss: [
      `Between you and me: I fought that printer back in 2019. It kept my tie. We don't discuss it.`,
      `Whatever happens at noon, we hand 'em somethin'. Even if we gotta {write} it in crayon, bud.`
    ],
    coworker: [
      `@2 I TOLD ya. Never learn how the printer works. It marks ya. It's marked ya now, for life.`,
      `The trick is to {sit} real still 'til the deadline notices somebody else. ...Has never once worked. Not once.`
    ],
    oldman: [
      `In my day the printer was a fella named Kenji with beautiful handwritin'. Kenji never jammed. Not once.`,
      `Machines are like koi, bud. Feed 'em a little attention and they get real demandin' real fast.`
    ]
  }
},

/* ============================== EP 9 ============================== */
{
  ep: 9,
  title: '第9話 「池の写真」 — The Photograph by the Pond',
  words: ['story', 'photo', 'young', 'long ago', 'pond', 'bird', 'old', 'tree'],
  story:
    `The old man's real quiet today. He pats the bench beside him: "Sit down, bud. I got a {story} for ya. It's got ` +
    `pigeons in it. They all do." There's an old {photo} sittin' on the bench — a young fella, this same pond, ` +
    `and... is that a medal?`,
  timerSec: 300,
  quests: [
    { word: 'story', type: 'talk', npc: 'oldman', stage: 0,
      ask: `"Sit. I got a {story}," he says. "It's a long one, mind ya. Cancel your plans. The pigeons already know it by heart."` },
    { word: 'photo', type: 'inspect', obj: 'bench', stage: 1,
      ask: `An old {photo} on the bench. A young fella. This pond. And a medal. Hang on. A MEDAL?` },
    { word: 'young', type: 'talk', npc: 'oldman', stage: 2,
      ask: `"Yep, that's me," he smiles. "Real {young} back then. Regional Bread-Bakin' Champion, 1964. Undefeated, I'll have ya know."` },
    { word: 'long ago', type: 'inspect', obj: 'tree_c', stage: 3,
      ask: `"{long ago}, that tree there was my trainin' partner. Kneadin' drills at dawn. Don't ask for details." There's DEFINITELY details.` },
    { word: 'pond', type: 'inspect', obj: 'pond', stage: 4,
      ask: `"The {pond} keeps all my secrets," he says. "The koi were sworn in proper. There was a small ceremony and everything."` },
    { word: 'bird', type: 'inspect', obj: 'tree_b', stage: 5,
      ask: `The {bird}s are linin' up on the branch. "Descendants of the original fans," he says. "They remember the bread. They always remember."` },
    { word: 'old', type: 'talk', npc: 'shopkeeper', stage: 6,
      ask: `"That {old} trophy in my back room? It's HIS. Traded it to my father for a bag of rice back in '82. Never said why. Never will."` },
    { word: 'tree', type: 'inspect', obj: 'tree', stage: 7,
      ask: `The big {tree}. "It was small when I was small," he says. "Only one of us kept on growin'." And now ya know the whole thing, bud.` }
  ],
  stageToasts: {
    1: `📷 There's somethin' on the bench. Somethin' from a long time back.`,
    2: `🥇 A MEDAL?! The pigeon guy's got a MEDAL?!`,
    3: `🌳 "My trainin' grounds," he says, pointin' at... a tree?`,
    4: `🎏 The koi are gatherin'. Story's gettin' to the good part.`,
    5: `🐦 The birds are landin'. All of 'em. Like they got invited.`,
    6: `🏪 The shopkeeper knows the endin'. Been waitin' years to tell it.`,
    7: `🌳 One last stop. The big tree. Where the whole thing started.`
  },
  npcLines: {
    trinity: [
      `@3 The old man's got a PAST?! I need to sit down for this. Tell me everything. Then tell me twice.`,
      `@3 A bread champion. In OUR town. I can never look at a piece of toast the same way again, bud.`
    ],
    mom: [
      `@3 The 1964 championships... my mother used to talk about that bread. In a whisper, too.`,
      `@3 I asked him for the recipe one time. He looked at the {pond} for a solid minute and just said "no."`
    ],
    dad: [
      `@3 I KNEW it. Nobody feeds pigeons with that kinda technique by accident, bud. Nobody.`,
      `@7 A medal traded for a bag of rice. There's a {story} inside that story, bud. There always is.`
    ],
    sister: [
      `@3 The pigeon guy was FAMOUS?! This town's got LORE?! Actual lore?!`,
      `@3 I'm startin' a fan club. Members so far: me, you, and about forty {bird}s.`
    ],
    friend: [
      `@3 BREAD CHAMPION?! Bud, I've eaten bread my whole entire life and never once knew greatness lived RIGHT here!`,
      `@3 Ya think he's still got the moves? The kneadin' moves? I got so many questions, so many.`
    ],
    shopkeeper: [
      `@7 So ya finally heard it. I kept that secret forty years, bud. Nearly killed me, keepin' it.`,
      `@3 His bread made a customer cry one time. Happy tears. We still talk about it round here.`
    ],
    trainer: [
      `@3 Kneadin' dough for decades? That's forearms of solid steel, bud. I always knew he was an athlete.`,
      `@4 He turned down my gym invite once. Said the {tree} was his gym. ...I get it now. I get it.`
    ],
    boss: [
      `@3 Walked away right at the top of his game. That's either wisdom or a great mystery. Probably both.`,
      `@3 Retire from glory, spend your days feedin' {bird}s by a pond. Honestly? Goals, bud. Real goals.`
    ],
    coworker: [
      `The quiet ones always got a past. Gerald the plant's next, I figure. I can feel it comin'.`,
      `@7 An {old} photo, a medal, a rice trade. Somebody oughta make a documentary. A ten-parter, easy.`
    ],
    oldman: [
      `@7 Now ya know. The pigeons knew first, mind ya. They're excellent at secrets. Terrible at chess.`,
      `@7 Come by tomorrow. Maybe I'll bake. Maybe. The {young} me still visits my hands now and again.`
    ]
  }
},

/* ============================== EP 10 ============================== */
{
  ep: 10,
  title: '第10話 「夏祭り」 — The Summer Festival',
  words: ['festival', 'summer', 'food', 'fire', 'music', 'dance', 'sing', 'everyone'],
  story:
    `Lanterns are goin' up all over town. The {festival}'s tonight — the real one, the one this whole {summer} has ` +
    `been buildin' up to. Mom's runnin' the food stalls, the coach's been "rehearsin'" somethin', the old man's got ` +
    `a mysterious apron on, and Trinity's at the door hollerin' about yukata. Everybody's gonna be there, bud. Go.`,
  timerSec: 330,
  night: true,
  quests: [
    { word: 'festival', type: 'talk', npc: 'trinity', stage: 0,
      ask: `"The {festival}'s TONIGHT! Yukata! Lanterns! Us! Why are ya still standin' there?! MOVE, bud!"` },
    { word: 'summer', type: 'inspect', obj: 'window', stage: 1,
      ask: `Look at it out there. Peak {summer}. Lanterns, cicadas, that golden evenin' light. Tonight's gonna be a good one.` },
    { word: 'food', type: 'buy', item: 'one of everything on a stick', stage: 2,
      ask: `One of every {food} on a stick, please! It's festival law. Nobody made the rules, they just ARE.` },
    { word: 'fire', type: 'talk', npc: 'mom', stage: 3,
      ask: `"Careful with the {fire} tonight! And the fireworks! And for the love of god keep your father away from BOTH!"` },
    { word: 'music', type: 'talk', npc: 'friend', stage: 4,
      ask: `"Do ya HEAR that {music}?! The drums are warmin' up! This is the best day of my whole entire year, bud!"` },
    { word: 'dance', type: 'do', loc: 'park', verb: 'walk', amount: 600, stage: 5,
      ask: `{dance} your way through the park. Yeah, people are watchin'. It's fine. Tonight's the night for it, bud.` },
    { word: 'sing', type: 'talk', npc: 'trainer', stage: 6,
      ask: `Tonight the coach is gonna {sing}. A haiku. With a melody. Some folks see it once and are never quite the same after.` },
    { word: 'everyone', type: 'talk', npc: 'oldman', stage: 7,
      ask: `"{everyone} came," he smiles. The whole town, under one summer sky. Even the pigeons showed up lookin' fancy.` }
  ],
  stageToasts: {
    1: `🏮 Lanterns everywhere. Look outside — the whole town's glowin'.`,
    2: `🍡 Festival rule number one: ya arrive with food. To the stalls.`,
    3: `🔥 Mom's runnin' fire safety. Report in, or else.`,
    4: `🥁 The drums! It's startin'! Find your friend before he bursts.`,
    5: `💃 The music's taken over your legs. Just let it happen.`,
    6: `🎤 It's gone quiet... the coach is walkin' to the stage... with a microphone...`,
    7: `🎆 Fireworks soon. Find the old man. Find everyone.`
  },
  npcLines: {
    trinity: [
      `This yukata took forty minutes, bud. You may now say somethin' {pretty}-related. Go ahead. I'll wait.`,
      `Win me one of those goldfish. Fish-Thief needs a rival. Builds character, havin' a rival.`
    ],
    mom: [
      `I'm runnin' three stalls and your father's banned from every last one of 'em. Enjoy the {festival}!`,
      `Eat everything! Festival calories don't count, bud. That's just science, that is.`
    ],
    dad: [
      `I'm not banned from the stalls. I'm on a special assignment. That happens to be far away from the stalls.`,
      `Fireworks and me got history. 2011. The neighbor's pond. We keep a respectful distance now, me and the fireworks.`
    ],
    sister: [
      `I've had six things on sticks already and I'm just warmin' up, bud. Just warmin' up.`,
      `Fish-Thief's wearin' a tiny festival bandana. This is the best {evening} of my whole life.`
    ],
    friend: [
      `FESTIVAL! FESTIVAL! ...Sorry. I've been like this since noon, bud. Can't help it.`,
      `The drum team let me hit the drum one time last year. I still got the {photo}. Framed it. Frame and everything.`
    ],
    shopkeeper: [
      `My stall's a work of art tonight. Everything on sticks! The stick supplier loves me, absolutely loves me.`,
      `Even the {cat} showed up. Sittin' on my register like it pays taxes round here.`
    ],
    trainer: [
      `Tonight I premiere "Summer Squat: A Haiku in B Minor." Years in the makin', bud. Years.`,
      `Festival {food} is sacred fuel. Tomorrow we sweat. But tonight — tonight we FEAST!`
    ],
    boss: [
      `The office is closed and my heart is open. See ya at the fireworks, bud.`,
      `I judge the stall contest every {summer}. The power's intoxicatin'. The free snacks, more so.`
    ],
    coworker: [
      `I brought Gerald. He loves the {music}. Look at him sway. ...That might just be wind, actually.`,
      `Festival tip: the takoyaki line moves fastest right around minute forty. I got charts on it.`
    ],
    oldman: [
      `Every {summer} there's one perfect night. This is it, bud. Put the phone away for the fireworks.`,
      `I baked for the festival. First time in forty years. Tell no one. ...Tell {everyone}.`
    ]
  }
}
]

import { SEASON2 } from './season2'
import { SEASON3 } from './season3'
import { SEASON4 } from './season4'
import { SEASON5 } from './season5'
import { SEASON6 } from './season6'
import { SEASON7 } from './season7'
EPISODES.push(...SEASON2, ...SEASON3, ...SEASON4, ...SEASON5, ...SEASON6, ...SEASON7)

export function episodeFor(day: number): Episode | undefined {
  return EPISODES.find(e => e.ep === day)
}