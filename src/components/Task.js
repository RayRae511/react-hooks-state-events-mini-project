import React from "react";

function Task({task, handleDelete}) {
  function handleDel(){
    handleDel(task)
  }
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDel}>X</button>
    </div>
  );
}

export default Task;
