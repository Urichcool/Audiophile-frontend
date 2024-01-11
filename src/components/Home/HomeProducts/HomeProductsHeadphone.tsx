import { FC } from "react";
import { IGoods } from "../../../interfaces/goods/goods";
import Button2 from "../../Reusable-Components/Buttons/Button2";
import Loader from "../../Reusable-Components/Loader";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Picture from "../../Reusable-Components/Picture";

interface IHomeProductsHeadphoneProps {
  data?: IGoods;
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
            <Picture
              imageSrc={{
                desktop: data?.previewImage.desktop,
                tablet: data?.previewImage.tablet,
                mobile: data?.previewImage.mobile,
              }}
              sizes={{
                desktopWidth: "270",
                desktopHeight: "300",
                tabletWidth: "220",
                tabletHeight: "250",
                mobileWidth: "200",
                mobileHeight: "250",
              }}
              name={data?.name}
              className="home-products-headphone-picture"
            />
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
              <Button2 id={data?._id} />
            </div>
          </AnimationOnScroll>
        </>
      )}
    </div>
  );
};

export default HomeProductsHeadphone;
