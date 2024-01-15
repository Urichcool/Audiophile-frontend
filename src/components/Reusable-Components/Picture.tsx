import { FC } from "react";

interface IPictureProps {
  imageSrc: {
    desktop?: string ;
    tablet?: string;
    mobile?: string;
  };
  sizes: {
    desktopWidth?: string;
    desktopHeight?: string;
    tabletWidth?: string;
    tabletHeight?: string;
    mobileWidth?: string;
    mobileHeight?: string;
  };
    name?: string;
  className?: string
  imgClassName?: string
}

const Picture: FC<IPictureProps> = ({ imageSrc, sizes, name, className, imgClassName }) => {
  return (
    <picture className={className}>
      <source
        srcSet={imageSrc.desktop}
        media="(min-width: 1440px)"
        width={sizes.desktopWidth}
        height={sizes.desktopHeight}
      />
      <source
        srcSet={imageSrc.tablet}
        media="(min-width: 768px)"
        width={sizes.tabletWidth}
        height={sizes.tabletHeight}
      />
      <img
        className={imgClassName}
        src={imageSrc.mobile}
        alt={name}
        width={sizes.mobileWidth}
        height={sizes.mobileHeight}
      />
    </picture>
  );
};

export default Picture;
