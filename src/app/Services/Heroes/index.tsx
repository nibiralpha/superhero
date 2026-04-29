import { getHeroes } from "../../Api/Heroes";

const fetchHeroes = () => {
  return async () => {
    try {
      const heroResponse = await getHeroes();
      // return Promise.resolve(b);
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
