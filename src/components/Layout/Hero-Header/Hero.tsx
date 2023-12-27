import { FC, useEffect } from "react";
import { useGetNewGoodsQuery } from "../../../redux/services/goods";
import { shortDescrFunc } from "../../../utils/shortDescrFunc";
import Button1 from "../../Reusable-Components/Buttons/Button1";
import HeroLoader from "./HeroLoader";
import { Params, useLocation, useParams } from "react-router-dom";
import MobileMenu from "../../Mobile-Menu/MobileMenu";

const Hero: FC = () => {
  const { data, isFetching } = useGetNewGoodsQuery();
  const { pathname }: { pathname: string } = useLocation();
  const { productId }: Readonly<Params<string>> = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, data]);

  return (
    <>
      {productId && (
        <div className="hero-productId">
          <MobileMenu />
        </div>
      )}
      {!productId && pathname !== "/cart" && (
        <>
          {pathname === "/" ? (
            <div className="hero">
              <MobileMenu />
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
                      <Button1 id={data?._id} testId={"id-page-nav-button"} />
                  </div>
                  <picture className="hero-new-product-picture">
                    <source
                      srcSet={data?.previewImage.desktop}
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcSet={data?.previewImage.tablet}
                      media="(min-width: 768px)"
                    />
                    <img src={data?.previewImage.mobile} alt={data?.name} />
                  </picture>
                </div>
              )}
            </div>
          ) : (
            <div className="hero-categories">
              <MobileMenu />
              <div className="container">
                <h2 className="H2-manrope-bold hero-categories-title">
                  {pathname.substring(1)}
                </h2>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Hero;
