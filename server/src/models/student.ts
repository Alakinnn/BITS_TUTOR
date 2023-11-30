import mongoose, { Schema } from  'mongoose';

const studentSchema = new Schema ({
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
    }
})

const Student = mongoose.model('Student', studentSchema);

export { Student }
