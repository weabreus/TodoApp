import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (props.addTodo) {
    props.addTodo({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    } else {
      props.onSubmit(input);
    }

    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={onSubmitHandler}>
      {props.edit ? (
        <>
          <input
            type={"text"}
            placeholder={"Update todo"}
            value={input}
            name={"text"}
            className={"todo-input edit"}
            onChange={handleChange}
          />
          <button className="todo-button edit">Update todo</button>
        </>
      ) : (
        <>
          <div className="input-wrapper">
            <input
              type={"text"}
              placeholder={"Enter todo text"}
              value={input}
              name={"text"}
              className={"todo-input"}
              onChange={handleChange}
            />
            <button className="todo-button">Add todo</button>
          </div>
        </>
      )}
    </form>
  );
};

export default TodoForm;
