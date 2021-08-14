import { fireEvent, waitFor } from "@testing-library/react";
import { customRender } from "../../test-utils";
import { AppComponent } from "./App.component";

describe("App Component", () => {
  const setup = async () => {
    const app = customRender(<AppComponent />);
    const searchBar = await app.findByTestId("search-bar-component");
    const input = await app.findByTestId("search-input");
    const searchResults = await app.findByTestId("search-results-component");

    return {
      app,
      searchBar,
      searchResults,
      input,
    };
  };

  test("Should initialize", async () => {
    const testBed = await setup();
    expect(testBed.app.container.firstElementChild).toBeInstanceOf(
      HTMLDivElement
    );
    expect(testBed.app.container.firstElementChild?.childNodes.length).toEqual(
      2
    );

    expect(testBed.searchBar).toBeInstanceOf(HTMLFormElement);
    expect(testBed.searchResults).toBeInstanceOf(HTMLDivElement);
  });

  test("Should display idle text on empty keywords", async () => {
    const testBed = await setup();
    const searchStatusText = await testBed.app.findByTestId(
      "results-status-text"
    );
    expect(searchStatusText.innerHTML).toBe("No results to display");
  });

  test("Should display warning text on keywords shorter than 3", async () => {
    const testBed = await setup();
    const searchStatusText = await testBed.app.findByTestId(
      "results-status-text"
    );
    fireEvent.change(testBed.input, { target: { value: "ab" } });
    await waitFor(() => {
      expect(searchStatusText.innerHTML).toBe(
        "Search query must contain at least 3 characters"
      );
    });
  });

  test("Should display pending text on keywords longer than 3", async () => {
    const testBed = await setup();
    const searchStatusText = await testBed.app.findByTestId(
      "results-status-text"
    );
    fireEvent.change(testBed.input, { target: { value: "test" } });
    expect(searchStatusText.innerHTML).toBe("Searching...");
  });

  test("Should display results text on keywords longer than 3 after timeout", async () => {
    const testBed = await setup();
    fireEvent.change(testBed.input, { target: { value: "test" } });
    await waitFor(
      async () => {
        const searchStatusText = await testBed.app.findByTestId(
          "results-status-text"
        );
        expect(searchStatusText.innerHTML).toMatch(
          /(Displaying)*(results that match your query)/
        );
      },
      { timeout: 2000 }
    );
  });

  test("Should render a list of results on throttled keystroke", async () => {
    const testBed = await setup();
    fireEvent.change(testBed.input, { target: { value: "test" } });
    await waitFor(
      async () => {
        const searchResultsList = await testBed.app.findByTestId(
          "search-results-list"
        );
        expect(searchResultsList.childNodes.length).toBeGreaterThan(0);
      },
      { timeout: 2000 }
    );
  });
});
