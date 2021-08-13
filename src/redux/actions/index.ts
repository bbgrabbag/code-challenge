import { ISearchResultData } from "../reducers";
import {
  EActionTypes,
  IAppActionTypes,
  IAction,
  IActionCreator,
} from "./action-types";

export const getSearchResults: IActionCreator<
  IAppActionTypes[EActionTypes.GET_SEARCH_RESULTS]
> = (results: ISearchResultData[]) => {
  return {
    type: EActionTypes.GET_SEARCH_RESULTS,
    payload: { results },
  };
};

export const clearSearchResults: IActionCreator<
  IAppActionTypes[EActionTypes.CLEAR_SEARCH_RESULTS]
> = () => {
  return {
    type: EActionTypes.CLEAR_SEARCH_RESULTS,
    payload: {},
  };
};

export const pendingSearchResults: IActionCreator<
  IAppActionTypes[EActionTypes.PENDING_SEARCH_RESULTS]
> = () => {
  return {
    type: EActionTypes.PENDING_SEARCH_RESULTS,
    payload: {},
  };
};

export const idleSearchResults: IActionCreator<IAppActionTypes[EActionTypes.IDLE_SEARCH_RESULTS]> = (message: string) => {
    return {
        type: EActionTypes.IDLE_SEARCH_RESULTS,
        payload: {
            message
        }
    }
}

export const errorSearchResults: IActionCreator<IAppActionTypes[EActionTypes.ERROR_SEARCH_RESULTS]> = (message: string) => {
    return {
        type: EActionTypes.ERROR_SEARCH_RESULTS,
        payload:{
            message
        }
    }
}

export const actionCreators: Record<
  EActionTypes,
  IActionCreator<IAction<EActionTypes>>
> = {
  [EActionTypes.GET_SEARCH_RESULTS]: getSearchResults,
  [EActionTypes.CLEAR_SEARCH_RESULTS]: clearSearchResults,
  [EActionTypes.PENDING_SEARCH_RESULTS]: pendingSearchResults,
  [EActionTypes.IDLE_SEARCH_RESULTS]: idleSearchResults,
  [EActionTypes.ERROR_SEARCH_RESULTS]: errorSearchResults
};
