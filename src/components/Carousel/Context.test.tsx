import { useContext } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CarouselContext, { CarouselContextProvider } from './Context';

describe('CarouselContext', () => {
  const SetButton: React.FC = () => {
    const { setSelectedByKey } = useContext(CarouselContext);

    return (
      <button type="button" onClick={() => setSelectedByKey('2')}>
        Set it
      </button>
    );
  };

  const UnsetButton: React.FC = () => {
    const { unsetSelected } = useContext(CarouselContext);

    return (
      <button type="button" onClick={() => unsetSelected()}>
        Unset it
      </button>
    );
  };

  const ShowItem: React.FC = () => {
    const { currentItem } = useContext(CarouselContext);

    return <div>Current: {currentItem?.value}</div>;
  };

  it('renders children', () => {
    render(
      <CarouselContextProvider
        items={[]}
        itemKeyField=""
        getNavLabel={() => ''}
      >
        <div>Children in the context</div>
      </CarouselContextProvider>,
    );
    expect(screen.getByText('Children in the context')).toBeInTheDocument();
  });
  it('sets and unsets the current item', () => {
    render(
      <CarouselContextProvider
        items={[
          { k: '1', value: 'one' },
          { k: '2', value: 'two' },
          { k: '3', value: 'three' },
        ]}
        itemKeyField="k"
        getNavLabel={() => ''}
      >
        <div>Children in the context</div>
        <SetButton />
        <UnsetButton />
        <ShowItem />
      </CarouselContextProvider>,
    );
    expect(screen.getByText('Current:')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Set it'));
    expect(screen.getByText('Current: two')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Unset it'));
    expect(screen.getByText('Current:')).toBeInTheDocument();
  });
});
