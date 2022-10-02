import React from 'react'
import { useState } from 'react'

function App() {
  const handleSubmit = (event) => { 
    event.preventDefault()
    const updatedTodolist = [event.target.children[0].value, ...todoList]
    setTodoList(updatedTodolist)
    setInputValue('')
    
  }
  const handleChange = (event) => { 
    setInputValue(event.target.value)
  }
  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])
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
        todoList.map((todo, index) => <li key={index}>{todo}</li>)
      }
    </ul>


    </>
  );
}

export default App;

// Good article for localstorage implementation
//  https://javascript.plainenglish.io/testing-local-storage-with-testing-library-580f74e8805b
