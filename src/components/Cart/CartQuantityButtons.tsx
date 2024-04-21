import { FC, useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import { useAppDispatch } from "../../redux/reduxHooks/reduxHooks";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/slices/cart/cartSlice";
import { useGetGoodsStockQuery } from "../../redux/services/goods";

interface ICartQuantityButtons {
  id: string;
  quantity: number;
  price: number;
  isStockCheckFetchingHandler: (id: boolean) => void;
}

const CartQuantityButtons: FC<ICartQuantityButtons> = ({
  id,
  quantity,
  price,
  isStockCheckFetchingHandler,
}) => {
  const dispatch: AppDispatch = useAppDispatch();

  const { data, refetch, isSuccess, isFetching } = useGetGoodsStockQuery(id);

  const increaseButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    refetch();
    if (isSuccess) {
      if (data?.stock === quantity) {
        return;
      }
    }
    dispatch(increaseQuantity({ id: id, quantity: 1, price: price }));
  };

  const decreaseButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    refetch();
    dispatch(decreaseQuantity({ id: id, quantity: 1, price: price }));
  };

  return (
    <div className="cart-quantity-buttons-container">
      <button
        className={
          quantity < 2
            ? "cart-quantity-button-disabled"
            : "cart-quantity-button"
        }
        onClick={decreaseButtonHandler}
        data-testid="cart-decrease-button"
        disabled={quantity < 2 || isFetching}
      >
        {quantity > 1 && "-"}
      </button>
      <p className="cart-quantity-text" data-testid="cart-quantity">
        {quantity}
      </p>
      <button
        className={
          isSuccess && data.stock === quantity
            ? "cart-quantity-button-disabled"
            : "cart-quantity-button"
        }
        disabled={(isSuccess && data.stock === quantity) || isFetching}
        onClick={increaseButtonHandler}
        data-testid="cart-increase-button"
      >
        {isSuccess && data.stock === quantity ? "" : "+"}
      </button>
    </div>
  );
};

export default CartQuantityButtons;
