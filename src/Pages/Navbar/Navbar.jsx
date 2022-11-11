// import styles from './Navbar.module.css';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={`${styles.nav}`}>
      <nav className={`${styles.item} `}>
        <ul>
          <li className={styles.box} >
            <NavLink to='/profile' exact={true} className={({ isActive }) =>
      isActive ? styles.active : undefined
    }>Profile</NavLink>
            </li>
          <li className={styles.box}>
            <NavLink to='/dialogs' className={({ isActive }) =>
      isActive ? styles.active : undefined
    }>Dialogs</NavLink>
           </li>
          <li className={styles.box}>
            <NavLink to='/news' className={({ isActive }) =>
      isActive ? styles.active : undefined
    }> News</NavLink>
           </li>
          <li className={styles.box}>
            <NavLink to='/music' className={({ isActive }) =>
      isActive ? styles.active : undefined
    }> Music</NavLink>
           </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
