import mongoose, { Date, Schema } from "mongoose";
import MongoResult from "../interfaces/MongoResult";
import { SessionExpirationDurationInSeconds } from "aws-sdk/clients/sagemaker";

interface SessionDoc extends MongoResult {
    liveShareUrl: string;
    tutorId: mongoose.Schema.Types.ObjectId;
    studentId: mongoose.Schema.Types.ObjectId;
    meetingNumber: number;
    meetingPassword: string;
    zak: string;
    startTime: Date;
    endTime: Date;
    status: string;
}

const sessionSchema = new Schema<SessionDoc>({
    liveShareUrl: {
        type: String,
        trim: true,
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
    meetingNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    meetingPassword: {
        type: String,
        required: true,
        trim: true,
    },
    zak: {
        type: String,
        trim: true,
    },
    startTime: { type: Date },
    endTime: { type: Date },
    status: {
        type: String,
        enum: ["active", "inactive", "completed", "cancelled"],
        required: true,
        default: "inactive",
    },
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;
export { SessionDoc };
