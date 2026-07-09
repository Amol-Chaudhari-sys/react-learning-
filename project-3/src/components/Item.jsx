import styles from "./Item.module.css";
const Items = ({ fooditem , handleBuyButton }) => {
//  const buybuttonclick =(event) =>{
//   console.log("The Event is :")
//   console.log(event)
//   console.log(`${fooditem} is clicked `)

//  }
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{fooditem} </span>
      <button className={styles["buy-button"]}  onClick={handleBuyButton}>    
         {/* onClick={(event) =>buybuttonclick(event)} */}
        Buy
         </button>
    </li>
  );
};
export default Items;
