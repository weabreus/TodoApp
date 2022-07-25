import React, { useEffect, useReducer } from "react";
import reducer from "../services/reducers/reducer";

const DATA = ["item 1", "item 2", "item 3"];

const initialState = {
  items: [],
};

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "set_items",
      payload: {
        items: DATA,
      },
    });
  }, []);

  return (
    <ul className="items-container">
      {state.items.map((item) => (
        <li key={Math.floor(Math.random() * 10000)}>{item}</li>
      ))}
    </ul>
  );
}

export default TodoList;
