import type { Episode } from './episodes'

/* =====================================================================
   SEASON 4 (episodes 31-40) — "The Wedding Season"
   Arc: the road to the hill. The commercial airs (ep31), invitations go
   out (ep32), dress & suit episodes (33/34), the full 1964 story (ep35),
   the 1964 Stand opens in the park (ep36 — new world object!), dance
   lessons from a secret champion (ep37), the disaster rehearsal (ep38),
   the night before (ep39), and THE WEDDING (ep40 — the hill transforms).
   All text trilingual via {concept} markers.
   ===================================================================== */

export const SEASON4: Episode[] = [

/* ============================== EP 31 ============================== */
{
  ep: 31,
  title: '第31話 「テレビの夜」 — The Commercial Airs',
  words: ['tv', 'program', 'collect', 'seat', 'start', 'who', 'show', 'mail'],
  story:
    `It's happenin'. Tonight, at eight o'clock sharp, right between the weather report and a drama about sad detectives, ` +
    `the Maruneko Pet Foods commercial airs nationwide. Starrin': Fish-Thief. The town's planned a watch party at your ` +
    `house with military precision, bud. The star himself's requested nothin'. He already knows how it ends: with him, bein' magnificent.`,
  timerSec: 300,
  quests: [
    { word: 'tv', type: 'talk', npc: 'friend', stage: 0,
      ask: `Party captain: "Tonight the whole town watches your {tv}. I measured the livin' room. Thirty-one humans fit, if nobody breathes deep."` },
    { word: 'program', type: 'talk', npc: 'boss', stage: 1,
      ask: `"I checked the listings," says your boss. "The {program} airs at eight. I've scheduled feelings for eight-oh-three. Two minutes. Three, tops."` },
    { word: 'collect', type: 'buy', item: 'the entire snack shelf', stage: 2,
      ask: `"{collect} ALL the snacks," commands your sister. The shopkeeper watches his shelves empty with professional pride and mild fear.` },
    { word: 'seat', type: 'talk', npc: 'mom', stage: 3,
      ask: `"Best {seat} in the house goes to the star," mom rules. A velvet cushion. On the table. At eye level with his own image. Protocol's protocol.` },
    { word: 'start', type: 'inspect', obj: 'tv', stage: 4,
      ask: `Two minutes to eight. The show's about to {start}. The room holds thirty-one humans, one plant with a bow, and zero personal space.` },
    { word: 'who', type: 'talk', npc: 'cat', stage: 5,
      ask: `"And {who} is THAT?!" gasps half the town at the screen. It's Fish-Thief. On national television. He doesn't look up. Stars never watch themselves.` },
    { word: 'show', type: 'talk', npc: 'sister', stage: 6,
      ask: `Replay time! Your sister makes everyone {show} the strollin' scene four more times. She narrates each frame. She's got merchandise concepts.` },
    { word: 'mail', type: 'talk', npc: 'coworker', stage: 7,
      ask: `Next mornin': the postman staggers in with a SACK. Fan {mail}! Forty letters, three marriage proposals (for the cat), and one addressed to Gerald.` }
  ],
  stageToasts: {
    1: `📺 Watch party protocol drafted. The boss's got DVR backup plans. Consult him.`,
    2: `🍿 Thirty-one guests don't feed themselves. Snack requisition: GO.`,
    3: `🛋️ Seatin' chart dispute! Mom's arbitratin'. The star gets... a throne?`,
    4: `⏰ 7:58 PM. Places, everyone. PLACES!`,
    5: `🌟 THERE HE IS! THE SCREEN! LOOK AT THE SCREEN!`,
    6: `🔁 The director's cut viewin' (your sister directs the rewatchin').`,
    7: `📬 Mornin'. There's... a lotta mail outside. A concernin' amount of mail.`
  },
  npcLines: {
    trinity: [
      `I'm marryin' into a famous family. The famous one's the cat, but still. It counts. I'm tellin' my college friends it counts.`,
      `@5 The way the whole room SCREAMED when he appeared. He yawned. He yawned AT us, bud. Icon behavior.`
    ],
    mom: [
      `Thirty-one guests and everyone gets fed. This isn't a watch party, it's the Olympics of hostin', and I've trained my whole life.`,
      `@7 One fan letter asks for his paw print. We tried. He signed the table instead. The table's memorabilia now.`
    ],
    dad: [
      `I told the hardware store the airin' time. They're CLOSIN' EARLY. This cat's done more for community spirit than three mayors, bud.`,
      `@5 That's OUR cat. From OUR house. Eatin' on NATIONAL television. ...I've never been prouder of anyone eatin'.`
    ],
    sister: [
      `As his manager I negotiated his appearance fee for tonight: two pillows and the warm spot. He's worth ten times that. Don't tell him I said so.`,
      `@6 Frame forty-two: the whisker flick. THE WHISKER FLICK. Cinema schools'll teach this.`
    ],
    friend: [
      `Both fireworks concepts are ready for the moment he appears. Concept A: tasteful. Concept B: visible from the next town. We're doin' B, bud.`,
      `@7 THREE marriage proposals?! The cat gets three and I got ZERO?! ...I need to get on television.`
    ],
    shopkeeper: [
      `@2 Cleaned out to the last rice cracker. I'm not restockin' 'til Thursday. I'm closin' early to attend. Priorities: correct.`,
      `@5 I sold that cat's FIRST stolen fish. Well — he stole it. But history was purchased HERE, is my point. I'm puttin' up a plaque.`
    ],
    trainer: [
      `Commercial-watchin' posture matters! Sit TALL for the star! Slouchin' at a premiere is disrespect!`,
      `@5 The STRIDE on him. The core control. I've shown the clip to my mornin' class as a masterclass. Twice.`
    ],
    boss: [
      `@1 Eight-oh-three feelings, as scheduled. Right on time. He appeared, my chest did somethin', HR's been notified.`,
      `Maruneko's stock'll rise on this. I'm not a bettin' man, but I bought a case of their tuna line as a gesture of confidence.`
    ],
    coworker: [
      `Gerald's got a bow for the premiere. He was IN the commercial (post-production). This is technically HIS premiere too. He's very calm about it. I'm not.`,
      `@7 The letter addressed to Gerald contains a leaf. From a FAN. A fan sent Gerald a leaf. We're framin' it. Obviously.`
    ],
    oldman: [
      `The whole pond's talkin' about it. Well — I'm talkin', the koi are listenin'. Same thing, most days.`,
      `@5 A cat who once stole fish, now famous for eatin' 'em polite on television. Redemption arcs, young one. The pond approves.`
    ],
    cat: [
      `@5 Fish-Thief sits on his velvet cushion, back to the television, facin' his audience. He knows which show matters. The room. The room's the show.`
    ],
    grandma: [
      `A famous cat in the family. In MY day the famous animal was Matsuda's rooster, and fame went to his head. Watch this one, dear. Fame's rich food.`,
      `@6 Fourth rewatch. He does look magnificent. Fine. FINE. The rooster comparison is withdrawn.`
    ],
    tmother: [
      `I've alerted my entire book club. Eleven televisions, synchronized. If this cat doesn't win an advertisin' award, I'll be writin' letters.`,
      `@5 Perfect entrance, held the frame, ate with dignity. That's more presence than most leadin' men. I said what I said.`
    ],
    tfather: [
      `I've been emotionally preparin' for this commercial all week. I got a towel. It's a big towel.`,
      `@5 IT WAS THIRTY SECONDS OF PURE BEAUTY. The towel was insufficient. Deploy towel two!`
    ],
    kenji: [
      `I prescribed the star a calm afternoon before airtime. He was already asleep in the sun. That animal medicates himself better than any patient I've got.`,
      `@7 Careful with the fan mail paper cuts. I say this as the man who treated four of 'em today. The price of fame is apparently: fingertips.`
    ]
  }
},

/* ============================== EP 32 ============================== */
{
  ep: 32,
  title: '第32話 「招待状」 — The Invitations',
  words: ['count', 'next to', 'turn', 'address', 'stamp', 'send', 'good luck', 'gift'],
  story:
    `The mega-binder's spoken: today the invitations go out. Forty envelopes, forty futures sealed with a flower stamp. ` +
    `There's a guest list (everyone), a seatin' philosophy (nobody sits beside their feud — tab four's got the feud map), ` +
    `and a signin' order for the fancy pen that required formal negotiations. Your sister mediated. Your sister also went first.`,
  timerSec: 315,
  quests: [
    { word: 'count', type: 'talk', npc: 'trinity', stage: 0,
      ask: `"First we {count} the guests." The list is: the entire town. Trinity counts anyway, twice, 'cause it makes it feel real. Forty. Forty-one with Gerald.` },
    { word: 'next to', type: 'talk', npc: 'tmother', stage: 1,
      ask: `"Seatin' is architecture," Trinity's mom declares. "Nobody sits {next to} their feud." Tab four of the spreadsheet is consulted. Twice.` },
    { word: 'turn', type: 'talk', npc: 'sister', stage: 2,
      ask: `"Everyone gets a {turn} with the fancy pen," your sister rules, mediatin' the dispute she started. She signs first. Mediator's fee.` },
    { word: 'address', type: 'inspect', obj: 'letter', stage: 3,
      ask: `Forty envelopes. Ya write the last {address} with a crampin' hand and enormous love. It's legible. Barely. It's the doctor's. He'll forgive.` },
    { word: 'stamp', type: 'buy', item: 'a sheet of flower stamps', stage: 4,
      ask: `To the store for {stamp}s! The shopkeeper produces the SPECIAL sheet — flowers. "Weddin' mail deserves petals," he says, misty.` },
    { word: 'send', type: 'talk', npc: 'coworker', stage: 5,
      ask: `"Time to {send} 'em!" Your coworker's optimized your mailbox route: 3 stops, 11 minutes, zero backtrackin'. There's a spreadsheet tab. 'Course there is.` },
    { word: 'good luck', type: 'talk', npc: 'grandma', stage: 6,
      ask: `Grandma slips a five-yen coin into every envelope. "For {good luck}, dear. Post office regulations can't stop a grandmother. Nothin' can."` },
    { word: 'gift', type: 'talk', npc: 'dad', stage: 7,
      ask: `"About weddin' {gift}s," dad says grave. "Tell everyone: NO blenders. We got four. All from MY weddin'. All still in their boxes. Learn from me."` }
  ],
  stageToasts: {
    1: `📒 The mega-binder's open to the seatin' philosophy. Attend the lecture.`,
    2: `🖊️ A dispute's broken out over the fancy pen. A mediator's appointed herself.`,
    3: `✍️ Forty envelopes await. Stretch your writin' hand. Begin.`,
    4: `🌸 Envelopes need petals — the store's got the special stamps in!`,
    5: `📮 Sealed, stamped, stacked. The route optimizer's waitin' with a printout.`,
    6: `🪙 Wait — why do the envelopes jingle? GRANDMA?`,
    7: `🎁 One last public service announcement from your father. It's about blenders.`
  },
  npcLines: {
    trinity: [
      `We addressed the cat's invitation to "Fish-Thief & Guest". The guest is a koi. We're coverin' our bases.`,
      `@6 Every envelope jingles now. The postman'll have questions. The answers are all "grandma".`
    ],
    mom: [
      `My side of the guest list was seventeen people. Then I remembered the bread line. It's thirty now. The bread line BONDS people.`,
      `@7 Four blenders, still boxed, all from 1998. He's right. Put it on the invitations if ya have to. SAVE THEM.`
    ],
    dad: [
      `I've got beautiful handwritin' when supervised. I'm currently unsupervised. My envelopes've been... reassigned.`,
      `@2 I got the fancy pen ninth. NINTH. My own household. There's politics in this house, bud, and I'm not winnin' 'em.`
    ],
    sister: [
      `Mediator, first signer, AND envelope-jingle quality control. Weddings create so many important positions and I hold most of 'em.`,
      `@1 I checked tab four. My feud with the pigeon from the parkin' lot is LISTED. Respect. That bird knows what he did.`
    ],
    friend: [
      `My invitation says "Best Man" on it and I've already framed it. I framed an invitation to an event I'm IN. No regrets, bud.`,
      `@5 I volunteered to hand-deliver mine to myself and savor the moment. Request: approved. Moment: savored.`
    ],
    shopkeeper: [
      `@4 The flower stamps only come out for weddings and champions. This town's needed a lotta them lately. My favorite economy.`,
      `My invitation arrived — hand-delivered, five-yen coin included. I'm puttin' the coin in the register's lucky corner. Yeah, the register's got one.`
    ],
    trainer: [
      `My invitation said "plus one". I'm bringin' my kettlebell— I'm JOKIN'. I'm bringin' my mother. She's wanted to meet the marathon grandmother for MONTHS.`,
      `@1 Tab four seated me across from the vendin' machine that ate my coins in 2022. Even the FEUD MAP respects my grudges. Flawless plannin'.`
    ],
    boss: [
      `I received invitation number one. I checked the postmark timin'. Don't confirm it. Let me have this.`,
      `@5 Your coworker's route optimization saved eleven minutes. I've seen quarterly initiatives do less with more budget. Promote the mailbox project.`
    ],
    coworker: [
      `Gerald's invitation lists him as "botanical honor guard". He's been standin' extra straight. He's a PLANT. And yet: visibly straighter.`,
      `@3 Handwritin' analysis of envelope forty: fatigue detected, love levels stable. That's the exact right ratio for weddin' mail.`
    ],
    oldman: [
      `My invitation came with two extra rice grains from the envelope-stuffin' table. The pigeons've already RSVP'd yes to those.`,
      `@6 A five-yen coin means good fortune and connection. Forty envelopes of it. That grandmother does nothin' by halves. Never did.`
    ],
    cat: [
      `@0 Fish-Thief received his invitation, sat on it to claim it, and is now guardin' it from imaginary rivals. RSVP status: aggressively yes.`
    ],
    grandma: [
      `@6 Five yen per envelope, forty envelopes. Two hundred yen for forty blessings. Show me a better exchange rate, dear. Ya can't.`,
      `The signin'-order negotiations lasted longer than my second engagement? — 1968, don't ask, dear. The pen WAS very fancy.`
    ],
    tmother: [
      `@1 The feud map took three days of intelligence gatherin'. The bread line talks, dear. The bread line ALWAYS talks.`,
      `The invitation card stock scores nine point five. The missin' half point keeps everyone humble. Includin' the card stock.`
    ],
    tfather: [
      `I saw the envelope with my name in my daughter's handwritin' and needed a moment. The moment's ongoing. It may last through the weddin'.`,
      `@7 A man with four boxed blenders is a man who's LIVED. I got five toasters. Brothers, I tell ya. BROTHERS.`
    ],
    kenji: [
      `@3 I received the envelope with the, let's say, expressive handwritin'. I'm a doctor. I read doctor writin'. It was — even for me — an adventure.`,
      `I RSVP'd yes and prescribed myself the day off. First sick note I've ever written for happiness. It felt excellent.`
    ]
  }
},

/* ============================== EP 33 ============================== */
{
  ep: 33,
  title: '第33話 「ドレス」 — The Dress',
  words: ['wear', 'mirror', 'ribbon', 'silver', 'borrow', 'shine', 'look good', 'wish'],
  story:
    `The dress has arrived at the house, and with it: THE RULES. Ya may not see it. Ya may not glimpse it. Ya may not ` +
    `"accidentally" walk past the room while stretchin'. Bad luck, says every mother present (there's two, plus a grandmother ` +
    `operatin' at field-marshal intensity). Your role today's noble and ancient, bud: you're the errand runner. RUN, errand boy.`,
  timerSec: 300,
  quests: [
    { word: 'wear', type: 'talk', npc: 'trinity', stage: 0,
      ask: `Trinity, through the closed door: "Ya can't see what I {wear} 'til the hill! Bad luck! Ya may, however, fetch things. SO many things."` },
    { word: 'mirror', type: 'talk', npc: 'trainer', stage: 1,
      ask: `The fittin' requires the big {mirror} — the GYM mirror. The coach clutches his chest: "...For the BRIDE? Take it. Take the good dumbbells too. Take anything."` },
    { word: 'ribbon', type: 'buy', item: 'the finest ribbon on the spool', stage: 2,
      ask: `The emergency list arrives under the door: {ribbon}, more pins, calmin' tea. The shopkeeper unrolls his best spool like a royal decree.` },
    { word: 'silver', type: 'talk', npc: 'grandma', stage: 3,
      ask: `Grandma opens a small wooden box: a {silver} ribbon. "1964. It was in my hair when the bread b— when I raced. It goes in the dress. FINAL."` },
    { word: 'borrow', type: 'talk', npc: 'tmother', stage: 4,
      ask: `"To {borrow} is tradition!" Trinity's mom produces pearl earrings. "From MY weddin'. Don't tell her they're also the somethin' old. Efficiency."` },
    { word: 'shine', type: 'talk', npc: 'sister', stage: 5,
      ask: `A shriek through the door: "IT {shine}S!" Your sister emerges glowin', sworn to secrecy, burstin' with it. "I can say NOTHIN'. It SHINES. That's all. IT SHINES."` },
    { word: 'look good', type: 'talk', npc: 'friend', stage: 6,
      ask: `Your friend consoles ya on the doorstep: "You'll {look good} too! Probably! We'll solve the hair situation! There's still time! Days, even!"` },
    { word: 'wish', type: 'talk', npc: 'oldman', stage: 7,
      ask: `The old man, at the pond: "Make a {wish} for the fittin' days, young one. The koi carry wishes. Slowly. But they always arrive."` }
  ],
  stageToasts: {
    1: `🚪 The door's shut. The rules are read. Errand one: the fittin' needs a BIG mirror.`,
    2: `📜 A list slides under the door. It's in three handwritings. All urgent.`,
    3: `📦 Grandma's gone to get "somethin'". She returned with a box and a look.`,
    4: `💎 Trinity's mom clears her throat. A tradition's about to be deployed.`,
    5: `✨ Sounds of gaspin' from the fittin' room. A small informant's emergin'.`,
    6: `🪞 Ya caught your reflection and sighed out loud. A support unit's been dispatched.`,
    7: `🌳 Errands complete. The pond's quiet. One last thing to do today.`
  },
  npcLines: {
    trinity: [
      `Three fittings today and I've been forbidden from slouchin', snackin', and "unauthorized weepin'". The dress has a security detail.`,
      `@3 Grandma's silver ribbon's IN the dress now. When she pinned it she said "there" like a whole sentence. I cried. UNAUTHORIZED, apparently.`
    ],
    mom: [
      `The fittin' room protocol: I pin, her mother judges angles, grandma commands. It's the best team I've ever worked on.`,
      `@5 Your sister lasted nine minutes on secrecy before "IT SHINES" burst outta her. Honestly? Longer than I predicted.`
    ],
    dad: [
      `I'm also banned from the fittin' room, for balance. Us door-side men gotta stick together. I've brought tea and solidarity.`,
      `@1 They took the GYM mirror? Through the STREET? I helped carry it and waved at everyone like a parade. 'Cause it was one.`
    ],
    sister: [
      `@5 I've seen it. I'm a VAULT. A shiny, shiny vault. Don't ask me about the sleeves. THE SLEEVES. I've said too much.`,
      `My flower-girl dress got approved today too. Nobody asked ME to keep that secret, so: it's orange, it spins, goodbye.`
    ],
    friend: [
      `Hair consultation scheduled for Thursday. I've saved seventeen reference pictures. You'll look at ALL of 'em.`,
      `@6 The groom-side glow-up montage is MY department. Best man duties are ninety percent hype. I was BORN for this.`
    ],
    shopkeeper: [
      `@2 That spool's waited four years for a worthy occasion. Sold by the meter to everyone else. For the dress: the whole thing.`,
      `Calmin' tea sales today: eleven boxes. All to the same house. The fittin's goin' NORMALLY, then.`
    ],
    trainer: [
      `@1 The gym feels naked without the mirror. The mornin' class had to visualize their form. Honestly? Best session in months. Keep it a week.`,
      `A bride carried my mirror away and I TEARED UP. Don't put it in the newsletter. ...Put it in small print.`
    ],
    boss: [
      `The office pool on "days 'til the groom accidentally sees the dress" is at even odds for Thursday. I took "never". I believe in ya. Financially.`,
      `My wife's dress, thirty years ago, had a borrowed brooch from HER grandmother. I remembered it today at my desk and had to close the blinds.`
    ],
    coworker: [
      `Gerald was placed in the fittin' room as "an audience with no opinions". He's been promoted to permanent fixture. He loves it there. Good light. Good gossip.`,
      `@5 Data point: "IT SHINES" has been said fourteen times in this town today. I'm chartin' it. The chart also shines.`
    ],
    oldman: [
      `@3 A silver ribbon from 1964. I remember a runner wearin' one like a comet's tail. ...Hm? No. No reason. The koi are callin'. Excuse me.`,
      `Dresses, ribbons, and wishes. Big days are just small things, gathered careful. This town gathers well.`
    ],
    cat: [
      `Fish-Thief attempted to enter the fittin' room four times and now patrols the door AS IF he weren't banned. He was banned FIRST, in fact. Fur.`
    ],
    grandma: [
      `@3 Sixty years that ribbon waited in a box, dear. Things wait, if they matter. ...The dress fits her like the ribbon fits the dress. FINAL.`,
      `Field promotion: your mother pins faster than any seamstress I commanded in 1965. And I commanded SEVERAL.`
    ],
    tmother: [
      `@4 The earrings are borrowed, old, AND elegant. Triple duty. My binder calls this "traditional efficiency". My heart calls it somethin' softer.`,
      `I saw my daughter in the mirror today — the gym mirror, of all things — and had to step out for "air". The air was for cryin'. Don't tell the binder.`
    ],
    tfather: [
      `I'm not allowed NEAR the fittin' house. My cryin's "audible through doors", they said. Fair. Accurate. I'll be at the pond.`,
      `@5 The little one says it SHINES. I've already started cryin' about a dress I haven't seen. New record. Update the chart.`
    ],
    kenji: [
      `I was summoned to the fittin': one pin-related fingertip, one lightheaded grandmother-adjacent moment. Diagnosis: too much holdin' of breath around beauty. Common this season.`,
      `@7 The koi carry wishes, the doctor carries bandages. Between us, the fittin' days are fully covered.`
    ]
  }
},

/* ============================== EP 34 ============================== */
{
  ep: 34,
  title: '第34話 「スーツ」 — The Suit',
  words: ['suit', 'black', 'fix', 'necktie', 'knot', 'button', 'pocket', 'adult'],
  story:
    `Your turn. "Today we get ya a {suit}," dad announces at breakfast — and then the doorbell rings, and it's Trinity's ` +
    `father, ALSO in fittin'-day mode, and the two of 'em share a nod of terrifyin' purpose. What follows is the most ` +
    `supervised shoppin' trip of your life. Somewhere between the dads, an old champion's knot, and a secret tailor, a groom appears.`,
  timerSec: 300,
  quests: [
    { word: 'suit', type: 'talk', npc: 'dad', stage: 0,
      ask: `"Today we get ya a {suit}," dad declares. Both dads. Matchin' determination. One of 'em brought a measurin' tape FROM HOME.` },
    { word: 'black', type: 'buy', item: 'the good black fabric', stage: 1,
      ask: `The {black} fabric — the GOOD bolt, top shelf. The shopkeeper takes it down with the gravity of a moon launch.` },
    { word: 'fix', type: 'talk', npc: 'shopkeeper', stage: 2,
      ask: `Plot twist: the shopkeeper can {fix} and tailor ANYTHING. "Forty years of secret hemmin'," he admits. The sleeves surrender on sight.` },
    { word: 'necktie', type: 'talk', npc: 'tfather', stage: 3,
      ask: `Trinity's dad presents his lucky {necktie}. "Worn at my own weddin', and to every important handshake since." It's green. It's PERFECT.` },
    { word: 'knot', type: 'talk', npc: 'oldman', stage: 4,
      ask: `The old man ties the {knot} in one smooth motion. "1964 championship knot. It's never slipped." A beat. "Neither will you."` },
    { word: 'button', type: 'inspect', obj: 'mirror', stage: 5,
      ask: `Final fittin' at the gym mirror: every {button} closed, shoulders back. The coach salutes your reflection. "STRUCTURAL INTEGRITY: CONFIRMED."` },
    { word: 'pocket', type: 'talk', npc: 'sister', stage: 6,
      ask: `Your sister slips a tiny drawin' into the jacket {pocket}: stick figures on a hill, all holdin' hands. "For emergencies," she says. Keep it forever.` },
    { word: 'adult', type: 'talk', npc: 'mom', stage: 7,
      ask: `Mom sees the full suit and goes very quiet. "When did ya become an {adult}?" she manages. Somewhere between the pudding cups, probably.` }
  ],
  stageToasts: {
    1: `🕴️ Two dads, one mission. The store awaits. The GOOD fabric awaits.`,
    2: `✂️ Wait — the shopkeeper just produced professional pins from nowhere?!`,
    3: `🍀 A green tie's entered the fittin'. It's got a forty-year win record.`,
    4: `🎗️ The tie needs a knot worthy of it. There's exactly one master in town.`,
    5: `🪞 The mirror's still at the fittin' house— no. The GYM's got a spare wall one. Go.`,
    6: `🖍️ A small person with a folded paper's waitin' by your jacket. Act casual.`,
    7: `🏠 One last look. Show mom. Brace yourself. Bring tissues. Not for you. (Also for you.)`
  },
  npcLines: {
    trinity: [
      `Ya get fitted by two dads and a secret tailor, I get three fittings and a security detail. We're livin' COMPLETELY different weddin' preps and I love both.`,
      `@6 I heard about the pocket drawin'. I'm not allowed to see YOUR outfit either, but I've been told there's a masterpiece in it. Correct assessment.`
    ],
    mom: [
      `@7 The measurin'-tape-from-home is from OUR weddin' suit. He kept it. Twenty-six years. That man remembers nothin' about Tuesdays and everything about love.`,
      `Black suit, green tie, silver somewhere in the dress. The colors of this weddin' are "family heirloom". Best palette there is.`
    ],
    dad: [
      `The one-trip rule doesn't apply to suit shoppin'. We made six trips. Suit shoppin's SACRED. Also I kept forgettin' the tape.`,
      `@5 When the coach saluted the mirror, I saluted too. We all saluted. A suit that good demands protocol.`
    ],
    sister: [
      `@6 The drawin' took four drafts. Draft two had the cat too big. Draft three had dad too small. Draft four's PERFECT. Museum quality. Pocket museum.`,
      `Ya looked really... tall today. Weird. Anyway I put a second emergency drawin' in the OTHER pocket. Backup systems. Ya cry a lot lately.`
    ],
    friend: [
      `Best man report: I saw the suit. I made an involuntary sound like a kettle. The hair situation resolves Thursday. We're SO on schedule.`,
      `@3 The lucky green tie?! From the handshake ARCHIVE?! Ya realize ya basically got knighted today. I'd have paid to attend.`
    ],
    shopkeeper: [
      `@2 Forty years I hemmed in the back room and told no one. My wife knew. The cat found out. Now you. The list of people I trust is short and excellent.`,
      `@1 That bolt of black's refused four customers. Fabric knows. It was WAITIN'. Don't ask me to explain textile loyalty.`
    ],
    trainer: [
      `@5 A suit's armor for the heart. I said that to your reflection 'cause sayin' it to your face was too powerful for a Tuesday.`,
      `I offered to tailor the shoulders with TRAINING instead of pins. Two weeks of rows. The shopkeeper said pins are faster. Pins. Hmph.`
    ],
    boss: [
      `I sent my cufflinks over with the coworker. Wore 'em the day I got promoted and the day I got married. They only come out for real days. This is one.`,
      `@7 The first time my mother saw me in a suit she cried into a dish towel. It's a law of nature, that moment. Ya can't budget for it.`
    ],
    coworker: [
      `Cufflink delivery: complete. Gerald inspected the suit and leaned approvingly. That's his highest honor. The bow stays home for the weddin' — he's goin' FORMAL: bare leaf.`,
      `@4 The 1964 knot's got a documented zero-slip record across sixty years. I attempted to chart it. The chart just says "legend" forty times.`
    ],
    oldman: [
      `@4 A knot's a promise your hands make. Learn it, and you'll never stand at a mirror helpless. ...Also it impresses grandmothers. Ask me how I know. Don't.`,
      `The suit, the tie, the knot, the pocket. A groom's assembled by his whole town. Always was. That's the tailorin' that matters.`
    ],
    cat: [
      `Fish-Thief sat on the suit jacket for six minutes and left exactly enough fur to say "I was here". The tailor calls it a signature. It stays.`
    ],
    grandma: [
      `I inspected the shoulder seams. The shopkeeper's hemmin' woulda passed 1965 standards. MY standards. Tell him. He'll understand the honor.`,
      `@7 Your mother asked when ya became an adult. I know exactly when, dear: the day ya started savin' the last dumpling for someone else. I NOTICED.`
    ],
    tmother: [
      `The green tie against the black suit: my husband's got better instincts than his cryin' chart suggests. Don't tell him. His confidence needs no fertilizer.`,
      `@5 I inspected the final fit through the gym window. Structurally sound, emotionally devastating. The binder awards a nine point five. The half point keeps grooms humble.`
    ],
    tfather: [
      `@3 The tie's closed business deals, met two prime ministers— okay, one mayor — and married ME off. It's got one great day left in it. The GREATEST. Wear it well, son.`,
      `He called me son back. I need the towel. THE BIG TOWEL.`
    ],
    kenji: [
      `Fittin'-day injuries: zero. Emotional incidents: seven, all classified as "healthy". This weddin's excellent for town morale and terrible for my tissue supply.`,
      `@4 I watched the old man tie that knot. Steady hands, sixty years of muscle memory. As a doctor: remarkable. As a guest: I teared up on a professional level.`
    ]
  }
},

/* ============================== EP 35 ============================== */
{
  ep: 35,
  title: '第35話 「1964」 — 1964',
  words: ['first time', 'remember', 'change', 'deep', 'romance', 'return', 'feeling', 'continue'],
  story:
    `Rain today — the soft kind that cancels plans and starts stories. The family gathers around the kitchen table with tea, ` +
    `and somebody (your sister, obviously) finally asks the question the whole town's been chewin' on since the bread and the ` +
    `silver ribbon: "Grandma. The bread boy. 1964. EVERYTHING. Now." Grandma sets down her cup. The old man, invited for tea by ` +
    `zero coincidence, studies the table. "Well," she says. "It was rainin' then, too."`,
  timerSec: 300,
  quests: [
    { word: 'first time', type: 'talk', npc: 'grandma', stage: 0,
      ask: `"The {first time} I saw him, he had flour on his ears and no idea I was mid-race. I slowed down. ONCE. In my entire career. Once."` },
    { word: 'remember', type: 'talk', npc: 'oldman', stage: 1,
      ask: `"I {remember} a runner who stopped at my stall MID-RACE, ate half a roll, said 'this wins prizes someday', and ran on. I never got her name. I got seven more years of bakin' courage."` },
    { word: 'change', type: 'talk', npc: 'mom', stage: 2,
      ask: `Mom, stunned: "Some things never {change}. She STILL critiques bread mid-stride. She did it at the marathon. To EVERYONE. It's a family fear."` },
    { word: 'deep', type: 'talk', npc: 'kenji', stage: 3,
      ask: `"Some memories sit {deep}," observes Dr. Kenji. "Sixty years, and both pulses jumped at the same part of the story. I measured. Discreetly. For science."` },
    { word: 'romance', type: 'talk', npc: 'sister', stage: 4,
      ask: `Your sister, vibratin': "This is a {romance}! A SIXTY-YEAR slow burn! I've read about these! Where's the sequel?! WHO IS WRITIN' THE SEQUEL?!"` },
    { word: 'return', type: 'talk', npc: 'friend', stage: 5,
      ask: `"And then she {return}ed to this exact town DECADES later and NEITHER OF THEM KNEW?!" Your friend sits down on the wet grass. Dramatically. Necessarily.` },
    { word: 'feeling', type: 'talk', npc: 'trinity', stage: 6,
      ask: `Trinity squeezes your hand: "That {feeling} — when the bread tasted like 1964 to her? That's what I want us to be at eighty." Deal. Forever deal.` },
    { word: 'continue', type: 'talk', npc: 'grandma', stage: 7,
      ask: `Grandma stands, decision made: "The story'll {continue}. Old man! We open the bread stand. Weddin' week. You bake. I command." He salutes with a rollin' pin.` }
  ],
  stageToasts: {
    1: `🍞 The old man's gone quiet at the table. His side of 1964's comin'.`,
    2: `🍵 Mom's doin' the math on sixty years of mid-stride bread critique. Check on her.`,
    3: `🩺 The doctor's been suspiciously silent, holdin' two wrists. Investigate.`,
    4: `📚 Your sister's climbed onto her chair. A declaration's imminent.`,
    5: `⚡ Your friend just realized the timeline. He needs assistance. Or grass.`,
    6: `💜 Trinity's lookin' at ya in that way. Go there. Now.`,
    7: `📣 Grandma's standin'. When grandma stands, HISTORY stands with her.`
  },
  npcLines: {
    trinity: [
      `Rain on the window, tea goin' cold, a sixty-year story at the kitchen table. Your family doesn't have conversations, bud. It has EPISODES.`,
      `@6 At eighty, critique my bread mid-stride. Promise. I want the FULL grandma package.`
    ],
    mom: [
      `@2 My mother had a mystery bread boy and I learned about it at FIFTY-ONE, at my own kitchen table, from HER FACE goin' soft. I need more tea.`,
      `She kept the ribbon. Sixty years, eleven house moves, one box. My mother, sentimental. The rain really does bring out everything.`
    ],
    dad: [
      `I've lived with your grandmother-in-law for years of visits and knew NOTHIN'. That woman coulda run intelligence services. She probably DID. Don't check.`,
      `@7 A bread stand, announced like a military operation. The rollin' pin salute made it official. I've never seen the old man stand straighter.`
    ],
    sister: [
      `@4 I'm writin' it ALL down. Title: "The Silver Ribbon". Chapter one: flour ears. IT WRITES ITSELF.`,
      `The rain canceled my plans and delivered a sixty-year love story instead. Best canceled plans of my LIFE.`
    ],
    friend: [
      `@5 The math though!! If the koi hadn't— if the marathon hadn't— if the BREAD hadn't— this town's a MACHINE for fate. I need to lie down.`,
      `I always cry at weddings but I was NOT prepared to cry at a Tuesday tea. This family should come with warnings.`
    ],
    shopkeeper: [
      `The old man bought flour "for practice" this mornin' and hummed the whole transaction. HUMMED. Forty years a customer: never once hummed.`,
      `@7 A stand?! In the park?! I'm supplyin' at cost. COST. Don't argue with me, this is the best plot this town's ever had.`
    ],
    trainer: [
      `She slowed down ONCE in her whole career. For BREAD. Do ya understand pacin' discipline like that?! I teach a CLASS on it now. One session. All legend.`,
      `@4 A sixty-year slow burn. That's not romance, that's ENDURANCE. Cardio of the HEART. ...I'm puttin' it on a poster.`
    ],
    boss: [
      `Sixty years between chapter one and chapter two. Some projects just have long timelines. The best ones, sometimes. Don't tell my quarterly reports.`,
      `@3 Kenji took pulses mid-story?! ...What were the numbers? No, tell me. This is the only data I've ever truly cared about.`
    ],
    coworker: [
      `Gerald listened at the window all afternoon. Botanically speakin' he can't cry. He dropped one leaf anyway. We're not callin' it a coincidence.`,
      `@4 Fact check on "The Silver Ribbon" chapter one: flour ears CONFIRMED by two witnesses. This archive'll be RIGOROUS.`
    ],
    oldman: [
      `@1 Sixty years I baked against the memory of one sentence from a stranger. "This wins prizes someday." It did, in 1964. But the SENTENCE was the prize. I know that now.`,
      `@7 She commands, I bake. That was the arrangement in 1964 for four minutes, and it was the best partnership of my life. We resume. Same terms.`
    ],
    cat: [
      `Fish-Thief spent the whole story on the old man's lap — a seat he's never once chosen before. Cats know when someone needs a weight on their heart. The good kind.`
    ],
    grandma: [
      `@0 I was WINNIN', dear. And there was this smell of butter and mornin', and a boy too focused on his loaves to notice a race goin' past. I noticed enough for both of us.`,
      `@7 No, it's not a {romance}, whatever your sister writes. It's a bakery with a sixty-year lunch break. ...The blush is from the tea. FINAL.`
    ],
    tmother: [
      `I came to drop off seatin' charts and stayed for the greatest story I've ever heard at a kitchen table. The binder can wait. Some tabs are less important. I SAID IT.`,
      `@4 Sequel demands aside — the child's right. This needs recordin'. I've offered my book club's transcription services. All eleven of us. Free.`
    ],
    tfather: [
      `The rain, the ribbon, the bread, the sixty years. I went through BOTH towels and borrowed a dish cloth. The chart's got a new axis now. It measures TEA STORIES.`,
      `@1 He never got her name. Sixty years. I held my wife's hand so hard she asked if I was chokin'. BROTHERS OF THE HEART, that baker and me.`
    ],
    kenji: [
      `@3 Patient confidentiality prevents me from sharin' the pulse data. Medical ethics do NOT prevent me from sayin': it was the most romantic cardiology of my career.`,
      `Rain, tea, and a long story with a happy present. If I could prescribe this afternoon, I would close the clinic. It cures things pills can't reach.`
    ]
  }
},

/* ============================== EP 36 ============================== */
{
  ep: 36,
  title: '第36話 「1964の店」 — The 1964 Stand',
  words: ['open up', 'air', 'sugar', 'butter', 'mix', 'price', 'hand over', 'smile'],
  story:
    `There's a new shape in the park this mornin': a little wooden stand with a striped awnin', a hand-painted sign — ` +
    `「1964」 — and two figures inside who've collectively been awake since four a.m. and have never looked younger. ` +
    `The old man bakes. Grandma commands. The town forms a line before the sign's even finished dryin'. Weddin' week's ` +
    `officially begun, bud, and it smells like butter.`,
  timerSec: 315,
  quests: [
    { word: 'open up', type: 'talk', npc: 'oldman', stage: 0,
      ask: `Dawn. The old man turns the tiny hand-painted sign. "Today we {open up}. Sixty years late," he says, "and exactly on time."` },
    { word: 'air', type: 'inspect', obj: 'stand_1964', stage: 1,
      ask: `The 1964 Stand stands! Fresh paint, striped awnin', and the mornin' {air} already smells like a bakery rememberin' itself.` },
    { word: 'sugar', type: 'buy', item: 'the wholesale sugar sack', stage: 2,
      ask: `Supply run one: {sugar}. The shopkeeper delivers the sack personally. "Wholesale price. Family price. LEGEND price. Pick any, they're all the same today."` },
    { word: 'butter', type: 'buy', item: 'all the butter, yes all of it', stage: 3,
      ask: `Supply run two: {butter}. All of it. The old man measures by feel, by ear, and — apparently — by POETRY.` },
    { word: 'mix', type: 'talk', npc: 'grandma', stage: 4,
      ask: `Grandma commands the counter: "You! {mix} the next batch! Fold, don't stir. FOLD. Your wrists've got POTENTIAL, dear. Unrealized. We fix that today."` },
    { word: 'price', type: 'talk', npc: 'trainer', stage: 5,
      ask: `The coach reads the {price} board: "Fifty yen?! For THIS?! Criminal. I'd pay five hundred. I AM payin' five hundred. It's a protein donation. FOR THE ARTS."` },
    { word: 'hand over', type: 'talk', npc: 'kenji', stage: 6,
      ask: `Front-of-house duty: ya {hand over} warm paper bags down the line. Dr. Kenji receives his like a newborn. "Support the crust," he advises the queue. "Always support the crust."` },
    { word: 'smile', type: 'talk', npc: 'tmother', stage: 7,
      ask: `Trinity's mom watches the two old friends work in perfect rhythm. "THAT {smile} on her face? I've seen it once before — in the dress fittin'. This weddin's collectin' 'em."` }
  ],
  stageToasts: {
    1: `🎪 There's a STAND in the park. An actual stand! Go see it up close!`,
    2: `🏃 First supply crisis, eleven minutes in: sugar. To the store!`,
    3: `🧈 Second crisis: butter. The poetry requires MORE BUTTER.`,
    4: `👩‍🍳 You've been conscripted. The commander points at the mixin' bowl.`,
    5: `💰 A commotion at the price board. Someone's tryin' to pay TOO MUCH.`,
    6: `🥐 The line's around the pond. Front-of-house needs hands. Yours.`,
    7: `🍂 Take one step back and look at the whole scene. Someone else already is.`
  },
  npcLines: {
    trinity: [
      `Our weddin' week begins with the whole town in a bread line at seven a.m. and honestly? Correct. This is exactly us.`,
      `@4 Ya got wrist-coached by grandma at a bread stand. I got pin-coached at a fittin'. We're collectin' the same memories from different rooms. I love it here.`
    ],
    mom: [
      `My mother's got a STAFF now. It's one elderly baker and my child, and she runs it like a fleet. I've never related to anyone more.`,
      `@6 I took my lunch break in the line. Twenty minutes of queuein', ninety seconds of eatin', zero regrets. The crust needs no defense from me.`
    ],
    dad: [
      `I volunteered for "quality control" and was assigned "carryin' things" instead. The system works. My opinion of the rolls remains available on request.`,
      `@5 The coach paid five hundred yen and the grandma DID NOT ARGUE?! She just said "the arts thank you". They're gonna be unstoppable together.`
    ],
    sister: [
      `Chapter two of "The Silver Ribbon" is happenin' LIVE and I'm on-site with my notebook. The awnin's striped. Noted. NOTED.`,
      `@4 Ya folded WRONG twice and she said your wrists've got potential anyway. That's grandma for "I love you". Write it down.`
    ],
    friend: [
      `Bread line status: I'm in it. Bread line strategy: I'm also holdin' spots for four people. Bread line economy: BOOMIN'.`,
      `@6 They should cater the weddin'— WAIT. WAIT. Has anyone asked?! SOMEONE ASK. THIS IS BEST MAN BUSINESS NOW.`
    ],
    shopkeeper: [
      `@2 Cost price and I carry the sacks myself. When this town writes its history, put me down as "supplier to the 1964 Stand". That's the whole legacy I want.`,
      `My own pastry case, today: untouched. Me: in their line, twice. A shopkeeper knows when he's beaten. A FRIEND knows when to be glad about it.`
    ],
    trainer: [
      `@5 The arts, the ARTS! Bakin's reps for the SOUL and I'll die on this delicious hill!`,
      `They wake at four to train— to BAKE. Same thing. Discipline is discipline. I've asked to shadow their mornin' routine. Grandma said "keep up, dear". Ominous. PERFECT.`
    ],
    boss: [
      `Two founders, zero overhead, a queue past the pond, and a price point they refuse to optimize. It violates everything I know about business. Best business in town.`,
      `@7 I watched 'em work one full batch. Sixty years of waitin', and the handoff between 'em is SEAMLESS. Some teams are just meant to be. HR can't engineer that.`
    ],
    coworker: [
      `Queue analytics, day one: longest wait 34 minutes, complaints ZERO. This defies queue science. I've alerted the journals. Gerald co-signs the anomaly report.`,
      `@1 The stand's awnin' stripes: seven red, six white. Gerald finds it "jaunty". Direct quote. He leans jauntily now. It's a whole thing.`
    ],
    oldman: [
      `@0 Four a.m. felt like 1964 again — flour in the dark, and someone impatient tellin' me the oven was slow. It WAS slow. She was RIGHT. She's always right. The bread's better for it.`,
      `@6 Support the crust when ya hand it over, young one. The doctor understands. A warm loaf's briefly ALIVE. Treat it accordingly.`
    ],
    cat: [
      `Fish-Thief's appointed himself stand security and accepts payment in crust-ends. There's been zero bread crime. His record remains perfect. His methods remain naps.`
    ],
    grandma: [
      `@4 FOLD. Yes. There. See? Potential. Sixty years I waited to run a bakery counter, dear. I intend to enjoy commandin' every second of it.`,
      `@7 Why am I smilin'? The bread's on time, the boy still bakes like it's 1964, and my grandchild gets married on the hill this week. Some questions answer themselves, dear.`
    ],
    tmother: [
      `@7 The binder's got a new tab: "1964 Stand — weddin' mornin' bread service". They said yes before I finished the sentence. He BOWED. My composure survived. Barely.`,
      `I've eaten at the stand three times today for "menu research". The research's goin' wonderfully. The weddin' guests are lucky people.`
    ],
    tfather: [
      `A striped awnin', a queue of friends, a sixty-year story sellin' fifty-yen rolls. I've cried into my paper bag TWICE and the mornin's young.`,
      `@6 The doctor said "support the crust" and I've never felt so understood in a bread line. This town, brother. THIS TOWN.`
    ],
    kenji: [
      `@6 Medical bulletin: mornin' bread lines are excellent light exercise with a warm reward. Participation in this town: one hundred percent. My work here's nearly obsolete. Delighted.`,
      `I bought rolls for the clinic waitin' room. Patients now arrive early and healthy-ish, just for the bread. I'm reportin' this to a medical journal as "the 1964 effect".`
    ]
  }
},

/* ============================== EP 37 ============================== */
{
  ep: 37,
  title: '第37話 「ダンスレッスン」 — Dance Lessons',
  words: ['fall down', 'good at', 'rhythm', 'walk', 'foot', 'right', 'left', 'stop'],
  story:
    `There's a first dance at every weddin'. There's a problem with yours: ya dance like a deck chair foldin'. Your best ` +
    `man stages an intervention at the gym — and then comes the twist nobody in the office saw comin': your boss, quietly, ` +
    `devastatingly, was a national ballroom SEMIFINALIST. "There's two things I'm good at," he says, removin' his jacket ` +
    `with terrifyin' elegance. "Budgets. And the waltz."`,
  timerSec: 300,
  quests: [
    { word: 'fall down', type: 'talk', npc: 'friend', stage: 0,
      ask: `"I saw ya practice-sway at the party," your friend says gentle. "You'll {fall down} at the weddin'. As best man, I'm stagin' an intervention. It's got SNACKS."` },
    { word: 'good at', type: 'talk', npc: 'boss', stage: 1,
      ask: `THE REVEAL: "There's two things I'm {good at}," says your boss, foldin' his jacket. "Budgets. And the waltz." The gym goes silent. The legend begins.` },
    { word: 'rhythm', type: 'talk', npc: 'coworker', stage: 2,
      ask: `Your coworker sets the {rhythm} with two staplers and shockin' confidence. Gerald sways in time. Gerald's got better timin' than you. GERALD.` },
    { word: 'walk', type: 'do', loc: 'gym', verb: 'walk', amount: 400, stage: 3,
      ask: `"Dancin's just a {walk} with INTENT," booms the boss. "Box step! Walk the square! Corners are COLLEAGUES — acknowledge 'em and MOVE ON!"` },
    { word: 'foot', type: 'talk', npc: 'trainer', stage: 4,
      ask: `The coach observes from the bench: "Your left {foot}'s a good student. The other one's on VACATION. We'll be negotiatin' its return. I know a guy. The guy is me."` },
    { word: 'right', type: 'talk', npc: 'sister', stage: 5,
      ask: `"No, your OTHER {right}!" your sister yells helpful from the bench, eatin' popcorn she brought for this exact purpose. She planned her whole day around this.` },
    { word: 'left', type: 'talk', npc: 'grandma', stage: 6,
      ask: `Grandma demonstrates a flawless turn: "{left} foot, then GLIDE. I won a dance contest once. ...1972. It was a busy era, dear. Don't look so surprised."` },
    { word: 'stop', type: 'talk', npc: 'boss', stage: 7,
      ask: `Final drill: the dip. "And... {stop}. HOLD. ...Ya didn't fall." The boss dabs one eye. "Semifinal instincts. I've taught ya everything. The budget committee hears NOTHIN'."` }
  ],
  stageToasts: {
    1: `💼 Your boss just walked into the gym holdin' dance shoes. DANCE SHOES. Stand by.`,
    2: `📎 A percussion section's assemblin': two staplers and a plant. This is real. This is happenin'.`,
    3: `🕺 Box step time. The floor's been chalked into squares. Walk 'em with INTENT.`,
    4: `🦶 The bench committee's got notes on your footwork. Receive 'em with grace.`,
    5: `🍿 Your sister's gettin' louder and more helpful. Endure. Grow.`,
    6: `👵 Grandma's stood up and is removin' her cardigan. History class is in session.`,
    7: `🫳 The final exam: the dip. Don't drop the imaginary bride. She's precious.`
  },
  npcLines: {
    trinity: [
      `I'm takin' secret lessons from MY mother, who — 'course — has ballroom medals. We're gonna accidentally out-dance each other at our own weddin'. PERFECT.`,
      `@7 My spy (your sister) reports ya landed the dip. My mother's spy (also your sister, she double-bills) reports the same. Our first dance is gonna be LEGENDARY.`
    ],
    mom: [
      `Your boss. The waltz. SEMIFINALS. I've made tea for that man eleven times and never ONCE suspected the elegance. This town's got layers like an onion.`,
      `@6 1972. The dance contest. She never mentioned— I'm her DAUGHTER. I'm gonna need a full chronology and a very long evenin'.`
    ],
    dad: [
      `My weddin' dance strategy was "sway and mean it". Twenty-six years later your mother still lets me lead twice a year. Romance finds a way.`,
      `@3 Walkin' with intent! I do that! To the fridge! ...I see now why nobody consulted me for these lessons.`
    ],
    sister: [
      `@5 I've watched ya walk into a square for one hour and it's the best entertainment this town's produced since the cat commercial. The popcorn was PLANNED.`,
      `Double agent report: everyone's secretly takin' lessons. You, Trinity, BOTH dads, and the coworker's teachin' GERALD to spin. This weddin' dance floor's gonna be an AMBUSH.`
    ],
    friend: [
      `Intervention status: SUCCEEDIN'. Ya stopped resemblin' foldin' furniture. As best man I take sixty percent credit. The boss takes the rest. Gerald takes the assist.`,
      `@1 The BOSS?! Ballroom SEMIFINALS?! I need to know what else this town's hidin'. Is the shopkeeper an astronaut? BLINK IF THE SHOPKEEPER IS AN ASTRONAUT.`
    ],
    shopkeeper: [
      `Dance shoes, size ten, sold this mornin' to a man in a suit who tested the sole rotation IN THE STORE with perfect form. I sensed I was servin' greatness. I was.`,
      `@6 1972? Ah yes. The year the town hall dance floor was retired with a plaque. ...You'll have to ask HER why. I only sell shoes.`
    ],
    trainer: [
      `@4 Footwork's just squats that TRAVEL. By Friday your vacation foot returns to FULL EMPLOYMENT. I've drafted its contract.`,
      `The boss used my gym to reveal a secret ballroom past. This facility's now hosted legends TWICE. Updatin' the sign. The sign just says LEGENDS now.`
    ],
    boss: [
      `@1 1987 semifinals. We placed fourth. My partner said I counted out loud too much. I still count. Quietly. ONE two three. It never leaves ya.`,
      `@7 Ya held the dip. Take Friday off. Both of ya. Dance-related administrative leave. The paperwork'll say "training". It won't be a lie.`
    ],
    coworker: [
      `@2 Stapler percussion's a real skill and I list it nowhere on my resume 'cause HR isn't ready. Gerald keeps 3/4 time better than the metronome app. We've TESTED it.`,
      `Spreadsheet update: "first dance readiness" has crossed seventy percent. The remainin' thirty is confidence. And possibly shoes. Buy the good shoes.`
    ],
    oldman: [
      `In 1964 the town danced in the square after the bread prizes. Everyone was terrible. It was perfect. Bein' good is nice, young one. Dancin' ANYWAY is the whole point.`,
      `@6 I saw her win in 1972, ya know. The whole hall stopped. ...I was there sellin' bread. 'Course I was there. I was ALWAYS there. It took me sixty years to notice the pattern.`
    ],
    cat: [
      `Fish-Thief walked through the box step drill exactly once, flawlessly, on beat, and left. He wasn't showin' off. (He was absolutely showin' off.)`
    ],
    grandma: [
      `@6 1972, dear. The judges wept. The trophy's in the box under the medal from 1971. My youth had EXCELLENT years. Now: again, and GLIDE this time.`,
      `Your boss counts out loud. I won my contest countin' out loud. It's not a flaw, dear, it's a heartbeat ya can hear. Marry someone who doesn't mind. ...Ya did. Good.`
    ],
    tmother: [
      `Yes, I've got medals. Yes, I'm coachin' my daughter. No, I won't disclose our choreography. The binder's got a SEALED tab. It stays sealed 'til the hill.`,
      `@7 Reports say ya landed the dip. Excellent. A dip is trust, made visible. ...That's in my old coachin' notes. Page one. I may weep at this weddin' after all.`
    ],
    tfather: [
      `I'm ALSO takin' secret lessons. From my wife. She counts in French when I err. I err often. Wish me courage, brother. COURAGE.`,
      `@3 Walkin' with intent — THAT I can do! It's the turns that betray me. If ya see me spinnin' into the bread table on the day: applaud. Sell it as choreography.`
    ],
    kenji: [
      `Dance week clinic report: two rolled ankles (not yours, miraculously), one stapler-related thumb, and Gerald's fine — he's ALWAYS fine, that plant's got perfect posture.`,
      `@7 Medically certified: ya can now dip another human bein' without structural risk. That certificate's real. I framed a copy for the clinic wall. It's next to the cat's.`
    ]
  }
},

/* ============================== EP 38 ============================== */
{
  ep: 38,
  title: '第38話 「リハーサル」 — The Rehearsal',
  words: ['cloudy', 'go forward', 'breath', 'mistake', 'tough', 'pray', 'clear up', 'rainbow'],
  story:
    `Rehearsal day dawns grey. Not rain — just a sky with its arms crossed. The whole procession's due on the hill at three: ` +
    `the walk, the words, the rings (a stand-in pebble; Fish-Thief's contract forbids rehearsal deliveries), the confetti ` +
    `cannon (armed; your sister's NOT to be trusted with the trigger, which is why she's got it). What could go wrong goes ` +
    `wrong. And then — 'cause this is your town — what could go right, does.`,
  timerSec: 315,
  quests: [
    { word: 'cloudy', type: 'talk', npc: 'trinity', stage: 0,
      ask: `Rehearsal mornin': {cloudy}. Trinity squints at the sky: "It would NOT dare." The sky shifts, lookin' nervous. Good. It should be.` },
    { word: 'go forward', type: 'talk', npc: 'tmother', stage: 1,
      ask: `The mega-binder opens to tab one: Processional. "{go forward} on the THIRD lantern," commands Trinity's mom. "Not the second. THIRD. There'll be a quiz."` },
    { word: 'breath', type: 'do', loc: 'hill', verb: 'walk', amount: 500, stage: 2,
      ask: `Walk the aisle route. Again. Again. "Deep {breath} at the crest," coaches Trinity, "or you'll cry before the vows. Family precedent is STRONG."` },
    { word: 'mistake', type: 'talk', npc: 'sister', stage: 3,
      ask: `The confetti cannon fires early — directly at the coach. "A {mistake}," your sister claims. Her grin claims otherwise. The coach, glitterin': "...I allow it."` },
    { word: 'tough', type: 'talk', npc: 'dad', stage: 4,
      ask: `The dads made a pact: no cryin' 'til the real day. It's {tough}. They're already failin'. It's not even lunch. They've started a support huddle.` },
    { word: 'pray', type: 'talk', npc: 'oldman', stage: 5,
      ask: `Rain taps the leaves. The old man closes his eyes: "We don't panic. We {pray}, and we butter more rolls. Both help. One's delicious."` },
    { word: 'clear up', type: 'talk', npc: 'kenji', stage: 6,
      ask: `Dr. Kenji reads the horizon like a chart: "It'll {clear up} by four. Barometric certainty. Also I asked the koi. Always get a second opinion."` },
    { word: 'rainbow', type: 'talk', npc: 'grandma', stage: 7,
      ask: `The rain stops. And over the hill: a {rainbow}. Grandma nods once, like she personally ordered it. "1964 had one too. We're ON SCHEDULE."` }
  ],
  stageToasts: {
    1: `📒 The processional briefin's begun. Lantern-countin' will be TESTED.`,
    2: `🚶 Places! Walk the full aisle route — and remember to breathe at the crest.`,
    3: `🎉 *BOOM* — that was the confetti cannon. That was NOT the cue. Investigate the glitter cloud.`,
    4: `🤝 The dads' no-cryin' pact's collapsin' near the bench. Offer structural support.`,
    5: `🌧️ Here comes the rain. The old man's BUTTERIN' ROLLS CALMLY. Learn from him.`,
    6: `⛅ The doctor's consultin' the sky and the pond, in that order. Get the forecast.`,
    7: `🌈 LOOK UP. LOOK UP RIGHT NOW.`
  },
  npcLines: {
    trinity: [
      `Everything that could go wrong today went wrong, and I've never been less worried. If the rehearsal's chaos and love, the weddin' will be too. That's the FORMULA.`,
      `@7 A rainbow over our hill, one day early. Save some magic for tomorrow, town. ...Who am I kiddin'. It never runs out here.`
    ],
    mom: [
      `The processional order collapsed twice, the cannon went rogue, it RAINED — and the binder women never even flinched. We've simply seen worse. We've HOSTED worse.`,
      `@4 The dads' huddle now includes the coach and, somehow, the postman?? The no-cryin' pact's become a mutual failin' society. They meet at the bench.`
    ],
    dad: [
      `@4 The pact was doomed from the start. Trinity's father showed me a photo of her at six, ON A HILL. What was I supposed to do?! Not cry?! IMPOSSIBLE conditions.`,
      `Rain on a rehearsal's good luck. I just decided that. Spread it around. By sundown it'll be ancient town wisdom. That's how dad-facts work.`
    ],
    sister: [
      `@3 The cannon "misfire" was a CALIBRATION TEST and it was PERFECT. Tomorrow's payload's doubled. The coach has requested to be hit again. In writin'.`,
      `Quiz results: I know the lantern count, the walk speed, everyone's cues, AND the backup plan. Youngest, but I'm basically the stage manager now. Fear me politely.`
    ],
    friend: [
      `Best man rehearsal report: I practiced my speech at the pond. The koi surfaced at the emotional part. THE KOI. If they cried, tomorrow the humans are DOOMED.`,
      `@7 The rainbow hit DURIN' my speech run-through. Sign accepted. Speech locked. No further edits. The sky's approved draft nine.`
    ],
    shopkeeper: [
      `I closed early for the rehearsal, then reopened for cannon glitter and butterin' supplies, then re-closed. Weddin' week retail is JAZZ. Ya improvise.`,
      `@5 The old man butterin' rolls under the rain awnin' while everyone panicked is the calmest thing I've witnessed in sixty years of watchin' this town. Frame that man.`
    ],
    trainer: [
      `@3 I've been hit by confetti at close range and I've NEVER felt more alive. The glitter stays in tomorrow. It's IN THE HAIR, it's IN THE HEART.`,
      `Rain drills! We rehearsed in adverse conditions — tomorrow can only be easier! This is TAPERIN', people! The weddin's RACE DAY!`
    ],
    boss: [
      `A rehearsal with three failures and full recovery's worth ten flawless ones. This event's STRESS-TESTED. Certified. I'd take it to shareholders.`,
      `@6 Kenji forecastin' via barometer AND koi is the most rigorous methodology in this town. The man double-sources. I trust him with weather AND my finger bones.`
    ],
    coworker: [
      `Gerald attended as aisle-marker plant, position three. He held position through rain AND cannon fire. Decorated for composure. The bow's now a MEDAL bow.`,
      `@3 Glitter dispersal analysis: radius eight meters, coach coverage ninety-five percent, morale impact IMMEASURABLE. Cannon: approved for live fire tomorrow.`
    ],
    oldman: [
      `@5 In 1964 it rained on the mornin' of the bread judgin'. I panicked. An impatient girl at my stall did not: "It'll pass, and your crust likes the damp air." She was right twice.`,
      `@7 A rainbow the day before. Hm. The sky rehearses too, young one. Even the sky wants to get it right for you two. High compliment.`
    ],
    cat: [
      `Fish-Thief observed the pebble stand-in "rehearsin' his role" and knocked it off the arch mark with visible disdain. There's ONE ring bearer. Tomorrow, the professional works.`
    ],
    grandma: [
      `@7 Yes, I said we're on schedule, and yes, I meant the WEATHER. After 1964, 1971, and 1972, the sky and I have an understandin', dear. It knows my deadlines.`,
      `The rehearsal broke three times and mended itself three times. Good. A weddin' should know how to mend. So should a family. This one's EXPERT.`
    ],
    tmother: [
      `@1 THIRD lantern. He got it right on attempt four, which the binder logs as "charmingly within tolerance". Tomorrow he'll be perfect. Grooms always are, once it's real.`,
      `Rain fell ON the sealed choreography tab and the ink didn't run. Even the weather respects lamination. Tomorrow we dance.`
    ],
    tfather: [
      `@4 The pact lasted four hours, which is three and a half hours longer than my personal forecast. Tomorrow there IS no pact. Tomorrow the towels ride in the front pocket. TACTICAL.`,
      `@7 A rainbow. Over the hill. Where my daughter marries tomorrow. I've preemptively started tomorrow's cryin' TODAY, for efficiency. The chart calls this "amortization".`
    ],
    kenji: [
      `@6 Forecast confidence: barometer ninety percent, koi one hundred percent. The koi have never been wrong. I don't know what to do with that information medically. I simply respect it.`,
      `Rehearsal injury report: zero. Glitter inhalation: one (voluntary, coach). Heart conditions: all of 'em, the good kind. Tomorrow we do it for real. I'll bring extra tissues and the GOOD stethoscope.`
    ]
  }
},

/* ============================== EP 39 ============================== */
{
  ep: 39,
  title: '第39話 「前の夜」 — The Night Before',
  night: true,
  words: ['tomorrow', 'tonight', 'thanks', 'bell', 'moon', 'alone', 'turn off', 'sleepy'],
  story:
    `The last ordinary evenin' — except nothin' about it is ordinary. Trinity leaves to spend the night at the inn with her ` +
    `parents ("tradition is the WORST," she says, kissin' your cheek anyway). The house is warm and strange and full of ` +
    `people bein' gentle with ya. Tomorrow there'll be lanterns and vows and a whole town on a hill. {tonight} there's ` +
    `soup, a porch, a moon, and one cat who's decided ya shouldn't be alone. Not even once. Not even now.`,
  timerSec: 300,
  quests: [
    { word: 'tomorrow', type: 'talk', npc: 'trinity', stage: 0,
      ask: `Trinity, at the door with her overnight bag: "{tomorrow}, then." Neither of ya moves. "Tradition is the WORST," she laughs — kisses your cheek — and goes.` },
    { word: 'tonight', type: 'talk', npc: 'tfather', stage: 1,
      ask: `Her dad takes the bag, gentle: "{tonight} she's ours one last time. Tomorrow — every day after, yours. Fair trade." The handshake's soft this once.` },
    { word: 'thanks', type: 'talk', npc: 'mom', stage: 2,
      ask: `Ya try to say it — all of it. Mom holds up one hand. "{thanks} goes both ways, my love. Now: soup. Weddin' rule one is soup. It's always been soup."` },
    { word: 'bell', type: 'talk', npc: 'dad', stage: 3,
      ask: `"Hear that?" Dad cups his ear at the quiet. "The {bell} of the night before. Your grandfather made me listen too. It sounds like nerves. It's SUPPOSED to."` },
    { word: 'moon', type: 'talk', npc: 'grandma', stage: 4,
      ask: `Grandma, on the step: "Look at the {moon}, dear. Same one from 1964, 1971, and every night this family was happy. Reliable thing. Like you."` },
    { word: 'alone', type: 'talk', npc: 'cat', stage: 5,
      ask: `Your last night fallin' asleep {alone} — and Fish-Thief's decided: absolutely not. He takes half the pillow. The GOOD half. Non-negotiable.` },
    { word: 'turn off', type: 'inspect', obj: 'lamp', stage: 6,
      ask: `Ya {turn off} the lamp. Then on. Then off again. The dark's full of tomorrow. The cat sighs. The lamp stays off. Eventually. Mostly.` },
    { word: 'sleepy', type: 'talk', npc: 'kenji', stage: 7,
      ask: `The clinic light's on — 'course it is. Dr. Kenji pours THE lemon tea. "My grandmother made it for night-before people. Now I make it. Drink — {sleepy} in ten minutes. Doctor's promise."` }
  ],
  stageToasts: {
    1: `🧳 A bag's packed by the door. Say the see-you-tomorrow. Ya can do it.`,
    2: `🍲 The kitchen smells like childhood. Rule one's bein' enforced.`,
    3: `🔔 Dad's on the porch doin' his mysterious listenin' face. Join him.`,
    4: `🌕 Someone small and mighty's moon-watchin' on the step. There's room.`,
    5: `🐾 Soft paws on the stairs behind ya. Ya got an escort tonight.`,
    6: `💡 The lamp. The ceiling. The thoughts. Ya know the drill. Try anyway.`,
    7: `🍋 Sleep won't come — but across the street, a familiar light's on.`
  },
  npcLines: {
    trinity: [
      `I'm at the inn starin' at the ceiling and textin' ya instead of sleepin'. My mother says this is tradition too. ALL of it. The starin' is HERITAGE.`,
      `@0 Tomorrow when ya see me on the hill — that's the last first-look we'll ever get. Sleep bad, dream well. I love ya. TOMORROW.`
    ],
    mom: [
      `@2 Twenty-six years of dinners and this is the last one where you're only mine. Don't argue the math, dear. Mothers count different. Eat your soup.`,
      `I ironed everything twice and cried on nothin', which required PRECISION. Your suit hangs by the window like a promise. Sleep, my love.`
    ],
    dad: [
      `@3 The night before MY weddin', your grandfather said: "Nerves are just love with nowhere to go yet. Tomorrow it gets somewhere to go." Best thing he ever said. Now it's yours.`,
      `I checked the weather four times, the rings zero times — the CAT has the rings, the cat's FLAWLESS — and my speech eleven times. It's four words. I know. Eleven times.`
    ],
    sister: [
      `I laid out my spinnin' orange dress and rehearsed my petal-throwin' arc in the mirror. Tomorrow I'm DEVASTATINGLY professional. Tonight I'm too excited to blink.`,
      `@5 The cat chose YOUR pillow tonight?! He knows. He always knows. ...I left a third emergency drawin' under your door. It's everyone. On the hill. Even the koi. They're flyin'. Artistic license.`
    ],
    friend: [
      `Speech: memorized. Rings: with the professional. Fireworks: BOTH concepts armed. Your best man's lyin' in bed doin' the checklist with his eyes closed like a mission commander. We're GO.`,
      `@7 If ya can't sleep, drink the doctor's tea. I had some last hour. I'm tellin' ya this from the floor of my kitchen, extremely calm. TRUST THE TEA.`
    ],
    shopkeeper: [
      `The store owl— I mean, I happened to be restockin' at midnight and saw your bedroom light blink off and on eleven times. Normal groom behavior. The record's forty. Your father holds it.`,
      `Tomorrow's bread's already risin' at the old man's. The whole street smells like the future. Sleep while ya can, groom. The best day's loadin'.`
    ],
    trainer: [
      `REST is training too! Tonight's the most important taper of your LIFE! Hydrate, elevate the feet, visualize the dip! I love ya! I MEAN IT ATHLETICALLY AND ALSO REGULARLY!`,
      `@4 I jogged past the house and saw grandma moon-watchin'. She nodded at me. I did four victory laps on pure honor alone.`
    ],
    boss: [
      `No work thoughts tonight. That's an ORDER. The office ran without me for the printer incident; it can run without ya for love. ...File that quote for your speech, actually. No charge.`,
      `@7 Kenji's night-before tea got ME to sleep before my own weddin', decades ago. Same thermos, I'd bet. Some institutions in this town never change. Thankfully.`
    ],
    coworker: [
      `Gerald's spendin' the night at the venue as advance security detail. A plant, alone on a hill, guardin' an arch under the moon. He's never been prouder. I've never been prouder OF him.`,
      `@6 Light-switch telemetry from across the street: eleven cycles, then dark. Within groom parameters. All systems nominal. See ya at the hill, friend.`
    ],
    oldman: [
      `The dough for tomorrow's sleepin'. I'm not. Some loaves are sixty years in the proofin', young one. Tomorrow we finally eat well, all of us. Rest now.`,
      `@4 She's on the step with the moon, is she? ...In 1964 there was a moon like this. I didn't have the courage to say so out loud then. Tomorrow, perhaps. Weddings make brave men of bakers.`
    ],
    cat: [
      `@5 Fish-Thief lies on the good half of the pillow, one paw on your arm, purrin' at exactly the frequency of a heart calmin' down. He's got one job tonight. He's EXCELLENT at it.`
    ],
    grandma: [
      `@4 I sat on a step like this the night before my own weddin', dear, and my grandmother told me the moon was reliable. She was right for sixty years and countin'. Now I'm the grandmother. The moon and I both plan to keep showin' up.`,
      `Sleep, dear. Tomorrow the whole town stands on a hill 'cause two people saved each other the last dumpling. That's my kind of arithmetic.`
    ],
    tmother: [
      `My daughter's pretendin' to sleep four meters away from me, textin' ya. I'm pretendin' not to notice, updatin' the binder. The inn's FULL of tradition tonight.`,
      `@1 My husband said "fair trade" and then wept into the complimentary tea. The innkeeper brought more tea WITHOUT BEIN' ASKED. This town's hospitality anticipates grief AND joy. Remarkable.`
    ],
    tfather: [
      `@1 She fell asleep mid-sentence, like when she was six. Tomorrow I walk her up a hill and hand the world its luckiest man. Tonight I sit by the door like a guard dog with a towel. TWO towels.`,
      `Sleep well, son. Tomorrow, the firmest handshake of your LIFE awaits. I've been practicin'. On the innkeeper. He's a good man. His hand will recover.`
    ],
    kenji: [
      `@7 The recipe's my grandmother's: lemon, honey, and — this is the medical part — someone stayin' up with ya while ya drink it. The tea works. The company IS the tea. Goodnight, groom.`,
      `Clinic hours tonight: 'til the last light on this street goes out. Night-before service since my grandmother's day. Tomorrow I close early. Doctor's weddin' orders. My own.`
    ]
  }
},

/* ============================== EP 40 ============================== */
{
  ep: 40,
  title: '第40話 「結婚式」 — The Wedding',
  words: ['ceremony', 'light', 'clap', 'vow', 'couple', 'husband', 'wife', 'forever'],
  timerSec: 345,
  story:
    `Autumn. The hill. The day. The arch stands at the crest wrapped in flowers, the lanterns wait for dusk, and the 1964 ` +
    `Stand's been bakin' since four a.m. so the whole ceremony smells like fresh bread and beginnings. Every person ya love's ` +
    `walkin' up one hill, dressed in their finest, carryin' tissues and confetti and sixty years of this town's stories. ` +
    `Fish-Thief wears the ceremonial bandana. The rings gleam. Deep breath at the crest. Here we go.`,
  quests: [
    { word: 'ceremony', type: 'talk', npc: 'mom', stage: 0,
      ask: `The {ceremony} begins at golden hour. Mom straightens your collar one last time as her kid-at-home. Neither of ya says the thing. Both of ya say the thing with your eyes.` },
    { word: 'light', type: 'inspect', obj: 'arch', stage: 1,
      ask: `The arch at the crest, wrapped in flowers — and the {light}, the low gold autumn kind, is EXACTLY what grandma promised durin' the binder war. She ordered it, after all.` },
    { word: 'clap', type: 'talk', npc: 'friend', stage: 2,
      ask: `Best-man briefin': "{clap} on the KISS, not the rings. I made laminated cue cards for the whole town." He's already cryin'. The lamination was WISE.` },
    { word: 'vow', type: 'talk', npc: 'oldman', stage: 3,
      ask: `The old man — town elder, today's officiant — hands back your paper: "Your {vow}s are good. Read 'em once more by the bread table. Words rise better warm."` },
    { word: 'couple', type: 'talk', npc: 'kenji', stage: 4,
      ask: `"As town doctor," beams Kenji, "I certify this {couple}: two heartbeats, matched rhythm. It's on an actual chart. It's official TWICE."` },
    { word: 'husband', type: 'talk', npc: 'tfather', stage: 5,
      ask: `Trinity's dad grips your shoulders: "{husband}. My daughter's {husband}." He tests the word twice, nods once, and breaks the no-cryin' pact SPECTACULARLY.` },
    { word: 'wife', type: 'talk', npc: 'trinity', stage: 6,
      ask: `"...{wife}," Trinity whispers under the arch, tryin' the word like a new favorite. "I'm someone's {wife}. Yours. Weird. WONDERFUL. Weird." The lanterns catch fire with light.` },
    { word: 'forever', type: 'talk', npc: 'grandma', stage: 7,
      ask: `Grandma takes both your hands in the last gold light: "1964 taught me some things wait a lifetime to come true. You two did it faster. Now go — {forever} doesn't start itself."` }
  ],
  stageToasts: {
    1: `🌅 The hill's transformed. Go up and see it — the arch, the flowers, the light.`,
    2: `📋 Your best man's pacin' with laminated cards. Receive the briefin'.`,
    3: `📜 The officiant wants one final vow-check. By the bread table, 'course.`,
    4: `🩺 The doctor's beamin' and holdin' an actual chart. Get certified.`,
    5: `🤝 A very large man in a green tie's waitin'. Brace your shoulders AND your heart.`,
    6: `💍 It's time. The crest. The arch. Her. GO.`,
    7: `🐾💍 Fish-Thief walks the aisle, rings gleamin' on the bandana — the most important delivery of his nine lives, part two. And then: the last golden light, and grandma's hands.`
  },
  npcLines: {
    trinity: [
      `@6 Ya cried at the crest. I cried at the third lantern. My mother logged both in the binder under "perfect". The binder's CORRECT.`,
      `@6 Husband and wife, on the hill where the whole town hid behind trees. Next time they hide, it'll be for someone else's story. Ours is OFFICIAL now.`
    ],
    mom: [
      `@0 Twenty-six years to get ready for one collar-straightenin'. Worth every second. Go on, my love. Your whole life's at the top of that hill.`,
      `@7 Both mothers cried in SYNC at the vows. The binder logged it as "choreography". We're takin' the credit. We EARNED the credit.`
    ],
    dad: [
      `Four words. "Be like your mother." I got through ALL FOUR before the tears. Personal best. Your grandfather would be proud of us both.`,
      `@6 When she said "wife" the whole hill made a sound like a happy sigh. Even the pigeons. ESPECIALLY the pigeons. They've been with this story since day one.`
    ],
    sister: [
      `Petal arc: FLAWLESS. Spinnin' dress: DEPLOYED. Confetti cannon: standin' by for the kiss, double payload, coach in the blast zone BY REQUEST. Best. Day. EVER.`,
      `@7 I fired the cannon at the exact kiss-second and the glitter caught the sunset and I MADE THE SKY SPARKLE. Stage manager OUT. *drops imaginary microphone, picks it back up, keeps it forever*`
    ],
    friend: [
      `@2 Speech delivered. Nine drafts, one koi-approved. The line about the umbrella got a LAUGH-SOB. A laugh-sob!! Best man career: PEAKED. No regrets. Fireworks in twenty.`,
      `@7 Concept B, bud. Visible from the NEXT TOWN. Look up in twenty minutes and see how much this whole valley loves you two.`
    ],
    shopkeeper: [
      `I closed the store with a sign: "Gone to the weddin'. So is everyone. Take what ya need, leave coins in the lucky corner." This town's earned the honor system today.`,
      `@6 The flower stamps, the good black fabric, the ribbon spool — bits of my shelves are all over this beautiful day. A shopkeeper can't ask for more. *polishes one tear like an apple*`
    ],
    trainer: [
      `WEDDIN' DAY IS RACE DAY AND EVERYONE MEDALED. I've cried, flexed, been glitter-cannoned, and caught the bouquet-adjacent airspace. PERFECT execution, town. PERFECT.`,
      `@6 The dip at the first dance. THE DIP. Semifinal form. The boss and me held each other and WEPT, coach to coach. The gym'll hang a photo. LEGENDS wall. Both of ya.`
    ],
    boss: [
      `@6 The waltz was flawless. One-two-three, quiet as a heartbeat. Somewhere in 1987 a semifinal judge just felt a chill of approval. Take the WEEK off. Both of ya. Paperwork says "forever training".`,
      `I've attended many mergers. This is the only one where both parties were fully appreciated at signin'. The toast stands: to the best deal this town ever closed.`
    ],
    coworker: [
      `Gerald stood at the arch as botanical honor guard, bare leaf, perfect posture, THROUGH the confetti blast. Decorated twice in one week. He's goin' in the weddin' album. FRONT page. I checked. He is.`,
      `@7 Final spreadsheet of the season: tears logged 100%, feuds at zero (tab four is EMPTY), dumplings saved for each other: 2 of 2. All metrics green. Congratulations, you two. Archive: closed. Heart: full.`
    ],
    oldman: [
      `@3 Sixty years ago I baked for strangers and hoped. Today I married two friends on a hill with my bread in the air. If ya ever doubt that patience pays, young ones — find me at the stand. First roll's free. It always was.`,
      `@7 I stood under that arch and said the old words, and when I looked up, SHE was smilin' at me from the front row. 1964, at last, complete. ...Now if ya'll excuse me, the second-bravest thing I ever do happens by moonlight tonight, by the pond.`
    ],
    cat: [
      `@7 Fish-Thief delivered the rings without a single wobble, sat through the vows like a stone lion, and accepted the first dance happenin' AROUND him, since he was sittin' in the exact center of the floor. The photos are BETTER for it. He knew. He always knows.`
    ],
    grandma: [
      `@7 The silver ribbon in her dress, the 1964 bread in the air, the light I ordered arrivin' ON TIME. Sixty years of ingredients, dear, and today the recipe finally finished. Your grandmother's gonna dance now. 1972 rules. Clear the floor.`,
      `@7 And YES, I saw the old man's face durin' the vows. And YES, he's meetin' me by the pond after the fireworks. And NO, dear, ya may not come. Some episodes aren't for the whole town. *winks* FINAL.`
    ],
    tmother: [
      `@6 The binder's last page has one line, written this mornin' and confirmed tonight: "It was perfect 'cause they are." Thirty-six tabs, and the endin' needed only six words. I'm retirin' the laser pointer. Until the NEXT weddin'. *glances at the pond* ...Hm.`,
      `My daughter married a man whose whole town climbed a hill for him. The apples were a lovely touch a season ago, dear son-in-law. But THIS? This was the answer to every question on my alphabetized list.`
    ],
    tfather: [
      `@5 HUSBAND. WIFE. HILL. BREAD. FIREWORKS SOON. I've gone through six towels and the tactical front-pocket reserves. I'm dehydrated with JOY. Doctor says it's fine. BROTHER SAYS IT'S FINE.`,
      `@7 Firm handshake, son. The firmest. The last one as a test — every one after, just family sayin' hello. Welcome. WELCOME. *crushes hand with infinite love*`
    ],
    kenji: [
      `@4 Two heartbeats, matched rhythm, certified under an autumn arch. I became a doctor for the savin'-lives part. Days like this are the KEEPIN'-lives part. Even better, between us.`,
      `@7 The lemon tea thermos is empty, the tissue supply's exhausted, and every heart on this hill's in perfect condition. Best clinic day of my career, and I never opened the clinic. Congratulations, you two.`
    ]
  }
}
]