function Todoitem1(){
    let task = "buy Milk"
    let Date = "07/08/2026"
    return <div class="container ">
        <div class="row kg-row">
          <div class="col-6"> {task }</div>
          <div class="col-4"> {Date}</div>
          <div class="col-2"><button type="button" class="btn btn-danger kg-Button">Delete </button>
        </div>
      </div>
      </div>
}
export default Todoitem1;
