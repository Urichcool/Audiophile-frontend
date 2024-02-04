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
  test("click-on-esc-should-close-cart-modal", () => {
    renderWithReduxAndRouter(<App />);
    const cartModalButton: HTMLElement =
      screen.getByTestId("cart-modal-button");
    fireEvent.click(cartModalButton);
    const cartModal: HTMLElement = screen.getByTestId("cart-modal");
    fireEvent.keyDown(cartModal, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });
    expect(cartModal).toHaveClass("cart-container-close");
  });
  test("click-on-close-button-should-close-cart-modal", () => {
    renderWithReduxAndRouter(<App />);
    const cartModalButton: HTMLElement =
      screen.getByTestId("cart-modal-button");
    fireEvent.click(cartModalButton);
    const cartModal: HTMLElement = screen.getByTestId("cart-modal");
    const cartModalCloseButton: HTMLElement = screen.getByTestId(
      "cart-close-modal-button"
    );
    fireEvent.click(cartModalCloseButton);
    expect(cartModal).toHaveClass("cart-container-close");
  });
  test("openning-of-cart-modal-should-close-mobile-menu", () => {
    renderWithReduxAndRouter(<App />);
    const mobileMenuButton: HTMLElement =
      screen.getByTestId("mobile-menu-button");
    const cartModalButton: HTMLElement =
      screen.getByTestId("cart-modal-button");
    fireEvent.click(mobileMenuButton);
    const mobileMenu: HTMLElement = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toHaveClass("mobile-menu-open");
    fireEvent.click(cartModalButton);
    expect(mobileMenu).toHaveClass("mobile-menu-close");
  });
});
