'use client';
import Button from '@/components/button';
import Heading from '@/components/heading';
import Section from '@/components/section';
import { type PortfolioHome, type SuccessPortfolio } from '@/interface';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { SvgIcon, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PortfolioLine from '../portfolioBackground';
import DeliverableSlides from '../swiper/deliverableSlides';
import PortfolioMobile from './portfolioMobile';

interface Props {
  portfolio: PortfolioHome;
  portfolioData: SuccessPortfolio[];
}

const PortfolioSection: React.FC<Props> = ({ portfolio, portfolioData }) => {
  const largeScreen = useMediaQuery('(min-width:1000px)');
  const route = useRouter();

  if (largeScreen) {
    return (
      <Section className="max-h-fit relative ">
        <PortfolioLine />
        {/* Heading */}
        <Heading
          alignCenter={true}
          darkBg={false}
          heading={portfolio.title_portfolio}
          subheading="Successfull Projects"
        />

        {/* Portfolios */}
        <div className="flex flex-col gap-32 mt-20">
          {portfolioData.map((item, index) => {
            if (index < 3) {
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-12 
                gap-lg relative"
                >
                  {/* Content */}
                  <div className="col-span-4">
                    <h2 className="lg:text-desktop-headline font-bold lg:mb-2">
                      {item.name}
                    </h2>

                    <p className="lg:text-desktop-body lg:mb-10 line-clamp-6">
                      {item.desc}
                    </p>

                    <Button
                      buttonStyle="filled"
                      label="SEE STUDY CASE"
                      size="lg"
                      withIcon={true}
                      icon={<ArrowOutwardRounded />}
                      onClick={() => {
                        route.push(`/portfolio/${item.id}`);
                      }}
                    />
                  </div>

                  <div className="col-span-4  h-fit p-2  border-[3px] rounded-[0.3125rem] bg-sys-light-surface border-[#ddd]">
                    <Image
                      className="w-full h-auto object-cover"
                      alt="Portfolio Image"
                      src={item.image}
                      width={700}
                      height={700}
                    />
                  </div>

                  <div className="col-span-4 flex-col gap-8 flex-1">
                    {/* Tech */}
                    <div className="flex flex-col gap-s">
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
                          {item.technologies.map((tech, index) => {
                            return (
                              <Image
                                key={index}
                                className="w-[2.5rem] h-[2.5rem]"
                                alt={'Technology used'}
                                src={tech.icon ?? ''}
                                width={40}
                                height={40}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Deliverables */}
                    <div className="flex flex-col gap-2 mt-4">
                      <h4 className="lg:text-desktop-title font-bold mb-8">
                        Deliverables
                      </h4>
                      {item.deliverables.length > 0 ? (
                        <DeliverableSlides
                          delivarables={item.deliverables}
                          portfolioIndex={item.id}
                        />
                      ) : (
                        <p className="text-desktop-body">
                          confidential information
                          <SvgIcon className="ml-2" fontSize="small">
                            <VisibilityOffRoundedIcon />
                          </SvgIcon>
                        </p>
                      )}
                    </div>
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
            size="md"
            withIcon={true}
            icon={<ArrowOutwardRounded />}
            onClick={() => {
              route.push('/service');
            }}
          />
        </div>
      </Section>
    );
  } else {
    return (
      <PortfolioMobile portfolio={portfolio} portfolioData={portfolioData} />
    );
  }
};

export default PortfolioSection;
