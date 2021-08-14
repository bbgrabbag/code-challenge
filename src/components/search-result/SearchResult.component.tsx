import { ISearchResultData } from "../../redux/reducers";
import Card from "react-bootstrap/Card";

export interface ISearchResultComponentProps {
  result: ISearchResultData;
}

export const SearchResultComponent: React.FunctionComponent<ISearchResultComponentProps> =
  (props) => {
    return (
      <Card className="margin-v hoverable">
        <Card.Header>
          <Card.Img
            variant="top"
            src={props.result.avatar_url}
            alt="user-avatar"
          />
          <Card.Title>{props.result.login}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle>{props.result.type}</Card.Subtitle>
          <Card.Text>Search Score: {props.result.score}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
