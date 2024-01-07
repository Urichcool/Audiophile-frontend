import React from "react";
import GoBackButton from "../Reusable-Components/Buttons/GoBackButton";
import { Params, useParams } from "react-router-dom";
import { useGetGoodsByIdQuery } from "../../redux/services/goods";
import { priceWithCommas } from "../../utils/priceWithCommas";
import AddToCartForm from "./AddToCartForm";
import { Audio } from "react-loader-spinner";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ProductIdContent = () => {
  const { productId }: Readonly<Params<string>> = useParams();
  const { data, isFetching } = useGetGoodsByIdQuery(productId!);
  return (
    <>
      <GoBackButton testId={"product-id-page-go-back-button" } />
      {isFetching ? (
        <div className="product-id-page-loader">
          <Audio width={"250"} height={"250"} color="#d87d4a" />
        </div>
      ) : (
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOnce
          offset={0}
        >
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
                <AddToCartForm productId={data?._id} name={data?.name} price={data?.price} picture={data?.previewImage.mobile} />
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
            <div className="product-id-page-includes-container">
              <h3 className="H3-manrope-bold product-id-page-includes-title">
                in the box
              </h3>
              <ul className="product-id-page-includes-list">
                {data?.includes.map(({ quantity, item, _id }) => (
                  <li className="product-id-page-includes-list-item" key={_id}>
                    <p className="product-id-page-includes-list-item-quantity-text">{`${quantity}x`}</p>
                    <p className="product-id-page-includes-list-item-text Body-manrope-medium">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="product-id-page-gallery">
            <div>
              <picture>
                <source
                  srcSet={data?.gallery.first.desktop}
                  media="(min-width: 1440px)"
                  width={"445"}
                  height={"282"}
                />
                <source
                  srcSet={data?.gallery.first.tablet}
                  media="(min-width: 768px)"
                  width={"277"}
                  height={"174"}
                />
                <img
                  className="product-id-page-gallery-picture-1"
                  src={data?.gallery.first.mobile}
                  alt={data?.name}
                  width={"327"}
                  height={"174"}
                />
              </picture>
              <picture>
                <source
                  srcSet={data?.gallery.second.desktop}
                  media="(min-width: 1440px)"
                  width={"445"}
                  height={"282"}
                />
                <source
                  srcSet={data?.gallery.second.tablet}
                  media="(min-width: 768px)"
                  width={"277"}
                  height={"174"}
                />
                <img
                  className="product-id-page-gallery-picture-2"
                  src={data?.gallery.second.mobile}
                  alt={data?.name}
                  width={"327"}
                  height={"174"}
                />
              </picture>
            </div>
            <picture>
              <source
                srcSet={data?.gallery.third.desktop}
                media="(min-width: 1440px)"
                width={"635"}
                height={"586"}
              />
              <source
                srcSet={data?.gallery.third.tablet}
                media="(min-width: 768px)"
                width={"395"}
                height={"370"}
              />
              <img
                className="product-id-page-gallery-picture-3"
                src={data?.gallery.third.mobile}
                alt={data?.name}
                width={"327"}
                height={"370"}
              />
            </picture>
          </div>
        </AnimationOnScroll>
      )}
    </>
  );
};

export default ProductIdContent;
