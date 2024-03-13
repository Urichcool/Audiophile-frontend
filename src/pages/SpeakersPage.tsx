import {FC, useEffect} from 'react';
import { useGetAllSpeakersQuery } from '../redux/services/goods';
import CategoriesProductsListSection from '../components/Reusable-Components/CategoriesProductsListSection';
import CategoriesList from '../components/Reusable-Components/CategoriesList';
import WebSiteDescription from '../components/Reusable-Components/WebSiteDescription';
import { scrollUpFunc } from '../utils/scrollUpFunc';

const SpeakersPage:FC = () => {
  const { data, isFetching } = useGetAllSpeakersQuery();
   useEffect(() => {
     scrollUpFunc();
   }, [data]);

  return (
    <div data-testid="speakers-page">
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

export default SpeakersPage;