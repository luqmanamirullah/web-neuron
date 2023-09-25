import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<Props> = ({ className = '', children, id = '' }) => {
  return (
    <section
      id={id}
      className={twMerge(
        'lg:px-10 md:px-8 px-4 relative  max-h-[800px] 2xl:mx-auto',
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
