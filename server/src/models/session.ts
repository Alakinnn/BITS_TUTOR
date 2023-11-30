import mongoose, { Schema } from  'mongoose';


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
    type: String,
    enum: ['active', 'inactive', 'completed', 'cancelled'],
    required: true,
    default: 'inactive'
    }
})

const Session = mongoose.model('Session', sessionSchema);

export { Session }
