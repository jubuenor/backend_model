import mongoose from 'mongoose'
import { config } from './config'

mongoose.connect(config.mongo.url, {
  retryWrites: true,
  w: 'majority'
})
  .then(() => console.log('Dd is connected'))
  .catch(error => console.log(error))
