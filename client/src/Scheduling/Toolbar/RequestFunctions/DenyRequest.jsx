import axios from "axios";
import { BASE_URL } from "../../../App";
const token = localStorage.getItem("token");

export async function DenyRequest({ requestId }) {
  console.log("Request ID", requestId);
  const response = await axios.post(
    `${BASE_URL}/sessionRequest/${requestId}/deny`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
}
