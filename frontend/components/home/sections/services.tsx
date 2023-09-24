import React from 'react';
import Button from '@/components/button';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import ServiceSlides from '../swiper/serviceSlides';

interface Props {
  homeData: any;
}

const ServicesSection = ({ homeData }: Props) => {
  return (
    <section className="lg:h-screen lg:mt-0 xs:mt-12 lg:mx-xl xs:mx-xs">
      {/* Heading */}
      <div className="mb-6">
        <h5 className="lg:text-desktop-title xs:text-mobile-title font-bold text-sys-light-primary">
          Our Services
        </h5>

        <div className="flex justify-between">
          <h1 className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
            {homeData.title_service}
          </h1>
          <Button
            className="lg:flex xs:hidden"
            buttonStyle="text"
            label="See More"
            size="md"
            withIcon={true}
            icon={<ArrowForwardRounded />}
          />
        </div>
      </div>

      <ServiceSlides />
    </section>
  );
};

export default ServicesSection;
