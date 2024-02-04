import { FC } from "react";
import Picture from "../Reusable-Components/Picture";
import { priceWithCommas } from "../../utils/priceWithCommas";
import AddToCartForm from "./AddToCartForm";

interface IProductIdContentDescriptionProps {
  pictureSrc?: { desktop: string; tablet: string; mobile: string };
  name?: string;
  isNew?: boolean;
  description?: string;
  price?: number;
  productId?: string;
  previewImage?: string;
}

const ProductIdContentDescription: FC<IProductIdContentDescriptionProps> = ({
  pictureSrc,
  name,
  isNew,
  description,
  price,
  productId,
  previewImage,
}) => {
  return (
    <div className="product-id-page-picture-and-description-container">
      <div className="product-id-page-picture-container">
        <Picture
          imageSrc={{
            desktop: pictureSrc?.desktop,
            tablet: pictureSrc?.tablet,
            mobile: pictureSrc?.mobile,
          }}
          sizes={{
            desktopWidth: "400",
            desktopHeight: "400",
            tabletWidth: "281",
            tabletHeight: "450",
            mobileWidth: "300",
            mobileHeight: "300",
          }}
          name={name}
          className=""
        />
      </div>
      <div className="product-id-page-description-container">
        {isNew && (
          <p className="Overline-manrope-regular product-id-page-new-product-text">
            NEW PRODUCT
          </p>
        )}
        <h2
          className="H2-manrope-bold product-id-page-product-title"
          data-testid="product-name"
        >
          {name}
        </h2>
        <p className="Body-manrope-medium product-id-page-product-description">
          {description}
        </p>
        <p className="product-id-page-product-price">
          {priceWithCommas(price)}
        </p>
        <AddToCartForm
          productId={productId}
          name={name}
          price={price}
          picture={previewImage}
        />
      </div>
    </div>
  );
};

export default ProductIdContentDescription;
