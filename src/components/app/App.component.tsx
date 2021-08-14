import React, { PropsWithChildren } from "react";
import { SearchBarComponent } from "../search-bar/SearchBar.component";
import { SearchResultsComponent } from "../search-results/SearchResults.component";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import github_logo from '../../assets/images/github-logo.png'

export const AppComponent = () => {
  return (
    <Container>
      <Row as="header">
        <Col xs={12}className=".flex-align-ch flex margin-v">
          <Image src={github_logo} className="logo-sm"/>
        </Col>
        <Col xs={12}><SearchBarComponent /></Col>
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
