import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import EmptyMessage from "./components/EmptyMessage";

function App() {
  const [count, setCount] = useState(0);

  let fooditems = ["Dal", "chapati", "Roti", "Milk", "vegitable", "Salad", "Ghee", "Biryani"];
  //let fooditems = [];

  return (
    <>
      <h1> Healthy Food </h1>
      <EmptyMessage items = {fooditems}></EmptyMessage>
      <Fooditems items = {fooditems}></Fooditems>
    </>
  );
}

export default App;
