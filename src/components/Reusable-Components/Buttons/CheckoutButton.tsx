import React, { FC } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../redux/reduxHooks/reduxHooks";
import { selectIsCartModalOpen } from "../../../redux/slices/cart/selectors";
import { AppDispatch } from "../../../redux/store";
import { switchCartModal } from "../../../redux/slices/cart/cartSlice";
import { Oval } from "react-loader-spinner";

interface ICheckoutButton {
  testId?: string;
  isFetching: boolean;
}

const CheckoutButton: FC<ICheckoutButton> = ({ testId, isFetching }) => {
  const navigate: NavigateFunction = useNavigate();
  const isCartModalOpen: boolean = useAppSelector(selectIsCartModalOpen);
  const dispatch: AppDispatch = useAppDispatch();

  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigate("checkout");
    dispatch(switchCartModal(!isCartModalOpen));
  };
  return (
    <>
      <button
        onClick={buttonClickHandler}
        className="checkout-button"
        data-testid={testId}
        disabled={isFetching}
      >
        {isFetching ? (
          <div className="checkout-button-loader">
            <p>Checkout</p>
            <Oval
              height={16}
              width={16}
              color="#fff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#fff"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          <p>Checkout</p>
        )}
      </button>
    </>
  );
};

export default CheckoutButton;
