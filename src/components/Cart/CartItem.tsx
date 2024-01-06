import {FC} from "react";

interface ICartItemProps {
  id: string;
  name: string;
  quantity: number;
  price: number;
  picture: string;
}

const CartItem:FC<ICartItemProps> = ({id, name, quantity, price, picture}) => {
  return <div></div>;
};

export default CartItem;
