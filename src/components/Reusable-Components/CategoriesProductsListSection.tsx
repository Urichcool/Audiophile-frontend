import { FC } from "react";
import { IGoods } from "../../interfaces/goods/goods";
import CategoriesProductsListItem from "./CategoriesProductsListItem";
import Loader from "./Loader";

interface ICategoriesProductsListSectionProps {
  data: IGoods[] | undefined;
  isFetching: boolean;
}

const CategoriesProductsListSection: FC<
  ICategoriesProductsListSectionProps
> = ({ data, isFetching }) => {
  const dataSortedByNew: IGoods[] | [] = data
    ? [...data].sort(
        (product1: IGoods, product2: IGoods) =>
          Number(product2.new) - Number(product1.new)
      )
    : [];
  return (
    <>
      {isFetching ? (
        <section className="categories-products-list-section-loading">
          <Loader />
        </section>
      ) : (
        <section className="categories-products-list-section">
          <ul>
            {dataSortedByNew.sort().map((product, index) => (
              <CategoriesProductsListItem
                key={product._id}
                previewImage={product.previewImage}
                isNew={product.new}
                name={product.name}
                description={product.description}
                isPair={(index + 1) % 2 === 0}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default CategoriesProductsListSection;
