import Section from '@/components/section';
import React from 'react';
import Banner from '../banner';

interface Props {
  display: string;
  subtitle: string;
}

const Hero: React.FC<Props> = ({ display, subtitle }) => {
  return (
    <Section className="xl:mx-auto w-full md:h-screen h-[70vh] flex flex-col gap-lg justify-center items-start overflow-hidden">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-20"></div>
      <Banner />
      <div className="flex flex-col items-start md:w-[40rem] w-full justify-center gap-s  z-20">
        <h1 className="md:text-desktop-display text-mobile-headline text-white font-bold md:w-[40rem] w-full">
          {display}
        </h1>
        <p className="md:w-96 w-full  md:text-desktop-body text-mobile-body text-white md:font-medium font-normal">
          {subtitle}
        </p>
      </div>
    </Section>
  );
};

export default Hero;
