// import styles from './Navbar.module.css';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={`${styles.nav}`}>
      <nav className={`${styles.item} `}>
        <ul>
          <li >
            <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
            </li>
          <li>
            <NavLink to='/dialogs'>Dialogs</NavLink>
           </li>
          <li>
            <NavLink to='/news'> News</NavLink>
           </li>
          <li>
            <NavLink to='/music'> Music</NavLink>
           </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
