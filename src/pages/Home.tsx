import { FC } from "react";
import CategoriesList from "../components/Reusable-Components/CategoriesList";
import HomeProducts from "../components/Home/HomeProducts/HomeProducts";

const Home: FC = () => {
  return (
    <div className="container">
      <section className="home-categories-list-section">
        <CategoriesList />
      </section>
      <section className="home-products-section">
        <HomeProducts />
      </section>
    </div>
  );
};

export default Home;
