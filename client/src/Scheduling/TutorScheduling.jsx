import React from 'react'
import axios from 'axios'

const tutorId ='656f614ac37e79091ef39474'

export async function getTutorSessions () {
  const response = await axios.get(`http://139.59.105.114/api/v1/session?tutorId=${tutorId}`);
  // console.log(response.data);
  return response.data;
}
export async function getStudentRequests () {
  const response = await axios.get(`http://139.59.105.114/api/v1/sessionRequest`, {params: {tutorId: `${tutorId}`}});
  return response.data;
}