import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className: string;
}

const AboutHeroSquares: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={twMerge('w-[2.8125rem] h-[0.3125rem]', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 5"
      fill="none"
    >
      <rect width="5" height="5" fill="#EF0000" />
      <rect x="15" width="5" height="5" fill="#EF0000" />
      <rect x="30" width="5" height="5" fill="#EF0000" />
    </svg>
  );
};

export default AboutHeroSquares;
