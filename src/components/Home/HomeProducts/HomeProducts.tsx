import { FC } from "react";
import { useGetOtherGoodsQuery } from "../../../redux/services/goods";
import HomeProductsSpeaker from "./HomeProductsSpeaker";
import HomeProductsHeadphone from "./HomeProductsHeadphone";

const HomeProducts: FC = () => {
  const { data, isFetching } = useGetOtherGoodsQuery();

  return (
    <ul>
      <li>
        <HomeProductsSpeaker data={data && data[2]} isFetching={isFetching} />
      </li>
      <li>
        <HomeProductsHeadphone data={data && data[0]} isFetching={isFetching} />
      </li>
      <li></li>
    </ul>
  );
};

export default HomeProducts;
