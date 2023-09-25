import React from 'react';

interface Props {
  heading: string;
  subheading: string;
  darkBg: boolean;
  alignCenter?: boolean;
}

const Heading: React.FC<Props> = ({
  heading,
  subheading,
  darkBg,
  alignCenter = false,
}) => {
  return (
    <div className={alignCenter ? 'w-full flex flex-col items-center' : ''}>
      <h5
        className={`lg:text-desktop-title xs:text-mobile-title font-bold text-sys-light-primary ${
          alignCenter ? 'text-center' : ''
        }`}
      >
        {subheading}
      </h5>
      <h1
        className={`lg:text-desktop-headline xs:text-mobile-headline font-bold
        ${alignCenter ? 'text-center' : ''}
        ${darkBg ? 'text-sys-dark-onSurface' : 'text-sys-light-onSurface'}`}
      >
        {heading}
      </h1>
    </div>
  );
};

export default Heading;
