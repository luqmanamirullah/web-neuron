import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className: string;
}

const AboutHeroCircle: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={twMerge('w-[0.3125rem] h-[0.3125rem]', className)}
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="5"
      viewBox="0 0 6 5"
      fill="none"
    >
      <circle cx="2.75" cy="2.5" r="2.5" fill="#EF0000" />
    </svg>
  );
};

export default AboutHeroCircle;
