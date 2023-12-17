import { Request, Response } from "express";
import { UnauthorizedError } from "../../errors";
import { verifyToken } from "./jwt";

const validateUser = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new UnauthorizedError("No token provided");
    const token = authHeader.split(" ")[1];
    try {
        const decoded = verifyToken(token);
        return res.status(200).json({ user: decoded });
    } catch (err) {
        throw new UnauthorizedError("Invalid token");
    }
};

export default validateUser;
