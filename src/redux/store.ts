import { combineReducers, configureStore } from "@reduxjs/toolkit";
import heroSlice from "./heroSlice";
import searchSlice from "./searchSlice";

const rootReducer = combineReducers({
  heros: heroSlice,
  search: searchSlice
});

export default configureStore({
  reducer: rootReducer,
});
