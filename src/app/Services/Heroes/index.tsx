import { startHeroLoading, heroData, singleHero } from "@/src/redux/heroSlice";
import { getHero, getHeroes } from "../../Api/Heroes";

const fetchHeroes = () => {
  return async (dispatch) => {
    try {
      console.log("aaaaaaaaaaaaa");
      
      dispatch(startHeroLoading(true));
      const heroResponse = await getHeroes();
      const heroes = heroResponse.data;
      dispatch(heroData(heroes));
      dispatch(startHeroLoading(false));
    } catch (error) {
      console.log(error);
      // dispatch(stopHeroesLoading())
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

const getHeroDetail = (id) => {
  return async (dispatch) => {
    try {
      console.log("zzzzzzzzzzzzzzzz");
      
      dispatch(startHeroLoading(true));
      const heroResponse = await getHero(id);
      const hero = heroResponse.data;
      dispatch(singleHero(hero));
      dispatch(startHeroLoading(false));
    } catch (error) {
      console.log(error);
      // dispatch(stopHeroesLoading())
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export { fetchHeroes, getHeroDetail };
