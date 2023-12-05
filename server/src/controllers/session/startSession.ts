import Session, { SessionDoc } from "../../models/session";
import { Request, Response } from "express";
import { NotFoundError, BadRequestError } from "../../errors";
import env from "../../config/env";
import MongoResult from "../../interfaces/MongoResult";
import {
    createZoomMeeting,
    ZoomMeetingOptions,
    generateZak,
} from "../../services/zoomAPI";
const { ZOOM_OWNER_EMAIL } = env;

const startSession = async (req: Request, res: Response) => {
    //Extract data to start session
    const sessionId = req.params.sessionId;
    const { liveShareUrl } = req.body;
    const session: SessionDoc | null = await Session.findById(sessionId);

    // Checking session if exists and is inactive, then update session
    if (!session) {
        throw new NotFoundError("Session not found");
    }

    if (session.status !== "inactive") {
        throw new BadRequestError(`Can not start ${session.status} session`);
    }

    session.status = "active";
    session.liveShareUrl = liveShareUrl;
    session.zak = await generateZak();
    await session.save();

    return res.status(200).json({
        message: "Session started successfully",
        session: { ...session._doc, hostEmail: ZOOM_OWNER_EMAIL },
    });
};

export default startSession;
