import { useSelector } from "react-redux";
import { Hero } from "../Services/Heroes/HeroInterfaces";
import { RootState } from "@/src/redux/store";

const useHero = () => {
  const allHeroes = useSelector((state: RootState) => state.heroes);

  const heroesOnTheTeam = (): Hero[] => {
    if (typeof window === "undefined") {
      return [];
    }
    const storedHeroes = localStorage.getItem("heroes");
    const data = storedHeroes ? JSON.parse(storedHeroes) : [];
    return data;
  };

  const getTeamMembersCount = (): number => {
    return heroesOnTheTeam().length;
  };

  const isOnTeam = (hero: Hero): boolean =>
    heroesOnTheTeam().some((h) => h.id == hero.id);

  const covertToArray = (data: string | number[]) => {
    if (Array.isArray(data)) {
      return data.map(Number);
    }

    return data.split(",").map(Number);
  };

  return {
    allHeroes,
    heroesOnTheTeam,
    getTeamMembersCount,
    isOnTeam,
    covertToArray,
  };
};

export default useHero;
