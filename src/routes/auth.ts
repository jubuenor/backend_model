import { Router, RequestHandler } from 'express'
import * as authController from '../controllers/auth'
const router = Router()

router.post('/signup', authController.signup as RequestHandler)
router.post('/login', authController.login as RequestHandler)
router.post('/recover', authController.recover as RequestHandler)

export default router
