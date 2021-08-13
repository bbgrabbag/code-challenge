import { createStore, combineReducers } from "@reduxjs/toolkit";
import * as reducers from "./reducers/index";

export const store = createStore(
  combineReducers({
    searchResults: reducers.searchResultsReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
