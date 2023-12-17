import { Request, Response } from "express";
import Tutor from "../../models/tutor";

const getTutors = async (req: Request, res: Response) => {
    const tutors = await Tutor.find().select("-password");

    return res.status(200).json(tutors);
};

const getTutorById = async (req: Request, res: Response) => {
    const tutorId = req.params.tutorId;

    const tutor = await Tutor.findById(tutorId).select("-password");

    return res.status(200).json(tutor);
};

export { getTutors, getTutorById };
