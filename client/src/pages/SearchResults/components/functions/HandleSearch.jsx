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
  console.log(inputStr, minPrice, maxPrice, filterCriteria);
  const response = await axios.get(`${BASE_URL}/api/v1/tutor`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      query: inputStr,
      hourlyRate: `${minPrice}-${maxPrice}`,
      sortPrice: filterCriteria,
    },
  });

  console.log(response.data);
  setTutors(response.data);
};

export default HandleSearch;
