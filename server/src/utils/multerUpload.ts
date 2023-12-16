import { Request } from "express"
import multer from "multer"

const multerUpload = multer({
  storage: multer.memoryStorage(),
  // fileFilter(req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) {
  //   if ((file.mimetype.split("/")[0]) === "image" || (file.mimetype.split("/")[0]) === "pdf" ) {
  //     callback(null, true)
  //   }
  //   else {
  //     callback(null, false)
  //     throw new Error( "Invalid file type, must be of type IMAGE")
  //   }
  // },
  limits: {
    fieldSize: 10000000
  }

})

export default multerUpload;