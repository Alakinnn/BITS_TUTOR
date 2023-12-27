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
    cancelSession,
} from "../controllers/sessionControllers";
const sessionRouter = Router();

sessionRouter.route("/").get(getSessions).post(createSession);

sessionRouter.route("/:sessionId").get(getSessionById);

sessionRouter.route("/:sessionId/start").post(startSession);
sessionRouter.route("/:sessionId/end").post(endSession);
sessionRouter.route("/:sessionId/join").get(joinSession);
sessionRouter.route("/:sessionId/cancel").post(cancelSession);

sessionRouter.route("/tutor/:tutorId").get(getTutorSessions);
sessionRouter.route("/student/:studentId").get(getStudentSessions);

export default sessionRouter;
