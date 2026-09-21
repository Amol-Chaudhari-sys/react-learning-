import styles from "./Display.module.css";
const Display = ({calval}) =>{
    return <>
    <h2>Calcio</h2>
    <input className={styles['calculater_display']} type="textbox"  value={calval} readOnly/>
    </>
};
export default Display;