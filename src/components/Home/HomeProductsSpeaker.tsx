import { FC } from "react";
import { IGoods } from "../../interfaces/goods/goods";
import Loader from "../Reusable-Components/Loader";
import { shortDescrFunc } from "../../utils/shortDescrFunc";
import Button4 from "../Reusable-Components/Buttons/Button4";

interface IHomeProductsSpeakerProps {
  data: IGoods | undefined;
  isFetching: boolean;
}

const HomeProductsSpeaker: FC<IHomeProductsSpeakerProps> = ({
  data,
  isFetching,
}) => {
  return (
    <div className="home-products-speakers-container">
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <picture className="home-products-speakers-picture">
            <source
              srcSet={data && data.previewImage.desktop}
              media="(min-width: 1440px)"
              width={"410"}
              height={"493"}
            />
            <source
              srcSet={data && data.previewImage.desktop}
              media="(min-width: 768px)"
              width={"197"}
              height={"237"}
            />
            <img
              src={data && data.previewImage.desktop}
              alt={data && data.name}
              width={"172"}
              height={"207"}
            />
          </picture>
          <div className="home-products-speakers-circle1"></div>
          <div className="home-products-speakers-circle2"></div>
          <div className="home-products-speakers-circle3"></div>
          <div className="home-products-speakers-content">
            <h2 className="H1-manrope-bold home-products-speakers-title">
              {data?.name}
            </h2>
            <p className="Body-manrope-medium home-products-speakers-description">
              {shortDescrFunc(data?.description)}
            </p>
            <Button4 />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeProductsSpeaker;
