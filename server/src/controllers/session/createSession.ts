import Session, { SessionDoc } from "../../models/session";
import { Request, Response } from "express";
import { createZoomMeeting, ZoomMeetingOptions } from "../../services/zoomAPI";
import CreateSessionRequestBody from "../../interfaces/CreateSessionRequestBody";
import { calculateDuration } from "../../utils/time";
import Tutor, { TutorDoc } from "../../models/tutor";
import Student, { StudentDoc } from "../../models/student";
import { NotFoundError } from "../../errors";

const createSession = async (req: Request, res: Response) => {
    const session: SessionDoc = await createSessionFromRequest(req.body);

    return res.status(201).json({
        message: "Session created successfully",
        session,
    });
};

const createSessionFromRequest = async (
    request: CreateSessionRequestBody
): Promise<SessionDoc> => {
    const {
        title,
        description,
        tutorId,
        studentId,
        startTime,
        endTime,
        timezone,
    } = request;

    const tutor: TutorDoc | null = await Tutor.findById(tutorId);
    const student: StudentDoc | null = await Student.findById(studentId);

    if (!tutor || !student) {
        throw new NotFoundError("Tutor or student not found");
    }

    const options: ZoomMeetingOptions = {
        topic: title,
        tutorEmail: tutor.email,
        studentEmail: student.email,
        startTime,
        timezone,
        duration: calculateDuration(startTime, endTime),
    };

    const zoomMeeting = await createZoomMeeting(options);

    const session: SessionDoc = await Session.create({
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

    return session;
};

export default createSession;
export { createSessionFromRequest };
