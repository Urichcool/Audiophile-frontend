import { FC } from "react";
import Button3 from "./Buttons/Button3";
import ShadowIcon from "../../images/icons/ShadowIcon";

const CategoriesList: FC = () => {
  return (
    <>
      <ul className="categories-list">
        <li className="categories-list-item">
          <div className="categories-list-hadphones-image" />
          <div className="categories-list-icon">
            <ShadowIcon />
          </div>
          <h6 className="H6-manrope-bold categories-list-item-title">
            headphones
          </h6>
          <Button3 to={"headphones"} />
        </li>
        <li className="categories-list-item">
          <div className="categories-list-speakers-image" />
          <div className="categories-list-icon">
            <ShadowIcon />
          </div>
          <h6 className="H6-manrope-bold categories-list-item-title">
            speakers
          </h6>
          <Button3 to={"speakers"} />
        </li>
        <li className="categories-list-item">
          <div className="categories-list-earphones-image" />
          <div className="categories-list-icon">
            <ShadowIcon />
          </div>
          <h6 className="H6-manrope-bold categories-list-item-title">
            earphones
          </h6>
          <Button3 to={"earphones"} />
        </li>
      </ul>
    </>
  );
};

export default CategoriesList;
