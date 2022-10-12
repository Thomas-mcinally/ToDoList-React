import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const handleSubmit = (event) => { 
    event.preventDefault()
    const updatedTodoList = [event.target.children[0].value, ...todoList]
    setTodoList(updatedTodoList)
    saveTodosLocally(updatedTodoList)

    const updatedTodosStatusList = ['uncomplete', ...todoStatusList]
    setTodoStatusList(updatedTodosStatusList)
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
    setTodoStatusList(localTodoStatus)
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

    const todoStatusCopy = [...todoStatusList]
    todoStatusCopy.splice(todoIndex, 1)
    setTodoStatusList(todoStatusCopy)
    saveTodosStatusLocally(todoStatusCopy)
  }

  const updateTodoStatus = (todoIndex) => {
    const todoStatusCopy = [...todoStatusList]
    const oldStatus = todoStatusCopy[todoIndex]
    if (oldStatus === 'uncomplete') {
      todoStatusCopy[todoIndex] = 'complete'
      } else {
        todoStatusCopy[todoIndex] = 'uncomplete'
      }
    setTodoStatusList(todoStatusCopy)
    saveTodosStatusLocally(todoStatusCopy)

  }

  const updateBackgroundMode = () => {
    const oldMode = backgroundMode
    if (oldMode === 'light') {
      setBackgroundMode('dark')
      } else {
        setBackgroundMode('light')
      }
  }

  const getByDisplayValue = (todoStatus) => {
    if ( filterOption==='Completed' && todoStatus==='complete') {
      return ""
   }
   else if ( filterOption==='Uncompleted' && todoStatus==='uncomplete' ){
      return ""
   }
   else if ( filterOption==='All'){
    return ""
  }
  else {
    return "none"
  }
  }

  const todoListDivs = () => {
    return todoList.map((todo, index) => 
    <div style={{display: getByDisplayValue(todoStatusList[index])}} className={todoStatusList[index]} data-testid='todo' key={index.toString() + '-div'}>
      <li key={index.toString() + '-li'}>{todo}</li>
      <button data-testid="todo-complete-button" key={index.toString() + '-completeButton'} onClick={() => updateTodoStatus(index)}></button>
      <button data-testid="todo-delete-button" key={index.toString() + '-button'} onClick={() => deleteTodo(index)}></button>
    </div>
    )
  }

  const handleFilter = (event) => {
    setFilterOption(event.target.value)
  }
  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])
  const [todoStatusList, setTodoStatusList] = useState([])
  const [filterOption, setFilterOption]= useState('All')
  const [backgroundMode, setBackgroundMode] = useState("light")
  useEffect(fetchSavedTodos, [])
  useEffect(fetchSavedTodosStatus, [])

  return (
    <>
    <button data-testid='dark-light-mode-button' className={backgroundMode} onClick={updateBackgroundMode}>
    </button>
    <div className="App">
      <header>My Todo List</header>
    </div>
    <form onSubmit={handleSubmit}>
      <input data-testid='todo-input-box' value={inputValue} onChange={handleChange} />
      <button data-testid='add-todo-button'>
      </button>
      <select data-testid='filter-menu' onChange={handleFilter}>
        <option>All</option>
        <option>Completed</option>
        <option>Uncompleted</option>
      </select>
    </form>
    <ul data-testid='todo-list'>
      {
        todoListDivs()
      }
    </ul>


    </>
  );
}
export default App;


// TODO:
// 1. Styling
// 3. Refactor, break <App /> into many components


