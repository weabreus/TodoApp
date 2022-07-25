import React, { useEffect, useReducer } from "react";
import reducer from "../services/reducers/reducer";
import TodoForm from "./TodoForm";

const initialState = {
  items: [],
};

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    dispatch({
      type: "set_items",
      payload: {
        items: todo,
      },
    });
  };

  return (
    <>
    <TodoForm addTodo={addTodo}/>
    <ul className="items-container"> 
      {state.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
    </>
  );
}

export default TodoList;
