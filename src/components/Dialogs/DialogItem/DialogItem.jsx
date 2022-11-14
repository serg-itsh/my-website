import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";


const DialogItem = props => {
    let path = '/dialogs/' + props.id;
    return (
      <div className={`${styles.active} ${styles.items}`}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    );
  };


export default DialogItem;