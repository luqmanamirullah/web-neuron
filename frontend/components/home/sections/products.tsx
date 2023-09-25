'use client';

import Heading from '@/components/heading';
import React, { useState } from 'react';
import ProductRow from '../productRow';

interface Props {
  productsData: any;
  homeData: any;
}

const ProductsSection: React.FC<Props> = ({ homeData, productsData }) => {
  const [isActive, setIsActive] = useState<number>(-1);

  const toggleActive: any = (id: number) => {
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
        {productsData.map((item, index) => (
          <ProductRow
            key={index}
            index={index}
            item={item}
            isActive={isActive}
            toggleActive={toggleActive}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
