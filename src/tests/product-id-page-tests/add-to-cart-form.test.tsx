import App from "../../App";
import { renderWithReduxAndRouter } from "../helpers/RenderWithReduxAndRouter";
import {
  screen,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/react";

describe("product-id-page-tests", () => {
  test("min-value-of-add-to-cart-form-is-1", async () => {
    renderWithReduxAndRouter(<App />);
    const heroLoader: HTMLDivElement = screen.getByTestId("hero-loader");
    await waitForElementToBeRemoved(heroLoader, { timeout: 300000 });
    const productIdButton: HTMLButtonElement =
      screen.getByTestId("id-page-nav-button");
    fireEvent.click(productIdButton);
    const productIdPageLoader: HTMLDivElement = screen.getByTestId(
      "product-id-page-loader"
    );
    await waitForElementToBeRemoved(productIdPageLoader, {
      timeout: 300000,
    });
    const addToCartQuantity: HTMLFieldSetElement = screen.getByTestId(
      "add-to-cart-form-quantity"
    );
    expect(addToCartQuantity).toHaveValue(1);
    const addToCartDecreaseButton: HTMLButtonElement = screen.getByTestId(
      "add-to-cart-form-decrease-button"
    );
    fireEvent.click(addToCartDecreaseButton);
    expect(addToCartQuantity).toHaveValue(1);
  });
  test("click-on-plus-button-should-increase-add-to-cart-product-quantity", () => {
    renderWithReduxAndRouter(<App />);
    const productIdButton: HTMLButtonElement =
      screen.getByTestId("id-page-nav-button");
    fireEvent.click(productIdButton);
    const addToCartQuantity: HTMLFieldSetElement = screen.getByTestId(
      "add-to-cart-form-quantity"
    );
    const addToCartIncreaseButton: HTMLButtonElement = screen.getByTestId(
      "add-to-cart-form-increase-button"
    );
    fireEvent.click(addToCartIncreaseButton);
    expect(addToCartQuantity).toHaveValue(2);
  });
  test("click-on-minus-button-shoud-decrease-add-to-cart-product-quantity", () => {
    renderWithReduxAndRouter(<App />);
    const productIdButton: HTMLButtonElement =
      screen.getByTestId("id-page-nav-button");
    fireEvent.click(productIdButton);
    const addToCartQuantity: HTMLFieldSetElement = screen.getByTestId(
      "add-to-cart-form-quantity"
    );
    const addToCartIncreaseButton: HTMLButtonElement = screen.getByTestId(
      "add-to-cart-form-increase-button"
    );
    fireEvent.click(addToCartIncreaseButton);
    fireEvent.click(addToCartIncreaseButton);
    expect(addToCartQuantity).toHaveValue(3);
    const addToCartDecreaseButton: HTMLButtonElement = screen.getByTestId(
      "add-to-cart-form-decrease-button"
    );
    fireEvent.click(addToCartDecreaseButton);
    expect(addToCartQuantity).toHaveValue(2);
  });
});
