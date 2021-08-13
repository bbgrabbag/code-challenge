import { customRender } from '../../test-utils'
import { AppComponent } from "./App.component";

describe("App Component", () => {
  test("Should render", () => {
    const app = customRender(<AppComponent />);
    expect(app.container).toBeInstanceOf(HTMLDivElement);
  });
});
