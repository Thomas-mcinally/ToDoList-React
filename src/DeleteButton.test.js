import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

var randomstring = require('randomstring')

let todoInputField
let todoSubmitButton
let myRandomString1
let myRandomString2

beforeEach(() => {
  render(<App />)
  todoInputField = screen.getByTestId('todo-input-box')
  todoSubmitButton = screen.getByTestId('add-todo-button')
  myRandomString1 = randomstring.generate();
  myRandomString2 = randomstring.generate();
})

afterEach( () => {
  localStorage.setItem('todosStatus', JSON.stringify([]))
  localStorage.setItem('todos', JSON.stringify([]))
}
)

test('that when add one item then delete it, the item is no longer visible on page', () => {
    userEvent.type(todoInputField, myRandomString1)
    userEvent.click(todoSubmitButton)  
  
    const deleteButtonOfTopTodo = screen.getAllByTestId('todo-delete-button')[0]
    userEvent.click(deleteButtonOfTopTodo) 
  
    expect(() => {screen.getByText(myRandomString1)}).toThrow()
  })
  
test('that when add two items, then delete the last one, the first one has not been deleted', () => {
  userEvent.type(todoInputField, myRandomString1)
  userEvent.click(todoSubmitButton)  
  userEvent.type(todoInputField, myRandomString2)
  userEvent.click(todoSubmitButton)  

  const deleteButtonOfTopTodo = screen.getAllByTestId('todo-delete-button')[0]
  userEvent.click(deleteButtonOfTopTodo) 

  screen.getByText(myRandomString1)
})