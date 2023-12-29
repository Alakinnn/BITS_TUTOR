import "express-async-errors";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { rateLimit } from "express-rate-limit";

import env from "./config/env";
import {
    authRouter,
    tutorRouter,
    studentRouter,
    sessionRouter,
    sessionRequestRouter,
} from "./routes/index";
import { errorHandler, authUser } from "./middlewares/index";
import { connectMongoDB } from "./db/connect";

const app = express();

// Security
app.set("trust proxy", 1);
app.use(
    rateLimit({
        windowMs: 5 * 60 * 1000, // 5 minutes
        max: 100, // Limit each IP to 100 requests every windowMS
    })
);
app.use(cors());
app.use(helmet());

app.use(express.json());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/session", authUser, sessionRouter);
app.use("/api/v1/tutor", authUser, tutorRouter);
app.use("/api/v1/student", authUser, studentRouter);
app.use("/api/v1/sessionRequest", authUser, sessionRequestRouter);
app.use(errorHandler);

const start = async () => {
    try {
        await connectMongoDB();
        app.listen(env.PORT, () =>
            console.log(`Listening on port ${env.PORT}!`)
        );
    } catch (e) {
        console.log(e);
    }
};
start();
