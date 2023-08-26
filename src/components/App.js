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

  function onTaskFormSubmit(newTask) {
    const updatedTodos = [...todos, newTask];
    setTodos(updatedTodos);
  }

  function OnDeleteTask(text) {
    const updatedTodos = todos.filter(todo => todo.text !== text)
    setTodos(updatedTodos)

  }

  const todosToDisplay = todos.filter((todo => {
    if (selectedCategory === "All") return true;

    return todo.category === selectedCategory;
  }))

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleSelection={handleSelection} categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={todosToDisplay} OnDeleteTask={OnDeleteTask} />
    </div>
  );
}

export default App;
