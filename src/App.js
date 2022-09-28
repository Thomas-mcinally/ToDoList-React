function App() {
  return (
    <>
    <button data-testid='dark-light-mode-button'>
    </button>
    <div className="App">
      <header>My Todo List</header>
    </div>
    <input data-testid='todo-input-box'></input>
    <select data-testid='filter-menu'>
      <option>All</option>
      <option>Completed</option>
      <option>Uncompleted</option>
    </select>
    </>
  );
}

export default App;
