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
      return { ...state, loading: true };
    },
  },
});

export const { startHeroLoading } = heroSlice.actions;
export default heroSlice.reducer;
