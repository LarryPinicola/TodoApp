import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdRestoreFromTrash } from "react-icons/md";

const Todo = ({ task, toggleComplete, deleteList, editList }) => {
  // console.log(task);
  return (
    <div className="Todo">
      <h1
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </h1>
      <div className="">
        <MdOutlineModeEditOutline
          className=""
          onClick={() => editList(task.id)}
        />
        <MdRestoreFromTrash className="" onClick={() => deleteList(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
