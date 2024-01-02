import React from "react";
import axios from "axios";
import { BASE_URL } from "../../../App";
const token = localStorage.getItem("token");

export async function CreateRequest({
  newRequest,
  setRequest,
  defaultRequest,
}) {
  const response = await axios.post(`${BASE_URL}/sessionRequest`, newRequest, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  setRequest(defaultRequest);
}
