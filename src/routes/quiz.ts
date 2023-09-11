import { Router, RequestHandler } from 'express'
import { verifyToken } from '../middlewares/verify'
import * as quizController from '../controllers/quiz'
const router = Router()

router.get('/:expNumber', verifyToken as RequestHandler, quizController.quizByNumber as RequestHandler)

export default router
