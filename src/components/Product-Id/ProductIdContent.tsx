import { FC } from "react";
import GoBackButton from "../Reusable-Components/Buttons/GoBackButton";
import { Params, useParams } from "react-router-dom";
import { useGetGoodsByIdQuery } from "../../redux/services/goods";
import { Audio } from "react-loader-spinner";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ProductIdContentDescription from "./ProductIdContentDescription";
import ProductIdContentFeatures from "./ProductIdContentFeatures";
import ProductIdContentGallery from "./ProductIdContentGallery";
import { LuSearchX } from "react-icons/lu";

const ProductIdContent: FC = () => {
  const { productId }: Readonly<Params<string>> = useParams();
  const { data, isFetching, isError} = useGetGoodsByIdQuery(productId!);

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
        <>
          {isError ? (
            <div className="product-id-page-not-found-container">
              <h3 className="H3-manrope-bold">Product not found</h3>
              <LuSearchX color="#d87d4a" />
            </div>
          ) : (
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce
              offset={0}
            >
              <ProductIdContentDescription
                pictureSrc={data?.image}
                name={data?.name}
                isNew={data?.new}
                description={data?.description}
                price={data?.price}
                productId={data?._id}
                previewImage={data?.previewImage.mobile}
                category={data?.category}
              />
              <ProductIdContentFeatures
                features={data?.features}
                includes={data?.includes}
              />
              <ProductIdContentGallery
                gallery={data?.gallery}
                name={data?.name}
              />
            </AnimationOnScroll>
          )}
        </>
      )}
    </>
  );
};

export default ProductIdContent;
