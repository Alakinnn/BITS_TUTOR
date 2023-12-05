import Session from "../../models/session";
import { Request, Response } from "express";
import { createZoomMeeting, ZoomMeetingOptions } from "../../services/zoomAPI";

const createSession = async (req: Request, res: Response) => {
    const { tutorId, studentId, startTime, endTime, title, description } =
        req.body;

    const options: ZoomMeetingOptions = req.body;

    options.topic = title;
    options.duration = calculateDuration(startTime, endTime);

    const zoomMeeting = await createZoomMeeting(options);
    const session = await Session.create({
        title,
        description,
        tutorId,
        studentId,
        meetingNumber: zoomMeeting.id,
        startTime,
        endTime,
        status: "inactive",
        meetingPassword: zoomMeeting.password,
    });

    return res.status(201).json({
        message: "Session created successfully",
        session,
    });
};

const calculateDuration = (startTime: string, endTime: string) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    return Math.floor((end.getTime() - start.getTime()) / (1000 * 60));
};

export default createSession;
