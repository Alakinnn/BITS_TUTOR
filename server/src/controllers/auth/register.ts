import { Request, Response } from "express";
import Student, { StudentDoc } from "../../models/student";
import Tutor, { TutorDoc } from "../../models/tutor";
import { BadRequestError } from "../../errors";
import { generateToken } from "./jwt";
import { s3Config } from "../../config/s3Config";
import assert from "assert";
const baseDOUrl = "https://finder-tutor.sgp1.digitaloceanspaces.com/";

const registerUser = async (req: Request, res: Response) => {
    const {
        username,
        password,
        email,
        role,
        description,
        tags,
        socialLinks,
        hourlyRate,
        benefits,
    } = req.body;
    console.log(req.body);
    console.log(req.files);

    if (!username || !password || !email || !role) {
        throw new BadRequestError("Please provide all fields");
    }

    let user: StudentDoc | TutorDoc;

    switch (role) {
        case "student":
            user = await Student.create({
                username,
                password,
                email,
                socialLinks,
            });
            break;
        case "tutor":
            user = await Tutor.create({
                username,
                password,
                email,
                description,
                tags,
                socialLinks,
                hourlyRate,
                benefits,
            });
            break;
        default:
            throw new BadRequestError("Invalid role");
    }

    // Upload files
    const s3Files = await s3Config(req.files);
    const cvUrl = `${baseDOUrl}${s3Files[0].Key}`;
    const profilePicUrl = `${baseDOUrl}${s3Files[1].Key}`;

    // Setting files to database
    if (user as TutorDoc) {
        (user as TutorDoc).cvUrl = cvUrl;
    }
    user.profilePicUrl = profilePicUrl;

    // Run validations
    const error = user.validateSync();
    if (error) {
        assert.equal(error.message, "Invalid URL");
    }

    // Saving Documents
    await user.save();

    // Remove password field from response
    const returnUser = user.toObject();
    delete returnUser.password;

    // Generate JWT
    const token = generateToken(returnUser);

    return res.status(200).json({ user: returnUser, token });
};

export default registerUser;
