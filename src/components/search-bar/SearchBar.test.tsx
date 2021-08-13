import { fireEvent } from '@testing-library/react';
import { customRender } from '../../test-utils'
import { SearchBarComponent } from "./SearchBar.component";


describe("SearchBar Component", () => {
  test("Should initialize", () => {
    const searchBar = customRender(<SearchBarComponent />);
    expect(searchBar.container.firstElementChild).toBeInstanceOf(HTMLFormElement)
    expect(searchBar.container.firstElementChild).toHaveFormValues({keyword: ''})

  });
  test("Should allow users to type/clear keywords", () => {
    const searchBar = customRender(<SearchBarComponent />);
    const input = searchBar.container.querySelector('input[name="keyword"]');
    const btn = searchBar.container.querySelector('button');
    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(btn).toBeInstanceOf(HTMLButtonElement);
    fireEvent.change(input as HTMLInputElement, {target: {value: 'test'}});
    expect(searchBar.container.firstElementChild).toHaveFormValues({keyword: 'test'});
    fireEvent.click(btn as HTMLButtonElement);
    expect(searchBar.container.firstElementChild).toHaveFormValues({keyword: ''});
  });
});
