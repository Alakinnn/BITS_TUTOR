import { Request, Response, NextFunction } from "express";
import { s3Config } from "../../config/s3Config";
import axios from "axios";

const s3Upload = async (req: Request, res: Response, next: NextFunction) => {
  // Since I can't do it
  // My idea is to run the register route then the upload route because only then
  // a new user object (tutor/student) exists in the database
  // So when running the s3Config, we will access the attribute
  // of params array called "Key", this is basically the URL
  // to the uploaded file in the form of "DIGITAL_OCEAN_URL/KEY"
  // But I'm currently getting some bugs at axios when posting to register route
  const newUser = await axios.post("http://localhost:3000/api/v1/auth/register", req.body)
  
  await s3Config(req.files)
  res.status(200).json({
    message: "ok"
  })
}

export default s3Upload;