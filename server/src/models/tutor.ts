import mongoose, { Schema } from "mongoose";

interface TutorDoc {
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
    },
    cvUrl: {
        type: String,
        trim: true,
    },
    hourlyRate: {
        type: Number,
        trim: true,
    },
    benefits: {
        type: String,
        trim: true,
    },
});

const Tutor = mongoose.model("Tutor", tutorSchema);

export default Tutor;
export { TutorDoc };
