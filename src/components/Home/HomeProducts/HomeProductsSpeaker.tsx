import { FC } from "react";
import { IGoods } from "../../../interfaces/goods/goods";
import Loader from "../../Reusable-Components/Loader";
import { shortDescrFunc } from "../../../utils/shortDescrFunc";
import Button4 from "../../Reusable-Components/Buttons/Button4";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Picture from "../../Reusable-Components/Picture";

interface IHomeProductsSpeakerProps {
  data: IGoods | undefined;
  isFetching: boolean;
}

const HomeProductsSpeaker: FC<IHomeProductsSpeakerProps> = ({
  data,
  isFetching,
}) => {
  return (
    <div
      className="home-products-speakers-container"
      data-testid={"home-products-speaker-section"}
    >
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            delay={2000}
            animateOnce
            style={{ zIndex: "2", position: "relative" }}
            offset={0}
          >
            <Picture
              imageSrc={{
                desktop: data?.previewImage.desktop,
                tablet: data?.previewImage.tablet,
                mobile: data?.previewImage.mobile,
              }}
              sizes={{
                desktopWidth: "410",
                desktopHeight: "493",
                tabletWidth: "197",
                tabletHeight: "237",
                mobileWidth: "172",
                mobileHeight: "207",
              }}
              name={data?.name}
              className={"home-products-speakers-picture"}
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            delay={500}
            animateOnce
            offset={0}
          >
            <div className="home-products-speakers-circle1" />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            delay={1000}
            animateOnce
            offset={0}
          >
            <div className="home-products-speakers-circle2"></div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            delay={1500}
            animateOnce
            offset={0}
          >
            <div className="home-products-speakers-circle3"></div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            delay={2500}
            animateOnce
            offset={150}
          >
            <div className="home-products-speakers-content">
              <h2 className="H1-manrope-bold home-products-speakers-title">
                {data?.name}
              </h2>
              <p className="Body-manrope-medium home-products-speakers-description">
                {shortDescrFunc(data?.description)}
              </p>
              <Button4 id={data?._id} />
            </div>
          </AnimationOnScroll>
        </>
      )}
    </div>
  );
};

export default HomeProductsSpeaker;
