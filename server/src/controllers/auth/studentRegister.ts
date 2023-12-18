import { Request, Response } from "express";
import Student, { StudentDoc } from "../../models/student";
import { generateToken } from "./jwt";
import { s3Config } from "../../config/s3Config";
const baseDOUrl = "https://finder-tutor.sgp1.digitaloceanspaces.com/";

const studentRegister = async (req: Request, res: Response) => {
  const {
    username,
    password,
    email,
    socialLinks,
  } = req.body;

  let user: StudentDoc;
  user = new Student({
      username,
      password,
      email,
      socialLinks,
  })

  // Upload files
  user.profilePicUrl = ""

  if (req.files) {
    const s3Files = await s3Config(req.files);
    s3Files.forEach((file: any) => {
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

export default studentRegister;
