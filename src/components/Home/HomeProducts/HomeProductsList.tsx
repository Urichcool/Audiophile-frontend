import { FC } from "react";
import { useGetOtherGoodsQuery } from "../../../redux/services/goods";
import HomeProductsSpeaker from "./HomeProductsSpeaker";
import HomeProductsHeadphone from "./HomeProductsHeadphone";
import HomeProductsEarphone from "./HomeProductsEarphone";

const HomeProductsList: FC = () => {
  const { data, isFetching } = useGetOtherGoodsQuery();

  return (
    <ul>
      <li>
        <HomeProductsSpeaker data={data && data[2]} isFetching={isFetching} />
      </li>
      <li>
        <HomeProductsHeadphone data={data && data[0]} isFetching={isFetching} />
      </li>
      <li>
        <HomeProductsEarphone data={data && data[1]} isFetching={isFetching} />
      </li>
    </ul>
  );
};

export default HomeProductsList;
