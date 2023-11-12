import { FC } from "react";
import AudiophileIcon from "../../../images/icons/AudiophileIcon";
import { Link, NavLink } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-line"></div>
      <div className="container">
        <Link to={"/"} className="footer-audiophile-logo">
          <AudiophileIcon />
        </Link>
        <nav className="footer-navigation">
          <NavLink
            to={"/"}
            className={"Sub-title-manrope-bold footer-navigation-link"}
          >
            Home
          </NavLink>
          <NavLink
            to={"/headphones"}
            className={"Sub-title-manrope-bold footer-navigation-link"}
          >
            Headphones
          </NavLink>
          <NavLink
            to={"/speakers"}
            className={"Sub-title-manrope-bold footer-navigation-link"}
          >
            Speakers
          </NavLink>
          <NavLink
            to={"earphones"}
            className={"Sub-title-manrope-bold footer-navigation-link"}
          >
            Earphones
          </NavLink>
        </nav>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
