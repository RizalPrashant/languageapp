import type { Episode } from './episodes'

/* =====================================================================
   SEASON 7 (episodes 61-70) — "The Summer Season"
   Trinity opens Café Tuesday. The elders honeymoon at the sea. Sister
   runs the stand. The doctors have a secret. Ep70: festival, opening
   day, and one more piece of news on the hill.
   VOICE RULE: every line must pass the say-it-out-loud test.
   ===================================================================== */

export const SEASON7: Episode[] = [

/* ============================== EP 61 ============================== */
{
  ep: 61,
  title: '第61話 「海へ」 — Off to the Sea',
  words: ['trip', 'sea', 'ticket', 'map', 'looking forward', 'absence', 'wave', 'sand'],
  story:
    `The newlyweds are off to the sea for two days. The old man's eighty-four and never once seen it — ` +
    `there was always bread to bake. Not this week. Today the whole town helps 'em pack.`,
  timerSec: 300,
  quests: [
    { word: 'trip', type: 'talk', npc: 'grandma', stage: 0,
      ask: `"We're takin' a {trip}, dear! Two days at the sea. My husband's never seen it, can ya believe that? We leave tomorrow."` },
    { word: 'sea', type: 'talk', npc: 'oldman', stage: 1,
      ask: `"Sixty years I meant to go see the {sea}, grandson. There was always one more batch of bread. Well — not this week."` },
    { word: 'ticket', type: 'buy', item: 'two train tickets, window seats', stage: 2,
      ask: `Grandma wants two train {ticket}s, window seats. "He's got eighty-four years of scenery to catch up on."` },
    { word: 'map', type: 'talk', npc: 'sister', stage: 3,
      ask: `Your sister drew 'em a {map} of the beach town. There's a gold star on it. "That's where the sunset looks best. They stand RIGHT there."` },
    { word: 'looking forward', type: 'talk', npc: 'tmother', stage: 4,
      ask: `"Half the fun of a trip's the {looking forward}," Trinity's mom says. She made 'em a tiny itinerary. Item two just says "sit down and enjoy it."` },
    { word: 'absence', type: 'talk', npc: 'mom', stage: 5,
      ask: `Mom's packin' a third food hamper. "Two days of {absence} and ya'd think they were emigratin'. Hush. Trains make people hungry."` },
    { word: 'wave', type: 'talk', npc: 'trinity', stage: 6,
      ask: `"One job, everyone," Trinity says. "Somebody photographs him seein' his first {wave}. I want it on our wall."` },
    { word: 'sand', type: 'do', loc: 'street', verb: 'run', amount: 500, stage: 7,
      ask: `They forgot their sunhats! Run and catch 'em before the train — tomorrow the man finally gets {sand} in his shoes.` }
  ],
  stageToasts: {
    1: `🥖 Two whole days off. Go hear it from him.`,
    2: `🎫 Train tickets, window seats. To the store!`,
    3: `🗺️ Your sister made 'em a map. Go see it.`,
    4: `📋 There's a tiny itinerary. Item two: "sit down."`,
    5: `🧺 Mom's packin' hamper number three.`,
    6: `📸 Trinity's got a photo assignment for everyone.`,
    7: `🏃 They forgot the sunhats! RUN!`
  },
  npcLines: {
    trinity: [`He's eighty-four and he's never seen the sea. I can't handle how sweet this trip is.`,
      `@7 They made the train! Okay. Now we all pretend we're not countin' the hours 'til Thursday.`],
    mom: [`Three hampers for two days is correct, thank you. Trains make people hungry.`,
      `@5 She kissed my forehead at the gate like I was the one leavin'. I'm fine. I'm FINE.`],
    dad: [`I've checked the coast weather nine times. All clear. You're welcome.`],
    sister: [`@3 If he stands on my gold star at sunset and doesn't cry, I'll eat the map.`,
      `I'm runnin' the stand while they're gone. I got an apron and a plan. Mostly an apron.`],
    friend: [`Forty people came to wave off a two-day trip. That's us. That's who we are.`],
    shopkeeper: [`She insisted on payin' full price for the tickets. I never win with that woman.`],
    trainer: [`I taught him beach-walkin' stretches this mornin'. He nailed every single one!`],
    boss: [`The innkeeper there's an old classmate of mine. I called ahead. They're gettin' the good room.`],
    coworker: [`Gerald's gonna sit in the stand window so the regulars have someone to nod at. He takes it very seriously.`],
    oldman: [`@1 I told the koi this mornin'. They swam a little circle, which I'm fairly sure means "about time, ya old fool."`,
      `@7 Look after your sister at the stand, grandson. Actually — don't worry. She won't need it.`],
    cat: [`Fish-Thief inspected all three hampers and charged one strip of dried fish for the service. He's not comin'. He's decided the sea's just a huge bath, and he's against it.`],
    grandma: [`@0 Sixty years that man watched everyone else go places. His turn now. Final.`,
      `@7 Water my garden while we're gone, dear. And the stand's your sister's. Completely hers. She's ready.`],
    tmother: [`My whole itinerary is: arrive, sit down, and watch his face. That's the trip.`],
    tfather: [`He's eighty-four and about to see his first wave, son! I've cried twice today and they haven't even LEFT!`],
    kenji: [`I cleared 'em both for travel. Sea air, long walks, and as much ice cream as they want. That last part's a real prescription. I wrote it in pen.`]
  }
},

/* ============================== EP 62 ============================== */
{
  ep: 62,
  title: '第62話 「二人がいない間」 — While They\'re Away',
  words: ['challenge', 'register', 'burn', 'long line', 'sweat', 'failure', 'success', 'sold out'],
  story:
    `The elders are at the sea, but the stand still opens — that was the promise. So today it belongs to your ` +
    `little sister and an apron three sizes too big. The first batch goes very wrong. The second goes very right.`,
  timerSec: 315,
  quests: [
    { word: 'challenge', type: 'talk', npc: 'sister', stage: 0,
      ask: `"Today the stand's mine. That's the {challenge}. Nobody helps unless I ask!" She pauses. "…But stand somewhere close, okay?"` },
    { word: 'register', type: 'inspect', obj: 'stand_1964', stage: 1,
      ask: `The {register}'s an old tin box. There's a note inside: "The till balances itself if the bread's honest."` },
    { word: 'burn', type: 'inspect', obj: 'stand_1964', stage: 2,
      ask: `Oh no. The first batch is {burn}ed black. Even the pigeons walked away, and the pigeons eat EVERYTHING.` },
    { word: 'failure', type: 'talk', npc: 'trinity', stage: 3,
      ask: `"Hey. One {failure} just means you're a real baker now," Trinity tells her. "Everybody torches their first batch. Ask anyone. Round two!"` },
    { word: 'sweat', type: 'do', loc: 'park', verb: 'walk', amount: 450, stage: 4,
      ask: `She kneads, ya run the supplies. Flour, water, firewood — work up a {sweat}!` },
    { word: 'long line', type: 'talk', npc: 'friend', stage: 5,
      ask: `Word got around. There's a {long line} past the pond now. "They came for her," your friend grins. "And, okay, the bread."` },
    { word: 'success', type: 'talk', npc: 'mom', stage: 6,
      ask: `The second batch comes out golden. A total {success}. Mom takes one bite and goes very quiet. "…That's his bread. Same hands."` },
    { word: 'sold out', type: 'talk', npc: 'boss', stage: 7,
      ask: `By noon everything's {sold out}. The boss buys the very last roll. "Somebody tell her grandparents the kid did great."` }
  ],
  stageToasts: {
    1: `🥖 Shutters up. Your sister's got the counter.`,
    2: `📦 The old tin register. There's a note inside.`,
    3: `💨 Somethin's smokin'. GO.`,
    4: `💜 She needs one pep talk. There's exactly one right person.`,
    5: `🏃 Round two needs a supply runner. That's you.`,
    6: `👀 There's a queue past the pond now.`,
    7: `✨ Golden bread. Mom's first in line.`
  },
  npcLines: {
    trinity: [`@3 Burned the first batch, nailed the second. Honestly, that's this whole family in two trays.`,
      `@7 She sold out, and then she swept the whole stand before she'd even celebrate. Grandma's gonna cry into the sea.`],
    mom: [`@6 First my mother's bread, now my daughter's. Everyone in this family can make me cry with food.`,
      `I stood in my own daughter's line and paid full price. Those are the rules.`],
    dad: [`@2 When the batch burned I got up to help, and your mother grabbed my arm and said "hers to fix." And she fixed it.`],
    sister: [`@0 For the record, I was not scared. Okay, at 6:41 I was scared. Worth it.`,
      `@7 The note said the till balances if the bread's honest. Guess what. IT BALANCED.`],
    friend: [`@5 I've been holdin' spot one in line since seven a.m. For moral support. And bread.`],
    shopkeeper: [`She needed emergency flour at 6:45, so I ran it over myself. Funny thing — her grandpa burned his first batch in '63. Same week of summer, even.`],
    trainer: [`She kneaded right through the disaster without stoppin' once. Twelve years old! I'm namin' a warmup after her.`],
    boss: [`@7 The last roll's on my desk. I'm not eatin' it. Some things ya keep.`],
    coworker: [`The queue peaked at forty-one people and six pigeons. Five pigeons after the burnt batch. One's holdin' a grudge.`],
    oldman: [`(A postcard arrives at noon, somehow:) "If her first batch burned, tell her mine did too, summer of '63. Then I baked the best bread of my life. — Grandpa"`,
      `@7 (A second postcard, evenin':) "SOLD OUT, says the radio here. The whole beach heard me laugh. Home Thursday."`],
    cat: [`Fish-Thief guarded the till, greeted the regulars, and sat on her feet durin' the crisis. He got paid in crusts. His floury paw prints are stayin' on the counter, apparently forever.`],
    grandma: [`(She calls, seven seconds after the sellout:) "Put my granddaughter on. …The till balanced, didn't it? That's the whole test, dear. Nobody passes it on their first day. Nobody but us."`],
    tmother: [`I joined the queue and somehow got promoted to line captain. I was paid in bread. Best job I've ever had.`],
    tfather: [`I bought six rolls, son. One to eat, and five 'cause she said "anything else?" in her grandma voice and my wallet just opened.`],
    kenji: [`One singed thumb, treated on site. She asked if it'd scar. I offered a star-shaped plaster instead. We settled on both.`]
  }
},

/* ============================== EP 63 ============================== */
{
  ep: 63,
  title: '第63話 「トリニティの夢」 — Trinity\'s Dream',
  words: ['lunch break', 'quit', 'serious', 'in favor', 'oppose', 'ally', 'absorbed', 'boast'],
  story:
    `Trinity turns up at your office at lunchtime with two melon breads and that look she gets before big news. ` +
    `On the walk she finally says it: she wants to quit her city job and open a café. Right here in town.`,
  timerSec: 300,
  quests: [
    { word: 'lunch break', type: 'talk', npc: 'trinity', stage: 0,
      ask: `Trinity hijacks your {lunch break} with melon bread and a walk. "Don't panic. I practiced this speech on the cat, and he purred, so it's a good speech."` },
    { word: 'quit', type: 'talk', npc: 'trinity', stage: 1,
      ask: `"I want to {quit} my job and open a café. Here. Tea, coffee, a room full of people we love. …Say somethin'?" Ya say: what do we call it?` },
    { word: 'serious', type: 'talk', npc: 'kenji', stage: 2,
      ask: `"Is it a good idea? It's the best one I've heard all year," Kenji says. "I'm completely {serious}. Also, save me a table."` },
    { word: 'in favor', type: 'talk', npc: 'mom', stage: 3,
      ask: `Mom's {in favor} before ya finish the sentence. "A café! Where I can bring soup! No, don't argue. We'll discuss the soup AT the café."` },
    { word: 'oppose', type: 'talk', npc: 'dad', stage: 4,
      ask: `Dad says someone oughta {oppose} it, for balance. Then: "Wait, no — these are for when her BOSS tries to keep her. Seventeen arguments. Card one just says NO."` },
    { word: 'ally', type: 'talk', npc: 'friend', stage: 5,
      ask: `Your friend signs a homemade sheet titled "FIRST {ally}" and dates it. "I'm in before it even has a name. Also I call the corner table. Forever."` },
    { word: 'absorbed', type: 'talk', npc: 'sister', stage: 6,
      ask: `Ya find the two of 'em at the kitchen table, totally {absorbed} — graph paper, three pencils, three hours gone. "FYI," your sister says, "there's gonna be a cat shelf."` },
    { word: 'boast', type: 'talk', npc: 'tfather', stage: 7,
      ask: `"It's not a {boast} if it's true!" her dad booms. He's told the innkeeper, the postman, and possibly a duck. "My daughter's openin' a café!"` }
  ],
  stageToasts: {
    1: `🍈 Melon bread and big news, comin' your way.`,
    2: `💬 She said it. Now the town gets told, one at a time.`,
    3: `🩺 Start with the doctor.`,
    4: `🍲 Tell mom. Stand back one ladle's length.`,
    5: `📇 Your father's prepared index cards. Brace.`,
    6: `📝 The first ally's signin' paperwork he invented.`,
    7: `📐 Two artists, one kitchen table, three hours gone. Peek in.`
  },
  npcLines: {
    trinity: [`@1 I did the math on my commute once. Eleven years of trains adds up to a whole year of my life. A YEAR. The math quit before I did.`,
      `@6 Six tables, a cat shelf, a kids' corner. No name yet, but it's got everything else.`],
    mom: [`@3 Think about it — when it rains, this whole family's four minutes from a warm room with tea in it. She's buildin' my retirement.`],
    dad: [`@4 Card seven says "her Tuesdays aren't in your budget." Card twelve's just her hospital discharge date, underlined twice.`,
      `She's tradin' a salary for a room full of the whole town. Best trade I ever heard of, son.`],
    sister: [`@6 The cat shelf goes at window height so people see him from the street. That's not decoration, that's marketing.`,
      `The kids' corner's gettin' a comic library. Three guesses whose comics.`],
    friend: [`@5 First ally, corner table, and I'm in charge of openin'-day fireworks. The cat sat on my signup sheet, so it's official.`],
    shopkeeper: [`A café up the street's good news for me too. Her customers walk right past my window. Everything here's connected, you'll notice.`],
    trainer: [`I've asked for one protein option on the menu. If she says no, I'll graciously ask again.`],
    boss: [`She handed in her notice like a pro. I told her: a resignation only stings when nobody ever really saw ya. That city firm never did.`],
    coworker: [`Gerald's requested the sunny windowsill, whenever the café exists. I've pre-filed his transfer paperwork. We're both very calm about it.`],
    oldman: [`(Postcard:) "A café, eh? Sixty years I wondered where everyone WENT with my bread. Tell her she gets her loaves at family price, forever. — Grandpa"`],
    cat: [`Fish-Thief heard the speech before ya did and purred at the important part. He also lay down on the floor plans, which means he approves. Or the paper was warm. Could be both.`],
    grandma: [`(On the phone from the sea:) "A café? Good. Tell her my Tuesday card game moves there the day it opens. That's not a request, dear. Final."`],
    tmother: [`I'm offerin' exactly one opinion, when asked, and my supplier contacts, also when asked. This restraint's agony and I'm very proud of it.`],
    tfather: [`@7 When she was seven, she ran a restaurant on our porch. The menu was toast, tea, and a beetle she'd found. I ate there every day that summer. Best place I ever knew — 'til now.`],
    kenji: [`@2 I opened a clinic after my hardest year. She'll open a café after hers. It's a good way to come back from things.`]
  }
},

/* ============================== EP 64 ============================== */
{
  ep: 64,
  title: '第64話 「空き店舗」 — The Empty Shop',
  words: ['building', 'contract', 'rent', 'spacious', 'narrow', 'wall', 'floor', 'moving in'],
  story:
    `There's an empty shop on the hospital road — dusty windows, good bones. Turns out it was the shopkeeper's ` +
    `father's second store, and he's kept it swept for thirty years, waitin' for the right person. Today he watches ` +
    `Trinity walk the floor with her arms out, and says quiet: "There she is, papa."`,
  timerSec: 300,
  quests: [
    { word: 'building', type: 'talk', npc: 'shopkeeper', stage: 0,
      ask: `The shopkeeper takes a brass key from the register's lucky corner. "This {building} was my father's second store. I've kept it swept. Come and see."` },
    { word: 'spacious', type: 'talk', npc: 'trainer', stage: 1,
      ask: `The coach measures the room in lunges. "Eight wide, eleven long — that's {spacious}! And the corner echoes! Great for laughin'!"` },
    { word: 'narrow', type: 'talk', npc: 'coworker', stage: 2,
      ask: `The light survey: "The front's a bit {narrow}, but the afternoon sun pours right in. Gerald leaned four degrees. He's callin' dibs on the windowsill."` },
    { word: 'wall', type: 'talk', npc: 'dad', stage: 3,
      ask: `Both dads go around knockin' on every {wall} and noddin'. Nobody knows what they're listenin' for. Don't ask. It's a dad thing.` },
    { word: 'floor', type: 'talk', npc: 'mori', stage: 4,
      ask: `Dr. Mori walks across the {floor}, stops in the middle, and gives her verdict: "Solid. I've operated on worse. Take it."` },
    { word: 'rent', type: 'talk', npc: 'tmother', stage: 5,
      ask: `The {rent} talks go backwards: he wants to charge almost nothin', and the grandmas argue him UP. They settle on fair rent, three months free, and the teacup shelf stays.` },
    { word: 'contract', type: 'talk', npc: 'boss', stage: 6,
      ask: `The boss checks the {contract} with his red pen out. He doesn't use it once. "Cleanest lease I've seen in thirty years. Reads like a welcome letter."` },
    { word: 'moving in', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Keys in hand, dust in the sunlight. "{moving in} starts tomorrow," Trinity says. "But tonight, dance with me in the dust. Ya remember the steps."` }
  ],
  stageToasts: {
    1: `🔑 A brass key from the lucky corner. Go with him.`,
    2: `📏 The coach is measurin' the room in lunges.`,
    3: `🪴 The light survey's underway. The surveyor's a fern.`,
    4: `✊ The dads are knockin' on walls. It's a dad thing.`,
    5: `🩺 Dr. Mori's inspectin' the floor. It'll be quick.`,
    6: `💼 Two grandmas versus one soft-hearted landlord.`,
    7: `🖋️ Contract signed. One last thing before the work starts.`
  },
  npcLines: {
    trinity: [`@0 He kept it swept for thirty years. THIRTY YEARS. I cried before I even got my arms all the way out.`,
      `@7 When we're ninety, I'll still remember dancin' in that dust. Some rooms ya love from minute one.`],
    mom: [`The teacup shelf stays! I'm bringin' my mother's teapot for it. Tell everyone.`],
    dad: [`@3 The knockin' isn't about the walls, son. It's how dads ask a buildin' to look after somebody. And I swear this one knocked back.`],
    sister: [`The kids' corner gets a window! Sunlight fades comics, but faded comics are READ comics, so I've decided to be happy about it.`,
      `@2 Gerald leaned four whole degrees. His record was three. Give him the windowsill or answer to me.`],
    friend: [`@7 Me and the shopkeeper watched 'em dance through the window. He already had tissues in his pocket. That man's always ready.`],
    shopkeeper: [`@0 Papa told me, "keep the other store swept for whoever this town grows next." I always thought he meant a person. She was four minutes away the whole time.`,
      `@5 They argued my price up while I argued it down. We landed exactly where papa would've set it.`],
    trainer: [`@1 Door to counter's a dead straight line. Perfect for the mornin' rush. This buildin's been in trainin' for thirty years!`],
    boss: [`@6 Three months free and fair rent after. She'll break even by September. This town shows up for MAIL. Book it.`],
    coworker: [`@2 Four point two hours of direct sun, no drafts, one record fern lean. My professional recommendation: yes.`],
    oldman: [`(Postcard:) "His father used to say he kept that store for the town's next heart. I assumed he meant a person. Tell him his papa won the bet. — Grandpa"`],
    cat: [`Fish-Thief walked one lap of the room, sat in the exact middle for eleven minutes, and left. That's his whole inspection. The buildin' passed.`],
    grandma: [`@5 He tried to give her the shop for free, so we made him take money. Enough that his pride eats, not so much that hers starves. That's the whole trick, dear.`],
    tmother: [`@5 I've negotiated with government ministries, and the shopkeeper's harder. He kept fightin' us with kindness.`],
    tfather: [`I knocked on a wall and somethin' knocked back, son! I heard it! Your father heard it! That buildin's family now!`],
    kenji: [`@4 A café on the hospital road catches every relieved family and every tired night nurse. Best spot in town for it. She knows exactly what she picked.`]
  }
},

/* ============================== EP 65 ============================== */
{
  ep: 65,
  title: '第65話 「大工事」 — The Great Renovation',
  words: ['cooperation', 'paint', 'board', 'tool', 'brush', 'break time', 'decoration', 'completion'],
  story:
    `Renovation day. By seven a.m. there's more volunteers than floor space. The dads build the counter, the ` +
    `moms feed everyone, the coach carries everything twice, and Trinity runs the show with a paint chart in one hand.`,
  timerSec: 315,
  quests: [
    { word: 'cooperation', type: 'talk', npc: 'friend', stage: 0,
      ask: `The volunteer sheet's now a full {cooperation} plan — shifts, skills, snack preferences. "Everyone's on it," your friend says. "The waitlist is pigeons."` },
    { word: 'paint', type: 'buy', item: 'every can of warm cream paint', stage: 1,
      ask: `Go buy the {paint} — Trinity picked "warm cream." The shopkeeper reads the label and goes still. It's the exact color his papa mixed for the first store in 1961. Nobody planned that.` },
    { word: 'board', type: 'talk', npc: 'dad', stage: 2,
      ask: `The counter goes up one {board} at a time. The dads argue over which way the grain faces 'til grandpa rules by phone: "Toward the door. Wood should greet people."` },
    { word: 'tool', type: 'talk', npc: 'trainer', stage: 3,
      ask: `The coach is in charge of every {tool}. "A tool's just a dumbbell with a job!" The toolbox is sorted by grip confidence. His system. It works, weirdly.` },
    { word: 'brush', type: 'talk', npc: 'sister', stage: 4,
      ask: `While nobody's lookin', your sister takes a tiny {brush} and paints a little cat on the baseboard, facin' the door. "Every room needs a guardian." It stays. Obviously.` },
    { word: 'break time', type: 'talk', npc: 'mom', stage: 5,
      ask: `Noon. Mom declares {break time}, and nobody argues with mom. Twenty people eat onigiri on upturned paint buckets. "Look around," she says. "It already works."` },
    { word: 'decoration', type: 'talk', npc: 'tmother', stage: 6,
      ask: `The {decoration} squad arrives: hand-sewn cushions from the book club, and the teacup shelf gets its first residents. Papa's cups. Mom's teapot. One seashell.` },
    { word: 'completion', type: 'inspect', obj: 'counter_cafe', stage: 7,
      ask: `And… done. {completion}. The counter catches the evenin' light, and Trinity runs her hand along the wood. "Okay. Now it needs a name."` }
  ],
  stageToasts: {
    1: `📋 Shift one has assembled. Basically everyone.`,
    2: `🎨 Paint run — and the color's got a history.`,
    3: `🪚 Two dads, one saw, one argument about wood grain.`,
    4: `🔧 The toolbox is sorted by grip confidence. Sure. Go see.`,
    5: `🐈 Someone small's paintin' somethin' by the window.`,
    6: `🍙 NOON. Mandatory onigiri. First meal in the new room.`,
    7: `🛋️ Cushions have arrived. The shelf's fillin' up.`
  },
  npcLines: {
    trinity: [`@4 There's a little painted cat guardin' my door forever now. I went outside and cried, and two nurses stopped to check on me. That's this street for ya.`,
      `@7 Stay a minute. I just want to look at it with ya.`],
    mom: [`@5 Twenty people eatin' lunch on paint buckets, and it was already the best restaurant in town. The tea's just a bonus.`],
    dad: [`@2 Grandpa settled our carpentry argument by phone, mid-kneadin'. Ya can't argue with a man holdin' that much dough.`,
      `I built a counter with her father today. Best day I've had with a saw in years.`],
    sister: [`@4 Forty minutes, three brushes. His eyes follow ya to the door. When I'm famous, people'll visit that baseboard.`],
    friend: [`@0 The pigeon waitlist started as a joke, and now there's real drama on it. I've never been prouder of a joke.`],
    shopkeeper: [`@1 Papa used to say a store should look like the first hour of a good day. That's why he mixed that color. She picked it off a chart without knowin'. I needed a minute in the stockroom.`],
    trainer: [`@3 We own six tables and I carried eleven. Some of 'em twice, for form!`],
    boss: [`I took a personal day for this. Told the office I was at a seminar. Best seminar of my career.`],
    coworker: [`Gerald watched the light all day and didn't lean once. He's savin' it all for his windowsill. That's discipline.`],
    oldman: [`@7 We're back from the sea, and the whole street smells like fresh paint. The grain faces the door — good. Wood should greet people.`,
      `You'll ask about the sea, so: it's enormous, it was worth sixty years, and yes, there's a photo. Trinity's already got it on four walls.`],
    cat: [`Fish-Thief walked one line of footprints through the sawdust, studied his painted twin for a long moment, and slow-blinked at it. That's cat for "welcome aboard."`],
    grandma: [`@6 The seashell went on the shelf, third from the left, where the light lands in the afternoon. He carried it home from the beach in his breast pocket.`],
    tmother: [`@6 The book club sewed twelve cushions from one pattern, and every one came out different, and each fits a different chair perfectly. I don't have a joke. It's just nice.`],
    tfather: [`I helped carry the counter, son! My hands were ON it! When ya drink your coffee there, some of that warmth's ME!`],
    kenji: [`Today's injuries: three splinters, one hammered thumb, one shopkeeper overcome by a paint color. All treated. No charge for any of it.`]
  }
},

/* ============================== EP 66 ============================== */
{
  ep: 66,
  title: '第66話 「メニュー会議」 — The Menu Council',
  words: ['menu', 'fresh milk', 'black tea', 'sandwich', 'juice', 'bitter', 'rich', 'try out'],
  story:
    `Menu day. Trinity wants it short and honest — every item somebody's favorite. Two big questions: will ` +
    `grandpa's stand supply the bread, and will Kenji let his grandmother's lemon tea go on a menu for the first ` +
    `time since she poured it herself?`,
  timerSec: 300,
  quests: [
    { word: 'menu', type: 'talk', npc: 'trinity', stage: 0,
      ask: `Trinity props the blank chalkboard on the counter. "Okay! The {menu}. I want it small — just things people here actually love. Come taste stuff with me."` },
    { word: 'fresh milk', type: 'buy', item: 'crates of fresh milk and fruit', stage: 1,
      ask: `Run to the store for {fresh milk} and fruit. The shopkeeper adds a jar of honey with no label. "If it makes the menu, it stays anonymous. Family rule."` },
    { word: 'black tea', type: 'talk', npc: 'kenji', stage: 2,
      ask: `The big question: can his grandmother's lemon {black tea} go on the menu? Kenji thinks, then nods. "Yes. One condition — Trinity learns it by hand. No recipe cards. That's how grandma taught me."` },
    { word: 'sandwich', type: 'talk', npc: 'oldman', stage: 3,
      ask: `The bread deal: grandpa's stand supplies every {sandwich}. He refuses payment, grandma argues him into acceptin' it, and everyone agrees the crusts stay on.` },
    { word: 'juice', type: 'talk', npc: 'sister', stage: 4,
      ask: `Your sister tests four {juice} blends for the kids' menu. "Too sweet. Too pulpy. Too orange — that's a real thing, write it down." Number four wins.` },
    { word: 'bitter', type: 'talk', npc: 'boss', stage: 5,
      ask: `The boss tries five coffees and taps cup three. "That one. Properly {bitter}. Tastes like a Monday mornin', and I mean that as a compliment. Call it that." So now there's a coffee named Monday.` },
    { word: 'rich', type: 'talk', npc: 'mori', stage: 6,
      ask: `Dr. Mori sips the cocoa. "…{rich}," she says. Then, quieter: "There was a shop near my old hospital that made it like this. I haven't had it in twenty years." The cocoa's in.` },
    { word: 'try out', type: 'talk', npc: 'grandma', stage: 7,
      ask: `Last step: grandma gets to {try out} everything before it's official. At the melon bread she stops. "This is the one from the day ya told him. It goes first on the board."` }
  ],
  stageToasts: {
    1: `🥛 The tastin' table needs supplies. Go.`,
    2: `🍋 The lemon tea question's about to be asked.`,
    3: `🥖 The bread deal: newlyweds negotiatin' against each other.`,
    4: `🧃 Four juices, one very tough critic.`,
    5: `☕ Five coffees, one boss, total silence.`,
    6: `🍫 Dr. Mori's picked up the cocoa.`,
    7: `👵 Nothin' goes on the board without grandma's nod.`
  },
  npcLines: {
    trinity: [`@2 He taught me the tea by standin' next to me and fixin' my wrist twice. Didn't say a word. Somehow it's the nicest lesson I've ever had.`,
      `@7 Six things on the menu, and every one of 'em is somebody's story. Exactly what I wanted.`],
    mom: [`My soup made the menu as a "seasonal special." Which means: whenever I show up with a pot. I couldn't be happier.`],
    dad: [`I tasted all five coffees to be supportive. Cup three's definitely Monday. Four and five are also Monday if ya drink 'em fast enough.`],
    sister: [`@4 Kids can tell when a juice is tryin' too hard. Number four just tastes like juice. That's the secret.`],
    friend: [`I tried the cocoa and made a noise that brought two nurses in from the street. Put THAT on the board.`],
    shopkeeper: [`@1 The honey's from the hives behind the shrine — the bees that work the hill flowers. So that jar's technically been to every weddin' in town. Anonymous, sure.`],
    trainer: [`My protein smoothie made the menu! It's called THE FORM. It's banana, mostly. I'm so happy.`],
    boss: [`@5 Thirty years in business, and my proudest achievement's now a coffee called Monday.`],
    coworker: [`The menu research was one twelve-year-old with a clipboard and a room full of people who love each other. It'll outsell everything in town.`],
    oldman: [`@3 She argued me into chargin' her money, usin' tricks she learned from watchin' me lose arguments to her for sixty years. So really, I taught her everything.`,
      `My bread in the mornin', her tea in the afternoon. This street's turnin' into one long table.`],
    cat: [`Fish-Thief taste-tested the fresh milk from his cushion. The review was one full minute of purrin'.`],
    grandma: [`@7 The melon bread from the day she told him goes first on the board. A dream should sell the thing it started with, dear.`,
      `@3 Arguin' against my own husband over bread prices was the most fun I've had since the beach. He lost. He was so relieved.`],
    tmother: [`Six items. SIX. I've planned banquets with forty dishes and less heart than that one chalkboard.`],
    tfather: [`They let me taste everything and I said yes to all of it. Apparently that's not how tastin' works. It's how I work!`],
    kenji: [`@6 Twenty years I've known Dr. Mori, and I learned about that cocoa shop today. One sip did it. Cafés get things outta people that clinics can't.`,
      `@2 When the tea finally came out right, Trinity cried into the steam. Grandma would've said that's part of the recipe.`]
  }
},

/* ============================== EP 67 ============================== */
{
  ep: 67,
  title: '第67話 「先生たちの秘密」 — The Doctors\' Secret',
  words: ['rumor', 'coincidence', 'hot water', 'playing cards', 'midnight', 'boil', 'cool', 'restraint'],
  story:
    `Your sister walks past the clinic at dusk and sees somethin' incredible: lights on late, two teacups, and ` +
    `Dr. Mori LAUGHIN'. Then she does the most shockin' thing in town history — she keeps it to herself. Almost. ` +
    `Now the whole town faces the real test: can it mind its own business, just this once?`,
  timerSec: 300,
  quests: [
    { word: 'rumor', type: 'talk', npc: 'sister', stage: 0,
      ask: `Your sister pulls ya behind the stand. "I got a {rumor}. A huge one. Clinic, teacups, laughin'. I've kept it secret for EIGHTEEN HOURS. I'm only tellin' you. This is so hard."` },
    { word: 'coincidence', type: 'talk', npc: 'coworker', stage: 1,
      ask: `Ya mention it to the coworker, who sighs and opens a folder. "What a {coincidence}. Clinic lights on late, every Tuesday and Friday, since the weddin'. I've known for months. Told nobody."` },
    { word: 'hot water', type: 'talk', npc: 'kenji', stage: 2,
      ask: `Kenji's scrubbin' the kettle at four in the afternoon. "The {hot water} needs to be ready by seven. For tea. With… a colleague." He starts alphabetizin' the bandages. They're already alphabetized.` },
    { word: 'playing cards', type: 'talk', npc: 'mori', stage: 3,
      ask: `Ya ask Dr. Mori about her evenins. "Tuesdays I play {playing cards} with your grandmother. Fridays are also cards." A pause. "…We never finish a game. The tea gets cold. The talkin' doesn't."` },
    { word: 'midnight', type: 'talk', npc: 'grandma', stage: 4,
      ask: `"Nothin' that runs past {midnight} is a card game, dear," grandma says. "I've known for weeks and said NOTHIN'. Do ya know what that costs me? I'd better get a weddin' outta this. No rush."` },
    { word: 'boil', type: 'buy', item: 'the good copper kettle (anonymous)', stage: 5,
      ask: `The town allows itself exactly one move: a kettle that can {boil} water for two without shriekin', left at the clinic door. The note: "For colleagues. — The Town (mindin' its own business)."` },
    { word: 'cool', type: 'talk', npc: 'oldman', stage: 6,
      ask: `"Evenins get {cool} by the pond," the old man says, waterin' his flowers. "When the town watched me and her too closely, the kindest thing anyone did was pretend not to look. Pass that around."` },
    { word: 'restraint', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Friday evenin'. Fourteen people all "happen" to head toward the clinic — and twenty meters out, they stop, look at each other, and go home. Actual {restraint}! Inside, two doctors raise their teacups at the window.` }
  ],
  stageToasts: {
    1: `🤫 Your sister's got a huge secret. Behind the stand. Now.`,
    2: `📊 The coworker's got a folder. 'Course he's got a folder.`,
    3: `🫖 Kenji's scrubbin' the kettle at 4 p.m. Interestin'.`,
    4: `🃏 Ask Dr. Mori about her evenins. Casually.`,
    5: `👵 Grandma's been silent for WEEKS. Hear what it cost her.`,
    6: `🎁 The town gets one move: an anonymous kettle.`,
    7: `🌊 The old man knows a thing or two about bein' watched.`
  },
  npcLines: {
    trinity: [`@7 Fourteen people turned around all by themselves. When we got engaged, they hid behind eleven trees. I'm so proud of everyone I could cry.`,
      `@3 "The tea gets cold, the talkin' doesn't." Nobody's allowed to make a big deal of it. I'm makin' a big deal of it privately, in my heart.`],
    mom: [`I know nothin'. I've seen nothin'. The kettle was partly my idea. The anonymous part was ALL my idea.`],
    dad: [`@7 We all turned around at the same moment, like a school of very polite fish. Hardest walk of my life, son. Your mother held my sleeve the whole way home.`],
    sister: [`@0 Eighteen hours! My old record was four minutes! I'm basically a vault now.`,
      `@7 Okay, I did draw it. But it's in the locked sketchbook, and it stays there 'til their weddin'. However long that takes. I can wait.`],
    friend: [`For once, I planned nothin'. Some things ya don't organize. I just leave the corner table free on Tuesdays and Fridays. Just in case.`],
    shopkeeper: [`Every Tuesday and Friday evenin', the same customer buys two melon breads and a bar of the good chocolate. I say nothin'. My face says nothin'. Hardest work I do all week.`],
    trainer: [`I've been whisperin' for three weeks straight! Did ya know whisperin' gets easier with practice? Everything does!`],
    boss: [`Two colleagues, tea at seven, card games that never finish. That was me and a woman from accountin' thirty-one years ago. She's my wife now. That's all I'm sayin'.`],
    coworker: [`@1 Some information isn't ready to be information yet. Ya sit on it and let it grow. Gerald taught me that. He's a plant. It comes naturally.`],
    oldman: [`@6 When I was courtin', this town gave me committees and a spy operation, and honestly, I loved every second. But those two aren't me. Some people need the quiet. Ya can tell which is which if ya pay attention.`],
    cat: [`Fish-Thief has quietly added the clinic porch to his Tuesday and Friday rounds. He sits facin' the street, like a very small bouncer. Nobody asked him to. That's the point.`],
    grandma: [`@4 She deals me terrible cards on purpose so our games end early, and I pretend I haven't noticed. That's love too, dear.`,
      `@7 When the town turned around, my husband cried into his waterin' can. It never once turned around for him. It's learnin'.`],
    tmother: [`Yes, I bought a binder for 'em. It's in a drawer. The first page is blank, and I check every mornin' that it's still blank. It's my new form of meditation.`],
    tfather: [`My wife hides my walkin' shoes on Fridays now. She knows me too well, son. My banner hand keeps itchin' to paint a stethoscope. Not yet. NOT YET.`],
    kenji: [`@5 She read the kettle note twice and said, "they know." I said they'd probably known longer than we had. She said "ha." Which, from her, is a whole conversation.`,
      `@7 Honestly? I don't know what this is yet. Neither does she. But the town backed off and gave us room to find out. That's the kindest thing it's ever done for me.`]
  }
},

/* ============================== EP 68 ============================== */
{
  ep: 68,
  title: '第68話 「看板」 — The Sign',
  words: ['sign', 'specialty', 'draw', 'invite over', 'meaning', 'Tuesday', 'aroma', 'chill'],
  story:
    `The café needs a name, and the whole town's got opinions — the suggestion box filled up in an hour and needed ` +
    `a second box. But Trinity's been quiet all week, like someone who already knows. When she finally says it out ` +
    `loud, the room goes to pieces. 'Specially one doctor.`,
  timerSec: 300,
  quests: [
    { word: 'sign', type: 'talk', npc: 'friend', stage: 0,
      ask: `The {sign} committee reports: two full boxes. Highlights include "Café Cat Shelf" and forty-two worse ones. "Good thing the founder gets a veto," your friend says.` },
    { word: 'specialty', type: 'talk', npc: 'trainer', stage: 1,
      ask: `The coach pitches his idea: "CAFÉ GAINS! Our {specialty}: strength through hydration! The logo's a bicep holdin' a teacup. Gently!" He's voted down with so much love that he frames the rejection.` },
    { word: 'draw', type: 'talk', npc: 'sister', stage: 2,
      ask: `Whatever the name is, your sister gets to {draw} the signboard: a cat, a cup, and steam that curls into the shape of the hill. "I did forty drafts. The first one was right all along."` },
    { word: 'invite over', type: 'talk', npc: 'tmother', stage: 3,
      ask: `Trinity's mom plans to {invite over} the whole town for openin' day — forty hand-written cards, each with that person's usual drink already written inside. How does she know everyone's order? She just does.` },
    { word: 'meaning', type: 'talk', npc: 'boss', stage: 4,
      ask: `"A good name's got {meaning} ya can feel without the explanation," the boss says. Then he looks at Trinity. "You've already got one, haven't ya." She smiles. "Since the hospital."` },
    { word: 'Tuesday', type: 'talk', npc: 'trinity', stage: 5,
      ask: `"When I was sick, Kenji told my husband: nobody gets always. What ya get's now. Tuesdays are real." She takes a breath. "So — Café {Tuesday}. 'Cause an ordinary day ya get to keep is the best thing there is."` },
    { word: 'aroma', type: 'talk', npc: 'kenji', stage: 6,
      ask: `Ya find Kenji outside, cleanin' glasses that are already clean. "My words on her door. My grandmother's tea inside. The {aroma} will reach the street." Dr. Mori hands him her handkerchief. She brought it for exactly this.` },
    { word: 'chill', type: 'buy', item: 'a mountain of ice blocks', stage: 7,
      ask: `It's high summer, so the menu needs a cold side. Buy ice — {chill} the barley tea, ice the coffee. "Iced Monday" goes on the board. The sign goes up tomorrow.` }
  ],
  stageToasts: {
    1: `📮 Both suggestion boxes are full. It's chaos. Good chaos.`,
    2: `💪 The CAFÉ GAINS pitch is happenin'. Bring love.`,
    3: `🎨 Forty drafts exist. Go see draft one.`,
    4: `💌 Forty invitations, each with a usual order inside.`,
    5: `⚓ The boss asks the right question. Trinity's got that look.`,
    6: `🏮 She's gonna say the name. Get in there.`,
    7: `🥲 One doctor's outside cleanin' clean glasses. Go stand with him.`
  },
  npcLines: {
    trinity: [`@5 I've had the name since the hospital ward. I just needed the room to exist first. Today it went on the door.`,
      `@6 He stood out there polishin' clean glasses, and I cried onto my brand-new counter. First stain. It stays.`],
    mom: [`@5 I was there the Tuesday she got sick and the Tuesday she came home. And now Tuesday means tea. That girl.`],
    dad: [`@1 CAFÉ GAINS lost fair and square, son, and the coach took it like a champion. Then he bench-pressed both suggestion boxes on his way out.`],
    sister: [`@2 The steam curls into the hill shape 'cause that's where everything happens in this family. The hill earned it.`],
    friend: [`@0 Forty-three suggestions, and she's had the name since the hospital. Classic. I'm still framin' mine, though. "Beans of the 1964 Extended Universe" deserved better.`,
      `@5 Openin' fireworks are locked in: ONE shell, shaped like a teacup, right when the sign lights up. I found a guy who does teacups. There's a guy for everything.`],
    shopkeeper: [`@5 Café Tuesday, painted in papa's cream, on papa's street. When that sign goes up, I'm closin' my store for an hour to watch. Papa's portrait's comin' with me.`],
    trainer: [`@1 My rejected proposal now hangs on the gym wall between the quotes. Which makes it a quote. No losers in this town!`],
    boss: [`@4 My company's named after my grandfather's boat. Nobody remembers the boat, but everybody trusts the name. That's how ya know a name works.`],
    coworker: [`@5 "Tuesdays are real" has been the most-quoted line in my files since the hard season. And now it's a buildin'.`],
    oldman: [`@5 Sixty years of bakin', and the days I remember best were always the plain Tuesdays. Somebody finally named a shop after the truth.`],
    cat: [`Fish-Thief sat under the empty sign bracket for a while, lookin' up, checkin' the angles. His portrait goes up there tomorrow. He wants it straight.`],
    grandma: [`@5 Named after the day ya keep, not the day ya dream about. Took me sixty years to learn that one. She got there by thirty.`],
    tmother: [`@3 People think the cards are showin' off. They're not. I've just been payin' attention to everyone's order for six years. That's all a binder ever was.`],
    tfather: [`@5 Everyone cried into the new cushions, and the coach lifted me clean off the floor, son! And my towels were at the inn! I wept completely unprepared, like an amateur! No regrets!`],
    kenji: [`@6 I told one scared husband "Tuesdays are real" 'cause it was the truest thing I had on hand. Tomorrow it goes over a door. Ya never know where a sentence'll end up.`,
      `@5 Mori kept her handkerchief out all evenin'. For me. "Efficient," she said. I'm startin' to think that word means somethin' else entirely.`]
  }
},

/* ============================== EP 69 ============================== */
{
  ep: 69,
  title: '第69話 「開店前夜」 — The Night Before Opening',
  night: true,
  words: ['all-nighter', 'coat', 'shelf', 'jam', 'shell', 'cup', 'memento', 'encounter'],
  story:
    `The sign's up, and tomorrow the doors open. Tonight the café glows half-lit while the town drifts in, one ` +
    `by one, everyone bringin' some small thing for the shelves. Meanwhile, Trinity keeps slidin' the coffee tin ` +
    `further away from herself. It's probably nothin'. Grandma noticed. Grandma's smilin' about somethin'.`,
  timerSec: 300,
  quests: [
    { word: 'all-nighter', type: 'talk', npc: 'trinity', stage: 0,
      ask: `"I'm pullin' an {all-nighter} to get everything ready," Trinity announces. Ya check her list. Eleven items. Nine are done. "…Fine, a quarter-nighter. But stay with me anyway?"` },
    { word: 'coat', type: 'inspect', obj: 'counter_cafe', stage: 1,
      ask: `The counter gets one last {coat} of oil, rubbed in by hand. The shopkeeper says his papa did this every night for thirty years: "You're not polishin' wood, you're sayin' goodnight to it."` },
    { word: 'shelf', type: 'talk', npc: 'dad', stage: 2,
      ask: `The dads stock the mug {shelf} and get into an argument about spacin'. "Mugs need air." "Mugs need AIR?" It's not really about the mugs. Let 'em have the hour.` },
    { word: 'jam', type: 'buy', item: 'a dozen jars of summer jam', stage: 3,
      ask: `One last supply run: the summer {jam}, jars still warm. There's a note on jar seven from the shopkeeper's wife: "For the first mornin'. Everything after this jar, ya earned."` },
    { word: 'shell', type: 'talk', npc: 'grandma', stage: 4,
      ask: `Grandma carries the honeymoon {shell} over and sets it next to papa's teacups, very formally. "There. Now the shelf's complete. Don't move anything."` },
    { word: 'cup', type: 'talk', npc: 'kenji', stage: 5,
      ask: `The doorbell rings. It's Kenji, holdin' a wooden box ya recognize. His grandmother's teacups. All of 'em. "A {cup} belongs where people gather. Now she pours for the whole town."` },
    { word: 'memento', type: 'talk', npc: 'mori', stage: 6,
      ask: `Dr. Mori brings a {memento} for the wall: her residency form, framed — the one she signed at the pond weddin'. "Proof that I stayed. Hang it where I can see it from my chair." Her chair's next to Gerald's windowsill.` },
    { word: 'encounter', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Midnight comes and she locks the door. "Funny, right? Every {encounter} that built this room started with eight words a day. Whatever happens next, we bring it here first. Window table. Standin' reservation."` }
  ],
  stageToasts: {
    1: `📝 Her list's got eleven items. Nine are done. Negotiate.`,
    2: `🪵 One last coat for the counter. Take a turn with the cloth.`,
    3: `☕ The dads are arguin' about mug spacin'. Let 'em.`,
    4: `🍑 Warm jam jars at the store. Read the note on jar seven.`,
    5: `🐚 Grandma's doin' somethin' ceremonial at the shelf.`,
    6: `🔔 The doorbell. A wooden box. Ya know that box.`,
    7: `🖼️ One more gift for the wall. Then the last quiet hour.`
  },
  npcLines: {
    trinity: [`@5 I tried to say the cups were too much, and he said, "same shift, better hours." So tomorrow's first tea pours from his grandma's cup. House rule, forever.`,
      `@7 Ignore me bein' weird about the coffee smell. It's nothin'. Kiss me and lock the door twice — the bell deserves an encore.`],
    mom: [`I brought the soup pot lid — the one from all those hospital trips. It hangs in her kitchen now. Close to hand, just in case.`],
    dad: [`@2 I picked the doorbell myself. Brass. Rings true every time. A door should sound happy when it opens.`],
    sister: [`My comics are on the kids' shelf in readin' order, with a sign that says START HERE. Touch the sign and perish.`,
      `@6 Dr. Mori picked the chair right next to Gerald's windowsill. Gerald's got a neighbor now. He's gonna be unbearable.`],
    friend: [`The openin' firework's loaded. One teacup of fire over the hospital road. My whole savings. Zero regrets.`,
      `@5 Also — the girl from the fireworks shop helped me plan it, and her name's Hanabi. That literally means FIREWORKS. I'm not makin' this up. Focus on Trinity tomorrow. But BUDDY.`],
    shopkeeper: [`@3 Jar seven's my wife's handwritin'. Forty years married and she can still knock me flat with one sentence on a label.`,
      `@1 I watched papa's goodnight ritual done by new hands tonight, and for once I didn't need the stockroom. I just watched.`],
    trainer: [`My openin'-eve advice for the founder: sleep, water, one banana at dawn. She laughed. I wasn't jokin'. Pourin' tea all day's a workout!`],
    boss: [`I brought a card for her register's lucky corner. My first boss put one in mine: "Balance the till, but feed the street." It's the only advice there is.`],
    coworker: [`Tonight's donations: two families' worth of teacups, twelve jars of jam, a seashell, a soup lid, a framed form, and a brass bell. I counted. This room's got more history per shelf than the shrine.`],
    oldman: [`@4 His thirty years of sweepin', my sixty of waitin' — and tomorrow both open for business. Whenever you're in a hurry about somethin', go stand in front of that shelf for a minute.`,
      `The stand delivers at dawn. First loaves, crusts on. She argued my price up, so now I get to argue it back down across her counter every mornin'. I can't wait.`],
    cat: [`Fish-Thief did his final walk-through: perimeter, cat shelf, his painted twin. He sniffed the coffee tin's weird new spot for a long time and said nothin', the way cats say nothin' loudly. Tonight he sleeps on the doormat, facin' the street.`],
    grandma: [`@4 The coffee tin moved twice tonight. Her tea's been pale all week, and she turned down melon bread at nine o'clock, which has never happened in the history of this family. I've said nothin', dear. I've just bought yarn. Spring colors. Final.`],
    tmother: [`All forty invitations are delivered. The innkeeper read his — "barley tea, corner of the counter, no fuss" — and had to sit down on his own steps for a bit.`,
      `@7 At the door tonight she almost said somethin', then tucked it away for later. I know that look. I told my husband, "buy towels." He didn't ask why. After thirty years, the good ones don't ask.`],
    tfather: [`The welcome banner's DONE, son! Wave, bread roll, teacup, coffee cup, the café sign, and one little brass bell in the corner. The innkeeper says it's technically a tapestry now!`,
      `@7 My wife said "buy towels," so I bought six, no questions asked. But my hands were shakin' in the towel aisle, son. Somethin's comin'. A dad's hands always know.`],
    kenji: [`@5 Those cups were the last thing of hers I had. Tonight they went where she'd have wanted 'em. I walked home feelin' lighter than I have in years.`,
      `@7 One small note, just between us: pale tea, and a coffee tin that keeps movin' further away. I'm diagnosin' nothin'. But I did buy lemons on the way home. Grandma's tea was always easiest on certain stomachs. Come spring, you'll know why I'm smilin'.`]
  }
},

/* ============================== EP 70 ============================== */
{
  ep: 70,
  title: '第70話 「夏祭りと火曜日」 — The Festival and the Tuesday',
  night: true,
  timerSec: 345,
  words: ['goldfish', 'yukata', 'drum', 'bon dance', 'ice', 'magic trick', 'child', 'baby'],
  story:
    `Sixty episodes ago, ya were late to your first summer festival in this town. Tonight the lanterns are up ` +
    `again — and at dusk, right in the middle of it all, Café Tuesday opens its doors for the first time. Best ` +
    `night of the summer. Then Trinity asks ya to walk up the hill, and it becomes the best night of your life.`,
  quests: [
    { word: 'goldfish', type: 'talk', npc: 'friend', stage: 0,
      ask: `Your friend's runnin' the {goldfish} stall and has fallen in love with every single fish. "Nobody scoops Best Fish Emeritus. NOBODY." He's payin' people to lose. He's never been happier.` },
    { word: 'yukata', type: 'talk', npc: 'trinity', stage: 1,
      ask: `Trinity steps out in her {yukata} — deep blue with little goldfish on it. One slow spin. "Okay! Festival first, café doors at dusk. Tonight we do everything."` },
    { word: 'drum', type: 'talk', npc: 'trainer', stage: 2,
      ask: `The festival {drum} is the coach, obviously. Both arms, full power, sweat flyin'. "CAN YA FEEL IT IN YOUR TUESDAY MUSCLES?!" Everyone can. Three streets over, everyone can.` },
    { word: 'bon dance', type: 'talk', npc: 'grandma', stage: 3,
      ask: `The {bon dance} circles the pond, and right in the middle: grandma and grandpa, dancin' like it's 1972. "Slower, dears, it's a circle, not a race. And I've won both, so listen."` },
    { word: 'ice', type: 'buy', item: 'shaved ice, one of every syrup', stage: 4,
      ask: `Shaved {ice} at your sister's stall — get one of every syrup. That's the new family tradition, as of right now. Dr. Mori, next in line, orders the same. "Tradition," she explains, very pleased with herself.` },
    { word: 'magic trick', type: 'talk', npc: 'oldman', stage: 5,
      ask: `Grandpa's annual {magic trick} for the kids: bread roll, cloth, tap of the rollin' pin — gone! The roll's already halfway down the street in the cat's mouth. "The secret's a partner ya trust completely."` },
    { word: 'child', type: 'talk', npc: 'sister', stage: 6,
      ask: `Dusk. The sign lights up, the teacup firework bursts, and the café opens to a roar. Every {child} in town crams into the kids' corner. Trinity watches 'em for a long, soft moment. Then, quiet: "Walk with me after close?"` },
    { word: 'baby', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Midnight, on the hill. She takes both your hands, smilin' so hard she can barely talk. "The café's open. The festival was perfect. And there's one more thing." She puts your hand on her belly. "We're havin' a {baby}. In spring."` }
  ],
  stageToasts: {
    1: `🏮 The lanterns are lit. Your sixth festival here. Go!`,
    2: `👘 She's on the café doorstep in deep blue. Breathe.`,
    3: `🥁 Ya can hear the drum from here. Ya can probably feel it.`,
    4: `💃 The bon dance is circlin' the pond. Guess who's leadin'.`,
    5: `🍧 New family tradition at the ice stall: one of every syrup.`,
    6: `🥖 The bread trick's startin'. The cat's in position.`,
    7: `✨ The sign lights up at dusk. And after close… she asked for the hill.`
  },
  npcLines: {
    trinity: [`@7 I've known for six days. I told the cat first — that's tradition — and grandma figured it out anyway, 'cause 'course she did. Spring, love. We're gonna need a bigger table by the window.`,
      `@6 The very first tea tonight went to Kenji, from his grandma's cup. He held it a long time before he could drink it.`],
    mom: [`@6 The café's perfect. Six tables, all that history on the shelf. Only thing missin' is a high chair— wait. Why's your face doin' that. WHY'S YOUR FACE DOIN' THAT.`],
    dad: [`@7 The coffee tin moved, her tea went pale, my wife bought a soup lid, her mother bought towels. And now those two are walkin' up the hill at midnight. Son, I wasn't born yesterday. *buys one more shaved ice, for luck*`],
    sister: [`@6 A little girl asked if the deputy in my comic was me. I told her "she's whoever's bein' brave that day." She saluted me with a rice cracker. Best reader ever.`,
      `New page in the locked sketchbook tonight. Sealed, dated, titled "The Look She Had." I notice everything. I'm tellin' no one.`],
    friend: [`@0 Final count: forty-one goldfish scooped, thirty-eight lovingly bought back by me. I lost every yen I had and I'd do it again.`,
      `@6 The teacup firework held its shape all the way down. And Hanabi watched the whole thing from my stall and stayed 'til close. BUDDY.`],
    shopkeeper: [`@6 Four doorways lit up on one street tonight: mine, hers, his, and the clinic's. Papa didn't keep a spare store all those years. He kept a seat at a table he knew was comin'.`],
    trainer: [`@2 Six years on this drum and the street still gets up and dances every single time!`,
      `@7 I saw the two of 'em headin' up the hill at midnight. I didn't say a word — I've finally learned the not-sayin'. But I wrote it on the gym wall: some finish lines walk uphill, holdin' hands.`],
    boss: [`@6 I had her breakin' even by September. She did it tonight. And I don't mean the till.`,
      `@7 The office is closed tomorrow. The reason on file says "town circumstances, the good kind." Ask me again in spring.`],
    coworker: [`@6 Gerald spent openin' night on his own windowsill inside the café, leanin' harder than any fern's ever leaned. My instruments can't measure it. I'm callin' it love.`,
      `@7 Last note in this year's file: "Two people on the hill at midnight. Story continues next volume." It always continues next volume.`],
    oldman: [`@5 The trick had a second act tonight, grandson. I watched your wife tear up at the children shriekin', and a woman like that's carryin' good news of her own. I said nothin' — a baker knows when dough needs to be left alone to rise. Spring, I'd guess. The best batches always land in spring.`,
      `@7 When it comes — tell her the first roll off the stand every mornin' is spoken for. Grandpa's orders.`],
    cat: [`Fish-Thief spent the last hour of the festival at the bottom of the hill path, sittin' guard where the lantern light ends. He waited 'til they came back down, walked 'em home one pace ahead, and took the good half of the pillow. He's known for six days too.`],
    grandma: [`@3 Sixty years I watched this dance from a bench. Tonight I led it. And the sweetest thing I saw all night was still that coffee tin at the far end of the counter. The yarn's ready, dear. Spring colors. Final.`,
      `@7 Look at 'em up on the hill, old man. Right where we stood. Right where they stood. This town doesn't repeat itself — it rhymes.`],
    tmother: [`@6 She poured tea for the whole town tonight from an inherited cup, like she'd been doin' it all her life. I closed my last binder and wrote one word on the final page: "Enough."`,
      `@7 That walk up the hill — I've seen my daughter walk like that twice before. Both times, nine months later, my world got bigger. Book club meets at seven a.m. Agenda: knittin'.`],
    tfather: [`@7 I said nothin', I suspected everything, I bought six towels, and I only made the boat sound twice, son. The room next to ours at the inn's free, the banner's got space for one more picture, and whoever's comin' in spring — I love 'em already. I LOVE 'EM ALREADY.`],
    kenji: [`@6 She handed me the first tea from grandma's cup and said "house rule, forever." I just stood there holdin' it. Best moment of my whole career, and nobody was even sick.`,
      `@7 Last note of the season, filed under "spring": lemon settles a queasy stomach, and this café happens to sit four minutes from a very good clinic. Whoever shows up in spring's landin' in the safest four minutes in the world. Bring 'em here first. The window table's already reserved.`]
  }
}
]