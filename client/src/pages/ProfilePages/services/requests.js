import axios from "axios";
const BASEURL = "http://139.59.105.114/api/v1";

const getStudentRequests = async (studentId) => {
    const response = await axios.get(`${BASEURL}/sessionRequest`, {
        params: {
            studentId: studentId,
        },
    });
    return response;
};

const getTutorRequests = async (tutorId) => {
    const response = await axios.get(`${BASEURL}/session`, {
        params: {
            tutorId: tutorId,
        },
    });
    return response;
};

export { getStudentRequests, getTutorRequests };
