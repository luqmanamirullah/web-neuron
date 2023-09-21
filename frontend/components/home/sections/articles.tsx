import React from 'react';
import Button from '@/components/button';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import ArticleSlides from '../swiper/articleSlides';

const ArticlesSection = () => {
  return (
    <section className="lg:mt-28 xs:mt-14 lg:mx-xl xs:mx-xs">
      {/* Heading */}
      <div className="mb-6">
        <h5 className="lg:text-desktop-title xs:text-mobile-title font-bold text-sys-light-primary">
          Latest Articles
        </h5>

        <div className="flex justify-between">
          <h1 className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
            Delve into Our Compelling Articles
          </h1>
          <Button
            className="lg:flex xs:hidden"
            buttonStyle="text"
            label="See More"
            size="md"
            withIcon={true}
            icon={<ArrowForwardRounded />}
          />
        </div>
      </div>

      <ArticleSlides />
    </section>
  );
};

export default ArticlesSection;
