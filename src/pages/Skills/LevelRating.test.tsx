import { render, screen } from '@testing-library/react';
import LevelRating from './LevelRating';

describe('LevelRating', () => {
  it('renders 5 of 5 stars for Master level', () => {
    render(<LevelRating level="Master" />);
    expect(screen.getByTitle('Master')).toHaveTextContent('5 of 5 stars');
  });
  it('renders 4 of 5 stars for Advanced level', () => {
    render(<LevelRating level="Advanced" />);
    expect(screen.getByTitle('Advanced')).toHaveTextContent('4 of 5 stars');
  });
  it('renders 3 of 5 stars for Proficient level', () => {
    render(<LevelRating level="Proficient" />);
    expect(screen.getByTitle('Proficient')).toHaveTextContent('3 of 5 stars');
  });
  it('renders 2 of 5 stars for Competent level', () => {
    render(<LevelRating level="Competent" />);
    expect(screen.getByTitle('Competent')).toHaveTextContent('2 of 5 stars');
  });
  it('renders 1 of 5 stars for Beginner level', () => {
    render(<LevelRating level="Beginner" />);
    expect(screen.getByTitle('Beginner')).toHaveTextContent('1 of 5 stars');
  });
});
