import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className: string;
  imageUrl: string;
}

const AboutHero: React.FC<Props> = ({ className, imageUrl }) => {
  return (
    <svg
      className={twMerge('w-full h-full', className)}
      xmlns="http://www.w3.org/2000/svg"
      width="345"
      height="414"
      viewBox="0 0 345 414"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <pattern
          id="aboutHero"
          patternUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <image
            href={imageUrl}
            x="0"
            y="0"
            width="345"
            height="414"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
      </defs>
      <path
        d="M0.51164 394.29V2.5C0.522729 1.40339 0.335807 0.5 1.4309 0.5H323.429C323.823 0.5 324.209 0.616876 324.537 0.835899L342.617 12.9063C343.172 13.2772 343.506 13.9017 343.506 14.5704V411.5C343.506 412.605 342.612 413.5 341.509 413.5H34.4538C34.1239 413.5 33.7992 413.418 33.5086 413.262L1.56339 396.073C0.909236 395.721 0.504121 395.034 0.51164 394.29Z"
        fill="url(#aboutHero)"
        stroke="#74777F"
      />
    </svg>
  );
};

export default AboutHero;
