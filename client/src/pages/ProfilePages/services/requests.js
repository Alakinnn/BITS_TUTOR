import axios from "axios";
import { BASE_URL } from "../../../App";
const token = localStorage.getItem("token");

const getStudentRequests = async (studentId) => {
  const response = await axios.get(`${BASE_URL}/sessionRequest`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      studentId: studentId,
    },
  });
  return response;
};

const getTutorRequests = async (tutorId) => {
  const response = await axios.get(`${BASE_URL}/session`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      tutorId: tutorId,
    },
  });
  return response;
};

export { getStudentRequests, getTutorRequests };
