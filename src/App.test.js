import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio core content', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /Henry/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /À propos/i })).toBeInTheDocument();
});
