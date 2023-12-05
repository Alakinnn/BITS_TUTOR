import Session, { SessionDoc } from "../../models/session";
import { Request, Response } from "express";
import { NotFoundError, BadRequestError } from "../../errors";
import env from "../../config/env";
import MongoResult from "../../interfaces/MongoResult";
import { createZoomMeeting, ZoomMeetingOptions } from "../../services/zoomAPI";
const { ZOOM_OWNER_EMAIL } = env;

const createSession = async (req: Request, res: Response) => {
    const { tutorId, studentId, startTime } = req.body;
    const options: ZoomMeetingOptions = req.body;
    const zoomMeeting = await createZoomMeeting(options);
    const session = await Session.create({
        tutorId,
        studentId,
        meetingNumber: zoomMeeting.id,
        startTime,
        meetingPassword: zoomMeeting.password,
    });

    return res.status(201).json({
        message: "Session created successfully",
        session,
    });
};

export default createSession;
