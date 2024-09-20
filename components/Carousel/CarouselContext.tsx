import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { isBrowser } from '~/utils/isBrowser';

interface State {
  currentIndex: number;
  next: () => void;
  back: () => void;
}

const StateContext = createContext<State>({
  currentIndex: 0,
  back: () => undefined,
  next: () => undefined,
});

const TIME = 5000;
export const CarouselContext = ({ children, max }: PropsWithChildren<{ max: number }>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex > max - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handleBack = () => {
    const nextIndex = currentIndex - 1;
    console.log('BACK', nextIndex, max);
    if (nextIndex < 0) {
      setCurrentIndex(max - 1);
    } else {
      setCurrentIndex(Math.abs(nextIndex));
    }
  };

  useEffect((): any => {
    if (isBrowser()) {
      const timerId = window.setInterval(handleNext, TIME);
      return () => {
        window.clearInterval(timerId);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <StateContext.Provider value={{ back: handleBack, next: handleNext, currentIndex }}>
      {children}
    </StateContext.Provider>
  );
};
CarouselContext.useCarouselContext = () => {
  const context = useContext(StateContext);
  return context;
};
