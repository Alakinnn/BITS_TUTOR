import React from 'react'
import axios from 'axios'

const tutorId ='656f614ac37e79091ef39474'

function PrintAllTutorSessions() {
    
    const printAllTutorSessions = async () => {
        const response = await axios.get(`http://139.59.105.114/api/v1/session/tutor/${tutorId}`)
        console.log(response);
        return response.data[0]._id
    }
    return printAllTutorSessions()
    
}

export default PrintAllTutorSessions