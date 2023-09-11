import { Request, Response } from 'express'
import User from '../models/User'
import Course from '../models/Course'
import Experiment from '../models/Experiment'
import Assignment from '../models/Assignment'
import License from '../models/License'
import { LicenseType } from '../types/license'
// import { Types } from 'mongoose'

export const getAllStudents = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const students = await User.find({ role: 0 })

    if (students === null || students === undefined) {
      return res.status(400).json({ error: 'no hay estudiantes' })
    }

    const studentsPromises = students.map(async (student) => {
      const user = await User.findById(student)
      const promScore = user?.score.reduce(
        (acc, score) => acc + score.expScore,
        0
      )
      return {
        id: user?._id,
        name: user?.name,
        secondname: user?.secondname,
        lastname: user?.lastname,
        username: user?.username,
        score: user?.score
          .slice()
          .sort((a, b) => a.experimentNumber - b.experimentNumber),
        promScore:
          promScore != null &&
          user?.score != null &&
          !Number.isNaN(promScore) &&
          !Number.isNaN((promScore / user?.score.length).toFixed(2)) &&
          promScore !== 0
            ? (promScore / user?.score.length).toFixed(2)
            : 0
      }
    })

    const allStudents = await Promise.all(studentsPromises)

    return res.status(200).json({ allStudents })
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}

export const getAllTeachers = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const teachers = await User.find({ role: 1 })

    if (teachers === null || teachers === undefined) {
      return res.status(400).json({ error: 'no hay estudiantes' })
    }

    const teachersPromises = teachers.map(async (teacher) => {
      const user = await User.findById(teacher)
      return {
        id: user?._id,
        name: user?.name,
        secondname: user?.secondname,
        lastname: user?.lastname,
        username: user?.username
      }
    })

    const allteachers = await Promise.all(teachersPromises)

    return res.status(200).json({ allteachers })
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}

export const addlicense = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const teachers = await User.find({ role: 1 })

    if (teachers === null || teachers === undefined) {
      return res.status(400).json({ error: 'no hay estudiantes' })
    }

    const teachersPromises = teachers.map(async (teacher) => {
      const user = await User.findById(teacher)
      return {
        id: user?._id,
        name: user?.name,
        secondname: user?.secondname,
        lastname: user?.lastname,
        username: user?.username
      }
    })

    const allteachers = await Promise.all(teachersPromises)

    return res.status(200).json({ allteachers })
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}

export const getCourses = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const course = await Course.find({})

    if (course === null || course === undefined) {
      return res.status(400).json({ error: 'no hay un curso asignado' })
    }

    return res.status(200).json({ course })
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}

export const getAssignments = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const assignments = await Assignment.find({})

    if (assignments === null || assignments === undefined) {
      return res.status(400).json({ error: 'no hay un curso asignado' })
    }

    return res.status(200).json({ assignments })
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}

export const getStatistics = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const assignmentsNumber = await Assignment.countDocuments({})
    const studentsNumber = await User.countDocuments({ role: 0 })
    const teachersNumber = await User.countDocuments({ role: 1 })
    const experimentNumber = await Experiment.countDocuments({})
    const usedLicenses = await License.countDocuments({ used: true })
    const unusedLicenses = await License.countDocuments({ used: false })

    return res.status(200).json({ assignmentsNumber, studentsNumber, teachersNumber, experimentNumber, usedLicenses, unusedLicenses })
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}

export const createLicense = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const license: LicenseType = {
    course: req.body.course,
    licenseCode: req.body.licenseCode,
    role: req.body.role
  }
  if (license.course === null || license.licenseCode === null || license.role === null) return res.status(400).json({ error: 'no hay una licencia ingresada' })
  try {
    const alreadyUsed = await License.find({ licenseCode: license.licenseCode })

    if (alreadyUsed.length > 0) {
      return res.status(400).json({ error: 'la licencia ya ha sido usada' })
    }
    const courseExist = await Course.findById(license.course)

    if (courseExist === null || courseExist === undefined) {
      return res.status(400).json({ error: 'no existe este curso' })
    }
    const newLicense = new License(license)
    await newLicense.save()

    return res.status(200).json({ license })
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}

export const createCourse = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const courseName: String = req.body.courseName
  if (courseName === null) return res.status(400).json({ error: 'no hay un curso ingresado' })
  try {
    const alreadyUsed = await Course.find({ name: courseName })

    if (alreadyUsed.length > 0) {
      return res.status(400).json({ error: 'el curso ya existe' })
    }
    const newCourse = new Course({ name: courseName })
    await newCourse.save()

    return res.status(200).json(newCourse)
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'no ha funcionado bien el controllador de los usuarios' })
  }
}
