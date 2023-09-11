import { Request, Response } from 'express'
import Chapter from '../models/Chapter'
import Experiment from '../models/Experiment'

export const chapters = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const chapters = await Chapter.find({}).sort({ chapterNumber: 1 }).exec()
    const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000'
    if (chapters === null || chapters === undefined) {
      return res.status(400).json({ error: 'no hay capitulos para mostrar' })
    }
    const chaptersData = chapters.map((chapter) => ({
      chapterNumber: chapter.chapterNumber,
      chapterTitle: chapter.chapterTitle,
      chapterImg: `${BASE_URL}/api/v1/chapters/${(chapter.chapterImg ?? '')}`
    }))
    return res.status(200).json({ data: chaptersData })
  } catch (err) {
    return res.status(400)
  }
}

export const chapterByNumber = async (req: Request, res: Response): Promise<Response> => {
  try {
    const numberChapter = Number(req.params.chapterNumber)
    const chapter = await Chapter.findOne({ chapterNumber: numberChapter })
    if (chapter === null || chapter === undefined) {
      return res.status(400).json({ error: 'el capitulo no existe' })
    }
    const experiments = await Promise.all(chapter.experimentsNumber.map(async (expNum) => {
      const experiment = await Experiment.findOne({ expNumber: expNum })
      return experiment
    }).filter((experiment) => experiment !== undefined))
    const experimentsData = experiments?.map((experiment) => {
      if (experiment !== null) {
        return {
          expNumber: experiment?.expNumber,
          title: experiment?.title
        }
      }
      return null
    }).filter((experiment) => experiment !== null)
    return res.status(200).json({ experimentsData })
  } catch (err) {
    return res.status(400).json({ error: 'no ha funcionado bien el controllador de los capitulos' })
  }
}
