import { FC } from "react";

interface IAddToCartButtonProps{
  testId?:string
}

const AddToCartButton: FC<IAddToCartButtonProps> = ({testId}) => {
  return (
    <button className="add-to-cart-button" data-testid={testId} type="submit">
      Add to cart
    </button>
  );
};

export default AddToCartButton;
