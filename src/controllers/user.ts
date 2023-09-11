import { Request, Response } from 'express'
import User from '../models/User'
import Course from '../models/Course'
import Experiment from '../models/Experiment'
import Assignment from '../models/Assignment'
import jwt from 'jsonwebtoken'
import { secret } from '../config/secret'
import { DecodedToken } from '../types/user'
import { Types } from 'mongoose'

export const getScore = async (req: Request, res: Response): Promise<Response> => {
  const token: string = Array.isArray(req.headers['x-access-token'])
    ? req.headers['x-access-token'].join('')
    : req.headers['x-access-token'] as string
  if (token === '') {
    return res.status(400).json({ message: 'No se ha ingresado un token' })
  }
  try {
    const decoded = jwt.verify(token, secret) as DecodedToken
    const username = decoded.username
    const user = await User.findOne({ username })

    if (user === null || user === undefined || user.role !== 0) {
      return res.status(400).json({ error: 'el usuario no existe o no es un estudiante' })
    }

    const score = user.score.slice().sort((a, b) => a.experimentNumber - b.experimentNumber)

    return res.status(200).json({ score })
  } catch (err) {
    return res.status(400).json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}

export const updateScore = async (req: Request, res: Response): Promise<Response> => {
  const token: string = Array.isArray(req.headers['x-access-token'])
    ? req.headers['x-access-token'].join('')
    : req.headers['x-access-token'] as string
  if (token === '') {
    return res.status(400).json({ message: 'No se ha ingresado un token' })
  }
  try {
    const decoded = jwt.verify(token, secret) as DecodedToken
    const username = decoded.username
    const user = await User.findOne({ username })

    if (user === null || user === undefined || user.role !== 0) {
      return res.status(400).json({ error: 'el usuario no existe o no es un estudiante' })
    }

    const experimentNumber = Number(req.body.experimentNumber)
    const expScore = Number(req.body.expScore)

    // Check if experiment already exists in user's score array
    const existingScore = user.score.find(score => score.experimentNumber === experimentNumber)
    if (existingScore != null) {
      existingScore.expScore = expScore
    } else {
      user.score.push({ experimentNumber, expScore })
    }

    await user.save()

    const score = user.score.slice().sort((a, b) => a.experimentNumber - b.experimentNumber)

    return res.status(200).json({ score })
  } catch (err) {
    return res.status(400).json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}

export const getCourseStudents = async (req: Request, res: Response): Promise<Response> => {
  const token: string = Array.isArray(req.headers['x-access-token'])
    ? req.headers['x-access-token'].join('')
    : req.headers['x-access-token'] as string
  if (token === '') {
    return res.status(400).json({ message: 'No se ha ingresado un token' })
  }
  try {
    const decoded = jwt.verify(token, secret) as DecodedToken
    const teacherId = decoded.id
    const course = await Course.findOne({ teacher: teacherId })
    console.log(course)
    if (course === null || course === undefined) {
      return res.status(400).json({ error: 'no hay un curso asignado' })
    }

    const studentsPromises = course.students.map(async (student: any) => {
      const user = await User.findById(student)
      if (user == null) { return null }
      const promScore = user?.score.reduce((acc, score) => acc + score.expScore, 0)
      return {
        id: user?._id,
        name: user?.name,
        secondname: user?.secondname,
        lastname: user?.lastname,
        username: user?.username,
        score: user?.score.slice().sort((a, b) => a.experimentNumber - b.experimentNumber),
        promScore: (promScore != null && user?.score != null && !Number.isNaN(promScore) && !Number.isNaN((promScore / user?.score.length).toFixed(2)) && promScore !== 0) ? (promScore / user?.score.length).toFixed(2) : 0
      }
    })

    const students = await Promise.all(studentsPromises)

    return res.status(200).json({ coursename: course.name, students })
  } catch (err) {
    return res.status(400).json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}

export const createAssignment = async (req: Request, res: Response): Promise<Response> => {
  const token: string = Array.isArray(req.headers['x-access-token'])
    ? req.headers['x-access-token'].join('')
    : req.headers['x-access-token'] as string
  try {
    const decoded = jwt.verify(token, secret) as DecodedToken
    const teacherId = decoded.id
    const students: String[] = req.body.students
    const experiments: String[] = req.body.experiments
    const startDate: Date = req.body.startDate
    const endDate: Date = req.body.endDate

    if (students === null || students === undefined || students.length === 0) {
      return res.status(400).json({ error: 'No se han ingresado estudiantes para la asignacion' })
    }

    if (experiments === null || experiments === undefined || experiments.length === 0) {
      return res.status(400).json({ error: 'No se han ingresado experimentos para la asignacion' })
    }

    const studentsPromises = students.map(async (studentId) => {
      const user = await User.findById(studentId)
      if (user == null) {
        throw new Error('No se encontró el estudiante')
      }
      return {
        id: user._id
      }
    })

    const experimentsPromises = experiments.map(async (experimentId) => {
      const exp = await Experiment.findById(experimentId)
      if (exp == null) {
        throw new Error('No se encontró el experimento')
      }
      return {
        id: exp._id
      }
    })

    const studentsAsig = await Promise.all(studentsPromises.map(async p => (await p).id))
    const experimentsAsig = await Promise.all(experimentsPromises.map(async p => (await p).id))

    const assignment = new Assignment({
      teacher: teacherId,
      students: studentsAsig,
      experiments: experimentsAsig,
      startDate,
      endDate
    })

    console.log(assignment)
    console.log('c')
    await assignment.save()

    return res.status(200).json({ assignment })
  } catch (err) {
    return res.status(400).json({ error: 'no ha funcionado bien el controllador de crear asignaciones' })
  }
}

export const getAssignmentTeacher = async (req: Request, res: Response): Promise<Response> => {
  const token: string = Array.isArray(req.headers['x-access-token'])
    ? req.headers['x-access-token'].join('')
    : req.headers['x-access-token'] as string
  if (token === '') {
    return res.status(400).json({ message: 'No se ha ingresado un token' })
  }
  try {
    const decoded = jwt.verify(token, secret) as DecodedToken
    const teacherId = decoded.id
    const assigments = await Assignment.find({ teacher: teacherId })

    if (assigments === null || assigments === undefined) {
      return res.status(400).json({ error: 'no hay un curso asignado' })
    }

    const studentsPromises = assigments.map(assigment => {
      return assigment.students.map(async student => {
        const user = await User.findById(student)
        const promScore = user?.score.reduce((acc, score) => acc + score.expScore, 0)
        return {
          id: user?._id,
          name: user?.name,
          secondname: user?.secondname,
          lastname: user?.lastname,
          username: user?.username,
          score: user?.score.slice().sort((a, b) => a.experimentNumber - b.experimentNumber),
          promScore: (promScore != null && user?.score != null && !Number.isNaN(promScore) && !Number.isNaN((promScore / user?.score.length).toFixed(2)) && promScore !== 0) ? (promScore / user?.score.length).toFixed(2) : 0
        }
      })
    })

    const allStudents = await Promise.all(studentsPromises.map(async p => (await Promise.all(p))))

    const studentsFlat = allStudents.flat()

    const students: Array<{ id: Types.ObjectId | undefined, name: string | undefined, secondname: string | undefined, lastname: string | undefined, username: string | undefined, score: Array<{ experimentNumber: number, expScore: number }> | undefined, promScore: string | number }> = []

    studentsFlat.map(student => {
      if (!students.some(e => String(e.id) === String(student.id))) {
        students.push(student)
      }
      return student
    })

    const experimentsPromises = assigments.map((assigment: { experiments: any[] }) => {
      return assigment.experiments.map(async exp => {
        const experiment = await Experiment.findById(exp)
        return {
          id: experiment?._id,
          expNumber: experiment?.expNumber,
          title: experiment?.title
        }
      })
    })

    const allExperiments = await Promise.all(experimentsPromises.map(async p => (await Promise.all(p))))

    const experimentsFlat = allExperiments.flat()

    const experiments: Array<{ id: Types.ObjectId | undefined, expNumber: number | undefined, title: string | undefined }> = []

    experimentsFlat.map(experiment => {
      if (!experiments.some(e => String(e.id) === String(experiment.id))) {
        experiments.push(experiment)
      }
      return experiment
    })

    return res.status(200).json({ assigments, students, experiments })
  } catch (err) {
    return res.status(400).json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}

export const getAssignmentStudent = async (req: Request, res: Response): Promise<Response> => {
  const token: string = Array.isArray(req.headers['x-access-token'])
    ? req.headers['x-access-token'].join('')
    : req.headers['x-access-token'] as string
  if (token === '') {
    return res.status(400).json({ message: 'No se ha ingresado un token' })
  }
  try {
    const decoded = jwt.verify(token, secret) as DecodedToken
    const studentId = decoded.id
    const assigments = await Assignment.find({ students: studentId }).exec()

    if (assigments === null || assigments === undefined) {
      return res.status(400).json({ error: 'no hay un curso asignado' })
    }

    const teacherPromises = assigments.map(async assigment => {
      const user = await User.findById(assigment.teacher)
      return {
        id: user?._id,
        name: user?.name,
        secondname: user?.secondname,
        lastname: user?.lastname,
        username: user?.username
      }
    })

    const teacherAsig = await Promise.all(teacherPromises)
    const teachers: Array<{ id: Types.ObjectId | undefined, name: string | undefined, secondname: string | undefined, lastname: string | undefined, username: string | undefined }> = []

    teacherAsig.map(teacher => {
      if (!teachers.some(e => String(e.id) === String(teacher?.id))) {
        teachers.push(teacher)
      }
      return teacher
    })

    const experimentsPromises = assigments.map(assigment => {
      return assigment.experiments.map(async exp => {
        const experiment = await Experiment.findById(exp)
        return {
          id: experiment?._id,
          expNumber: experiment?.expNumber,
          title: experiment?.title
        }
      })
    })

    const allExperiments = await Promise.all(experimentsPromises.map(async p => (await Promise.all(p))))

    const experimentsFlat = allExperiments.flat()

    const experiments: Array<{ id: Types.ObjectId | undefined, expNumber: number | undefined, title: string | undefined }> = []

    experimentsFlat.map(experiment => {
      if (!experiments.some(e => String(e.id) === String(experiment.id))) {
        experiments.push(experiment)
      }
      return experiment
    })

    return res.status(200).json({ assigments, teachers, experiments })
  } catch (err) {
    return res.status(400).json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}
