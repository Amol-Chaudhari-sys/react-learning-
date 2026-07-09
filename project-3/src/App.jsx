import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./components/Fooditems";
import EmptyMessage from "./components/EmptyMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";


function App() {
  
  //let fooditems = ["Dal", "chapati", "Roti", "Milk", "vegitable", "Salad", "Ghee", "Biryani"];

  // let statesfunctions = useState("this is tsxt to show ");
  // let previoustext = statesfunctions[0];
  // let settextstate = statesfunctions[1];

  // or

  let [previoustext , settextstate] = useState("this is list of food ")

  let [fooditems , setnewitems ] = useState(["Dal", "chapati", "Roti", "Milk"])

  // let textToShow = "this is food iten search "

  
  //let fooditems = [];
  // const handleOnChange =(event)=>{
  //       console.log(event.target.value)
  //       settextstate(event.target.value)

  //   }

  const handleOnChange =(event)=>{
    if (event.key ==="Enter"){
      let newfooditem =  event.target.value
      let newitems = [...fooditems , newfooditem]
      setnewitems (newitems)
      console.log(event.target.value)
    }
    }


  return (
    <Container>
      <h1 className="food-heading"> Healthy Food </h1>
      <EmptyMessage items = {fooditems}></EmptyMessage>

      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      {/* <p>{previoustext}</p> */}
      <Fooditems items = {fooditems}></Fooditems>
    </Container>
  );
}

export default App;
