import Session from "../models/session";
import axios from "axios";
import { generateAccess } from "../middlewares/createMeeting";
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
        { new: true },
        
    );

    if (!session) {
        throw new NotFoundError("Session not found");
    }

    // Generate Zoom Access Token
    const accessToken = await generateAccess()
    const headers = {
        Authorization: `Bearer ${accessToken}`
    };
    const response = await axios.get(
        `https://api.zoom.us/v2/users/${session.hostEmail}/meetings`, { headers }
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

export { startSession, joinSession, endSession };
