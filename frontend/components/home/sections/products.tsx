'use client';

import React, { useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import Heading from '@/components/heading';
import { products } from '@/data/products';
import { SvgIcon } from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import Button from '@/components/button';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import Link from 'next/link';

interface Props {
  productsData: any;
  homeData: any;
}

const ProductsSection = ({ homeData, productsData }: Props) => {
  const [isActive, setIsActive] = useState<number>(-1);

  const toggleActive = (id: number) => {
    setIsActive(isActive === id ? -1 : id);
  };

  return (
    <section className="lg:mt-20 xs:mt-14 lg:mx-xl xs:mx-xs">
      <Heading
        alignCenter={true}
        darkBg={false}
        heading={homeData.title_product}
        subheading="Our Products"
      />

      <div className="mt-6 flex flex-col gap-1 items-center">
        {productsData.map((item: any, index: number) => {
          const isItemActive = isActive === index;

          const contentSpring = useSpring({
            maxHeight: isItemActive ? '1000px' : '0px',
            opacity: isItemActive ? 1 : 0,
            config: { ...config.gentle, duration: 800 },
          });

          return (
            <div
              key={index}
              className="lg:w-[42.1875rem] xs:w-full"
              onClick={() => toggleActive(index)}
            >
              {/* Top Divider */}
              <span
                className={`border-[1px] transition-all duration-[400ms] border-sys-light-outline ${
                  index === 0 ? 'hidden' : 'block'
                } ${isActive === index - 1 ? 'w-[60%]' : 'w-[80%]'}`}
              ></span>

              {/* Product Name */}
              <div className="pt-8 pb-4 px-4 flex justify-between items-center cursor-pointer">
                <div>
                  <h4 className="lg:text-desktop-title xs:text-mobile-title font-bold">
                    {item.name}
                  </h4>
                  <p className="lg:text-desktop-label xs:text-mobile-label text-sys-light-onSurfaceVariant">
                    {item.subtitle}
                  </p>
                </div>

                <SvgIcon
                  fontSize="medium"
                  className={
                    isActive === index
                      ? 'transition duration-[600ms] -rotate-180'
                      : 'transition duration-[600ms]'
                  }
                >
                  <ArrowDownwardRoundedIcon />
                </SvgIcon>
              </div>

              {/* Product Content */}
              <animated.div
                style={contentSpring}
                className="px-4 pb-6 overflow-hidden"
              >
                <p className="mb-4 lg:text-desktop-body xs:text-mobile-body text-sys-light-onSurface">
                  {item.desc}
                </p>

                <Link href={item.link}>
                  <Button
                    buttonStyle="filled"
                    label="Try Now"
                    size="sm"
                    withIcon={true}
                    icon={<ArrowForwardRounded />}
                  />
                </Link>
              </animated.div>

              {/* Bottom Divider */}
              <span className="border-[1px] block w-full border-sys-light-outline"></span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
