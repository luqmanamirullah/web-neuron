'use client';
import Button from '@/components/button';
import Heading from '@/components/heading';
import Section from '@/components/section';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { SvgIcon, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PortfolioLine from '../portfolioBackground';
import DeliverableSlides from '../swiper/deliverableSlides';
import PortfolioMobile from './portfolioMobile';

interface Props {
  homeData: any;
  portfolioData: any;
}

const PortfolioSection: React.FC<Props> = ({ homeData, portfolioData }) => {
  const largeScreen = useMediaQuery('(min-width:1000px)');
  const route = useRouter();

  if (largeScreen) {
    return (
      <Section className="max-h-fit relative overflow-x-hidden">
        <PortfolioLine />
        {/* Heading */}
        <Heading
          alignCenter={true}
          darkBg={false}
          heading={homeData.title_project}
          subheading="Successfull Projects"
        />

        {/* Portfolios */}
        <div className="flex flex-col gap-32">
          {portfolioData.map((item: any, index: number) => {
            if (index < 3) {
              return (
                <div
                  key={item.portfolioId}
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
                        route.push(`/portfolio/${item.portfolioId}`);
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
                    <div className="block">
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
                    <div className="block">
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
              route.push('/service#portfolio');
            }}
          />
        </div>
      </Section>
    );
  } else {
    return <PortfolioMobile portfolioData={portfolioData} />;
  }
};

export default PortfolioSection;
