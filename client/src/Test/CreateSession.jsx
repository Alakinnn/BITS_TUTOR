import React from 'react'

function CreateSession() {
    const printAllSessions = async () => {
        const response = await axios.get(`http://139.59.105.114/api/v1/session`);
        console.log(response);
    }
    const createSession = async () => {
        const response = await axios.post(`http://139.59.105.114/api/v1/session`, {
            
            "tutorId": "65697c9779523e566d10c967",
            "studentId": "65697d1479523e566d10c968",
            "tutorEmail": "mastermobo101@gmail.com",
            "studentEmail": "s3978482@rmit.edu.vn",
            "topic": "test",
            "startTime": "2024-02-25T12:00:00",
            "timezone": "Asia/Saigon",
            "duration": "5"
            
        })
    }
    createSession();
    printAllSessions();
  return (
    <div>CreateSession</div>
  )
}

export default CreateSession