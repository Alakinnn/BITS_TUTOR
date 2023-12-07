import axios from 'axios'
import React from 'react'

function LoginTest() {
    const printAllSessions = async () => {
        const response = await axios.post(`http://139.59.105.114/api/v1/auth/login`,{
            "username": "bob12345",
            "password": "12345"
        })
        console.log(response);
    }
    printAllSessions();
    
  return (
    <div>LoginTest</div>
  )
}

export default LoginTest