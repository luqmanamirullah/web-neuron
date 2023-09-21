'use client';

import React from 'react';
import TestimonialSlides from '../swiper/testimonialSlides';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { useMediaQuery } from '@mui/material';
import Button from '@/components/button';
import HeroDisplay from '../heroDisplay';

const HeroSection = () => {
  const largeScreen = useMediaQuery('(min-width:1000px)');

  return (
    <section className="lg:h-screen flex lg:flex-row md:flex-col xs:flex-col lg:items-center lg:justify-between lg:gap-0 xs:gap-[3.25rem] lg:pt-0 xs:pt-20 lg:mx-xl xs:mx-xs">
      {/* CTA */}
      <div className="lg:max-w-[48.625rem]">
        {/* Display CTA */}
        <div className="flex flex-col lg:text-desktop-display md:text-desktop-headline xs:text-mobile-headline font-bold">
          <h1>Enhance Your Business:</h1>
          <div className="flex md:gap-4 xs:gap-2">
            <HeroDisplay />
            <h1>With Neuronworks</h1>
          </div>
          <h1>Software Evolution</h1>
        </div>

        {/* Desc */}
        <p className="lg:text-desktop-body-large md:text-desktop-body xs:text-mobile-body mt-2 lg:mb-10 xs:mb-6">
          Where Vision Transforms into Code Empowering Your Digital Future
        </p>

        {/* Btn */}
        <Button
          label="CONSULT WITH US"
          size={largeScreen ? 'lg' : 'full'}
          buttonStyle="filled"
          withIcon={true}
          icon={<ArrowForwardRounded />}
        />
      </div>

      {/* Testimonials */}
      <TestimonialSlides />
    </section>
  );
};

export default HeroSection;
