import styles from "./Todoitems.module.css";
import Todoitem from "./todoitem";
import Additem from "./addtodo";
function Todoitems({ todolist , addtask , deleteTask}) {
  
  return (
    <div className={styles["items-container"]}>
      <div className={styles["items-container"]}>
        <Additem addtask ={addtask} ></Additem>

         
        {todolist.map((todo) => (
        <Todoitem key={todo.task} task={todo.task} date={todo.date} deleteTask={deleteTask}></Todoitem>
         
      ))}
      </div>
      
    </div>
  );
}
export default Todoitems;
