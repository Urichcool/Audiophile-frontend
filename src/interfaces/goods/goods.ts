export interface IGoods {
  _id: string;
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
  category: string;
  categoryImage: { mobile: string; tablet: string; desktop: string };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: { quantity: number; item: string; _id:string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  previewImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
