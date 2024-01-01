import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Todolist} from './Todolist'
function App() {


  let tasks1 = [
    { id: 1, title: 'CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Redux', isDone: false }
  ]

  let arr = useState(tasks1)

  let tasks = arr[0]
  let setTasks = arr[1]

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(v => v.id != id)
    setTasks(filteredTasks)
    
  }

  return (
    <div className="App">
      <Todolist tasks={tasks} 
                title="my first to-do list"
                removeTask={removeTask}          
      ></Todolist>
    </div>
  );
}



export default App;
