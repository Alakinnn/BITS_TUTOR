import { createSession } from "../controllers/sessionControllers";
import {
    approveSessionRequest,
    denySessionRequest,
    createSessionRequest,
    getSessionRequests,
    getSessionRequestById,
} from "../controllers/sessionRequestController";
import { Router } from "express";

const sessionRequestRouter = Router();

sessionRequestRouter
    .route("/")
    .post(createSessionRequest)
    .get(getSessionRequests);
sessionRequestRouter.route("/:requestId").get(getSessionRequestById);
sessionRequestRouter.route("/:requestId/deny").post(denySessionRequest);
sessionRequestRouter.route("/:requestId/approve").post(approveSessionRequest);

export default sessionRequestRouter;
