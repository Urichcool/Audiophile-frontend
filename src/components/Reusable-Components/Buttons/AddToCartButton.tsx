import { FC } from "react";
import { Oval } from "react-loader-spinner";

interface IAddToCartButtonProps {
  testId?: string;
  isFetching: boolean;
  isEnoughStock: boolean;
}

const AddToCartButton: FC<IAddToCartButtonProps> = ({
  testId,
  isFetching,
  isEnoughStock,
}) => {
  return (
    <button
      className="add-to-cart-button"
      data-testid={testId}
      type="submit"
      disabled={isFetching || isEnoughStock}
    >
      {isFetching ? (
        <div className="add-to-cart-button-loader">
          <p>Add to cart</p>
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
        <p>Add to cart</p>
      )}
    </button>
  );
};

export default AddToCartButton;
