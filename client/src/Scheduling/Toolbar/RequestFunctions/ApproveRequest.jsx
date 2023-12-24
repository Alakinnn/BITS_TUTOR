import React from "react";
import axios from "axios";
import { getStudentRequests } from "../../TutorScheduling";
const token = localStorage.getItem("token");

export async function ApproveRequest({ requestId }) {
  console.log("Request ID", requestId);
  console.log("Token", token);
  const response = await axios.post(
    `http://139.59.105.114/api/v1/sessionRequest/${requestId}/approve`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("Response in approve", response);
}
