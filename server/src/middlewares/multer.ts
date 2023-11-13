import multer from "multer";
import {Response, Request} from "express"


type req = Request
type res = Response

const storage = multer.memoryStorage()

const fileFilter = (req: Request, file: any, cb: any) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};

// This is currently for image
const uploadImage = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1000000000, files: 1 },
})

// TODO: what the user upload is going to depend on the route, theses are only DEVELOPMENT variables
// For example: /tutorprofile1/upload/resume will use resumeUpload as middleware params
// const avatarUpload = upload.fields([{name: "avater", maxCount: 1 }])
// const resumeUpload = upload.fields([{name: "resume", maxCount: 1 }])