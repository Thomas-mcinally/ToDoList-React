import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const handleSubmit = (event) => { 
    event.preventDefault()
    const updatedTodolist = [event.target.children[0].value, ...todoList]
    setTodoList(updatedTodolist)
    saveTodosLocally(updatedTodolist)
    setInputValue('')
    setTodoStatus(['uncomplete', ...todoStatus])
  }

  function fetchSavedTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    setTodoList(todos)
  }

  function saveTodosLocally(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const handleChange = (event) => { 
    setInputValue(event.target.value)
  }

  const deleteTodo = (event, todoIndex) => {
    const todoListCopy = [...todoList]
    todoListCopy.splice(todoIndex, 1)
    setTodoList(todoListCopy)
    saveTodosLocally(todoListCopy)
  }

  const updateTodoStatus = (event, todoIndex) => {
    const todoStatusCopy = [...todoStatus]
    todoStatusCopy[todoIndex] = 'complete'
    setTodoStatus(todoStatusCopy)
  }

  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])
  const [todoStatus, setTodoStatus] = useState([])
  useEffect(fetchSavedTodos, [])

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
        todoList.map((todo, index) => <div className={todoStatus[index]} data-testid='todo' key={index.toString() + '-div'}><li key={index.toString() + '-li'}>{todo}</li><button data-testid="todo-delete-button" key={index.toString() + '-button'} onClick={(e) => deleteTodo(e, index)}></button><button data-testid="todo-complete-button" key={index.toString() + '-completeButton'} onClick={(e) => updateTodoStatus(e, index)}></button></div>)
      }
    </ul>


    </>
  );
}

export default App;

