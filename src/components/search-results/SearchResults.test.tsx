import { customRender } from "../../test-utils";
import { SearchResultsComponent } from "./SearchResults.component";

describe("SearchResults Component", () => {
  test("Should initialize", async () => {
    const searchResults = customRender(<SearchResultsComponent />);
    expect(searchResults.container.firstElementChild).toBeInstanceOf(HTMLDivElement);
    const el = await searchResults.findAllByText("No results to display");
    expect(el).toBeDefined();
  });
});
