import { FC } from "react";
import { useGetOtherGoodsQuery } from "../../../redux/services/goods";
import HomeProductsSpeaker from "./HomeProductsSpeaker";

const HomeProducts: FC = () => {
  const { data, isFetching } = useGetOtherGoodsQuery();

  return (
    <>
      <HomeProductsSpeaker data={data && data[2]} isFetching={isFetching} />
      <div className="home-products-headprones-container"></div>
    </>
  );
};

export default HomeProducts;
