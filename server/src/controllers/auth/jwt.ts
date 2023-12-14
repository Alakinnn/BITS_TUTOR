import jwt from "jsonwebtoken";

import env from "../../config/env";
const { JWT_SECRET, JWT_EXPIRY } = env;

const generateToken = (data: any) => {
    return jwt.sign(data, JWT_SECRET as string, { expiresIn: JWT_EXPIRY });
};

const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET as string);
};

export { generateToken, verifyToken };
