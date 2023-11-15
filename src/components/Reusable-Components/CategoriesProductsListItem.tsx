import { FC } from "react";
import Button1 from "./Buttons/Button1";

interface ICategoriesProductsListItemProps {
  previewImage: { mobile: string; tablet: string; desktop: string };
  isNew: boolean;
  name: string;
  description: string;
  isPair: boolean;
}

const CategoriesProductsListItem: FC<ICategoriesProductsListItemProps> = ({
  previewImage,
  name,
  isNew,
  description,
  isPair,
}) => {
  return (
    <li
      className={
        isPair
          ? "categories-products-list-item-pair"
          : "categories-products-list-item"
      }
    >
      <div className="categories-products-list-item-picture-container">
        <picture>
          <source
            srcSet={previewImage.desktop}
            media="(min-width: 1440px)"
            width={"270"}
            height={"300"}
          />
          <source
            srcSet={previewImage.desktop}
            media="(min-width: 768px)"
            width={"220"}
            height={"250"}
          />
          <img
            src={previewImage.desktop}
            alt={name}
            width={"160"}
            height={"180"}
          />
        </picture>
      </div>
      <div className="categories-products-list-item-content-container">
        {isNew && (
          <p className="Overline-manrope-regular categories-products-list-item-new-product-text">
            NEW PRODUCT
          </p>
        )}
        <h2 className="H2-manrope-bold categories-products-list-item-title">
          {name}
        </h2>
        <p className="Body-manrope-medium categories-products-list-item-description">
          {description}
        </p>
        <Button1 />
      </div>
    </li>
  );
};

export default CategoriesProductsListItem;
