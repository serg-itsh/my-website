// import React from 'react';
import styles from './Header.module.css';
// import  './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    // <header  className='header'>
    <header className={styles.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU"
        alt=""
        width={50}
      />
      {/* active-? https://www.google.com/search?q=activeclassname+%D0%BD%D0%B5+%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82&source=lmns&bih=754&biw=1519&hl=ru&sa=X&ved=2ahUKEwjk2bCr2qH7AhVxlosKHY6TDVcQ_AUoAHoECAEQAA#fpstate=ive&vld=cid:adb0ab72,vid:bKbMNUutlPg */}
      <NavLink to="/" 
      exact={true} 
      className={({ isActive }) =>
      isActive ? styles.active : undefined
    } >Home</NavLink>
      <NavLink to="/portfolio" className={({ isActive }) =>
      isActive ? styles.active : undefined
    }>Portfolio</NavLink>
      <NavLink to="/about" className={({ isActive }) =>
      isActive ? styles.active : undefined
    }>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) =>
      isActive ? styles.active : undefined
    }>Contact</NavLink>


    </header>
  );
};

export default Header;
