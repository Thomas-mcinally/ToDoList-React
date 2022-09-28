import { render, screen } from '@testing-library/react';
import App from './App';

test('that headline is on page', () => {
  render(<App />);
  screen.getByText("My Todo List");
});

test('that dark/light mode button is rendered', () => {
  render(<App />);
  screen.getByTestId('dark-light-mode-button')
});