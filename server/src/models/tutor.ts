import mongoose, { Schema } from  'mongoose';

enum Status {
    Active, Inactive
}

const tutorSchema = new Schema({
    id: String,
    email: String,
    username: String,
    password: String,
    sessions: [{ type: mongoose.Schema.Types.ObjectId }]
})

const studentSchema = new Schema ({
    id: String,
    email: String,
    username: String,
    password: String
})

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

const tutor = mongoose.model('Tutor', tutorSchema);
const student = mongoose.model('Student', tutorSchema);
const session = mongoose.model('Session', tutorSchema);

export { tutor, student, session }
