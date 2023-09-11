import { Request, Response } from 'express'
import License from '../models/License'
import User from '../models/User'
import Course from '../models/Course'
import {
  encryptPassword,
  validateLogin,
  validateRegister,
  comparePassword,
  validateRecover
} from '../middlewares/auth'
import jwt from 'jsonwebtoken'
import { UserRegister, UserLogin, UserRecover } from '../types/user'
import { secret } from '../config/secret'

export const signup = async (
  req: Request<{}, {}, UserRegister>,
  res: Response
): Promise<Response> => {
  const user: UserRegister = {
    name: req.body.name,
    secondname: req.body.secondname,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
    license: req.body.license
  }
  if (validateRegister(user)) {
    try {
      const licenseCode = await License.findOne({ licenseCode: user.license })

      if (licenseCode == null) {
        return res
          .status(400)
          .json({ error: 'El código de licencia ingresado no es válido.' })
      }

      if (licenseCode.used) {
        return res.status(400).json({
          error: 'El código de licencia ingresado ya ha sido utilizado.'
        })
      }

      const userExist = await User.findOne({ username: user.username })

      if (userExist != null) {
        return res
          .status(400)
          .json({ error: 'Un usuario con este nombre ya existe.' })
      }

      const newUser = new User({
        name: user.name,
        secondname: user.secondname,
        lastname: user.lastname,
        username: user.username,
        password: await encryptPassword(user.password),
        license: licenseCode._id,
        token: '',
        expirationTime: '',
        role: licenseCode.role
      })

      if (licenseCode.role === 0) {
        newUser.score = []
      }

      const currentDate = Date.now()
      const expirationDate = new Date(currentDate)
      expirationDate.setHours(expirationDate.getHours() + 2)

      const token = jwt.sign(
        { username: newUser.username, id: newUser._id, role: newUser.role },
        secret
      )

      newUser.token = token
      newUser.expirationTime = expirationDate
      await newUser.save()

      if (newUser.role !== 2) {
        const course = await Course.findById(licenseCode.course)
        if (course != null) {
          if (newUser.role === 0) {
            course.students.push(newUser._id)
          } else if (newUser.role === 1) {
            course.teacher = newUser._id
          }
          await course.save()
        }
      }
      // Actualizamos el campo "used" de la licencia
      licenseCode.used = true
      await licenseCode.save()
      return res.status(201).json({
        message: 'Usuario creado exitosamente.',
        role: licenseCode.role,
        id: newUser._id,
        token
      })
    } catch (error) {
      console.error(error)
      return res
        .status(500)
        .json({ error: 'Ha ocurrido un error en el servidor.' })
    }
  } else {
    return res
      .status(401)
      .json({ message: 'Por favor ingresa todos los campos' })
  }
}

export const login = async (
  req: Request<{}, {}, UserLogin>,
  res: Response
): Promise<Response> => {
  const user: UserLogin = {
    username: req.body.username,
    password: req.body.password
  }
  if (validateLogin(user)) {
    const userExist = await User.findOne({ username: user.username })
    if (userExist != null) {
      const matchPassword = await comparePassword(
        user.password,
        userExist.password
      )
      if (!matchPassword) {
        return res.status(401).json({
          message: 'Contraseña invalida'
        })
      }

      const currentDate = Date.now()
      const expirationDate = new Date(currentDate)
      expirationDate.setHours(expirationDate.getHours() + 2)

      const token = jwt.sign(
        { username: userExist.username, id: userExist._id, role: userExist.role },
        secret
      )

      userExist.token = token
      userExist.expirationTime = expirationDate
      await userExist.save()

      return res.status(200).json({
        message: 'Usuario a iniciado sesion',
        role: userExist.role,
        id: userExist._id,
        token
      })
    } else {
      return res.status(401).json({ message: 'El usuario no existe' })
    }
  } else {
    return res
      .status(401)
      .json({ message: 'Por favor ingresa todos los campos' })
  }
}

export const recover = async (
  req: Request<{}, {}, UserRecover>,
  res: Response
): Promise<Response> => {
  const user: UserRecover = {
    username: req.body.username,
    license: req.body.license,
    password: req.body.password
  }
  if (validateRecover(user)) {
    const userExist = await User.findOne({ username: user.username })
    const licenseCode = await License.findOne({ licenseCode: user.license })
    if (licenseCode === null) {
      return res.status(401).json({
        message: 'El codigo de licencia no existe'
      })
    }
    if (userExist != null) {
      if (!(userExist.license.toString === licenseCode._id.toString)) {
        return res.status(401).json({
          message: 'El codigo de licencia no es valido'
        })
      }
      userExist.password = await encryptPassword(user.password)
      await userExist.save()

      const currentDate = Date.now()
      const expirationDate = new Date(currentDate)
      expirationDate.setHours(expirationDate.getHours() + 2)

      const token = jwt.sign(
        { username: userExist.username, id: userExist._id, role: userExist.role },
        secret
      )

      userExist.token = token
      userExist.expirationTime = expirationDate
      await userExist.save()

      return res.status(200).json({
        message: 'Se recupero la contraseña exitosamente',
        role: userExist.role,
        id: userExist._id,
        token
      })
    } else {
      return res.status(401).json({ message: 'El usuario no existe' })
    }
  } else {
    return res
      .status(401)
      .json({ message: 'Por favor ingresa todos los campos' })
  }
}
