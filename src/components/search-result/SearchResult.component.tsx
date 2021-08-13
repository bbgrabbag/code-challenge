import { ISearchResultData } from "../../redux/reducers"

export interface ISearchResultComponentProps {
    result: ISearchResultData;
}

export const SearchResultComponent: React.FunctionComponent<ISearchResultComponentProps> = (props) => {
    return (
        <div>
            <h5>User: {props.result.login}</h5>
            <p>Type: {props.result.type}</p>
            <p>Search Score: {props.result.score}</p>
            <img src={props.result.avatar_url} alt="user-avatar"></img>
        </div>
    )
}