'use client';
import Button from '@/components/button';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import { useMediaQuery } from '@mui/material';
import React from 'react';

const CtaContactUs: React.FC = () => {
  const isLarge = useMediaQuery('(min-width:768px)');
  const isMedium = useMediaQuery('(min-width:480px)');
  return (
    <section className="w-full lg:h-screen max-h-[800px] h-full py-10 lg:px-20 md:px-10 sm:px-2 px-2 inline-flex justify-center items-center ">
      {/* Containter */}
      <div className="relative  max-w-4xl xl:w-4/5  md:w-[90%] w-full rounded h-fit md:py-16 py-8 inline-flex justify-center items-center bg-techBorder2 bg-center bg-no-repeat md:bg-[length:90%_100%] bg-[length:100%_100%]">
        {/* Content */}
        <div className="w-4/5  flex flex-col gap-2 justify-center items-center text-center z-10">
          <h1 className="lg:text-desktop-display md:text-desktop-headline text-mobile-headline font-bold ">
            Transform Today, Conquer Tomorrow
          </h1>
          <p
            className="md:text-desktop-body 
          text-subtitle sm:inline-flex hidden font-medium lg:w-4/5 w-full"
          >
            Let us help you with your digital transformation to boost
            productivity and fortify your daily activities and business worth.
          </p>

          {isLarge ? (
            <Button
              buttonStyle="filled"
              size="lg"
              label="Schedule A Consultation"
              withIcon
              icon={<ArrowOutwardRounded />}
              className="mt-6"
            />
          ) : isMedium ? (
            <Button
              buttonStyle="filled"
              size="md"
              label="Schedule A Consultation"
              withIcon
              icon={<ArrowOutwardRounded />}
              className="mt-4"
            />
          ) : (
            <Button
              buttonStyle="filled"
              size="sm"
              label="Schedule A Consultation"
              withIcon
              icon={<ArrowOutwardRounded />}
              className="mt-4"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaContactUs;
