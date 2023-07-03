import React, { useState } from "react";

const EditTodoForm = ({ task, editList }) => {
  const [value, setValue] = useState(task.task);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(value);
    editList(value, task.id);
    setValue(""); 
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="edit task.."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        update
      </button>
    </form>
  );
};

export default EditTodoForm;
