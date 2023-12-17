import express from "express";
const tutorRouter = express.Router();

import { getTutors, getTutorById } from "../controllers/tutorControllers";

tutorRouter.route("/").get(getTutors);

tutorRouter.route("/:tutorId").get(getTutorById);

export default tutorRouter;
