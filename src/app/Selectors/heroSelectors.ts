import { createSelector } from "@reduxjs/toolkit";

const selectAllHeroes = (state) => state.heroes.list;
const selectFilters = (state) => state.search;

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

    const searchByName = (heroes) => {
      return heroes.filter((hero) => {
        let heroLowerCase = hero.name.toLowerCase();
        let result = heroLowerCase.startsWith(keyword.toLowerCase());

        return result;
      });
    };

    const searchByGender = (heroes) => {
      if (gender == "all" || gender == "") return heroes;

      return heroes.filter((hero) => {
        return hero.appearance.gender.toLowerCase() == gender.toLowerCase();
      });
    };

    const searchByAlignment = (heroes) => {
      if (alignment == "all" || alignment == "") return heroes;

      return heroes.filter((hero) => {
        return (
          hero.biography.alignment.toLowerCase() == alignment.toLowerCase()
        );
      });
    };

    const searchByPowerState = (heroes, name, value) => {
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
      let filterData = [...heroes];

      let nameSearch = searchByName(filterData);
      let genderSearch = searchByGender(nameSearch);
      let alignmentSearch = searchByAlignment(genderSearch);

      let intelligenceSearch = searchByPowerState(
        alignmentSearch,
        "intelligence",
        intelligence,
      );
      let speedSearch = searchByPowerState(intelligenceSearch, "speed", speed);
      let powerSearch = searchByPowerState(speedSearch, "power", power);
      let durabilitySearch = searchByPowerState(
        powerSearch,
        "durability",
        durability,
      );
    
      return durabilitySearch;
    };

    const filteredData = filterHerores();
    // console.log(filteredData);

    return filteredData;
  },
);
