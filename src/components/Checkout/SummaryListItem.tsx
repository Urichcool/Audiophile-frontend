import { FC } from "react";
import { priceWithCommas } from "../../utils/priceWithCommas";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface ISummaryListItemProps {
  picture: string;
  name: string;
  totalPrice: number;
  quantity: number;
  id: string;
  category: string;
}

const SummaryListItem: FC<ISummaryListItemProps> = ({
  picture,
  name,
  totalPrice,
  quantity,
  id,
  category,
}) => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <li className="summary-list-item">
      <button
        className="summary-list-item-nav-button"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => navigate(`${category}/${id}`)}
      >
        <div className={"summary-list-item-picture-container"}>
          <img
            src={picture}
            alt={name}
            className={"summary-list-item-picture"}
          />
        </div>
        <div className="summary-list-item-text-container">
          <h6 className="summary-list-item-name">{name}</h6>
          <p className="summary-list-item-price">
            {priceWithCommas(totalPrice)}
          </p>
        </div>
      </button>

      <p className="summary-list-item-quantity">{`${quantity}x`}</p>
    </li>
  );
};

export default SummaryListItem;
