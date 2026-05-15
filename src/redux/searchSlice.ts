import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    keyword: "",
    gender: "",
    alignment: "",
    powerstate: "",
    intelligence: "",
    speed: "",
    power: "",
    durability: "",
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
      state.keyword = "";
      state.gender = "";
      state.alignment = "";
      state.powerstate = "";
      state.intelligence = "";
      state.speed = "";
      state.power = "";
      state.durability = "";
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
