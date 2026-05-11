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
  },
});

export const { searchBykeyword, searchByGender, searchByAlignment } =
  searchSlice.actions;
export default searchSlice.reducer;
