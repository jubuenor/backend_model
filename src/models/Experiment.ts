import mongoose from 'mongoose'
const experimentSchema = new mongoose.Schema(
  {
    expNumber: {
      type: Number,
      unique: true,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    procedure: {
      type: String,
      required: true
    },
    images: [{
      type: String
    }],
    videos: [{
      type: String
    }],
    thumbnail: {
      type: String,
      required: true
    },
    quiz: {
      ref: 'Quiz',
      type: mongoose.Schema.Types.ObjectId
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Experiment = mongoose.model('Experiment', experimentSchema)
export default Experiment
