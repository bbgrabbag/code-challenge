import { customRender } from '../../test-utils'
import { SearchResultComponent } from "./SearchResult.component";

describe("SearchResult Component", () => {
  test("Should render", () => {
    const searchResult = customRender(<SearchResultComponent />);
    expect(searchResult.container).toBeInstanceOf(HTMLDivElement);
  });
});
