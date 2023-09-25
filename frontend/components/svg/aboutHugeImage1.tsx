import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className: string;
}

const AboutHugeImage1: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={twMerge('w-full h-full', className)}
      viewBox="0 0 304 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.8232 0.589844L11.1206 57H0.730469L0.730469 48.7056L43.9778 0.589844L61.8232 0.589844Z"
        fill="#C00100"
      />
      <path
        d="M26.3179 0.589844L0.730469 29.0576L0.730469 9.20333L8.47248 0.589844L26.3179 0.589844Z"
        fill="#C00100"
      />
      <path
        d="M97.4484 0.589844L46.7458 57H28.9004L79.6198 0.589844L97.4484 0.589844Z"
        fill="#C00100"
      />
      <path
        d="M132.85 0.589844L82.1306 57H64.2852L115.005 0.589844L132.85 0.589844Z"
        fill="#C00100"
      />
      <path
        d="M168.474 0.589844L117.771 57H99.9258L150.628 0.589844L168.474 0.589844Z"
        fill="#C00100"
      />
      <path
        d="M204.232 0.589844L153.529 57H135.684L186.386 0.589844L204.232 0.589844Z"
        fill="#C00100"
      />
      <path
        d="M239.858 0.589844L189.155 57H171.31L222.012 0.589844L239.858 0.589844Z"
        fill="#C00100"
      />
      <path
        d="M275.242 0.589844L224.54 57H206.694L257.397 0.589844L275.242 0.589844Z"
        fill="#C00100"
      />
      <path
        d="M303.157 0.589844V9.18454L260.18 57H242.317L293.037 0.589844L303.157 0.589844Z"
        fill="#C00100"
      />
      <path
        d="M303.156 28.8311V48.6855L295.684 56.9987H277.839L303.156 28.8311Z"
        fill="#C00100"
      />
    </svg>
  );
};

export default AboutHugeImage1;
