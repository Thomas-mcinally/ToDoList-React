import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach( () => {
  render(<App/>)
}
)
test('that headline is on page', () => {
  screen.getByText("My Todo List");
});
test('that input box is rendered', () => {
  screen.getByTestId('todo-input-box')
})
test('that the button to add new todo is rendered', () => {
screen.getByTestId('add-todo-button')
})
test('that the unordered list containing todo items is rendered', () => {
screen.getByTestId('todo-list')
})
test('that dark/light mode button is rendered', () => {
  screen.getByTestId('dark-light-mode-button')
});







