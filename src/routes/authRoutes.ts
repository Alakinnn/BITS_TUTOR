import express from "express"
const authRouter = express.Router()

import {loginUser, registerUser} from '../controllers/authControllers'

authRouter.post("/login", loginUser)
authRouter.post("/register", registerUser)

export default authRouter