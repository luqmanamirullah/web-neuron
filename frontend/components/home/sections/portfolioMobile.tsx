import React from 'react';
import Image from 'next/image';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { portfolios } from '@/data/portfolio';
import { SvgIcon } from '@mui/material';
import Link from 'next/link';
import Heading from '@/components/heading';
import Button from '@/components/button';
import DeliverableSlides from '../swiper/deliverableSlides';

interface Props {
  portfolioData: any;
}

const PortfolioMobile = ({ portfolioData }: Props) => {
  return (
    <section className="mt-12 mx-xs">
      <Heading
        alignCenter={true}
        darkBg={false}
        heading="Amazing Transformation Achievements"
        subheading="Client Success Stories"
      />

      <div className="mt-10 flex flex-col gap-20">
        {portfolioData.map((item: any, index: number) => {
          if (index < 3) {
            return (
              <div>
                <h4 className="text-mobile-headline font-bold">{item.name}</h4>

                {/* Picture */}
                <div className="mt-4 flex-1 p-2 w-full h-[12rem] my-auto border-[3px] rounded-[0.3125rem] border-[#ddd]">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Portfolio Image"
                    src={item.image}
                    width={700}
                    height={700}
                  />
                </div>

                {/* Desc */}
                <p className="mt-2 mb-6 text-mobile-body line-clamp-3">
                  {item.desc}
                </p>

                {/* Btn */}
                <Link href={`/service/${item.id}`}>
                  <Button
                    buttonStyle="filled"
                    label="SEE STUDY CASE"
                    size="full"
                    withIcon={true}
                    icon={<ArrowForwardRounded />}
                  />
                </Link>

                {/* Tech used */}
                <div className="mt-6">
                  <h6 className="mb-2 text-mobile-title font-bold">
                    Technology used
                  </h6>

                  {item.technologies.length === 0 ? (
                    <p className="text-mobile-body">
                      confidential information
                      <SvgIcon className="ml-2" fontSize="small">
                        <VisibilityOffRoundedIcon />
                      </SvgIcon>
                    </p>
                  ) : (
                    <div className="flex gap-2">
                      {item.technologies.map((tech: any) => {
                        return (
                          <Image
                            className="w-[2.5rem] h-[2.5rem]"
                            alt={'Technology used'}
                            src={tech.icon}
                            width={40}
                            height={40}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Deliverables */}
                <div className="mt-6">
                  <h6 className="mb-6 text-mobile-title font-bold">
                    Deliverables
                  </h6>
                  <DeliverableSlides
                    portfolioItem={item}
                    portfolioIndex={index}
                  />
                </div>

                {/* Divider */}
                <div
                  key={index}
                  className={`mt-20 flex-col gap-2 ${
                    index + 1 === portfolios.length ? 'hidden' : 'flex'
                  }`}
                >
                  <div className="border-[1px] w-[80%] border-sys-light-outline"></div>
                  <div className="border-[1px] w-full border-sys-light-outline"></div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="text-center mt-20">
        <Button
          buttonStyle="text"
          label="See More"
          size="sm"
          withIcon={true}
          icon={<ArrowForwardRounded />}
        />
      </div>
    </section>
  );
};

export default PortfolioMobile;
