import React from "react";
import axios from "axios";
import { BASE_URL } from "/src/App";
const token = localStorage.getItem("token");

export async function getStudentSessions(studentId) {
  try {
    const response = await axios.get(`${BASE_URL}/session/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { studentId: `${studentId}` },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting sessions:", error);
  }
}
export async function getCurrentRequests(studentId) {
  try {
    const response = await axios.get(`${BASE_URL}/sessionRequest`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { studentId: `${studentId}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting requests:", error);
  }
}
