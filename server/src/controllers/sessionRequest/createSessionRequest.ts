import { Request, Response } from "express";
import SessionRequest from "../../models/sessionRequest";
import CreateSessionRequestBody from "../../interfaces/CreateSessionRequestBody";

const createSessionRequest = async (req: Request, res: Response) => {
    const requestBody: CreateSessionRequestBody = req.body;

    const sessionRequest = await SessionRequest.create({
        ...requestBody,
        status: "pending",
    });

    res.status(200).json({
        message: "Session request successfully created",
        sessionRequest,
    });
};

export default createSessionRequest;
