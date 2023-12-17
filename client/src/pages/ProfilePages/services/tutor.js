import axios from "axios";
const BASEURL = "http://139.59.105.114/api/v1";

const getTutor = async (tutorId) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${BASEURL}/tutor/${tutorId}`, {headers: {Authorization: `Bearer ${token}`}});
    return response;
}

export default getTutor;