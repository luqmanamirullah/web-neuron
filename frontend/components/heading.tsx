import React from 'react';

type Props = {
  heading: String;
  subheading: String;
  darkBg: Boolean;
};

const Heading = (props: Props) => {
  return (
    <div>
      <h5 className="md:text-desktop-title xs:text-mobile-title font-bold text-sys-light-primary">
        {props.subheading}
      </h5>
      <h1
        className={`md:text-desktop-headline xs:text-mobile-headline font-bold ${
          props.darkBg ? 'text-sys-dark-onSurface' : 'text-black'
        }`}
      >
        {props.heading}
      </h1>
    </div>
  );
};

export default Heading;
