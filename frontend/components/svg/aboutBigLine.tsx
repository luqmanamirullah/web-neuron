import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className: string;
}

const AboutBigLine: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={twMerge('w-[10.15625rem] h-[48.59375rem]', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 163 778"
      fill="none"
    >
      <path d="M0 629V624H5V629H0Z" fill="#DDDDDD" fill-opacity="0.866667" />
      <path d="M0 609V604H5V609H0Z" fill="#DDDDDD" fill-opacity="0.866667" />
      <path
        d="M159.5 0V250.318L83.5 316.46V562.1L15 598.6V635.15C11.5767 635.845 9 638.872 9 642.5C9 646.642 12.3578 650 16.5 650C20.6422 650 24 646.642 24 642.5C24 638.872 21.4233 635.845 18 635.15V600.4L83.5 565.499V777.5H86.5V317.826L162.5 251.684V0H159.5Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};

export default AboutBigLine;
