import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className: string;
}

const AboutHugeImage2: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={twMerge('w-full h-auto', className)}
      viewBox="0 0 1106 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M996 4H1104V134.5" stroke="white" stroke-width="3" />
      <path d="M0 5H332" stroke="white" stroke-width="3" />
      <rect x="357" width="10" height="10" fill="#C00100" />
      <rect x="377" width="10" height="10" fill="#C00100" />
      <rect x="397" width="10" height="10" fill="#C00100" />
    </svg>
  );
};

export default AboutHugeImage2;
