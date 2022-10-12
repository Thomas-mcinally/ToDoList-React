import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach( () => {
  render(<App/>)
}
)

test('that filter menu is rendered and contains options in correct order', () => {
    screen.getByTestId('filter-menu');
    expect(screen.getByTestId('filter-menu').options[0].text).toBe('All');
    expect(screen.getByTestId('filter-menu').options[1].text).toBe('Completed');
    expect(screen.getByTestId('filter-menu').options[2].text).toBe('Uncompleted');
  })

test ('that when add a new todo, then filter by completed items, the item is no longer visible on screen', () => {
    const todoInputField = screen.getByTestId('todo-input-box')
    const todoSubmitButton = screen.getByTestId('add-todo-button')

    userEvent.type(todoInputField, 'TEST')
    userEvent.click(todoSubmitButton)

    userEvent.selectOptions(screen.getByTestId('filter-menu'), 'Completed')

    const firstTodoDiv = screen.getByTestId('todo-list').children[0]
    expect(JSON.stringify(firstTodoDiv.style._values)).toBe(JSON.stringify({ display: 'none' }))
})