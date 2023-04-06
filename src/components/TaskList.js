import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks, filterCategory }) {

  const filteredTask = tasks.filter((task) => {
    if (task.category === filterCategory || filterCategory === "All") {
      return true
    }
      return false
  })

  const taskElements = filteredTask.map((task, index) => {
    return <Task key={index} task={task} handleDelete={handleDelete} />
  })

  function handleDelete(index) {
    const deletedTask = tasks.filter((task) => task !== index);
    setTasks(deletedTask);
  }

  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
