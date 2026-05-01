import axios from "axios";
import { BASEURL } from "../../Constant/Api";

const getHeroes = async () => {
  const response = await axios.get(`${BASEURL}/superhero-api/api/all.json`);
  return response;
};

const getHero = async (id) => {
  const response = await axios.get(`${BASEURL}/superhero-api/api/id/` + id + `.json`);
  return response;
};

export { getHeroes, getHero };
