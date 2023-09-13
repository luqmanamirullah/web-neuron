import React from 'react';

type Props = {
  heading: String;
  subheading: String;
};

const Heading = (props: Props) => {
  return (
    <div>
      <h5 className="text-[22px] leading-[28px] font-bold text-[#c00100]">
        {props.subheading}
      </h5>
      <h1 className="text-[37px] leading-[44px] font-bold">{props.heading}</h1>
    </div>
  );
};

export default Heading;
