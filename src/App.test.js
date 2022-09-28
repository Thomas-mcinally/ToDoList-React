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

test('that input box is rendered', () => {
  render(<App />)
  screen.getByTestId('todo-input-box')
})

test('that filter menu is rendered and contains options in correct order', () => {
  render(<App />)
  expect(screen.getByTestId('filter-menu').options[0].text).toBe('All')
  expect(screen.getByTestId('filter-menu').options[1].text).toBe('Completed')
  expect(screen.getByTestId('filter-menu').options[2].text).toBe('Uncompleted')
})
