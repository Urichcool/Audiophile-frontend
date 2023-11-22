import { FC } from "react";
import { useGetOtherGoodsQuery } from "../../redux/services/goods";
import AlsoLikeListItem from "./AlsoLikeListItem";

const AlsoLikeList: FC = () => {
  const { data, isFetching } = useGetOtherGoodsQuery();
  return (
    <>
      <h3 className="H3-manrope-bold also-like-list-title">
        You may also like
      </h3>
      <ul className="also-like-list">
        {data?.map(({ name, previewImage, _id }) => <AlsoLikeListItem key={_id} name={name} image={previewImage} id={_id} isFetching={isFetching} />)}
      </ul>
    </>
  );
};

export default AlsoLikeList;
