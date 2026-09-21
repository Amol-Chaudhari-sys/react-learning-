import Appname from "./components/Appname";
import Additem from "./components/addtodo";
import Todoitems from "./components/todoitems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
   let todolists = [
    { task: "buy Milk", date: "07/08/2026" },
    { task: "Go to school", date: "08/08/2026" },
    { task: "complete task", date: "09/08/2026" },
    { task: "back to home ", date: "10/08/2026" },
  ];
  const [tasks , settask ]= useState( [])

  const addtask =(addtask , adddate  )=>{
  let obj = {task : addtask, date: adddate}; 
  const  newtask = [...tasks ,obj];
  settask(newtask)
  
  }

  const deleteTask =(Taskname)=>{
    let newtask = tasks.filter(task =>task.task !== Taskname )
    settask(newtask)
  }

  return (<>
      <Appname />
      {tasks.length===0  &&<WelcomeMessage ></WelcomeMessage>}
      <Todoitems todolist={tasks} addtask = {addtask} deleteTask = {deleteTask} ></Todoitems>
    </>
  );
}

export default App;
