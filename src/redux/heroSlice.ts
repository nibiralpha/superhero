import { createSlice } from "@reduxjs/toolkit";

export const heroSlice = createSlice({
  name: "hero",
  initialState: {
    list: [],
    loading: false,
    error: false,
    errorResponse: {},
  },
  reducers: {
    startHeroLoading: (state, action) => {
      return { ...state, loading: action.payload };
    },
    heroData: (state, action) => {      
      return {...state, list: action.payload}
    }
  },
});

export const { startHeroLoading, heroData } = heroSlice.actions;
export default heroSlice.reducer;
