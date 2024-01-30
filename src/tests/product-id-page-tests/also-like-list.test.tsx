import App from "../../App";
import { renderWithReduxAndRouter } from "../helpers/RenderWithReduxAndRouter";
import {
  screen,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/react";
import { store } from "../../redux/store";
import { goodsApi } from "../../redux/services/goods";

describe("also-like-list-tests", () => {
  beforeEach(() => {
    store.dispatch(goodsApi.util.resetApiState());
  });
  test("click-on-also-like-product-should-change-product", async () => {
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
    const alsoLikeListButtons: HTMLButtonElement[] = screen.getAllByTestId(
      "also-like-list-item-button"
    );
    const prevProduct: string | null =
      screen.getByTestId("product-name").textContent;
    fireEvent.click(alsoLikeListButtons[0]);
    const productIdPageLoaderAlsoLike: HTMLDivElement = screen.getByTestId(
      "product-id-page-loader"
    );
    await waitForElementToBeRemoved(productIdPageLoaderAlsoLike, {
      timeout: 300000,
    });
    let newProduct: string | null =
      screen.getByTestId("product-name").textContent;
    if (prevProduct === newProduct) {
      fireEvent.click(alsoLikeListButtons[1]);
      newProduct = screen.getByTestId("product-name").textContent;
    }
    expect(newProduct).not.toBe(prevProduct);
  });
});
