import Session, { SessionDoc } from "../../models/session";
import { Request, Response } from "express";
import { NotFoundError, BadRequestError } from "../../errors";
import env from "../../config/env";
import MongoResult from "../../interfaces/MongoResult";
import { createZoomMeeting, ZoomMeetingOptions } from "../../services/zoomAPI";
const { ZOOM_OWNER_EMAIL } = env;

const joinSession = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId;

    // Check Session if exists and is active
    const session: SessionDoc | null = await Session.findById(sessionId);

    if (!session) {
        throw new NotFoundError("Session not found");
    }

    if (session.status === "inactive") {
        throw new BadRequestError(`Session has not started`);
    }

    if (session.status !== "active") {
        throw new BadRequestError(`Can not join ${session.status} session`);
    }

    return res.status(200).json({
        message: "Session joined successfully",
        session: { ...session._doc, hostEmail: ZOOM_OWNER_EMAIL },
    });
};

export default joinSession;
