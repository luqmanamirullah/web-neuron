'use client';
import { animated, useTransition } from '@react-spring/web';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Transitions: React.FC<Props> = ({ children }) => {
  const transitions = useTransition(children, {
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -50%, 0)' },
  });
  return (
    <>
      {transitions((style, item) =>
        item !== undefined && item !== null ? (
          <animated.div style={style}>{item}</animated.div>
        ) : null,
      )}
    </>
  );
};

export default Transitions;
