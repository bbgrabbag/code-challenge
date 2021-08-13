import { ESearchResultsStatus } from "../../redux/reducers";
import { useAppSelector } from "../../hooks";
import { SearchResultComponent } from "../search-result/SearchResult.component";

export const SearchResultsComponent: React.FunctionComponent = () => {
  const state = useAppSelector((state) => state);

  const renderList = () => (
    <div>
      <p>Displaying {state.searchResults.data.length} results that match your query:</p>
      <ul>
      {state.searchResults.data.map((r, i) => (
        <li key={i}>
          <SearchResultComponent result={r}/>
        </li>
      ))}
    </ul>
    </div>
  );

  const renderError = (message: string) => {
    return <p>{message}</p>;
  };

  const renderLoading = () => {
    return <p>...Searching</p>;
  };

  const renderIdle = (message: string) => { 
    return (<p>{message}</p>)
  }

  const render = () => {
    if (state.searchResults.status === ESearchResultsStatus.ERROR) {
      return renderError(state.searchResults.message);
    }
    if (state.searchResults.status === ESearchResultsStatus.PENDING) {
      return renderLoading();
    }
    if (state.searchResults.status === ESearchResultsStatus.IDLE) {
      return renderIdle(state.searchResults.message)
    }
    return renderList();
  };

  return <div>{render()}</div>;
};
