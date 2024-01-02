import React, {useState, ChangeEvent, KeyboardEvent} from "react";
import {FilterValuesType} from './App' 

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: String,
    tasks: Array<TaskType>,
    removeTask: (id: string) => void,
    changeFilter: (value: FilterValuesType) => void        
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

  let [newTaskTitle, setNewTaskTitle] = useState("")

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode == 13) {
      props.addTask(newTaskTitle)
      setNewTaskTitle('')
    }
  }

  const addTask = () => {
    props.addTask(newTaskTitle)
    setNewTaskTitle('')
  }

  const onAllClickHandler = () => props.changeFilter('all')
  const onAllActiveHandler = () => props.changeFilter('active')
  const onAllComplitedHandler = () => props.changeFilter('complited')

    return (
      <div>
        {newTaskTitle}
        <h3>{props.title}</h3>
        <div>
          <input 
            value={newTaskTitle} 
            onChange={onNewTitleChangeHandler}
            onKeyPress={(e)=>{
              onKeyPressHandler(e)
            }}
          />
          <button onClick={addTask}>+</button>
        </div>
  
        <ul>
          {
            props.tasks.map(task => {
              const onRemoveHandler = () => props.removeTask(task.id)
              
              return <li key={task.id}><input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <button onClick={onRemoveHandler}>x</button>
              </li>
            })
          }
        </ul>
        <div>
          <button onClick={onAllClickHandler}>All</button>
          <button onClick={onAllActiveHandler}>Active</button>
          <button onClick={onAllComplitedHandler}>Complete</button>
        </div>
      </div>
    );
  }

 // export default Todolist;