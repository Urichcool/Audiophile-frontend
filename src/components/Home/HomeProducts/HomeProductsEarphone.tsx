import { FC } from "react";
import { IGoods } from "../../../interfaces/goods/goods";
import Button2 from "../../Reusable-Components/Buttons/Button2";
import Loader from "../../Reusable-Components/Loader";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Picture from "../../Reusable-Components/Picture";

interface IHomeProductsEarphoneProps {
  data: IGoods | undefined;
  isFetching: boolean;
}

const HomeProductsEarphone: FC<IHomeProductsEarphoneProps> = ({
  data,
  isFetching,
}) => {
  return (
    <div className="home-products-earphone-container">
      <div className="home-products-earphone-picture-container">
        {isFetching ? (
          <Loader />
        ) : (
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
                mobileWidth: "160",
                mobileHeight: "180",
                }}
                name={data?.name}
                className=""
            />
          </AnimationOnScroll>
        )}
      </div>
      <div className="home-products-earphone-content-container">
        {isFetching ? (
          <Loader />
        ) : (
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            delay={1500}
            animateOnce
            offset={0}
          >
            <div className="home-products-earphone-content">
              <h3 className="H4-manrope-bold  home-products-earphone-title">
                {data?.name}
              </h3>
              <Button2 id={data?._id} />
            </div>
          </AnimationOnScroll>
        )}
      </div>
    </div>
  );
};

export default HomeProductsEarphone;
