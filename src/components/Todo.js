import React, { useState } from "react";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value)

    setEdit({
        id: null,
        value: ""
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }
  return todos.map((todo, index) => {
    return (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          {/* Delete Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={todo.isComplete ? "delete-icon complete" : "delete-icon"}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              onClick={() => removeTodo(todo.id)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          {/* Edit Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={todo.isComplete ? "edit-icon complete" : "edit-icon"}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => setEdit({id: todo.id, value: todo.text})}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </div>
      </div>
    );
  });
}

export default Todo;