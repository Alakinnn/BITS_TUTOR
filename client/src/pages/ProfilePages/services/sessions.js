import axios from "axios";
import { BASE_URL } from "../../../App";
const token = localStorage.getItem("token");

const getStudentSessions = async (studentId) => {
  const response = await axios.get(`${BASE_URL}/session`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      studentId: studentId,
    },
  });

  return response;
};

const getTutorSessions = async (tutorId) => {
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

export { getStudentSessions, getTutorSessions };
