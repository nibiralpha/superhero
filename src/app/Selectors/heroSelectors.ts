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
          hero.powerstats[name] > value[0] &&
          hero.powerstats[name] < value[1]
        ) {
          return hero;
        }
        // return data;
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

      return intelligenceSearch;
    };

    // return heroes.filter((hero) => {
    //   //search with name
    //   console.log("baaaaaaal");

    //   if (keyword && !hero.name.toLowerCase().includes(keyword.toLowerCase())) {
    //     console.log("============ search");

    //     return false;
    //   }

    //   //search with gender
    //   if (
    //     gender &&
    //     hero.appearance.gender.toLowerCase() !== gender.toLowerCase()
    //   ) {
    //     console.log("================= gender");
    //     return false;
    //   }

    //   //search with alignment
    //   if (
    //     alignment &&
    //     hero.biography?.alignment?.toLowerCase().trim() !==
    //       alignment.toLowerCase().trim()
    //   ) {
    //     console.log("============== alignment");
    //     return false;
    //   }

    //   //search with intelligence
    //   if (
    //     hero.powerstats?.intelligence < intelligence[0] ||
    //     hero.powerstats?.intelligence > intelligence[1]
    //   ) {
    //     console.log("================= intelligence");
    //     return false;
    //   }

    //   //Search with speed
    //   if (
    //     hero.powerstats?.speed < speed[0] ||
    //     hero.powerstats?.speed > speed[1]
    //   ) {
    //     console.log("============= speed");
    //     return false;
    //   }

    //   //Search with power
    //   if (
    //     hero.powerstats?.power < power[0] ||
    //     hero.powerstats?.power > power[1]
    //   ) {
    //     console.log("=================== power");
    //     return false;
    //   }

    //   //Search with durability
    //   if (
    //     hero.powerstats?.durability < durability[0] ||
    //     hero.powerstats?.durability > durability[1]
    //   ) {
    //     console.log("================== durability");
    //     return false;
    //   }

    //   return true;
    // });
    const filteredData = filterHerores();
    console.log(filteredData);

    return filteredData;
    // return [];
  },
);
