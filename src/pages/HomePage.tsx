import { FC } from "react";
import CategoriesList from "../components/Reusable-Components/CategoriesList";
import HomeProductsList from "../components/Home/HomeProducts/HomeProductsList";
import WebSiteDescription from "../components/Reusable-Components/WebSiteDescription";

const Home: FC = () => {

  
  return (
    <div className="container">
      <section className="home-categories-list-section">
        <CategoriesList />
      </section>
      <section className="home-products-section">
        <HomeProductsList />
      </section>
      <section className="home-site-description-section">
        <WebSiteDescription/>
      </section>
    </div>
  );
};

export default Home;
