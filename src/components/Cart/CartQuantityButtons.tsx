import { FC } from 'react';

interface ICartQuantityButtons{
    id: string;
    quantity:number
}

const CartQuantityButtons:FC<ICartQuantityButtons> = ({id, quantity}) => {
    return (
      <div className="cart-quantity-buttons-container">
        <button className="cart-quantity-button"><p>-</p></button>
            <p className='cart-quantity-text'>{quantity}</p>
        <button className="cart-quantity-button"><p>+</p></button>
      </div>
    );
}

export default CartQuantityButtons;