import React from 'react'
import axios from 'axios'

function CreateSession() {
    const printAllSessions = async () => {
        const response = await axios.get(`http://139.59.105.114/api/v1/session`);
        console.log(response);
    }
    const createSession = async () => {
        const response = await axios.post(`http://139.59.105.114/api/v1/session`, {
            
        "title": "abc",
        "description": "hoc react",
        "tutorId": "656f614ac37e79091ef39474",
        "studentId": "656f616650d0394bfa76feb0",
        "startTime": "2024-02-25T10:00:00",
        "endTime": "2024-02-25T12:00:00",
        "timezone": "Asia/Saigon"
            
        });
        console.log(response);
    }
    // createSession();
    // printAllSessions();
  return (
    <div>
      <button onClick={createSession}>Create Session</button>
      <button onClick={printAllSessions}>Print All Sessions</button>
    </div>
  )
}

export default CreateSession