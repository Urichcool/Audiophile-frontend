export const categoriesProductListItemTestProps: {
  previewImage: { mobile: string; tablet: string; desktop: string };
  isNew: boolean;
  name: string;
  description: string;
  isEven: boolean;
  id: string;
  category:string
} = {
  previewImage: {
    mobile:
      "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443154/audiophile/goods/product-xx99-mark-two-headphones/mobile/image-product-removebg-mobile-removebg-preview_e3ysuj.png",
    tablet:
      "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443187/audiophile/goods/product-xx99-mark-two-headphones/tablet/image-product-removebg-tablet-removebg-preview_wbyhs5.png",
    desktop:
      "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443139/audiophile/goods/product-xx99-mark-two-headphones/desktop/image-product-removebg-desktop-removebg-preview_myfyr1.png",
  },
  isNew: true,
  name: "XX99 Mark II Headphones",
  description:
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  isEven: false,
  id: "652bdfecc2dd2dacebf6e267",
  category:"headphones"
};

export const pictureComponentTestProps: {
  imageSrc: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  sizes: {
    desktopWidth: string;
    desktopHeight: string;
    tabletWidth: string;
    tabletHeight: string;
    mobileWidth: string;
    mobileHeight: string;
  };
  name: string;
  className: string;
} = {
  imageSrc: {
    mobile:
      "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443154/audiophile/goods/product-xx99-mark-two-headphones/mobile/image-product-removebg-mobile-removebg-preview_e3ysuj.png",
    tablet:
      "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443187/audiophile/goods/product-xx99-mark-two-headphones/tablet/image-product-removebg-tablet-removebg-preview_wbyhs5.png",
    desktop:
      "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443139/audiophile/goods/product-xx99-mark-two-headphones/desktop/image-product-removebg-desktop-removebg-preview_myfyr1.png",
  },
  sizes: {
    desktopWidth: "270",
    desktopHeight: "300",
    tabletWidth: "220",
    tabletHeight: "250",
    mobileWidth: "160",
    mobileHeight: "180",
  },
  name: "XX99 Mark II Headphones",
  className: "hero-new-product-picture",
};
