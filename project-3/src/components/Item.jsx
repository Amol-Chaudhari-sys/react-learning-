import styles from "./Item.module.css"
const Items = ({ fooditem }) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{fooditem}</span>
    </li>
  );
};
export default Items;
