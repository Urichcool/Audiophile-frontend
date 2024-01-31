import React, { FC } from "react";
import { Link, Params, useParams } from "react-router-dom";
import AudiophileIcon from "../../../images/icons/AudiophileIcon";
import BurgerIcon from "../../../images/icons/BurgerIcon";
import CartIcon from "../../../images/icons/CartIcon";
import Hero from "./Hero";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../redux/reduxHooks/reduxHooks";
import { selectIsMenuOpen } from "../../../redux/slices/mobile-menu/mobileMenuSlice";
import { AppDispatch } from "../../../redux/store";
import { switchMenu } from "../../../redux/slices/mobile-menu/mobileMenuSlice";
import {
  selectCartProducts,
  selectIsCartModalOpen,
} from "../../../redux/slices/cart/selectors";
import { switchCartModal } from "../../../redux/slices/cart/cartSlice";
import Cart from "../../Cart/Cart";
import HeaderNavigation from "./HeaderNavigation";

const Header: FC = () => {
  const cartLength: number = useAppSelector(selectCartProducts).length;
  const isMenuOpen: boolean = useAppSelector(selectIsMenuOpen);
  const isCartModalOpen: boolean = useAppSelector(selectIsCartModalOpen);
  const dispatch: AppDispatch = useAppDispatch();
  const { productId }: Readonly<Params<string>> = useParams();

  const burgerButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {if (isCartModalOpen) {
    dispatch(switchCartModal(!isCartModalOpen));
  }
    dispatch(switchMenu(!isMenuOpen));
  };
  
  const cartButtonHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (isMenuOpen) {
      dispatch(switchMenu(!isMenuOpen));
    }
    dispatch(switchCartModal(!isCartModalOpen));
  };

  return (
    <>
      <header className="header" data-testid="header">
        <div className="container">
          <div
            className={
              productId ? "header-container-productId" : "header-container"
            }
          >
            <button
              className="burger-button"
              data-testid="mobile-menu-button"
              onClick={burgerButtonHandler}
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
            <HeaderNavigation />
            <button
              className="cart-button"
              data-testid="cart-modal-button"
              onClick={cartButtonHandler}
            >
              <CartIcon />
              {cartLength !== 0 && (
                <p
                  className="cart-button-quantity H6-manrope-bold"
                  data-testid="cart-button-quantity"
                >
                  {cartLength}
                </p>
              )}
            </button>
          </div>
        </div>
        <Hero />
      </header>
      <Cart />
    </>
  );
};

export default Header;
