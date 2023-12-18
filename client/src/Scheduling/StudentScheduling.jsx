import React from "react";
import axios from "axios";

export async function getStudentSessions(studentId) {
  const response = await axios.get(`http://139.59.105.114/api/v1/session/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { studentId: `${studentId}` },
  });
  // console.log(response.data);
  return response.data;
}
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
