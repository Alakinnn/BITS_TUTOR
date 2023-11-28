import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import multer, { MulterError } from "multer";

import APIError from "../errors/APIError";

const errorHandler: ErrorRequestHandler = (
  err: Error | APIError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  const customError = {
    name: err.name || "Error",
    message: err.message || "Something went wrong, please try again later",
    statusCode: 500,
  };

  if (err instanceof MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      customError.statusCode = 400;
      customError.message = "File is too large";
    }

    if (err.code === "LIMIT_FILE_COUNT") {
      customError.statusCode = 400;
      customError.message = "File limit reached";
    }

    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      customError.statusCode = 400;
      customError.message = "File must be an image";
    }
  }

  res.status(customError.statusCode).json({ message: customError.message });
};

export default errorHandler;
