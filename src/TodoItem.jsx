function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span>{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    );
  }
  
  export default TodoItem;
  