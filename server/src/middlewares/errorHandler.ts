import { ErrorRequestHandler, Request, Response, NextFunction } from "express"
import multer from "multer"

interface APIError extends Error{
    statusCode: number,
}

const errorHandler: ErrorRequestHandler = (err: APIError, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({
              message: "file is too large",
            });
          }
      
          if (err.code === "LIMIT_FILE_COUNT") {
            return res.status(400).json({
              message: "File limit reached",
            });
          }
      
          if (err.code === "LIMIT_UNEXPECTED_FILE") {
            return res.status(400).json({
              message: "File must be an image",
            });
    }
    const customError = {
        statusCode: err.statusCode || 500,
        message: err.message || "Something went wrong, please try again later" 
    }

    res.status(customError.statusCode).json({message: customError.message})
    }
}

export default errorHandler