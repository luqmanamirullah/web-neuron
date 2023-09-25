import Button from '@/components/button';
import Section from '@/components/section';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import React from 'react';
import ArticleSlides from '../swiper/articleSlides';

interface Props {
  homeData: any;
}

const ArticlesSection: React.FC<Props> = ({ homeData }) => {
  return (
    <Section className="lg:mt-28 xs:mt-14 ">
      {/* Heading */}
      <div className="mb-6">
        <h5 className="lg:text-desktop-title xs:text-mobile-title font-bold text-sys-light-primary">
          Latest Articles
        </h5>

        <div className="flex justify-between">
          <h1 className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
            {homeData.title_articles}
          </h1>
          <Button
            className="lg:flex xs:hidden"
            buttonStyle="text"
            label="See More"
            size="md"
            withIcon={true}
            icon={<ArrowOutwardRounded />}
          />
        </div>
      </div>

      <ArticleSlides />
    </Section>
  );
};

export default ArticlesSection;
