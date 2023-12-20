import { Request, Response } from "express";
import Tutor from "../../models/tutor";

const getTutorById = async (req: Request, res: Response) => {
    const tutorId = req.params.tutorId;

    const tutor = await Tutor.findById(tutorId).select("-password");

    return res.status(200).json(tutor);
};

interface TutorQuery {
    $or: any[];
    hourlyRate?: any;
}

const getTutors = async (req: Request, res: Response) => {
    const { username, description, benefits, tags, hourlyRate } = req.query;

    const baseQuery: TutorQuery = { $or: [] };

    if (username) {
        baseQuery.$or.push({
            username: { $regex: username.toString(), $options: "i" },
        });
    }

    if (description) {
        baseQuery.$or.push({
            description: { $regex: description.toString(), $options: "i" },
        });
    }

    if (benefits) {
        baseQuery.$or.push({
            benefits: { $regex: benefits.toString(), $options: "i" },
        });
    }

    if (tags) {
        baseQuery.$or.push({ tags: { $in: tags } });
    }

    if (hourlyRate) {
        // Split the hourlyRate into min and max values
        const [minHourlyRate, maxHourlyRate] = hourlyRate
            .toString()
            .split("-")
            .map((rate: string) => parseFloat(rate));

        // Add hourlyRate filter if valid minHourlyRate or maxHourlyRate is provided
        if (!isNaN(minHourlyRate)) {
            baseQuery.hourlyRate = {
                ...baseQuery.hourlyRate,
                $gte: minHourlyRate,
            };
        }

        if (!isNaN(maxHourlyRate)) {
            baseQuery.hourlyRate = {
                ...baseQuery.hourlyRate,
                $lte: maxHourlyRate,
            };
        }
    }

    const tutors = await Tutor.find(baseQuery).select("-password");

    return res.status(200).json(tutors);
};

export { getTutors, getTutorById };
