import { FC } from "react";
import Button1 from "../Reusable-Components/Buttons/Button1";

interface IAlsoLikeListItemProps {
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
    isFetching: boolean;
    id:string
}

const AlsoLikeListItem: FC<IAlsoLikeListItemProps> = ({name, image, isFetching, id}) => {
  return (
    <li className="also-like-list-item">
      <div className="also-like-list-item-picture-container">
        <picture>
          <source
            srcSet={image.desktop}
            media="(min-width: 1440px)"
            width={"191"}
            height={"199"}
          />
          <source
            srcSet={image.tablet}
            media="(min-width: 768px)"
            width={"170"}
            height={"180"}
          />
          <img src={image.mobile} alt={name} width={"87"} height={"93"} />
        </picture>
      </div>
      <div className="also-like-list-item-content-container">
        <h4 className="H5-manrope-bold also-like-list-item-title">{name}</h4>
        <Button1 id={id} />
      </div>
    </li>
  );
};

export default AlsoLikeListItem;
