import styles from "./Buttons.module.css";
const Buttons = ({ buttonList }) => {
  return (
    <div className={styles["number_container"]}>
      {buttonList.map((item) => (
        <button key={item} className={styles["butten"]}>
          {item}
        </button>
      ))}

      
    </div>
  );
};
export default Buttons;
