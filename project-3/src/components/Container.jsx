import styles from "./Container.module.css"
function Container (propes){
    return <div className={styles["container"]}>
        {propes.children}

    </div>
};
export default Container;