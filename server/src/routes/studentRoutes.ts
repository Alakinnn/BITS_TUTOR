import express from "express";
const studentRouter = express.Router();

import { getStudents, getStudentById } from "../controllers/studentControllers";

studentRouter.route("/").get(getStudents);

studentRouter.route("/:studentId").get(getStudentById);

export default studentRouter;
