import React from "react";
import axios from "axios";
const token = localStorage.getItem("token");
import { BASE_URL } from "../../../App";

export async function ApproveRequest({ requestId }) {
  // console.log("Request ID", requestId);
  // console.log("Token", token);
  const response = await axios.post(
    `${BASE_URL}/sessionRequest/${requestId}/approve`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("Response in approve", response);
}
