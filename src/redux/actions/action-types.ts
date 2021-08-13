import { Action } from "@reduxjs/toolkit";

export const enum EActionTypes {
//   TEST = "TEST",
}

export interface IAction<T extends EActionTypes = EActionTypes, P = {}> extends Action<T> {
  type: T;
  payload: P;
}

export type IActionCreator<A extends IAction> = (...args: any[]) => A | Promise<A>

export interface IAppActionTypes
  extends Record<EActionTypes, IAction<EActionTypes>> {
//   [EActionTypes.TEST]: IAction<EActionTypes.TEST, { foo: string }>;
}
