import { FC } from "react";
import { useGetOtherGoodsQuery } from "../../redux/services/goods";
import AlsoLikeListItem from "./AlsoLikeListItem";
import { Audio } from "react-loader-spinner";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AlsoLikeList: FC = () => {
  const { data, isFetching } = useGetOtherGoodsQuery();
  return (
    <>
      <h3 className="H3-manrope-bold also-like-list-title">
        You may also like
      </h3>
      {isFetching ? (
        <div className="product-id-page-loader">
          <Audio width={"250"} height={"250"} color="#d87d4a" />
        </div>
      ) : (
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOnce
          offset={0}
        >
          <ul className="also-like-list">
            {data?.map(({ name, previewImage, _id, category }) => (
              <AlsoLikeListItem
                key={_id}
                name={name}
                image={previewImage}
                id={_id}
                category={category}
              />
            ))}
          </ul>
        </AnimationOnScroll>
      )}
    </>
  );
};

export default AlsoLikeList;
