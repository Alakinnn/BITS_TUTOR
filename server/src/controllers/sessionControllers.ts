import Session from "../models/session";
import Tutor from "../models/tutor";
import Student from "../models/student";
import axios from "axios";
import { generateAccess } from "../middlewares/getAccessToken";
import { Request, Response } from "express";
import { NotFoundError } from "../errors";
import env from "../config/env";
import { Document } from "mongoose";
const { ZOOM_OWNER_EMAIL } = env;

interface MongoResult extends Document {
    _doc: any;
    zak?: string;
}

const startSession = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId;
    const { liveShareUrl } = req.body;

    let session: MongoResult | null = await Session.findByIdAndUpdate(
        sessionId,
        {
            liveShareUrl,
            status: "active",
        },
        { new: true }
    );

    if (!session) {
        throw new NotFoundError("Session not found");
    }

    // Generate Zoom Access Token
    const accessToken = await generateAccess();
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };
    const response = await axios.get(
        `https://api.zoom.us/v2/users/${ZOOM_OWNER_EMAIL}/token`,
        { headers }
    );
    const { token } = response.data;

    session = await Session.findByIdAndUpdate(
        sessionId,
        {
            zak: token,
        },
        { new: true }
    );

    if (!session) {
        throw new NotFoundError("Session not found");
    }

    const responseSession = {
        ...session._doc,
        hostEmail: ZOOM_OWNER_EMAIL,
    };

    res.status(200).json(responseSession);
};

const joinSession = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId;
    const session = await Session.findById(sessionId);

    if (!session) {
        throw new NotFoundError("Session not found");
    }

    res.status(200).json(session);
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

    res.status(200).json(session);
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
    const accessToken = await generateAccess();
    const {
        tutorId,
        studentId,
        tutorEmail,
        studentEmail,
        topic,
        startTime,
        timezone,
        duration,
    } = req.body;
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.post(
        `https://api.zoom.us/v2/users/${ZOOM_OWNER_EMAIL}/meetings`,
        {
            topic: topic,
            type: 2,
            start_time: startTime,
            timezone: timezone,
            duration: duration,
            join_before_host: true,
            schedule_for: ZOOM_OWNER_EMAIL,
            settings: {
                join_before_host: true,
                private_meeting: true,
                meeting_invitees: [
                    { email: studentEmail },
                    { email: tutorEmail },
                ],
            },
        },
        { headers }
    );

    const session = await Session.create({
        tutorId,
        studentId,
        meetingNumber: response.data.id,
        startTime: startTime,
        meetingPassword: response.data.password,
    });
    res.status(201).json({
        message: "Created successfully",
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
