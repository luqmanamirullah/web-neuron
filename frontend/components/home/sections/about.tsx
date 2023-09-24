'use client';

import React from 'react';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { useMediaQuery } from '@mui/material';
import Button from '@/components/button';
import BrainIllustration from '@/components/svg/brainIllustration';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  homeData: any;
}

const AboutSection = ({ homeData }: Props) => {
  const largeScreen = useMediaQuery('(min-width:1000px)');

  return (
    <section className="overflow-x-hidden lg:h-screen lg:ml-xl lg:mx-0 xs:mx-xs lg:mt-0 xs:mt-8 flex lg:flex-row xs:flex-col-reverse lg:gap-0 xs:gap-4 lg:items-center relative">
      {/* Left Section */}
      <div className="lg:max-w-[41.625rem] flex flex-col gap-6 relative z-[2]">
        {/* Stats */}
        <div className="lg:w-[27.1875rem] flex lg:gap-0 xs:gap-12 lg:justify-between">
          <div className="flex flex-col lg:gap-2 xs:gap-0">
            <h1 className="lg:text-desktop-display xs:text-mobile-display font-bold">
              {homeData.about_project}
            </h1>
            <p className="lg:text-desktop-body xs:text-mobile-label">
              successful projects
            </p>
          </div>

          <div className="flex flex-col lg:gap-2 xs:gap-0">
            <h1 className="lg:text-desktop-display xs:text-mobile-display font-bold">
              {homeData.about_experience}
            </h1>
            <p className="lg:text-desktop-body xs:text-mobile-label">
              years of experience
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 className="lg:text-desktop-title xs:text-mobile-title font-bold">
            {homeData.about_desc}
          </h4>
          <h1 className="lg:text-desktop-display xs:text-mobile-headline mb-6 font-bold bg-gradient-to-r from-sys-light-primary to-[#0B0E14] bg-clip-text text-transparent">
            {homeData.about_title}
          </h1>

          <Link href={''}>
            <Button
              buttonStyle="filled"
              label="LEARN MORE"
              size={largeScreen ? 'lg' : 'full'}
              withIcon={true}
              icon={<ArrowForwardRounded />}
            />
          </Link>
        </div>
      </div>

      <Image
        className="object-contain lg:w-[46.625rem] xs:w-[80%] lg:h-full lg:absolute mx-auto top-0 -right-48"
        width={500}
        height={500}
        alt="Illustration"
        src={homeData.about_ilustration}
      />
    </section>
  );
};

export default AboutSection;
