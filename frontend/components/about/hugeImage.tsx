import Image from 'next/image';
import React from 'react';
import AboutLines from '../svg/aboutLines';
import AboutCirclesAndSquares from '../svg/aboutCirclesAndSquares';

interface Props {
  imageUrl: string;
}

const HugeImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <section className="relative md:h-screen xs:h-fit md:mt-[5rem] xs:my-[8rem] flex justify-center items-center xs:mx-xs">
      {/* Lines SVG BG */}
      <div className="absolute w-fit h-fit -left-44 -top-40">
        <AboutLines className="md:scale-100 xs:scale-50" />
        <AboutCirclesAndSquares className="absolute -top-2 md:scale-100 xs:scale-50" />
      </div>

      <div className="relative overflow-hidden md:rounded-lg xs:rounded">
        <Image
          className="md:max-h-[38.375rem] w-[72.75rem] object-cover"
          width={1000}
          height={1000}
          src={imageUrl}
          alt="Neuron Activity"
        />

        <div className="absolute md:w-72 xs:w-40 md:bottom-10 xs:bottom-4 md:left-8 xs:left-4">
          <Image
            className="object-cover"
            width={300}
            height={300}
            src="/assets/images/Group.svg"
            alt="Neuron Activity"
          />

          <h6 className="absolute md:text-desktop-title xs:text-mobile-title text-white md:left-8 xs:left-4 top-[50%] translate-y-[-50%]">
            Neuron 2023
          </h6>
        </div>

        <Image
          className="absolute md:top-6 xs:top-3 max-h-[38.375rem] w-full object-cover md:px-6 xs:px-4"
          width={500}
          height={500}
          src="/assets/images/Group1.svg"
          alt="Neuron Activity"
        />
      </div>
    </section>
  );
};

export default HugeImage;
