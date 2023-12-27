import { Request, Response } from "express";
import Session, { SessionDoc } from "../../models/session";
import { NotFoundError, BadRequestError } from "../../errors";
import populateTutorAndStudent from "../../utils/populate";

const cancelSession = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId;
    // Check Session if exists and is active
    const session: SessionDoc | null = await Session.findById(sessionId);
    if (!session) {
        throw new NotFoundError("Session not found");
    }
    if (session.status !== "inactive") {
        throw new BadRequestError(`Can not cancel ${session.status} session`);
    }
    session.status = "cancelled";
    await session.save();

    await populateTutorAndStudent(session);

    return res.status(200).json({
        message: "Session cancelled successfully",
        session,
    });
};

export default cancelSession;
