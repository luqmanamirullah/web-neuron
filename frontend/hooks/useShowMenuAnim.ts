import {
  config,
  useChain,
  useSpring,
  useTransition,
  type Lookup,
  type SpringRef,
  type SpringValue,
  type TransitionFn,
} from '@react-spring/web';

interface Props<T> {
  activeTrigger: boolean;
  springRef: SpringRef<Lookup<any>>;
  transRef: SpringRef<Lookup<any>>;
  list: T[];
}

interface Animation<T> {
  transitions: TransitionFn<
    T,
    {
      opacity: number;
      scale: number;
      y: number;
    }
  >;
  size: SpringValue<string>;
  rest: any;
}

function useShowMenuAnim<T>({
  activeTrigger,
  springRef,
  transRef,
  list,
}: Props<T>): Animation<T> {
  const { size, ...rest } = useSpring({
    ref: springRef,
    from: { size: '0%' },
    to: { size: activeTrigger ? '100%' : '0%' },
    config: { ...config.gentle, duration: 100 },
  });

  const data = list;
  const transitions = useTransition(activeTrigger ? data : [], {
    ref: transRef,
    trail: 300 / data.length,
    from: { opacity: 0, scale: 0, y: 0 },
    enter: { opacity: 1, scale: 1, y: 1 },
    leave: { opacity: 0, scale: 0, y: 0 },
  });

  useChain(activeTrigger ? [springRef, transRef] : [transRef, springRef], [
    0,
    activeTrigger ? 0.1 : 1,
  ]);

  return { size, rest, transitions };
}

// how to use:
// const { size, rest, transitions } = useShowMenuAnim<Type>({activeTrigger, springRef, transRef, list});

export default useShowMenuAnim;
