import App from "../../App";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithReduxAndRouter } from "../helpers/RenderWithReduxAndRouter";

describe("cart-tests", () => {
  test("click-on-cart-button-should-open-cart-modal", () => {
    renderWithReduxAndRouter(<App />);
    const cartModalButton: HTMLElement =
      screen.getByTestId("cart-modal-button");
    fireEvent.click(cartModalButton);
    const cartModal: HTMLElement = screen.getByTestId("cart-modal");
    expect(cartModal).toHaveClass("cart-container-open");
  });
  test("click-on-cart-button-should-close-cart-modal", () => {
    renderWithReduxAndRouter(<App />);
    const cartModalButton: HTMLElement =
      screen.getByTestId("cart-modal-button");
    fireEvent.click(cartModalButton);
    const cartModal: HTMLElement = screen.getByTestId("cart-modal");
    expect(cartModal).toHaveClass("cart-container-close");
  });
  test("click on backdrop-should-close-cart-modal", () => {
    renderWithReduxAndRouter(<App />);
    const cartModalButton: HTMLElement =
      screen.getByTestId("cart-modal-button");
    fireEvent.click(cartModalButton);
    const cartModalBackdrop: HTMLElement = screen.getByTestId(
      "cart-modal-backdrop"
    );
    const cartModal: HTMLElement = screen.getByTestId("cart-modal");
    fireEvent.click(cartModalBackdrop);
    expect(cartModal).toHaveClass("cart-container-close");
  });
});
