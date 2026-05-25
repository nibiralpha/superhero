import { useSelector } from "react-redux";

const useHero = () => {
  const heroesOnTheTeam = () => {
    const storedHeroes = localStorage.getItem("heroes");
    const data = storedHeroes ? JSON.parse(storedHeroes) : [];
    return data;
  };
  const allHeroes = useSelector((state: any) => state.heroes);

  return { allHeroes, heroesOnTheTeam };
};

export default useHero;
