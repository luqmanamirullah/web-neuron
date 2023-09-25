import { useEffect, useState } from 'react';

interface Shrink {
  isShrink: boolean;
}

function useShrink(): Shrink {
  const [isShrink, setIsShrink] = useState<boolean>(false);

  const handlerScroll: any = () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      setIsShrink(true);
    } else {
      setIsShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }, []);

  return { isShrink };
}

export default useShrink;
