import { customRender } from "../../test-utils";
import { SearchResultsComponent } from "./SearchResults.component";

describe("SearchResults Component", () => {
  test("Should render", async () => {
    const searchResults = customRender(<SearchResultsComponent />);
    expect(searchResults.container).toBeInstanceOf(HTMLDivElement);
    const el = await searchResults.findAllByText("No results to display")
    expect(el).toBeDefined();
  });
});
