import {FC} from 'react';
import { useGetAllSpeakersQuery } from '../redux/services/goods';
import CategoriesProductsListSection from '../components/Reusable-Components/CategoriesProductsListSection';
import CategoriesList from '../components/Reusable-Components/CategoriesList';
import WebSiteDescription from '../components/Reusable-Components/WebSiteDescription';

const SpeakersPage:FC = () => {
    const { data, isFetching } = useGetAllSpeakersQuery();
    return (
      <div className="container">
        <CategoriesProductsListSection
          data={data && data}
          isFetching={isFetching}
        />
        <section className="headphones-page-site-categories-list-section">
          <CategoriesList />
        </section>
        <section className="headphones-page-site-description-section">
          <WebSiteDescription />
        </section>
      </div>
    );
}

export default SpeakersPage;