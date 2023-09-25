import Image from 'next/image';
import React from 'react';
import TechLines from '../svg/techLines';
import TechCirclesAndSquares from '../svg/techCirclesAndSquares';
import AboutHugeImage1 from '../svg/aboutHugeImage1';
import AboutHugeImage2 from '../svg/aboutHugeImage2';

interface Props {
  imageUrl: string;
}

const HugeImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <section className="relative md:h-screen xs:h-fit md:mt-[5rem] xs:my-[8rem] flex justify-center items-center xs:mx-xs">
      {/* Lines SVG BG */}
      <div className="absolute w-fit h-fit -left-44 -top-40">
        <TechLines className="md:scale-100 xs:scale-50" />
        <TechCirclesAndSquares className="absolute -top-2 md:scale-100 xs:scale-50" />
      </div>

      <div className="relative overflow-hidden md:rounded-lg xs:rounded">
        <Image
          className="md:max-h-[38.375rem] w-[72.75rem]"
          width={1000}
          height={1000}
          src={imageUrl}
          alt="Neuron Activity"
        />

        <div className="absolute md:w-72 xs:w-40 md:bottom-10 xs:bottom-4 md:left-8 xs:left-4">
          <AboutHugeImage1 className="" />

          <h6 className="absolute md:text-desktop-title xs:text-mobile-title text-white md:left-8 xs:left-4 top-[50%] translate-y-[-50%]">
            Neuron 2023
          </h6>
        </div>

        <AboutHugeImage2 className="absolute md:top-6 xs:top-4 md:px-6 xs:px-4" />
      </div>
    </section>
  );
};

export default HugeImage;
