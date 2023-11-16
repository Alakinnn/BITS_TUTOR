import { uploadImage } from "../middlewares/multer";
import express from "express"
const route = express.Router()

route.post("/upload", uploadImage.fields([{
  name: "avatar",
  maxCount: 1
}]))