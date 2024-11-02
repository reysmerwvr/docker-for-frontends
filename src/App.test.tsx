import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the App component with "Vite + React"', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /vite \+ react/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
