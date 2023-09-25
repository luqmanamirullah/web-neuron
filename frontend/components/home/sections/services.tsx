import Button from '@/components/button';
import Section from '@/components/section';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import React from 'react';
import ServiceSlides from '../swiper/serviceSlides';

interface Props {
  homeData: any;
}

const ServicesSection: React.FC<Props> = ({ homeData }) => {
  return (
    <Section className="lg:py-10 py-8 ">
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
            icon={<ArrowOutwardRounded />}
          />
        </div>
      </div>

      <ServiceSlides />
    </Section>
  );
};

export default ServicesSection;
