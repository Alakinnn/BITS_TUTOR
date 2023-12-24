import axios from "axios";
const token = localStorage.getItem("token");

export async function DenyRequest({ requestId }) {
  console.log("Request ID", requestId);
  const response = await axios.post(
    `http://139.59.105.114/api/v1/sessionRequest/${requestId}/deny`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
}
