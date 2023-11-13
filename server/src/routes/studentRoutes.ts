import express from "express"
const studentRouter = express.Router()

studentRouter.route("/").get()

studentRouter.route("/:studentId").get()

export default studentRouter