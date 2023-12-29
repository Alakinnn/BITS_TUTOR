import { BASE_URL } from "../../../../App";
import axios from "axios";
const token = localStorage.getItem("token");

const HandleSearch = async ({
  inputStr,
  minPrice,
  maxPrice,
  filterCriteria,
  setTutors,
}) => {
  try {
    console.log(inputStr, minPrice, maxPrice, filterCriteria);
    const response = await axios.get(`${BASE_URL}/tutor`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        query: inputStr,
        hourlyRate: `${minPrice}-${maxPrice}`,
        sortPrice: filterCriteria,
      },
    });

    setTutors(response.data);
  } catch (error) {
    console.error("Error handling search:", error);
  }
};

export default HandleSearch;
