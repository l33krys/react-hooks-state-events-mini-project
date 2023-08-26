import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [todos, setTodos] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleSelection(e) {
    setSelectedCategory(e.target.textContent)
  }

  function onTaskFormSubmit(e) {
    e.preventDefault()
    const newTask = {
      text: e.target.text.value,
      category: e.target.category.value
    }
    const updatedTodos = [...todos, newTask];
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleSelection={handleSelection} categories={categories} setCategories={setCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList todos={todos} setTodos={setTodos} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
