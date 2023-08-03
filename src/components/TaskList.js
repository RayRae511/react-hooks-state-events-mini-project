import React from "react";
import Task from "./Task";


function TaskList({tasks, handleDel}) {

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task)=> (
        <Task key={task.text} task={task} handleDelete={handleDel}/>
      ))}
    </div>
  );
}

export default TaskList;
