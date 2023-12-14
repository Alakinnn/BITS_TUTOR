import { Request, Response } from "express";
import { s3Config } from "../../config/s3Config";

const s3Upload = async (req: Request, res: Response) => {
  await s3Config(req.files)
  res.status(200).json({ message: 'Uploaded successfully'});
};

export default s3Upload