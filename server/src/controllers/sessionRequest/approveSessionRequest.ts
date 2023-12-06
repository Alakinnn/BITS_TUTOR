import { NextFunction, Request, Response } from "express";
import SessionRequest, { SessionRequestDoc } from "../../models/sessionRequest";
import { BadRequestError, NotFoundError } from "../../errors";
import { createSessionFromRequest } from "../session/createSession";
import CreateSessionRequestBody from "../../interfaces/CreateSessionRequestBody";

const approveSessionRequest = async (req: Request, res: Response) => {
    const requestId = req.params.requestId;
    let sessionRequest: SessionRequestDoc | null =
        await SessionRequest.findById(requestId);

    if (!sessionRequest) {
        throw new NotFoundError("Session not found");
    }

    if (sessionRequest.status !== "pending") {
        throw new BadRequestError(
            `Can't approve ${sessionRequest.status} request`
        );
    }

    sessionRequest.status = "approved";
    await sessionRequest.save();

    const requestBody: CreateSessionRequestBody = {
        title: sessionRequest.title,
        description: sessionRequest.description,
        tutorId: sessionRequest.tutorId.toString(),
        studentId: sessionRequest.studentId.toString(),
        startTime: sessionRequest.startTime.toISOString(),
        endTime: sessionRequest.endTime.toISOString(),
        timezone: sessionRequest.timezone,
    };

    const session = await createSessionFromRequest(requestBody);

    res.status(200).json({
        message: "Successfully approve session",
        sessionRequest,
        session,
    });
};

export default approveSessionRequest;
