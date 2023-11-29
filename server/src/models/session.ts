import mongoose, { Schema } from  'mongoose';

enum Status {
    Active, Inactive
}

const sessionSchema = new Schema({
    meetingId: {
        type: String,
        required: true,
        trim: true
    },
    codeURL: {
        type: String,
        required: true,
        trim: true
    },
    tutorId: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    studentId: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    hostEmail: {
        type: String,
        required: true,
        trim: true
    },
    accessToken: {
        type: String,
        required: true,
        trim: true
    },
    startTime: { type: Date },
    endTime: { type: Date },
    status: {
    type: Status,
    required: true,
    default: Status.Active
    }
})

const session = mongoose.model('Session', sessionSchema);

export { session }
