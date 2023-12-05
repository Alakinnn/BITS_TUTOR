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

const getSessionById = async (req: Request, res: Response) => {
    const { sessionId } = req.params;
    const session = await Session.findById(sessionId);

    if (!session) {
        throw new NotFoundError("Session not found");
    }

    return res.status(200).json(session);
};

const getSessions = async (req: Request, res: Response) => {
    const sessions = await Session.find({});
    return res.status(200).json(sessions);
};

const getTutorSessions = async (req: Request, res: Response) => {
    const { tutorId } = req.params;
    const sessions = await Session.find({ tutorId });

    return res.status(200).json(sessions);
};

const getStudentSessions = async (req: Request, res: Response) => {
    const { studentId } = req.params;
    const sessions = await Session.find({ studentId });

    return res.status(200).json(sessions);
};

export { getSessionById, getSessions, getTutorSessions, getStudentSessions };
