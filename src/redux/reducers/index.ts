import { ISearchResultData, ISearchResultsStatus } from "../../api";
import { IReducer } from "./reducer-types";

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