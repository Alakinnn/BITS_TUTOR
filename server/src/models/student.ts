import mongoose, { Schema } from  'mongoose';

const studentSchema = new Schema ({
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
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
})

const Student = mongoose.model('Student', studentSchema);

export default Student 
