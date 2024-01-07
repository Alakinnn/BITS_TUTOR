import { BASE_URL } from "../../../App";
import axios from "axios";

const registerUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, user, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 200) {
      return null;
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const loginUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      return null;
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { registerUser, loginUser };
