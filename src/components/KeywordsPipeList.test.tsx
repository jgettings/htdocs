import { render, screen } from '@testing-library/react';
import KeywordsPipeList from './KeywordsPipeList';

describe('KeywordsPipeList', () => {
  it('renders null if there keywords is undefined', () => {
    const { container } = render(<KeywordsPipeList keywords={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });
  it('renders null if there keywords is empty', () => {
    // We don't want an empty <ul>
    const { container } = render(<KeywordsPipeList keywords={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
  it('renders a list of all of the keywords sorted alphabetically', () => {
    render(<KeywordsPipeList keywords={['one', 'two', 'three']} />);
    expect(screen.getByRole('list')).toHaveTextContent('onethreetwo');
  });
  it('appends className props to predefined classes', () => {
    render(<KeywordsPipeList className="mb-2" keywords={['anything']} />);
    expect(screen.getByRole('list')).toHaveClass('mb-2');
    expect(screen.getByRole('list')).toHaveClass('text-gray-500');
  });
  // If tests knew about tailwind we could probably test the pipes
  // but that is overkill at this point
});
