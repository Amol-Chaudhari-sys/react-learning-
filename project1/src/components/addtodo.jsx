import { useState } from "react";
import styles from "./addtodo.module.css";
function Additem({ addtask }) {
    const [todoname , settodoname] = useState('')
    const [tododate , settododate] = useState('')

    const handleTodoname=(event)=>{
      settodoname(event.target.value)  
    }
    const handleTodoDate = (event) =>{
      settododate(event.target.value)
    }
    const hanleOnClick=(event)=>{
      event.preventDefault();
      
      
      addtask(todoname, tododate);
      settododate("")
      settodoname("")

    }

  return (
    <div className="container ">
      
      <form className={`${styles["kg-row"]} row `} onSubmit={(event) => {hanleOnClick(event)}}>
        
        <div className="col-6">
          <input type="text" placeholder="Enter to-do here  " value={todoname} onChange={handleTodoname}/>
        </div>
        <div className="col-4">
          <input type="date" name="taskdate" onChange={handleTodoDate}/>
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={` btn btn-success ${styles["kg-Button"]}`}
            
            // onClick={() => {hanleOnClick()}}
          >
            DO it
          </button>
        </div>
        
      </form >
      
    </div>
  );
}
export default Additem;
