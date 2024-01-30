import React, { FC } from 'react';

interface ICheckoutButton{
    testId?:string
}

const CheckoutButton:FC<ICheckoutButton> = ({testId}) => {
    return (
   <button className='checkout-button' data-testid={testId}>Checkout</button>
    );
}

export default CheckoutButton;