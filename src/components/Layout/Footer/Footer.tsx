import { FC } from "react";
import AudiophileIcon from "../../../images/icons/AudiophileIcon";
import { Link, NavLink } from "react-router-dom";
import FacebookIcon from "../../../images/icons/FacebookIcon";
import TwitterIcon from "../../../images/icons/TwitterIcon";
import InstagramIcon from "../../../images/icons/InstagramIcon";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-line"></div>
        <Link
          to={"/"}
          data-testid="footer-logo-home-link"
          className="footer-audiophile-logo"
        >
          <AudiophileIcon />
        </Link>
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
        <p className="Body-manrope-medium footer-description">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="Body-manrope-medium footer-description">
          Copyright 2021. All Rights Reserved
        </p>
        <ul className="footer-socials-list">
          <li className="footer-socials-list-item">
            <a
              href="https://github.com/Urichcool"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </li>
          <li className="footer-socials-list-item">
            <a
              href="https://github.com/Urichcool"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
          <li className="footer-socials-list-item">
            <a
              href="https://github.com/Urichcool"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
