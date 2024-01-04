import axios from "axios";
const BASEURL = "http://139.59.105.114/api/v1";
const token = localStorage.getItem("token");

const getStudentSessions = async (studentId) => {
  const response = await axios.get(`${BASEURL}/session`, {
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
  const response = await axios.get(`${BASEURL}/session`, {
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
