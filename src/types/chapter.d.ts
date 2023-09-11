import { Types } from 'mongoose'

interface ChapterTypes {
  chapterNumber: string
  chapterTitle: string
  chapterImg: string
  experiments: Types.ObjectId[]
}

export { ChapterTypes }
