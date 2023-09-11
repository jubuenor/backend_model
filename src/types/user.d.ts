import { Types } from 'mongoose'

interface User {
  name: string
  secondname: string
  lastname: string
  username: string
  password: string
  license: Types.ObjectId
}

interface UserRegister extends User {
  license: string
}

interface UserLogin {
  username: string
  password: string
}

interface UserRecover {
  username: string
  license: string
  password: string
}

interface DecodedToken {
  username: string
  id: string
  role: number
  iat: number
  exp: number
}

export { User, UserRegister, UserLogin, DecodedToken, UserRecover }
