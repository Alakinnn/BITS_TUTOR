import mongoose, { Schema } from  'mongoose';

const studentSchema = new Schema ({
    id: String,
    email: String,
    username: String,
    password: String
})

const student = mongoose.model('Student', studentSchema);

export { student }
