'use client';

import React, { useEffect, useRef, useState } from 'react';
import './heroDisplay.css';

interface Props {
  heroDisplayList: any;
}

const HeroDisplay: React.FC<Props> = ({ heroDisplayList }: Props) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeItemIndex + 1) % heroDisplayList.length;
      setActiveItemIndex(nextIndex);
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [activeItemIndex, heroDisplayList.length]);

  useEffect(() => {
    if (ulRef.current !== null) {
      const maxChildWidth = Array.from(ulRef.current.children).reduce(
        (maxWidth, child) => {
          const childWidth = child.getBoundingClientRect().width;
          return childWidth > maxWidth ? childWidth : maxWidth;
        },
        0,
      );
      const maxChildHeight = Array.from(ulRef.current.children).reduce(
        (maxHeight, child) => {
          const childHeight = child.getBoundingClientRect().height;
          return childHeight > maxHeight ? childHeight : maxHeight;
        },
        0,
      );
      ulRef.current.style.height = `${maxChildHeight}px`;
      ulRef.current.style.width = `${maxChildWidth}px`;
    }
  }, [heroDisplayList, activeItemIndex]);

  return (
    <ul ref={ulRef} className="inline-flex relative overflow-hidden">
      {heroDisplayList.map((item: any, index: number) => {
        return (
          <li
            key={index}
            className={`display-text bg-gradient-to-r absolute from-sys-light-primary to-[#0B0E14] bg-clip-text text-transparent ${
              index === activeItemIndex ? 'slide-up' : 'translate-y-[110%]'
            }`}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default HeroDisplay;
