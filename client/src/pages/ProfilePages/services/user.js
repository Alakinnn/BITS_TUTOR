import axios from "axios";
const BASEURL = "http://139.59.105.114/api/v1";

const token = localStorage.getItem("token");

const getTutor = async (tutorId) => {
    const response = await axios.get(`${BASEURL}/tutor/${tutorId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response;
};

const getStudent = async (studentId) => {
    const response = await axios.get(`${BASEURL}/student/${studentId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response;
};

export { getTutor, getStudent };
