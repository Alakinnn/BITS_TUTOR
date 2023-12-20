import { Request, Response } from "express";
import Tutor from "../../models/tutor";

const getTutorById = async (req: Request, res: Response) => {
    const tutorId = req.params.tutorId;

    const tutor = await Tutor.findById(tutorId).select("-password");

    return res.status(200).json(tutor);
};

const MAX_RESULTS = 20;

interface TutorQuery {
    $or?: any[];
    hourlyRate?: any;
}

const getTutors = async (req: Request, res: Response) => {
    const { query, hourlyRate } = req.query;

    const baseQuery: TutorQuery = {};

    if (query) {
        baseQuery.$or = [
            { username: { $regex: query.toString(), $options: "i" } },
            { description: { $regex: query.toString(), $options: "i" } },
            { benefits: { $regex: query.toString(), $options: "i" } },
            {
                tags: {
                    $elemMatch: { $regex: query.toString(), $options: "i" },
                },
            },
        ];
    }

    if (hourlyRate) {
        // Split the hourlyRate into min and max values
        const [minHourlyRate, maxHourlyRate] = parseHourlyRate(
            hourlyRate.toString()
        );

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

    const tutors = await Tutor.find(baseQuery)
        .select("-password")
        .limit(MAX_RESULTS);

    return res.status(200).json(tutors);
};

const parseHourlyRate = (hourlyRate: string) => {
    return hourlyRate.split("-").map((rate: string) => parseFloat(rate));
};

export { getTutors, getTutorById };
