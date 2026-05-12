import { createSlice } from "@reduxjs/toolkit";

export const heroSlice = createSlice({
  name: "hero",
  initialState: {
    list: [],
    searchResult: [],
    details: {},
    loading: false,
    error: false,
    errorResponse: {},
  },
  reducers: {
    startHeroLoading: (state, action) => {
      return { ...state, loading: action.payload };
    },
    heroData: (state, action) => {
      return { ...state, list: action.payload };
    },
    searchResult: (state, action) => {
      return { ...state, searchResult: action.payload };
    },
    singleHero: (state, action) => {
      return { ...state, details: action.payload };
    },
  },
});

export const { startHeroLoading, heroData, singleHero, searchResult } = heroSlice.actions;
export default heroSlice.reducer;
