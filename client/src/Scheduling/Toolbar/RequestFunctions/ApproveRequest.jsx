import React from 'react'
import axios from 'axios'

export async function ApproveRequest(requestId) {
    const response = await axios.post(`http://139.59.105.114/api/v1/sessionRequest/${requestId}/approve`);
    console.log(response);
}

