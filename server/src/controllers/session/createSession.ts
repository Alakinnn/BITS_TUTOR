import Session from "../../models/session";
import { Request, Response } from "express";
import { createZoomMeeting, ZoomMeetingOptions } from "../../services/zoomAPI";

const createSession = async (req: Request, res: Response) => {
    const { tutorId, studentId, startTime } = req.body;
    const options: ZoomMeetingOptions = req.body;
    const zoomMeeting = await createZoomMeeting(options);
    const session = await Session.create({
        tutorId,
        studentId,
        meetingNumber: zoomMeeting.id,
        startTime,
        status: "inactive",
        meetingPassword: zoomMeeting.password,
    });

    return res.status(201).json({
        message: "Session created successfully",
        session,
    });
};

export default createSession;
