import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const FooterNavigation:FC = () => {
    return (
      <nav className="footer-navigation">
        <NavLink
          to={"/"}
          data-testid="footer-home-link"
          className={"Sub-title-manrope-bold footer-navigation-link"}
        >
          Home
        </NavLink>
        <NavLink
          to={"/headphones"}
          data-testid="footer-headphones-link"
          className={"Sub-title-manrope-bold footer-navigation-link"}
        >
          Headphones
        </NavLink>
        <NavLink
          to={"/speakers"}
          data-testid="footer-speakers-link"
          className={"Sub-title-manrope-bold footer-navigation-link"}
        >
          Speakers
        </NavLink>
        <NavLink
          to={"earphones"}
          data-testid="footer-earphones-link"
          className={"Sub-title-manrope-bold footer-navigation-link"}
        >
          Earphones
        </NavLink>
      </nav>
    );
}

export default FooterNavigation;