import { EActionTypes } from "../actions/action-types";
import { IReducer } from "./reducer-types";

export interface ISearchResultData {
  id: number;
  avatar_url: string;
  login: string;
  type: string;
  score: number;
}

export enum ESearchResultsStatus {
  PENDING = "PENDING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  IDLE = "IDLE",
}

export interface ISearchResultsState {
  status: ESearchResultsStatus;
  message: string;
  data: ISearchResultData[];
}

const initialSearchResultsState: ISearchResultsState = {
  status: ESearchResultsStatus.IDLE,
  message: "No results to display",
  data: [],
};

export const searchResultsReducer: IReducer<ISearchResultsState> = (
  state = initialSearchResultsState,
  action
) => {
  switch (action.type) {
    case EActionTypes.GET_SEARCH_RESULTS:
      return {
        ...state,
        data: action.payload.results,
        status: ESearchResultsStatus.SUCCESS,
      };
    case EActionTypes.CLEAR_SEARCH_RESULTS:
      return initialSearchResultsState;
    case EActionTypes.PENDING_SEARCH_RESULTS:
      return {
        ...state,
        status: ESearchResultsStatus.PENDING,
      };
    case EActionTypes.IDLE_SEARCH_RESULTS:
      return {
        ...state,
        status: ESearchResultsStatus.IDLE,
        message: action.payload.message,
      };
    case EActionTypes.ERROR_SEARCH_RESULTS:
      return {
        ...state,
        data: [],
        status: ESearchResultsStatus.ERROR,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
