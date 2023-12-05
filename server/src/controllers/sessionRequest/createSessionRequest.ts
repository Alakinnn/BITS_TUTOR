import { Request, Response } from "express";
import SessionRequest from "../../models/sessionRequest";

const createSessionRequest = async (req: Request, res: Response) => {
  const {startTime, endTime, studentId, tutorId} = req.body

  const sessionRequest = await SessionRequest.create({
    startTime: startTime,
    endTime: endTime,
    tutorId: tutorId,
    studentId: studentId
  })

  res.status(200).json({
    message: "Session request successfully created",
    sessionRequest
  })
}

export default createSessionRequest