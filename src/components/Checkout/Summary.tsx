import { FC } from "react";
import { useAppSelector } from "../../redux/reduxHooks/reduxHooks";
import {
  selectCartProducts,
  selectTotal,
} from "../../redux/slices/cart/selectors";
import { priceWithCommas } from "../../utils/priceWithCommas";
import ContinueAndPayButton from "./ContinueAndPayButton";
import SummaryListItem from "./SummaryListItem";

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

  return (
    <div className="summary-container">
      <h6 className="summary-title">Summary</h6>
      <ul className="summary-list">
        {cartProducts.map(({ picture, name, totalPrice, quantity, id }) => (
          <SummaryListItem
            key={id}
            picture={picture}
            name={name}
            totalPrice={totalPrice}
            quantity={quantity}
          />
        ))}
      </ul>
      <ul className="summary-total-list">
        <li className="summary-total-list-item">
          <p className="summary-total-list-item-text">total</p>
          <p className="summary-total-list-item-amount-text">
            {priceWithCommas(total)}
          </p>
        </li>
        <li className="summary-total-list-item">
          <p className="summary-total-list-item-text">shipping</p>
          <p className="summary-total-list-item-amount-text">
            {priceWithCommas(50)}
          </p>
        </li>
        <li className="summary-total-list-item">
          <p className="summary-total-list-item-text">{"vat (included)"}</p>
          <p className="summary-total-list-item-amount-text">
            {priceWithCommas(vat)}
          </p>
        </li>
        <li className="summary-total-list-item">
          <p className="summary-total-list-item-text">grand total</p>
          <p className="summary-total-list-item-amount-text--grand-total">
            {priceWithCommas(grandTotal)}
          </p>
        </li>
      </ul>
      <ContinueAndPayButton />
    </div>
  );
};

export default Summary;