import styles from "./todoitem.module.css"
function Todoitem({task, date}){
    
    return <div className="container ">
        <div className={`${styles["kg-row"]} row`}>
          <div className="col-6"> {task }</div>
          <div className="col-4"> {date}</div>
          <div className="col-2"><button type="button" className={`${styles["kg-Button"]} btn btn-danger`}>Delete </button>
        </div>
      </div>
      </div>
}
export default Todoitem;
