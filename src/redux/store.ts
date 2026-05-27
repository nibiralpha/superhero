import { combineReducers, configureStore } from "@reduxjs/toolkit";
import heroSlice from "./heroSlice";
import searchSlice from "./searchSlice";
import settingSlice from "./settingSlice";

const rootReducer = combineReducers({
  heroes: heroSlice,
  search: searchSlice,
  filter: settingSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
