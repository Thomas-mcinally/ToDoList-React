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
  userEvent.click(todoSubmitButton)  

  const deleteButtonOfFirstTodo = screen.getAllByTestId('todo-delete-button')[0]
  userEvent.click(deleteButtonOfFirstTodo) 
  setTimeout(
    () => expect(() => {screen.getByText(myRandomString)}).toThrow(),
    2000
  )
})






