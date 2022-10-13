import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
import App from './App';

var randomstring = require('randomstring')

let myRandomString1
let todoInputField
let todoSubmitButton

beforeEach( () => {
  render(<App/>)
  myRandomString1 = randomstring.generate();
  todoInputField = screen.getByTestId('todo-input-box')
  todoSubmitButton = screen.getByTestId('add-todo-button')
}
)

afterEach( () => {
  localStorage.setItem('todosStatus', JSON.stringify([]))
  localStorage.setItem('todos', JSON.stringify([]))
}
)

test('that when add a new todo item, a mark as complete button appears on screen', () => {
  userEvent.type(todoInputField, myRandomString1)
  userEvent.click(todoSubmitButton)  

  const topTodoCompleteButton = screen.getByTestId('todo-complete-button')
})

test('when press the status-update button of the todo, the class of the div changes', () => {
  userEvent.type(todoInputField, myRandomString1)
  userEvent.click(todoSubmitButton)  

  const topTodoCompleteButton = screen.getAllByTestId('todo-complete-button')[0]
  const topTodo = screen.getAllByTestId('todo')[0]

  expect(topTodo.className).toBe('todo uncomplete')
  act( () => {
      topTodoCompleteButton.click()
  })

  expect(topTodo.className).toBe('todo complete')

  act( () => {
      topTodoCompleteButton.click()
  })

  expect(topTodo.className).toBe('todo uncomplete')
  })
