import { render, screen } from '@testing-library/react';
import App from './App';

test('that headline is on page', () => {
  render(<App />);
  screen.getByText("My Todo List");
});
