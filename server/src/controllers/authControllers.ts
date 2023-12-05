import { Request, Response } from "express";

import Student from "../models/student";
import Tutor from "../models/tutor";
import { BadRequestError } from "../errors";

// FIXME: This is just for testing purposes

const loginUser = async (req: Request, res: Response) => {
    const students = await Student.find();
    const tutors = await Tutor.find();

    return res.status(200).json({ message: "testing", students, tutors });
};

const registerUser = async (req: Request, res: Response) => {
    const { username, password, email, role } = req.body;

    if (!username || !password || !email || !role) {
        throw new BadRequestError("Please provide all fields");
    }

    let user;

    if (role === "student") {
        user = await Student.create({ username, password, email });
    }

    if (role === "tutor") {
        user = await Tutor.create({ username, password, email });
    }

    return res.status(200).json({ message: "testing", user });
};

export { loginUser, registerUser };
