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
      powerstate,
      intelligence,
      speed,
      power,
      durability,
    } = filters;

    return heroes.filter((hero) => {
      //search with name
      if (keyword && !hero.name.toLowerCase().includes(keyword.toLowerCase()))
        return false;

      //search with gender
      if (
        gender &&
        hero.appearance.gender.toLowerCase() !== gender.toLowerCase()
      )
        return false;

      //search with alignment
      if (
        alignment &&
        hero.biography?.alignment?.toLowerCase().trim() !==
          alignment.toLowerCase().trim()
      )
        return false;

      //search with intelligence
      if (
        hero.powerstats?.intelligence < intelligence[0] ||
        hero.powerstats?.intelligence > intelligence[1]
      ) {
        return false;
      }

      //Search with speed
      if (
        hero.powerstats?.speed < speed[0] ||
        hero.powerstats?.speed > speed[1]
      ) {
        return false;
      }

      // if (power && hero.powerstats.power < power) return false;
      // if (durability && hero.powerstats.durability < durability) return false;

      return true;
    });
  },
);
