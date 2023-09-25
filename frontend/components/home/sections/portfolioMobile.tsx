import Button from '@/components/button';
import Heading from '@/components/heading';
import Section from '@/components/section';
import { succesPortfolio } from '@/data/portfolio';
import { type PortfolioHome, type SuccessPortfolio } from '@/interface';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { SvgIcon } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DeliverableSlides from '../swiper/deliverableSlides';

interface Props {
  portfolio: PortfolioHome;
  portfolioData: SuccessPortfolio[];
}

const PortfolioMobile: React.FC<Props> = ({ portfolioData, portfolio }) => {
  return (
    <Section className="max-h-fit mt-12 mx-xs">
      <Heading
        alignCenter={true}
        darkBg={false}
        heading={portfolio.title_portfolio}
        subheading="Successfull Projects"
      />

      <div className="mt-10 flex flex-col gap-20">
        {portfolioData.map((item, index: number) => {
          if (index < 3) {
            return (
              <div key={item.name}>
                <h4 className="text-mobile-headline font-bold">{item.name}</h4>

                {/* Picture */}
                <div className="mt-4 flex-1 p-2 w-full md:h-auto h-[12rem] my-auto border-[3px] rounded-[0.3125rem] border-[#ddd]">
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
                    icon={<ArrowOutwardRounded />}
                  />
                </Link>
                <div className="md:grid md:grid-cols-4 flex flex-col gap-s">
                  {/* Tech used */}
                  <div className="md:col-span-2 mt-6">
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
                        {item.technologies.map((tech: any, index: number) => {
                          return (
                            <Image
                              key={index}
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
                  <div className="md:col-span-2 mt-6">
                    <h6 className="mb-6 text-mobile-title font-bold">
                      Deliverables
                    </h6>
                    {item.deliverables.length > 0 ? (
                      <DeliverableSlides
                        delivarables={item.deliverables}
                        portfolioIndex={item.id}
                      />
                    ) : (
                      <p className="text-mobile-body">
                        confidential information
                        <SvgIcon className="ml-2" fontSize="small">
                          <VisibilityOffRoundedIcon />
                        </SvgIcon>
                      </p>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div
                  key={index}
                  className={`mt-20 flex-col gap-2 ${
                    index + 1 === succesPortfolio.length ? 'hidden' : 'flex'
                  }`}
                >
                  <div className="border-[1px] w-[80%] border-sys-light-outline"></div>
                  <div className="border-[1px] w-full border-sys-light-outline"></div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="text-center mt-20">
        <Button
          buttonStyle="text"
          label="See More"
          size="sm"
          withIcon={true}
          icon={<ArrowOutwardRounded />}
        />
      </div>
    </Section>
  );
};

export default PortfolioMobile;
