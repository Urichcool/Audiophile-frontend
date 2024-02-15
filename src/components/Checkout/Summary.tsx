import { FC, useEffect } from "react";
import { useAppSelector } from "../../redux/reduxHooks/reduxHooks";
import {
  selectCartProducts,
  selectTotal,
} from "../../redux/slices/cart/selectors";
import { priceWithCommas } from "../../utils/priceWithCommas";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Summary: FC = () => {
  const cartProducts:
    | {
        id: string;
        name: string;
        quantity: number;
        price: number;
        picture: string;
        totalPrice: number;
      }[]
    | [] = useAppSelector(selectCartProducts);
  const total: number = useAppSelector(selectTotal);
  const vat: number = Math.round((total / 100) * 20);
  const grandTotal: number = total + 50;

  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (cartProducts.length === 0) {
      navigate(-1);
    }
  }, [cartProducts.length, navigate]);

  return (
    <div className="summary-container">
      <h6 className="summary-title">Summary</h6>
      <ul className="summary-list">
        {cartProducts.map(({ picture, name, totalPrice, quantity }) => (
          <li className="summary-list-item">
            <div className="summary-list-item-picture-container">
              <img
                src={picture}
                alt={name}
                className="summary-list-item-picture"
              />
            </div>
            <div className="summary-list-item-text-container">
              <h6 className="summary-list-item-name">{name}</h6>
              <p className="summary-list-item-price">
                {priceWithCommas(totalPrice)}
              </p>
            </div>
            <p className="summary-list-item-quantity">{`${quantity}x`}</p>
          </li>
        ))}
      </ul>
      <ul className="summary-total-list">
        <li className="summary-total-list-item">
          <p>total</p>
          <p>{priceWithCommas(total)}</p>
        </li>
        <li className="summary-total-list-item">
          <p>shipping</p>
          <p>{priceWithCommas(50)}</p>
        </li>
        <li className="summary-total-list-item">
          <p>{"vat (included)"}</p>
          <p>{priceWithCommas(vat)}</p>
        </li>
        <li className="summary-total-list-item">
          <p>grand total</p>
          <p>{priceWithCommas(grandTotal)}</p>
        </li>
      </ul>
    </div>
  );
};

export default Summary;
