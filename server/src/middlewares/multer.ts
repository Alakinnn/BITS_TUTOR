import multer, { FileFilterCallback } from "multer";
import {Response, Request} from "express"
import { v4 as uuid } from 'uuid';
import { s3Config } from "../db/s3connect";

type req = Request
type res = Response

// Guidelines:
// 1. Multer takes in the destination and the filename (import as s3Config)
// 2. Depends on the route, multer is going to filter file types and sizes
// 3. Add fields and the maximum file for each field

const storage = multer.memoryStorage()

// Sample Filter
// const fileFilter = (req: Request, file: any, cb: any) => {
//   if (file.mimetype.split("/")[0] === "image") {
//     cb(null, true);
//   } else {
//     cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
//   }
// };

// Todo: Ask FE how many types a student && tutor can upload to the system
// This is currently for image
export const uploadImage = multer({
    storage: s3Config,
    fileFilter(req, file, callback) {
        if ((file.mimetype.split("/")[0]) === "image") {
          callback(null, true)
        }
        else {
          callback(null, false)
          throw new Error( "Invalid file type, must be of type IMAGE")
        }
    },
    limits: {
      fieldSize: 10000
    }
  
})

// TODO: what the user upload is going to depend on the route, theses are only DEVELOPMENT variables
// For example: /tutorprofile1/upload/resume will use resumeUpload as middleware params
// const avatarUpload = upload.fields([{name: "avater", maxCount: 1 }])
// const resumeUpload = upload.fields([{name: "resume", maxCount: 1 }])