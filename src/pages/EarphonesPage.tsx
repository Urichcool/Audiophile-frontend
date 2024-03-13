import {FC, useEffect} from 'react';
import { useGetAllEarphonesQuery } from '../redux/services/goods';
import CategoriesProductsListSection from '../components/Reusable-Components/CategoriesProductsListSection';
import CategoriesList from '../components/Reusable-Components/CategoriesList';
import WebSiteDescription from '../components/Reusable-Components/WebSiteDescription';
import { scrollUpFunc } from '../utils/scrollUpFunc';

const EarphonesPage:FC = () => {
  const { data, isFetching } = useGetAllEarphonesQuery();
   useEffect(() => {
     scrollUpFunc();
   }, [data]);
  return (
    <div data-testid="earphones-page">
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
}

export default EarphonesPage;