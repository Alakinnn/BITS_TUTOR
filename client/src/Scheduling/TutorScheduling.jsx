import React from "react";
import axios from "axios";
const token = localStorage.getItem("token");

export async function getCurrentRequests(studentId) {
  const response = await axios.get(
    `http://139.59.105.114/api/v1/sessionRequest`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { studentId: `${studentId}` },
    }
  );
  return response.data;
}

export async function getTutorSessions(tutorId) {
  const response = await axios.get(`http://139.59.105.114/api/v1/session`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { tutorId: `${tutorId}` },
  });
  // console.log(response.data);
  return response.data;
}
export async function getStudentRequests(tutorId) {
  console.log(tutorId);
  const response = await axios.get(
    `http://139.59.105.114/api/v1/sessionRequest`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { tutorId: `${tutorId}` },
    }
  );
  return response.data;
}
// Get tutor and student requests
export async function getRequests(role, id) {
  switch (role) {
    case "tutor":
      let requestList = await getStudentRequests(id);
      requestList = requestList.filter((request) => {
        return request.status === "pending";
      });
      return requestList;
    case "student":
      return await getCurrentRequests(id);
    default:
      break;
  }
}
