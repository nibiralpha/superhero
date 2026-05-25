import { useSelector } from "react-redux";

const useHero = () => {
  const heroesOnTheTeam = () => {
    const storedHeroes = localStorage.getItem("heroes");
    const data = storedHeroes ? JSON.parse(storedHeroes) : [];
    return data;
  };

  const getTeamMembersCount = () => {
    const heroes = heroesOnTheTeam();
    return heroes.length;
  };

  const allHeroes = useSelector((state: any) => state.heroes);

  return { allHeroes, heroesOnTheTeam, getTeamMembersCount };
};

export default useHero;
