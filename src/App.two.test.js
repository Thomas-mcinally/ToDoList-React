import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

var randomstring = require('randomstring')



it('CheckboxWithLabel changes the text after click', () => {
  render(<App/>)
  const myRandomString = randomstring.generate();

  const todoInputField = screen.getByTestId('todo-input-box')
  const todoSubmitButton = screen.getByTestId('add-todo-button')

  userEvent.type(todoInputField, myRandomString)

  userEvent.click(todoSubmitButton)  // this click triggers deleteTodo function
  userEvent.click(todoSubmitButton)  // this click triggers deleteTodo function
  const deleteButtonOfFirstTodo = screen.getAllByTestId('todo-delete-button')[0]
  // userEvent.click(deleteButtonOfFirstTodo) // this click for some reason doesnt trigger deleteTodo function
  expect(() => {screen.getByText(myRandomString)}).toThrow()
})


// qs to answer: 
// 1.why is deleteTodo function executed when click submit button? Executed twice when click submit 2nd time
// 2.why is deleteTodo function not executed when click todo-delete-button?







