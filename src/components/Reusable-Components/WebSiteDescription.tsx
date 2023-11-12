import { FC } from "react";


const WebSiteDescription:FC = () => {
  return (
    <div className="web-site-description-container">
      <div className="web-site-description-picture" />
      <div className="web-site-description-text-container">
        <h4 className="H4-manrope-bold web-site-description-title">
          Bringing you the{" "}
          <span className="web-site-description-title-best">best</span> audio
          gear
        </h4>
        <p className="Body-manrope-medium web-site-description-text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default WebSiteDescription;
