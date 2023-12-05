import mongoose, {Schema} from "mongoose";
import Session from "./session";

interface SessionRequest {
  startTime: Date,
  endTime: Date,
  tutorId: mongoose.Schema.Types.ObjectId,
  studentId: mongoose.Schema.Types.ObjectId
}

const sessionRequestSchema = new Schema<SessionRequest>({
  startTime: {
    type: Date,
    required: [true, "starting time must be defined"]
  },
  endTime: {
    type: Date,
    required: [true, "ending time must be defined"]
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
})

const SessionRequest = mongoose.model("SessionRequest", sessionRequestSchema)

export default SessionRequest