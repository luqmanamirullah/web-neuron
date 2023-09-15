import React from 'react';
import Image from 'next/image';
import Heading from '../../components/heading';

type Props = {};

const VisionAndMissions = (props: Props) => {
  return (
    <section className="md:mx-xl xs:mx-xs flex md:flex-row xs:flex-col-reverse md:gap-6 xs:gap-10">
      {/* Missions */}
      <div className="flex flex-col md:gap-10 xs:gap-4">
        <Image
          className="md:h-[43.8125rem] xs:h-[22.5625rem] w-full object-cover"
          width={700}
          height={700}
          src="/assets/images/3.jpg"
          alt="Neuron Picture"
        />

        {/* Content */}
        <div className="flex flex-col gap-2">
          <Heading
            darkBg={false}
            heading={'Fueling Digital Innovation'}
            subheading={'Our Missions'}
          />

          {/* Body */}
          <div className="md:text-desktop-body-large xs:text-mobile-body font-medium">
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
      <div className="flex md:flex-col xs:flex-col-reverse md:gap-10 xs:gap-4">
        {/* Content */}
        <div className="flex flex-col gap-2">
          <Heading
            darkBg={false}
            heading={'Pioneering the Future of Digital Excellence'}
            subheading={'Our Vision'}
          />

          {/* Body */}
          <p className="md:text-desktop-body-large xs:text-mobile-body font-medium">
            Improving customer performance by making improvements. Improvements
            and progress in all corners of the customer's business processes
            through superior and best IT solutions.
          </p>
        </div>

        <Image
          className="md:h-[43.8125rem] xs:h-[22.5625rem] w-full object-cover"
          width={668}
          height={701}
          src="/assets/images/1.jpg"
          alt="Neuron Picture"
        />
      </div>
    </section>
  );
};

export default VisionAndMissions;
