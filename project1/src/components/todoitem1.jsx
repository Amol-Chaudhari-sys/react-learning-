function Todoitem1(){
    let task = "buy Milk"
    let Date = "07/08/2026"
    return <div className="container ">
        <div className="row kg-row">
          <div className="col-6"> {task }</div>
          <div className="col-4"> {Date}</div>
          <div className="col-2"><button type="button" className="btn btn-danger kg-Button">Delete </button>
        </div>
      </div>
      </div>
}
export default Todoitem1;
