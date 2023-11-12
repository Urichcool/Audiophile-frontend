import { FC } from "react";
import { IGoods } from "../../../interfaces/goods/goods";
import Button2 from "../../Reusable-Components/Buttons/Button2";
import Loader from "../../Reusable-Components/Loader";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface IHomeProductsHeadphoneProps {
  data: IGoods | undefined;
  isFetching: boolean;
}

const HomeProductsHeadphone: FC<IHomeProductsHeadphoneProps> = ({
  data,
  isFetching,
}) => {
  return (
    <div className="home-products-headprone-container">
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            delay={1000}
            animateOnce
            offset={0}
          >
            <picture className="home-products-headphone-picture">
              <source
                srcSet={data?.previewImage.desktop}
                media="(min-width: 1440px)"
                width={"270"}
                height={"300"}
              />
              <source
                srcSet={data?.previewImage.desktop}
                media="(min-width: 768px)"
                width={"220"}
                height={"250"}
              />
              <img
                width={"200"}
                height={"250"}
                src={data?.previewImage.desktop}
                alt={data?.name}
              />
            </picture>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            delay={1500}
            animateOnce
            offset={0}
          >
            <div className="home-products-headprone-content">
              <h3 className="H4-manrope-bold home-products-headprone-title">
                {data?.name}
              </h3>
              <Button2 />
            </div>
          </AnimationOnScroll>
        </>
      )}
    </div>
  );
};

export default HomeProductsHeadphone;
