import React from "react";
import axios from "axios";
const token = localStorage.getItem("token");

export async function CreateRequest({
  newRequest,
  setRequest,
  defaultRequest,
}) {
  const response = await axios.post(
    `http://139.59.105.114/api/v1/sessionRequest`,
    newRequest,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
  setRequest(defaultRequest);
}
