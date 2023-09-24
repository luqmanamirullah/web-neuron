import Heading from '@/components/heading';
import React from 'react';
import LicenseSlides from '../swiper/licenseSlides';

interface Props {
  homeData: any;
}

const LicensesSection = ({ homeData }: Props) => {
  const licenseData = homeData.certificates;
  return (
    <section className="lg:mt-20 xs:mt-14 lg:mx-xl xs:mx-xs">
      <Heading
        alignCenter={true}
        darkBg={false}
        subheading="Our License"
        heading={homeData.title_certificate}
      />

      <LicenseSlides licenseData={licenseData} />
    </section>
  );
};

export default LicensesSection;
