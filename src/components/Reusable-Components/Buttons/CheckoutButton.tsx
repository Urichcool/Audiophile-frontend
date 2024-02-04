import React, { FC } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../redux/reduxHooks/reduxHooks";
import { selectIsCartModalOpen } from "../../../redux/slices/cart/selectors";
import { AppDispatch } from "../../../redux/store";
import { switchCartModal } from "../../../redux/slices/cart/cartSlice";

interface ICheckoutButton {
  testId?: string;
}

const CheckoutButton: FC<ICheckoutButton> = ({ testId }) => {
  const navigate: NavigateFunction = useNavigate();
  const isCartModalOpen: boolean = useAppSelector(selectIsCartModalOpen);
  const dispatch: AppDispatch = useAppDispatch();

  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigate("checkout");
    dispatch(switchCartModal(!isCartModalOpen));
  };
  return (
    <button
      onClick={buttonClickHandler}
      className="checkout-button"
      data-testid={testId}
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
