import styles from "./FoodInput.module.css";
function FoodInput({handleOnChange}){
    

    return (<>
        <input type="text" placeholder="Enter food item here " className={styles["FoodInput"]} 
        onKeyDown ={(event)=> handleOnChange(event)}/>
    </>);

};
export default FoodInput;
