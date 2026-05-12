import { combineReducers, configureStore } from "@reduxjs/toolkit";
import heroSlice from "./heroSlice";
import searchSlice from "./searchSlice";

const rootReducer = combineReducers({
  heroes: heroSlice,
  search: searchSlice
});

export default configureStore({
  reducer: rootReducer,
});
