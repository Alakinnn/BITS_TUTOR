import React from 'react'
import axios from 'axios'


export async function getTutorSessions (tutorId) {
  const response = await axios.get(`http://139.59.105.114/api/v1/session?tutorId=${tutorId}`);
  // console.log(response.data);
  return response.data;
}
export async function getStudentRequests (tutorId) {
  const response = await axios.get(`http://139.59.105.114/api/v1/sessionRequest`, {params: {tutorId: `${tutorId}`}});
  return response.data;
}