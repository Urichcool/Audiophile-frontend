import { FC } from "react";
import Button1 from "../Reusable-Components/Buttons/Button1";
import Picture from "../Reusable-Components/Picture";

interface IAlsoLikeListItemProps {
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  id: string;
  category: string;
}

const AlsoLikeListItem: FC<IAlsoLikeListItemProps> = ({
  name,
  image,
  id,
  category,
}) => {
  return (
    <li className="also-like-list-item">
      <div className="also-like-list-item-picture-container">
        <Picture
          imageSrc={{
            desktop: image.desktop,
            tablet: image.tablet,
            mobile: image.mobile,
          }}
          sizes={{
            desktopWidth: "191",
            desktopHeight: "199",
            tabletWidth: "170",
            tabletHeight: "180",
            mobileWidth: "100",
            mobileHeight: "93",
          }}
          name={name}
          className=""
        />
      </div>
      <div className="also-like-list-item-content-container">
        <h4 className="H5-manrope-bold also-like-list-item-title">{name}</h4>
        <Button1
          id={id}
          testId={"also-like-list-item-button"}
          category={category}
        />
      </div>
    </li>
  );
};

export default AlsoLikeListItem;
