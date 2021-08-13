import { customRender } from '../../test-utils'
import { SearchBarComponent } from "./SearchBar.component";

describe("SearchBar Component", () => {
  test("Should render", () => {
    const searchBar = customRender(<SearchBarComponent />);
    expect(searchBar.container).toBeInstanceOf(HTMLDivElement);
  });
});
