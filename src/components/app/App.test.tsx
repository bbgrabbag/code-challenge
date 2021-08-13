import { customRender } from '../../test-utils'
import { AppComponent } from "./App.component";

describe("App Component", () => {
  test("Should initialize", async () => {
    const app = customRender(<AppComponent />);
    expect(app.container.firstElementChild).toBeInstanceOf(HTMLDivElement);
    expect(app.container.firstElementChild?.childNodes.length).toEqual(2);
  });
});
