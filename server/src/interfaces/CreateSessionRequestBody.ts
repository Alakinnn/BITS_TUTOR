import mongoose from "mongoose";

interface CreateSessionRequestBody {
    title: string;
    description: string;
    tutorId: string;
    studentId: string;
    startTime: string;
    endTime: string;
    timezone: string;
}

export default CreateSessionRequestBody;
