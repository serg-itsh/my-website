import styles from "./Dialogs.module.css"

const Dialogs = (props)=>{
    return (
        <div className={styles.dialogs}>
            {/* <h2>Dialogs</h2> */}
            <div className={styles.dialogsItems}>
                <ul>
                    <li className={styles.items}>Vova</li>
                    <li className={styles.items}>Anya</li>
                    <li className={styles.items}>Serg</li>
                    <li className={styles.items}>Bob</li>
                    <li className={styles.items}>Tom</li>
                </ul>
            </div>
            <div>
                <div className={styles.message}>Hi!</div>
                <div className={styles.message}>How a your?</div>
                <div className={styles.message}>Yo</div>
            </div>
        </div>
    )
}

export default  Dialogs;