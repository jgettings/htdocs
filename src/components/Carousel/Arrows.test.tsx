import { useContext } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CarouselContext, { CarouselContextProvider, ListItem } from './Context';
import CarouselArrows from './Arrows';

describe('CarouselArrows', () => {
  const items = [
    { k: '1', value: 'one' },
    { k: '2', value: 'two' },
    { k: '3', value: 'three' },
  ];
  const props = {
    items,
    itemKeyField: 'k',
    getNavLabel: (item: ListItem | null) =>
      item ? `Nav - Go to ${item.value}` : 'Nav - not found',
  };

  const SetButton: React.FC<{ v: string }> = ({ v }) => {
    const { setSelectedByKey } = useContext(CarouselContext);

    return (
      <button type="button" onClick={() => setSelectedByKey(v)}>
        Set {v}
      </button>
    );
  };

  const ShowItem: React.FC = () => {
    const { currentItem } = useContext(CarouselContext);

    return <div>Current: {currentItem?.value}</div>;
  };

  it('shows next arrow on the first item and no previous arrow', () => {
    render(
      <CarouselContextProvider {...props}>
        <div>Children in the context</div>
        <SetButton v="1" />
        <ShowItem />
        <CarouselArrows />
      </CarouselContextProvider>,
    );
    fireEvent.click(screen.getByText('Set 1'));
    expect(screen.getAllByTitle(/^Nav -/)).toHaveLength(1);
    expect(screen.getByTitle('Nav - Go to two')).toBeInTheDocument();
  });

  it('shows next and previous arrow on the middle item', () => {
    render(
      <CarouselContextProvider {...props}>
        <div>Children in the context</div>
        <SetButton v="2" />
        <ShowItem />
        <CarouselArrows />
      </CarouselContextProvider>,
    );
    fireEvent.click(screen.getByText('Set 2'));
    expect(screen.getAllByTitle(/^Nav -/)).toHaveLength(2);
    expect(screen.getByTitle('Nav - Go to one')).toBeInTheDocument();
    expect(screen.getByTitle('Nav - Go to three')).toBeInTheDocument();
  });

  it('navigates forward through the items', () => {
    render(
      <CarouselContextProvider {...props}>
        <div>Children in the context</div>
        <SetButton v="1" />
        <ShowItem />
        <CarouselArrows />
      </CarouselContextProvider>,
    );
    fireEvent.click(screen.getByText('Set 1'));
    fireEvent.click(screen.getByTitle('Nav - Go to two'));
    expect(screen.getByText('Current: two')).toBeInTheDocument();

    fireEvent.click(screen.getByTitle('Nav - Go to three'));
    expect(screen.getByText('Current: three')).toBeInTheDocument();
  });

  it('navigates backward through the items', () => {
    render(
      <CarouselContextProvider {...props}>
        <div>Children in the context</div>
        <SetButton v="3" />
        <ShowItem />
        <CarouselArrows />
      </CarouselContextProvider>,
    );
    fireEvent.click(screen.getByText('Set 3'));
    fireEvent.click(screen.getByTitle('Nav - Go to two'));
    expect(screen.getByText('Current: two')).toBeInTheDocument();

    fireEvent.click(screen.getByTitle('Nav - Go to one'));
    expect(screen.getByText('Current: one')).toBeInTheDocument();
  });
});
