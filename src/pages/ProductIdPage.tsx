import {FC} from 'react';
import WebSiteDescription from '../components/Reusable-Components/WebSiteDescription';
import CategoriesList from '../components/Reusable-Components/CategoriesList';

const ProductIdPage:FC = () => {
    return (
      <section className="product-id-page-section">
        <div className="container">
          <section className="product-id-page-website-categories-list-section">
            <CategoriesList />
          </section>
          <section className="product-id-page-website-description-section">
            <WebSiteDescription />
          </section>
        </div>
      </section>
    );
}

export default ProductIdPage;