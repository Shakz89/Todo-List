import { click } from "@testing-library/user-event/dist/click";
import { type } from "os";
import React, { useState } from "react";
import { FilterValuesType } from "../App";
import "./Todoliststyle.css";

export type TaskType={
  id: string
  title: string
  isDone: boolean
}

type PropsType ={
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title:string)=> void
}

export function TodoList( props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");
   return (
     <div>
       <h1>My Todo List</h1>
       <h2>{props.title}</h2>
         <div>
           <input value={newTaskTitle}
                  onChange={(e)=>{ 
            setNewTaskTitle(e.currentTarget.value) 
            }}
                  onKeyPress={(e)=>{ 
                    if (e.charCode === 13) {
                      props.addTask(newTaskTitle);
                            setNewTaskTitle("");
                    }
                   }}
             />
           <button onClick={()=>{ 
            props.addTask(newTaskTitle);
                  setNewTaskTitle("");
            }}>+</button>
         </div>
         <ul>
          {
            props.tasks.map ( t => <li key={t.id}>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <button className="delete" onClick={ (e)=>{ props.removeTask(t.id) } }>Delete</button>
              </li>)
          }
         </ul> 
         <div>
           <button onClick={ (e) => { props.changeFilter ("all") } }>All</button>
           <button onClick={ (e) => { props.changeFilter ("active") } }>Active</button>
           <button onClick={ (e) => { props.changeFilter ("completed") } }>Completed</button> 
         </div>
     </div>
   )
 }

 