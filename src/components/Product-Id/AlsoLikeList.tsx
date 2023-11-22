import { FC } from "react";
import { useGetOtherGoodsQuery } from "../../redux/services/goods";

const AlsoLikeList: FC = () => {
  const { data, isFetching } = useGetOtherGoodsQuery();
  return (
    <>
      <h3 className="H3-manrope-bold also-like-list-title">
        You may also like
      </h3>
      <ul className="also-like-list"></ul>
    </>
  );
};

export default AlsoLikeList;
