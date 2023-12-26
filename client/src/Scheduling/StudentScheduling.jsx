import React from "react";
import axios from "axios";
import { BASE_URL } from "/src/App";
const token = localStorage.getItem("token");

export async function getStudentSessions(studentId) {
  const response = await axios.get(`${BASE_URL}/session/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { studentId: `${studentId}` },
  });
  // console.log(response.data);
  return response.data;
}
export async function getCurrentRequests(studentId) {
  const response = await axios.get(`${BASE_URL}/sessionRequest`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { studentId: `${studentId}` },
  });
  return response.data;
}
