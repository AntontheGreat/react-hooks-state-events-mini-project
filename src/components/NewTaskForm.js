import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [categorySelected, setCategorySelected] = useState("Code");

  const noAll = categories.filter((category) => {
    if (category === "All") {
      return false;
    }
      return true;
  })

  const selectedElement = noAll.map((category) => {
    return <option key={category} value={category}>{category}</option>
  })

  function formSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: text,
      category: categorySelected,
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={formSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCategorySelected(e.target.value)} >
          {selectedElement}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
