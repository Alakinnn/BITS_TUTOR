import { Request, Response } from "express";
import Student from "../../models/student";

const getStudents = async (req: Request, res: Response) => {
    const students = await Student.find().select("-password");

    return res.status(200).json(students);
};

const getStudentById = async (req: Request, res: Response) => {
    const studentId = req.params.studentId;

    const student = await Student.findById(studentId).select("-password");

    return res.status(200).json(student);
};

export { getStudents, getStudentById };
