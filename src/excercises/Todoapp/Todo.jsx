import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  const addOrUpdateTask = () => {
    if (!task.trim()) return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: task } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    }
    setTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTask = (id, text) => {
    setTask(text);
    setEditId(id);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Todo App</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addOrUpdateTask}>{editId ? "Update" : "Add"}</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
            <button onClick={() => toggleComplete(todo.id)}>✔</button>
            <button onClick={() => editTask(todo.id, todo.text)}>✏</button>
            <button onClick={() => deleteTask(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
