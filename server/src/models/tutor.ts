import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import MongoResult from "../interfaces/MongoResult";
import PasswordComparable from "../interfaces/PasswordComparable";
interface TutorDoc extends PasswordComparable, MongoResult {
    email: string;
    username: string;
    password: string;
    role: string;
    tags: string[];
    description: string;
    socialLinks: string[];
    profilePicUrl: string;
    cvUrl: string;
    hourlyRate: number;
    benefits: string;
}

const isValidURL = function (value: String) {
    const prefix = "https://finder-tutor.sgp1.digitaloceanspaces.com/";
    return typeof value === "string" && value.startsWith(prefix);
};

const tutorSchema = new Schema<TutorDoc>({
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
        enum: ["tutor"],
        required: true,
        default: "tutor",
    },
    tags: {
        type: [String],
    },
    description: {
        type: String,
        trim: true,
    },
    socialLinks: {
        type: [String],
    },
    profilePicUrl: {
        type: String,
        trim: true,
        validate: [isValidURL, "URL must start with the specified prefix"],
    },
    cvUrl: {
        type: String,
        trim: true,
        validate: [isValidURL, "URL must start with the specified prefix"],
    },
    hourlyRate: {
        type: Number,
        trim: true,
    },
    benefits: {
        type: String,
        trim: true,
        validate: [isValidURL, "URL must start with the specified prefix"],
    },
});

// Hashing Passwords with bcrypt on Save
tutorSchema.pre("save", async function (this: TutorDoc, next) {
    const tutor = this;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(tutor.password, salt);
    tutor.password = hash;

    next();
});

// Compare Passwords with bcrypt
tutorSchema.methods.passwordValid = async function (
    this: TutorDoc,
    candidatePassword: string
): Promise<boolean> {
    const tutor = this;

    const isMatch = await bcrypt.compare(candidatePassword, tutor.password);

    return isMatch;
};

// Turn off automatic validation
tutorSchema.set("validateBeforeSave", false);

const Tutor = mongoose.model<TutorDoc>("Tutor", tutorSchema);

export default Tutor;
export { TutorDoc };
