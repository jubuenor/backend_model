import express from 'express'
import cors from 'cors'
import authRoutes from '../routes/auth'
// import { createLicenses } from '../utils/initializeLicense'
// import { initializeChapters } from '../utils/initializeChapters'
// import { initializeQuiz } from '../utils/initializeQuiz'
// import { initializeExperiments } from '../utils/initializeExperiment'
// import { createCourses } from '../utils/initializeCourses'
import chapterRoutes from '../routes/chapters'
import experimentRoutes from '../routes/experiments'
import quizRoutes from '../routes/quiz'
import userRoutes from '../routes/user'
import adminRoutes from '../routes/admin'

const app = express()

// void createLicenses()
// void initializeChapters()
// void initializeQuiz()
// void initializeExperiments()
// void createCourses()
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json()) // req.body to json

app.use('/api/v1/chapters', express.static('public'))

app.get('/', (_, res) => {
  res.send('api version 1 en desarrollo ...')
})

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/chapters', chapterRoutes)
app.use('/api/v1/exp', experimentRoutes)
app.use('/api/v1/quiz', quizRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/admin', adminRoutes)

export default app
