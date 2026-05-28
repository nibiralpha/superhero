import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeroState, Hero } from "../app/Services/Heroes/HeroInterfaces";

const initialState: HeroState = {
  list: [],
  details: {},
  loading: false,
  error: false,
  errorResponse: {},
};

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    startHeroLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
    heroData: (state, action: PayloadAction<Hero[]>) => {
      return { ...state, list: action.payload };
    },
    singleHero: (state, action: PayloadAction<Hero>) => {
      return { ...state, details: action.payload };
    },
  },
});

export const { startHeroLoading, heroData, singleHero } = heroSlice.actions;
export default heroSlice.reducer;
