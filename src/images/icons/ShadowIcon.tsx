import {FC} from 'react';

const ShadowIcon:FC = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="183"
        height="102"
        viewBox="0 0 183 102"
        fill="none"
      >
        <g filter="url(#filter0_f_0_4858)">
          <ellipse cx="91.5001" cy="51" rx="47.4444" ry="7" fill="black" />
        </g>
        <defs>
          <filter
            id="filter0_f_0_4858"
            x="0.563156"
            y="0.507492"
            width="181.874"
            height="100.985"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="21.7463"
              result="effect1_foregroundBlur_0_4858"
            />
          </filter>
        </defs>
      </svg>
    );
}

export default ShadowIcon;