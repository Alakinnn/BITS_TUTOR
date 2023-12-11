import React from 'react'
import axios from 'axios'

const studentId ='656f616650d0394bfa76feb0'

export async function getStudentSessions () {
  const response = await axios.get(`http://139.59.105.114/api/v1/session?tutorId=${studentId}`);
  // console.log(response.data);
  return response.data;
}
export async function getCurrentRequests () {
  const response = await axios.get(`http://139.59.105.114/api/v1/sessionRequest`, {params: {studentId: `${studentId}`}});
  return response.data;
}