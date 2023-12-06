import { createSession } from "../controllers/sessionControllers";
import {
    approveSessionRequest,
    denySessionRequest,
    createSessionRequest,
} from "../controllers/sessionRequestController";
import { Router } from "express";

const sessionRequestRouter = Router();

sessionRequestRouter.route("/:requestId/deny").post(denySessionRequest);
sessionRequestRouter.route("/:requestId/approve").post(approveSessionRequest);
sessionRequestRouter.route("/").post(createSessionRequest);

export default sessionRequestRouter;
