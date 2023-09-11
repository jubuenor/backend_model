import { Router, RequestHandler } from 'express'
import { verifyToken } from '../middlewares/verify'
import * as experimentController from '../controllers/experiments'
const router = Router()

router.get('/:expNumber', verifyToken as RequestHandler, experimentController.experimentByNumber as RequestHandler)
router.get('/', verifyToken as RequestHandler, experimentController.getExperiments as RequestHandler)
export default router
