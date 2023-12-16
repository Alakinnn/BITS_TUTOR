import { Request, Response } from "express";
import { BadRequestError } from "../../errors";

const uploadMinLimit = (req: Request, res: Response) => {
  if(!req.files) {
    throw new BadRequestError("At least one file uploaded")
  }
  res.status(200)
}

export default uploadMinLimit;