import {FC} from "react";
import WebSiteDescription from "../components/Reusable-Components/WebSiteDescription";
import CategoriesList from "../components/Reusable-Components/CategoriesList";
import CategoriesProductsListSection from "../components/Reusable-Components/CategoriesProductsListSection";
import { useGetAllHeadphonesQuery } from "../redux/services/goods";

const HeadphonesPage: FC = () => {
  const { data, isFetching } = useGetAllHeadphonesQuery();

  return (
    <div className="container">
      <CategoriesProductsListSection
        data={data && data}
        isFetching={isFetching}
      />
      <section className="categories-products-list-site-categories-list-section">
        <CategoriesList />
      </section>
      <section className="categories-products-list-site-description-section">
        <WebSiteDescription />
      </section>
    </div>
  );
};

export default HeadphonesPage;
