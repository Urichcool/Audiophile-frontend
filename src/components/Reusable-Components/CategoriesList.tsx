import { FC } from "react";
import Button3 from "./Buttons/Button3";

const CategoriesList: FC = () => {
    return (
      <ul className="categories-list">
        <li className="categories-list-item">
          <h6 className="H6-manrope-bold categories-list-item-title">
            headphones
          </h6>
          <Button3 to={'headphones'} />
        </li>
        <li className="categories-list-item">
          <h6 className="H6-manrope-bold categories-list-item-title">
            speakers
          </h6>
          <Button3 to={"speakers"} />
        </li>
        <li className="categories-list-item">
          <h6 className="H6-manrope-bold categories-list-item-title">
            earphones
          </h6>
          <Button3 to={"earphones"} />
        </li>
      </ul>
    );
};

export default CategoriesList;
