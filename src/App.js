import React from 'react'
import { useState } from 'react'

function App() {
  const handleSubmit = (event) => { 
    event.preventDefault()
    console.log('submit')
    console.log(event.target.children[0].value)
    const updatedTodolist = [...todoList, event.target.children[0].value]
    setTodoList(updatedTodolist)
    setInputValue('')
    
  }
  const handleChange = (event) => { 
    console.log('change')
    setInputValue(event.target.value)
  }
  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])
  console.log('refresh')
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
      {/* {
        todoList.map((todo, index) => <li key={index}>{todo}</li>)
      } */}
    </ul>
    </>
  );
}

export default App;
