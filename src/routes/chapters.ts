import { Router, RequestHandler } from 'express'
import * as chapterController from '../controllers/chapters'
import { verifyToken } from '../middlewares/verify'
const router = Router()

router.get('/', verifyToken as RequestHandler, chapterController.chapters as RequestHandler)
router.get('/:chapterNumber', verifyToken as RequestHandler, chapterController.chapterByNumber as RequestHandler)

export default router
