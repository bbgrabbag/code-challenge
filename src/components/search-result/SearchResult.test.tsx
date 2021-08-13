import { customRender } from '../../test-utils'
import { SearchResultComponent } from "./SearchResult.component";

describe("SearchResult Component", () => {
  test("Should initialize", () => {
    const searchResult = customRender(<SearchResultComponent />);
    expect(searchResult.container.firstElementChild).toBeInstanceOf(HTMLDivElement)
  });
});
