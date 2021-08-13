import { render } from '@testing-library/react';
import { ReactElement } from "react";
import { AppContainer } from "./components/app/App.component";

export type CustomRender = <U extends ReactElement>(
  ui: U
) => ReturnType<typeof render>;
export const customRender: CustomRender = (ui) => {
  return render(ui, { wrapper: AppContainer });
};
