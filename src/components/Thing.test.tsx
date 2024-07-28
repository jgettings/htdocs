import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import Thing from './Thing';

describe('Thing', () => {
  it('renders', () => {
    render(<Thing title="Jen" />);
    expect(screen.getByText(/Jen/)).toBeInTheDocument();
  });
});
