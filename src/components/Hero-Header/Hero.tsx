import { FC } from "react";
import { useGetNewGoodsQuery } from "../../redux/services/goods";
import { shortDescrFunc } from "../../utils/shortDescrFunc";
import Button1 from "../Reusable-Components/Buttons/Button1";
import HeroLoader from "./HeroLoader";
import { useLocation } from "react-router-dom";

const Hero: FC = () => {
  const { data, isFetching } = useGetNewGoodsQuery();
  const { pathname }:{pathname:string} = useLocation();

  return (
    <>
      {pathname === "/" ? (
        <div className="hero">
          {isFetching ? (
            <HeroLoader />
          ) : (
            <div className="container">
              <div className="hero-container">
                <p className="Overline-manrope-regular hero-new-product-text">
                  new product
                </p>
                <h1 className="H1-manrope-bold hero-new-product-title">
                  {data?.name}
                </h1>
                <p className="Body-manrope-medium hero-new-product-description">
                  {shortDescrFunc(data?.description)}
                </p>
                <Button1 />
              </div>
              <picture className="hero-new-product-picture">
                <source
                  srcSet={data?.newImage.desktop}
                  media="(min-width: 1440px)"
                />
                <source
                  srcSet={data?.newImage.tablet}
                  media="(min-width: 768px)"
                />
                <img src={data?.newImage.mobile} alt={data?.name} />
              </picture>
            </div>
          )}
        </div>
      ) : (
        <div className="hero-categories">
          <div className="container">
            <h2 className="H2-manrope-bold hero-categories-title">
              {pathname.substring(1)}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
