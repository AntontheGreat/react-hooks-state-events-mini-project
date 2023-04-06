import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ TASKS, CATEGORIES });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filterCategory, setFilterCategory] = useState("");

  function onTaskFormSubmit(newTask) {
    const newTasksArray = [...tasks, newTask]
    setTasks(newTasksArray)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterCategory={filterCategory} setFilterCategory={setFilterCategory}  />
      <NewTaskForm categories={CATEGORIES} tasks={tasks} setTasks={setTasks} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} setTasks={setTasks} filterCategory={filterCategory} />
    </div>
  );
}

export default App;
