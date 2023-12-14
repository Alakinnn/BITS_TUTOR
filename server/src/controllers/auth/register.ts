import { Request, Response } from "express";

import Student, { StudentDoc } from "../../models/student";
import Tutor, { TutorDoc } from "../../models/tutor";
import { BadRequestError } from "../../errors";
import { generateToken } from "./jwt";

const registerUser = async (req: Request, res: Response) => {
    const { username, password, email, role } = req.body;

    if (!username || !password || !email || !role) {
        throw new BadRequestError("Please provide all fields");
    }

    let user: StudentDoc | TutorDoc;

    switch (role) {
        case "student":
            user = await Student.create({
                username,
                password,
                email,
            });
            break;
        case "tutor":
            user = await Tutor.create({
                username,
                password,
                email,
            });
            break;
        default:
            throw new BadRequestError("Invalid role");
    }

    // Remove password field from response
    const returnUser = user.toObject();
    delete returnUser.password;

    // Generate JWT
    const token = generateToken(returnUser);

    return res
        .status(200)
        .json({ message: "testing", user: returnUser, token });
};

export default registerUser;
