import { useEffect, useState } from 'react';

function useSticky(
  fromRef: React.RefObject<HTMLDivElement>,
  endRef: React.RefObject<HTMLDivElement> | undefined = undefined,
): boolean {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll: any = () => {
      if (fromRef.current !== null && endRef?.current !== null) {
        const navbarHeight = 80;
        const fromTop = fromRef.current.offsetTop;
        let endTop;
        let endBottom;
        if (endRef !== undefined) {
          endTop = endRef.current.offsetTop;
          endBottom =
            endTop + endRef.current.clientHeight - (navbarHeight + 100);
        }

        if (endBottom === undefined) {
          if (window.scrollY >= fromTop - navbarHeight) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        } else {
          if (
            window.scrollY >= fromTop - navbarHeight &&
            window.scrollY <= endBottom
          ) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [endRef, fromRef]);

  return isSticky;
}

export default useSticky;
