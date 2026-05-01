import { startHeroLoading, heroData } from "@/src/redux/heroSlice";
import { getHeroes } from "../../Api/Heroes";

const fetchHeroes = () => {
  return async (dispatch) => {
    try {
      dispatch(startHeroLoading(true));
      const heroResponse = await getHeroes();
      const heroes = heroResponse.data;
      dispatch(heroData(heroes));
      dispatch(startHeroLoading(false));
    } catch (error) {
      console.log(error);
      // dispatch(stopUserListLoading())
      // dispatch(getAllUserFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export { fetchHeroes };
