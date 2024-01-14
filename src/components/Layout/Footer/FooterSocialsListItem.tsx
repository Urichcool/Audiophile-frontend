import {FC} from 'react';

interface IIconProps {
  icon: JSX.Element;
}

const FooterSocialsListItem:FC<IIconProps> = ({icon}) => {
    return (
      <li className="footer-socials-list-item">
        <a href="https://github.com/Urichcool" target="_blank" rel="noreferrer">
          {icon}
        </a>
      </li>
    );
}

export default FooterSocialsListItem;