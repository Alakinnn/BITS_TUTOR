import { createSession} from "../controllers/sessionControllers";
import { 
  approveSessionRequest, 
  denySessionRequest, 
  createSessionRequest 
} from "../controllers/sessionRequestController";
import { Router } from "express";

const sessionRequestRouter = Router()

sessionRequestRouter.route("/:id/deny").post(denySessionRequest)
sessionRequestRouter.route("/:id/approve").post(approveSessionRequest)
sessionRequestRouter.route("/").post(createSessionRequest)

export default sessionRequestRouter
