import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    secondname: {
      type: String
    },
    lastname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    token: {
      type: String
    },
    role: {
      type: Number
    },
    expirationTime: {
      type: Date
    },
    password: {
      type: String,
      required: true
    },
    license: {
      ref: 'License',
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    score: [{
      experimentNumber: {
        type: Number,
        required: true
      },
      expScore: {
        type: Number,
        required: true
      }
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const User = mongoose.model('User', userSchema)
export default User
