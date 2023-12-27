import Tutor from "../../models/tutor";
import { NotFoundError } from "../../errors";
import { Request, Response } from "express";

const validateTutor = async (req: Request, res: Response) => {
    const { email } = req.body;

    const tutor = await Tutor.findOne({ email });

    if (!tutor) {
        throw new NotFoundError("Tutor not found");
    }

    tutor.validated = true;
    await tutor.save();

    return res.status(200).json({ message: "Tutor Validated", tutor });
};

export default validateTutor;
