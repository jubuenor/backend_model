import { Router, RequestHandler } from 'express'
import * as userController from '../controllers/user'
import { verifyToken, verifyTeacher } from '../middlewares/verify'
const router = Router()

router.get('/score', verifyToken as RequestHandler, userController.getScore as RequestHandler)
router.put('/score', verifyToken as RequestHandler, userController.updateScore as RequestHandler)
router.get('/students', verifyTeacher as RequestHandler, userController.getCourseStudents as RequestHandler)
router.post('/assignment', verifyTeacher as RequestHandler, userController.createAssignment as RequestHandler)
router.get('/assignmentTeacher', verifyTeacher as RequestHandler, userController.getAssignmentTeacher as RequestHandler)
router.get('/assignmentStudent', verifyToken as RequestHandler, userController.getAssignmentStudent as RequestHandler)

export default router
