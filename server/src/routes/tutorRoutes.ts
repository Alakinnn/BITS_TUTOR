import express from "express"
const tutorRouter = express.Router()

tutorRouter.route("/").get()

tutorRouter.route("/:tutorId").get()

export default tutorRouter