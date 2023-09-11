import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { secret } from '../config/secret'
import { DecodedToken } from '../types/user'
import User from '../models/User'

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
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
    if (user !== null) {
      next()
    }
  } catch (error) {
    return res.status(401).json({ message: 'Token no valido' })
  }
  return null
}

export const verifyTeacher = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const token: string = Array.isArray(req.headers['x-access-token'])
    ? req.headers['x-access-token'].join('')
    : req.headers['x-access-token'] as string
  if (token === '') {
    return res.status(400).json({ message: 'No se ha ingresado un token' })
  }
  try {
    const decoded = jwt.verify(token, secret) as DecodedToken
    const role = decoded.role
    if (role === undefined || role === null) {
      return res.status(400).json({ message: 'hay un error con el token' })
    }
    if (role === 1) {
      next()
    }
  } catch (error) {
    return res.status(401).json({ message: 'El usuario no es un profesor' })
  }
  return null
}

export const verifyAdmin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const token: string = Array.isArray(req.headers['x-access-token'])
    ? req.headers['x-access-token'].join('')
    : req.headers['x-access-token'] as string
  if (token === '') {
    return res.status(400).json({ message: 'No se ha ingresado un token' })
  }
  try {
    const decoded = jwt.verify(token, secret) as DecodedToken
    const role = decoded.role
    if (role === undefined || role === null) {
      return res.status(400).json({ message: 'hay un error con el token' })
    }
    if (role === 2) {
      next()
    }
  } catch (error) {
    return res.status(401).json({ message: 'El usuario no es un profesor' })
  }
  return null
}
