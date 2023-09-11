import mongoose from 'mongoose'
const assignmentSchema = new mongoose.Schema(
  {
    teacher: {
      ref: 'User',
      type: mongoose.Schema.Types.ObjectId
    },
    students: [{
      ref: 'Student',
      type: mongoose.Schema.Types.ObjectId
    }],
    experiments: [{
      ref: 'Experiment',
      type: mongoose.Schema.Types.ObjectId
    }],
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Assignment = mongoose.model('Assignment', assignmentSchema)
export default Assignment
