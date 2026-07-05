import { CAST, MISSION_DONE, PREMISE, PREMISE_TITLE, SENTENCES } from './saygoodbye'
import type { CastMember, SayLang, SpeakerLang } from './saygoodbye'

/* =====================================================================
   THE STORY SHELF. Story 1 is 「さようなら」. Stories 2-10 are yours:
   open storyN.ts, follow the template comment, export a StoryDef.
   A story becomes playable on the shelf the moment its def isn't null.
   ===================================================================== */

export interface StoryDef {
  title: string
  premise: string
  mission: string
  cast: CastMember[]
  sentences: Record<SayLang, Record<string, SpeakerLang>>
}

import { STORY as S2 } from './story2'
import { STORY as S3 } from './story3'
import { STORY as S4 } from './story4'
import { STORY as S5 } from './story5'
import { STORY as S6 } from './story6'
import { STORY as S7 } from './story7'
import { STORY as S8 } from './story8'
import { STORY as S9 } from './story9'
import { STORY as S10 } from './story10'

export const STORY1: StoryDef = {
  title: PREMISE_TITLE,
  premise: PREMISE,
  mission: MISSION_DONE,
  cast: CAST,
  sentences: SENTENCES,
}

export const STORIES: Array<{ n: number; def: StoryDef | null }> = [
  { n: 1, def: STORY1 },
  { n: 2, def: S2 }, { n: 3, def: S3 }, { n: 4, def: S4 }, { n: 5, def: S5 },
  { n: 6, def: S6 }, { n: 7, def: S7 }, { n: 8, def: S8 }, { n: 9, def: S9 },
  { n: 10, def: S10 },
]
