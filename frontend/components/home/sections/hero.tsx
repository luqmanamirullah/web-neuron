'use client';

import Button from '@/components/button';
import Section from '@/components/section';
import { type HeroHome, type TestimonialHome } from '@/interface';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import HeroDisplay from '../heroDisplay';
import TestimonialSlides from '../swiper/testimonialSlides';

interface Props {
  hero: HeroHome;
  testimonials: TestimonialHome[];
}

const HeroSection: React.FC<Props> = ({ hero, testimonials }) => {
  const largeScreen = useMediaQuery('(min-width:1000px)');
  const smallScreen = useMediaQuery('(min-width:360px)');
  const route = useRouter();
  return (
    <Section className="flex lg:flex-row md:flex-col flex-col lg:items-center lg:justify-between lg:gap-0 gap-[3.25rem] lg:pt-48 py-32">
      {/* CTA */}
      <div className="lg:max-w-[48.625rem] ">
        {/* Display CTA */}
        <div className="flex flex-col xl:text-desktop-display lg:text-desktop-headline md:text-desktop-display sm:text-mobile-headline text-mobile-title-large  font-bold ">
          <h1>{hero.hero_title1}</h1>
          <div className="flex md:gap-4 gap-2">
            <HeroDisplay heroDisplayList={hero.hero_title_lists} />
            <h1>{hero.hero_title2}</h1>
          </div>
          <h1>{hero.hero_title3}</h1>
        </div>

        {/* Desc */}
        <p className="lg:text-desktop-body-large md:text-desktop-body text-mobile-body mt-2 lg:mb-10 md:mb-16 mb-4 ">
          {hero.hero_desc}
        </p>

        {/* Btn */}
        <Button
          onClick={() => {
            route.push('/contact');
          }}
          label="CONSULT WITH US"
          size={largeScreen ? 'lg' : smallScreen ? 'full' : 'md'}
          buttonStyle="filled"
          withIcon={true}
          icon={<ArrowOutwardRounded />}
        />
      </div>

      {/* Testimonials */}
      <TestimonialSlides testimonials={testimonials} />
    </Section>
  );
};

export default HeroSection;
