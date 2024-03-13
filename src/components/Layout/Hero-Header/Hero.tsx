import { FC, useEffect } from "react";
import { useGetNewGoodsQuery } from "../../../redux/services/goods";
import HeroLoader from "./HeroLoader";
import { Params, useLocation, useParams } from "react-router-dom";
import MobileMenu from "../../Mobile-Menu/MobileMenu";
import HeroNewProductContainer from "./HeroNewProductContainer";
import { scrollUpFunc } from "../../../utils/scrollUpFunc";

const Hero: FC = () => {
  const { data, isFetching } = useGetNewGoodsQuery();
  const { pathname }: { pathname: string } = useLocation();
  const { productId }: Readonly<Params<string>> = useParams();

  useEffect(() => {
    scrollUpFunc();
  }, [pathname, data]);

  return (
    <>
      {(productId || pathname === "/checkout") && (
        <div className="hero-productId">
          <MobileMenu />
        </div>
      )}
      {!productId && pathname !== "/cart" && pathname !== "/checkout" && (
        <>
          {pathname === "/" ? (
            <div className="hero">
              <MobileMenu />
              {isFetching ? (
                <HeroLoader />
              ) : (
                <HeroNewProductContainer
                  name={data?.name}
                  description={data?.description}
                  productId={data?._id}
                    previewImage={data?.previewImage}
                    category={data?.category}
                />
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
