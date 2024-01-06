import { FC } from "react";
import { priceWithCommas } from "../../utils/priceWithCommas";

interface ICartItemProps {
  id: string;
  name: string;
  quantity: number;
  price: number;
  picture: string;
}

const CartItem: FC<ICartItemProps> = ({
  id,
  name,
  quantity,
  price,
  picture,
}) => {
  return (
    <li className="cart-list-item">
      <div className="cart-list-item-picture-container">
        <img src={picture} alt={name} className="cart-item-picture" />
      </div>
      <div className="cart-list-item-text-container">
        <h6 className="cart-item-name">{name}</h6>
        <p className="cart-item-price">{priceWithCommas(price)}</p>
      </div>
      
    </li>
  );
};

export default CartItem;
