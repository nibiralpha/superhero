import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { Hero, Powerstats } from "../Services/Heroes/HeroInterfaces";

const selectAllHeroes = (state: RootState) => state.heroes.list;
const selectFilters = (state: RootState) => state.search;

export const selectFilteredHeroes = createSelector(
  [selectAllHeroes, selectFilters],
  (heroes, filters) => {
    const {
      keyword,
      gender,
      alignment,
      intelligence,
      speed,
      power,
      durability,
    } = filters;

    const searchByName = (heroes: Hero[]): Hero[] => {
      return heroes.filter((hero) => {
        const heroLowerCase = hero.name.toLowerCase();
        const result = heroLowerCase.startsWith(keyword.toLowerCase());

        return result;
      });
    };

    const searchByGender = (heroes: Hero[]): Hero[] => {
      if (gender == "all" || gender == "") return heroes;

      return heroes.filter((hero) => {
        return hero.appearance.gender.toLowerCase() == gender.toLowerCase();
      });
    };

    const searchByAlignment = (heroes: Hero[]): Hero[] => {
      if (alignment == "all" || alignment == "") return heroes;

      return heroes.filter((hero) => {
        return (
          hero.biography.alignment.toLowerCase() == alignment.toLowerCase()
        );
      });
    };

    const searchByPowerState = (
      heroes: Hero[],
      name: keyof Powerstats,
      value: number[],
    ): Hero[] => {
      // if (value == "") {
      //   value = [0, 100];
      // }
      const [min, max] = value;

      return heroes.filter((hero) => {
        if (hero.powerstats[name] >= min && hero.powerstats[name] <= max) {
          return hero;
        }
      });
    };

    const filterHerores = (): Hero[] => {
      const filterData = [...heroes];

      const nameSearch = searchByName(filterData);
      const genderSearch = searchByGender(nameSearch);
      const alignmentSearch = searchByAlignment(genderSearch);

      const intelligenceSearch = searchByPowerState(
        alignmentSearch,
        "intelligence",
        intelligence,
      );
      const speedSearch = searchByPowerState(
        intelligenceSearch,
        "speed",
        speed,
      );
      const powerSearch = searchByPowerState(speedSearch, "power", power);
      const durabilitySearch = searchByPowerState(
        powerSearch,
        "durability",
        durability,
      );

      return durabilitySearch;
    };

    const filteredData = filterHerores();

    return filteredData;
  },
);
