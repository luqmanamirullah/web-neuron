import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className: string;
}

const MaskedImageTR: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={twMerge('w-[4.21875rem] h-[2.84375rem]', className)}
      width="69"
      height="47"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 69 47"
      fill="none"
    >
      <path d="M0.5 1H42.5L68 22.5V46.5" stroke="#74777F" />
    </svg>
  );
};

export default MaskedImageTR;
