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

    const searchByName = (heroes: Hero[]) => {
      return heroes.filter((hero) => {
        hero.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
    };

    const searchByGender = (heroes: Hero[]) => {
      if (gender == "all" || gender == "") return heroes;

      return heroes.filter((hero) => {
        return hero.appearance.gender.toLowerCase() == gender.toLowerCase();
      });
    };

    const searchByAlignment = (heroes: Hero[]) => {
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
      value: [number, number] | string,
    ) => {
      if (value == "") {
        value = [0, 100];
      }
      return heroes.filter((hero) => {
        if (
          hero.powerstats[name] >= value[0] &&
          hero.powerstats[name] <= value[1]
        ) {
          return hero;
        }
      });
    };

    const filterHerores = () => {
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
