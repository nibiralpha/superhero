import { combineReducers, configureStore } from "@reduxjs/toolkit";
import heroSlice from "./heroSlice";
import searchSlice from "./searchSlice";
import settingSlice from "./settingSlice";

const rootReducer = combineReducers({
  heroes: heroSlice,
  search: searchSlice,
  filter: settingSlice,
});

export default configureStore({
  reducer: rootReducer,
});
