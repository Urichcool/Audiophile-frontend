import { FC } from "react";
import { priceWithCommas } from "../../utils/priceWithCommas";
import CartQuantityButtons from "./CartQuantityButtons";

interface ICartItemProps {
  id: string;
  name: string;
  quantity: number;
  price: number;
  picture: string;
  totalPrice: number;
}

const CartItem: FC<ICartItemProps> = ({
  id,
  name,
  quantity,
  price,
  picture,
  totalPrice
}) => {
  return (
    <li className="cart-list-item" data-testid="cart-item">
      <div className="cart-list-item-picture-container">
        <img src={picture} alt={name} className="cart-item-picture" />
      </div>
      <div className="cart-list-item-text-container">
        <h6 className="cart-item-name">{name}</h6>
        <p className="cart-item-price">{priceWithCommas(totalPrice)}</p>
      </div>
      <CartQuantityButtons id={id} quantity={quantity} price={price}/>
    </li>
  );
};

export default CartItem;
