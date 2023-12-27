import { FC } from "react";
import Button1 from "./Buttons/Button1";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface ICategoriesProductsListItemProps {
  previewImage: { mobile: string; tablet: string; desktop: string };
  isNew: boolean;
  name: string;
  description: string;
  isEven: boolean;
  id: string
}

const CategoriesProductsListItem: FC<ICategoriesProductsListItemProps> = ({
  previewImage,
  name,
  isNew,
  description,
  isEven,
  id
}) => {
  return (
    <li
      className={
        isEven
          ? "categories-products-list-item-even"
          : "categories-products-list-item"
      }
    >
      <div className="categories-products-list-item-picture-container">
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce offset={0}>
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
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll
        animateIn={isEven ? "animate__fadeInLeft" : "animate__fadeInRight"}
        delay={500}
        animateOnce
        offset={0}
      >
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
          <Button1 id={id} testId={"id-page-nav-button"} />
        </div>
      </AnimationOnScroll>
    </li>
  );
};

export default CategoriesProductsListItem;
