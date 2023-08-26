import React from "react";
import Task from "./Task";


function TaskList({ todos, setTodos, selectedCategory }) {

  function deleteTask(text) {
    const updatedTodos = todos.filter(todo => todo.text !== text)
    setTodos(updatedTodos)

  }

  const todosToDisplay = todos.filter((todo => {
    if (selectedCategory === "All") return true;

    return todo.category === selectedCategory;
  }))

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {todosToDisplay.map((todo, index) => (
        <Task deleteTask={deleteTask} key={todo.text} text={todo.text} category={todo.category} />
      ))}
    </div>
  );
}

export default TaskList;
