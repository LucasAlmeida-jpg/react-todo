import './App.css'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  }

  return (
    <div>
      <h1>REACT TODO</h1>
      <div>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter your task" />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
              />
              <span>{todo.text}</span>
              <button onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
