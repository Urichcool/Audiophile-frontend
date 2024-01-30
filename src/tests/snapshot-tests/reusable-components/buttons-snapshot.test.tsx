import AddToCartButton from "../../../components/Reusable-Components/Buttons/AddToCartButton";
import Button1 from "../../../components/Reusable-Components/Buttons/Button1";
import Button2 from "../../../components/Reusable-Components/Buttons/Button2";
import Button3 from "../../../components/Reusable-Components/Buttons/Button3";
import Button4 from "../../../components/Reusable-Components/Buttons/Button4";
import CheckoutButton from "../../../components/Reusable-Components/Buttons/CheckoutButton";
import GoBackButton from "../../../components/Reusable-Components/Buttons/GoBackButton";
import { renderWithReduxAndRouter } from "../../helpers/RenderWithReduxAndRouter";
import { screen } from "@testing-library/react";

describe("buttons-render-tests", () => {
  test("add-to-cart-button-should-renders-correctly", () => {
    renderWithReduxAndRouter(
      <AddToCartButton testId="add-to-cart-test-button" />
    );
    const addToCartButton: HTMLButtonElement = screen.getByTestId(
      "add-to-cart-test-button"
    );
    expect(addToCartButton).toMatchSnapshot();
  });
  test("button-1-should-match-snapshot", () => {
    renderWithReduxAndRouter(<Button1 testId="test-button-1" />);
    const button1: HTMLButtonElement = screen.getByTestId("test-button-1");
    expect(button1).toMatchSnapshot();
  });
  test("button-2-should-match-snapshot", () => {
    renderWithReduxAndRouter(<Button2 testId="test-button-2" />);
    const button2: HTMLButtonElement = screen.getByTestId("test-button-2");
    expect(button2).toMatchSnapshot();
  });
  test("button-3-should-match-snapshot", () => {
    renderWithReduxAndRouter(
      <Button3 testId="test-button-3" to="/headphones" />
    );
  });
  test("button-4-should-match-snapshot", () => {
    renderWithReduxAndRouter(<Button4 testId="test-button-4" />);
    const button4: HTMLButtonElement = screen.getByTestId("test-button-4");
    expect(button4).toMatchSnapshot();
  });
  test("checkout-button-should-match-snapshot", () => {
    renderWithReduxAndRouter(<CheckoutButton testId="checkout-test-button" />);
    const checkoutButton: HTMLButtonElement = screen.getByTestId(
      "checkout-test-button"
    );
    expect(checkoutButton).toMatchSnapshot();
  });
  test("go-back-button-should-match-snapshot", () => {
    renderWithReduxAndRouter(<GoBackButton testId="go-back-test-button" />);
    const goBackButton: HTMLButtonElement = screen.getByTestId(
      "go-back-test-button"
    );
    expect(goBackButton).toMatchSnapshot();
  });
});
