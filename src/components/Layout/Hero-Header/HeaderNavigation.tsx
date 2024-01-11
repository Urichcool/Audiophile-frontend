import { FC } from "react";
import { NavLink } from "react-router-dom";

const HeaderNavigation:FC = () => {
  return (
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
  );
};

export default HeaderNavigation;
