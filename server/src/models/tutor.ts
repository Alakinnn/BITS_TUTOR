import mongoose, { Schema } from  'mongoose';


const tutorSchema = new Schema({
    id: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    sessions: [{ type: mongoose.Schema.Types.ObjectId }]
})

const Tutor = mongoose.model('Tutor', tutorSchema);

export { Tutor }
