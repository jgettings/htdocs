import React, { createContext, useMemo, useState } from 'react';

export type ListItem = { [key: string]: string };

type CarouselContextProps = {
  items: ListItem[];
  children: React.ReactNode;
  itemKeyField: string;
  getNavLabel: (item: ListItem | null) => string;
};

type CarouselContextType = {
  currentIndex: number | null;
  currentItem: ListItem | null;
  setSelectedByKey: (key: string | undefined) => void;
  unsetSelected: () => void;
  hasNext: boolean;
  navigateNext: () => void;
  nextLabel: string;
  hasPrevious: boolean;
  navigatePrevious: () => void;
  previousLabel: string;
};

const CarouselContext = createContext<CarouselContextType>({
  currentIndex: null,
  currentItem: null,
  setSelectedByKey: () => {},
  unsetSelected: () => {},
  hasNext: false,
  navigateNext: () => {},
  nextLabel: '',
  hasPrevious: false,
  navigatePrevious: () => {},
  previousLabel: '',
});

export const CarouselContextProvider: React.FC<CarouselContextProps> = ({
  items,
  itemKeyField,
  getNavLabel,
  children,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const itemsByKeyField: Record<string, number> = useMemo(
    () =>
      items.reduce(
        (acc, curr, i) => {
          const key: string = curr[itemKeyField];
          acc[key] = i;
          return acc;
        },
        {} as Record<string, number>,
      ),
    [items, itemKeyField],
  );

  const hasNext = selectedIndex !== null && selectedIndex < items.length - 1;
  const hasPrevious = selectedIndex !== null && selectedIndex > 0;

  const context = useMemo(
    () => ({
      currentIndex: selectedIndex,
      currentItem: selectedIndex === null ? null : items[selectedIndex],
      setSelectedByKey: (key: string | undefined) =>
        setSelectedIndex(key === undefined ? null : itemsByKeyField[key]),
      unsetSelected: () => setSelectedIndex(null),
      hasNext,
      navigateNext: () => setSelectedIndex((i) => (i === null ? null : i + 1)),
      nextLabel:
        selectedIndex === null || selectedIndex > items.length - 1
          ? ''
          : getNavLabel(items[selectedIndex + 1]),
      hasPrevious,
      navigatePrevious: () =>
        setSelectedIndex((i) => (i === null ? null : i - 1)),
      previousLabel:
        selectedIndex === null || selectedIndex < 1
          ? ''
          : getNavLabel(items[selectedIndex - 1]),
    }),
    [getNavLabel, hasNext, hasPrevious, items, itemsByKeyField, selectedIndex],
  );

  return (
    <CarouselContext.Provider value={context}>
      {children}
    </CarouselContext.Provider>
  );
};

export default CarouselContext;
