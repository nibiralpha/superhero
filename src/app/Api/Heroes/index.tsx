import axios from "axios";
import { BASEURL } from "../../Constant/Api";

const getHeroes = async () => {
  const response = await axios.get(`${BASEURL}/superhero-api/api/all.json`);
  return response;
};

export { getHeroes };
