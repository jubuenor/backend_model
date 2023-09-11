import app from './config/app'
import './config/database'

const PORT = process.env.SERVER_PORT ?? 3000
app.listen(PORT)

console.log('sever listen on port', PORT)
