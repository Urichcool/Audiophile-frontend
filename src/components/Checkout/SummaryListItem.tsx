import {FC} from 'react';
import { priceWithCommas } from '../../utils/priceWithCommas';

interface ISummaryListItemProps{
    picture: string;
    name: string;
    totalPrice: number;
    quantity: number;
}

const SummaryListItem:FC<ISummaryListItemProps> = ({picture, name, totalPrice,quantity}) => {
    return (
      <li className="summary-list-item">
        <div className="summary-list-item-picture-container">
          <img src={picture} alt={name} className="summary-list-item-picture" />
        </div>
        <div className="summary-list-item-text-container">
          <h6 className="summary-list-item-name">{name}</h6>
          <p className="summary-list-item-price">
            {priceWithCommas(totalPrice)}
          </p>
        </div>
        <p className="summary-list-item-quantity">{`${quantity}x`}</p>
      </li>
    );
}

export default SummaryListItem;