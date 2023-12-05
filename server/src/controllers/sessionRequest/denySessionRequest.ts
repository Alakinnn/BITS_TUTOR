import { Request, Response } from "express";
import SessionRequest, { SessionRequestDoc } from "../../models/sessionRequest";
import { BadRequestError, NotFoundError } from "../../errors";

const denySessionRequest = async (req: Request, res: Response) => {
  const requestId = req.params.id
  let sessionRequest: SessionRequestDoc | null = await SessionRequest.findById(requestId)

  if (!sessionRequest) {
    throw new NotFoundError("Session not found");
  }

  if (sessionRequest.status !== "pending") {
    throw new BadRequestError(`Can't approve ${sessionRequest.status} request`)
  }

  sessionRequest.status = "denied"
  await sessionRequest.save()
  
  res.status(200).json({
    message: "Successfully deny session",
    sessionRequest: {...sessionRequest._doc}
  })
} 

export default denySessionRequest