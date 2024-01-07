import axios from "axios";
import { BASE_URL } from "../../../App";

const token = localStorage.getItem("token");

const getTutor = async (tutorId) => {
  const response = await axios.get(`${BASE_URL}/tutor/${tutorId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

const getStudent = async (studentId) => {
  const response = await axios.get(`${BASE_URL}/student/${studentId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export { getTutor, getStudent };
