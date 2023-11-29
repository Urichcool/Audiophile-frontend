import React from "react";
import GoBackButton from "../Reusable-Components/Buttons/GoBackButton";
import { Params, useParams } from "react-router-dom";
import { useGetGoodsByIdQuery } from "../../redux/services/goods";
import { priceWithCommas } from "../../utils/priceWithCommas";
import AddToCartForm from "./AddToCartForm";

const ProductIdContent = () => {
  const { productId }: Readonly<Params<string>> = useParams();
  const { data, isFetching } = useGetGoodsByIdQuery(productId!);
  return (
    <>
      <GoBackButton />
      <div className="product-id-page-picture-and-description-container">
        <div className="product-id-page-picture-container">
          <picture>
            <source
              srcSet={data?.image.desktop}
              media="(min-width: 1440px)"
              width={"400"}
              height={"400"}
            />
            <source
              srcSet={data?.image.tablet}
              media="(min-width: 768px)"
              width={"281"}
              height={"450"}
            />
            <img
              src={data?.image.mobile}
              alt={data?.name}
              width={"300"}
              height={"300"}
            />
          </picture>
        </div>
        <div className="product-id-page-description-container">
          {data?.new && (
            <p className="Overline-manrope-regular product-id-page-new-product-text">
              NEW PRODUCT
            </p>
          )}
          <h2 className="H2-manrope-bold product-id-page-product-title">
            {data?.name}
          </h2>
          <p className="Body-manrope-medium product-id-page-product-description">
            {data?.description}
          </p>
          <p className="product-id-page-product-price">
            {priceWithCommas(data?.price)}
          </p>
          <AddToCartForm />
        </div>
      </div>
      <div className="product-id-page-features-and-includes-container">
        <div className="product-id-page-features-container">
          <h3 className="H3-manrope-bold product-id-page-features-title">
            Features
          </h3>
          <p className="product-id-page-features-text Body-manrope-medium">
            {data?.features}
          </p>
        </div>
        <div>
          <h3 className="H3-manrope-bold product-id-page-includes-title">
            in the box
          </h3>
        </div>
      </div>
    </>
  );
};

export default ProductIdContent;
