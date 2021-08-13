import { EActionTypes, IAppActionTypes, IAction, IActionCreator } from "./action-types";

// export const testActionCreator: IActionCreator<IAppActionTypes[EActionTypes.TEST]> = (foo: string) => {
//     return {
//         type: EActionTypes.TEST,
//         payload: {foo}
//     }
// }

export const actionCreators: Record<EActionTypes, IActionCreator<IAction<EActionTypes>>> = {
    // [EActionTypes.TEST]: testActionCreator,
}


