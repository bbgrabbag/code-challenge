import { fireEvent } from "@testing-library/react";
import { customRender } from "../../test-utils";
import { SearchBarComponent } from "./SearchBar.component";

const setup = async () => {
  const searchBar = customRender(<SearchBarComponent />);
  const form = await searchBar.findByTestId('search-bar-component');
  const input = await searchBar.findByTestId('search-input');
  const btn = await searchBar.findByTestId('clear-search');

  return {
    searchBar,
    input,
    btn,
    form
  };
};


describe("SearchBar Component", () => {
  test("Should initialize", async () => {
    const testBed = await setup();

    expect(testBed.form).toBeInstanceOf(
      HTMLFormElement
    );
    expect(testBed.form).toHaveFormValues({
      keyword: "",
    });
  });

  test("Should allow users to type/clear keywords", async () => {
    const testBed = await setup();

    expect(testBed.input).toBeInstanceOf(HTMLInputElement);
    expect(testBed.btn).toBeInstanceOf(HTMLButtonElement);
    fireEvent.change(testBed.input as HTMLInputElement, { target: { value: "test" } });
    expect(testBed.searchBar.container.firstElementChild).toHaveFormValues({
      keyword: "test",
    });
    fireEvent.click(testBed.btn as HTMLButtonElement);
    expect(testBed.searchBar.container.firstElementChild).toHaveFormValues({
      keyword: "",
    });
  });
});
