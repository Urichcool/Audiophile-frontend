import { FC } from "react";
import WebSiteDescription from "../components/Reusable-Components/WebSiteDescription";
import CategoriesList from "../components/Reusable-Components/CategoriesList";
import AlsoLikeList from "../components/Product-Id/AlsoLikeList";
import GoBackButton from "../components/Reusable-Components/Buttons/GoBackButton";
import ProductIdContent from "../components/Product-Id/ProductIdContent";

const ProductIdPage: FC = () => {
  return (
    <div className="product-id-page-section" data-testid="product-id-page">
      <div className="container">
        <section className="product-id-page-product-section">
         <ProductIdContent/>
        </section>
        <section className="product-id-page-may-also-like-list-section">
          <AlsoLikeList />
        </section>
        <section className="product-id-page-website-categories-list-section">
          <CategoriesList />
        </section>
        <section className="product-id-page-website-description-section">
          <WebSiteDescription />
        </section>
      </div>
    </div>
  );
};

export default ProductIdPage;
