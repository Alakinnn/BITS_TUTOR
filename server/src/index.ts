import "express-async-errors";

import express from "express";
const app = express();

import cors from "cors";

import env from "./config/env";
import {
  authRouter,
  tutorRouter,
  studentRouter,
  reviewRouter,
} from "./routes/index";

import { errorHandler } from "./middlewares/index";

import { connectMongoDB } from "./db/connect";

app.enable("trust proxy");

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tutor", tutorRouter);
app.use("/api/v1/student", studentRouter);
app.use("/api/v1/review", reviewRouter);

app.use(errorHandler);

const start = async () => {
  await connectMongoDB();
  app.listen(env.PORT, () => console.log(`Listening on port ${env.PORT}!`));
};
start();
