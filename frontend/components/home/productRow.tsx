import Button from '@/components/button';
import { type Product } from '@/data/products';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { SvgIcon } from '@mui/material';
import { animated, config, useSpring } from '@react-spring/web';
import React from 'react';

interface Props {
  index: number;
  item: Product;
  isActive: number;
  toggleActive: (id: number) => void;
}

const ProductRow: React.FC<Props> = ({
  index,
  item,
  isActive,
  toggleActive,
}) => {
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
      onClick={() => {
        toggleActive(index);
      }}
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
            {item.title}
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
      <animated.div style={contentSpring} className="px-4 pb-6 overflow-hidden">
        <p className="lg:text-desktop-body xs:text-mobile-body text-sys-light-onSurface">
          {item.desc}
        </p>

        <Button
          className="mt-4"
          buttonStyle="filled"
          label="Try Now"
          size="sm"
          withIcon={true}
          icon={<ArrowForwardRounded />}
        />
      </animated.div>

      {/* Bottom Divider */}
      <span className="border-[1px] block w-full border-sys-light-outline"></span>
    </div>
  );
};

export default ProductRow;
