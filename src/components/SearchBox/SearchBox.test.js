import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from "./SearchBox";

it("should render the search box", () => {
    render(<SearchBox />);

    const searchBox = screen.getByRole('textbox');

    expect(searchBox).toBeInTheDocument();
})

it("should render the search value into the search box", () => {
    render(<SearchBox />);

    const searchBox = screen.getByRole('textbox');

    userEvent.type(searchBox, "Buzz");

    expect(searchBox.value).toBe("Buzz");

})