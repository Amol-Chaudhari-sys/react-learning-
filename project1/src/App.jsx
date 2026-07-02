import Appname from "./Appname";
import Additem from "./addtodo";
import Todoitem1 from "./todoitem1";
import Todoitem2 from "./todoitem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Appname />
     
      <div className="items-container">
        <Additem />
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </center>
  );
}

export default App;
