import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const handleSubmit = (event) => {
    const todoText = event.target.children[0].value
    event.preventDefault()
    if (todoText === "") {
      return
    }
    else {
      const updatedTodoList = [todoText, ...todoList]
      setTodoList(updatedTodoList)
      saveTodosLocally(updatedTodoList)

      const updatedTodosStatusList = ['uncomplete', ...todoStatusList]
      setTodoStatusList(updatedTodosStatusList)
      saveTodosStatusListLocally(updatedTodosStatusList)

      setInputValue('')
    }
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

  const saveTodosStatusListLocally = (todos) => {
    localStorage.setItem('todosStatus', JSON.stringify(todos));
  }

  const fetchFilterOption = () => {
    let localFilterOption;
    if (localStorage.getItem('filterOption') === null) {
      localFilterOption = "All";
    } else {
      localFilterOption = JSON.parse(localStorage.getItem('filterOption'));
    }
    setFilterOption(localFilterOption)
  }

  const saveFilterOptionLocally = (option) => {
    localStorage.setItem('filterOption', JSON.stringify(option));
  }
  const handleInputChange = (event) => { 
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
    saveTodosStatusListLocally(todoStatusCopy)
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
    saveTodosStatusListLocally(todoStatusCopy)

  }

  const updateBackgroundMode = () => {
    const oldMode = backgroundMode
    if (oldMode === 'light') {
      setBackgroundMode('dark')
      document.body.classList="dark"
    } 
    else {
        setBackgroundMode('light')
        document.body.classList="light"
    }
  }

  const getByDisplayValue = (todoStatus) => {
    if ( filterOption==='Completed' && /\bcomplete\b/.test(todoStatus)) {
      return ""
   }
   else if ( filterOption==='Uncompleted' && /\buncomplete\b/.test(todoStatus)) {
      return ""
   }
   else if ( filterOption==='All'){
    return ""
  }
  else {
    return "none"
  }
  }

  const getTodoListDivs = () => {
    return todoList.map((todo, index) => 
      <div style={{display: getByDisplayValue(todoStatusList[index])}} className={"todo " + todoStatusList[index]} data-testid='todo' key={index.toString() + '-div'}>
        <li className="todo-item" key={index.toString() + '-li'}>{todo}</li>
        <button className="complete-btn" data-testid="todo-complete-button" key={index.toString() + '-completeButton'} onClick={() => updateTodoStatus(index)}><i className="fas fa-check"></i></button>
        <button className="trash-btn" data-testid="todo-delete-button" key={index.toString() + '-button'} onClick={() => deleteTodo(index)}><i className="fas fa-trash"></i></button>
      </div>
    )
  }

  const handleFilter = (event) => {
    setFilterOption(event.target.value)
    saveFilterOptionLocally(event.target.value)
    
  }

  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])
  const [todoStatusList, setTodoStatusList] = useState([])
  const [filterOption, setFilterOption]= useState('All')
  const [backgroundMode, setBackgroundMode] = useState("light")
  useEffect(fetchSavedTodos, [])
  useEffect(fetchSavedTodosStatus, [])
  useEffect(fetchFilterOption, [])

  return (
    <>
      <button className="select_colour" data-testid='dark-light-mode-button' onClick={updateBackgroundMode}>
        <i className="fa-solid fa-cloud-sun"></i>
      </button>
    <div className="App">
      <header> <h1>My Todo List</h1></header>
    </div>
    <form onSubmit={handleSubmit}>
      <input data-testid='todo-input-box' value={inputValue} onChange={handleInputChange} />
      <button data-testid='add-todo-button'>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
      <select data-testid='filter-menu' value={filterOption} onChange={handleFilter}>
        <option>All</option>
        <option>Completed</option>
        <option>Uncompleted</option>
      </select>
      </div>
    </form>
    <div className="todo-container">
      <ul className="todo-list" data-testid='todo-list'>
        {
          getTodoListDivs()
        }
      </ul>
    </div>
    </>
  );
}
export default App;



