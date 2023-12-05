import mongoose, {Schema} from "mongoose";
import MongoResult from "../interfaces/MongoResult";

interface SessionRequestDoc extends MongoResult{
  startTime: Date,
  endTime: Date,
  tutorId: mongoose.Schema.Types.ObjectId,
  studentId: mongoose.Schema.Types.ObjectId,
  status: string
}

const sessionRequestSchema = new Schema<SessionRequestDoc>({
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
  status: {
      type: String,
      enum: ["approved", "denied", "pending"],
      required: true,
      default: "pending"
  }
})

const SessionRequest = mongoose.model("SessionRequest", sessionRequestSchema)

export default SessionRequest
export {SessionRequestDoc} 