import axios from "axios";
const BASEURL = "http://139.59.105.114/api/v1";

const getStudentSessions = async (studentId) => {
    const response = await axios.get(`${BASEURL}/sessionRequest`, {
        params: {
            studentId: studentId,
        },
    });
    return response;
};

const getTutorSessions = async (tutorId) => {
    const response = await axios.get(`${BASEURL}/sessionRequest`, {
        params: {
            tutorId: tutorId,
        },
    });
    return response;
};

export { getStudentSessions, getTutorSessions };
