import { Dispatch, FC } from "react";
import { priceWithCommas } from "../../utils/priceWithCommas";
import CartQuantityButtons from "./CartQuantityButtons";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/reduxHooks/reduxHooks";
import { selectIsCartModalOpen } from "../../redux/slices/cart/selectors";
import { AnyAction } from "@reduxjs/toolkit";
import {
  removeProductFromCart,
  switchCartModal,
} from "../../redux/slices/cart/cartSlice";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useGetGoodsStockQuery } from "../../redux/services/goods";

interface ICartItemProps {
  id: string;
  name: string;
  quantity: number;
  price: number;
  picture: string;
  totalPrice: number;
  category: string;
}

const CartItem: FC<ICartItemProps> = ({
  id,
  name,
  quantity,
  price,
  picture,
  totalPrice,
  category,
}) => {
  const navigate: NavigateFunction = useNavigate();
  const isCartModalOpen: boolean = useAppSelector(selectIsCartModalOpen);
  const dispatch: Dispatch<AnyAction> = useAppDispatch();
  const handleOnNavButtonClick = (id: string): void => {
    dispatch(switchCartModal(!isCartModalOpen));
    navigate(`${category}/${id}`);
  };
  const handleOnRemoveFromCartButtonClick = (id: string) => {
    dispatch(removeProductFromCart({ id }));
  };
 
  return (
    <li className="cart-list-item" data-testid="cart-item">
      <button
        className="cart-list-item-remove-from-cart-button"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          handleOnRemoveFromCartButtonClick(id);
        }}
      >
        <RiDeleteBin2Fill />
      </button>
      <button
        className="cart-list-item-nav-button"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleOnNavButtonClick(id)
        }
      >
        <div className="cart-list-item-picture-container">
          <img src={picture} alt={name} className="cart-item-picture" />
        </div>
        <div className="cart-list-item-text-container">
          <h6 className="cart-item-name">{name}</h6>
          <p className="cart-item-price">{priceWithCommas(totalPrice)}</p>
        </div>
      </button>
      <CartQuantityButtons id={id} quantity={quantity} price={price}/>
    </li>
  );
};

export default CartItem;
