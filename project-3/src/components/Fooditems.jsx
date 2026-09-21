import { useState } from "react";
import Items from "./Item";

const Fooditems = (props ) => {
    let {items} = props;
    let [activeItem , setActiveItem ]= useState([])
    const activeButton =(item , event)=>{
      let newActiveItem = [...activeItem , item]
      setActiveItem (newActiveItem)

    };


  
  return (<><ul className="list-group">
        {items.map((item) => (
            <Items key={item} fooditem= {item} bought = {activeItem.includes(item)} handleBuyButton={(event)=> activeButton(item ,event)}></Items>
        ))}
      </ul>
      </>  
  );
};
export default Fooditems;
