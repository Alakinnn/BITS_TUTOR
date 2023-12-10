import Session, { SessionDoc } from "../../models/session";
import { Request, Response } from "express";
import { NotFoundError } from "../../errors";
import populateTutorAndStudent from "../../utils/populate";

const getSessionById = async (req: Request, res: Response) => {
    const { sessionId } = req.params;

    const session = await Session.findById(sessionId);

    if (!session) {
        throw new NotFoundError("Session not found");
    }

    await populateTutorAndStudent(session);

    return res.status(200).json(session);
};

interface sessionQuery {
    tutor?: string;
    student?: string;
}

const getSessions = async (req: Request, res: Response) => {
    const { tutorId, studentId } = req.query;
    let query: sessionQuery = {};

    if (tutorId) {
        query.tutor = tutorId as string;
    }

    if (studentId) {
        query.student = studentId as string;
    }

    const sessions = await Session.find(query);

    return res.status(200).json(sessions);
};

const getTutorSessions = async (req: Request, res: Response) => {
    const { tutorId } = req.params;
    const sessions = await Session.find({ tutor: tutorId });

    await Promise.all(sessions.map(async (session) => await populateTutorAndStudent(session)));
    return res.status(200).json(sessions);
};

const getStudentSessions = async (req: Request, res: Response) => {
    const { studentId } = req.params;
    const sessions = await Session.find({ student: studentId });

    await Promise.all(sessions.map(async (session) => await populateTutorAndStudent(session)));
    return res.status(200).json(sessions);
};

export { getSessionById, getSessions, getTutorSessions, getStudentSessions };
