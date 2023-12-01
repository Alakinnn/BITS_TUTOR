import express, {Request, Response} from "express"
const reviewRouter = express.Router()

reviewRouter.route("/").get().post()

reviewRouter.route("/tutor/:tutorId").get().post()

reviewRouter.route("/:reviewId").get().patch()

export default reviewRouter