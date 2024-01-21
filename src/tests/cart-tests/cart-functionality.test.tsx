import App from "../../App";
import {
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";

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
  test("adding-product-to-cart-should-show-cart-quantity", async () => {
    renderWithReduxAndRouter(<App />);
    const heroLoader: HTMLElement = screen.getByTestId("hero-loader");
    await waitForElementToBeRemoved(heroLoader, { timeout: 300000 });
    const productIdButton: HTMLElement =
      screen.getByTestId("id-page-nav-button");
    fireEvent.click(productIdButton);
    const productIdPageLoader: HTMLElement = screen.getByTestId(
      "product-id-page-loader"
    );
    await waitForElementToBeRemoved(productIdPageLoader, { timeout: 300000 });
    const AddToCartFormButton: HTMLElement =
      screen.getByTestId("add-to-cart-button");
    fireEvent.click(AddToCartFormButton);
    await waitFor(() => {
      expect(screen.getByTestId("cart-button-quantity")).toHaveTextContent("1");
    });
  });
  test("click-on-plus-button-should-increase-product-quantity", () => {
    renderWithReduxAndRouter(<App />);
    const cartIncreaseButton: HTMLElement = screen.getByTestId(
      "cart-increase-button"
    );
    fireEvent.click(cartIncreaseButton);
    const cartProductQuantity: HTMLElement =
      screen.getByTestId("cart-quantity");
    expect(cartProductQuantity).toHaveTextContent("2");
  });
  test("click-on-minus-button-should-descease-product-quantity", () => {
    renderWithReduxAndRouter(<App />);
    const cartDecreaseButton: HTMLElement = screen.getByTestId(
      "cart-decrease-button"
    );
    fireEvent.click(cartDecreaseButton);
    const cartProductQuantity: HTMLElement =
      screen.getByTestId("cart-quantity");
    expect(cartProductQuantity).toHaveTextContent("1");
  });
  test("click-on-minus-button-if-product-quantity-is-1-should-remove-product-from-cart", () => {
    renderWithReduxAndRouter(<App />);
    const cartDecreaseButton: HTMLElement = screen.getByTestId(
      "cart-decrease-button"
    );
    fireEvent.click(cartDecreaseButton);
    const cartModalEmptyContainer: HTMLElement = screen.getByTestId(
      "cart-modal-empty-container"
    );
    expect(cartModalEmptyContainer).toBeInTheDocument();
    expect(cartModalEmptyContainer).toHaveTextContent("Your cart is empty");
    const productIdButton: HTMLElement =
      screen.getByTestId("id-page-nav-button");
    fireEvent.click(productIdButton);
    const AddToCartFormButton: HTMLElement =
      screen.getByTestId("add-to-cart-button");
    fireEvent.click(AddToCartFormButton);
  });
  test("click-on-remove-all-button-should-remove-all-products", () => {
    renderWithReduxAndRouter(<App />);
    const cartProductQuantity: HTMLElement =
      screen.getByTestId("cart-quantity");
    expect(cartProductQuantity).toHaveTextContent("1");
    const cartModalRemoveAllButton: HTMLAreaElement = screen.getByTestId(
      "cart-remove-all-button"
    );
    fireEvent.click(cartModalRemoveAllButton);
    const cartModalEmptyContainer: HTMLElement = screen.getByTestId(
      "cart-modal-empty-container"
    );
    expect(cartModalEmptyContainer).toBeInTheDocument();
    expect(cartModalEmptyContainer).toHaveTextContent("Your cart is empty");
  });
});
