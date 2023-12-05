import { NextFunction, Request, Response } from "express";
import SessionRequest, { SessionRequestDoc } from "../../models/sessionRequest";
import { BadRequestError, NotFoundError } from "../../errors";

const approveSessionRequest = async (req: Request, res: Response, next: NextFunction) => {
  const requestId = req.params.id
  let sessionRequest: SessionRequestDoc | null = await SessionRequest.findById(requestId)

  if (!sessionRequest) {
    throw new NotFoundError("Session not found");
  }

  if (sessionRequest.status !== "pending") {
    throw new BadRequestError(`Can't approve ${sessionRequest.status} request`)
  }

  sessionRequest.status = "approved"
  await sessionRequest.save()
  
  res.status(200).json({
    message: "Successfully approve session",
    sessionRequest: {...sessionRequest._doc}
  })
} 

export default approveSessionRequest