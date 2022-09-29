import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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
  screen.getByTestId('filter-menu');
  expect(screen.getByTestId('filter-menu').options[0].text).toBe('All');
  expect(screen.getByTestId('filter-menu').options[1].text).toBe('Completed');
  expect(screen.getByTestId('filter-menu').options[2].text).toBe('Uncompleted');
})

test('that the button to add new todo is rendered', () => {
  render(<App />)
  screen.getByTestId('add-todo-button')
})

test('that the unordered list containing todo items is rendered', () => {
  render(<App />)
  screen.getByTestId('todo-list')
})

test('that when input is submitted the box becomes empty afterwards', () => {
  render(<App />)
  const todoInputField = screen.getByTestId('todo-input-box')
  const todoSubmitButton = screen.getByTestId('add-todo-button')

  userEvent.type(todoInputField, '123456');
  userEvent.click(todoSubmitButton)

  expect(todoInputField.value).toBe('')
  
  screen.getByText('123456')
})
