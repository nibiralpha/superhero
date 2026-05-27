import { useSelector } from "react-redux";

const useHero = () => {
  const allHeroes = useSelector((state: any) => state.heroes);

  const heroesOnTheTeam = () => {
    const storedHeroes = localStorage.getItem("heroes");
    const data = storedHeroes ? JSON.parse(storedHeroes) : [];
    return data;
  };

  const getTeamMembersCount = () => {
    const heroes = heroesOnTheTeam();
    return heroes.length;
  };

  const isOnTeam = (hero) => heroesOnTheTeam().some((h) => h.id == hero.id);

  return { allHeroes, heroesOnTheTeam, getTeamMembersCount, isOnTeam };
};

export default useHero;
