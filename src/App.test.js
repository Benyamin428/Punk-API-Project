import { act, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

it("should render the beers from the API", async () => {

    await act( async () => {
        render(<App />);
      });

    await waitFor(() => {
        expect(screen.getByText('Buzz'));
        expect(screen.getByText('Trashy Blonde'));
        expect(screen.getByText('Pilsen Lager'));
    });
})

//it("should display Buzz when buzz is typed into the searchbox", async () => {
//
//    await act( async () => {
//        render(<App />);
//    });
//
//    await waitFor(() => {
//        const searchBox = screen.getAllByRole('textbox')[0];
//        userEvent.type(searchBox, "buzz");
//        render(<App />);
//    });
//
//    await waitFor(() => {
//        expect(screen.getByText('Trashy Blonde'));
//    });
//})