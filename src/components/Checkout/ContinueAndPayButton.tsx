import { FC } from "react";
import { Oval } from "react-loader-spinner";

const ContinueAndPayButton: FC<{
  isLoading: {
    isCheckCartStockLoading: boolean;
    isGetGoodsOutFromStockLoading: boolean;
  };
}> = ({ isLoading }) => {
  return (
    <button
      className="continue-and-pay-button"
      type="submit"
      disabled={
        isLoading.isCheckCartStockLoading ||
        isLoading.isGetGoodsOutFromStockLoading
      }
    >
      {isLoading.isCheckCartStockLoading ||
      isLoading.isGetGoodsOutFromStockLoading ? (
        <div className="checkout-button-loader">
          <p>CONTINUE & PAY</p>
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
        <p>CONTINUE & PAY</p>
      )}
    </button>
  );
};

export default ContinueAndPayButton;
