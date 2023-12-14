import multer from "multer"

const multerPDF = multer({
  storage: multer.memoryStorage(),
  fileFilter(req, file, callback) {
      if (file.mimetype === 'application/pdf') {
        callback(null, true);
      } else {
        callback(null, false)
        throw (new Error('Invalid file type. Only PDF files are allowed.'));
      }
  },
  limits: {
    fieldSize: 10000000
  }
})

export default multerPDF;