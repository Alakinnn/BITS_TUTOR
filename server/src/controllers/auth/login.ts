import { Request, Response } from "express";

import Student, { StudentDoc } from "../../models/student";
import Tutor, { TutorDoc } from "../../models/tutor";
import {
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
} from "../../errors";
import { generateToken, verifyToken } from "./jwt";

const loginUser = async (req: Request, res: Response) => {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        throw new BadRequestError("Please provide all fields");
    }

    let user: StudentDoc | TutorDoc | null;

    switch (role) {
        case "student":
            user = await Student.findOne({ email, role });
            break;
        case "tutor":
            user = await Tutor.findOne({ email, role });
            break;
        default:
            throw new BadRequestError("Invalid role");
    }

    if (!user) {
        throw new NotFoundError("User not found");
    }
    const isPasswordValid = await user.passwordValid(password);

    if (!isPasswordValid) {
        throw new UnauthorizedError("Invalid password");
    }

    // Remove password field from response
    const returnUser = user.toObject();
    delete returnUser.password;

    // Generate JWT
    const token = generateToken(returnUser);

    return res.status(200).json({
        message: "Login successful",
        user: returnUser,
        token,
    });
};

export default loginUser;
