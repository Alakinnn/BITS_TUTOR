import { 
  approveSessionRequest, 
  denySessionRequest, 
  createSessionRequest 
} from "../controllers/sessionRequestController";
import { Router } from "express";

const sessionRequestRouter = Router()

sessionRequestRouter.route("/:id").post(denySessionRequest).post(approveSessionRequest)
sessionRequestRouter.route("/").post(createSessionRequest)

export default sessionRequestRouter
