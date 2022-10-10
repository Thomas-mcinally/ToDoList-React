import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
import App from './App';

var randomstring = require('randomstring')

test('when press the status-update button of the todo, the class of the div changes', () => {
    render(<App/>)
    const myRandomString1 = randomstring.generate();
    const todoInputField = screen.getByTestId('todo-input-box')
    const todoSubmitButton = screen.getByTestId('add-todo-button')

    userEvent.type(todoInputField, myRandomString1)
    userEvent.click(todoSubmitButton)  

    const topTodoCompleteButton = screen.getByTestId('todo-complete-button')
    const topTodo = screen.getAllByTestId('todo')[0]

    expect(topTodo.className).toBe('uncomplete')
    act( () => {
        topTodoCompleteButton.click()
    })

    expect(topTodo.className).toBe('complete')

    act( () => {
        topTodoCompleteButton.click()
    })

    expect(topTodo.className).toBe('uncomplete')
  })