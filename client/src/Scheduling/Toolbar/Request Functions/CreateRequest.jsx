import React from 'react'
import axios from 'axios'


export async function CreateRequest(newRequest) {
    console.log(newRequest);
    const inputRequest = newRequest.request;
  const response = await axios.post(`http://139.59.105.114/api/v1/sessionRequest`, newRequest);
    console.log(response);
    window.location.href = "/scheduleInterface";
}

