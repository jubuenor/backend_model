import { Router, RequestHandler } from 'express'
import * as adminController from '../controllers/admin'
import { verifyAdmin } from '../middlewares/verify'
const router = Router()

router.get('/students', verifyAdmin as RequestHandler, adminController.getAllStudents as RequestHandler)
router.get('/teachers', verifyAdmin as RequestHandler, adminController.getAllTeachers as RequestHandler)
router.get('/courses', verifyAdmin as RequestHandler, adminController.getCourses as RequestHandler)
router.get('/assignments', verifyAdmin as RequestHandler, adminController.getAssignments as RequestHandler)
router.get('/statistics', verifyAdmin as RequestHandler, adminController.getStatistics as RequestHandler)
router.post('/license', verifyAdmin as RequestHandler, adminController.createLicense as RequestHandler)
router.post('/courses', verifyAdmin as RequestHandler, adminController.createCourse as RequestHandler)

export default router
