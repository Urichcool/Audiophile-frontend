import Cart from "../../../components/Cart/Cart";
import CartItem from "../../../components/Cart/CartItem";
import { renderWithReduxAndRouter } from "../../helpers/RenderWithReduxAndRouter";
import { cartItemTestProps } from "./cart-item-test-props";
import { screen } from "@testing-library/react";

describe("cart-item-snapshot-tests", () => {
  test("cart-item-should-match-snapshot", () => {
    const {
      id,
      name,
      quantity,
      price,
      picture,
      totalPrice,
      category,
    }: {
      id: string;
      name: string;
      quantity: number;
      price: number;
      picture: string;
      totalPrice: number;
      category: string;
    } = cartItemTestProps;
    renderWithReduxAndRouter(
      <CartItem
        id={id}
        name={name}
        quantity={quantity}
        price={price}
        picture={picture}
        totalPrice={totalPrice}
        category={category}
        isStockCheckFetchingHandler={() => {}}
      />
    );
    const cartItem: HTMLLIElement = screen.getByTestId("cart-item");
    expect(cartItem).toMatchSnapshot();
  });
  test("cart-empty-container-should-match-snapshot", () => {
    renderWithReduxAndRouter(<Cart />);
    const cartEmptyContainer: HTMLDivElement = screen.getByTestId(
      "cart-modal-empty-container"
    );
    expect(cartEmptyContainer).toMatchSnapshot();
  });
});
