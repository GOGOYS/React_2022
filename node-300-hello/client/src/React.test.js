import { render, screen } from '@testing-library/react';
import React from './React';

test('renders learn react link', () => {
  render(<React />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
