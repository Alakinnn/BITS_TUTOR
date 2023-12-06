import mongoose, { Schema } from "mongoose";
import MongoResult from "../interfaces/MongoResult";

interface SessionRequestDoc extends MongoResult {
    title: string;
    description: string;
    tutorId: mongoose.Schema.Types.ObjectId;
    studentId: mongoose.Schema.Types.ObjectId;
    startTime: Date;
    endTime: Date;
    timezone: string;
    status: string;
}

// I have modified the sessioRequest schema to include title and description.
// This is to when approving the session, response object will also include
// attributes for the session in createSession controoler

const sessionRequestSchema = new Schema<SessionRequestDoc>({
    startTime: {
        type: Date,
        required: [true, "starting time must be defined"],
    },
    endTime: {
        type: Date,
        required: [true, "ending time must be defined"],
    },
    timezone: {
        type: String,
        required: [true, "timezone must be defined"],
    },
    tutorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tutor",
        required: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    status: {
        type: String,
        enum: ["approved", "denied", "pending"],
        required: true,
        default: "pending",
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
    },
    description: {
        type: String,
        trim: true,
        maxlength: 1000,
    },
});

const SessionRequest = mongoose.model("SessionRequest", sessionRequestSchema);

export default SessionRequest;
export { SessionRequestDoc };
