import React, {useState, ChangeEvent, KeyboardEvent, ChangeEventHandler} from "react";
import {FilterValuesType} from './App' 
import { error } from "console";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: String,
    tasks: Array<TaskType>,
    removeTask: (id: string) => void,
    changeFilter: (value: FilterValuesType) => void,        
    addTask: (title: string) => void,
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

  let [newTaskTitle, setNewTaskTitle] = useState("")
  let [error, setError] = useState<string | null>(null)


  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode == 13) {
      props.addTask(newTaskTitle)
      setNewTaskTitle('')
    }
  }

  const addTask = () => {
    if (newTaskTitle.trim() !== '') {
      props.addTask(newTaskTitle)
      setNewTaskTitle('')
    } else {
      setError('Title is recquired')
    }
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
            onKeyPress={onKeyPressHandler}
            className={error ? "error" : ""}
          />
          <button onClick={addTask}>+</button>

          {error &&<div className="error-message">{error}</div>}
        </div>
  
        <ul>
          {
            props.tasks.map(task => {
              const onRemoveHandler = () => props.removeTask(task.id)
              //const onChangeHandler = (taskId: string) => props.changeStatus(taskId)
              const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                console.log(task.id + e.currentTarget.checked);
                props.changeTaskStatus(task.id, e.currentTarget.checked)
                
              }
              return <li className={task.isDone ? 'is-done' : ''} key={task.id}><input onChange={onChangeHandler} type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <button onClick={onRemoveHandler}>x</button>
              </li>
            })
          }
        </ul>
        <div>
          <button className={props.filter === 'all' ? "active-filter" : ''} onClick={onAllClickHandler}>All</button>
          <button className={props.filter === 'active' ? "active-filter" : ''} onClick={onAllActiveHandler}>Active</button>
          <button className={props.filter === 'complited' ? "active-filter" : ''}  onClick={onAllComplitedHandler}>Complete</button>
        </div>
      </div>
    );
  }

 // export default Todolist;