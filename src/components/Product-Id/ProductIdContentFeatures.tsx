import { FC } from "react";

interface IProductIdContentFeaturesProps {
  features?: string;
  includes?: { quantity: number; item: string; _id: string }[];
}

 const ProductIdContentFeatures: FC<IProductIdContentFeaturesProps> = ({
  features,
  includes,
}) => {
  return (
    <div className="product-id-page-features-and-includes-container">
      <div className="product-id-page-features-container">
        <h3 className="H3-manrope-bold product-id-page-features-title">
          Features
        </h3>
        <p className="product-id-page-features-text Body-manrope-medium">
          {features}
        </p>
      </div>
      <div className="product-id-page-includes-container">
        <h3 className="H3-manrope-bold product-id-page-includes-title">
          in the box
        </h3>
        <ul className="product-id-page-includes-list">
          {includes?.map(({ quantity, item, _id }) => (
            <li className="product-id-page-includes-list-item" key={_id}>
              <p className="product-id-page-includes-list-item-quantity-text">{`${quantity}x`}</p>
              <p className="product-id-page-includes-list-item-text Body-manrope-medium">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductIdContentFeatures;
