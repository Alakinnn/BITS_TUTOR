import axios from "axios";
import env from "../config/env";

const {
    ZOOM_S2S_ACCOUNT_ID,
    ZOOM_S2S_CLIENT_ID,
    ZOOM_S2S_CLIENT_SECRET,
    ZOOM_OWNER_EMAIL,
} = env;
const clientID = ZOOM_S2S_CLIENT_ID;
const secretID = ZOOM_S2S_CLIENT_SECRET;
const accountID = ZOOM_S2S_ACCOUNT_ID;
const credentials = `${clientID}:${secretID}`;
const base64Credentials = Buffer.from(credentials).toString("base64");

const getZoomAccessToken = async () => {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${base64Credentials}`,
    };

    const response = await axios.post(
        "https://zoom.us/oauth/token",
        {
            grant_type: "account_credentials",
            account_id: accountID,
        },
        { headers: headers }
    );

    return response.data.access_token as string;
};

interface ZoomMeetingOptions {
    topic: string;
    tutorId: string;
    studentId: string;
    tutorEmail: string;
    studentEmail: string;
    startTime: string;
    timezone: string;
    duration: number;
}

const createZoomMeeting = async (options: ZoomMeetingOptions) => {
    const { topic, tutorEmail, studentEmail, startTime, timezone, duration } =
        options;

    const accessToken = await getZoomAccessToken();

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.post(
        `https://api.zoom.us/v2/users/${ZOOM_OWNER_EMAIL}/meetings`,
        {
            topic,
            type: 2,
            start_time: startTime,
            timezone,
            duration,
            join_before_host: true,
            schedule_for: ZOOM_OWNER_EMAIL,
            settings: {
                join_before_host: true,
                private_meeting: true,
                meeting_invitees: [
                    { email: studentEmail },
                    { email: tutorEmail },
                ],
            },
        },
        { headers }
    );

    return response.data;
};

const generateZak = async () => {
    const accessToken = await getZoomAccessToken();
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };
    const response = await axios.get(
        `https://api.zoom.us/v2/users/${ZOOM_OWNER_EMAIL}/token`,
        { headers }
    );
    return response.data.token;
};

export {
    getZoomAccessToken,
    createZoomMeeting,
    generateZak,
    ZoomMeetingOptions,
};
