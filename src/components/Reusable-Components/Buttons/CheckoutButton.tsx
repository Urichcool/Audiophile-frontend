import React, { FC } from "react";
import { Oval } from "react-loader-spinner";


interface ICheckoutButton {
  testId?: string;
  isFetching: boolean;
  buttonClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  isLoading: boolean;
}

const CheckoutButton: FC<ICheckoutButton> = ({
  testId,
  isFetching,
  buttonClickHandler,
  isLoading,
}) => {
  return (
    <>
      <button
        onClick={buttonClickHandler}
        className="checkout-button"
        data-testid={testId}
        disabled={isFetching || isLoading}
      >
        {isFetching || isLoading ? (
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
