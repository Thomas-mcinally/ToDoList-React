import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

var randomstring = require('randomstring')

test('that input box is rendered', () => {
    render(<App />)
    screen.getByTestId('todo-input-box')
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
  
    userEvent.type(todoInputField, '123456')
    userEvent.click(todoSubmitButton)
  
    expect(todoInputField.value).toBe('')
  })
  
  test('that when enter random text in input box and submit it shows up in list', () => {
    render(<App/>)
    const myRandomString = randomstring.generate();
    const todoInputField = screen.getByTestId('todo-input-box')
    const todoSubmitButton = screen.getByTestId('add-todo-button')
    const todoList = screen.getByTestId('todo-list')
    
    userEvent.type(todoInputField, myRandomString)
    userEvent.click(todoSubmitButton)
    
    expect(todoList.children[0].textContent).toBe(myRandomString)
  })
  
  test('that new todo list item is added to top of list', () => {
    render(<App/>)
    const myRandomString1 = randomstring.generate();
    const myRandomString2 = randomstring.generate();
  
    const todoInputField = screen.getByTestId('todo-input-box')
    const todoSubmitButton = screen.getByTestId('add-todo-button')
    const todoList = screen.getByTestId('todo-list')
    
    userEvent.type(todoInputField, myRandomString1)
    userEvent.click(todoSubmitButton)
    userEvent.type(todoInputField, myRandomString2)
    userEvent.click(todoSubmitButton)
  
    expect(todoList.children[0].textContent).toBe(myRandomString2)
  })