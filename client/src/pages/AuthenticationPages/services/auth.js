const BASEURL = "http://139.59.105.114/api/v1";
import axios from "axios";

const registerUser = async (user) => {
    try {
        const response = await axios.post(`${BASEURL}/auth/register`, user, {
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

export { registerUser };
