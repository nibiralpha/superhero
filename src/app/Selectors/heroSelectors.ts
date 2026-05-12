import { createSelector } from '@reduxjs/toolkit';

// 1. Grab the raw data and the filter values from the store
const selectAllHeroes = (state) => state.heros.list;
const selectFilters = (state) => state.search;

export const selectFilteredHeroes = createSelector(
  [selectAllHeroes, selectFilters],
  (heroes, filters) => {
    const { keyword, gender, alignment, powerstate, intelligence, speed, power, durability } = filters;

    return heroes.filter((hero) => {
      // Keyword Filter (Name)
      if (keyword && !hero.name.toLowerCase().includes(keyword.toLowerCase())) return false;

      // Dropdown Filters (Exact Match)
      if (gender && hero.appearance.gender !== gender) return false;
      if (alignment && hero.biography.alignment !== alignment) return false;

      // Powerstats (Numerical - assuming hero.powerstats object)
      // We check if the hero stat is greater than or equal to the filter value
      if (powerstate && hero.powerstats.power < powerstate) return false;
      if (intelligence && hero.powerstats.intelligence < intelligence) return false;
      if (speed && hero.powerstats.speed < speed) return false;
      if (power && hero.powerstats.power < power) return false;
      if (durability && hero.powerstats.durability < durability) return false;

      return true;
    });
  }
);
