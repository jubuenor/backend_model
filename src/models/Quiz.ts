import mongoose from 'mongoose'
const quizSchema = new mongoose.Schema(
  {
    expNumber: {
      type: Number,
      unique: true,
      required: true
    },
    questions: [{
      questionNumber: {
        type: Number,
        required: true
      },
      question: {
        type: String,
        required: true
      },
      answers: [{
        answer: {
          type: String,
          required: true
        },
        answerNumber: {
          type: Number,
          required: true
        }
      }],
      correctAnswers: {
        type: Number
      }
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Quiz = mongoose.model('Quiz', quizSchema)
export default Quiz
