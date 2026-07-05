import type { Episode } from './episodes'

/* =====================================================================
   SEASON 8 (episodes 71-80) — "The Nesting Season" (Autumn)
   The baby is coming in spring. The town nests: the nursery gets built,
   the sister quietly becomes the real baker, the friend courts Hanabi,
   and the harvest festival fills the hill. Two quiet threads run under
   it all — Fish-Thief is getting old (a stray kitten starts hanging
   around the café), and the two doctors are getting closer to something.
   Ends warm: first snow, first kick.
   VOICE RULE: every line must pass the say-it-out-loud test.
   TEACHING RULE: 8 vocab words an episode, each one lived in the story.
   ===================================================================== */

export const SEASON8: Episode[] = [

/* ============================== EP 71 ============================== */
{
  ep: 71,
  title: '第71話 「しらせ」 — The News Settles',
  words: ['pregnant', 'glad', 'careful', 'belly', 'autumn', 'gentle', 'rest', 'promise'],
  story:
    `It's real, and now the town gets told proper — one at a time, the way this family does everything. ` +
    `Trinity's {pregnant}, the leaves are goin' gold, and grandma somehow knew before either of ya. ` +
    `Take it slow today, bud. The whole street's about to get very careful with ya.`,
  timerSec: 300,
  quests: [
    { word: 'pregnant', type: 'talk', npc: 'trinity', stage: 0,
      ask: `"So. We're actually {pregnant}," Trinity says, testin' the word out loud for the first time. "Weird. Wonderful. Weird. Go on — let's tell 'em properly."` },
    { word: 'glad', type: 'talk', npc: 'mom', stage: 1,
      ask: `Mom hears it and can't get a word out for a full ten seconds. Then: "{glad} isn't a big enough word, my love. Nobody's built one big enough yet."` },
    { word: 'careful', type: 'talk', npc: 'kenji', stage: 2,
      ask: `"Everything looks perfect. Now you just be {careful} with her," Kenji says, "and — this part's harder — let HER decide when careful turns into fussin'. She'll tell ya. Loudly."` },
    { word: 'belly', type: 'talk', npc: 'grandma', stage: 3,
      ask: `Grandma sets a hand on Trinity's {belly} like she's checkin' bread. "Spring," she says, satisfied. "I bought the yarn in summer, dear. Grandmothers run on a longer clock. Final."` },
    { word: 'autumn', type: 'inspect', obj: 'window', stage: 4,
      ask: `Out the {window}, the whole town's turned gold overnight. An {autumn} baby, comin' in spring. The seasons are doin' the plannin' now, same as always.` },
    { word: 'gentle', type: 'talk', npc: 'oldman', stage: 5,
      ask: `The old man kneads slower than he used to these days. "Be {gentle} with the good news, grandson," he says. "Fresh things and fresh dough are the same — handle 'em too rough and they don't rise."` },
    { word: 'rest', type: 'inspect', obj: 'bed', stage: 6,
      ask: `Mom's already made up the {bed} with the good blanket for afternoon {rest}. "Doctor's orders," she lies cheerfully. Kenji ordered no such thing. Nobody's arguin'.` },
    { word: 'promise', type: 'talk', npc: 'dad', stage: 7,
      ask: `Dad finds ya on the porch, under the light that only ever comes on for feelings. He doesn't say much. Just: "I {promise} to be the kind of grandpa you'd want for 'em." He already is. Ya both know it.` }
  ],
  stageToasts: {
    1: `🍼 It's real. Trinity wants to tell the town herself, one door at a time.`,
    2: `🍲 Start with mom. Stand ready — she's gonna need a chair.`,
    3: `🩺 The doctor's got advice about the difference between careful and fussin'.`,
    4: `🧶 Grandma's holdin' yarn she bought in summer. Ask her how she knew.`,
    5: `🍂 The town went gold overnight. Go look out the window.`,
    6: `🥖 The old man's got somethin' quiet to say about handlin' good news.`,
    7: `🌙 Dad's on the porch. The light's on. Go hear him out.`
  },
  npcLines: {
    trinity: [`I told the cat first — that's tradition — and he purred, so we're cleared for takeoff.`,
      `@7 Everyone keeps gettin' this soft look and then pretendin' they've got somethin' in their eye. The whole street's got somethin' in its eye today.`],
    mom: [`@1 I've waited to be a grandmother longer than you've been alive. Do the math on that and then let me cry.`,
      `The soup schedule's already drafted. One pot a day 'til spring, minimum. This is medicine now.`],
    dad: [`@7 I bought a tiny wooden train at the store. It's for someone who won't exist 'til spring. I do not care. It's on the shelf.`,
      `A spring baby. That gives me all winter to practice bein' calm about it. I'll need every day.`],
    sister: [`I'm gonna be an aunt AND the town's best baker. My business cards are gonna need two lines.`,
      `@3 Grandma bought the yarn in SUMMER. She's terrifyin'. I love her. I'm takin' notes.`],
    friend: [`A baby! Okay. As best man emeritus I'm promotin' myself to uncle. It's not official but nobody's fast enough to stop me.`],
    shopkeeper: [`She came in for ginger tea, and I quietly moved the good stuff to the front shelf. Some customers you look after before they even ask.`],
    trainer: [`Prenatal training plan: gentle walks, good posture, and absolutely no lifting the coach's tables. I'll lift 'em. I'll lift ALL of 'em.`],
    boss: [`@6 Take the mornings slow. Come in at ten 'til spring. The paperwork calls it "flexible hours." It's really just the office bein' happy.`],
    coworker: [`New folder started, labeled SPRING. First entry: "It's real." Gerald leaned toward the news. He always knows before I file it.`],
    oldman: [`@5 Sixty years I fed this town's children bread. Now I get to feed one that's family. I'll be gentle with the whole idea.`,
      `The first roll off the stand each mornin' is spoken for come spring. Grandpa's orders. Wrote it on the board already.`],
    cat: [`Fish-Thief already knew — Trinity told him six days ago, and he's kept it like he keeps everything: quietly, from the warm spot, one eye open.`],
    grandma: [`@3 I felt it in the yarn aisle in July, dear. Don't ask me to explain it. Grandmothers get the telegram early. Final.`,
      `Spring colors for the blanket. I've been knittin' since the café opened. I'm faster than the baby, but only just.`],
    tmother: [`I have purchased exactly one gift and hidden it. If I let myself start, I would not stop, and the child needs a ROOM, not a warehouse.`],
    tfather: [`@7 A SPRING BABY! I said nothing, I suspected everything, and I have already made the boat sound four times today. My towels are on standby. ALL of them.`],
    kenji: [`@2 Lemon settles the queasy mornings — I stocked up weeks ago, which is why I've been smiling since autumn. Now you know.`,
      `Café Tuesday sits four minutes from my clinic. Safest four minutes in the world for what's coming. She chose that spot on purpose, I think.`],
    mori: [`Congratulations. Statistically excellent, emotionally excellent. I've cleared my spring calendar. …I do not usually clear calendars. Note that.`]
  }
},

/* ============================== EP 72 ============================== */
{
  ep: 72,
  title: '第72話 「真夜中の使い」 — The Midnight Errand',
  words: ['hungry', 'sour', 'sweet', 'midnight', 'search', 'strange', 'relief', 'dawn'],
  story:
    `Two in the mornin'. Trinity sits bolt upright, {hungry} for one very specific, very impossible thing: ` +
    `sour plums with honey on them. The store's shut. The town's asleep. Almost. Turns out half the street's ` +
    `awake anyway, and a midnight craving is exactly the kind of quest this town lives for.`,
  timerSec: 315,
  quests: [
    { word: 'hungry', type: 'talk', npc: 'trinity', stage: 0,
      ask: `"I'm not just {hungry}, I'm hungry with a TARGET," Trinity says at two a.m. "Sour plums. With honey. Don't laugh — the baby's very specific and I'm just the messenger."` },
    { word: 'sour', type: 'inspect', obj: 'stove', stage: 1,
      ask: `Ya check the kitchen: one lonely, extremely {sour} plum in the whole house. Not enough. The baby, apparently, wants a PLATE of 'em. The hunt is on.` },
    { word: 'strange', type: 'talk', npc: 'dad', stage: 2,
      ask: `Ya text dad, expectin' silence. He's awake. "Your mother wanted pickled radish at three a.m. in 1997. Cravings are {strange} and cravings are LAW. I'm gettin' my coat."` },
    { word: 'search', type: 'do', loc: 'street', verb: 'walk', amount: 500, stage: 3,
      ask: `{search} the sleepin' street for a light that's still on. There — the café. Trinity left the key with ya "for exactly this kind of nonsense." She knew. She always knows.` },
    { word: 'sweet', type: 'buy', item: 'the shopkeeper\'s good honey (he opened up)', stage: 4,
      ask: `The store light flicks on — the shopkeeper, in a robe, unlockin' the door. "Somethin' {sweet}, I assume. Honey's here. No, don't pay now. Pay me when the kid's old enough to carry it themselves."` },
    { word: 'relief', type: 'talk', npc: 'grandma', stage: 5,
      ask: `Grandma's window glows too. She hands out a jar through the gap: "Sour plums. I keep a stock for exactly this, dear. The {relief} on your face is worth gettin' up for. Now GO, before she reprograms the order."` },
    { word: 'midnight', type: 'talk', npc: 'trinity', stage: 6,
      ask: `Back home at {midnight}-thirty, ya present the plate. Trinity takes one bite, closes her eyes, and sighs from her toes. "…Okay. NOW the baby's happy. And I love you an absurd amount. Both facts."` },
    { word: 'dawn', type: 'inspect', obj: 'window', stage: 7,
      ask: `By the time she's asleep again, the {dawn}'s comin' up gray-gold over the town. Ya stand at the window, plum juice on your sleeve, tireder and happier than ya've ever been. Nesting, it turns out, has a night shift.` }
  ],
  stageToasts: {
    1: `🌙 2 a.m. A craving with GPS coordinates. Check the kitchen first.`,
    2: `🥢 One sour plum. Nowhere near enough. Who else is even awake?`,
    3: `📱 Dad answered. 'Course dad answered. He's got a coat on.`,
    4: `🏪 A light's on down the street. Go — quietly.`,
    5: `🍯 The shopkeeper opened the store. In a robe. For you.`,
    6: `🫙 Another window's glowin'. Grandma keeps a stock. Of course she does.`,
    7: `🌅 The order's fulfilled. The patient's happy. Go watch the sun come up.`
  },
  npcLines: {
    trinity: [`@6 I know it's ridiculous. I heard myself say "sour plums with honey" out loud and I ALSO judged me. And yet. The heart wants what it wants at 2 a.m.`,
      `The best part? Nobody in this town treated it like a bother. Half the street just quietly got up. That's the whole magic trick, right there.`],
    mom: [`I slept through the whole thing and I'm FURIOUS. Next craving, wake me. That's an order from a future grandmother.`],
    dad: [`@2 Cravings are sacred, son. In '97 I drove to three towns for one radish. Found it. Your mother married me for good reasons, but that radish sealed it.`,
      `I keep my coat by the door now, 'til spring. A grandpa should be ready to deploy at any hour. This is a readiness posture.`],
    sister: [`I slept through a MIDNIGHT ADVENTURE. Nobody woke the future aunt. I'm putting it in the locked sketchbook out of pure spite. Beautiful spite.`],
    friend: [`I'd have come! I was awake! …Okay, I was awake because I was texting Hanabi, but I WAS available for plum duty, is my point.`],
    shopkeeper: [`@4 Forty years I've kept a spare key by the register for the nights this town needs me at odd hours. Tonight it earned its keep. "Pay me later" is my favorite price.`],
    trainer: [`A 2 a.m. supply run counts as cardio AND devotion. I'd have carried the plums in a weighted vest for the extra burn. You didn't ask. I'm hurt but I respect it.`],
    boss: [`I heard the whole street was up at 2 a.m. for a plate of plums. Show me a logistics team that responsive and I'll hire it on the spot. This town runs better asleep than most firms run awake.`],
    coworker: [`Filed under SPRING: "First 2 a.m. craving successfully resolved, town response time under thirty minutes." Gerald was awake for it. Ferns don't really sleep. I envy him tonight.`],
    oldman: [`I heard the footsteps go past the pond at two. Didn't get up — my dawn batch needed me. But I left a warm roll on the sill for the runner. Did you find it? …Good. Runners need feedin' too.`],
    cat: [`Fish-Thief did not get up for the plum run. He is old enough now to delegate the night shift. He supervised from the warm spot with one half-open eye, which is its own kind of help.`],
    grandma: [`@5 A grandmother keeps three things stocked at all times, dear: sour plums, spring yarn, and patience. Two of the three came out tonight. Guess which one I'll need most by spring. Final.`,
      `Your grandfather-in-law slept through it, bless him. Eighty-four and he needs his rest now. I let him. Some errands are mine to cover these days.`],
    tmother: [`I would have organized a rotating overnight craving roster, but my daughter says that's "too much," so instead I simply lie awake being ready. It's the same energy, quieter.`],
    tfather: [`I'd have driven the four hours for those plums, son! I keep the tank full now! A grandfather-to-be is a man on permanent standby! *makes the boat sound softly, so as not to wake anyone*`],
    kenji: [`@7 Cravings at odd hours are perfectly normal, and honestly good — the appetite's back, the queasiness is fading. The town running a midnight plum operation is NOT in the textbook, but I'm adding a footnote.`],
    mori: [`I was awake. I am often awake. I did not join the plum expedition, but I noted the response time with professional admiration. This town would make an excellent trauma team.`]
  }
},

/* ============================== EP 73 ============================== */
{
  ep: 73,
  title: '第73話 「小さな部屋」 — The Little Room',
  words: ['room', 'crib', 'paint', 'soft', 'corner', 'build', 'tiny', 'dream'],
  story:
    `There's a spare {room} off the kitchen that's been "storage" for years. Today it becomes a nursery. ` +
    `The same crew that built Café Tuesday shows up at seven a.m. with tools and too many opinions — ` +
    `and the same soft cream paint, because some colors are just this family's now.`,
  timerSec: 300,
  quests: [
    { word: 'room', type: 'inspect', obj: 'door', stage: 0,
      ask: `Ya open the door to the spare {room}. Dust, old boxes, and the best light in the house through one small window. "It was always waiting for this," Trinity says. "It just didn't know it yet."` },
    { word: 'paint', type: 'buy', item: 'the warm cream paint, again', stage: 1,
      ask: `Go get the {paint} — warm cream, same as the café, same as papa's first store in 1961. The shopkeeper doesn't even blink now. "Third time this town's used this color for somethin' that matters. I keep it stocked."` },
    { word: 'build', type: 'talk', npc: 'dad', stage: 2,
      ask: `The dads {build} the crib together, slow and careful, checkin' every joint twice. "Nothing in this room gets a single wobble," dad says. He knocks on the frame. Something, somewhere, knocks back. He grins.` },
    { word: 'crib', type: 'inspect', obj: 'crib_nursery', stage: 3,
      ask: `The {crib} goes in the corner with the good light. Grandpa carved a tiny loaf of bread into the headboard, "so they know where they come from." Grandma carved a tiny running shoe next to it. Nobody's surprised.` },
    { word: 'soft', type: 'talk', npc: 'tmother', stage: 4,
      ask: `The book club's sewn a {soft} quilt — twelve squares, one per member, each different. "So the child sleeps under the whole town," Trinity's mom says. There's a tiny cat embroidered in the corner. Facing out. On guard.` },
    { word: 'corner', type: 'talk', npc: 'sister', stage: 5,
      ask: `Your sister claims the reading {corner}. She's painting a low shelf and stocking it already. "Comic library, volume one. START HERE sign included. The kid's gonna be raised RIGHT."` },
    { word: 'tiny', type: 'buy', item: 'the smallest socks ever made', stage: 6,
      ask: `Ya buy the first pair of {tiny} socks. They fit on two of your fingers. Ya stand in the store holdin' them for a while. The shopkeeper pretends not to notice. He's holdin' a pair too.` },
    { word: 'dream', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Evenin'. The room's done — cream walls, one crib, a quilt, a corner of comics, tiny socks on the shelf. Trinity stands in the doorway with her hand on her {belly}— on her {dream}, really. "Okay," she says quiet. "Now it's a room where somebody lives."` }
  ],
  stageToasts: {
    1: `🚪 The spare room's got the best light in the house. Go see what it could be.`,
    2: `🎨 Same cream paint, third time. The shopkeeper keeps it stocked now.`,
    3: `🔨 The dads are building the crib. No wobbles allowed.`,
    4: `🛏️ The crib's in. Go look at what got carved into it.`,
    5: `🧵 The book club sewed something. Twelve squares, one town.`,
    6: `📚 Your sister's building a reading corner. Obviously.`,
    7: `🧦 Buy the first tiny socks. Take your time. Everyone does.`
  },
  npcLines: {
    trinity: [`@7 A carved loaf and a carved running shoe on the headboard. This kid's gonna grow up knowing exactly whose story they're continuing. No pressure. All love.`,
      `I danced in the dust of the café before it was a café. Now there's a room with a crib in it. Some rooms you love before anyone's even in them.`],
    mom: [`The soup pot lid from the hospital hangs in the kitchen, and now there's a crib next door. This house holds the hard times and the good ones on the same wall. That's a home.`],
    dad: [`@2 Her father and I built a café counter last summer and a crib this autumn. Best two years my hands have had. I'll build the kid a desk next. Then a bookshelf. I'm not stopping.`,
      `The knock-back's real, son. That room's already looking after somebody. Buildings know before we do.`],
    sister: [`@5 The comic library goes at kid-height, not adult-height. This is important. A book you can reach is a book you'll read. I've thought about this a LOT.`,
      `I signed the bottom corner of the reading shelf. Small. The kid'll find it someday and know their aunt was here first.`],
    friend: [`I offered to install a tiny disco ball. I was voted down "for now." FOR NOW. I'm keeping the disco ball. Every nursery needs a phase two.`],
    shopkeeper: [`@6 The tiny socks get me every time, and I've sold 'em for forty years. Something about a sock that small. I always throw in a second pair. Feet grow. Hope shouldn't have to wait for laundry.`],
    trainer: [`I baby-proofed the corners before anyone asked. Foam padding, expertly applied. A room should be as safe as a good landing. THE FORM extends to FURNITURE.`],
    boss: [`I sent over a small bookshelf, flat-packed, with the instructions pre-highlighted. A child's first library should outlast their first everything else. Books are the only furniture that grows with you.`],
    coworker: [`Filed: "Nursery complete. Cream paint, one crib, carved headboard, twelve-square quilt, comic corner, tiny socks." Gerald's requested visitation rights to the window. I've pre-approved them.`],
    oldman: [`@3 I carved the loaf so they'd know the bread is theirs someday. My hands aren't as steady as they were, grandson — took me three tries. But the third one was right. Most things are, by the third try.`,
      `A crib in the corner with the good light. In sixty years I never built a room for the future. Turns out I was just waitin' for the right future to build it for.`],
    cat: [`Fish-Thief inspected the finished nursery slowly, one lap, and chose the crib's morning-sun corner as his own. The family will have a gentle negotiation about that come spring. For now, he's keeping it warm. Consider it a service.`],
    grandma: [`@3 I carved the little shoe next to his little loaf. A bread crumb and a starting line — that's the whole family in two pictures, dear. The child can pick which to follow. Or both. Both is best. Final.`],
    tmother: [`@4 Twelve women, one quilt pattern, twelve different results, and every square fits. That's not a coincidence, dear — that's what a town IS. I only had to hand them the thread.`],
    tfather: [`I built nothing today — my hands shook too much to be trusted near a saw, son. So I held the boards steady while the others cut. A grandfather has to know his job. Mine is holding things still while braver hands work.`],
    kenji: [`Everything's on track for spring. The room's ready early, which is good — the calmer the nest, the calmer the season. Nesting is medicine too. Nobody prescribes it. Everybody needs it.`],
    mori: [`I contributed a framed anatomical drawing of a healthy infant heart for the wall. Kenji says it is "not typical nursery art." The child will find it fascinating. I have decided this. It stays.`]
  }
},

/* ============================== EP 74 ============================== */
{
  ep: 74,
  title: '第74話 「あとつぎ」 — The One Who Comes After',
  words: ['knead', 'dough', 'oven', 'learn', 'hands', 'early', 'proud', 'inherit'],
  story:
    `The old man's hands ache in the cold mornings now. He won't say it, but the whole town's noticed the ` +
    `dawn batch runs a little later than it used to. So today, quietly, without any fuss, your sister ties on ` +
    `the apron before he arrives — and starts the {dough} herself. Some things get handed down before anyone ` +
    `announces it.`,
  timerSec: 300,
  quests: [
    { word: 'early', type: 'talk', npc: 'sister', stage: 0,
      ask: `Your sister's at the stand at five a.m., apron on, flour out. "I've been comin' {early} for weeks," she admits. "His hands hurt in the cold. Somebody's gotta start the dough. Might as well be the apprentice."` },
    { word: 'dough', type: 'inspect', obj: 'stand_1964', stage: 1,
      ask: `The {dough} she's made is resting under a cloth, exactly right. Grandpa taught her by standing beside her and fixing her wrist twice — same way Kenji learned the tea. This family teaches everything the same way: quietly, by hand.` },
    { word: 'knead', type: 'talk', npc: 'oldman', stage: 2,
      ask: `The old man arrives, sees her already {knead}ing, and stops in the doorway. He doesn't take over. He just watches his own motion in someone else's hands. "…Toward the door," he says softly. "Fold toward the door." She already is.` },
    { word: 'hands', type: 'talk', npc: 'grandma', stage: 3,
      ask: `Grandma watches the two of them. "His {hands} are tired, dear, and hers are just starting. That's not sad — that's the whole point of hands. They pass things on. Mine did. His are doing it now." She's not crying. It's the flour.` },
    { word: 'oven', type: 'inspect', obj: 'stand_1964', stage: 4,
      ask: `The first loaves go in the {oven}. Grandpa sits — SITS, for the first time in stand history — and lets her run it. "The heat's her problem now," he says, and it's a joke, and it's also the most important sentence he's ever said.` },
    { word: 'learn', type: 'talk', npc: 'trinity', stage: 5,
      ask: `"She didn't {learn} it from a recipe card," Trinity says, watching. "There aren't any. She learned it from standing next to him for a year. That's the only way the good stuff ever moves — shoulder to shoulder."` },
    { word: 'proud', type: 'talk', npc: 'mom', stage: 6,
      ask: `The loaves come out golden. Mom takes one bite and has to sit down. "That's HIS bread. Out of HER hands. I'm too {proud} to stand up. Somebody bring me a chair and don't look at my face."` },
    { word: 'inherit', type: 'talk', npc: 'oldman', stage: 7,
      ask: `Closing time. The old man takes off his apron and — instead of hanging it on his own hook — ties it around your sister's shoulders. "Ya don't {inherit} a stand, child," he says. "Ya inherit the town that lines up for it. Look after 'em. They're yours now." She can't speak. Neither can anyone.` }
  ],
  stageToasts: {
    1: `🌅 5 a.m. Your sister's already at the stand. She's been doing this a while.`,
    2: `🥖 The dough's resting, exactly right. Go see it.`,
    3: `👴 The old man's in the doorway watching his own hands in someone else's.`,
    4: `🔥 First loaves in the oven — and grandpa just SAT DOWN.`,
    5: `💜 Trinity's got something to say about how the good stuff really moves.`,
    6: `😢 Mom took one bite. Get her a chair.`,
    7: `🧵 The old man's untying his apron. Watch where it goes.`
  },
  npcLines: {
    trinity: [`@5 A year of standing next to him at dawn, saying nothing, just watching his hands. That's the whole apprenticeship. She never told anyone she was doing it. That's the most her thing imaginable.`,
      `The stand's in good hands. Little hands, floury hands, twelve-year-old hands. The best hands. It's gonna be okay.`],
    mom: [`@6 First my mother's bread made me cry. Then his. Then my daughter's. This family assaults me with baked goods across three generations and I have no defense and I want none.`,
      `She's twelve and she's carrying 1964 forward without dropping it. I don't know where she came from. I know exactly where she came from. Both true.`],
    dad: [`I helped carry the flour sacks so the old man wouldn't have to. He noticed. Didn't say anything. Just nodded. Between men, that nod's a whole thank-you letter.`],
    sister: [`@0 Nobody made me do it. His hands hurt and the town needed bread and I knew how. That's just... math? It's just math. Somebody who can, should. That's the whole rule.`,
      `@7 He tied his apron on ME. I'm going to sleep in it. I don't care. It smells like flour and sixty years and I'm never washing it. Don't tell grandma. She'll say that's unhygienic. It IS. I don't care.`],
    friend: [`I've watched that kid grow up from "person who yells during marathons" to "keeper of the sacred bread." Character development you can EAT. I'm so proud I forgot to make a joke. That's how you know it's real.`],
    shopkeeper: [`She's been buying her own flour with her own allowance for a month, so the "practice batches" wouldn't cost him anything. Twelve years old. I've been giving her the family price and saying nothing. Some deals you keep quiet.`],
    trainer: [`SHE KNEADS LIKE A CHAMPION. Full body, engaged core, follows through toward the door every time! I've been secretly filming her form for a year! It's FLAWLESS! I have to go be emotional in the gym now!`],
    boss: [`Succession planning is the hardest thing any organization does, and this town does it with a twelve-year-old and an apron and zero paperwork. My HR department could learn everything from one dawn at that stand.`],
    coworker: [`Filed under both LEGACY and INFRASTRUCTURE: "Stand succession complete. The apron changed shoulders." Gerald leaned toward the stand at the exact moment. He knew. He always files before I do.`],
    oldman: [`@2 Watching my own kneading in her hands, grandson — I felt sixty years old and brand new at once. That's what passing something on does. It doesn't take the thing from ya. It just gives it a longer life than yours.`,
      `@7 My hands are tired. I'm not sad about it. A baker's hands are supposed to wear out — it means they were USED. Hers are fresh. The town won't miss a single morning. That's all I ever wanted. Now — I get to just be somebody's grandfather. What a soft, easy job that is. Finally.`],
    cat: [`Fish-Thief moved his morning post from the old man's feet to the sister's, without ceremony, the day she started coming early. The marshal always knows where the center of things has moved. He follows it. That's the job.`],
    grandma: [`@3 His hands passed the bread to her hands, dear, the way my legs passed the race to no one and my cards will pass to whoever's brave enough. Everything worth doing outlives the doer. That's not the sad part. That's the WHOLE point. Final.`],
    tmother: [`I have catered from kitchens with forty staff. I have never seen a handover as clean as an old man tying an apron onto a child at closing time. No contract. No notice period. Just: "they're yours now." Flawless governance.`],
    tfather: [`@7 He gave her the apron and I made the boat sound so loud the pigeons left, son! A man handing his life's work to a little girl who earned it! I had NO towel! I used my SLEEVE! Like an AMATEUR! WORTH IT!`],
    kenji: [`His hands ache in the cold — mild, manageable, the ordinary price of eighty-four good years. I told him to rest them more. Today he did, for the first time, because someone finally could hold the thing he'd been holding alone. That's better than any medicine I've got.`],
    mori: [`I examined his hands last week. Nothing serious — time, simply. Time is the one condition I cannot operate on. But watching him hand the work to the child, I understood: some things you don't cure. You continue them. She is the continuation.`]
  }
},

/* ============================== EP 75 ============================== */
{
  ep: 75,
  title: '第75話 「花火屋の子」 — The Fireworks Girl',
  words: ['spark', 'shy', 'nervous', 'invite', 'blush', 'courage', 'together', 'maybe'],
  story:
    `Your best man has planned two weddings, two proposals, and a hundred fireworks shows — and cannot, ` +
    `for the life of him, ask Hanabi from the fireworks shop to dinner. He's got a {spark} for her the size of a ` +
    `finale shell and the nerve of a wet match. Today, the town returns the favor. It's HIS turn to be coached.`,
  timerSec: 300,
  quests: [
    { word: 'shy', type: 'talk', npc: 'friend', stage: 0,
      ask: `Your friend — loud, fearless, the man who fires cannons at weddings — has gone {shy}. "I can light up a whole valley, buddy. I cannot say four words to one girl. Explain to me how that's fair."` },
    { word: 'spark', type: 'talk', npc: 'hanabi', stage: 1,
      ask: `Ya go meet Hanabi properly. She's testing a {spark} in the shop, goggles up, grinning. "Your friend? Yeah, I like him. He talks to me about EVERYTHING except the thing. It's kind of adorable. Kind of maddening. Somebody should tell him I'm waiting."` },
    { word: 'nervous', type: 'talk', npc: 'oldman', stage: 2,
      ask: `The old man's been through this exact fear. "{nervous} is just courage that hasn't been spent yet, grandson. Sixty years I sat on mine. Tell the boy: don't do the sixty years. Do the four words. Today."` },
    { word: 'courage', type: 'talk', npc: 'trainer', stage: 3,
      ask: `The coach drills him: "{courage} is a muscle! We rehearse the ask fifty times 'til the shake leaves! I did this for a groom once and he MARRIED her! The method WORKS!" (It's the same whiteboard. It always is.)` },
    { word: 'invite', type: 'talk', npc: 'trinity', stage: 4,
      ask: `Trinity coaches the actual words: "Don't over-produce it. You {invite} a person to dinner, not to a fireworks show. Small and true beats big and loud. Ask the man who proposed to me — smallest thing he ever said, biggest thing he ever did."` },
    { word: 'blush', type: 'talk', npc: 'sister', stage: 5,
      ask: `Your sister's on surveillance from behind the stand. "He walked past her shop THREE times. On the third, they made eye contact and BOTH went red. I have never seen a {blush} with that much wattage. It could power the festival."` },
    { word: 'together', type: 'do', loc: 'street', verb: 'walk', amount: 500, stage: 6,
      ask: `Ya walk him to the shop — {together}, so he can't bolt. At the door he takes a breath, and ya step back, 'cause some finish lines a man's gotta cross on his own. Through the window: he says something. She takes off her goggles. She smiles.` },
    { word: 'maybe', type: 'talk', npc: 'friend', stage: 7,
      ask: `He comes out floating. "I said 'dinner, {maybe}?' and she said 'not maybe. Yes.'" He stares at his own hands. "Buddy. I plan everyone else's happiest days. I forgot you're allowed to have your own." Yeah, bud. You're allowed.` }
  ],
  stageToasts: {
    1: `🎇 The fearless firework guy has gone completely shy. Go hear about it.`,
    2: `🥽 Time to meet Hanabi properly. She's got opinions. Good ones.`,
    3: `👴 The old man knows this exact fear better than anyone alive.`,
    4: `💪 The coach has the whiteboard out. The ask gets drilled.`,
    5: `💜 Trinity's got the words. Small and true.`,
    6: `👀 Your sister's got surveillance. The blush report is INCREDIBLE.`,
    7: `🚶 Walk him to the door so he can't run. Then step back.`
  },
  npcLines: {
    trinity: [`@4 The whole town coached HIM through the ask, exactly like it coached you, and grandpa. This place is a machine that only makes one product: people finally saying the thing. Best factory on earth.`,
      `He plans everyone's happiest day and forgets to book his own. Classic best man. Somebody had to march him to that door. Honored it was us.`],
    mom: [`A wedding I can already smell coming. Two of them next year if the doctors ever admit what everyone knows. I'm going to need a bigger soup pot. Good. I've been meaning to buy one.`],
    dad: [`The boy fired a cannon at your wedding without flinching and couldn't say "dinner" to a girl. Fear's a funny animal, son. It never shows up where you'd expect it. It shows up where it matters most.`],
    sister: [`@5 I have the whole thing sketched: the three walk-bys, the double blush, the goggles coming off. Titled it "SPARKS (literal and otherwise)." It's going in the GOOD sketchbook, not the locked one. This one gets to be seen.`,
      `Her name means fireworks and she makes fireworks and she likes the fireworks guy. The universe isn't even being subtle anymore. I respect the lack of effort.`],
    friend: [`@0 I've got a folder for everyone else's romance and NOTHING for my own. I can plan a proposal for a stranger. I cannot ask a question for myself. The cobbler's kids have no shoes, buddy, and I am extremely the cobbler.`,
      `@7 She said "not maybe, yes." Four seasons I've been the guy who helps other people cross the line. Turns out the view's completely different from the other side of it. I get it now. I GET it.`],
    shopkeeper: [`Hanabi buys her wire and powder from me and always asks after "the loud one." I always say he asked after her too. I've been running a tiny, illegal romance postal service for a month. Best work I do.`],
    trainer: [`@3 Fifty reps of "would you like to get dinner." By rep forty the shake was gone. By rep fifty he sounded like a man! Courage isn't the absence of nerves, it's nerves that showed up to TRAIN! I'm making a pamphlet!`],
    boss: [`I once took thirty-one years to notice the woman from accounting was the love of my life. If I can spare that boy even one of those years by nudging him toward a door, it's the best deal I'll broker all decade.`],
    coworker: [`New folder: HANABI & THE LOUD ONE. Gerald approves — she once brought a plant to the fireworks shop and kept it alive through a WINTER. Anyone who can keep a plant is family-grade. The data supports the match.`],
    oldman: [`@2 I gave the boy the one piece of advice I'd give my younger self: don't wait sixty years, son. I got the happy ending anyway, but I lost the sixty years to get there. Nobody has to lose that much. Spend the courage NOW.`],
    cat: [`Fish-Thief accompanied the walk to the fireworks shop at a slower pace than he used to keep, but he made it, and he sat at the door as witness. He has attended every important question this town has asked. He wasn't about to miss this one, tired legs or not.`],
    grandma: [`Tell the boy from me, dear: a loud man who goes quiet around one person has found the right person. That's not weakness. That's the volume finally meeting something worth lowering it for. Final.`],
    tmother: [`I have started a very slim file. Twelve tabs feels excessive for a first dinner. I've allowed myself three. This restraint continues to be the hardest discipline of my life and I am, privately, magnificent at it.`],
    tfather: [`Young love, son! I made the boat sound when he came out of that shop floating! Two people at the start of everything! I remember the start! It's the best part! Except the middle! And the end! It's ALL the best part!`],
    kenji: [`Good for him. Genuinely. …No, I'm not going to say anything about my own Tuesdays and Fridays. Some questions take their own time. Ask me again in winter. Just — ask me in winter.`],
    mori: [`The loud one asked the fireworks one to dinner. Efficient. Correct. …Kenji looked at me when the news came in, and I looked at him, and neither of us said anything. We are also, I am told, "kind of adorable, kind of maddening." I have decided to allow it.`],
    hanabi: [`@1 I make things that shine for eight seconds and then vanish, and I fell for the guy who makes people happy for a whole lifetime. Opposite ends of the same job, really. Tell him I've been ready since the café opening. Actually — don't. Let him find the courage. It's cuter when it's his.`]
  }
},

/* ============================== EP 76 ============================== */
{
  ep: 76,
  title: '第76話 「心臓の音」 — The Sound of the Heart',
  words: ['heartbeat', 'healthy', 'listen', 'photo', 'wait', 'calm', 'cry', 'alive'],
  story:
    `Today's the checkup where ya get to hear it. Kenji runs the clinic, Mori's "visiting in a professional ` +
    `capacity" (she visits every day now; nobody mentions it), and in a small quiet room, over a small quiet ` +
    `speaker, the whole future makes a sound for the first time.`,
  timerSec: 315,
  quests: [
    { word: 'wait', type: 'inspect', obj: 'bed_ward', stage: 0,
      ask: `The clinic {wait}ing room, redone soft since the hard season. Same walls where the town once held vigil for Trinity. Today the same walls hold somethin' brand new. Rooms remember, if ya let 'em.` },
    { word: 'listen', type: 'talk', npc: 'kenji', stage: 1,
      ask: `"Ready to {listen}?" Kenji asks, warmin' the little sensor in his hands first — same care he takes with the squeaky door, the same care his grandmother took. "It's fast. Babies run fast. Don't panic. It's supposed to sound like a tiny sprinter."` },
    { word: 'heartbeat', type: 'talk', npc: 'trinity', stage: 2,
      ask: `And there it is — the {heartbeat}. Quick, strong, impossibly small. Trinity grabs your hand hard enough to hurt and ya don't feel a thing except that sound. "That's them," she whispers. "That's actually them."` },
    { word: 'healthy', type: 'talk', npc: 'mori', stage: 3,
      ask: `Dr. Mori studies the screen, and the corner of her mouth does the one-millimeter thing. "{healthy}," she says. From her, that single word is a standing ovation, a marching band, and a signed guarantee. Kenji translates for the room: "She's thrilled. That was thrilled."` },
    { word: 'photo', type: 'buy', item: 'a frame for the first picture', stage: 4,
      ask: `They print the first {photo} — a small gray smudge that is, unmistakably, a person. Ya go buy a frame. The shopkeeper picks out his best one and won't take money. "First picture in an album that's gonna get very full. That one's on the house."` },
    { word: 'calm', type: 'talk', npc: 'grandma', stage: 5,
      ask: `Ya show grandma the picture. She goes very {calm} and very still. "There's the spring, dear," she says softly, touchin' the little smudge. "I've been knittin' for you for months and I finally know what you look like. Sort of. Close enough. Final."` },
    { word: 'cry', type: 'talk', npc: 'tfather', stage: 6,
      ask: `Ya show Trinity's dad. He does not {cry}. He weeps. He sobs. He makes the boat sound. He hugs the doorframe. "That's my grandchild's HEART, son. I heard it. Well — I heard a recording your wife made, but STILL. I HEARD THE HEART."` },
    { word: 'alive', type: 'talk', npc: 'oldman', stage: 7,
      ask: `Last stop, the pond, dusk. Ya play the old man the little recorded {heartbeat}. He listens with his eyes closed, hand on the ribbon at his wrist. When it ends he's quiet a long time. "Sixty years I fed this town," he says. "And now there's a brand new {alive} thing in it, comin' in spring, that I get to feed too. What a life. What an absolute life."` }
  ],
  stageToasts: {
    1: `🏥 The clinic waiting room. These walls have held this family before. Sit a moment.`,
    2: `👂 Kenji's warming the sensor. Get ready to listen.`,
    3: `💓 There it is. Grab a hand. Don't let go.`,
    4: `🖼️ First photo printed. Go buy it a frame.`,
    5: `🧶 Show grandma. She's been knitting for this exact smudge.`,
    6: `😭 Show Trinity's dad. Clear the area. Deploy towels.`,
    7: `🌊 The pond, at dusk. Play the old man the heartbeat.`
  },
  npcLines: {
    trinity: [`@2 It sounds like a tiny galloping horse and I've decided that's the best sound ever recorded. I made three copies. One's already framed. One lives on my phone. One's for the café wall. Fight me.`,
      `The same room where the whole town waited to find out if I'd be okay. And now it's where we found out someone new is on the way. That room's earned some good news. It held enough of the scary kind.`],
    mom: [`I wasn't in the room and I still cried in the hallway. A grandmother doesn't need to be present. She just needs to be in the building. Proximity is enough. I was PLENTY close.`],
    dad: [`I've listened to the recording nine times. My hands are steadier than her father's — someone in this family has to be able to hold the phone. It's a heavy job. I'm honored to have it.`],
    sister: [`@2 I drew the smudge from the photo and gave it a tiny cape, because everyone in this family gets a cape eventually. Filed under GOOD sketchbook. Title: "First Appearance." Comic canon now. It's official.`],
    friend: [`They let me hear the recording and I had to sit down on the café floor. Hanabi sat down next to me. We just sat there on the floor being overwhelmed together. Best first month of dating anyone's ever had, probably.`],
    shopkeeper: [`@4 The first frame's always free — that's a rule I made up today and it's permanent now. My father framed my first baby photo in this store. Some traditions you inherit. Some you just start. This one starts now.`],
    trainer: [`A HEARTBEAT THAT FAST is basically already doing cardio! This baby's an ATHLETE and it hasn't even been BORN! I'm starting the pamphlet: PRENATAL FORM. It's mostly about the mother resting. But the SPIRIT of it is athletic!`],
    boss: [`I've closed billion-yen deals and heard nothing sweeter than a colleague describing a heartbeat on a small speaker. Perspective is the only thing worth acquiring, in the end. This town keeps selling it to me at a discount.`],
    coworker: [`Filed under SPRING, priority one: "Heartbeat confirmed. Fast, strong, alive." Gerald leaned so far toward the news he nearly tipped his pot. I righted him. We were both, I'll admit, a little unsteady.`],
    oldman: [`@7 I've heard my ovens tick and my koi surface and this whole town breathe for sixty years, grandson. That little heartbeat's the best sound any of it ever made. Play it for me again sometime. An old man could live on a sound like that.`],
    cat: [`Fish-Thief sat on Trinity's lap through the whole checkup, ear against her belly, and stayed unusually still — even for him, even lately. Whatever he heard in there, he approved. He purred the small tired purr he uses now. The good one.`],
    grandma: [`@5 A fast little heart, dear, coming in spring, in the colors I've been knitting since summer. I told you the yarn knew. The yarn ALWAYS knew. I'm just the hands it works through. Final.`],
    tmother: [`I heard the recording and did not reach for a binder. I simply listened, twice, and then a third time. Some events do not require organizing. They require only being present for. I am learning the difference. Late. But learning.`],
    tfather: [`@6 THAT HEART, SON. I heard a recording of a HEART that isn't even fully HERE yet and it's ALREADY the strongest thing in my life! I've used four towels and I regret NONE of them! Bring on spring! BRING IT ON!`],
    kenji: [`@1 I've listened to ten thousand heartbeats. This is the job. And this one — a friend's child, in the town that gave me a home — this one I'll hear in my sleep for the rest of my life, in the best possible way. That's not in the textbook either.`],
    mori: [`@3 Healthy. I do not use the word carelessly; I have withheld it from anxious families ten thousand times because it must be TRUE. Today it is true, so I said it. …Kenji held my gaze a moment too long after. I held his. We will discuss the winter. Soon.`],
    hanabi: [`They told me about the heartbeat and I immediately started designing a firework for the birth. Don't tell them. It's a surprise. It's shaped like — well. You'll see it in spring. It's the best thing I've ever built and it's for someone I haven't met yet.`]
  }
},

/* ============================== EP 77 ============================== */
{
  ep: 77,
  title: '第77話 「名前の本」 — The Name Book',
  words: ['name', 'meaning', 'choose', 'write', 'disagree', 'decide', 'perfect', 'hope'],
  story:
    `A name is a whole life folded into a few sounds, so of course the whole town's got a shortlist. There's ` +
    `a suggestion box (two, again). There's a nineteen-tab binder (retired, un-retired, re-retired). And there's ` +
    `Trinity, quiet all week, like someone who's already {choose}n and is just waiting for the right moment to say it.`,
  timerSec: 300,
  quests: [
    { word: 'name', type: 'talk', npc: 'trinity', stage: 0,
      ask: `"We need a {name}," Trinity says, openin' a small blank book. "Not a fancy one. A true one. Something they can grow into and never grow out of. Come argue with me about it — the fun kind of arguing."` },
    { word: 'write', type: 'inspect', obj: 'bookshelf', stage: 1,
      ask: `Ya {write} the candidates in the little book. Grandpa's name. Grandma's. Your mother's. Names that already earned their weight in this town. The page fills up with the people who made ya. It's a heavy, wonderful page.` },
    { word: 'meaning', type: 'talk', npc: 'oldman', stage: 2,
      ask: `The old man weighs in on {meaning}. "A name should mean somethin' ya can live up to, grandson, not somethin' ya have to apologize for. Mine means 'harvest.' Took me sixty years to earn it. Give the child a good direction to walk in."` },
    { word: 'disagree', type: 'talk', npc: 'dad', stage: 3,
      ask: `The dads {disagree}, warmly, for an hour, over a name neither of 'em actually dislikes. "It's not about the name, son," dad admits eventually. "We just don't want the conversation to end. Once you pick, they get more real, and then they get here, and then— well. Let us argue a little longer."` },
    { word: 'hope', type: 'talk', npc: 'grandma', stage: 4,
      ask: `Grandma offers one candidate, quiet: a name that means "{hope}." "Your grandfather-in-law and I nearly missed our whole life, dear, and hope's the thing that dragged it back. If the child's ever lost, that name'll remind 'em the good thing might still be coming. Just... offering it. Final."` },
    { word: 'choose', type: 'talk', npc: 'trinity', stage: 5,
      ask: `Trinity finally {choose}s — she's had it since the heartbeat, it turns out. She whispers it to ya first, before anyone. It's perfect. It's got grandma's meaning and grandpa's weight and something brand new all its own. Ya can't say it out loud yet. Some names ya carry a while before ya share 'em.` },
    { word: 'perfect', type: 'talk', npc: 'sister', stage: 6,
      ask: `Ya tell your sister. She goes completely still — rare — then nods once. "{perfect}," she says. "I already know how it looks written down. I've been practicing the calligraphy for the nursery wall for a week. Don't ask how I guessed. I notice everything."` },
    { word: 'decide', type: 'inspect', obj: 'crib_nursery', stage: 7,
      ask: `That night, ya {decide} to write it — just once, in pencil, small — on the inside of the {crib} where only the three of ya will ever see it. Not announced. Not official. Just true. The name's home now, waiting for the person who'll wear it. Spring can't come fast enough.` }
  ],
  stageToasts: {
    1: `📖 A small blank book. Time to fill the first page.`,
    2: `✍️ Write the candidates. Start with the names that already earned their weight.`,
    3: `👴 The old man's got thoughts on what a name should mean.`,
    4: `🤝 The dads are "disagreeing." It's not really about the name.`,
    5: `🧶 Grandma's offering one name, quietly. Hear what it means.`,
    6: `💜 Trinity's chosen. She's telling you first.`,
    7: `🖊️ Tell your sister. She's been practicing the calligraphy already.`
  },
  npcLines: {
    trinity: [`@5 I've had it since I heard the heartbeat. I just wanted to hold it a little while before the whole town did. Some things you keep close before you give them away. The name. The person. Same rule.`,
      `Grandma's meaning, grandpa's weight, and one new sound that's just theirs. That's the recipe. Everything this family makes is somebody old plus somebody new. Bread, cafés, names. All of it.`],
    mom: [`They won't tell me the name yet and I've decided that's correct. A name should meet its family in person, not in a group text. I'll wait. I'm good at waiting for good things. I've had practice.`],
    dad: [`@3 I fought her father over that name for an hour and the truth is we agreed the whole time. We just didn't want to stop talking about the kid. Once you decide, they get real. We weren't ready to be that happy yet. We are now.`],
    sister: [`@6 I guessed it in one. I've been sketching that exact name in fancy letters for a week "for no reason." I notice EVERYTHING. It's my whole brand. The calligraphy for the wall's already done. It's my best work. It's for my best person.`],
    friend: [`They won't tell me the name and I've submitted forty-three suggestions anyway, escalating in absurdity. My best one was rejected on sight. It doesn't matter. Being allowed to submit terrible names to people you love is the whole point of family.`],
    shopkeeper: [`Whatever they name the child, I'll paint it on a little sign for the café shelf, next to papa's teacups and the seashell. Every important name in this town ends up on my shelves eventually. It's the best inventory I keep.`],
    trainer: [`I proposed the name "CHAMPION." It was lovingly rejected. I have accepted this with the grace of a true athlete. The kid will be a champion anyway. Names don't make champions. TOWNS do. This one's undefeated.`],
    boss: [`My company's named for a boat no one remembers, and it's carried a thousand livelihoods. A good name isn't about the name — it's about the life you pour into it afterward. Whatever they choose, this family will make it mean everything. They always do.`],
    coworker: [`The name is currently classified. Gerald has been briefed and leaned to confirm receipt. The folder is ready. When they announce it, it goes on the cover, in gold ink, and the whole SPRING file gets its title at last.`],
    oldman: [`@2 A name's a direction, grandson, not a destination. Give the child a good way to walk and then let 'em walk it however they please. Mine meant 'harvest' and I spent sixty years learning what that even was. Best homework I ever got.`],
    cat: [`Fish-Thief was present for the naming, dozing on the name book itself, which the family took as a blessing and also as him being warm. Both true. He knows the name now. He's the only one besides the three of them. He'll keep it. He keeps everything.`],
    grandma: [`@4 I offered 'hope' because it's the word that saved my whole life, dear. Sixty years I nearly went without, and hope's what dragged the good ending back to me. If they use it, wonderful. If not, the child will find their own saving word. Everyone does. Final.`],
    tmother: [`I un-retired the binder to make a "names" tab, wrote three suggestions, then re-retired it, because this is not my decision and I have grown, dear, I have GROWN. The binder is back in its drawer. My hand only twitched toward it twice.`],
    tfather: [`Whatever they name my grandchild, I'll bellow it with such joy the pigeons relocate, son! A name's just a thing you get to shout with love for the rest of your life! I've been PRACTICING shouting names! I'm READY! Give me a name to SHOUT!`],
    kenji: [`A name is the first gift, and the only one they'll carry every single day. Mine was my grandmother's father's. I've tried to be worth it. Some days I even am. Tell the child, when they're old enough: a name is a promise you get to keep answering. Best kind of promise there is.`],
    mori: [`I was not consulted on the name, correctly, as I am not family — yet. …I said "yet." Note that also. I have said several "yets" this season. The winter will explain them. For now: whatever they choose, I will pronounce it perfectly on the first try. I do not make pronunciation errors. It would be unprofessional.`],
    hanabi: [`I asked if I could make a firework that spells the baby's name and they said "not until they're born and it's public." Fair. So I'm building it in secret and keeping the name blank 'til the last second. A firework that's ready except for the most important part. Kind of like everyone in this town, honestly.`]
  }
},

/* ============================== EP 78 ============================== */
{
  ep: 78,
  title: '第78話 「秋祭り」 — The Harvest Festival',
  words: ['harvest', 'rice', 'lantern', 'dance', 'moon', 'gather', 'grateful', 'full'],
  story:
    `The autumn festival fills the hill — lanterns, drums, the smell of new {rice} and grilled everything. ` +
    `It's the town's thank-you to the year: for the café, the marriage by the pond, the news comin' in spring. ` +
    `Trinity can't dance much this year, so this year, the town dances FOR her, in a great slow circle under the moon.`,
  timerSec: 330,
  quests: [
    { word: 'harvest', type: 'talk', npc: 'oldman', stage: 0,
      ask: `"My name means '{harvest},' grandson, and I never understood it 'til this year," the old man says, watchin' the lanterns go up. "A harvest is everything ya planted comin' home at once. Look around. THIS is a harvest. Sixty years of it."` },
    { word: 'rice', type: 'buy', item: 'the first new-crop rice cakes', stage: 1,
      ask: `First new-crop {rice} cakes, still warm, pounded at dawn. The shopkeeper hands ya the first two off the tray. "One for you, one for her, and technically a third of one for the spring guest. Growing bodies. Even the very small ones."` },
    { word: 'lantern', type: 'inspect', obj: 'sakura_park', stage: 2,
      ask: `The park's strung with paper {lantern}s, and this year there's a new one, low on the smallest branch — a tiny one your sister painted, with a little smudge on it. "That's the spring guest's lantern," she says. "Everyone gets one eventually. Might as well start early."` },
    { word: 'gather', type: 'talk', npc: 'mom', stage: 3,
      ask: `The whole family {gather}s at one long table — both sets of parents, the doctors, the friend and Hanabi, the sister in her flour-dusted apron. Mom looks down the length of it and has to steady herself on a chair. "Look how long this table got," she says. "Every year it needs another leaf."` },
    { word: 'moon', type: 'talk', npc: 'grandma', stage: 4,
      ask: `Grandma and grandpa sit close under the {moon}, the same one from 1964, 1971, every good night this family ever had. "Same moon, dear," she tells ya. "It's watched this whole town happen. Reliable thing. Wave at it. It remembers you." Ya wave. It feels right.` },
    { word: 'dance', type: 'do', loc: 'park', verb: 'walk', amount: 500, stage: 5,
      ask: `The bon {dance} circles the pond, and since Trinity can't this year, the town does it FOR her — you in the circle, her on the bench, the whole ring turnin' slow and waving at her every pass. She laughs 'til she cries. "This town," she keeps saying. "THIS TOWN."` },
    { word: 'grateful', type: 'talk', npc: 'boss', stage: 6,
      ask: `The boss raises a cup for the year's toast, four sentences as always: "This year gave us a café, a pond wedding, and news of one more chair to build. I'm not a {grateful} man by nature. This town cured me of that. To the harvest — all of it." The hill roars.` },
    { word: 'full', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Late, lanterns low, everyone {full} of rice and each other. Trinity leans on ya, hand on her belly, watching the last of the dance. "I used to think 'full' meant 'no more room,'" she says quiet. "It doesn't. It means there's exactly enough of everything, right now, and more still coming. I'm so full. In the good way. Both ways." Spring's four months out. It feels like tomorrow.` }
  ],
  stageToasts: {
    1: `🌾 The festival's filling the hill. The old man finally understands his own name.`,
    2: `🍡 First new-crop rice cakes. Warm off the tray. Go.`,
    3: `🏮 The lanterns are up — and there's a tiny new one on the low branch.`,
    4: `🍽️ The family's gathering at one long table. It got long this year.`,
    5: `🌕 Grandma and grandpa under the moon. Go say hello. Wave at it.`,
    6: `💃 Trinity can't dance this year. So the town dances for her. Get in the circle.`,
    7: `🥂 The boss is up for the year's toast. Four sentences. Listen.`
  },
  npcLines: {
    trinity: [`@5 The whole town danced the bon circle FOR me and waved every time they passed my bench. I have never felt so held by so many people at once. I'm putting it on the café wall. All of it. Somehow.`,
      `Six festivals ago I didn't know this hill existed. Tonight there's a lantern with my baby's smudge on it hanging in the park. The math of that undoes me every single time I try to do it.`],
    mom: [`@3 The table needed a fourth leaf this year. A FOURTH. I remember when it was just us four rattling around it. Now I can't see the far end without my glasses. Best problem a table ever had.`],
    dad: [`I danced the whole circle and waved at Trinity every lap 'til my arm ached. Best sore arm of my life. A grandpa's got to log his waving hours early. Builds up the muscle for spring.`],
    sister: [`@2 I painted the spring guest a lantern with their little heartbeat-smudge on it and hung it on the lowest branch so it'd be at kid height someday. Everyone in this town gets a lantern. I just started theirs before they could hold it.`],
    friend: [`Hanabi and I ran the festival fireworks together — my timing, her shells, our first project as an official couple. When the finale went up she grabbed my hand and I forgot every cue. Best mistake I've ever made at a show. Worth it.`],
    shopkeeper: [`@1 The first rice cakes off the tray always go to whoever the year was really about. This year that was easy. One for the mother, one for the father, a third for the smallest guest. Growing bodies get the first bite. Town law. I wrote it. Today.`],
    trainer: [`I drummed for three hours and danced for two and carried the whole drinks table up the hill in ONE TRIP for the pond-father, who taught me the one-trip rule with his EYES from his chair! The torch is passed! I am the one-trip guy now! I ACCEPT!`],
    boss: [`@6 Four sentences, same as every year. But this year the last one caught in my throat, because "one more chair to build" means a whole life we all get to be part of. Thirty years of toasts. That was the one I'll remember.`],
    coworker: [`Festival attendance logged: entire town, plus the doctors sitting suspiciously close, plus one new couple, plus one lantern for a person who isn't here yet. Gerald attended in a festival pot. Best-attended gathering in the archive. It keeps breaking its own record.`],
    oldman: [`@0 'Harvest.' Sixty years I carried that name not knowing what it meant. Tonight I do: it's the year you finally get to sit down at the long table and watch everything you planted come home warm. I'm the richest farmer who never farmed. What a crop. What a life.`],
    cat: [`Fish-Thief watched the festival from a heated cushion the family brought up the hill special, this year, so his old bones wouldn't feel the autumn ground. He supervised the whole circle from there, warm and content. A stray kitten watched HIM from the edge of the lantern light. He noticed. He didn't chase it off. Interesting.`],
    grandma: [`@4 Same moon as 1964, dear, and I've made my peace with all of it under this exact light. The waiting, the wedding, the whole long story. And now a new smudge on a low lantern. The moon's seen this family through everything. Wave at it. It waves back, in its way. Final.`],
    tmother: [`I planned nothing this year. Nothing. I sat at the long table and simply let it be long around me. My daughter says it's the most relaxed she's ever seen me. The binder stayed home. I'm told this is called "a holiday." I may try it again.`],
    tfather: [`THE WHOLE TOWN DANCED FOR MY DAUGHTER, SON! A circle of people waving at her every single pass! I danced so hard and cried so much I danced in a puddle of my own JOY! No towel could keep up! I've given up on towels! I am ALL FEELING now!`],
    kenji: [`@3 I sat at the long table between Mori and the family, and for the first time in twenty years I didn't feel like a doctor at a party. I felt like a person at a family dinner. That's the town's real medicine. It cures the thing where you think you're separate from everyone.`],
    mori: [`I attended the festival. I ate three rice cakes, which is two more than I intended. I sat beside Kenji at the long table and did not leave early, which I always do, and did not tonight. …I am recalculating several long-held policies. The winter will finalize them.`],
    hanabi: [`My first festival as part of this. I built the finale with the loud one — my shells, his timing — and when it went up, the whole hill went quiet the way it does, and I understood what he's always trying to do: make everyone hold the same beautiful second at once. I get it now. I'm in. All the way in.`]
  }
},

/* ============================== EP 79 ============================== */
{
  ep: 79,
  title: '第79話 「年老いた猫」 — The Old Cat',
  words: ['old', 'slow', 'warm', 'nap', 'beside', 'remember', 'quiet', 'still'],
  story:
    `Nobody says it out loud, but everybody's noticed: Fish-Thief moves {slow}er now. He takes the stairs one ` +
    `careful step at a time. He sleeps most of the day in the sun. He's still on every round, still the marshal — ` +
    `just quieter about it. Today the whole town, without a word to each other, spends the day making an old cat's ` +
    `world a little softer. And a very small stray keeps watching from the edge of things.`,
  timerSec: 300,
  quests: [
    { word: 'old', type: 'talk', npc: 'trinity', stage: 0,
      ask: `"He's gettin' {old}, isn't he," Trinity says gently, watchin' Fish-Thief pick his careful way down the café step. "He was already a grown cat when you got here. That was six years ago. He's given this whole town six years of showing up. Let's give him an easy day."` },
    { word: 'warm', type: 'buy', item: 'the softest heated cushion in the shop', stage: 1,
      ask: `Ya buy him the {warm}est heated cushion in the store. The shopkeeper's already got one set aside. "Been keeping it back for him," he admits. "That cat guarded my till and my heart for years. His old bones get the good cushion. On the house.  Obviously."` },
    { word: 'nap', type: 'inspect', obj: 'counter_cafe', stage: 2,
      ask: `Trinity's cleared him a permanent {nap} spot on the café counter, in the best patch of afternoon sun, with a little sign: "RESERVED — MARSHAL." Customers pet him on the way past. He allows it now, more than he used to. Old kings soften. It suits him.` },
    { word: 'slow', type: 'do', loc: 'street', verb: 'walk', amount: 300, stage: 3,
      ask: `Ya walk his old rounds with him — {slow}, at his pace, half what it used to be. Past the stand, the clinic, the pond. Everyone he passes stops what they're doing to say hello. It takes an hour to go three streets. It's the best hour of the day.` },
    { word: 'beside', type: 'talk', npc: 'oldman', stage: 4,
      ask: `At the pond, the old man sits {beside} the old cat, two elders in the low sun. "We're the same, him and me," he says, scratchin' the gray chin. "Both slower. Both still showin' up. There's no shame in it, grandson. Showin' up slow still counts as showin' up. Counts double, maybe."` },
    { word: 'remember', type: 'talk', npc: 'grandma', stage: 5,
      ask: `Grandma settles in with a cup of tea to {remember}. "He stole a fish from the shopkeeper the week you arrived, dear. Carried the rings at your wedding. Guarded Trinity's hospital door nineteen nights. Delivered a sixty-year-old letter at my husband's heel. That cat's been at every important moment this town's had. Don't you forget one of them. Final."` },
    { word: 'quiet', type: 'talk', npc: 'sister', stage: 6,
      ask: `Ya find your sister at the edge of the café, very {quiet}, sketchbook closed in her lap. There's a stray kitten curled against her ankle — small, gray, half-wild, the one that's been watching. "Fish-Thief let it eat from his bowl this morning," she says softly. "He's never done that. Not once, ever. I think... I think he's showing it the ropes." Neither of ya says the rest of it out loud.` },
    { word: 'still', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Evenin'. Fish-Thief does his last round of the day — slow, sure, complete — and settles onto the good half of the pillow beside ya, exactly like always. He's {still} here. Still the marshal. Still purring the small tired purr. Ya scratch behind his ears a long, long time. "Good cat," ya tell him. "Best cat." He blinks slow. He knows. He's always known.` }
  ],
  stageToasts: {
    1: `🐈 He's moving slower these days. Everyone's noticed. Give him an easy day.`,
    2: `🛋️ Buy him the warmest cushion. The shopkeeper's been saving one.`,
    3: `☀️ Clear him a nap spot in the best sun. Reserved, Marshal.`,
    4: `🚶 Walk his rounds at his pace. Slow. It'll take an hour. Let it.`,
    5: `🌊 The old man's sitting beside him at the pond. Two elders. Go listen.`,
    6: `🍵 Grandma wants to remember everything he's done. Let her list it.`,
    7: `🐾 Your sister's very quiet. There's a small gray kitten with her.`
  },
  npcLines: {
    trinity: [`@0 He was already grown when you arrived, so he's a proper old gentleman now. Six years of guarding this whole family. He gets soft blankets and sunny counters and slow walks for the rest of it. That's the deal. He earned the deal.`,
      `@7 He still takes the good half of the pillow. He still does every round. Just slower. I love him so much it's hard to breathe some evenings. Don't tell him I get weird about it. He'd be embarrassed for me.`],
    mom: [`I've started leaving the warm spot by the stove open for him every afternoon. He used to fight me for it. Now I just... give it to him. Some battles you're glad to finally lose. He's welcome to the stove for as long as he wants it.`],
    dad: [`I built him a little ramp up to the café counter so he wouldn't have to jump anymore. He looked at it, looked at me, and used it without complaint. That's how I knew. A cat that accepts a ramp is a cat telling you something. I built it good. No wobbles.`],
    sister: [`@6 The stray's been watching him for weeks. And today Fish-Thief let it eat from his OWN bowl. He's never shared anything in his life. I think he's teaching it the rounds. I think he's making sure the town's still guarded after— I'm not going to finish that sentence. I'm just going to feed the kitten too.`],
    friend: [`That cat sat at the door of every question I ever helped this town ask. My proposal coaching, both weddings, Hanabi and me. He was there for all of it, quiet in the corner. I brought him a whole grilled fish today. The good kind. He deserves the good kind. He always did.`],
    shopkeeper: [`@1 He stole my fish the week the whole story started, and I've never once been sorry. Best theft that ever happened to this town — it gave us our marshal. His cushion's on the house forever. So's anything else he wants. He never asks for much. He never did.`],
    trainer: [`I designed him a gentle mobility routine — tiny stretches, warm-up laps, nothing strenuous. He did exactly none of it and napped through my whole demonstration. …You know what? That IS the routine, at his age. Rest is training. He's the master. I'm the student. THE FORM adapts.`],
    boss: [`I've watched that cat run this town's ceremonies with more dignity than most executives run a board meeting. He's earned his retirement counter and his reserved sun. When he does his slow evening round past my office window, I stand up. Out of respect. Every time.`],
    coworker: [`Filed, gently, under a new folder I didn't want to open: THE MARSHAL. Entry one is just a list of everything he's guarded. It's the longest list in the whole archive. Gerald has been leaning toward his cushion all week. Plants know. They always know first.`],
    oldman: [`@4 Him and me, grandson — same season now. Both slow, both gray, both still turning up every morning because the town's ours to look after. There's no fear in it, only a kind of gladness. We got to grow old in a place that lets old things stay useful. Not everyone gets that. We did. Lucky cats, the both of us.`],
    cat: [`Fish-Thief did every round today, slower but complete, and for the first time let the small gray stray trail three paces behind him the whole way — not chasing it off, not slowing for it either, just... allowing. At the pond he sat a long while in the low sun. Whatever a cat thinks about at the end of a long good life, he thought it there, warm, beside the old man, purring the small tired purr. Then he went home and took the good half of the pillow. Same as always. For now.`],
    grandma: [`@5 Don't you grieve him early, dear — that steals from the days he's still got. He's here NOW, warm and purring, and that's where we live: now. But do remember every single thing he's done. A life that full deserves a witness who won't forget a moment of it. I'm one. Be another. Final.`],
    tmother: [`I brought him a cushion from the book club — hand-sewn, the softest we had, the leftover square from the baby's quilt, as it happens. So the marshal and the spring guest sleep under the same cloth. That felt correct. Some things you don't need a binder to know.`],
    tfather: [`That cat carried the rings at my daughter's wedding, son. He walked slow and dignified down the whole aisle with the future on his back. I made the boat sound when I saw him do his rounds today, slow as syrup, still on duty. I love that old cat. I'm not ashamed. A grandfather can love a cat. It's allowed.`],
    kenji: [`I gave him a full checkup, gently. He's old — that's the diagnosis, and it's not one I can treat, only honor. Good heart, tired body, sharp eyes. I told the family: give him warmth, softness, and time, and let him set his own pace. It's the same prescription I'd write for anyone who spent their whole life showing up for others. Comfort. Dignity. Company. It's enough. It has to be.`],
    mori: [`I examined the cat at Kenji's request. My verdict was one word, the same one I give the rarest patients: "loved." That is not a medical term. I used it anyway. Some conditions are beyond the chart. That cat has the best possible one. I have never envied a patient before. I envy him.`],
    hanabi: [`I'm designing a firework just for him, for whenever the town needs it — one slow gold shell that opens like a cat stretching in the sun and hangs there an extra second before it fades. The loud one cried when I showed him the sketch. Some fireworks aren't for celebrating. Some are just for saying thank you. This one's that kind.`]
  }
},

/* ============================== EP 80 ============================== */
{
  ep: 80,
  title: '第80話 「はつゆきと、はじめてのキック」 — First Snow, First Kick',
  night: true,
  words: ['snow', 'kick', 'feel', 'wonder', 'almost', 'blanket', 'hush', 'soon'],
  story:
    `The first {snow} of winter comes down soft after dark, and the whole family's gathered at the house — ` +
    `nursery finished, stand in the sister's hands, café humming, the old cat warm on his cushion. Then Trinity ` +
    `goes very still, grabs your hand, and puts it on her belly. And for the first time, the spring guest says ` +
    `hello, from the inside. The whole winter of waiting begins tonight, and it begins perfect.`,
  timerSec: 330,
  quests: [
    { word: 'snow', type: 'inspect', obj: 'window', stage: 0,
      ask: `First {snow} of the year, out the {window}, comin' down slow and fat in the porch light. "It always snows the night everything's finally ready," Trinity says. "Like the year's tucking us in for the wait." The town goes white and hushed and perfect.` },
    { word: 'blanket', type: 'talk', npc: 'mom', stage: 1,
      ask: `Mom's brought the good {blanket} and finished tucking everyone in whether they wanted it or not. "Nursery's done, stand's handed on, café's humming, cat's warm. Everything that needed doing before spring is DONE. Now we just get to be cozy and wait. My favorite part. I've earned my favorite part."` },
    { word: 'kick', type: 'talk', npc: 'trinity', stage: 2,
      ask: `Trinity gasps, grabs your hand, presses it flat to her belly. "Wait — WAIT—" And then ya {feel} it. A {kick}. Small, sure, alive. The spring guest, saying hello four months early, from the inside. Ya both go completely silent. The whole world narrows to one square inch under your palm.` },
    { word: 'feel', type: 'talk', npc: 'grandma', stage: 3,
      ask: `Grandma gets the next turn to {feel} it. She holds her hand there, closes her eyes, and for once in her long life says absolutely nothing at all. Then, very quietly: "…Hello, spring." A pause. "I knitted you a whole winter's worth, little one. It's all waiting. So am I. Final."` },
    { word: 'wonder', type: 'talk', npc: 'oldman', stage: 4,
      ask: `The old man's turn. He rests his tired baker's hand on the belly, feels the kick, and just... marvels. Pure {wonder}, eighty-four years old, meeting the future through one inch of the present. "There's a person in there," he breathes, like it's the first miracle he's ever heard of. At his age, still able to be astonished. That's the whole secret of him.` },
    { word: 'hush', type: 'talk', npc: 'sister', stage: 5,
      ask: `Everyone takes a turn, and the loud house goes to a {hush} — the good kind, the held-breath kind. Your sister feels the kick and, for once, doesn't narrate, doesn't sketch, doesn't say a word. She just looks up at ya with wet eyes and mouths: "I'm gonna teach them EVERYTHING." Then, quieter: "Bread first. Then comics. Then how good this town is."` },
    { word: 'almost', type: 'talk', npc: 'kenji', stage: 6,
      ask: `Kenji and Mori came through the snow, "just checking in" (holding hands, not hiding it anymore). Kenji feels the kick and grins. "Strong. Right on schedule. We're {almost} there — four more months, one good winter, and then spring does the rest." Mori adds, quiet, watching him with the family: "…We have something to tell you all. In the winter. When the snow's deep. It's good news." Then she almost smiles. The whole room understands. Nobody says a word. This time, the town knows how to wait.` },
    { word: 'soon', type: 'talk', npc: 'trinity', stage: 7,
      ask: `Late. The snow keeps falling. Fish-Thief is warm on his cushion with the small gray kitten curled against him now, and doesn't chase it off. The family drifts home through the white, one lit window at a time. Trinity leans on ya at the door, snow in her hair, hand on her belly. "{soon}," she whispers to the little kick. "Not yet. But soon." Outside, the whole town glows warm under the first snow, holding its breath for spring. Season's over. The best part hasn't even started.` }
  ],
  stageToasts: {
    1: `❄️ First snow of the year, coming down soft. Go to the window.`,
    2: `🛌 Mom's tucking in the whole house. Everything's ready for the wait.`,
    3: `👶 Trinity just grabbed your hand. Put it where she's putting it. WAIT—`,
    4: `🧶 Grandma gets the next turn. Watch her go quiet.`,
    5: `✨ The old man's turn. Eighty-four years old and still astonished.`,
    6: `🤫 The loud house has gone to a hush. Your sister can't speak.`,
    7: `🩺 The doctors came through the snow, holding hands. They've got news for winter.`
  },
  npcLines: {
    trinity: [`@2 That was a KICK. A real one. There's a whole person in here and they just said hi and I will never, as long as I live, feel anything better than that. I've decided. Nothing tops it. Except maybe meeting them. We'll see. But probably this.`,
      `@7 First snow, first kick, everyone I love under one roof, and four months of winter to get cozy in before the best day of our lives. I used to be scared of waiting. Not this winter. This winter I can't wait to wait. If that makes sense. It makes sense to me.`],
    mom: [`@1 Everything that needed doing is done. The nursery, the stand, all of it. Which means this whole winter, my only job is to make soup and be near my family while we wait for a miracle. Thirty years I've wanted a job that easy. I'm going to be SO good at it.`],
    dad: [`I felt the kick and I had to go stand on the porch in the snow for a minute to collect myself. A grandpa's got to pace his feelings out over four months or he'll use them all up by January. I'm rationing. It's not going well. It's going wonderfully.`],
    sister: [`@5 I felt them kick and my brain just went quiet, which NEVER happens. I've got so much to teach them. The bread. The comics. Which koi is which. How to tell when grandma's bluffing. The whole town, one lesson at a time. I'm gonna be the best aunt this place has ever grown. Starting the second they get here.`],
    friend: [`Hanabi and I stood at the back and watched the whole family take turns feeling the kick, and she squeezed my hand and I thought: someday. Not soon. But someday, maybe this. She caught me thinking it. She didn't let go. Best winter of my life and it just started.`],
    shopkeeper: [`I closed the store early and walked through the first snow to the house, just to be there when the family was all together. My father used to say a shop's only worth having if it leaves you time for the nights that matter. This was one. The till can wait. Snow like this doesn't come twice.`],
    trainer: [`A KICK THAT STRONG at this stage is a PRODIGY! An ATHLETE! I felt it and immediately began designing a prenatal encouragement regimen and then Trinity told me to sit down and have some soup and honestly? Best coaching note I've ever received. I sat. I had soup. THE FORM includes rest.`],
    boss: [`I came through the snow because some meetings you don't reschedule, and a family gathered for a first kick is the most important meeting there is. I felt it — small, strong, certain — and I thought: that's the future, and it chose the best possible town to arrive in. Lucky kid. Luckiest kid.`],
    coworker: [`Final entry of the season, filed under SPRING with the first snow still melting on the page: "First kick, first snow, whole family present, doctors holding hands, marshal warm, kitten arrived. Everything ready. Now: the wait." Gerald leaned toward the window and the falling snow all evening. Even he knows something wonderful is coming. See you in winter.`],
    oldman: [`@4 Eighty-four years, grandson, and I've never once gotten tired of being astonished. A kick under my hand, snow out the window, my wife beside me, a whole town warm and waiting. If this is what the last chapter looks like, I'd read it a thousand times. I get to meet a brand new person in spring. What a thing. What an absolute, impossible, ordinary miracle of a thing.`],
    cat: [`Fish-Thief was too settled on his warm cushion to come feel the kick, so the family brought the belly to HIM — Trinity knelt down and he pressed one paw and one ear against it, and felt the small new life kick against the very old marshal, and he purred the tired purr, long and low and satisfied. The small gray kitten watched from beside him, learning. He let it stay. He let it watch. Some nights, an old cat decides the future looks safe enough to sleep through. He slept.`],
    grandma: [`@3 A winter's worth of knitting, all finished and folded and waiting, dear, and now a kick to knit it for. I spent sixty years learning that the good thing might come late but it comes. Here's the proof, kicking under my hand in the first snow. Hello, spring. Take your time. We'll all be right here. Final — and the softest 'final' I've ever said.`],
    tmother: [`I felt the kick and did not organize a single thing afterward. I simply sat in the hush with my family and let the snow fall and the winter begin. My daughter says I've changed. I have. This town changed me, one long table at a time. I closed every binder I own tonight. The last page of the last one says: "Wait. It's worth it." I know that now.`],
    tfather: [`@7 I FELT THE KICK, SON! Through the snow I came, and I felt my grandchild say HELLO and I made the boat sound so loud and so long that the FIRST SNOW seemed to fall FASTER out of respect! I love them! I've loved them since the heartbeat and now they've KICKED ME HELLO! Four months! FOUR MONTHS and then the best day of ALL our lives! I bought MORE towels! I'll need them ALL!`],
    kenji: [`@6 Strong kick, perfect timing, healthy everything — the winter's going to be an easy wait, medically speaking. And personally— …yes. Mori and I have news for when the snow's deep. I've waited my whole careful life to be this un-careful about something. Ask me in winter. I'll finally have the words. For now: everyone's healthy, the snow's beautiful, and I've never been happier to be the town's doctor. Good night. Stay warm. Spring's coming, and it's going to be perfect.`],
    mori: [`@6 I felt the kick. Small, certain, alive. I have held ten thousand hearts and never once let one hold ME back — until this town. Until him. …Yes. There is news. It waits for deep winter, for the right night, for the right quiet. I have learned to wait for the right quiet. This town taught me. Everything good here, I have learned, is worth waiting for through one honest season. So. We wait. And then, when the snow is deepest — good news. The best I have ever had to give. Note that. Note all of it. Final. …That is HER word. I am, it seems, keeping it. I have decided to keep a great many things from this town. Permanently.`],
    hanabi: [`I stood at the back with the loud one and watched a whole family feel a heartbeat kick against their hands in the first snow, and I finally understood what he means when he says a good firework makes everyone hold the same second at once. That's what tonight was. The whole town holding one second. I'm building the birth firework in secret and it's nearly done — everything except the name. Spring, everyone keeps saying. Spring. I've never wanted a season to hurry and to never end, both at once, this badly. Best winter of my life, and the snow only just started falling.`]
  }
}
]