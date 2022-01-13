import dotenv from "dotenv"
dotenv.config({ path: './config/config.env' })

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

//routes 
import { router as analyzers } from './routes/analyzers.js'

const app = express()

// enable All CORS Requests
app.use(cors())
// secure  Express apps by setting various HTTP headers.
app.use(helmet())
// express body parser 
app.use(express.json())

app.use('/api/v2', analyzers)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`app running on port ${PORT} in ${process.env.NODE_ENV} mode`)
})