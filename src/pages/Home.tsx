import { FC } from 'react';
import CategoriesList from '../components/Reusable-Components/CategoriesList';

const Home:FC = () => {
    return (
      <section className="home-categories-list-section">
        <div className='container'> 
          <CategoriesList />
        </div>
      </section>
    );
}

export default Home;