'use client';

import React, { useEffect, useState, useRef } from 'react';
import { homeHeroDisplays } from '@/data/homeHeroDisplay';
import './heroDisplay.css';

const HeroDisplay = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const ulRef = useRef<HTMLUListElement | null>(null);

  // Animation Delay
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeItemIndex + 1) % homeHeroDisplays.length;
      setActiveItemIndex(nextIndex);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [activeItemIndex]);

  // Set the width of the <ul> based on the max width of the absolute positioned <li>
  useEffect(() => {
    if (ulRef.current) {
      const maxChildWidth = Array.from(ulRef.current.children).reduce(
        (maxWidth, child) => {
          const childWidth = child.getBoundingClientRect().width;
          return childWidth > maxWidth ? childWidth : maxWidth;
        },
        0,
      );
      ulRef.current.style.width = `${maxChildWidth}px`;
    }
  }, [homeHeroDisplays, activeItemIndex]);

  return (
    <ul
      ref={ulRef}
      className="lg:h-[3.6875rem] xs:h-[2rem] inline-flex relative overflow-hidden"
    >
      {homeHeroDisplays.map((item, index) => {
        return (
          <li
            key={index}
            className={`display-text bg-gradient-to-r absolute from-sys-light-primary to-[#0B0E14] bg-clip-text text-transparent ${
              index === activeItemIndex ? 'slide-up' : 'translate-y-[110%]'
            }`}
          >
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};

export default HeroDisplay;
