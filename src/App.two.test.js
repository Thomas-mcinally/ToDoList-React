import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

var randomstring = require('randomstring')
function sleep(milliseconds) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i += 1) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
test('that when add one item then delete it, the item is no longer visible on page', () => {
  render(<App />)
  const myRandomString = randomstring.generate();
  const todoInputField = screen.getByTestId('todo-input-box')
  const todoSubmitButton = screen.getByTestId('add-todo-button')

  userEvent.type(todoInputField, myRandomString)
  userEvent.click(todoSubmitButton)  

  const deleteButtonOfTopTodo = screen.getAllByTestId('todo-delete-button')[0]
  userEvent.click(deleteButtonOfTopTodo) 

  expect(() => {screen.getByText(myRandomString)}).toThrow()
})
test('that when add two items, then delete the last one, the first one has not been deleted', () => {
  render(<App />)
  const myRandomString1 = randomstring.generate();
  const myRandomString2 = randomstring.generate();
  const todoInputField = screen.getByTestId('todo-input-box')
  const todoSubmitButton = screen.getByTestId('add-todo-button')

  userEvent.type(todoInputField, myRandomString1)
  userEvent.click(todoSubmitButton)  
  userEvent.type(todoInputField, myRandomString2)
  userEvent.click(todoSubmitButton)  

  const deleteButtonOfTopTodo = screen.getAllByTestId('todo-delete-button')[0]
  userEvent.click(deleteButtonOfTopTodo) 

  screen.getByText(myRandomString1)
})








