import React from 'react';
import Image from 'next/image';
import Heading from '../../components/heading';
import { About } from '@/interface';
import VisionImage from '../svg/visionImage';

interface Props {
  aboutData: About;
}

const VisionAndMissions = ({ aboutData }: Props) => {
  return (
    <section className="md:mx-xl xs:mx-xs flex md:flex-row xs:flex-col-reverse md:gap-6 xs:gap-10">
      {/* Missions */}
      <div className="flex flex-col md:gap-10 xs:gap-4">
        <VisionImage
          flipImage={false}
          imageId="missionImage"
          imageUrl={aboutData.data.mission_image}
          className="lg:h-[43.8125rem] xs:h-auto w-full object-cover"
        />

        {/* Content */}
        <div className="flex flex-col gap-2">
          <Heading
            alignCenter={false}
            darkBg={false}
            heading={aboutData.data.mission_subtitle}
            subheading={aboutData.data.mission_title}
          />

          {/* Body */}
          <div className="md:text-desktop-body-large xs:text-mobile-body font-medium">
            <p>{aboutData.data.mission_desc}</p>
            <br />
            <ul className="ml-6 list-disc">
              {aboutData.data.mission_lists.map((item: any) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="flex md:flex-col xs:flex-col-reverse md:gap-10 xs:gap-4">
        {/* Content */}
        <div className="flex flex-col gap-2">
          <Heading
            alignCenter={false}
            darkBg={false}
            heading={aboutData.data.vision_subtitle}
            subheading={aboutData.data.vision_title}
          />

          {/* Body */}
          <p className="md:text-desktop-body-large xs:text-mobile-body font-medium">
            {aboutData.data.vision_desc}
          </p>
        </div>

        <VisionImage
          flipImage={true}
          imageId="visionImage"
          imageUrl={aboutData.data.vision_image}
          className="lg:h-[43.8125rem] scale-x-[-1] xs:h-auto w-full object-cover"
        />
      </div>
    </section>
  );
};

export default VisionAndMissions;
