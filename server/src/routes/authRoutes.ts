import express from "express";
const authRouter = express.Router();

import {
    loginUser,
    registerUser,
    validateUser,
} from "../controllers/authControllers";
import multerUpload from "../utils/multerUpload";
import { s3Config } from "../config/s3Config";

authRouter.post("/login", loginUser);
authRouter.post("/register", multerUpload.any(), registerUser);
authRouter.get("/validate", validateUser);

export default authRouter;
