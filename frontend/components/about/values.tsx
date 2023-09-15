import React from 'react';
import Heading from '../heading';
import { valueData } from '@/data/values';

const Values = () => {
  return (
    <section className="h-fit md:mx-xl xs:mx-xs mt-[7.5rem] flex flex-col md:gap-16 xs:gap-8">
      <Heading
        darkBg={false}
        heading={'Foundation of Our Core Values'}
        subheading={'Our Values'}
      />
      <ul className="w-full grid md:grid-cols-3 xs:grid-cols-1 md:gap-x-6 xs:gap-x-0 gap-y-10">
        {valueData.map((item) => {
          return (
            <li>
              <h5 className="md:text-desktop-title xs:text-mobile-title font-bold text-center md:mb-2 xs:mb-1">
                {item.title}
              </h5>
              <p className="md:text-desktop-body xs:text-mobile-body font-normal text-center">
                {item.desc}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Values;
