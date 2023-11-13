import 'express-async-errors'

import express from 'express'
const app = express()

import cors from 'cors'

import env from './config/env'
import authRouter from './routes/authRoutes'
import tutorRouter from './routes/tutorRoutes'
import studentRouter from './routes/studentRoutes'
import reviewRouter from './routes/reviewRoutes'
import errorHandler from './middlewares/errorHandler'
import { connectDB } from './db/connect'

app.enable("trust proxy")

app.use(cors())
app.use(express.json())

// Routes
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/tutor", tutorRouter)
app.use("/api/v1/student", studentRouter)
app.use("/api/v1/review", reviewRouter)

app.use(errorHandler)

const start = async () => {
    await connectDB();
    app.listen(env.PORT, () => console.log(`Listening on port ${env.PORT}!`))
}
start()