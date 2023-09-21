import Heading from '@/components/heading';
import React from 'react';
import LicenseSlides from '../swiper/licenseSlides';

const LicensesSection = () => {
  return (
    <section className="lg:mt-20 xs:mt-14 lg:mx-xl xs:mx-xs">
      <Heading
        alignCenter={true}
        darkBg={false}
        subheading="Our License"
        heading="A Testament to Trust and Reliability"
      />

      <LicenseSlides />
    </section>
  );
};

export default LicensesSection;
