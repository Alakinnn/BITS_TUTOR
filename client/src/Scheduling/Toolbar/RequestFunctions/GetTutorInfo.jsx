import { BASE_URL } from "../../../App";
import axios from "axios";
const token = localStorage.getItem("token");

export async function GetTutorInfo(tutorId, setTutor) {
  const response = await axios.get(`${BASE_URL}/tutor/${tutorId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  setTutor(response.data);
}
