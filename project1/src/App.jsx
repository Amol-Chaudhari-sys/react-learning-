import Appname from "./components/Appname";
import Additem from "./components/addtodo";
import Todoitems from "./components/todoitems";
import "./App.css";

function App() {
  let todolists = [
    { task: "buy Milk", date: "07/08/2026" },
    { task: "Go to school", date: "08/08/2026" },
    { task: "complete task", date: "09/08/2026" },
    { task: "back to home ", date: "10/08/2026" },
  ];
  return (<>
      <Appname />
      <Todoitems todolist={todolists}></Todoitems>
    </>
  );
}

export default App;
