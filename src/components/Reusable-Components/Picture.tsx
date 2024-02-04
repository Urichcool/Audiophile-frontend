import { FC } from "react";

interface IPictureProps {
  imageSrc: {
    desktop: string | undefined;
    tablet: string | undefined;
    mobile: string | undefined;
  };
  sizes: {
    desktopWidth: string | undefined;
    desktopHeight: string | undefined;
    tabletWidth: string | undefined;
    tabletHeight: string | undefined;
    mobileWidth: string | undefined;
    mobileHeight: string | undefined;
  };
  name: string | undefined;
  className?: string;
  imgClassName?: string;
}

const Picture: FC<IPictureProps> = ({ imageSrc, sizes, name, className, imgClassName }) => {
  return (
    <picture className={className} data-testid="picture-component">
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
