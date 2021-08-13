import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { AppContainer } from "./components/app/App.component";
import { ISearchResultData } from "./redux/reducers";

export type CustomRender = <U extends ReactElement>(
  ui: U
) => ReturnType<typeof render>;
export const customRender: CustomRender = (ui) => {
  return render(ui, { wrapper: AppContainer });
};

export const mockAPI = (() => {

  const generateID = (() => {
    let id = 0;
    return () => {
      id++;
      return id;
    }
  })()

  const generateSearchResult = (): ISearchResultData => {
    
    return {
      avatar_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png',
      score: +Math.random().toFixed(2),
      login: 'test-user',
      type: 'TEST',
      id: generateID()
    }
  }

  const generateSearchResults = (count: number) => {
    return Array.from(Array(count)).map(generateSearchResult);
  }

  return {
    mockSearch:  (keyword: string) => {
      console.log(`searching for keyword: "${keyword}"`)
      return new Promise((res, rej) => {
        let timeout = setTimeout(() => {
          res(generateSearchResults(100));
          clearTimeout(timeout);
        }, 1500)
      })
    },
    generateSearchResult,
    generateSearchResults
  }
})();
