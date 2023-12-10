import { Request, Response } from "express";
import SessionRequest, { SessionRequestDoc } from "../../models/sessionRequest";
import { NotFoundError } from "../../errors";
import populateTutorAndStudent from "../../utils/populate";

const getSessionRequestById = async (req: Request, res: Response) => {
    const { requestId } = req.params;
    const sessionRequest: SessionRequestDoc | null =
        await SessionRequest.findById(requestId);

    if (!sessionRequest) {
        throw new NotFoundError("Session not found");
    }

    await populateTutorAndStudent(sessionRequest);

    return res.status(200).json(sessionRequest);
};

const getSessionRequests = async (req: Request, res: Response) => {
    const { tutorId, studentId } = req.query;
    const sessionRequests = await SessionRequest.find({ tutorId, studentId });

    return res.status(200).json(sessionRequests);
};

export { getSessionRequestById, getSessionRequests };
