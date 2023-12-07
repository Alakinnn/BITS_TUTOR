import { Request, Response } from "express";
import SessionRequest, { SessionRequestDoc } from "../../models/sessionRequest";
import { BadRequestError, NotFoundError } from "../../errors";
import populateTutorAndStudent from "../../utils/populate";

const denySessionRequest = async (req: Request, res: Response) => {
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

    sessionRequest.status = "denied";
    await sessionRequest.save();

    await populateTutorAndStudent(sessionRequest);

    res.status(200).json({
        message: "Successfully deny session",
        sessionRequest: { ...sessionRequest._doc },
    });
};

export default denySessionRequest;
