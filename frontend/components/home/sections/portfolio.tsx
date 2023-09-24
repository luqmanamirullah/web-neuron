'use client';

import React from 'react';
import Image from 'next/image';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { portfolios } from '@/data/portfolio';
import { SvgIcon, useMediaQuery } from '@mui/material';
import PortfolioMobile from './portfolioMobile';
import Link from 'next/link';
import Heading from '@/components/heading';
import Button from '@/components/button';
import TechLines from '@/components/svg/techLines';
import TechCirclesAndSquares from '@/components/svg/techCirclesAndSquares';
import DeliverableSlides from '../swiper/deliverableSlides';
import PortfolioLine from '@/components/svg/portfolioLine';

interface Props {
  homeData: any;
  portfolioData: any;
}

const PortfolioSection = ({ homeData, portfolioData }: Props) => {
  const largeScreen = useMediaQuery('(min-width:1000px)');

  if (largeScreen) {
    return (
      <section className="ml-xl relative">
        {/* Background Line SVG */}
        <PortfolioLine className="absolute lg:block xs:hidden left-[40%] top-0 z-[-1]" />
        {/* Heading */}
        <Heading
          alignCenter={true}
          darkBg={false}
          heading={homeData.title_project}
          subheading="Client Success Stories"
        />

        {/* Portfolios */}
        <div className="flex flex-col gap-32">
          {portfolioData.map((item: any, index: number) => {
            if (index < 3) {
              return (
                <div className="flex gap-12 lg:mt-16 relative">
                  {/* Lines SVG BG */}
                  <div className="absolute scale-x-[-1] lg:block xs:hidden w-fit h-fit right-0 top-0 z-[-1]">
                    <TechLines className="" />
                    <TechCirclesAndSquares className="absolute -top-2" />
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="lg:text-desktop-headline font-bold lg:mb-2">
                      {item.name}
                    </h2>

                    <p className="lg:text-desktop-body lg:mb-10 line-clamp-6">
                      {item.desc}
                    </p>

                    <Link href={`/service/${item.id}`}>
                      <Button
                        buttonStyle="filled"
                        label="SEE STUDY CASE"
                        size="lg"
                        withIcon={true}
                        icon={<ArrowForwardRounded />}
                      />
                    </Link>
                  </div>

                  <div className="flex-1 p-2 w-[25rem] h-[12rem] my-auto border-[3px] rounded-[0.3125rem] border-[#ddd]">
                    <Image
                      className="w-full h-full object-cover"
                      alt="Portfolio Image"
                      src={item.image}
                      width={700}
                      height={700}
                    />
                  </div>

                  <div className="flex flex-col gap-8 flex-1">
                    {/* Tech */}
                    <div>
                      <h4 className="lg:text-desktop-title font-bold mb-2">
                        Technology Used
                      </h4>
                      {item.technologies.length === 0 ? (
                        <p className="text-desktop-body">
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
                    <div>
                      <h4 className="lg:text-desktop-title font-bold mb-8">
                        Deliverables
                      </h4>
                      <DeliverableSlides
                        portfolioItem={item}
                        portfolioIndex={index}
                      />
                    </div>
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
            size="md"
            withIcon={true}
            icon={<ArrowForwardRounded />}
          />
        </div>
      </section>
    );
  } else {
    return <PortfolioMobile portfolioData={portfolioData} />;
  }
};

export default PortfolioSection;
