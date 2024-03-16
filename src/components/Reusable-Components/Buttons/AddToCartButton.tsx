import { FC } from "react";

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
      Add to cart
    </button>
  );
};

export default AddToCartButton;
