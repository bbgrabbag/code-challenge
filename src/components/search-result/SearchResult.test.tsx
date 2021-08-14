import { customRender, mockAPI } from "../../test-utils";
import { SearchResultComponent } from "./SearchResult.component";

describe("SearchResult Component", () => {
  test("Should initialize", async () => {
    const searchResult = customRender(
      <SearchResultComponent result={mockAPI.generateSearchResult()} />
    );
    expect(searchResult.container.firstElementChild).toBeInstanceOf(
      HTMLDivElement
    );
    const user = await searchResult.findByText(`test-user`);
    expect(user).toBeDefined();
  });
});
