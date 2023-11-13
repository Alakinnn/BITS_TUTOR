import multer, { FileFilterCallback } from "multer";
import {Response, Request} from "express"
import { v4 as uuid } from 'uuid';

type req = Request
type res = Response

// Guidelines:
// 1. Multer takes in the destination and the filename (declared as storage atm)
// 2. Depends on the route, multer is going to filter file types and sizes
// 3. Add fields and the maximum file for each field

// const storage = multer.memoryStorage()

const storage = multer.diskStorage({
  destination: (req: req, file: any, cb: any) => {
    cb(null, "Uploads ")
  },
  filename(req: req, file: any, cb: any) {
      const originName = file
      cb(null, `${uuid()}-${originName}`)
  },
})

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
const uploadImage = multer({
  storage,
  fileFilter(req, file, callback) {
    if (file.mimetype.split("/")[0] === "image") {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  limits: { fileSize: 1000000000, files: 1 }
})

// TODO: what the user upload is going to depend on the route, theses are only DEVELOPMENT variables
// For example: /tutorprofile1/upload/resume will use resumeUpload as middleware params
// const avatarUpload = upload.fields([{name: "avater", maxCount: 1 }])
// const resumeUpload = upload.fields([{name: "resume", maxCount: 1 }])