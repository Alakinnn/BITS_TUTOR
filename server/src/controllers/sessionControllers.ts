import Session from "../models/session";
import Tutor from "../models/tutor";
import Student from "../models/student";
import axios from "axios";
import { generateAccess } from "../middlewares/getAccessToken";
import { Request, Response } from "express";
import { NotFoundError } from "../errors";

const startSession = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId;
    const { liveShareUrl } = req.body;

    const session = await Session.findByIdAndUpdate(
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
        `https://api.zoom.us/v2/users/${session.hostEmail}/meetings`,
        { headers }
    );
    const { token } = response.data.token;

    session.zak = token;
    await session.save();

    res.status(200).json(session);
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
    const accessToken = await generateAccess()
    const { hostEmail, topic, startTime, timezone, duration, studentEmail } = req.body
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
  
    const response= await axios.post(`https://api.zoom.us/v2/users/${hostEmail}/meetings`, 
    {
      topic: topic,
      type: 2,
      start_time: startTime,
      timezone: timezone,
      duration: duration,
      join_before_host: true,
      schedule_for: hostEmail,
      settings : {
        join_before_host: true,
        private_meeting: true,
        meeting_invitees: [{"email": studentEmail}]
      }
    }, { headers });
  
    const tutor = await Tutor.findOne({
      email: hostEmail
    })
    const student = await Student.findOne({ email: studentEmail });
  
  
    await Session.create(
      {
        // Since codeURL is required, I have to put this here. 
        // Is there a way to tell the function that with an empty string codeURL, the session can't start? Or is it implement already?
        liveShareUrl: "", 
        tutorId: tutor?._id,
        studentId: student?._id,
        meetingNumber: response.data.id,
        hostEmail: hostEmail,
        startTime: startTime,
        zak: ""
      }
    )
    res.status(201).json({
      message: "Created successfully",
    })
  }

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
