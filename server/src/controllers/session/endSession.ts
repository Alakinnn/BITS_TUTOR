import Session, { SessionDoc } from "../../models/session";
import { Request, Response } from "express";
import { NotFoundError, BadRequestError } from "../../errors";
import populateTutorAndStudent from "../../utils/populate";

const endSession = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId;
    // Check Session if exists and is active
    const session: SessionDoc | null = await Session.findById(sessionId);
    if (!session) {
        throw new NotFoundError("Session not found");
    }
    if (session.status !== "active") {
        throw new BadRequestError(`Can not end ${session.status} session`);
    }
    session.status = "completed";
    await session.save();

    await populateTutorAndStudent(session);

    return res.status(200).json({
        message: "Session ended successfully",
        session,
    });
};

export default endSession;
