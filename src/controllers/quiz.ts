import { Request, Response } from 'express'
import Quiz from '../models/Quiz'

export const quizByNumber = async (req: Request, res: Response): Promise<Response> => {
  try {
    const expNumber = Number(req.params.expNumber)
    const quiz = await Quiz.findOne({ expNumber })
    if (quiz === null || quiz === undefined) {
      return res.status(400).json({ error: 'el quiz no existe' })
    }
    return res.status(200).json({ quiz })
  } catch (err) {
    return res.status(400).json({ error: 'no ha funcionado bien el controllador de los quices' })
  }
}
