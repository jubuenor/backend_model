import { Schema, model } from 'mongoose'

const licenseSchema = new Schema(
  {
    licenseCode: {
      type: String,
      unique: true
    },
    role: {
      type: Number,
      default: 0
    },
    used: {
      type: Boolean,
      default: false
    },
    course: {
      ref: 'Course',
      type: Schema.Types.ObjectId
    }
  },
  {
    versionKey: false
  }
)

export default model('License', licenseSchema)
