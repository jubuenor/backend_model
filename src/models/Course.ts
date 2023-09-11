import { Schema, model } from 'mongoose'

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    teacher: {
      ref: 'User',
      type: Schema.Types.ObjectId
    },
    students: [{
      ref: 'Student',
      type: Schema.Types.ObjectId
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default model('Course', courseSchema)
