import { SessionDoc } from "../models/session";
import { SessionRequestDoc } from "../models/sessionRequest";

// FIXME This does not work when session: SessionDoc | SessionRequestDoc

const populateTutorAndStudent = async (session: any) => {
    await session.populate([
        {
            path: "tutor",
            select: "-password",
        },
        {
            path: "student",
            select: "-password",
        },
    ]);

    return session;
};

export default populateTutorAndStudent;
