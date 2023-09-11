import { Request, Response } from 'express'
import Experiment from '../models/Experiment'

export const experimentByNumber = async (req: Request, res: Response): Promise<Response> => {
  try {
    const expNumber = Number(req.params.expNumber)
    const experiment = await Experiment.findOne({ expNumber })
    const BASE_URL = process.env.BASE_URL ?? 'http://localhost:7628'
    if (experiment === null || experiment === undefined) {
      return res.status(400).json({ error: 'el experimento no existe' })
    }
    experiment.thumbnail = `${BASE_URL}/api/v1/chapters/${(experiment.thumbnail ?? '')}`
    experiment.images = experiment.images.map(img => `${BASE_URL}/api/v1/chapters/${img}`)
    return res.status(200).json({ experiment })
  } catch (err) {
    return res.status(400).json({ error: 'no ha funcionado bien el controllador de los experimentos' })
  }
}

export const getExperiments = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const experiments = await Experiment.find({})
    const BASE_URL = process.env.BASE_URL ?? 'http://localhost:7628'
    if (experiments === null || experiments === undefined) {
      return res.status(400).json({ error: 'el experimento no existe' })
    }
    const experiment = experiments.map(exp => {
      exp.thumbnail = `${BASE_URL}/api/v1/chapters/${(exp.thumbnail ?? '')}`
      return exp
    })
    return res.status(200).json({ experiment })
  } catch (err) {
    return res.status(400).json({ error: 'no ha funcionado bien el controllador de los experimentos' })
  }
}
