import React, { FC } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../redux/reduxHooks/reduxHooks";
import {
  selectCartProducts,
  selectIsCartModalOpen,
} from "../../../redux/slices/cart/selectors";
import { AppDispatch } from "../../../redux/store";
import { switchCartModal } from "../../../redux/slices/cart/cartSlice";
import { Oval } from "react-loader-spinner";
import { useCheckGoodsCartStockMutation } from "../../../redux/services/goods";

interface ICheckoutButton {
  testId?: string;
  isFetching: boolean;
}

const CheckoutButton: FC<ICheckoutButton> = ({ testId, isFetching }) => {
  const navigate: NavigateFunction = useNavigate();
  const isCartModalOpen: boolean = useAppSelector(selectIsCartModalOpen);
  const dispatch: AppDispatch = useAppDispatch();
  const [checkCartStock, { data, isLoading, isSuccess }] =
    useCheckGoodsCartStockMutation();
  const cart: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
    picture: string;
    category: string;
  }[] = useAppSelector(selectCartProducts);

  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // navigate("checkout");
    // dispatch(switchCartModal(!isCartModalOpen));
    checkCartStock(
      cart.map(({ id, quantity }) => {
        return { id: id, quantity: quantity };
      })
    );
    console.log(isLoading);
  };
  return (
    <>
      <button
        onClick={buttonClickHandler}
        className="checkout-button"
        data-testid={testId}
        disabled={isFetching}
      >
        {isLoading ? (
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
