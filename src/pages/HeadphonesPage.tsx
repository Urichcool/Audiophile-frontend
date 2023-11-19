import { FC, useEffect } from "react";
import WebSiteDescription from "../components/Reusable-Components/WebSiteDescription";
import CategoriesList from "../components/Reusable-Components/CategoriesList";
import CategoriesProductsListSection from "../components/Reusable-Components/CategoriesProductsListSection";
import { useGetAllHeadphonesQuery } from "../redux/services/goods";

const HeadphonesPage: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { data, isFetching } = useGetAllHeadphonesQuery();

  return (
    <>
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
    </>
  );
};

export default HeadphonesPage;
