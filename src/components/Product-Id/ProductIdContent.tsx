import React from "react";
import GoBackButton from "../Reusable-Components/Buttons/GoBackButton";
import { Params, useParams } from "react-router-dom";
import { useGetGoodsByIdQuery } from "../../redux/services/goods";
import { priceWithCommas } from "../../utils/priceWithCommas";
import AddToCartForm from "./AddToCartForm";
import { Audio } from "react-loader-spinner";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Picture from "../Reusable-Components/Picture";

const ProductIdContent = () => {
  const { productId }: Readonly<Params<string>> = useParams();
  const { data, isFetching } = useGetGoodsByIdQuery(productId!);
  return (
    <>
      <GoBackButton testId={"product-id-page-go-back-button"} />
      {isFetching ? (
        <div
          className="product-id-page-loader"
          data-testid="product-id-page-loader"
        >
          <Audio width={"250"} height={"250"} color="#d87d4a" />
        </div>
      ) : (
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce offset={0}>
          <div className="product-id-page-picture-and-description-container">
            <div className="product-id-page-picture-container">
              <Picture
                imageSrc={{
                  desktop: data?.image.desktop,
                  tablet: data?.image.tablet,
                  mobile: data?.image.mobile,
                }}
                sizes={{
                  desktopWidth: "400",
                  desktopHeight: "400",
                  tabletWidth: "281",
                  tabletHeight: "450",
                  mobileWidth: "300",
                  mobileHeight: "300",
                }}
                name={data?.name}
                className=""
              />
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
              <AddToCartForm
                productId={data?._id}
                name={data?.name}
                price={data?.price}
                picture={data?.previewImage.mobile}
              />
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
              <Picture
                imageSrc={{
                  desktop: data?.gallery.first.desktop,
                  tablet: data?.gallery.first.tablet,
                  mobile: data?.gallery.first.mobile,
                }}
                sizes={{
                  desktopWidth: "445",
                  desktopHeight: "282",
                  tabletWidth: "277",
                  tabletHeight: "174",
                  mobileWidth: "327",
                  mobileHeight: "174",
                }}
                name={data?.name}
                imgClassName="product-id-page-gallery-picture-1"
              />
              <Picture
                imageSrc={{
                  desktop: data?.gallery.second.desktop,
                  tablet: data?.gallery.second.tablet,
                  mobile: data?.gallery.third.mobile,
                }}
                sizes={{
                  desktopWidth: "445",
                  desktopHeight: "282",
                  tabletWidth: "277",
                  tabletHeight: "174",
                  mobileWidth: "327",
                  mobileHeight: "174",
                }}
                name={data?.name}
                imgClassName="product-id-page-gallery-picture-2"
              />
            </div>
            <Picture
              imageSrc={{
                desktop: data?.gallery.third.desktop,
                tablet: data?.gallery.third.tablet,
                mobile: data?.gallery.third.mobile,
              }}
              sizes={{
                desktopWidth: "635",
                desktopHeight: "586",
                tabletWidth: "395",
                tabletHeight: "370",
                mobileWidth: "327",
                mobileHeight: "370",
              }}
              name={data?.name}
              imgClassName="product-id-page-gallery-picture-3"
            />
          </div>
        </AnimationOnScroll>
      )}
    </>
  );
};

export default ProductIdContent;
