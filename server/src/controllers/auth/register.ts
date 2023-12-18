import { Request, Response } from "express";
import Student, { StudentDoc } from "../../models/student";
import Tutor, { TutorDoc } from "../../models/tutor";
import { BadRequestError } from "../../errors";
import { generateToken } from "./jwt";
import { s3Config } from "../../config/s3Config";
import studentRegister from "./studentRegister";
import tutorRegister from "./tutorRegister";
const baseDOUrl = "https://finder-tutor.sgp1.digitaloceanspaces.com/";

const registerUser = async (req: Request, res: Response) => {
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

    if (!username || !password || !email || !role) {
        throw new BadRequestError("Please provide all fields");
    }

    switch (role) {
        case "student":
            return await studentRegister(req, res)
        case "tutor":
            return await tutorRegister(req, res)
        default:
            throw new BadRequestError("Invalid role");
    }

};

export default registerUser;
