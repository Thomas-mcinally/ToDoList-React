import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const handleSubmit = (event) => { 
    event.preventDefault()
    const updatedTodoList = [event.target.children[0].value, ...todoList]
    setTodoList(updatedTodoList)
    saveTodosLocally(updatedTodoList)

    const updatedTodosStatusList = ['uncomplete', ...todoStatus]
    setTodoStatus(updatedTodosStatusList)
    saveTodosStatusLocally(updatedTodosStatusList)

    setInputValue('')
  }

  const fetchSavedTodos = () => {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    setTodoList(todos)    
  }

  const saveTodosLocally = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const fetchSavedTodosStatus = () => {
    let localTodoStatus;
    if (localStorage.getItem('todosStatus') === null) {
      localTodoStatus = [];
    } else {
      localTodoStatus = JSON.parse(localStorage.getItem('todosStatus'));
    }
    setTodoStatus(localTodoStatus)
  }

  const saveTodosStatusLocally = (todos) => {
    localStorage.setItem('todosStatus', JSON.stringify(todos));
  }

  const handleChange = (event) => { 
    setInputValue(event.target.value)
  }

  const deleteTodo = (todoIndex) => {
    const todoListCopy = [...todoList]
    todoListCopy.splice(todoIndex, 1)
    setTodoList(todoListCopy)
    saveTodosLocally(todoListCopy)

    const todoStatusCopy = [...todoStatus]
    todoStatusCopy.splice(todoIndex, 1)
    setTodoStatus(todoStatusCopy)
    saveTodosStatusLocally(todoStatusCopy)
  }

  const updateTodoStatus = (todoIndex) => {
    const todoStatusCopy = [...todoStatus]
    const oldStatus = todoStatusCopy[todoIndex]
    if (oldStatus == 'uncomplete') {
      todoStatusCopy[todoIndex] = 'complete'
      } else {
        todoStatusCopy[todoIndex] = 'uncomplete'
      }
    setTodoStatus(todoStatusCopy)
    saveTodosStatusLocally(todoStatusCopy)

  }

  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])
  const [todoStatus, setTodoStatus] = useState([])
  useEffect(fetchSavedTodos, [])
  useEffect(fetchSavedTodosStatus, [])

  return (
    <>
    <button data-testid='dark-light-mode-button'>
    </button>
    <div className="App">
      <header>My Todo List</header>
    </div>
    <form onSubmit={handleSubmit}>
      <input data-testid='todo-input-box' value={inputValue} onChange={handleChange} />
      <button data-testid='add-todo-button'>
      </button>
      <select data-testid='filter-menu'>
        <option>All</option>
        <option>Completed</option>
        <option>Uncompleted</option>
      </select>
    </form>
    <ul data-testid='todo-list'>
      {
        todoList.map((todo, index) => 
        <div className={todoStatus[index]} data-testid='todo' key={index.toString() + '-div'}>
          <li key={index.toString() + '-li'}>{todo}</li>
          <button data-testid="todo-complete-button" key={index.toString() + '-completeButton'} onClick={() => updateTodoStatus(index)}></button>
          <button data-testid="todo-delete-button" key={index.toString() + '-button'} onClick={() => deleteTodo(index)}></button>
        </div>
        )
      }
    </ul>


    </>
  );
}
export default App;


// TODO:
// 1. Styling
// 2. Add ability to un-toggle status
// 3. Refactor, add more components
// 4. Refactor,  use setup and teardown in tests
// 5. Refactor, figure out how to reset state variables between tests
// 6. Refactor, re-group tests logically