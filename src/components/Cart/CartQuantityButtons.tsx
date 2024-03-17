import { FC } from "react";
import { AppDispatch } from "../../redux/store";
import { useAppDispatch } from "../../redux/reduxHooks/reduxHooks";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/slices/cart/cartSlice";

interface ICartQuantityButtons {
  id: string;
  quantity: number;
  price: number;
}

const CartQuantityButtons: FC<ICartQuantityButtons> = ({
  id,
  quantity,
  price,
}) => {
  const dispatch: AppDispatch = useAppDispatch();

  const increaseButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    dispatch(increaseQuantity({ id: id, quantity: 1, price: price }));
  };

  const decreaseButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    dispatch(decreaseQuantity({ id: id, quantity: 1, price: price }));
  };

  return (
    <div className="cart-quantity-buttons-container">
      <button
        className="cart-quantity-button"
        onClick={decreaseButtonHandler}
        data-testid="cart-decrease-button"
        disabled={quantity < 2}
      >
        {quantity > 1 && "-"}
      </button>
      <p className="cart-quantity-text" data-testid="cart-quantity">
        {quantity}
      </p>
      <button
        className="cart-quantity-button"
        onClick={increaseButtonHandler}
        data-testid="cart-increase-button"
      >
        +
      </button>
    </div>
  );
};

export default CartQuantityButtons;
