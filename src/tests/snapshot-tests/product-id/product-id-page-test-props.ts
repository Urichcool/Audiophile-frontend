export const productIdContentDescriptionTestProps: {
  pictureSrc: { desktop: string; tablet: string; mobile: string };
  name: string;
  isNew: boolean;
  description: string;
  price: number;
  productId: string;
  previewImage: string;
  category: string;
} = {
  pictureSrc: {
    mobile:
      "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443154/audiophile/goods/product-xx99-mark-two-headphones/mobile/image-product-removebg-mobile-removebg-preview_e3ysuj.png",
    tablet:
      "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443187/audiophile/goods/product-xx99-mark-two-headphones/tablet/image-product-removebg-tablet-removebg-preview_wbyhs5.png",
    desktop:
      "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443139/audiophile/goods/product-xx99-mark-two-headphones/desktop/image-product-removebg-desktop-removebg-preview_myfyr1.png",
  },
  name: "XX99 Mark II Headphones",
  isNew: false,
  description: "XX99 Mark II Headphones",
  price: 499,
  productId: "652bdfecc2dd2dacebf6e267",
  previewImage:
    "https://res.cloudinary.com/dir4brsjf/image/upload/v1699443154/audiophile/goods/product-xx99-mark-two-headphones/mobile/image-product-removebg-mobile-removebg-preview_e3ysuj.png",
  category:"headphones"
};

export const productIdContentFeaturesTestProps: {
  features: string;
  includes: { quantity: number; item: string; _id: string }[];
} = {
  features:
    "Experience unrivalled stereo sound thanks to innovative acoustic techn…",
  includes: [
    { quantity: 2, item: "Earphone unit", _id: "652bdfecc2dd2dacebf6e265" },
  ],
};

export const productIdContentGalleryTestProps: {
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  name: string;
} = {
  gallery: {
    first: {
      mobile:
        "https://res.cloudinary.com/dir4brsjf/image/upload/v1697496515/audiophile/goods/product-yx1-earphones/mobile/vzmpaa7dkwji3u3nk7co.jpg",
      tablet:
        "https://res.cloudinary.com/dir4brsjf/image/upload/v1697496516/audiophile/goods/product-yx1-earphones/tablet/cm2w05667a5uuvfs8aji.jpg",
      desktop:
        "https://res.cloudinary.com/dir4brsjf/image/upload/v1697496515/audiophile/goods/product-yx1-earphones/desktop/oycf1je8ndux38npvk6a.jpg",
    },
    second: {
      mobile:
        "https://res.cloudinary.com/dir4brsjf/image/upload/v1697496515/audiophile/goods/product-yx1-earphones/mobile/pqm0vcxrwxosf8nsf6fk.jpg",
      tablet:
        "https://res.cloudinary.com/dir4brsjf/image/upload/v1697496516/audiophile/goods/product-yx1-earphones/tablet/pwcuqvrhxa779epydciq.jpg",
      desktop:
        "https://res.cloudinary.com/dir4brsjf/image/upload/v1697496515/audiophile/goods/product-yx1-earphones/desktop/dcifyu9zydbtrklw8gcr.jpg",
    },
    third: {
      mobile:
        "https://res.cloudinary.com/dir4brsjf/image/upload/v1697496515/audiophile/goods/product-yx1-earphones/mobile/rz9xwt6jbogh27ezrpt6.jpg",
      tablet:
        "https://res.cloudinary.com/dir4brsjf/image/upload/v1697496516/audiophile/goods/product-yx1-earphones/tablet/x3sscr6aajfe3zg5d2zd.jpg",
      desktop:
        "https://res.cloudinary.com/dir4brsjf/image/upload/v1697496515/audiophile/goods/product-yx1-earphones/desktop/ndaegpi3cjyf8wfzpvj5.jpg",
    },
  },
  name: "XX59 Headphones",
};
