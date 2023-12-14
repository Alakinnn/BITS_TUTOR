import multerPDF from "../utils/multerPDF"
import multerImage from "../utils/multerImage"
import { s3Upload } from "../controllers/uploadController"
import express from "express"
import { s3Config } from "../config/s3Config"
const uploadRouter = express.Router()

// Feel free to add more
uploadRouter.route("/cv").post(multerPDF.any(), s3Upload)
uploadRouter.route("/avatar").post(multerImage.any(), s3Upload)

export default uploadRouter;