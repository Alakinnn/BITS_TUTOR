import { ErrorRequestHandler, Request, Response, NextFunction } from "express"

interface APIError extends Error{
    statusCode: number,
}

const errorHandler: ErrorRequestHandler = (err: APIError, req: Request, res: Response, next: NextFunction) => {
    const customError = {
        statusCode: err.statusCode || 500,
        message: err.message || "Something went wr" 
    }

    res.status(customError.statusCode).json({message: customError.message})
}

export default errorHandler