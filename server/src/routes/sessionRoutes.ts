import { Router } from "express";
import { startSession, joinSession } from "../controllers/sessionControllers";
const sessionRouter = Router();

sessionRouter.route("/:sessionId/start").post(startSession);
// sessionRouter.route("/:id/end").post()   TODO: Implement this
sessionRouter.route("/:sessionId/join").get(joinSession);

export default sessionRouter;
