import { FC } from "react";
import AudiophileIcon from "../../../images/icons/AudiophileIcon";
import { Link } from "react-router-dom";
import FacebookIcon from "../../../images/icons/FacebookIcon";
import TwitterIcon from "../../../images/icons/TwitterIcon";
import InstagramIcon from "../../../images/icons/InstagramIcon";
import FooterNavigation from "./FooterNavigation";
import FooterSocialsListItem from "./FooterSocialsListItem";

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
        <FooterNavigation />
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
          <FooterSocialsListItem icon={<FacebookIcon />} />
          <FooterSocialsListItem icon={<TwitterIcon />} />
          <FooterSocialsListItem icon={<InstagramIcon />} />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
