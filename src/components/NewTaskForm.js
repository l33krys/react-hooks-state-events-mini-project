import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [text, setText] = useState("")
  const [formCat, setFormCat] = useState("Code")
  
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={formCat} onChange={(e) => setFormCat(e.target.value)}>
          {/* render <option> elements for each category here */}
        {categories.slice(1).map((category) => (
          <option key={category}>{category}</option>
        ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
