import mongoose from 'mongoose'
const chapterSchema = new mongoose.Schema(
  {
    chapterNumber: {
      type: Number
    },
    chapterTitle: {
      type: String
    },
    chapterImg: {
      type: String
    },
    experimentsNumber: {
      type: [Number]
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Chapter = mongoose.model('Chapter', chapterSchema)
export default Chapter
