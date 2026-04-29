import { combineReducers, configureStore } from "@reduxjs/toolkit";
import heroSlice from "./heroSlice";

const rootReducer = combineReducers({
  heros: heroSlice,
});

export default configureStore({
  reducer: rootReducer,
});
