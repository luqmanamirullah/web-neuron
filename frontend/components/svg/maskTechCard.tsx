import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className: string;
  imageUrl: string;
  withStroke?: boolean;
}

const MaskTechCard: React.FC<Props> = ({
  className,
  imageUrl,
  withStroke = false,
}) => {
  return (
    <svg
      className={twMerge('w-full h-full', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 556 543"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <pattern
          id="image"
          patternUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <image
            href={imageUrl}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          />
        </pattern>
      </defs>
      <path
        d="M44.5 53.8512L93.0164 1.59792C93.9624 0.578978 95.2901 0 96.6805 0H551C553.761 0 556 2.23858 556 5V467.073C556 468.614 555.289 470.069 554.074 471.017L508.5 506.538L464.876 541.885C463.986 542.606 462.875 543 461.729 543H5C2.23858 543 0 540.761 0 538V99.1593C0 97.8073 0.54745 96.513 1.51754 95.5714L44.5 53.8512Z"
        fill="url(#image)"
        stroke={withStroke ? '#000000' : 'none'}
      />
    </svg>
  );
};

export default MaskTechCard;
