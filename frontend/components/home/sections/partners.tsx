import React from 'react';
import { partners } from '@/data/partners';
import Heading from '@/components/heading';
import PartnerSlides from '../swiper/partnerSlides';

interface Props {
  homeData: any;
}

const PartnersSection = ({ homeData }: Props) => {
  // Function to divide an array into three
  function divideData<T>(arr: T[]): T[][] {
    const length = arr.length;
    const third = Math.ceil(length / 3);

    const firstRow = arr.slice(0, third);
    const secondRow = arr.slice(third, 2 * third);
    const thirdRow = arr.slice(2 * third);

    return [firstRow, secondRow, thirdRow];
  }
  const dividedPartners = divideData(partners);

  return (
    <section className="lg:mt-28 xs:mt-12">
      <Heading
        alignCenter={true}
        darkBg={false}
        heading={homeData.title_partner}
        subheading="Our Partners"
      />

      <div className="flex flex-col gap-2 mt-10">
        <PartnerSlides partnerData={dividedPartners[0]} reverse={false} />
        <PartnerSlides partnerData={dividedPartners[1]} reverse={true} />
        <PartnerSlides partnerData={dividedPartners[2]} reverse={false} />
      </div>
    </section>
  );
};

export default PartnersSection;
