'use client';

import { animated, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';

export default function Loading(): JSX.Element {
  const containerAnimation = useSpring({
    from: {
      width: '0%',
    },
    to: {
      width: '100%',
    },
    config: {
      duration: 1000,
    },
  });
  const percentageAnimation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 1000,
      delay: 1000,
    },
  });

  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      if (loadingPercentage < 100) {
        setLoadingPercentage(loadingPercentage + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [loadingPercentage]);

  return (
    <animated.div className="w-screen h-screen bg-sys-light-surface z-[999]">
      <animated.div
        style={containerAnimation}
        className="w-full h-full bg-core-primary inline-flex justify-center items-center"
      >
        <animated.h1
          style={percentageAnimation}
          className="text-desktop-display font-bold text-white"
        >
          {loadingPercentage}%
        </animated.h1>
      </animated.div>
    </animated.div>
  );
}
