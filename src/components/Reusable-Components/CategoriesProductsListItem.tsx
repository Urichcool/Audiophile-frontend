import { FC } from "react";
import Button1 from "./Buttons/Button1";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Picture from "./Picture";

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
          <Picture
            imageSrc={{
              desktop: previewImage.desktop,
              tablet: previewImage.tablet,
              mobile: previewImage.mobile,
            }}
            sizes={{
              desktopWidth: "270",
              desktopHeight: "300",
              tabletWidth: "220",
              tabletHeight: "250",
              mobileWidth: "160",
              mobileHeight: "180",
            }}
            name={name}
            className=""
          />
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
