import React, { useState } from "react";

const TodoForm = ({ addList }) => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(value);
    if (value) {
      addList(value);
    }
    setValue("");
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="add new task.."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
