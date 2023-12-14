import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../errors";
import { verifyToken } from "../controllers/auth/jwt";

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new UnauthorizedError("No token provided");
    const token = authHeader.split(" ")[1];
    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (err) {
        throw new UnauthorizedError("Invalid token");
    }
};
