import { Action } from "@reduxjs/toolkit";
import { ISearchResultData } from "../reducers";

export const enum EActionTypes {
  GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS",
  CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS",
  PENDING_SEARCH_RESULTS = "PENDING_SEARCH_RESULTS",
  IDLE_SEARCH_RESULTS = "IDLE_SEARCH_RESULTS",
  ERROR_SEARCH_RESULTS = "ERROR_SEARCH_RESULTS",
}

export interface IAction<T extends EActionTypes = EActionTypes, P = {}>
  extends Action<T> {
  type: T;
  payload: P;
}

// export type IActionCreator<A extends IAction> = (...args: any[]) => A;

export interface IAppActionTypes
  extends Record<EActionTypes, IAction<EActionTypes>> {
  [EActionTypes.GET_SEARCH_RESULTS]: IAction<
    EActionTypes.GET_SEARCH_RESULTS,
    { results: ISearchResultData[]; message: string }
  >;
  [EActionTypes.CLEAR_SEARCH_RESULTS]: IAction<EActionTypes.CLEAR_SEARCH_RESULTS>;
  [EActionTypes.PENDING_SEARCH_RESULTS]: IAction<
    EActionTypes.PENDING_SEARCH_RESULTS,
    {
      message: string;
    }
  >;
  [EActionTypes.IDLE_SEARCH_RESULTS]: IAction<
    EActionTypes.IDLE_SEARCH_RESULTS,
    {
      message: string;
    }
  >;
  [EActionTypes.ERROR_SEARCH_RESULTS]: IAction<
    EActionTypes.ERROR_SEARCH_RESULTS,
    {
      message: string;
    }
  >;
}
