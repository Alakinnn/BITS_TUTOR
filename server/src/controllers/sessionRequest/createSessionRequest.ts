import { Request, Response } from "express";
import SessionRequest, { SessionRequestDoc } from "../../models/sessionRequest";
import CreateSessionRequestBody from "../../interfaces/CreateSessionRequestBody";
import populateTutorAndStudent from "../../utils/populate";

const createSessionRequest = async (req: Request, res: Response) => {
    const {
        title,
        description,
        tutorId,
        studentId,
        startTime,
        endTime,
        timezone,
    }: CreateSessionRequestBody = req.body;

    const sessionRequest: SessionRequestDoc = await SessionRequest.create({
        title,
        description,
        tutor: tutorId,
        student: studentId,
        startTime,
        endTime,
        timezone,
        status: "pending",
    });

    await populateTutorAndStudent(sessionRequest);

    res.status(200).json({
        message: "Session request successfully created",
        sessionRequest,
    });
};

export default createSessionRequest;
