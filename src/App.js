function App() {
  return (
    <>
    <button data-testid='dark-light-mode-button'>
    </button>
    <div className="App">
      <header>My Todo List</header>
    </div>
    <input data-testid='todo-input-box'></input>
    <button data-testid='add-todo-button'>
    </button>
    <select data-testid='filter-menu'>
      <option>All</option>
      <option>Completed</option>
      <option>Uncompleted</option>
    </select>
    <ul data-testid='todo-list'></ul>
    </>
  );
}

export default App;
