import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SettingState {
  showFilter: boolean;
}

const initialState: SettingState = {
  showFilter: false,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<boolean>) => {
      return { ...state, showFilter: action.payload };
    },
  },
});

export const { setFilter } = settingSlice.actions;
export default settingSlice.reducer;
