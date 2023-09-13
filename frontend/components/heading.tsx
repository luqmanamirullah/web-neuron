import React from 'react';

type Props = {
  heading: String;
  subheading: String;
  darkBg: Boolean;
};

const Heading = (props: Props) => {
  return (
    <div>
      <h5
        className={`text-[22px] leading-[28px] font-bold ${
          props.darkBg ? 'text-[#930100]' : 'text-[#c00100]'
        }`}
      >
        {props.subheading}
      </h5>
      <h1
        className={`text-[37px] leading-[44px] font-bold ${
          props.darkBg ? 'text-[#c4c7c7]' : 'text-[#000000]'
        }`}
      >
        {props.heading}
      </h1>
    </div>
  );
};

export default Heading;
