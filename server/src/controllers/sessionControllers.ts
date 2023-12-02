import Session from "../models/session";
import { Request, Response } from "express";
import { NotFoundError } from "../errors";
import env from "../config/env";
import MongoResult from "../interfaces/MongoResult";
import {
    createZoomMeeting,
    ZoomMeetingOptions,
    generateZak,
} from "../services/zoomAPI";
const { ZOOM_OWNER_EMAIL } = env;

const startSession = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId;
    const { liveShareUrl } = req.body;
    const zak = await generateZak();
    let session: MongoResult | null

    // Checking session in db
    session = await Session.findById({
        _id: sessionId
    })
    if (!session) {
        throw new NotFoundError("Session not found");
    }

    // Checking session status
    session = await Session.findOne({
        status: "inactive"
    })
    if (!session) {
        throw new Error("Something went wrong");
    }

    // Update Session
    session = await Session.findByIdAndUpdate(
        sessionId,
        {
            liveShareUrl,
            status: "active",
            zak: zak
        },
        { new: true }
    );

    if (!session) {
        throw new NotFoundError("Session not found");
    }

    res.status(200).json({
        message: "Session started successfully",
        session: { ...session._doc, hostEmail: ZOOM_OWNER_EMAIL },
    });
};

const joinSession = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId;
    let session: MongoResult | null 

    // Check Session in db
    session = await Session.findById(sessionId);
    if (!session) {
        throw new NotFoundError("Session not found");
    }

    res.status(200).json({
        message: "Session joined successfully",
        session: { ...session._doc, hostEmail: ZOOM_OWNER_EMAIL },
    });
};

const endSession = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId;
    const session = await Session.findByIdAndUpdate(
        sessionId,
        { status: "completed" },
        { new: true }
    );

    if (!session) {
        throw new NotFoundError("Session not found");
    }

    res.status(200).json({
        message: "Session ended successfully",
        session,
    });
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

const getSessions = async (req: Request, res: Response) => {
    const sessions = await Session.find({});
    return res.status(200).json(sessions);
};

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

    res.status(201).json({
        message: "Session created successfully",
        session,
    });
};

const getSessionById = async (req: Request, res: Response) => {
    const { sessionId } = req.params;
    const session = await Session.findById(sessionId);

    if (!session) {
        throw new NotFoundError("Session not found");
    }

    return res.status(200).json(session);
};

export {
    getSessions,
    createSession,
    getSessionById,
    startSession,
    joinSession,
    endSession,
    getTutorSessions,
    getStudentSessions,
};
