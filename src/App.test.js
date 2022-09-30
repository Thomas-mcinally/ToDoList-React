import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

var randomstring = require('randomstring')
const myRandomString = randomstring.generate();

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

  userEvent.type(todoInputField, '123456')
  userEvent.click(todoSubmitButton)

  expect(todoInputField.value).toBe('')
})

test('that when enter random text in input box and submit it shows up in list', () => {
  render(<App/>)
  const todoInputField = screen.getByTestId('todo-input-box')
  const todoSubmitButton = screen.getByTestId('add-todo-button')
  const todoList = screen.getByTestId('todo-list')
  
  userEvent.type(todoInputField, myRandomString)
  userEvent.click(todoSubmitButton)
  
  expect(todoList.children[0].textContent).toBe(myRandomString)
})

test('that new todo list item is added to top of list', () => {
  render(<App/>)
  const todoInputField = screen.getByTestId('todo-input-box')
  const todoSubmitButton = screen.getByTestId('add-todo-button')
  const todoList = screen.getByTestId('todo-list')
  
  userEvent.type(todoInputField, '1')
  userEvent.click(todoSubmitButton)
  userEvent.type(todoInputField, '2')
  userEvent.click(todoSubmitButton)

  expect(todoList.children[0].textContent).toBe('2')
})

test('that when reload page elements are still there', () => {
  render(<App/>)
  const todoInputField = screen.getByTestId('todo-input-box')
  const todoSubmitButton = screen.getByTestId('add-todo-button')
  const todoList = screen.getByTestId('todo-list')
  
  userEvent.type(todoInputField, '1')
  userEvent.click(todoSubmitButton)
  window.location.reload(true)
  expect(todoList.children[0].textContent).toBe('1')
})

// STILL NEED TO GET THE ABOVE TEST TO FAIL.
// When reload page, there should be no list items since we havent implemented local storage yet.