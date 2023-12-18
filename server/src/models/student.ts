import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import MongoResult from "../interfaces/MongoResult";
import PasswordComparable from "../interfaces/PasswordComparable";
interface StudentDoc extends PasswordComparable, MongoResult {
    email: string;
    username: string;
    password: string;
    role: string;
    profilePicUrl: string;
    socialLinks: string[];
}

const studentSchema = new Schema<StudentDoc>({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    username: {
        type: String,
        trim: true,
        required: true,
        maxLength: 50,
        minLength: 8,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ["student"],
        required: true,
        default: "student",
    },
    profilePicUrl: {
        type: String,
        trim: true,
    },
    socialLinks: {
        type: [String],
    },
});

// Hashing Passwords with bcrypt on Save
studentSchema.pre("save", async function (this: StudentDoc, next) {
    const student = this;

    if (!student.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(student.password, salt);
    student.password = hash;

    return next();
});

// Compare Passwords with bcrypt
studentSchema.methods.passwordValid = async function (
    this: StudentDoc,
    candidatePassword: string
): Promise<boolean> {
    const student = this;

    const isMatch = await bcrypt.compare(candidatePassword, student.password);

    return isMatch;
};

const Student = mongoose.model<StudentDoc>("Student", studentSchema);

export default Student;
export { StudentDoc };
