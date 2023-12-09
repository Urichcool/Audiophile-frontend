import App from "../../App";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithReduxAndRouter } from "../../tests/helpers/RenderWithReduxAndRouter";

describe("mobile-menu-tests", () => {
  test("should-open-mobile-menu", () => {
    renderWithReduxAndRouter(<App />);
    const mobileMenuButton: HTMLElement =
      screen.getByTestId("mobile-menu-button");
    fireEvent.click(mobileMenuButton);
    const mobileMenu: HTMLElement = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toHaveClass("mobile-menu-open");
    
  });
  test("click-on-backdrop-should-close-mobile-menu", () => {
    renderWithReduxAndRouter(<App />);
    const backdrop: HTMLElement = screen.getByTestId("mobile-menu-backdrop");
    const mobileMenu: HTMLElement = screen.getByTestId("mobile-menu");
    fireEvent.click(backdrop);
    expect(mobileMenu).toHaveClass("mobile-menu-close");
  });
  test("click-esc-should-close-mobile-menu", () => {
    renderWithReduxAndRouter(<App />);
    const mobileMenuButton: HTMLElement =
      screen.getByTestId("mobile-menu-button");
    fireEvent.click(mobileMenuButton);
      const mobileMenu: HTMLElement = screen.getByTestId("mobile-menu");
      fireEvent.keyDown(mobileMenu, {
        key: "Escape",
        code: "Escape",
        keyCode: 27,
        charCode: 27,
      });
    expect(mobileMenu).toHaveClass("mobile-menu-close");
  });
});
