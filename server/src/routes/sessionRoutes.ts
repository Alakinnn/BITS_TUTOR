import { Router } from "express";
import {
    getSessions,
    createSession,
    getSessionById,
    startSession,
    joinSession,
    endSession,
    getTutorSessions,
    getStudentSessions,
} from "../controllers/sessionControllers";
const sessionRouter = Router();

sessionRouter.route("/").get(getSessions);
sessionRouter.route("/").post(createSession);

sessionRouter.route("/:sessionId").get(getSessionById);

sessionRouter.route("/:sessionId/start").post(startSession);
sessionRouter.route("/:sessionId/end").post(endSession);
sessionRouter.route("/:sessionId/join").get(joinSession);

sessionRouter.route("/tutor/:tutorId").get(getTutorSessions);
sessionRouter.route("/student/:studentId").get(getStudentSessions);

export default sessionRouter;
