import { useState, useEffect } from "react"

const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos): [];
  });


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const handleAdd = () => {
    if(todo.trim()) {
      setTodos([...todos, todo.trim()]);
      setTodo("");
    }
  }

  const handleDelete = (index) => {
    const udateTodos = todos.filter((_, i) => i !== index);
    setTodos(udateTodos);
  }


  return (
    <>
     <div className="todo-app">
        <h1>Todo App</h1>
        <div className="todo-input">
          <input type="text"
          value={todo}
            placeholder='Addd a new task'
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((task, index) => (
            <li key={index} className="todo-item">
              {task}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
    </div> 
    </>
  )
}

export default App
