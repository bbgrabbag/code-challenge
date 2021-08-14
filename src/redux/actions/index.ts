import { ISearchResultData } from "../reducers";
import {
  EActionTypes,
  IAppActionTypes,
} from "./action-types";

export const getSearchResults = (results: ISearchResultData[], message: string): IAppActionTypes[EActionTypes.GET_SEARCH_RESULTS] => {
  return {
    type: EActionTypes.GET_SEARCH_RESULTS,
    payload: { 
      results, 
      message
    },
  };
};

export const clearSearchResults = (): IAppActionTypes[EActionTypes.CLEAR_SEARCH_RESULTS] => {
  return {
    type: EActionTypes.CLEAR_SEARCH_RESULTS,
    payload: {},
  };
};

export const pendingSearchResults = (message: string): IAppActionTypes[EActionTypes.PENDING_SEARCH_RESULTS] => {
  return {
    type: EActionTypes.PENDING_SEARCH_RESULTS,
    payload: {
      message,
    },
  };
};

export const idleSearchResults = (message: string): IAppActionTypes[EActionTypes.IDLE_SEARCH_RESULTS] => {
  return {
    type: EActionTypes.IDLE_SEARCH_RESULTS,
    payload: {
      message,
    },
  };
};

export const errorSearchResults = (message: string): IAppActionTypes[EActionTypes.ERROR_SEARCH_RESULTS] => {
  return {
    type: EActionTypes.ERROR_SEARCH_RESULTS,
    payload: {
      message,
    },
  };
};

export const actionCreators = {
  [EActionTypes.GET_SEARCH_RESULTS]: getSearchResults,
  [EActionTypes.CLEAR_SEARCH_RESULTS]: clearSearchResults,
  [EActionTypes.PENDING_SEARCH_RESULTS]: pendingSearchResults,
  [EActionTypes.IDLE_SEARCH_RESULTS]: idleSearchResults,
  [EActionTypes.ERROR_SEARCH_RESULTS]: errorSearchResults,
};
