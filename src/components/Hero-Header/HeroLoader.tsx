import { FC } from 'react';
import { Audio } from 'react-loader-spinner';

const HeroLoader:FC = () => {
    return (
      <div className='container'>
        <div className="hero-loader">
          <Audio height="250" width="250" color="#fff" />
        </div>
      </div>
    );
}

export default HeroLoader;