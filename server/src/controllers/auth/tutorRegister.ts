import { Request, Response } from "express";
import Tutor, { TutorDoc } from "../../models/tutor";
import { generateToken } from "./jwt";
import { s3Config } from "../../config/s3Config";
import FilesObject from "../../interfaces/FilesObject";
const baseDOUrl = "https://finder-tutor.sgp1.digitaloceanspaces.com/";

const tutorRegister = async (req: Request, res: Response) => {
  const {
    username,
    password,
    email,
    role,
    description,
    tags,
    socialLinks,
    hourlyRate,
    benefits,
} = req.body;

  let user: TutorDoc;
  user = new Tutor({username,
    password,
    email,
    description,
    tags,
    socialLinks,
    hourlyRate,
    benefits,
  })

  // Upload files
  user.cvUrl = ""
  user.profilePicUrl = ""

  if (req.files) {
    const s3Files = await s3Config(req.files);
    s3Files.forEach((file: any) => {
      if (file.Metadata.fieldname === "cv") {
        user.cvUrl = `${baseDOUrl}${file.Key}`
      }
      if (file.Metadata.fieldname === "pfp") {
        user.profilePicUrl = `${baseDOUrl}${file.Key}`
      }
    })
  }

  // Saving Documents
  await user.save();

  // Remove password field from response
  const returnUser = user.toObject();
  delete returnUser.password;
  
  // Generate JWT
  const token = generateToken(returnUser);
  return res.status(200).json({ user: returnUser, token });
};

export default tutorRegister;
