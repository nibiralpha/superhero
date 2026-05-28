import { createSlice } from "@reduxjs/toolkit";

const defaultPowerStat = [0, 100];

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    keyword: "",
    gender: "",
    alignment: "",
    powerstate: "",
    intelligence: defaultPowerStat,
    speed: defaultPowerStat,
    power: defaultPowerStat,
    durability: defaultPowerStat,
  },
  reducers: {
    searchBykeyword: (state, action) => {
      return { ...state, keyword: action.payload };
    },
    searchByGender: (state, action) => {
      return { ...state, gender: action.payload };
    },
    searchByAlignment: (state, action) => {
      return { ...state, alignment: action.payload };
    },
    searchByIntelligence: (state, action) => {
      return { ...state, intelligence: action.payload };
    },
    searchBySpeed: (state, action) => {
      return { ...state, speed: action.payload };
    },
    searchByPower: (state, action) => {
      return { ...state, power: action.payload };
    },
    searchByDurability: (state, action) => {
      return { ...state, durability: action.payload };
    },
    clearFilter: (state, action) => {
      return {
        ...state,
        keyword: "",
        gender: "",
        alignment: "",
        powerstate: "",
        intelligence: defaultPowerStat,
        speed: defaultPowerStat,
        power: defaultPowerStat,
        durability: defaultPowerStat,
      };
    },
  },
});

export const {
  searchBykeyword,
  searchByGender,
  searchByAlignment,
  searchByIntelligence,
  searchBySpeed,
  searchByPower,
  searchByDurability,
  clearFilter,
} = searchSlice.actions;
export default searchSlice.reducer;
