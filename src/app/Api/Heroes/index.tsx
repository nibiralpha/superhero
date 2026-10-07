import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { Hero } from "@Services/Heroes/HeroInterfaces";

const getHeroes = async (): Promise<AxiosResponse<Hero[]>> => {
  const response = await axios.get<Hero[]>(`${BASEURL}/superhero-api/api/all.json`);
  return response;
};

const getHero = async (id: number): Promise<AxiosResponse<Hero>> => {
  const response = await axios.get<Hero>(`${BASEURL}/superhero-api/api/id/` + id + `.json`);
  return response;
};

export { getHeroes, getHero };
