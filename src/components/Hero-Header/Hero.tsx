import { FC } from "react";
import { useGetNewGoodsQuery } from "../../redux/services/goods";
import { shortDescrFunc } from "../../utils/shortDescrFunc";
import Button1 from "../Reusable-Components/Buttons/Button1";

const Hero: FC = () => {
  const { data } = useGetNewGoodsQuery();
  return (
    <div className="hero">
      <div className="container">
        <p className="Overline-manrope-regular hero-new-product-text">
          new product
        </p>
        <h1 className="H1-manrope-bold hero-new-product-title">{data?.name}</h1>
        <p className="Body-manrope-medium hero-new-product-description">
          {shortDescrFunc(data?.description)}
        </p>
        <Button1 />
      </div>
    </div>
  );
};

export default Hero;
