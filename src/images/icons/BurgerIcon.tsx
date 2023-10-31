import {FC} from 'react';

const BurgerIcon:FC = () => {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
        >
          <rect width="16" height="3"  />
          <rect y="6" width="16" height="3"  />
          <rect y="12" width="16" height="3"  />
        </svg>
      </div>
    );
}

export default BurgerIcon;