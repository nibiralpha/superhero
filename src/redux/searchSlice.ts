import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  keyword: string;
  gender: string;
  alignment: string;
  intelligence: number[];
  speed: number[];
  power: number[];
  durability: number[];
}

const defaultPowerStat = [0, 100];

const initialState: SearchState = {
  keyword: "",
  gender: "",
  alignment: "",
  // powerstate: "",
  intelligence: defaultPowerStat,
  speed: defaultPowerStat,
  power: defaultPowerStat,
  durability: defaultPowerStat,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchBykeyword: (state, action: PayloadAction<string>) => {
      return { ...state, keyword: action.payload };
    },
    searchByGender: (state, action: PayloadAction<string>) => {
      return { ...state, gender: action.payload };
    },
    searchByAlignment: (state, action: PayloadAction<string>) => {
      return { ...state, alignment: action.payload };
    },
    searchByIntelligence: (state, action: PayloadAction<number[]>) => {
      return { ...state, intelligence: action.payload };
    },
    searchBySpeed: (state, action: PayloadAction<number[]>) => {
      return { ...state, speed: action.payload };
    },
    searchByPower: (state, action: PayloadAction<number[]>) => {
      return { ...state, power: action.payload };
    },
    searchByDurability: (state, action: PayloadAction<number[]>) => {
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
