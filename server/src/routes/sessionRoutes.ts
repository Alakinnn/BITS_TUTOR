import { Router } from "express";
import { createSession, joinSession } from "../controllers/sessionControllers";
const sessionRouter = Router();

sessionRouter.route("/:sessionId/start").post();
// sessionRouter.route("/:id/end").post()   TODO: Implement this
sessionRouter.route("/:sessionId/join").get();

export default sessionRouter;
