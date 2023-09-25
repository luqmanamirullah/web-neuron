import Heading from '@/components/heading';
import Section from '@/components/section';
import { type License } from '@/interface';
import React from 'react';
import LicenseSlides from '../swiper/licenseSlides';

interface Props {
  license: License;
}

const LicensesSection: React.FC<Props> = ({ license }) => {
  const licenseData = license.certificates;
  return (
    <Section className="lg:mt-20 xs:mt-14 ">
      <Heading
        alignCenter={true}
        darkBg={false}
        subheading="Our License"
        heading={license.title_certificate}
      />

      <LicenseSlides licenseData={licenseData} />
    </Section>
  );
};

export default LicensesSection;
