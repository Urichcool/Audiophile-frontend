import { FC } from "react";
import { IGoods } from "../../interfaces/goods/goods";
import CategoriesProductsListItem from "./CategoriesProductsListItem";
import { Audio } from "react-loader-spinner";

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
          <Audio width={"250"} height={"250"} color="#d87d4a" />
        </section>
      ) : (
        <section className="categories-products-list-section">
          <div className="container">
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
          </div>
        </section>
      )}
    </>
  );
};

export default CategoriesProductsListSection;
