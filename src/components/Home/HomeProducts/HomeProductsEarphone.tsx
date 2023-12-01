import { FC } from "react";
import { IGoods } from "../../../interfaces/goods/goods";
import Button2 from "../../Reusable-Components/Buttons/Button2";
import Loader from "../../Reusable-Components/Loader";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
            <picture>
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
                src={data?.previewImage.desktop}
                alt={data?.name}
                width={"160"}
                height={"180"}
              />
            </picture>
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
