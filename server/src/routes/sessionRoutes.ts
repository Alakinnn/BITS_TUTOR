import { Router } from "express";
import {
    startSession,
    joinSession,
    endSession,
} from "../controllers/sessionControllers";
const sessionRouter = Router();

sessionRouter.route("/:sessionId/start").post(startSession);
sessionRouter.route("/:sessionId/end").post(endSession);
sessionRouter.route("/:sessionId/join").get(joinSession);

export default sessionRouter;
