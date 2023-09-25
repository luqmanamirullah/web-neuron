import Heading from '@/components/heading';
import Section from '@/components/section';
import React from 'react';
import LicenseSlides from '../swiper/licenseSlides';

interface Props {
  homeData: any;
}

const LicensesSection: React.FC<Props> = ({ homeData }) => {
  const licenseData = homeData.certificates;
  return (
    <Section className="lg:mt-20 xs:mt-14 ">
      <Heading
        alignCenter={true}
        darkBg={false}
        subheading="Our License"
        heading={homeData.title_certificate}
      />

      <LicenseSlides licenseData={licenseData} />
    </Section>
  );
};

export default LicensesSection;
