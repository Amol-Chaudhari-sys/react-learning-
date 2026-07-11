import styles from "./Buttons.module.css";
const Buttons = ({ buttonList , onButtonClick}) => {
  return (
    <div className={styles["number_container"]}>
      {buttonList.map((item) => (
        <button key={item} className={styles["butten"]} onClick={()=>{onButtonClick(item)}}>
          
          {item}
        </button>
      ))}

      
    </div>
  );
};
export default Buttons;
