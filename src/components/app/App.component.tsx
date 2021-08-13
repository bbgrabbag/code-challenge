import React, { PropsWithChildren } from "react";
import { SearchBarComponent } from "../search-bar/SearchBar.component";
import { SearchResultsComponent } from "../search-results/SearchResults.component";
import { Provider } from "react-redux";
import {store} from '../../redux/store';

export const AppComponent = () => {
  
  return (
    <div>
      <header>
        <SearchBarComponent />
      </header>
      <main>
        <SearchResultsComponent />
      </main>
    </div>
  );
};

export const AppContainer: React.FunctionComponent<PropsWithChildren<{}>> = (
  props
) => {
  return (
    <React.StrictMode>
      <Provider store={store}>{props.children}</Provider>
    </React.StrictMode>
  );
};
