import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Todolist} from './Todolist'
import { TaskType } from './Todolist';
import { v1 } from 'uuid';



export type FilterValuesType = "all" | "complited" | "active"

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: 'CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'React', isDone: false },
    { id: v1(), title: 'Redux', isDone: false }
  ])

  let [filter, setFilter] = useState<FilterValuesType>("all")

  function removeTask(id: string) {
    let filteredTasks = tasks.filter(v => v.id != id)
    setTasks(filteredTasks)
  }

  function addTask(title: string) {
    let newTask = [{id: v1(), title: title, isDone: false}, ...tasks]
    setTasks(newTask)
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
                addTask={addTask}    
      ></Todolist>
    </div>
  );
}



export default App;
