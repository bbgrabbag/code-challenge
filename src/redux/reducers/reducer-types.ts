import { Reducer } from "@reduxjs/toolkit";
import { EActionTypes, IAppActionTypes } from "../actions/action-types";

export type IReducer<S> = Reducer<S, IAppActionTypes[EActionTypes]>;
