import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

var randomstring = require('randomstring')
let todoInputField 
let todoSubmitButton

beforeEach( () => {
  render(<App/>)
  todoInputField = screen.getByTestId('todo-input-box')
  todoSubmitButton = screen.getByTestId('add-todo-button')
}
)

afterEach( () => {
  localStorage.setItem('todosStatus', JSON.stringify([]))
  localStorage.setItem('todos', JSON.stringify([]))
}
)

test('that when input is submitted the box becomes empty afterwards', () => {
  userEvent.type(todoInputField, '123456')
  userEvent.click(todoSubmitButton)

  expect(todoInputField.value).toBe('')
})

test('that when enter random text in input box and submit it shows up in list', () => {
  const myRandomString = randomstring.generate();
  const todoList = screen.getByTestId('todo-list')
  
  userEvent.type(todoInputField, myRandomString)
  userEvent.click(todoSubmitButton)
  
  expect(todoList.children[0].textContent).toBe(myRandomString)
})

test('that new todo list item is added to top of list', () => {
  const myRandomString1 = randomstring.generate()
  const myRandomString2 = randomstring.generate()
  
  const todoList = screen.getByTestId('todo-list')
  
  userEvent.type(todoInputField, myRandomString1)
  userEvent.click(todoSubmitButton)
  userEvent.type(todoInputField, myRandomString2)
  userEvent.click(todoSubmitButton)

  expect(todoList.children[0].textContent).toBe(myRandomString2)
})

test('that empty inputs are blocked', () => {
  userEvent.click(todoSubmitButton)

  expect(() => {screen.getByTestId('todo')}).toThrow()
})