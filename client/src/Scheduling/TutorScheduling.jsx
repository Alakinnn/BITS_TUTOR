import React from "react";
import axios from "axios";
import { BASE_URL } from "../App";
const token = localStorage.getItem("token");

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

export async function getTutorSessions(tutorId) {
  try {
    const response = await axios.get(`${BASE_URL}/session`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { tutorId: `${tutorId}` },
    });
    // console.log("Respond data: ", response);
    return response.data;
  } catch (error) {
    console.error("Error getting sessions:", error);
  }
}

export async function getStudentRequests(tutorId) {
  try {
    const response = await axios.get(`${BASE_URL}/sessionRequest`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { tutorId: `${tutorId}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting requests:", error);
  }
}

// Get tutor and student requests
export async function getRequests(role, id) {
  try {
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
  } catch (error) {
    console.error("Error filtering requests:", error);
  }
}
