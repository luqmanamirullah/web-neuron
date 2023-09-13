import React from 'react';
import Image from 'next/image';
import Heading from '../../components/heading';

type Props = {};

const VisionAndMissions = (props: Props) => {
  return (
    <div className="flex gap-6">
      {/* Missions */}
      <div className="max-w-[668px] flex flex-col gap-10">
        <Image
          className="h-[701px] object-cover"
          width={668}
          height={701}
          src="/assets/images/3.jpg"
          alt="Vision Picture"
        />

        {/* Content */}
        <div className="flex flex-col gap-2">
          <Heading
            heading={'Fueling Digital Innovation'}
            subheading={'Our Missions'}
          />

          {/* Body */}
          <div className="text-[18px] leading-[26px] font-medium">
            <p>
              Discover our company's core missions that drive us forward. From
              empowering innovation to fostering sustainability, explore how
              we're dedicated to making a positive impact on our world:
            </p>
            <br />
            <ul className="ml-6 list-disc">
              <li>Foundation for success</li>
              <li>Innovating Excellence</li>
              <li>Reliability in IT Solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="max-w-[668px] flex flex-col gap-10">
        {/* Content */}
        <div className="flex flex-col gap-2">
          <Heading
            heading={'Pioneering the Future of Digital Excellence'}
            subheading={'Our Vision'}
          />

          {/* Body */}
          <p className="text-[18px] leading-[26px] font-medium">
            Improving customer performance by making improvements. Improvements
            and progress in all corners of the customer's business processes
            through superior and best IT solutions.
          </p>
        </div>

        <Image
          className="h-[701px] object-cover"
          width={668}
          height={701}
          src="/assets/images/3.jpg"
          alt="Vision Picture"
        />
      </div>
    </div>
  );
};

export default VisionAndMissions;
