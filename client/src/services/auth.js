import axios from "axios";

const BASEURL = "http://139.59.105.114/api/users";

const validateUser = async (token) => {
    try {
        const response = await axios.get(`${BASEURL}/auth/validate`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status !== 200) {
            return null;
        }

        return response.data;
    } catch (error) {
        return null;
    }
};

export default validateUser;
