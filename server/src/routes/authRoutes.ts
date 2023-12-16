import express from "express"
const authRouter = express.Router()

import {loginUser, registerUser} from '../controllers/authControllers'
import {  s3Upload } from "../controllers/uploadController"
import multerUpload from "../utils/multerUpload"
import { s3Config } from "../config/s3Config"


authRouter.post("/login", loginUser)
authRouter.post("/register", registerUser)
authRouter.post("/upload", multerUpload.any(), s3Upload)

export default authRouter