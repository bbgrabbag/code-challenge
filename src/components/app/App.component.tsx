import React, { PropsWithChildren } from "react";
import { SearchBarComponent } from "../search-bar/SearchBar.component";
import { SearchResultsComponent } from "../search-results/SearchResults.component";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const AppComponent = () => {
  return (
    <Container>
      <Row as="header">
        <SearchBarComponent />
      </Row>
      <Row as="main">
        <SearchResultsComponent />
      </Row>
    </Container>
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
