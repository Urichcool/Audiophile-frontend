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

  return (
    <div className="cart-quantity-buttons-container">
      <button
        className="cart-quantity-button"
        onClick={(): void => {
          dispatch(decreaseQuantity({ id: id, quantity: 1, price: price }));
        }}
      >
        <p>-</p>
      </button>
      <p className="cart-quantity-text">{quantity}</p>
      <button
        className="cart-quantity-button"
        onClick={(): void => {
          dispatch(increaseQuantity({ id: id, quantity: 1, price: price }));
        }}
      >
        <p>+</p>
      </button>
    </div>
  );
};

export default CartQuantityButtons;
