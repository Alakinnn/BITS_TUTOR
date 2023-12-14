import multer from "multer"

const multerImage = multer({
  storage: multer.memoryStorage(),
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
    fieldSize: 10000000
  }

})

export default multerImage;