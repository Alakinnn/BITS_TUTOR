import mongoose, { Schema } from  'mongoose';


const sessionSchema = new Schema({
    codeURL: {
        type: String,
        required: true,
        trim: true
    },
    tutorId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutor',
        required: true
    },
    studentId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    hostEmail: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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

export default Session
