import { FC } from "react";
import { priceWithCommas } from "../../utils/priceWithCommas";

interface ICheckoutModalListItemProps {
  picture: string;
  name: string;
  totalPrice: number;
  quantity: number;
}

const CheckoutModalListItem: FC<ICheckoutModalListItemProps> = ({
  picture,
  name,
  totalPrice,
  quantity,
}) => {
  return (
    <li className="checkout-modal-list-item">
      <div className="checkout-modal-list-item-picture-container">
        <img
          src={picture}
          alt={name}
          className="checkout-modal-list-item-picture"
        />
      </div>
      <div className="checkout-modal-list-item-text-container">
        <h6 className="checkout-modal-list-item-name">{name}</h6>
        <p className="checkout-modal-list-item-price">
          {priceWithCommas(totalPrice)}
        </p>
      </div>
      <p className="checkout-modal-list-item-quantity">{`${quantity}x`}</p>
    </li>
  );
};

export default CheckoutModalListItem;
