import { FC } from "react";
import { IGoods } from "../../interfaces/goods/goods";

interface ICategoriesProductsListSectionProps {
  data: IGoods[] | undefined;
  isFetching: boolean;
}

const CategoriesProductsListSection: FC<
  ICategoriesProductsListSectionProps
> = ({ data, isFetching }) => {
  const dataSortedByNew: IGoods[] | [] = data
    ? [...data].sort((product1: IGoods, product2: IGoods) => {
        return Number(product1.new) + Number(product2.new);
      })
    : [];
  return (
    <section className="categories-products-list-section">
      <ul>{dataSortedByNew.sort().map((product) => <li>{product.name}</li>)}</ul>
    </section>
  );
};

export default CategoriesProductsListSection;
