import App from "../../../App";
import {
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { renderWithReduxAndRouter } from "../../helpers/RenderWithReduxAndRouter";

describe("router-navigation-buttons-test", () => {
  test("router-navigation-headphones-button-test", () => {
    renderWithReduxAndRouter(<App />);
    const headphonesButton: HTMLElement[] = screen.getAllByTestId(
      "navigation-button-headphones"
    );
    fireEvent.click(headphonesButton[0]);
    const headphonesPage: HTMLElement = screen.getByTestId("headphones-page");
    expect(headphonesPage).toBeInTheDocument();
  });
  test("router-navigation-speakers-button-test", () => {
    renderWithReduxAndRouter(<App />);
    const speakersButton: HTMLElement[] = screen.getAllByTestId(
      "navigation-button-speakers"
    );
    fireEvent.click(speakersButton[0]);
    const speakersPage: HTMLElement = screen.getByTestId("speakers-page");
    expect(speakersPage).toBeInTheDocument();
  });
  test("router-navigation-earphones-button-test", () => {
    renderWithReduxAndRouter(<App />);
    const earphonesButton: HTMLElement[] = screen.getAllByTestId(
      "navigation-button-earphones"
    );
    fireEvent.click(earphonesButton[0]);
    const earphonesPage: HTMLElement = screen.getByTestId("earphones-page");
    expect(earphonesPage).toBeInTheDocument();
  });
  test("router-navigation-productId-button-test", async () => {
    renderWithReduxAndRouter(<App />);
    const heroLoader: HTMLElement = screen.getByTestId("hero-loader");
    await waitForElementToBeRemoved(heroLoader, { timeout: 30000 });
    const productIdButton: HTMLElement =
      screen.getByTestId("id-page-nav-button");
    fireEvent.click(productIdButton);
    const productIdPage: HTMLElement = screen.getByTestId("product-id-page");
    expect(productIdPage).toBeInTheDocument();
  });
  test("router-navigation-go-back-button-test", async () => {
    renderWithReduxAndRouter(<App />);
    const heroLoader: HTMLElement = screen.getByTestId("hero-loader");
    await waitForElementToBeRemoved(heroLoader, { timeout: 50000 });
    const productIdButton: HTMLElement =
      screen.getByTestId("id-page-nav-button");
    fireEvent.click(productIdButton);
    const productIdGoBackButton: HTMLElement = screen.getByTestId(
      "product-id-page-go-back-button"
    );
    fireEvent.click(productIdGoBackButton);
    const homePage: HTMLElement = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });
});
