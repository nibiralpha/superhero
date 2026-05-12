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

      return true;
    });
  },
);
