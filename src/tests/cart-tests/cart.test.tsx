import App from "../../App";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithReduxAndRouter } from "../helpers/RenderWithReduxAndRouter";

describe("cart-tests", () => {
  test("click-on-cart-button-should-open-cart-modal", () => {
    renderWithReduxAndRouter(<App />);
    const cartModalButton: HTMLElement =
      screen.getByTestId("cart-modal-button");
    fireEvent.click(cartModalButton);
    expect(cartModalButton).toBeInTheDocument();
  });
  test("click-on-cart-button-should-close-cart-modal", () => {
    renderWithReduxAndRouter(<App />);
    const cartModalButton = screen.getByTestId("cart-modal-button");
    fireEvent.click(cartModalButton);
    fireEvent.click(cartModalButton);
    expect(cartModalButton).toBeInTheDocument();
  });
});
