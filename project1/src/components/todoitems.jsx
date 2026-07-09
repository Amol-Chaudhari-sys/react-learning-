import styles from "./Todoitems.module.css";
import Todoitem from "./todoitem";
import Additem from "./addtodo";
function Todoitems({ todolist }) {
  return (
    <div className={styles["items-container"]}>
      <div className={styles["items-container"]}>
        <Additem />
        {todolist.map((todo) => (
        <Todoitem key={todo.task} task={todo.task} date={todo.date}></Todoitem>
      ))}
      </div>
      
    </div>
  );
}
export default Todoitems;
