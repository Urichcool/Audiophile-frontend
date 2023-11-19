import {FC, useEffect} from 'react';
import { useGetAllEarphonesQuery } from '../redux/services/goods';
import CategoriesProductsListSection from '../components/Reusable-Components/CategoriesProductsListSection';
import CategoriesList from '../components/Reusable-Components/CategoriesList';
import WebSiteDescription from '../components/Reusable-Components/WebSiteDescription';

const EarphonesPage:FC = () => {
  const { data, isFetching } = useGetAllEarphonesQuery();
   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, [data]);
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
}

export default EarphonesPage;