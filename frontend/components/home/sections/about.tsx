'use client';

import Button from '@/components/button';
import Section from '@/components/section';
import { type AboutHome } from '@/interface';
import TechBrain from '@/public/assets/LottieFiles/Tech_Brain.json';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import { useMediaQuery } from '@mui/material';
import Lottie from 'lottie-react';
import Link from 'next/link';
import React from 'react';
interface Props {
  about: AboutHome;
}

const AboutSection: React.FC<Props> = ({ about }) => {
  const xLargeScreen = useMediaQuery('(min-width:1200px)');
  const largeScreen = useMediaQuery('(min-width:1024px)');
  const mediumScreen = useMediaQuery('(min-width:768px)');
  return (
    <Section className="max-h-[150vh] lg:py-20 md:py-4 pt-0 pb-4 h-fit flex lg:flex-row flex-col-reverse lg:gap-0 gap-4 lg:items-center">
      {/* Left Section */}
      <div className="lg:max-w-[41.625rem] flex flex-col gap-6 relative z-[2]">
        {/* Stats */}
        <div className="lg:w-[27.1875rem] flex lg:gap-0 gap-12 lg:justify-between">
          <div className="flex flex-col lg:gap-2 gap-0">
            <h1 className="md:text-desktop-display text-mobile-display font-bold">
              {about.about_project}
            </h1>
            <p className="md:text-desktop-body text-mobile-label">
              success projects
            </p>
          </div>

          <div className="flex flex-col lg:gap-2 gap-0">
            <h1 className="md:text-desktop-display  text-mobile-display font-bold">
              {about.about_experience}
            </h1>
            <p className="md:text-desktop-body text-mobile-label">
              years of experience
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 className="md:text-desktop-title text-mobile-title font-bold">
            {about.about_desc}
          </h4>
          <h1 className="xl:text-desktop-display md:text-desktop-headline text-mobile-headline mb-6 font-bold bg-gradient-to-r from-sys-light-primary to-[#0B0E14] bg-clip-text text-transparent">
            {about.about_title}
          </h1>

          <Link href={''}>
            <Button
              buttonStyle="filled"
              label="LEARN MORE"
              size={largeScreen ? 'lg' : 'full'}
              withIcon={true}
              icon={<ArrowOutwardRounded />}
            />
          </Link>
        </div>
      </div>

      <div className="w-fit h-fit lg:absolute mx-auto lg:top-1/2 lg:-translate-y-1/2 lg:-right-52 lg:mb-0 mb-4 relative ">
        <Lottie
          animationData={TechBrain}
          autoplay
          loop
          style={{
            height: xLargeScreen
              ? '50rem'
              : largeScreen
              ? '40rem'
              : mediumScreen
              ? '30rem'
              : '20rem',
            width: xLargeScreen
              ? '50rem'
              : largeScreen
              ? '40rem'
              : mediumScreen
              ? '30rem'
              : '20rem',
            margin: '0 0 1.25rem 0',
          }}
        />
        <div className="lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 w-1/2 h-5 bg-shadow1 bg-center bg-[length:100%_100%] bg-no-repeat"></div>
      </div>
    </Section>
  );
};

export default AboutSection;
