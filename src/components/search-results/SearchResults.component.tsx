import { ESearchResultsStatus } from "../../redux/reducers";
import { useAppSelector } from "../../hooks";
import { SearchResultComponent } from "../search-result/SearchResult.component";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const SearchResultsComponent: React.FunctionComponent = () => {
  const state = useAppSelector((state) => state);

  const renderList = () => {
    switch (state.searchResults.status) {
      case ESearchResultsStatus.SUCCESS:
        return (
          <Container data-testid="search-results-list">
            <Row>
              {state.searchResults.data.map((r, i) => (
                <Col xs={{span: 10, offset: 1}} sm={{span: 6, offset: 0}} lg={3} key={i}>
                  <SearchResultComponent result={r} />
                </Col>
              ))}
            </Row>
          </Container>
        );
      case ESearchResultsStatus.PENDING:
        return (
          <Container className="flex flex-align-ch flex-align-cv">
            <Spinner animation="border" />
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <Container data-testid="search-results-component">
      <p data-testid="results-status-text" className="italic font-sm">
        {state.searchResults.message}
      </p>
      {renderList()}
    </Container>
  );
};
