import React, { FC } from "react";
import { Link, NavLink, Params, useParams } from "react-router-dom";
import AudiophileIcon from "../../../images/icons/AudiophileIcon";
import BurgerIcon from "../../../images/icons/BurgerIcon";
import CartIcon from "../../../images/icons/CartIcon";
import Hero from "./Hero";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../redux/reduxHooks/reduxHooks";
import { selectIsMenuOpen } from "../../../redux/slices/mobileMenuSlice";
import { AppDispatch } from "../../../redux/store";
import { switchMenu } from "../../../redux/slices/mobileMenuSlice";
import { selectCartProducts } from "../../../redux/slices/cartSlice";

const Header: FC = () => {
  const cartLength:number = useAppSelector(selectCartProducts).length
  const isMenuOpen: boolean = useAppSelector(selectIsMenuOpen);
  const dispatch: AppDispatch = useAppDispatch();
  const { productId }: Readonly<Params<string>> = useParams();

  return (
    <header className="header">
      <div className="container">
        <div
          className={
            productId ? "header-container-productId" : "header-container"
          }
        >
          <button
            className="burger-button"
            data-testid="mobile-menu-button"
            onClick={(): void => {
              dispatch(switchMenu(!isMenuOpen));
            }}
          >
            <BurgerIcon />
          </button>
          <Link
            data-testid="header-logo-home-link"
            to={"/"}
            className="audiophile-logo"
          >
            <AudiophileIcon />
          </Link>
          <nav className="header-navigation">
            <NavLink
              data-testid="header-home-link"
              className="header-navigation-link"
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              data-testid="header-headphones-link"
              className="header-navigation-link"
              to={"headphones"}
            >
              headphones
            </NavLink>
            <NavLink
              data-testid="header-speakers-link"
              className="header-navigation-link"
              to={"speakers"}
            >
              Speakers
            </NavLink>
            <NavLink
              data-testid="header-earphones-link"
              className="header-navigation-link"
              to={"earphones"}
            >
              Earphones
            </NavLink>
          </nav>
          <button className="cart-button">
            <CartIcon />
            {cartLength !==0 && (
              <p className="cart-button-quantity H6-manrope-bold">
                {cartLength}
              </p>
            )}
          </button>
        </div>
      </div>
      <Hero />
    </header>
  );
};

export default Header;
