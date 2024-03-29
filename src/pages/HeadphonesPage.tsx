import { FC, useEffect } from "react";
import WebSiteDescription from "../components/Reusable-Components/WebSiteDescription";
import CategoriesList from "../components/Reusable-Components/CategoriesList";
import CategoriesProductsListSection from "../components/Reusable-Components/CategoriesProductsListSection";
import { useGetAllHeadphonesQuery } from "../redux/services/goods";
import { scrollUpFunc } from "../utils/scrollUpFunc";

const HeadphonesPage: FC = () => {
const { data, isFetching } = useGetAllHeadphonesQuery();
  useEffect(() => {
   scrollUpFunc();
  }, [data]);

  
  return (
    <div data-testid="headphones-page">
      <CategoriesProductsListSection
        data={data && data}
        isFetching={isFetching}
      />
      <div className="container">
        <section className="categories-products-list-site-categories-list-section">
          <CategoriesList />
        </section>
        <section className="categories-products-list-site-description-section">
          <WebSiteDescription />
        </section>
      </div>
    </div>
  );
};

export default HeadphonesPage;
