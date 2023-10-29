import React, {FC} from 'react';
import { Link, NavLink } from 'react-router-dom';
import AudiophileIcon from '../../images/icons/AudiophileIcon';
import BurgerIcon from '../../images/icons/BurgerIcon';
import CartIcon from '../../images/icons/CartIcon';
import Hero from './Hero';

const Header:FC = () => {
    return (
      <header className="header">
        <div className="container">
          <div className="header-container">
            <button className="burger-button">
              <BurgerIcon />
            </button>
            <Link to={"/"} className="audiophile-logo">
              <AudiophileIcon />
            </Link>
            <nav className="header-navigation">
              <NavLink className="header-navigation-link" to={"/"}>
                Home
              </NavLink>
              <NavLink className="header-navigation-link" to={"/headphones"}>headphones</NavLink>
              <NavLink className="header-navigation-link" to={"/speakers"}>Speakers</NavLink>
              <NavLink className="header-navigation-link" to={"/earphones"}>Earphones</NavLink>
            </nav>
            <button className="cart-button">
              <CartIcon />
            </button>
          </div>
        </div>
    <Hero/>
      </header>
    );
}

export default Header;