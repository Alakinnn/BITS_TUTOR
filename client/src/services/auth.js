import axios from "axios";

import { BASE_URL } from "../App";

const validateUser = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/validate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      return null;
    }

    return response.data.user;
  } catch (error) {
    return null;
  }
};

export default validateUser;
