import Image from 'next/image';
import React from 'react';
import Section from '../section';
import AboutHugeImage1 from '../svg/aboutHugeImage1';
import AboutHugeImage2 from '../svg/aboutHugeImage2';
import TechCirclesAndSquares from '../svg/techCirclesAndSquares';
import TechLines from '../svg/techLines';
interface Props {
  imageUrl: string;
}

const HugeImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <Section className="max-h-fit relative md:h-screen h-fit md:mt-[5rem] my-[8rem] flex justify-center items-center mx-xs">
      {/* Lines SVG BG */}
      <div className="absolute w-fit h-fit -left-44 -top-40">
        <TechLines className="md:scale-100 scale-50" />
        <TechCirclesAndSquares className="absolute -top-2 md:scale-100 scale-50" />
      </div>

      <div className="relative overflow-hidden md:rounded-lg rounded">
        <Image
          className="md:max-h-[38.375rem] w-[72.75rem]"
          width={1000}
          height={1000}
          src={imageUrl}
          alt="Neuron Activity"
        />

        <div className="absolute md:w-72 w-40 md:bottom-10 bottom-4 md:left-8 left-4">
          <AboutHugeImage1 className="" />

          <h6 className="absolute md:text-desktop-title text-mobile-title text-white md:left-8 left-4 top-[50%] translate-y-[-50%]">
            Neuron 2023
          </h6>
        </div>

        <AboutHugeImage2 className="absolute md:top-6 top-4 md:px-6 px-4" />
      </div>
    </Section>
  );
};

export default HugeImage;
