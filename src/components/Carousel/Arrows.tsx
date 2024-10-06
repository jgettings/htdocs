import { useContext } from 'react';
import { PiCaretCircleRightFill, PiCaretCircleLeftFill } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';
import CarouselContext from './Context';

type CarouselArrowButtonProps = {
  direction: 'left' | 'right';
  label?: string;
  onClick: () => void;
};

const CarouselArrowButton: React.FC<CarouselArrowButtonProps> = ({
  direction,
  label,
  onClick,
}) => (
  <div
    className={twMerge(
      'absolute top-0 hidden h-full items-center justify-center md:flex',
      direction === 'left' ? 'left-[-3em]' : 'right-[-3em]',
    )}
  >
    <button
      type="button"
      onClick={onClick}
      title={label ?? `Navigate ${direction}`}
    >
      {direction === 'left' ? (
        <PiCaretCircleLeftFill size="2em" />
      ) : (
        <PiCaretCircleRightFill size="2em" />
      )}
    </button>
  </div>
);

const CarouselArrows: React.FC = () => {
  const {
    hasNext,
    navigateNext,
    nextLabel,
    hasPrevious,
    navigatePrevious,
    previousLabel,
  } = useContext(CarouselContext);

  return (
    <>
      {hasPrevious && (
        <CarouselArrowButton
          direction="left"
          onClick={navigatePrevious}
          label={previousLabel}
        />
      )}
      {hasNext && (
        <CarouselArrowButton
          direction="right"
          onClick={navigateNext}
          label={nextLabel}
        />
      )}
    </>
  );
};

export default CarouselArrows;
