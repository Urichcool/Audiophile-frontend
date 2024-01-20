import App from "../../App";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithReduxAndRouter } from "../helpers/RenderWithReduxAndRouter";

describe("cart-functionality-test", () => {
  test("cart-without-products-should-show-empty-cart-info", () => {
    renderWithReduxAndRouter(<App />);
    const cartModalButton: HTMLElement =
      screen.getByTestId("cart-modal-button");
    fireEvent.click(cartModalButton);
    const cartModalEmptyContainer: HTMLElement = screen.getByTestId(
      "cart-modal-empty-container"
    );
    expect(cartModalEmptyContainer).toBeInTheDocument();
    expect(cartModalEmptyContainer).toHaveTextContent("Your cart is empty");
  });
});
