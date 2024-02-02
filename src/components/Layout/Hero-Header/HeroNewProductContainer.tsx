import React, { FC } from 'react';
import Button1 from '../../Reusable-Components/Buttons/Button1';
import Picture from '../../Reusable-Components/Picture';
import { shortDescrFunc } from '../../../utils/shortDescrFunc';

interface IHeroNewProductContainer {
  name?: string;
  description?: string;
  productId?: string;
    previewImage?: {
        desktop: string;
        tablet: string;
        mobile: string;
    };
    
}

const HeroNewProductContainer:FC<IHeroNewProductContainer> = ({name, description, productId, previewImage}) => {
    return (
      <div className="container" data-testid="hero-container">
        <div className="hero-container">
          <p className="Overline-manrope-regular hero-new-product-text">
            new product
          </p>
          <h1 className="H1-manrope-bold hero-new-product-title">
            {name}
          </h1>
          <p className="Body-manrope-medium hero-new-product-description">
            {shortDescrFunc(description)}
          </p>
          <Button1 id={productId} testId={"id-page-nav-button"} />
        </div>
        <Picture
          imageSrc={{
            desktop: previewImage?.desktop,
            tablet: previewImage?.tablet,
            mobile: previewImage?.mobile,
          }}
          sizes={{
            desktopWidth: "270",
            desktopHeight: "300",
            tabletWidth: "220",
            tabletHeight: "250",
            mobileWidth: "160",
            mobileHeight: "180",
          }}
          name={name}
          className="hero-new-product-picture"
        />
      </div>
    );
}

export default HeroNewProductContainer;