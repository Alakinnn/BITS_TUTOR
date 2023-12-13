import axios from 'axios'

export async function DenyRequest(requestId) {
    const response = await axios.post(`http://139.59.105.114/api/v1/sessionRequest/${requestId}/deny`);
    console.log(response);
}