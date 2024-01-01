import React from "react";

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: String,
    tasks: Array<TaskType>,
    removeTask: Function          
    
}

export function Todolist(props: PropsType) {
    return (
      <div>
        <h3>{props.title}</h3>
        <div>
          <input type="text" />
          <button>+</button>
        </div>
  
        <ul>
          {
            props.tasks.map(task => 
              <li><input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <button onClick={() => {
                  props.removeTask(task.id)
                }}>x</button>
              </li>
            )
          }




          {/* <li><input type="checkbox" checked={props.tasks[0].isDone} /><span>{props.tasks[0].title}</span></li>
          <li><input type="checkbox" checked={props.tasks[1].isDone} /><span>{props.tasks[1].title}</span></li>
          <li><input type="checkbox" checked={props.tasks[2].isDone} /><span>{props.tasks[2].title}</span></li>
          <li><input type="checkbox" checked={props.tasks[3].isDone} /><span>{props.tasks[3].title}</span></li> */}
        </ul>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Complete</button>
        </div>
      </div>
    );
  }

 // export default Todolist;