import { createStore, combineReducers } from "@reduxjs/toolkit";
import { searchResultsReducer } from "./reducers/index";

export const store = createStore(
  combineReducers({
    searchResults: searchResultsReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
