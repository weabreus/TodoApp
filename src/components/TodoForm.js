import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.addTodo({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={onSubmitHandler}>
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
    </form>
  );
}

export default TodoForm;
