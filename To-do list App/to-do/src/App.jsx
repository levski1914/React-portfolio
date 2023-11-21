import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [list, setList] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editedText, setEditedText] = useState(""); // New state to store edited text

  const handleAdd = () => {
    if (inputTask.trim() === "") {
      return;
    }

    const newTask = {
      id: Math.random(),
      todo: inputTask,
    };

    setList([...list, newTask]);
    setInputTask("");
  };

  const handleDelete = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const handleEdit = (id, todo) => {
    setEditItemId(id);
    setEditedText(todo); // Store the current text in the input
  };

  const handleSave = (id) => {
    const updatedList = list.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: editedText };
      }
      return todo;
    });
    setList(updatedList);
    setEditItemId(null); // Exit edit mode
  };

  const handleCancelEdit = () => {
    setEditItemId(null); // Exit edit mode
  };

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="Todo">
          <h1>My Todo list</h1>
          <div className="todo-header">
            <input
              type="text"
              value={inputTask}
              onChange={handleInputChange}
              placeholder="New Todo"
              required
            />
            <div className="bt">
              <button id="btn" onClick={handleAdd}>
                Add new task
              </button>
            </div>
          </div>
          <div className="todo-body">
            <h1>Todo List</h1>
            <ul className="list">
              {list.map((todo) => (
                <li key={todo.id} className="item">
                  {editItemId === todo.id ? (
                    <div>
                      <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                      />
                      <button onClick={() => handleSave(todo.id)}>Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </div>
                  ) : (
                    <>
                      {todo.todo}
                      <span
                        className="edit"
                        onClick={() => handleEdit(todo.id, todo.todo)}
                      >
                        Edit
                      </span>
                      <span
                        className="delete"
                        onClick={() => handleDelete(todo.id)}
                      >
                        Delete
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
