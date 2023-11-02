import React, {FC} from 'react';
import { Link, NavLink } from 'react-router-dom';
import AudiophileIcon from '../../images/icons/AudiophileIcon';
import BurgerIcon from '../../images/icons/BurgerIcon';
import CartIcon from '../../images/icons/CartIcon';
import Hero from './Hero';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks/reduxHooks';
import { selectIsMenuOpen } from '../../redux/slices/mobileMenuSlice';
import { AppDispatch } from '../../redux/store';
import { switchMenu } from '../../redux/slices/mobileMenuSlice';

const Header: FC = () => {
  const isMenuOpen: boolean = useAppSelector(selectIsMenuOpen);
  const dispatch:AppDispatch = useAppDispatch();


    return (
      <header className="header">
        <div className="container">
          <div className="header-container">
            <button
              className="burger-button"
              onClick={():void => {
                dispatch(switchMenu(!isMenuOpen));
                console.log(isMenuOpen)
              }}
            >
              <BurgerIcon />
            </button>
            <Link to={"/"} className="audiophile-logo">
              <AudiophileIcon />
            </Link>
            <nav className="header-navigation">
              <NavLink className="header-navigation-link" to={"/"}>
                Home
              </NavLink>
              <NavLink className="header-navigation-link" to={"headphones"}>
                headphones
              </NavLink>
              <NavLink className="header-navigation-link" to={"speakers"}>
                Speakers
              </NavLink>
              <NavLink className="header-navigation-link" to={"earphones"}>
                Earphones
              </NavLink>
            </nav>
            <button className="cart-button">
              <CartIcon />
            </button>
          </div>
        </div>
        <Hero />
      </header>
    );
}

export default Header;