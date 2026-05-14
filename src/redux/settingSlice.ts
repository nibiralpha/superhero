import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    showFilter: false,
  },
  reducers: {
    setFilter: (state, action) => {
      return { ...state, showFilter: action.payload };
    },
  },
});

export const { setFilter } = settingSlice.actions;
export default settingSlice.reducer;
