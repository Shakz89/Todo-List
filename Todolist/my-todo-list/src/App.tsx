import React, { useState } from "react";
import { v1 } from "uuid";
import "./App.css";
import {TaskType, TodoList} from './Components/Todolist'

export type FilterValuesType = "all" | "completed" | "active"

function App() {
  let [tasks, setTasks] = useState([
    {id: v1(), title: "Dima", isDone: false},
    {id: v1(), title: "Vania", isDone: true},
    {id: v1(), title: "Sveta", isDone: true},
    {id: v1(), title: "Alexi", isDone: true},
    {id: v1(), title: "Valentina", isDone: false}
  ]);
  console.log(tasks);

  let [filter, setfilter] = useState("all");

  function addTask (title: string){
    let newTask = {
      id: v1(), 
      title: title, 
      isDone: false
    };
    let newTasks = [newTask, ...tasks];
    setTasks (newTasks);
  }

  function removeTask(id:string) {
    let filteredTasks = tasks.filter (t => t.id !== id)
    setTasks(filteredTasks);
  }
  function changeFilter(value:FilterValuesType) {
    setfilter(value);
  }

  let tasksForTodolist = tasks;
  if (filter === "completed"){
    tasksForTodolist = tasks.filter (t => t.isDone === true);
  }
  if (filter === "active"){
    tasksForTodolist = tasks.filter (t => t.isDone === false);
  }
  return (
    <div className="App">
      <TodoList title='Whot to learn' 
      tasks={tasksForTodolist}
      removeTask={removeTask} 
      changeFilter={changeFilter}
      addTask={addTask}
      />
    </div>
  );
}

export default App;

