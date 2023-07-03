import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
  const [lists, setLists] = useState([]);

  // useEffect(() => {
  //   console.log(lists);
  // }, [lists]);

  // const addList = (list) => {
  //   setLists((prevList) => [
  //     ...prevList,
  //     { id: uuidv4(), task: list, completed: false, isEditing: false },
  //   ]);
  // };

  const addList = (list) => {
    setLists([
      ...lists,
      { id: uuidv4(), task: list, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, completed: !list.completed } : list
      )
    );
  };

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const editList = (id) => {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, isEditing: !list.isEditing } : list
      )
    );
  };

  const editTask = (task, id) => {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, task, isEditing: !list.isEditing } : list
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addList={addList} />
      {lists.map((list) =>
        list.isEditing ? (
          <EditTodoForm task={list} editList={editTask} />
        ) : (
          <Todo
            key={list.id}
            task={list}
            deleteList={deleteList}
            editList={editList}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;

// const ListLocalStorage = () => {
//   const [lists, setLists] = useState([]);

//   useEffect(() => {
//     const saveLists = JSON.parse(localStorage.getItem("lists")) || [];
//     setLists(saveLists);
//   }, []);

//   const addList = (list) => {
//     const newList = [
//       ...lists,
//       { id: uuidv4(), task: list, completed: false, isEditing: false },
//     ];
//     setLists(newList);
//     localStorage.setItem("lists", JSON.stringify(newList));
//   };

//   const toggleComplete = (id) => {
//     const newList = lists.map((list) =>
//       list.id === id ? { ...list, completed: !list.completed } : list
//     );
//     setLists(newList);
//     localStorage.setItem("lists", JSON.stringify(newList));
//   };

//   const deleteList = (id) => {
//     const newList = lists.filter((list) => list.id !== id);
//     setLists(newList);
//     localStorage.setItem("lists", JSON.stringify(newList));
//   };

//   const editTask = (id) => {
//     const newList = lists.map((list) =>
//       list.id === id ? { ...list, isEditing: !list.isEditing } : list
//     );
//     setLists(newList);
//     localStorage.setItem("lists", JSON.stringify(newList));
//   };

//   return (
//     <div>
//       <TodoForm addList={addList} />
//       {lists.map((list) =>
//         list.isEditing ? (
//           <EditTodoForm task={list} editList={editTask} />
//         ) : (
//           <Todo
//             key={list.id}
//             task={list}
//             deleteList={deleteList}
//             editList={editTask}
//             toggleComplete={toggleComplete}
//           />
//         )
//       )}
//     </div>
//   );
// };

// export default ListLocalStorage;
