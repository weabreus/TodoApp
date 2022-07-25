import React, { useReducer } from "react";
import TodoForm from "./TodoForm";
import reducer from "../services/reducers/reducer";
import Todo from "./Todo";

const initialState = {
  items: [],
};

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    dispatch({
      type: "set_items",
      payload: {
        items: { id: Math.floor(Math.random() * 10000), text: todo.text, isComplete: false },
      },
    });
  };

  const updateTodo = (id, newValue) => {
    console.log(id, newValue)
    if (!newValue || /^\s*$/.test(newValue)) {
      return;
    }
    
    dispatch({
      type: "update_items",
      payload: {
        items: state.items.map((item) => {
          if (item.id === id) {
            item.text = newValue
            return item
          } else {
            return item
          }
        })
      }
    })
  }

  const removeTodo = (id) => {
    
    let removeArr = [...state.items].filter((item) => item.id !== id)

    dispatch({
      type: "remove_item",
      payload: {
        items: removeArr
      }
    })
  }

  const completeTodo = (id) => {
    let updatedTodos = state.items.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      
      return todo
    })

    dispatch({
      type: "update_items",
      payload: {
        items: updatedTodos
      }
    })
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <Todo todos={state.items} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </>
  );
};

export default TodoList;