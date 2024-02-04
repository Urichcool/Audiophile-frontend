import { FC } from "react";
import Picture from "../Reusable-Components/Picture";

interface IProductIdContentGalleryProps {
  gallery?: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  name?: string;
}

const ProductIdContentGallery: FC<IProductIdContentGalleryProps> = ({
  gallery,
  name,
}) => {
  return (
    <div className="product-id-page-gallery">
      <div>
        <Picture
          imageSrc={{
            desktop: gallery?.first.desktop,
            tablet: gallery?.first.tablet,
            mobile: gallery?.first.mobile,
          }}
          sizes={{
            desktopWidth: "445",
            desktopHeight: "282",
            tabletWidth: "277",
            tabletHeight: "174",
            mobileWidth: "327",
            mobileHeight: "174",
          }}
          name={name}
          imgClassName="product-id-page-gallery-picture-1"
        />
        <Picture
          imageSrc={{
            desktop: gallery?.second.desktop,
            tablet: gallery?.second.tablet,
            mobile: gallery?.third.mobile,
          }}
          sizes={{
            desktopWidth: "445",
            desktopHeight: "282",
            tabletWidth: "277",
            tabletHeight: "174",
            mobileWidth: "327",
            mobileHeight: "174",
          }}
          name={name}
          imgClassName="product-id-page-gallery-picture-2"
        />
      </div>
      <Picture
        imageSrc={{
          desktop: gallery?.third.desktop,
          tablet: gallery?.third.tablet,
          mobile: gallery?.third.mobile,
        }}
        sizes={{
          desktopWidth: "635",
          desktopHeight: "586",
          tabletWidth: "395",
          tabletHeight: "370",
          mobileWidth: "327",
          mobileHeight: "370",
        }}
        name={name}
        imgClassName="product-id-page-gallery-picture-3"
      />
    </div>
  );
};

export default ProductIdContentGallery;
