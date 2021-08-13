import { Reducer } from "@reduxjs/toolkit";
import { IAppActionTypes } from "../actions/action-types";

export type IReducer<S> = Reducer<S,IAppActionTypes[keyof IAppActionTypes]>   