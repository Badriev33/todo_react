import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Todolist} from './Todolist'
import { TaskType } from './Todolist';



export type FilterValuesType = "all" | "complited" | "active"

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: 'CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Redux', isDone: false }
  ])

  let [filter, setFilter] = useState<FilterValuesType>("all")

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(v => v.id != id)
    setTasks(filteredTasks)
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value)
  }

  let tasksForTodolist = tasks

  if(filter == 'complited') {
    tasksForTodolist = tasks.filter(t => t.isDone == true)
  }

  if(filter == 'active') {
    tasksForTodolist = tasks.filter(t => t.isDone == false)
  }

  return (
    <div className="App">
      <Todolist tasks={tasksForTodolist} 
                title="my first to-do list"
                removeTask={removeTask}   
                changeFilter={changeFilter}       
      ></Todolist>
    </div>
  );
}



export default App;
