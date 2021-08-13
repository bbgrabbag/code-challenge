import { IReducer } from "./reducer-types";

export interface ISearchResultData {
  avatar_url: string;
  login: string;
  type: string;
  score: number;
}

export enum ISearchResultsStatus {
  PENDING = "PENDING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  IDLE = "IDLE",
}


export interface ISearchResultsState {
  status: ISearchResultsStatus;
  message: string;
  data: ISearchResultData[];
}

const initialSearchResultsState: ISearchResultsState = {
  status: ISearchResultsStatus.IDLE,
  message: "No results to display",
  data: [],
};

export const searchResultsReducer: IReducer<ISearchResultsState> = (
  state = initialSearchResultsState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};