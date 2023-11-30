import mongoose, { Schema } from  'mongoose';


const tutorSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    username: {
        type: String,
        trim: true,
        maxLength: 20,
        minLength: 8
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
})

const Tutor = mongoose.model('Tutor', tutorSchema);

export default Tutor 
