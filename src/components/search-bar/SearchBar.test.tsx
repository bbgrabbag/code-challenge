import { fireEvent } from "@testing-library/react";
import { customRender } from "../../test-utils";
import { SearchBarComponent } from "./SearchBar.component";

const setup = async () => {
  const searchBar = customRender(<SearchBarComponent />);
  const input = searchBar.container.querySelector('input[name="keyword"]');
  const btn = searchBar.container.querySelector("button");

  return {
    searchBar,
    input,
    btn,
  };
};


describe("SearchBar Component", () => {
  test("Should initialize", async () => {
    const testBed = await setup();
    expect(testBed.searchBar.container.firstElementChild).toBeInstanceOf(
      HTMLFormElement
    );
    expect(testBed.searchBar.container.firstElementChild).toHaveFormValues({
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
