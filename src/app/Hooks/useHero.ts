import { useSelector } from "react-redux";
import { Hero } from "../Services/Heroes/HeroInterfaces";
import { RootState } from "@/src/redux/store";

const useHero = () => {
  const allHeroes = useSelector((state: RootState) => state.heroes);

  const heroesOnTheTeam = (): Hero[] => {
    const storedHeroes = localStorage.getItem("heroes");
    const data = storedHeroes ? JSON.parse(storedHeroes) : [];
    return data;
  };

  const getTeamMembersCount = (): number => {
    const heroes = heroesOnTheTeam();
    return heroes.length;
  };

  const isOnTeam = (hero: Hero): boolean =>
    heroesOnTheTeam().some((h) => h.id == hero.id);

  return { allHeroes, heroesOnTheTeam, getTeamMembersCount, isOnTeam };
};

export default useHero;
