import Heading from '@/components/heading';
import Section from '@/components/section';
import { type PartnerHome, type Partners } from '@/interface';
import divideData from '@/utils/devideData';
import React from 'react';
import PartnerSlides from '../swiper/partnerSlides';

interface Props {
  partner: PartnerHome;
}

const PartnersSection: React.FC<Props> = ({ partner }) => {
  const dividedPartners = divideData<Partners>(partner.partners);

  return (
    <Section className="lg:mt-28 xs:mt-12 ">
      <Heading
        alignCenter={true}
        darkBg={false}
        heading={partner.title_partner}
        subheading="Our Partners"
      />

      <div className="flex flex-col gap-2 mt-10">
        <PartnerSlides partnerData={dividedPartners[0]} reverse={false} />
        <PartnerSlides partnerData={dividedPartners[1]} reverse={true} />
        <PartnerSlides partnerData={dividedPartners[2]} reverse={false} />
      </div>
    </Section>
  );
};

export default PartnersSection;
