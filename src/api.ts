import { API_URL, RESULTS_PER_PAGE } from "./config";
import { ISearchResultData } from "./redux/reducers";

export const apiClient = (() => {
  const defaultHeaders = {
    Authorization: `token ${process.env.REACT_APP_PAT}`,
  };

  const search = async (keyword: string): Promise<ISearchResultData[]> => {
    const response = await fetch(
      `${API_URL}/search/users?q=${keyword} in:login&per_page=${RESULTS_PER_PAGE}`,
      { headers: defaultHeaders }
    );
    if (response.status !== 200) throw new Error("There was a problem retrieving your results. Please try again");
    const json = await response.json();
    return json.items.map(
      (result: any): ISearchResultData => ({
        avatar_url: result.avatar_url,
        score: result.score,
        login: result.login,
        type: result.type,
        id: result.id,
      })
    );
  };

  return {
    search,
  };
})();
